import { View, Text, Image, Textarea, Button } from "@tarojs/components";
import { useState, useEffect } from "react";
import Taro, { useRouter } from "@tarojs/taro";
import { demandsService } from "../../services/demands";
import { invitationsService } from "../../services/invitations";
import { followsService } from "../../services/follows";
import { useUserStore } from "../../stores/user";
import Loading from "../../components/Loading";
import type { DemandDetail } from "../../types";
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

export default function DemandDetail() {
  const router = useRouter();
  const { id } = router.params;
  const { user } = useUserStore();

  const [detail, setDetail] = useState<DemandDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [showContact, setShowContact] = useState(false);
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const [followLoading, setFollowLoading] = useState(false);

  const isOwner = user?.id === detail?.userId;

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    demandsService.getById(id)
      .then((res) => {
        if (res.ok) setDetail(res.demand as DemandDetail);
      })
      .catch(() => Taro.showToast({ title: "加载失败", icon: "none" }))
      .finally(() => setLoading(false));
  }, [id]);

  useEffect(() => {
    if (!user || !detail || isOwner) return;
    followsService.list().then((res) => {
      if (res.ok && res.items) {
        setIsFollowing(res.items.some((f) => f.followedId === detail.userId));
      }
    });
  }, [user, detail, isOwner]);

  const handleFollow = async () => {
    if (!detail || followLoading) return;
    setFollowLoading(true);
    try {
      if (isFollowing) {
        const res = await followsService.unfollow(detail.userId);
        if (res.ok) setIsFollowing(false);
      } else {
        const res = await followsService.follow(detail.userId);
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
        demandId: id,
        toUserId: detail.userId,
        message: message.trim(),
      });
      if (res.ok) {
        Taro.showToast({ title: "邀请已发送", icon: "success" });
        setShowContact(false);
        setMessage("");
      }
    } catch (e: any) {
      Taro.showToast({ title: e?.message || "发送失败", icon: "none" });
    } finally {
      setSending(false);
    }
  };

  if (loading) return <View className="page-detail"><Loading /></View>;
  if (!detail) return <View className="page-detail"><View className="empty-state"><Text>数据不存在</Text></View></View>;

  const budgetText = detail.budgetMin != null || detail.budgetMax != null
    ? detail.budgetMin != null && detail.budgetMax != null
      ? `${detail.budgetMin}-${detail.budgetMax} 元/小时`
      : `${detail.budgetMin ?? detail.budgetMax} 元/小时起`
    : "面议";

  const courtBookedText = detail.courtBookedBy === "student"
    ? "学员订场"
    : detail.courtBookedBy === "coach"
    ? "陪练订场"
    : "协商订场";

  const statusLabel: Record<string, string> = { open: "学员大厅中", closed: "已关闭", filled: "已找到陪练", expired: "已过期", draft: "草稿" };

  return (
    <View className="page-detail">
      {/* 学员信息卡片 */}
      <View className="detail-card">
        <View className="user-header">
          <View className="user-info">
            {detail.user?.avatarVirtual ? (
              <Image src={detail.user.avatarVirtual} className="user-avatar" mode="aspectFill" />
            ) : (
              <View className="user-avatar user-avatar-placeholder">
                <Text>{(detail.user?.name || "?")[0]}</Text>
              </View>
            )}
            <View className="user-meta">
              <View className="user-name-row">
                <Text className="user-name">{detail.user?.name}</Text>
                {user && !isOwner && (
                  <View className={`follow-btn ${isFollowing ? "following" : ""}`} onClick={handleFollow}>
                    <Text>{isFollowing ? "已关注" : "+ 关注"}</Text>
                  </View>
                )}
              </View>
              <View className="user-tags">
                <Text className="tag">学员</Text>
                <Text className="tag">自评 {levelLabel(detail.student?.level ?? null)}</Text>
                <Text className="tag">期望陪练 Lv.{detail.expectedLevel ?? "?"}+</Text>
              </View>
              {detail.student?.reviewCount != null && detail.student.reviewCount >= 5 && detail.student?.recentRating != null && (
                <View className="rating-row">
                  <Text className="rating-score">{(detail.student.recentRating).toFixed(1)}分</Text>
                  <Text className="rating-count">({detail.student.reviewCount}条评价)</Text>
                </View>
              )}
              {detail.student?.reviewCount != null && detail.student.reviewCount < 5 && (
                <Text className="review-hint">已有{detail.student.reviewCount}条评价，满5条后将展示评分</Text>
              )}
            </View>
          </View>

          {detail.student?.bio && (
            <View className="user-bio">
              <Text className="bio-label">个人介绍</Text>
              <Text className="bio-text">{detail.student.bio}</Text>
            </View>
          )}

          {detail.student?.goalTags && detail.student.goalTags.length > 0 && (
            <View className="goal-tags-section">
              <Text className="bio-label">练球目标</Text>
              <View className="goal-tags">
                {detail.student.goalTags.map((t, i) => (
                  <Text key={i} className="goal-tag">{t}</Text>
                ))}
              </View>
            </View>
          )}
        </View>
      </View>

      {/* 需求详情卡片 */}
      <View className="detail-card">
        <View className="section-header">
          <Text className="section-title">练球需求</Text>
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
            <Text className="info-label">期望地点</Text>
            <Text className="info-value">{detail.locationName || "地点待定"}</Text>
          </View>
          <View className="info-item">
            <Text className="info-label">预算</Text>
            <Text className="info-value price">{budgetText}</Text>
          </View>
          <View className="info-item">
            <Text className="info-label">期望等级</Text>
            <Text className="info-value">Lv.{detail.expectedLevel ?? "?"}+</Text>
          </View>
          <View className="info-item">
            <Text className="info-label">自评等级</Text>
            <Text className="info-value">{levelLabel(detail.student?.level ?? null)}</Text>
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
            管理我的需求
          </Button>
        )}
      </View>

      {!user && (
        <View className="login-hint">
          <Text>登录后可以联系学员</Text>
        </View>
      )}

      {/* 想联系弹窗 */}
      {showContact && (
        <View className="modal-overlay" onClick={() => setShowContact(false)}>
          <View className="modal-content" onClick={(e) => e.stopPropagation()}>
            <View className="modal-header">
              <Text className="modal-title">想联系 {detail.user?.name}</Text>
              <View className="modal-close" onClick={() => setShowContact(false)}>
                <Text>✕</Text>
              </View>
            </View>
            <View className="modal-body">
              <Text className="modal-hint">发送练球邀请，对方同意后即可查看联系方式</Text>
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