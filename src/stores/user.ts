import { create } from "zustand";
import Taro from "@tarojs/taro";
import type { User } from "../types";
import { authService } from "../services/auth";

interface UserState {
  user: User | null;
  token: string;
  loading: boolean;
  login: (code: string, role: string) => Promise<void>;
  logout: () => void;
  checkLogin: () => Promise<void>;
  updateUser: (data: Partial<User>) => void;
}

export const useUserStore = create<UserState>((set, get) => ({
  user: null,
  token: Taro.getStorageSync("auth_token") || "",
  loading: false,

  login: async (code: string, role: string) => {
    set({ loading: true });
    try {
      const res = await authService.login(code, role);
      if (res.ok && (res as any).token) {
        const data = res as any;
        Taro.setStorageSync("auth_token", data.token);
        set({ user: data.user, token: data.token });
      } else {
        throw new Error((res as any).error || "登录失败");
      }
    } finally {
      set({ loading: false });
    }
  },

  logout: () => {
    Taro.removeStorageSync("auth_token");
    set({ user: null, token: "" });
  },

  checkLogin: async () => {
    const token = get().token;
    if (!token) return;

    set({ loading: true });
    try {
      const res = await authService.getProfile();
      if (res.ok && (res as any).user) {
        set({ user: (res as any).user });
      } else {
        get().logout();
      }
    } catch {
      get().logout();
    } finally {
      set({ loading: false });
    }
  },

  updateUser: (data: Partial<User>) => {
    set((state) => ({
      user: state.user ? { ...state.user, ...data } : null,
    }));
  },
}));