import request from "./request";
import type { Availability, PaginatedResponse } from "../types";

export interface AvailabilityListParams {
  page?: number;
  limit?: number;
  date?: string;
  timeSlot?: string;
  district?: string;
  level?: number;
}

export const availabilitiesService = {
  /** 获取档期列表 */
  list(params: AvailabilityListParams = {}) {
    return request.get<{
      ok: boolean;
      items: Availability[];
      total: number;
      page: number;
      limit: number;
    }>("/availabilities", params as Record<string, unknown>);
  },

  /** 获取档期详情 */
  getById(id: string) {
    return request.get<{ ok: boolean; availability: Availability }>(`/availabilities/${id}`);
  },

  /** 发布档期 */
  create(data: Record<string, unknown>) {
    return request.post<{ ok: boolean; availability: Availability }>("/availabilities", data);
  },

  /** 下架档期 */
  close(id: string) {
    return request.put<{ ok: boolean }>(`/availabilities/${id}/close`);
  },

  /** 我的档期 */
  mine() {
    return request.get<{ ok: boolean; items: Availability[] }>("/availabilities/mine");
  },
};