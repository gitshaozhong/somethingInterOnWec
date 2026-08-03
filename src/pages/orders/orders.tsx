import { View, Text, ScrollView } from "@tarojs/components";
import { useState, useEffect } from "react";
import Taro, { useDidShow } from "@tarojs/taro";
import { invitationsService } from "../../services/invitations";
import { useUserStore } from "../../stores/user";
import Loading from "../../components/Loading";
import Empty from "../../components/Empty";
import StatusBadge from "../../components/StatusBadge";
import type { OrderItem } from "../../types";
import "./orders.scss";

const ORDER_TABS = [
  { key: "all", label: "全部" },
  { key: "pending", label: "待确认" },
  { key: "in_progress", label: "进行中" },
  { key: "completed", label: "已完成" },
];

export default function Orders() {
  const { user } = useUserStore();
  const [orders, setOrders] = useState<OrderItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState("all");

  const fetchOrders = async () => {
    setLoading(true);
    try {
      const res = await invitationsService.orders();
      if (res.ok) {
        setOrders(res.items || []);
      }
    } catch (err) {
      console.error("获取订单失败:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchOrders(); }, []);
  useDidShow(() => { fetchOrders(); });

  if (!user) {
    return <View className="page-orders"><Empty text="请先登录" /></View>;
  }

  const filtered = tab === "all"
    ? orders
    : tab === "pending"
      ? orders.filter((o) => o.orderStatus === null && o.status === "accepted")
      : orders.filter((o) => o.orderStatus === tab);

  const orderStatusLabel = (o: OrderItem) => {
    if (o.orderStatus === "completed") return "已完成";
    if (o.orderStatus === "closed") return "已关闭";
    if (o.orderStatus === "in_progress") return "进行中";
    if (o.orderStatus === null && o.status === "accepted") {
      if (o.studentConfirmedAt && o.coachConfirmedAt) return "待练球";
      return "待确认";
    }
    return o.status;
  };

  const orderStatusColor = (o: OrderItem) => {
    if (o.orderStatus === "completed") return "#52c41a";
    if (o.orderStatus === "in_progress") return "#1677ff";
    return "#faad14";
  };

  const formatTime = (s: number | null, e: number | null) => {
    if (s == null || e == null) return "";
    return `${s}:00-${e}:00`;
  };

  const timeLabel = (slot: string) => {
    const map: Record<string, string> = { morning: "上午", afternoon: "下午", evening: "晚上" };
    return map[slot] || "";
  };

  return (
    <View className="page-orders">
      <View className="tab-scroll">
        {ORDER_TABS.map((t) => (
          <View
            key={t.key}
            className={`tab-chip ${tab === t.key ? "active" : ""}`}
            onClick={() => setTab(t.key)}
          >
            <Text>{t.label}</Text>
          </View>
        ))}
      </View>

      {loading ? (
        <Loading />
      ) : filtered.length === 0 ? (
        <Empty text="暂无订单" />
      ) : (
        <ScrollView className="list-scroll" scrollY>
          {filtered.map((order) => (
            <View
              key={order.id}
              className="order-card"
              onClick={() => Taro.navigateTo({ url: `/pages/order-detail/order-detail?id=${order.id}` })}
            >
              <View className="order-header">
                <View className="order-user-info">
                  {order.peerAvatar ? (
                    <View className="order-avatar" style={{ backgroundImage: `url(${order.peerAvatar})` }} />
                  ) : (
                    <View className="order-avatar order-avatar-placeholder">
                      <Text>{(order.peerName || "?")[0]}</Text>
                    </View>
                  )}
                  <View>
                    <Text className="order-peer-name">{order.peerName}</Text>
                    <Text className="order-role-tag">
                      {order.myRole === "student" ? "我是学员" : "我是陪练"}
                    </Text>
                  </View>
                </View>
                <View style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 4 }}>
                  <Text style={{ fontSize: 12, color: orderStatusColor(order), fontWeight: 600 }}>
                    {orderStatusLabel(order)}
                  </Text>
                  {order.orderNo && (
                    <Text className="order-no-text">{order.orderNo}</Text>
                  )}
                </View>
              </View>

              <View className="order-body">
                <View className="order-info-row">
                  <Text className="order-info-label">日期</Text>
                  <Text className="order-info-value">{order.playDate || "待定"}</Text>
                </View>
                <View className="order-info-row">
                  <Text className="order-info-label">时间</Text>
                  <Text className="order-info-value">{formatTime(order.startHour, order.endHour)}</Text>
                </View>
                <View className="order-info-row">
                  <Text className="order-info-label">来源</Text>
                  <Text className="order-info-value">{order.sourceTitle}</Text>
                </View>
              </View>

              {order.checkIn && (
                <View className="order-checkin">
                  <Text className={`checkin-badge ${order.checkIn.validCheckIn ? "valid" : "invalid"}`}>
                    {order.checkIn.validCheckIn ? "已打卡" : "无效打卡"}
                  </Text>
                </View>
              )}

              {order.orderStatus === "completed" && (
                <View className="order-review-status">
                  <Text className="review-tag">
                    {order.myReviewDone ? "已评价" : "待评价"}
                  </Text>
                </View>
              )}
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
}