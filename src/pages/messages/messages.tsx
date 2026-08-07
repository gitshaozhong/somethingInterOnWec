import { View, Text, Button, ScrollView } from "@tarojs/components";
import { useState, useEffect, useCallback } from "react";
import Taro, { useDidShow } from "@tarojs/taro";
import { notificationsService } from "../../services/notifications";
import { useUserStore } from "../../stores/user";
import { useAppStore } from "../../stores/app";
import Loading from "../../components/Loading";
import Empty from "../../components/Empty";
import CustomNav from "../../components/CustomNav/CustomNav";
import type { NotificationItem } from "../../types";
import "./messages.scss";

/** 微信订阅消息模板ID（占位，需在微信后台申请后替换） */
const SUBSCRIBE_TEMPLATE_IDS: string[] = [];

export default function Messages() {
  const { user } = useUserStore();
  const { setUnreadCount } = useAppStore();

  const [systemItems, setSystemItems] = useState<NotificationItem[]>([]);
  const [adItems, setAdItems] = useState<NotificationItem[]>([]);
  const [firstConfirmCount, setFirstConfirmCount] = useState(0);
  const [secondConfirmCount, setSecondConfirmCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [showAnnouncement, setShowAnnouncement] = useState(true);

  const fetchAll = useCallback(async () => {
    if (!user) return;
    setLoading(true);
    try {
      const [systemRes, adRes, firstRes, secondRes, unreadRes] = await Promise.all([
        notificationsService.systemList().catch(() => ({ ok: false, items: [] })),
        notificationsService.adList().catch(() => ({ ok: false, items: [] })),
        notificationsService.firstConfirmList().catch(() => ({ ok: false, items: [] })),
        notificationsService.secondConfirmList().catch(() => ({ ok: false, items: [] })),
        notificationsService.unreadCount().catch(() => ({ ok: false, count: 0 })),
      ]);
      if (systemRes.ok) setSystemItems((systemRes.items as NotificationItem[]) || []);
      if (adRes.ok) setAdItems((adRes.items as NotificationItem[]) || []);
      if (firstRes.ok) setFirstConfirmCount((firstRes.items as unknown[])?.length || 0);
      if (secondRes.ok) setSecondConfirmCount((secondRes.items as unknown[])?.length || 0);
      if (unreadRes.ok) setUnreadCount(unreadRes.count || 0);
    } catch (err) {
      console.error("[messages] 加载失败:", err);
    } finally {
      setLoading(false);
    }
  }, [user, setUnreadCount]);

  useEffect(() => {
    if (user) fetchAll();
  }, [user, fetchAll]);

  useDidShow(() => {
    if (user) fetchAll();
  });

  // 去开启订阅消息授权
  const handleEnableSubscribe = async () => {
    try {
      if (SUBSCRIBE_TEMPLATE_IDS.length === 0) {
        Taro.showModal({
          title: "订阅消息",
          content: "订阅消息模板正在配置中，敬请期待。",
          showCancel: false,
        });
        return;
      }
      await Taro.requestSubscribeMessage({
        tmplIds: SUBSCRIBE_TEMPLATE_IDS,
      } as any);
      Taro.showToast({ title: "订阅成功", icon: "success" });
    } catch (e) {
      // 用户拒绝或取消
    }
  };

  const formatDate = (dateStr: string) => {
    if (!dateStr) return "";
    const d = new Date(dateStr);
    const now = new Date();
    const isSameDay =
      d.getFullYear() === now.getFullYear() &&
      d.getMonth() === now.getMonth() &&
      d.getDate() === now.getDate();
    const hh = String(d.getHours()).padStart(2, "0");
    const mm = String(d.getMinutes()).padStart(2, "0");
    if (isSameDay) return `${hh}:${mm}`;
    return `${d.getMonth() + 1}/${d.getDate()} ${hh}:${mm}`;
  };

  // 未登录空状态
  if (!user) {
    return (
      <View className="page-messages">
        <CustomNav title="消息中心" />
        <View className="login-empty">
          <View className="login-empty-icon">🏸</View>
          <Text className="login-empty-text">登录后体验全部功能</Text>
          <Button
            className="login-btn"
            onClick={() => Taro.navigateTo({ url: "/pages/login/login" })}
          >
            微信一键登录
          </Button>
        </View>
      </View>
    );
  }

  const renderNotificationRow = (item: NotificationItem, kind: "system" | "ad") => {
    const unread = !item.readAt;
    return (
      <View
        key={item.id}
        className={`msg-row ${unread ? "unread" : ""}`}
        onClick={() => {
          Taro.showModal({
            title: item.title,
            content: item.body || "无详细内容",
            showCancel: false,
          });
        }}
      >
        <View className={`msg-row-avatar ${kind === "system" ? "system" : "ad"}`}>
          <Text className="msg-row-avatar-icon">{kind === "system" ? "💬" : "📢"}</Text>
        </View>
        <View className="msg-row-main">
          <View className="msg-row-title-row">
            <Text className="msg-row-title">{item.title}</Text>
            {unread && <View className="msg-row-badge" />}
          </View>
          <Text className="msg-row-preview">{item.body || "暂无内容"}</Text>
        </View>
        <View className="msg-row-meta">
          <Text className="msg-row-time">{formatDate(item.createdAt)}</Text>
          {unread && kind === "system" && (
            <Text className="msg-row-unread-num">新</Text>
          )}
        </View>
      </View>
    );
  };

  return (
    <View className="page-messages">
      {/* 统一自定义导航栏 */}
      <CustomNav title="消息中心" />

      <ScrollView scrollY className="messages-scroll" enhanced showScrollbar={false}>
        {/* 浅橘色公告条 */}
        {showAnnouncement && (
          <View className="announce-bar">
            <Text className="announce-text">开启订阅消息，及时收到订单进展通知</Text>
            <View className="announce-btn" onClick={handleEnableSubscribe}>
              <Text className="announce-btn-text">去开启</Text>
            </View>
            <View className="announce-close" onClick={() => setShowAnnouncement(false)}>
              <Text className="announce-close-icon">✕</Text>
            </View>
          </View>
        )}

        {/* 两个分类卡片 */}
        <View className="category-cards">
          <View
            className="category-card first"
            onClick={() =>
              Taro.navigateTo({ url: "/pages/messages/first-confirm/first-confirm" })
            }
          >
            <View className="category-card-header">
              <Text className="category-card-title">活动订单一次确认</Text>
              {firstConfirmCount > 0 && (
                <View className="category-card-badge">
                  <Text className="category-card-badge-text">{firstConfirmCount}</Text>
                </View>
              )}
            </View>
            <Text className="category-card-preview">
              活动开始前通过第一次确认获得对方联系方式
            </Text>
          </View>

          <View
            className="category-card second"
            onClick={() =>
              Taro.navigateTo({ url: "/pages/messages/second-confirm/second-confirm" })
            }
          >
            <View className="category-card-header">
              <Text className="category-card-title">活动订单二次确认</Text>
              {secondConfirmCount > 0 && (
                <View className="category-card-badge">
                  <Text className="category-card-badge-text">{secondConfirmCount}</Text>
                </View>
              )}
            </View>
            <Text className="category-card-preview">
              第二次确认活动后，双方将正式开展线下活动
            </Text>
          </View>
        </View>

        {/* 系统消息列表 */}
        <View className="section-list">
          {loading ? (
            <Loading />
          ) : systemItems.length === 0 ? (
            <Empty text="暂无系统消息" />
          ) : (
            systemItems.slice(0, 20).map((n) => renderNotificationRow(n, "system"))
          )}
        </View>

        {/* 广告消息分区标题 */}
        <View className="section-divider">
          <Text className="section-divider-text">以下为广告消息</Text>
        </View>

        {/* 广告消息列表 */}
        <View className="section-list">
          {loading ? null : adItems.length === 0 ? (
            <Empty text="暂无广告消息" />
          ) : (
            adItems.slice(0, 20).map((n) => renderNotificationRow(n, "ad"))
          )}
        </View>

        <View className="safe-bottom" />
      </ScrollView>
    </View>
  );
}
