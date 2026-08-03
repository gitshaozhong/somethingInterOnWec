import Taro from "@tarojs/taro";

export const BASE_URL = process.env.API_BASE_URL || "http://172.22.14.172:3001/api";

const TOKEN_KEY = "auth_token";

class Request {
  private getToken(): string {
    return Taro.getStorageSync(TOKEN_KEY) || "";
  }

  setToken(token: string): void {
    Taro.setStorageSync(TOKEN_KEY, token);
  }

  clearToken(): void {
    Taro.removeStorageSync(TOKEN_KEY);
  }

  async request<T = unknown>(
    url: string,
    options: {
      method?: "GET" | "POST" | "PUT" | "DELETE";
      data?: Record<string, unknown>;
      header?: Record<string, string>;
      skipAuth?: boolean;
    } = {}
  ): Promise<T> {
    const { method = "GET", data, header = {}, skipAuth = false } = options;

    const token = this.getToken();
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
      ...header,
    };

    if (!skipAuth && token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    try {
      const res = await Taro.request({
        url: `${BASE_URL}${url}`,
        method,
        data,
        header: headers,
      });

      if (res.statusCode === 401) {
        this.clearToken();
        Taro.showToast({ title: "登录已过期，请重新登录", icon: "none" });
        Taro.reLaunch({ url: "/pages/login/login" });
        throw new Error("Unauthorized");
      }

      if (res.statusCode >= 400) {
        const errData = res.data as { error?: string; message?: string };
        const msg = errData?.error || errData?.message || "请求失败";
        throw new Error(msg);
      }

      return res.data as T;
    } catch (err: any) {
      if (err?.message === "Unauthorized") throw err;
      if (err?.errMsg?.includes("request:fail")) {
        throw new Error("网络连接失败，请检查网络");
      }
      throw err;
    }
  }

  get<T = unknown>(url: string, params?: Record<string, unknown>): Promise<T> {
    const query = params
      ? "?" + Object.entries(params)
          .filter(([, v]) => v !== undefined && v !== null)
          .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(String(v))}`)
          .join("&")
      : "";
    return this.request<T>(`${url}${query}`, { method: "GET" });
  }

  post<T = unknown>(url: string, data?: Record<string, unknown>): Promise<T> {
    return this.request<T>(url, { method: "POST", data });
  }

  put<T = unknown>(url: string, data?: Record<string, unknown>): Promise<T> {
    return this.request<T>(url, { method: "PUT", data });
  }

  delete<T = unknown>(url: string): Promise<T> {
    return this.request<T>(url, { method: "DELETE" });
  }
}

const request = new Request();
export default request;