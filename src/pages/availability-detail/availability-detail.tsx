import { View, Text, Image, Textarea, Button } from "@tarojs/components";
import { useState, useEffect } from "react";
import Taro, { useRouter } from "@tarojs/taro";
import { availabilitiesService } from "../../services/availabilities";
import { invitationsService } from "../../services/invitations";
import { followsService } from "../../services/follows";
import { useUserStore } from "../../stores/user";
import { ensureSubscribe } from "../../utils/subscribe";
import Loading from "../../components/Loading";
import RatingStars from "../../components/RatingStars";
import type { AvailabilityDetail } from "../../types";
import "./detail.scss";

const TIME_SLOT_LABEL: Record<string, string> = { morning: "上午", afternoon: "下午", evening: "晚上" };

const LEVELS = [
  { value: 0, label: "入门" },
  { value: 1, label: "初级" },
  { value: 2, label: "中级" },
  { value: 3, label: "高级" },
  { value: 4, label: "专业" },
  { value: 5, label: "顶尖" },
];

function levelLabel(level: number | null): string {
  if (level == null) return "—";
  return LEVELS.find((l) => l.value === level)?.label ?? `${level} 级`;
}

function formatTime(start: number, end: number): string {
  return `${start}:00-${end}:00`;
}

export default function AvailabilityDetail() {
  const router = useRouter();
  const { id } = router.params;
  const { user } = useUserStore();

  const [detail, setDetail] = useState<AvailabilityDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [showContact, setShowContact] = useState(false);
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const [followLoading, setFollowLoading] = useState(false);

  const isOwner = user?.id === detail?.coachId;

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    availabilitiesService.getById(id)
      .then((res) => {
        if (res.ok) setDetail(res.availability as AvailabilityDetail);
      })
      .catch(() => Taro.showToast({ title: "加载失败", icon: "none" }))
      .finally(() => setLoading(false));
  }, [id]);

  // 检查关注状态
  useEffect(() => {
    if (!user || !detail || isOwner) return;
    followsService.list().then((res) => {
      if (res.ok && res.items) {
        setIsFollowing(res.items.some((f) => f.followedId === detail.coachId));
      }
    });
  }, [user, detail, isOwner]);

  const handleFollow = async () => {
    if (!detail || followLoading) return;
    setFollowLoading(true);
    try {
      if (isFollowing) {
        const res = await followsService.unfollow(detail.coachId);
        if (res.ok) setIsFollowing(false);
      } else {
        const res = await followsService.follow(detail.coachId);
        if (res.ok) setIsFollowing(true);
      }
    } catch (e: any) {
      Taro.showToast({ title: e?.message || "操作失败", icon: "none" });
    } finally {
      setFollowLoading(false);
    }
  };

  const handleSendInvitation = async () => {
    if (!detail || sending) return;
    if (!message.trim()) {
      Taro.showToast({ title: "请填写留言", icon: "none" });
      return;
    }
    if (message.length > 200) {
      Taro.showToast({ title: "留言不能超过200字", icon: "none" });
      return;
    }
    setSending(true);
    try {
      const res = await invitationsService.create({
        availabilityId: id,
        toUserId: detail.coachId,
        message: message.trim(),
      });
      if (res.ok) {
        setShowContact(false);
        setMessage("");
        Taro.showModal({
          title: "邀请已发送",
          content: "对方通常会在 5-20 分钟内确认。响应结果会通过服务通知和「消息」页告知你，请留意。",
          showCancel: false,
          confirmText: "我知道了",
          success: () => { ensureSubscribe(["invite_result"]); },
        });
      }
    } catch (e: any) {
      Taro.showToast({ title: e?.message || "发送失败", icon: "none" });
    } finally {
      setSending(false);
    }
  };

  if (loading) return <View className="page-detail"><Loading /></View>;
  if (!detail) return <View className="page-detail"><View className="empty-state"><Text>数据不存在</Text></View></View>;

  const locationText = detail.venueName
    ? detail.venueAddress ? `${detail.venueName}（${detail.venueAddress}）` : detail.venueName
    : detail.tempLocation ?? "地点待定";

  const priceText = detail.priceMin != null || detail.priceMax != null
    ? detail.priceMin != null && detail.priceMax != null
      ? `${detail.priceMin}-${detail.priceMax} 元/小时`
      : `${detail.priceMin ?? detail.priceMax} 元/小时起`
    : "面议";

  const courtBookedText = detail.courtBookedBy === "student"
    ? "学员订场"
    : detail.courtBookedBy === "coach"
    ? "陪练订场"
    : "协商订场";

  const statusLabel: Record<string, string> = { open: "可约", closed: "已下架", expired: "已过期" };

  return (
    <View className="page-detail">
      {/* 教练信息卡片 */}
      <View className="detail-card">
        <View className="coach-header">
          <View className="coach-info">
            {detail.coachAvatar ? (
              <Image src={detail.coachAvatar} className="coach-avatar" mode="aspectFill" />
            ) : (
              <View className="coach-avatar coach-avatar-placeholder">
                <Text>{(detail.coachName || "?")[0]}</Text>
              </View>
            )}
            <View className="coach-meta">
              <View className="coach-name-row">
                <Text className="coach-name">{detail.coachName}</Text>
                {user && !isOwner && (
                  <View className={`follow-btn ${isFollowing ? "following" : ""}`} onClick={handleFollow}>
                    <Text>{isFollowing ? "已关注" : "+ 关注"}</Text>
                  </View>
                )}
              </View>
              <View className="coach-tags">
                {detail.coach?.level != null && (
                  <Text className="tag">Lv.{detail.coach?.level}</Text>
                )}
                {detail.coach?.yearsPlayed != null && (
                  <Text className="tag">{detail.coach?.yearsPlayed}年球龄</Text>
                )}
                {detail.coach?.city && (
                  <Text className="tag">{detail.coach?.city}</Text>
                )}
              </View>
              <View className="rating-row">
                <RatingStars rating={detail.coach?.recentRating ?? 5} />
                {detail.coach?.reviewCount != null && detail.coach.reviewCount >= 5 && (
                  <Text className="rating-score">{(detail.coach?.recentRating ?? 5).toFixed(1)}分</Text>
                )}
                {detail.coach?.reviewCount != null && detail.coach.reviewCount < 5 && (
                  <Text className="review-hint">已有{detail.coach.reviewCount}条评价，满5条后将展示评分</Text>
                )}
              </View>
            </View>
          </View>

          {detail.coach?.bio && (
            <View className="coach-bio">
              <Text className="bio-label">个人介绍</Text>
              <Text className="bio-text">{detail.coach.bio}</Text>
            </View>
          )}

          {detail.coach?.teachingInfo && (
            <View className="coach-bio">
              <Text className="bio-label">授课信息</Text>
              <Text className="bio-text">{detail.coach.teachingInfo}</Text>
            </View>
          )}

          {detail.coach?.qualifications && detail.coach.qualifications.length > 0 && (
            <View className="qualifications">
              <Text className="bio-label">资质认证</Text>
              <View className="qual-tags">
                {detail.coach.qualifications.map((q, i) => (
                  <Text key={i} className="qual-tag">{q}</Text>
                ))}
              </View>
            </View>
          )}
        </View>
      </View>

      {/* 档期信息卡片 */}
      <View className="detail-card">
        <View className="section-header">
          <Text className="section-title">档期信息</Text>
          <Text className={`status-badge status-${detail.status}`}>{statusLabel[detail.status] || detail.status}</Text>
        </View>
        <View className="info-grid">
          <View className="info-item">
            <Text className="info-label">日期</Text>
            <Text className="info-value">{detail.playDate}</Text>
          </View>
          <View className="info-item">
            <Text className="info-label">时段</Text>
            <Text className="info-value">{TIME_SLOT_LABEL[detail.timeSlot] || detail.timeSlot} {formatTime(detail.startHour, detail.endHour)}</Text>
          </View>
          <View className="info-item info-item-full">
            <Text className="info-label">地点</Text>
            <Text className="info-value">{locationText}</Text>
          </View>
          <View className="info-item">
            <Text className="info-label">价位</Text>
            <Text className="info-value price">{priceText}</Text>
          </View>
          <View className="info-item">
            <Text className="info-label">订场</Text>
            <Text className="info-value">{courtBookedText}</Text>
          </View>
        </View>
        {detail.note && (
          <View className="note-box">
            <Text className="note-label">备注</Text>
            <Text className="note-text">{detail.note}</Text>
          </View>
        )}
      </View>

      {/* 底部操作栏 */}
      <View className="bottom-bar">
        {detail.status === "open" && !isOwner && user && (
          <Button className="contact-btn" onClick={() => setShowContact(true)}>
            想联系
          </Button>
        )}
        {detail.status === "open" && !user && (
          <Button className="contact-btn" onClick={() => Taro.navigateTo({ url: "/pages/login/login" })}>
            登录后联系
          </Button>
        )}
        {isOwner && (
          <Button className="contact-btn secondary" onClick={() => Taro.navigateTo({ url: "/pages/orders/orders" })}>
            管理我的档期
          </Button>
        )}
      </View>

      {/* 未登录提示 */}
      {!user && (
        <View className="login-hint">
          <Text>登录后可以联系陪练</Text>
        </View>
      )}

      {/* 想联系弹窗 */}
      {showContact && (
        <View className="modal-overlay" onClick={() => setShowContact(false)}>
          <View className="modal-content" onClick={(e) => e.stopPropagation()}>
            <View className="modal-header">
              <Text className="modal-title">想联系 {detail.coachName}</Text>
              <View className="modal-close" onClick={() => setShowContact(false)}>
                <Text>✕</Text>
              </View>
            </View>
            <View className="modal-body">
              <Text className="modal-hint">发送练球邀请，对方同意后即可查看联系方式。对方通常会在 5-20 分钟内响应。</Text>
              <Textarea
                className="modal-textarea"
                placeholder="简单介绍一下自己吧（200字以内）"
                value={message}
                onInput={(e) => setMessage(e.detail.value)}
                maxlength={200}
              />
              <Text className="char-count">{message.length}/200</Text>
              <Text className="modal-disclaimer">本评价为双方互评，分数将会直接影响您在平台的信用哟</Text>
            </View>
            <View className="modal-footer">
              <Button className="modal-cancel" onClick={() => setShowContact(false)}>取消</Button>
              <Button className="modal-confirm" onClick={handleSendInvitation} loading={sending} disabled={sending}>
                发送邀请
              </Button>
            </View>
          </View>
        </View>
      )}
    </View>
  );
}