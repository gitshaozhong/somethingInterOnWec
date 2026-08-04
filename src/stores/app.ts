import { create } from "zustand";

interface AppState {
  systemInfo: Record<string, unknown> | null;
  unreadCount: number;
  init: () => void;
  setUnreadCount: (count: number) => void;
}

export const useAppStore = create<AppState>((set) => ({
  systemInfo: null,
  unreadCount: 0,

  init: () => {
    try {
      const wx = (globalThis as any).wx;
      if (wx?.getSystemInfoSync) {
        const info = wx.getSystemInfoSync();
        set({ systemInfo: info });
      }
    } catch {
      // 非微信环境忽略
    }
  },

  setUnreadCount: (count: number) => set({ unreadCount: Math.max(0, count) }),
}));