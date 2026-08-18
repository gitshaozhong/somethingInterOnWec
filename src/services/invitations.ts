import request from "./request";
import type { InvitationItem, OrderItem } from "../types";

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
    return request.get<{ ok: boolean; items: InvitationItem[] }>("/invitations");
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

  /** 确认练球（第二次确认） */
  confirmPractice(id: string) {
    return request.put<{ ok: boolean; bothConfirmed: boolean }>(`/invitations/${id}/confirm-practice`);
  },

  /** 标记所有消息已读 */
  markRead() {
    return request.put<{ ok: boolean }>("/invitations/mark-read");
  },

  /** 我的订单列表 */
  orders() {
    return request.get<{ ok: boolean; items: OrderItem[] }>("/invitations/orders");
  },
};