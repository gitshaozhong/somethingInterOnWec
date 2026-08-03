import request from "./request";
import type { Invitation } from "../types";

export const invitationsService = {
  /** 发起邀请 */
  create(data: {
    availabilityId?: string;
    demandId?: string;
    toUserId: string;
    message?: string;
  }) {
    return request.post<{ ok: boolean; invitationId: string }>("/invitations", data);
  },

  /** 我的消息列表 */
  list() {
    return request.get<{ ok: boolean; items: Invitation[] }>("/invitations");
  },

  /** 未读消息数 */
  unreadCount() {
    return request.get<{ ok: boolean; count: number }>("/invitations/unread-count");
  },

  /** 响应邀请 */
  respond(id: string, data: { action: "accept" | "decline"; replyMessage?: string }) {
    return request.put<{ ok: boolean }>(`/invitations/${id}/respond`, data);
  },

  /** 撤回邀请 */
  revoke(id: string) {
    return request.put<{ ok: boolean }>(`/invitations/${id}/revoke`);
  },

  /** 我的订单列表 */
  orders() {
    return request.get<{ ok: boolean; items: Invitation[] }>("/invitations/orders");
  },
};