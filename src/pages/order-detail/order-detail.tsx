import { View, Text, Textarea, Button, Image } from "@tarojs/components";
import { useState, useEffect } from "react";
import Taro, { useRouter } from "@tarojs/taro";
import { invitationsService } from "../../services/invitations";
import { ordersService } from "../../services/orders";
import { BASE_URL } from "../../services/request";
import { useUserStore } from "../../stores/user";
import Loading from "../../components/Loading";
import RatingStars from "../../components/RatingStars";
import type { OrderItem } from "../../types";
import "./order-detail.scss";

function formatTime(s: number | null, e: number | null): string {
  if (s == null || e == null) return "";
  return `${s}:00-${e}:00`;
}

function formatDate(dateStr: string | null): string {
  if (!dateStr) return "待定";
  const d = new Date(dateStr);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")} ${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
}

/** 时间线时间格式：M/D HH:mm */
function formatTimelineDate(dateStr: string | null): string {
  if (!dateStr) return "待操作";
  const d = new Date(dateStr);
  return `${d.getMonth() + 1}/${d.getDate()} ${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
}

export default function OrderDetail() {
  const router = useRouter();
  const { id } = router.params;
  const { user } = useUserStore();

  const [order, setOrder] = useState<OrderItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(false);

  // 打卡
  const [showCheckin, setShowCheckin] = useState(false);
  const [checkinPhoto, setCheckinPhoto] = useState("");
  const [checkinLat, setCheckinLat] = useState<number | null>(null);
  const [checkinLng, setCheckinLng] = useState<number | null>(null);

  // 评价
  const [showReview, setShowReview] = useState(false);
  const [reviewRating, setReviewRating] = useState(5);
  const [reviewComment, setReviewComment] = useState("");

  const fetchOrder = async () => {
    if (!id) return;
    setLoading(true);
    try {
      const res = await invitationsService.orders();
      if (res.ok) {
        const found = (res.items || []).find((o: OrderItem) => o.id === id);
        setOrder(found || null);
      }
    } catch (err) {
      console.error("获取订单详情失败:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchOrder(); }, [id]);

  if (loading) return <View className="page-detail"><Loading /></View>;
  if (!order) return <View className="page-detail"><View className="empty-state"><Text>订单不存在</Text></View></View>;

  const isCoach = order.myRole === "coach";
  const isStudent = order.myRole === "student";

  // 订单状态判断
  const isPendingConfirm = order.orderStatus === null && order.status === "accepted";
  const isInProgress = order.orderStatus === "in_progress";
  const isCompleted = order.orderStatus === "completed";
  const isClosed = order.orderStatus === "closed";

  const bothConfirmed = order.studentConfirmedAt && order.coachConfirmedAt;
  const iConfirmed = isStudent ? order.studentConfirmedAt : order.coachConfirmedAt;
  const peerConfirmed = isStudent ? order.coachConfirmedAt : order.studentConfirmedAt;

  // 打卡状态
  const hasCheckin = order.checkIn != null;
  const checkinValid = order.checkIn?.validCheckIn ?? false;

  // 订单时间线 6 节点
  const timeline = [
    { label: "双方同意", time: order.acceptedAt, done: !!order.acceptedAt },
    { label: "学员确认练球", time: order.studentConfirmedAt, done: !!order.studentConfirmedAt },
    { label: "陪练确认练球", time: order.coachConfirmedAt, done: !!order.coachConfirmedAt },
    { label: "打卡开始", time: order.checkIn?.startTime ?? null, done: !!order.checkIn?.startTime },
    { label: "学员确认完成", time: order.studentCompletedAt, done: !!order.studentCompletedAt },
    { label: "订单完成", time: order.orderClosedAt, done: !!order.orderClosedAt || order.orderStatus === "completed" },
  ];

  // 确认练球
  const handleConfirmPractice = async () => {
    if (!id || actionLoading) return;
    setActionLoading(true);
    try {
      const res = await ordersService.confirmPractice(id);
      if (res.ok) {
        Taro.showToast({ title: "已确认练球", icon: "success" });
        fetchOrder();
      }
    } catch (e: any) {
      Taro.showToast({ title: e?.message || "操作失败", icon: "none" });
    } finally {
      setActionLoading(false);
    }
  };

  // 获取GPS并打卡
  const handleGetLocation = () => {
    Taro.getLocation({
      type: "gcj02",
      success: (res) => {
        setCheckinLat(res.latitude);
        setCheckinLng(res.longitude);
        setShowCheckin(true);
      },
      fail: () => {
        Taro.showToast({ title: "请开启定位权限", icon: "none" });
      },
    });
  };

  // 选择照片
  const handleChoosePhoto = () => {
    Taro.chooseImage({
      count: 1,
      sizeType: ["compressed"],
      sourceType: ["camera", "album"],
      success: (res) => {
        setCheckinPhoto(res.tempFilePaths[0]);
      },
      fail: () => {
        Taro.showToast({ title: "请选择照片", icon: "none" });
      },
    });
  };

  // 提交打卡
  const handleSubmitCheckin = async () => {
    if (!id || actionLoading) return;
    if (!checkinPhoto) {
      Taro.showToast({ title: "请上传球馆照片", icon: "none" });
      return;
    }
    if (checkinLat == null || checkinLng == null) {
      Taro.showToast({ title: "请先获取定位", icon: "none" });
      return;
    }
    setActionLoading(true);
    try {
      // 先上传照片
      const uploadRes = await Taro.uploadFile({
        url: `${BASE_URL}/upload/checkin`,
        filePath: checkinPhoto,
        name: "file",
        header: { Authorization: `Bearer ${Taro.getStorageSync("auth_token")}` },
      });
      const uploadData = JSON.parse(uploadRes.data) as { ok: boolean; url?: string };
      if (!uploadData.ok || !uploadData.url) {
        throw new Error("照片上传失败");
      }

      const res = await ordersService.checkin(id, {
        startPhoto: uploadData.url,
        startGpsLat: checkinLat,
        startGpsLng: checkinLng,
      });
      if (res.ok) {
        Taro.showToast({
          title: res.validCheckIn ? "打卡成功" : "打卡成功（时间窗口外，不计入有效统计）",
          icon: "none",
        });
        setShowCheckin(false);
        fetchOrder();
      }
    } catch (e: any) {
      Taro.showToast({ title: e?.message || "打卡失败", icon: "none" });
    } finally {
      setActionLoading(false);
    }
  };

  // 学员确认完成
  const handleStudentComplete = async () => {
    if (!id || actionLoading) return;
    setActionLoading(true);
    try {
      const res = await ordersService.studentComplete(id);
      if (res.ok) {
        Taro.showToast({ title: "已确认完成，等待陪练确认", icon: "success" });
        fetchOrder();
      }
    } catch (e: any) {
      Taro.showToast({ title: e?.message || "操作失败", icon: "none" });
    } finally {
      setActionLoading(false);
    }
  };

  // 陪练确认完成
  const handleCoachComplete = async () => {
    if (!id || actionLoading) return;
    setActionLoading(true);
    try {
      const res = await ordersService.coachComplete(id);
      if (res.ok) {
        Taro.showToast({ title: "订单已完成", icon: "success" });
        fetchOrder();
      }
    } catch (e: any) {
      Taro.showToast({ title: e?.message || "操作失败", icon: "none" });
    } finally {
      setActionLoading(false);
    }
  };

  // 提交评价
  const handleSubmitReview = async () => {
    if (!id || actionLoading) return;
    setActionLoading(true);
    try {
      const res = await ordersService.review(id, {
        checkInId: order.checkIn?.id,
        rating: reviewRating,
        comment: reviewComment.trim() || undefined,
      });
      if (res.ok) {
        Taro.showToast({ title: "评价成功", icon: "success" });
        setShowReview(false);
        fetchOrder();
      }
    } catch (e: any) {
      Taro.showToast({ title: e?.message || "评价失败", icon: "none" });
    } finally {
      setActionLoading(false);
    }
  };

  return (
    <View className="page-detail">
      {/* 订单状态头部 */}
      <View className="detail-card">
        <View className="order-status-header">
          <Text className="order-status-title">
            {isCompleted ? "订单已完成" : isClosed ? "订单已关闭" : isInProgress ? "订单进行中" : "待确认订单"}
          </Text>
          {order.orderNo && (
            <Text className="order-no">{order.orderNo}</Text>
          )}
        </View>
      </View>

      {/* 对方信息 */}
      <View className="detail-card">
        <View className="peer-info">
          {order.peerAvatar ? (
            <Image src={order.peerAvatar} className="peer-avatar" mode="aspectFill" />
          ) : (
            <View className="peer-avatar peer-avatar-placeholder">
              <Text>{(order.peerName || "?")[0]}</Text>
            </View>
          )}
          <View className="peer-meta">
            <Text className="peer-name">{order.peerName}</Text>
            <Text className="peer-role">{isCoach ? "学员" : "陪练员"}</Text>
          </View>
        </View>
        {order.peerPhone && !isCompleted && !isClosed && (
          <View className="peer-phone">
            <Text className="phone-label">联系方式</Text>
            <Text className="phone-value">{order.peerPhone}</Text>
          </View>
        )}
        {(isCompleted || isClosed) && (
          <View className="peer-phone-retracted">
            <Text className="phone-retracted-text">服务已完成，联系方式已撤回</Text>
          </View>
        )}
      </View>

      {/* 订单信息 */}
      <View className="detail-card">
        <Text className="section-title">订单信息</Text>
        <View className="info-grid">
          <View className="info-item">
            <Text className="info-label">来源</Text>
            <Text className="info-value">{order.sourceTitle}</Text>
          </View>
          <View className="info-item">
            <Text className="info-label">日期</Text>
            <Text className="info-value">{order.playDate || "待定"}</Text>
          </View>
          <View className="info-item">
            <Text className="info-label">时间</Text>
            <Text className="info-value">{formatTime(order.startHour, order.endHour)}</Text>
          </View>
          <View className="info-item">
            <Text className="info-label">角色</Text>
            <Text className="info-value">{isCoach ? "陪练员" : "学员"}</Text>
          </View>
        </View>
      </View>

      {/* 订单动态时间线 */}
      <View className="detail-card">
        <Text className="section-title">订单动态</Text>
        <View className="timeline">
          {timeline.map((node, i) => (
            <View
              key={i}
              className={`timeline-node ${node.done ? "done" : ""} ${i < timeline.length - 1 ? "has-line" : ""}`}
            >
              <View className="timeline-left">
                <Text className="timeline-icon">{node.done ? "✓" : "○"}</Text>
                {i < timeline.length - 1 && <View className="timeline-line" />}
              </View>
              <View className="timeline-content">
                <Text className="timeline-label">{node.label}</Text>
                <Text className={`timeline-time ${!node.done ? "pending" : ""}`}>
                  {node.done ? formatTimelineDate(node.time) : "待操作"}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </View>

      {/* 确认状态 */}
      {isPendingConfirm && (
        <View className="detail-card">
          <Text className="section-title">确认练球</Text>
          <View className="confirm-status">
            <View className="confirm-item">
              <Text className={`confirm-icon ${order.studentConfirmedAt ? "done" : ""}`}>
                {order.studentConfirmedAt ? "✓" : "○"}
              </Text>
              <Text className="confirm-text">学员确认 {order.studentConfirmedAt ? formatDate(order.studentConfirmedAt) : "待确认"}</Text>
            </View>
            <View className="confirm-item">
              <Text className={`confirm-icon ${order.coachConfirmedAt ? "done" : ""}`}>
                {order.coachConfirmedAt ? "✓" : "○"}
              </Text>
              <Text className="confirm-text">陪练确认 {order.coachConfirmedAt ? formatDate(order.coachConfirmedAt) : "待确认"}</Text>
            </View>
          </View>
          {!iConfirmed && (
            <Button className="action-btn" onClick={handleConfirmPractice} loading={actionLoading} disabled={actionLoading}>
              确认练球
            </Button>
          )}
          {iConfirmed && !bothConfirmed && (
            <Text className="wait-hint">等待对方确认练球...</Text>
          )}
          {bothConfirmed && (
            <Text className="success-hint">双方已确认，订单进入进行中</Text>
          )}
        </View>
      )}

      {/* 陪练打卡 - 教练进行中且未打卡时显示打卡入口 */}
      {isInProgress && isCoach && !hasCheckin && (
        <View className="detail-card">
          <Text className="section-title">陪练打卡</Text>
          <Text className="checkin-hint">请在活动时间前后1小时内打卡，需开启定位并上传球馆照片</Text>
          <Button className="action-btn" onClick={handleGetLocation} loading={actionLoading}>
            获取定位并打卡
          </Button>
        </View>
      )}

      {/* 打卡记录 - 任何角色任何状态，有打卡记录时展示完整信息 */}
      {hasCheckin && order.checkIn && (
        <View className="detail-card">
          <Text className="section-title">打卡记录</Text>
          <View className="checkin-header">
            <Text className={`checkin-badge ${checkinValid ? "valid" : "invalid"}`}>
              {checkinValid ? "有效打卡" : "无效打卡"}
            </Text>
          </View>
          {!checkinValid && (
            <Text className="checkin-warn">
              ⚠️ 打卡无效：未在活动时间前后1小时内完成打卡，此订单不计入完成数且评价无效
            </Text>
          )}
          <View className="checkin-photos">
            {order.checkIn.startPhoto && (
              <View className="checkin-photo-block">
                <Image src={order.checkIn.startPhoto} className="checkin-photo" mode="aspectFill" />
                <Text className="checkin-photo-label">开始照片</Text>
                <Text className="checkin-photo-time">{formatTimelineDate(order.checkIn.startTime)}</Text>
                {order.checkIn.startGpsLat != null && (
                  <Text className="checkin-photo-gps">
                    📍 {order.checkIn.startGpsLat.toFixed(4)}, {order.checkIn.startGpsLng?.toFixed(4)}
                  </Text>
                )}
              </View>
            )}
            {order.checkIn.endPhoto && (
              <View className="checkin-photo-block">
                <Image src={order.checkIn.endPhoto} className="checkin-photo" mode="aspectFill" />
                <Text className="checkin-photo-label">结束照片</Text>
                <Text className="checkin-photo-time">{formatTimelineDate(order.checkIn.endTime)}</Text>
                {order.checkIn.endGpsLat != null && (
                  <Text className="checkin-photo-gps">
                    📍 {order.checkIn.endGpsLat.toFixed(4)}, {order.checkIn.endGpsLng?.toFixed(4)}
                  </Text>
                )}
              </View>
            )}
          </View>
        </View>
      )}

      {/* 完成订单 */}
      {isInProgress && (
        <View className="detail-card">
          <Text className="section-title">完成订单</Text>
          {isStudent && !order.studentCompletedAt && (
            <Button className="action-btn" onClick={handleStudentComplete} loading={actionLoading} disabled={actionLoading}>
              确认完成（学员先操作）
            </Button>
          )}
          {isStudent && order.studentCompletedAt && (
            <Text className="success-hint">你已确认完成，等待陪练确认</Text>
          )}
          {isCoach && !order.studentCompletedAt && (
            <Text className="wait-hint">等待学员先确认完成</Text>
          )}
          {isCoach && order.studentCompletedAt && (
            <Button className="action-btn" onClick={handleCoachComplete} loading={actionLoading} disabled={actionLoading}>
              确认完成（陪练确认后订单完成）
            </Button>
          )}
        </View>
      )}

      {/* 评价区域 */}
      {(isCompleted || isClosed) && (
        <View className="detail-card">
          <Text className="section-title">评价</Text>
          {order.myReviewDone ? (
            <Text className="success-hint">你已评价</Text>
          ) : (
            <Button className="action-btn secondary" onClick={() => setShowReview(true)}>
              去评价
            </Button>
          )}
          {order.peerReviewDone && (
            <Text className="peer-review-hint">对方已评价</Text>
          )}
        </View>
      )}

      {/* 打卡弹窗 */}
      {showCheckin && (
        <View className="modal-overlay" onClick={() => setShowCheckin(false)}>
          <View className="modal-content" onClick={(e) => e.stopPropagation()}>
            <View className="modal-header">
              <Text className="modal-title">陪练打卡</Text>
              <View className="modal-close" onClick={() => setShowCheckin(false)}>
                <Text>✕</Text>
              </View>
            </View>
            <View className="modal-body">
              <Text className="modal-hint">请上传球馆现场照片并确认定位</Text>
              <View className="photo-area" onClick={handleChoosePhoto}>
                {checkinPhoto ? (
                  <Image src={checkinPhoto} className="photo-preview" mode="aspectFill" />
                ) : (
                  <Text className="photo-placeholder">点击上传球馆照片</Text>
                )}
              </View>
              <View className="gps-info">
                <Text className="gps-label">定位状态</Text>
                {checkinLat != null ? (
                  <Text className="gps-value">已获取 ({checkinLat.toFixed(4)}, {checkinLng?.toFixed(4)})</Text>
                ) : (
                  <Text className="gps-value gps-waiting">未获取</Text>
                )}
              </View>
            </View>
            <View className="modal-footer">
              <Button className="modal-cancel" onClick={() => setShowCheckin(false)}>取消</Button>
              <Button className="modal-confirm" onClick={handleSubmitCheckin} loading={actionLoading} disabled={actionLoading}>
                确认打卡
              </Button>
            </View>
          </View>
        </View>
      )}

      {/* 评价弹窗 */}
      {showReview && (
        <View className="modal-overlay" onClick={() => setShowReview(false)}>
          <View className="modal-content" onClick={(e) => e.stopPropagation()}>
            <View className="modal-header">
              <Text className="modal-title">评价</Text>
              <View className="modal-close" onClick={() => setShowReview(false)}>
                <Text>✕</Text>
              </View>
            </View>
            <View className="modal-body">
              <Text className="modal-hint">请为本次练球体验打分</Text>
              <View className="review-stars">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Text
                    key={s}
                    className={`review-star ${s <= reviewRating ? "active" : ""}`}
                    onClick={() => setReviewRating(s)}
                  >
                    ★
                  </Text>
                ))}
              </View>
              <Textarea
                className="modal-textarea"
                placeholder="写点评价吧（选填）"
                value={reviewComment}
                onInput={(e) => setReviewComment(e.detail.value)}
                maxlength={50}
              />
              <Text className="modal-disclaimer">本评价为双方互评，分数将会直接影响您在平台的信用哟</Text>
            </View>
            <View className="modal-footer">
              <Button className="modal-cancel" onClick={() => setShowReview(false)}>取消</Button>
              <Button className="modal-confirm" onClick={handleSubmitReview} loading={actionLoading} disabled={actionLoading}>
                提交评价
              </Button>
            </View>
          </View>
        </View>
      )}
    </View>
  );
}