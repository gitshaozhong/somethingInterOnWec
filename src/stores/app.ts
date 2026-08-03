import { create } from "zustand";

interface AppState {
  systemInfo: Record<string, unknown> | null;
  init: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  systemInfo: null,

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
}));