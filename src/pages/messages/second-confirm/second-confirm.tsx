import { View, Text, Image, ScrollView } from "@tarojs/components";
import { useState, useEffect, useCallback } from "react";
import Taro, { useDidShow } from "@tarojs/taro";
import { invitationsService } from "../../../services/invitations";
import { notificationsService } from "../../../services/notifications";
import { useUserStore } from "../../../stores/user";
import { useAppStore } from "../../../stores/app";
import { ensureSubscribe } from "../../../utils/subscribe";
import Loading from "../../../components/Loading";
import Empty from "../../../components/Empty";
import type { InvitationItem } from "../../../types";
import "./second-confirm.scss";

export default function SecondConfirmPage() {
  const { user } = useUserStore();
  const { setUnreadCount } = useAppStore();
  const [items, setItems] = useState<InvitationItem[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchMessages = useCallback(async () => {
    if (!user) return;
    setLoading(true);
    try {
      const res = await invitationsService.list();
      if (res.ok) {
        // 二次确认：orderStatus = practice_pending
        setItems((res.items || []).filter((i) => i.orderStatus === "practice_pending"));
      }
    } catch (err) {
      console.error("[second-confirm] 获取失败:", err);
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    fetchMessages();
  }, [fetchMessages]);

  useDidShow(() => {
    fetchMessages();
  });

  const formatDate = (dateStr: string | null) => {
    if (!dateStr) return "—";
    const d = new Date(dateStr);
    return `${d.getMonth() + 1}/${d.getDate()} ${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
  };

  const goOrderDetail = (id: string) => {
    Taro.navigateTo({ url: `/pages/order-detail/order-detail?id=${id}` });
  };

  const getMyRole = (item: InvitationItem): "student" | "coach" => {
    const isReceived = item.toUserId === user!.id;
    if (item.availabilityId) {
      return isReceived ? "coach" : "student";
    }
    return isReceived ? "student" : "coach";
  };

  const handleConfirmPractice = async (item: InvitationItem) => {
    try {
      const res = await invitationsService.confirmPractice(item.id);
      if (res.ok) {
        await ensureSubscribe(["practice_confirmed"]);
        Taro.showToast({
          title: res.bothConfirmed ? "双方已确认，订单进行中" : "已确认练球",
          icon: "success",
        });
        fetchMessages();
        try {
          const unreadRes = await notificationsService.unreadCount();
          if (unreadRes.ok) setUnreadCount(unreadRes.count || 0);
        } catch (e) {
          // ignore
        }
      }
    } catch (e: any) {
      Taro.showToast({ title: e?.message || "操作失败", icon: "none" });
    }
  };

  if (!user) {
    return (
      <View className="page-confirm">
        <Empty text="请先登录" />
      </View>
    );
  }

  const renderItem = (item: InvitationItem) => {
    const isReceived = item.toUserId === user.id;
    const peerName = isReceived ? item.fromUserName : item.toUserName;
    const peerAvatar = isReceived ? item.fromUserAvatar : item.toUserAvatar;
    const myRole = getMyRole(item);
    const myConfirmed = myRole === "student" ? item.studentConfirmedAt != null : item.coachConfirmedAt != null;
    const peerConfirmed = myRole === "student" ? item.coachConfirmedAt != null : item.studentConfirmedAt != null;

    return (
      <View key={item.id} className="msg-card">
        <View className="msg-header" onClick={() => goOrderDetail(item.id)}>
          <View className="msg-user-info">
            {peerAvatar ? (
              <Image src={peerAvatar} className="msg-avatar" mode="aspectFill" />
            ) : (
              <View className="msg-avatar msg-avatar-placeholder">
                <Text>{(peerName || "?")[0]}</Text>
              </View>
            )}
            <View className="msg-user-meta">
              <Text className="msg-user-name">{peerName}</Text>
              <Text className="msg-source">{item.sourceTitle}</Text>
              {item.orderNo && <Text className="msg-order-no">{item.orderNo}</Text>}
            </View>
          </View>
          <View className="msg-badge-warn"><Text>待确认练球</Text></View>
        </View>

        {item.peerPhone && (
          <View className="msg-phone-box">
            <Text className="msg-phone-label">对方手机号</Text>
            <Text className="msg-phone">📞 {item.peerPhone}</Text>
          </View>
        )}

        <View className="msg-confirm-status">
          <Text className={myConfirmed ? "confirm-tag done" : "confirm-tag"}>{myConfirmed ? "✓ 我已确认" : "○ 我未确认"}</Text>
          <Text className={peerConfirmed ? "confirm-tag done" : "confirm-tag"}>{peerConfirmed ? "✓ 对方已确认" : "○ 对方未确认"}</Text>
        </View>

        <View className="msg-time-row">
          <Text className="msg-time">同意时间：{formatDate(item.acceptedAt)}</Text>
        </View>

        <View className="msg-footer">
          {!myConfirmed && (
            <View className="respond-btns">
              <View className="respond-btn accept" onClick={() => handleConfirmPractice(item)}>
                <Text>确认练球</Text>
              </View>
            </View>
          )}
          {myConfirmed && !peerConfirmed && (
            <Text className="msg-hint">已确认，等待对方确认练球…</Text>
          )}
        </View>
      </View>
    );
  };

  return (
    <View className="page-confirm">
      <ScrollView scrollY className="confirm-scroll" enhanced showScrollbar={false}>
        {loading ? (
          <Loading />
        ) : items.length === 0 ? (
          <Empty text="暂无第二次确认消息" />
        ) : (
          <View className="list">{items.map(renderItem)}</View>
        )}
        <View className="safe-bottom" />
      </ScrollView>
    </View>
  );
}
