import request from "./request";
import type { Demand } from "../types";

export const demandsService = {
  /** 获取需求列表 */
  list(params: Record<string, unknown> = {}) {
    return request.get<{ ok: boolean; items: Demand[]; total: number; page: number; limit: number }>(
      "/demands", params
    );
  },

  /** 获取需求详情 */
  getById(id: string) {
    return request.get<{ ok: boolean; demand: Demand }>(`/demands/${id}`);
  },

  /** 发布需求 */
  create(data: Record<string, unknown>) {
    return request.post<{ ok: boolean; demand: Demand }>("/demands", data);
  },

  /** 关闭需求 */
  close(id: string) {
    return request.put<{ ok: boolean }>(`/demands/${id}/close`);
  },
};