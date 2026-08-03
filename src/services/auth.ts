import request from "./request";
import type { ApiResponse, User } from "../types";

export interface LoginResponse {
  token: string;
  user: User;
}

export const authService = {
  /** 微信登录 */
  login(code: string, role: string, name?: string, avatar?: string): Promise<ApiResponse<LoginResponse>> {
    return request.post<ApiResponse<LoginResponse>>("/auth/wechat-login", { code, role, name, avatar });
  },

  /** 获取当前用户信息 */
  getProfile(): Promise<ApiResponse<User>> {
    return request.get<ApiResponse<User>>("/auth/me");
  },

  /** 更新用户信息 */
  updateProfile(data: Record<string, unknown>): Promise<ApiResponse<{ ok: boolean }>> {
    return request.put<ApiResponse<{ ok: boolean }>>("/auth/profile", data);
  },
};