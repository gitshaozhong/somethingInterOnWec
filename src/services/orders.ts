import request from "./request";

export const ordersService = {
  /** 确认练球 */
  confirmPractice(id: string) {
    return request.post<{ ok: boolean }>(`/orders/${id}/confirm-practice`);
  },

  /** 陪练打卡 */
  checkin(id: string, data: { startPhoto: string; startGpsLat: number; startGpsLng: number }) {
    return request.post<{ ok: boolean; checkInId: string; validCheckIn: boolean }>(
      `/orders/${id}/checkin`, data
    );
  },

  /** 学员确认完成 */
  studentComplete(id: string) {
    return request.post<{ ok: boolean }>(`/orders/${id}/student-complete`);
  },

  /** 教练确认完成 */
  coachComplete(id: string) {
    return request.post<{ ok: boolean }>(`/orders/${id}/coach-complete`);
  },

  /** 创建评价 */
  review(id: string, data: { checkInId?: string; rating: number; tags?: string[]; comment?: string }) {
    return request.post<{ ok: boolean }>(`/orders/${id}/review`, data);
  },
};