import request from "./request";
import type { MessageCategory, NotificationItem, ConfirmMessageItem } from "../types";

export const notificationsService = {
  /**
   * 消息列表
   * @param category 不传返回所有未读+最近已读；system/ad 走 notifications 表；first_confirm/second_confirm 聚合自 invitations 表
   */
  list(category?: MessageCategory) {
    return request.get<{ ok: boolean; items: NotificationItem[] | ConfirmMessageItem[] }>(
      "/notifications",
      category ? { category } : undefined
    );
  },

  /** 系统消息列表 */
  systemList() {
    return request.get<{ ok: boolean; items: NotificationItem[] }>("/notifications", {
      category: "system",
    });
  },

  /** 广告消息列表 */
  adList() {
    return request.get<{ ok: boolean; items: NotificationItem[] }>("/notifications", {
      category: "ad",
    });
  },

  /** 一次确认消息列表（来自 invitations 表） */
  firstConfirmList() {
    return request.get<{ ok: boolean; items: ConfirmMessageItem[] }>("/notifications", {
      category: "first_confirm",
    });
  },

  /** 二次确认消息列表（来自 invitations 表） */
  secondConfirmList() {
    return request.get<{ ok: boolean; items: ConfirmMessageItem[] }>("/notifications", {
      category: "second_confirm",
    });
  },

  /** 未读消息数 */
  unreadCount() {
    return request.get<{ ok: boolean; count: number }>("/notifications/unread-count");
  },

  /** 标记所有消息已读 */
  markRead() {
    return request.put<{ ok: boolean }>("/notifications/mark-read");
  },
};
