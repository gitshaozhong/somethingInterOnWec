import { View, Text, Image, Textarea, Button } from "@tarojs/components";
import { useState, useEffect } from "react";
import Taro, { useDidShow } from "@tarojs/taro";
import { invitationsService } from "../../services/invitations";
import { useUserStore } from "../../stores/user";
import Loading from "../../components/Loading";
import Empty from "../../components/Empty";
import StatusBadge from "../../components/StatusBadge";
import type { InvitationItem } from "../../types";
import "./messages.scss";

export default function Messages() {
  const { user } = useUserStore();
  const [items, setItems] = useState<InvitationItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState<"received" | "sent">("received");

  // 响应弹窗
  const [showRespond, setShowRespond] = useState(false);
  const [respondInvId, setRespondInvId] = useState("");
  const [respondAction, setRespondAction] = useState<"accept" | "decline">("accept");
  const [replyMessage, setReplyMessage] = useState("");
  const [respondLoading, setRespondLoading] = useState(false);

  const fetchMessages = async () => {
    setLoading(true);
    try {
      const res = await invitationsService.list();
      if (res.ok) {
        setItems(res.items || []);
      }
    } catch (err) {
      console.error("获取消息失败:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchMessages(); }, []);
  useDidShow(() => { fetchMessages(); });

  if (!user) {
    return (
      <View className="page-messages">
        <Empty text="请先登录" />
      </View>
    );
  }

  const received = items.filter((i) => i.toUserId === user.id);
  const sent = items.filter((i) => i.fromUserId === user.id);

  const currentList = tab === "received" ? received : sent;

  const timeLabel = (slot: string) => {
    const map: Record<string, string> = { morning: "上午", afternoon: "下午", evening: "晚上" };
    return map[slot] || "";
  };

  const formatDate = (dateStr: string) => {
    if (!dateStr) return "";
    const d = new Date(dateStr);
    const now = new Date();
    const diff = now.getTime() - d.getTime();
    if (diff < 60 * 1000) return "刚刚";
    if (diff < 60 * 60 * 1000) return `${Math.floor(diff / 60000)}分钟前`;
    if (diff < 24 * 60 * 60 * 1000) return `${Math.floor(diff / 3600000)}小时前`;
    return `${d.getMonth() + 1}/${d.getDate()}`;
  };

  const goOrderDetail = (id: string) => {
    Taro.navigateTo({ url: `/pages/order-detail/order-detail?id=${id}` });
  };

  const showRealAvatar = (item: InvitationItem) => {
    if (item.orderStatus === "completed" || item.orderStatus === "closed") return false;
    return item.status === "accepted";
  };

  // 打开响应弹窗
  const openRespond = (item: InvitationItem, action: "accept" | "decline") => {
    setRespondInvId(item.id);
    setRespondAction(action);
    setReplyMessage("");
    setShowRespond(true);
  };

  // 提交响应
  const handleRespond = async () => {
    if (respondLoading) return;
    setRespondLoading(true);
    try {
      const res = await invitationsService.respond(respondInvId, {
        action: respondAction,
        replyMessage: replyMessage.trim() || undefined,
      });
      if (res.ok) {
        Taro.showToast({
          title: respondAction === "accept" ? "已同意邀请" : "已婉拒邀请",
          icon: "success",
        });
        setShowRespond(false);
        fetchMessages();
      }
    } catch (e: any) {
      Taro.showToast({ title: e?.message || "操作失败", icon: "none" });
    } finally {
      setRespondLoading(false);
    }
  };

  return (
    <View className="page-messages">
      <View className="tab-bar">
        <View className={`tab-item ${tab === "received" ? "active" : ""}`} onClick={() => setTab("received")}>
          <Text>收到的邀请</Text>
        </View>
        <View className={`tab-item ${tab === "sent" ? "active" : ""}`} onClick={() => setTab("sent")}>
          <Text>发出的邀请</Text>
        </View>
      </View>

      {loading ? (
        <Loading />
      ) : currentList.length === 0 ? (
        <Empty text="暂无消息" />
      ) : (
        <View className="list">
          {currentList.map((item) => {
            const isReceived = tab === "received";
            const peerName = isReceived ? item.fromUserName : item.toUserName;
            const peerAvatar = isReceived ? item.fromUserAvatar : item.toUserAvatar;
            const peerRealAvatar = isReceived ? item.fromUserRealAvatar : item.toUserRealAvatar;
            const showReal = showRealAvatar(item);

            return (
              <View key={item.id} className="msg-card">
                <View className="msg-header" onClick={() => goOrderDetail(item.id)}>
                  <View className="msg-user-info">
                    {showReal && peerRealAvatar ? (
                      <Image src={peerRealAvatar} className="msg-avatar" mode="aspectFill" />
                    ) : peerAvatar ? (
                      <Image src={peerAvatar} className="msg-avatar" mode="aspectFill" />
                    ) : (
                      <View className="msg-avatar msg-avatar-placeholder">
                        <Text>{(peerName || "?")[0]}</Text>
                      </View>
                    )}
                    <View className="msg-user-meta">
                      <Text className="msg-user-name">{peerName}</Text>
                      {item.orderNo && (
                        <Text className="msg-order-no">{item.orderNo}</Text>
                      )}
                    </View>
                  </View>
                  <StatusBadge status={item.status} />
                </View>

                <View className="msg-body" onClick={() => goOrderDetail(item.id)}>
                  <Text className="msg-source">{item.sourceTitle}</Text>
                  {item.message && <Text className="msg-text">留言：{item.message}</Text>}
                  {item.replyMessage && <Text className="msg-reply">回复：{item.replyMessage}</Text>}
                </View>

                <View className="msg-footer">
                  <Text className="msg-time">{formatDate(item.updatedAt)}</Text>
                  <View className="msg-actions">
                    {item.peerPhone && (
                      <Text className="msg-phone">{item.peerPhone}</Text>
                    )}
                    {/* 收到的待处理邀请：显示同意/拒绝按钮 */}
                    {isReceived && item.status === "pending" && (
                      <View className="respond-btns">
                        <View className="respond-btn accept" onClick={() => openRespond(item, "accept")}>
                          <Text>同意</Text>
                        </View>
                        <View className="respond-btn decline" onClick={() => openRespond(item, "decline")}>
                          <Text>拒绝</Text>
                        </View>
                      </View>
                    )}
                  </View>
                </View>
              </View>
            );
          })}
        </View>
      )}

      {/* 响应弹窗 */}
      {showRespond && (
        <View className="modal-overlay" onClick={() => setShowRespond(false)}>
          <View className="modal-content" onClick={(e) => e.stopPropagation()}>
            <View className="modal-header">
              <Text className="modal-title">
                {respondAction === "accept" ? "同意并解锁" : "婉拒邀请"}
              </Text>
              <View className="modal-close" onClick={() => setShowRespond(false)}>
                <Text>✕</Text>
              </View>
            </View>
            <View className="modal-body">
              <Text className="modal-hint">
                {respondAction === "accept"
                  ? "同意后双方手机号将互相可见，请确认对方身份真实可靠"
                  : "拒绝后对方将收到通知"}
              </Text>
              <Textarea
                className="modal-textarea"
                placeholder={respondAction === "accept" ? "回复留言（100字以内）" : "简单说明原因（100字以内）"}
                value={replyMessage}
                onInput={(e) => setReplyMessage(e.detail.value)}
                maxlength={100}
              />
              <Text className="char-count">{replyMessage.length}/100</Text>
            </View>
            <View className="modal-footer">
              <Button className="modal-cancel" onClick={() => setShowRespond(false)}>取消</Button>
              <Button
                className={`modal-confirm ${respondAction === "decline" ? "decline" : ""}`}
                onClick={handleRespond}
                loading={respondLoading}
                disabled={respondLoading}
              >
                {respondAction === "accept" ? "确认同意" : "确认拒绝"}
              </Button>
            </View>
          </View>
        </View>
      )}
    </View>
  );
}