import { View, Text, Image, Textarea, Button, ScrollView } from "@tarojs/components";
import { useState, useEffect, useCallback } from "react";
import Taro, { useDidShow } from "@tarojs/taro";
import { invitationsService } from "../../../services/invitations";
import { notificationsService } from "../../../services/notifications";
import { useUserStore } from "../../../stores/user";
import { useAppStore } from "../../../stores/app";
import { ensureSubscribe } from "../../../utils/subscribe";
import Loading from "../../../components/Loading";
import Empty from "../../../components/Empty";
import StatusBadge from "../../../components/StatusBadge";
import type { InvitationItem } from "../../../types";
import "./first-confirm.scss";

export default function FirstConfirmPage() {
  const { user } = useUserStore();
  const { setUnreadCount } = useAppStore();
  const [items, setItems] = useState<InvitationItem[]>([]);
  const [loading, setLoading] = useState(true);

  // 响应弹窗
  const [showRespond, setShowRespond] = useState(false);
  const [respondInvId, setRespondInvId] = useState("");
  const [respondAction, setRespondAction] = useState<"accept" | "decline">("accept");
  const [replyMessage, setReplyMessage] = useState("");
  const [respondLoading, setRespondLoading] = useState(false);

  // 撤回弹窗
  const [showRevoke, setShowRevoke] = useState(false);
  const [revokeInvId, setRevokeInvId] = useState("");
  const [revokeIsPending, setRevokeIsPending] = useState(false);
  const [revokeLoading, setRevokeLoading] = useState(false);

  const fetchMessages = useCallback(async () => {
    if (!user) return;
    setLoading(true);
    try {
      const res = await invitationsService.list();
      if (res.ok) {
        // 一次确认：orderStatus 为 null
        setItems((res.items || []).filter((i) => !i.orderStatus));
      }
    } catch (err) {
      console.error("[first-confirm] 获取失败:", err);
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

  const showRealAvatar = (item: InvitationItem) => {
    if (item.orderStatus === "completed" || item.orderStatus === "closed") return false;
    return item.status === "accepted";
  };

  const openRespond = (item: InvitationItem, action: "accept" | "decline") => {
    setRespondInvId(item.id);
    setRespondAction(action);
    setReplyMessage("");
    setShowRespond(true);
  };

  const handleRespond = async () => {
    if (respondLoading) return;
    setRespondLoading(true);
    try {
      const res = await invitationsService.respond(respondInvId, {
        action: respondAction,
        replyMessage: replyMessage.trim() || undefined,
      });
      if (res.ok) {
        if (respondAction === "accept") {
          await ensureSubscribe(["practice_confirmed"]);
        }
        Taro.showToast({
          title: respondAction === "accept" ? "已同意！手机号已互相解锁，尽快电话联系吧" : "已婉拒邀请",
          icon: "success",
        });
        setShowRespond(false);
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
    } finally {
      setRespondLoading(false);
    }
  };

  const openRevoke = (item: InvitationItem) => {
    setRevokeInvId(item.id);
    setRevokeIsPending(item.status === "pending");
    setShowRevoke(true);
  };

  const handleRevoke = async () => {
    if (revokeLoading) return;
    setRevokeLoading(true);
    try {
      const res = await invitationsService.revoke(revokeInvId);
      if (res.ok) {
        Taro.showToast({
          title: revokeIsPending ? "已取消邀请" : "已撤回授权",
          icon: "success",
        });
        setShowRevoke(false);
        fetchMessages();
      }
    } catch (e: any) {
      Taro.showToast({ title: e?.message || "操作失败", icon: "none" });
    } finally {
      setRevokeLoading(false);
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
              <Text className="msg-source">{isReceived ? "发给我" : "我发出"} · {item.sourceTitle}</Text>
              {item.orderNo && <Text className="msg-order-no">{item.orderNo}</Text>}
            </View>
          </View>
          <StatusBadge status={item.status} />
        </View>

        <View className="msg-body">
          {item.message && (
            <View className="msg-text-box">
              <Text className="msg-text-label">对方留言</Text>
              <Text className="msg-text">{item.message}</Text>
            </View>
          )}
          {item.replyMessage && (
            <View className="msg-reply-box">
              <Text className="msg-reply-label">回复</Text>
              <Text className="msg-reply">{item.replyMessage}</Text>
            </View>
          )}
          {item.status === "accepted" && item.peerPhone && (
            <View className="msg-phone-box">
              <Text className="msg-phone-label">已解锁联系方式</Text>
              <Text className="msg-phone">📞 {item.peerPhone}</Text>
              {showReal && peerRealAvatar && (
                <Image src={peerRealAvatar} className="msg-real-avatar" mode="aspectFill" />
              )}
            </View>
          )}
          {item.status === "accepted" && !item.peerPhone && (
            <View className="msg-phone-revoked">
              <Text>📞 服务已完成或订单关闭，联系方式已撤回</Text>
            </View>
          )}
        </View>

        <View className="msg-time-row">
          <Text className="msg-time">发起：{formatDate(item.createdAt)}</Text>
          {item.acceptedAt && <Text className="msg-time">同意：{formatDate(item.acceptedAt)}</Text>}
          {item.status === "pending" && <Text className="msg-time">过期：{formatDate(item.expiresAt)}</Text>}
        </View>

        <View className="msg-footer">
          {isReceived && item.status === "pending" && (
            <View className="respond-btns">
              <View className="respond-btn accept" onClick={() => openRespond(item, "accept")}>
                <Text>同意并解锁</Text>
              </View>
              <View className="respond-btn decline" onClick={() => openRespond(item, "decline")}>
                <Text>婉拒</Text>
              </View>
            </View>
          )}
          {item.status === "accepted" && (
            <View className="respond-btns">
              <View className="respond-btn revoke" onClick={() => openRevoke(item)}>
                <Text>撤回授权</Text>
              </View>
            </View>
          )}
          {!isReceived && item.status === "pending" && (
            <View className="respond-btns">
              <Text className="msg-waiting">等待对方确认… 通常在 5-20 分钟内响应</Text>
              <View className="respond-btn cancel" onClick={() => openRevoke(item)}>
                <Text>取消邀请</Text>
              </View>
            </View>
          )}
          {item.status === "accepted" && (
            <Text className="msg-hint">双方已互相同意，可在"我的订单"中确认练球</Text>
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
          <Empty text="暂无第一次确认消息" />
        ) : (
          <View className="list">{items.map(renderItem)}</View>
        )}
        <View className="safe-bottom" />
      </ScrollView>

      {showRespond && (
        <View className="modal-overlay" onClick={() => setShowRespond(false)}>
          <View className="modal-content" onClick={(e) => e.stopPropagation()}>
            <View className="modal-header">
              <Text className="modal-title">{respondAction === "accept" ? "同意邀请？" : "婉拒邀请？"}</Text>
              <View className="modal-close" onClick={() => setShowRespond(false)}><Text>✕</Text></View>
            </View>
            <View className="modal-body">
              <Text className="modal-hint">
                {respondAction === "accept"
                  ? "同意后双方将互见手机号和真人头像，对方可联系你约球哟^_^~"
                  : "婉拒后对方可重新发起 1 次邀请（共 2 次机会）。"}
              </Text>
              <Textarea
                className="modal-textarea"
                placeholder={respondAction === "accept" ? "如：可以的，几点见？（≤100字）" : "如：不好意思，那天有安排了（≤100字）"}
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
                {respondAction === "accept" ? "确认同意" : "确认婉拒"}
              </Button>
            </View>
          </View>
        </View>
      )}

      {showRevoke && (
        <View className="modal-overlay" onClick={() => setShowRevoke(false)}>
          <View className="modal-content" onClick={(e) => e.stopPropagation()}>
            <View className="modal-header">
              <Text className="modal-title">{revokeIsPending ? "取消邀请？" : "撤回联系方式授权？"}</Text>
              <View className="modal-close" onClick={() => setShowRevoke(false)}><Text>✕</Text></View>
            </View>
            <View className="modal-body">
              <Text className="modal-hint">
                {revokeIsPending
                  ? "取消后对方将看不到你的邀请，此操作不可撤销。"
                  : "撤回后双方都不再可见对方手机号，且无法再次邀请。此操作不可撤销。"}
              </Text>
            </View>
            <View className="modal-footer">
              <Button className="modal-cancel" onClick={() => setShowRevoke(false)}>返回</Button>
              <Button
                className="modal-confirm decline"
                onClick={handleRevoke}
                loading={revokeLoading}
                disabled={revokeLoading}
              >
                {revokeIsPending ? "确认取消" : "确认撤回"}
              </Button>
            </View>
          </View>
        </View>
      )}
    </View>
  );
}
