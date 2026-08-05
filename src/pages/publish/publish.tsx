import { View, Text, Input, Textarea, Button, Picker, ScrollView } from "@tarojs/components";
import { useState, useEffect } from "react";
import Taro, { useDidShow } from "@tarojs/taro";
import { availabilitiesService } from "../../services/availabilities";
import { demandsService } from "../../services/demands";
import { authService } from "../../services/auth";
import { useUserStore } from "../../stores/user";
import Loading from "../../components/Loading";
import {
  BADMINTON_LEVELS,
  HOUR_OPTIONS,
  COURT_BOOKED_OPTIONS,
  PRICE_PRESETS,
  inferTimeSlot,
} from "../../config/site";
import type { SelectedVenue } from "../venue-picker/venue-picker";
import "./publish.scss";

type PublishTab = "student" | "coach";

const LEVEL_OPTIONS = BADMINTON_LEVELS.map((l) => ({
  value: l.value,
  label: `${l.label}（${l.desc}）`,
}));

export default function Publish() {
  const { user } = useUserStore();
  const [activeTab, setActiveTab] = useState<PublishTab>("student");
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  // 共享字段
  const [playDate, setPlayDate] = useState("");
  const [startHour, setStartHour] = useState(19);
  const [endHour, setEndHour] = useState(21);
  const [courtBookedBy, setCourtBookedBy] = useState("student");
  const [note, setNote] = useState("");

  // 球馆选择（通过 venue-picker 页面选择）
  const [venueName, setVenueName] = useState("");
  const [venueAddress, setVenueAddress] = useState("");
  const [venueLat, setVenueLat] = useState<number | null>(null);
  const [venueLng, setVenueLng] = useState<number | null>(null);

  // 陪练档期专属
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");

  // 学员需求专属
  const [expectedLevel, setExpectedLevel] = useState(3);
  const [studentLevel, setStudentLevel] = useState(0);
  const [budgetMin, setBudgetMin] = useState("");
  const [budgetMax, setBudgetMax] = useState("");

  useDidShow(() => {
    fetchProfile();
  });

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    if (!user) { setLoading(false); return; }
    try {
      const res = await authService.getProfile();
      if (res.ok && (res as any).user) {
        const u = (res as any).user;
        setProfile(u);
        // 默认带入学员等级
        if (u.studentProfile?.level != null) {
          setStudentLevel(u.studentProfile.level);
        }
        // 根据已开通身份设置默认 Tab
        const sp = u.studentProfile;
        const cp = u.coachProfile;
        const sEnabled = !!sp && !!u.avatarVirtual && !!u.avatarReal && !!u.name &&
          (!!u.phone && /^1[3-9]\d{9}$/.test(u.phone)) && !!sp.realName && !!sp.idNumber && sp.level > 0;
        const cEnabled = !!cp && !!u.avatarVirtual && !!u.avatarReal && !!u.name &&
          (!!u.phone && /^1[3-9]\d{9}$/.test(u.phone)) && !!cp.realName && !!cp.bio &&
          !!cp.teachingInfo && !!cp.city && (cp.frequentAreas?.length ?? 0) > 0 && cp.level > 0;
        if (sEnabled) {
          setActiveTab("student");
        } else if (cEnabled) {
          setActiveTab("coach");
        }
      }
    } catch (err) {
      console.error("获取资料失败:", err);
    } finally {
      setLoading(false);
    }
  };

  // 学员身份是否已开通
  const studentEnabled = (() => {
    const sp = profile?.studentProfile;
    if (!sp) return false;
    return !!profile?.avatarVirtual &&
      !!profile?.avatarReal &&
      !!profile?.name &&
      !!profile?.phone && /^1[3-9]\d{9}$/.test(profile.phone) &&
      !!sp.realName &&
      !!sp.idNumber &&
      sp.level > 0;
  })();

  // 陪练身份是否已开通
  const coachEnabled = (() => {
    const cp = profile?.coachProfile;
    if (!cp) return false;
    return !!profile?.avatarVirtual &&
      !!profile?.avatarReal &&
      !!profile?.name &&
      !!profile?.phone && /^1[3-9]\d{9}$/.test(profile.phone) &&
      !!cp.realName &&
      !!cp.bio &&
      !!cp.teachingInfo &&
      !!cp.city &&
      (cp.frequentAreas?.length ?? 0) > 0 &&
      cp.level > 0;
  })();

  // 两个身份都未注册
  const noneEnabled = !studentEnabled && !coachEnabled;

  // Tab 点击处理：未开通的身份点击时弹窗提示
  const handleTabClick = (tab: PublishTab) => {
    if (tab === "student" && !studentEnabled) {
      Taro.showModal({
        title: "提示",
        content: "请去个人中心完善学员信息",
        showCancel: false,
        confirmText: "确认",
      });
      return;
    }
    if (tab === "coach" && !coachEnabled) {
      Taro.showModal({
        title: "提示",
        content: "请去个人中心完善陪练员信息",
        showCancel: false,
        confirmText: "确认",
      });
      return;
    }
    setActiveTab(tab);
  };

  // 跳转到"我的"页面
  const goToProfile = () => {
    Taro.switchTab({ url: "/pages/profile/profile" });
  };

  // 跳转到球馆选择页
  const goToVenuePicker = () => {
    Taro.navigateTo({ url: "/pages/venue-picker/venue-picker" });
  };

  // venue-picker 页面回传数据时调用（通过 Taro.getCurrentPages 调用）
  const onVenueSelected = (venue: SelectedVenue) => {
    setVenueName(venue.name);
    setVenueAddress(venue.address);
    setVenueLat(venue.latitude || null);
    setVenueLng(venue.longitude || null);
  };

  // 检查重复发布
  const checkDuplicate = async (): Promise<boolean> => {
    try {
      if (activeTab === "coach") {
        const res = await availabilitiesService.mine();
        if (res.ok && res.items) {
          const dup = res.items.find(
            (a) => a.playDate === playDate &&
              a.startHour === startHour &&
              a.endHour === endHour &&
              a.status === "open"
          );
          if (dup) return true;
        }
      } else {
        const res = await demandsService.mine();
        if (res.ok && res.items) {
          const dup = res.items.find(
            (d) => d.playDate === playDate &&
              d.startHour === startHour &&
              d.endHour === endHour &&
              d.status === "open"
          );
          if (dup) return true;
        }
      }
    } catch (e) {
      // 忽略错误，允许发布
    }
    return false;
  };

  // 发布陪练档期
  const handlePublishAvailability = async (force = false) => {
    if (!playDate) { Taro.showToast({ title: "请选择日期", icon: "none" }); return; }
    if (startHour >= endHour) { Taro.showToast({ title: "结束时间需大于开始时间", icon: "none" }); return; }
    if (!venueName) { Taro.showToast({ title: "请选择球馆", icon: "none" }); return; }
    if (note.length > 50) { Taro.showToast({ title: "备注不能超过50字", icon: "none" }); return; }

    if (!force) {
      const isDup = await checkDuplicate();
      if (isDup) {
        Taro.showModal({
          title: "提醒",
          content: "您已有一条相同日期和时段的档期正在发布中，是否继续发布？",
          confirmText: "继续发布",
          cancelText: "取消",
          success: async (res) => {
            if (res.confirm) handlePublishAvailability(true);
          },
        });
        return;
      }
    }

    setSubmitting(true);
    try {
      const timeSlot = inferTimeSlot(startHour);
      const res = await availabilitiesService.create({
        playDate,
        startHour,
        endHour,
        timeSlot,
        tempLocation: venueName,
        tempLat: venueLat,
        tempLng: venueLng,
        priceMin: priceMin ? Number(priceMin) : null,
        priceMax: priceMax ? Number(priceMax) : null,
        courtBookedBy,
        note: note.trim() || null,
      });
      if (res.ok) {
        Taro.showToast({ title: "发布成功", icon: "success" });
        resetForm();
        setTimeout(() => Taro.switchTab({ url: "/pages/index/index" }), 1500);
      }
    } catch (e: any) {
      Taro.showToast({ title: e?.message || "发布失败", icon: "none" });
    } finally {
      setSubmitting(false);
    }
  };

  // 发布学员需求
  const handlePublishDemand = async (force = false) => {
    if (!playDate) { Taro.showToast({ title: "请选择日期", icon: "none" }); return; }
    if (startHour >= endHour) { Taro.showToast({ title: "结束时间需大于开始时间", icon: "none" }); return; }
    if (!venueName) { Taro.showToast({ title: "请选择球馆", icon: "none" }); return; }
    if (!budgetMax) { Taro.showToast({ title: "请填写预算上限", icon: "none" }); return; }
    if (note.length > 50) { Taro.showToast({ title: "备注不能超过50字", icon: "none" }); return; }

    if (!force) {
      const isDup = await checkDuplicate();
      if (isDup) {
        Taro.showModal({
          title: "提醒",
          content: "您已有一条相同日期和时段的需求正在发布中，是否继续发布？",
          confirmText: "继续发布",
          cancelText: "取消",
          success: async (res) => {
            if (res.confirm) handlePublishDemand(true);
          },
        });
        return;
      }
    }

    setSubmitting(true);
    try {
      const timeSlot = inferTimeSlot(startHour);
      const res = await demandsService.create({
        playDate,
        startHour,
        endHour,
        timeSlot,
        locationName: venueName,
        locationLat: venueLat,
        locationLng: venueLng,
        expectedLevel,
        studentLevel,
        budgetMin: budgetMin ? Number(budgetMin) : null,
        budgetMax: Number(budgetMax),
        courtBookedBy,
        note: note.trim() || null,
      });
      if (res.ok) {
        Taro.showToast({ title: "发布成功", icon: "success" });
        resetForm();
        setTimeout(() => Taro.switchTab({ url: "/pages/index/index" }), 1500);
      }
    } catch (e: any) {
      Taro.showToast({ title: e?.message || "发布失败", icon: "none" });
    } finally {
      setSubmitting(false);
    }
  };

  const resetForm = () => {
    setPlayDate("");
    setStartHour(19);
    setEndHour(21);
    setCourtBookedBy("student");
    setNote("");
    setVenueName("");
    setVenueAddress("");
    setVenueLat(null);
    setVenueLng(null);
    setPriceMin("");
    setPriceMax("");
    setBudgetMin("");
    setBudgetMax("");
  };

  const today = new Date().toISOString().slice(0, 10);

  if (loading) {
    return <View className="page-publish"><Loading /></View>;
  }

  if (!user) {
    return (
      <View className="page-publish">
        <View className="login-empty">
          <View className="login-empty-icon">🏸</View>
          <Text className="login-empty-text">登录后体验全部功能</Text>
          <Button className="login-btn" onClick={() => Taro.navigateTo({ url: "/pages/login/login" })}>
            微信一键登录
          </Button>
        </View>
      </View>
    );
  }

  return (
    <View className="page-publish">
      {/* 顶部渐变背景 + 下沉式双 Tab */}
      <View className="publish-header">
        <View className="publish-tab-bar">
          <View
            className={`publish-tab-item ${activeTab === "student" ? "active" : ""} ${!studentEnabled ? "disabled" : ""}`}
            onClick={() => handleTabClick("student")}
          >
            <Text>发布学员订单</Text>
          </View>
          <View
            className={`publish-tab-item ${activeTab === "coach" ? "active" : ""} ${!coachEnabled ? "disabled" : ""}`}
            onClick={() => handleTabClick("coach")}
          >
            <Text>发布陪练员订单</Text>
          </View>
        </View>
      </View>

      {noneEnabled ? (
        /* 两身份都未注册：显示完善信息按钮 */
        <View className="empty-identity">
          <Text className="empty-icon">🏸</Text>
          <Text className="empty-title">尚未开通任何身份</Text>
          <Text className="empty-desc">请先在个人中心完善学员或陪练员信息后即可发布</Text>
          <Button className="go-profile-btn" onClick={goToProfile}>请去个人中心完善信息</Button>
        </View>
      ) : (
      <ScrollView scrollY className="form-scroll">
        {/* 学员 Tab */}
        {activeTab === "student" && studentEnabled && (
              <View className="form-card">
                <View className="section-title"><Text>发布学员需求</Text></View>

                <View className="form-item">
                  <Text className="form-label">日期 *</Text>
                  <Picker mode="date" start={today} value={playDate} onChange={(e) => setPlayDate(e.detail.value)}>
                    <View className="picker-value">
                      <Text className={playDate ? "" : "placeholder"}>{playDate || "请选择日期"}</Text>
                    </View>
                  </Picker>
                </View>

                <View className="form-item">
                  <Text className="form-label">开始时间 *</Text>
                  <Picker mode="selector" range={HOUR_OPTIONS.map((h) => h.label)} value={startHour - 6} onChange={(e) => setStartHour(Number(e.detail.value) + 6)}>
                    <View className="picker-value"><Text>{HOUR_OPTIONS.find(h => h.value === startHour)?.label}</Text></View>
                  </Picker>
                </View>

                <View className="form-item">
                  <Text className="form-label">结束时间 *</Text>
                  <Picker mode="selector" range={HOUR_OPTIONS.map((h) => h.label)} value={endHour - 6} onChange={(e) => setEndHour(Number(e.detail.value) + 6)}>
                    <View className="picker-value"><Text>{HOUR_OPTIONS.find(h => h.value === endHour)?.label}</Text></View>
                  </Picker>
                </View>

                <View className="form-item">
                  <Text className="form-label">球馆 *</Text>
                  <View className="venue-entry" onClick={goToVenuePicker}>
                    {venueName ? (
                      <View className="venue-entry-selected">
                        <Text className="venue-entry-name">{venueName}</Text>
                        {venueAddress ? <Text className="venue-entry-addr">{venueAddress}</Text> : null}
                      </View>
                    ) : (
                      <Text className="venue-entry-placeholder">点击选择球馆位置</Text>
                    )}
                    <Text className="venue-entry-arrow">›</Text>
                  </View>
                </View>

                <View className="form-item">
                  <Text className="form-label">期望陪练等级 *</Text>
                  <Picker mode="selector" range={LEVEL_OPTIONS.map((l) => l.label)} value={expectedLevel} onChange={(e) => setExpectedLevel(Number(e.detail.value))}>
                    <View className="picker-value"><Text>{LEVEL_OPTIONS[expectedLevel]?.label ?? "请选择"}</Text></View>
                  </Picker>
                </View>

                <View className="form-item">
                  <Text className="form-label">自身等级 *</Text>
                  <Picker mode="selector" range={LEVEL_OPTIONS.map((l) => l.label)} value={studentLevel} onChange={(e) => setStudentLevel(Number(e.detail.value))}>
                    <View className="picker-value"><Text>{LEVEL_OPTIONS[studentLevel]?.label ?? "请选择"}</Text></View>
                  </Picker>
                </View>

                <View className="form-item">
                  <Text className="form-label">最低预算（元/时）</Text>
                  <Input className="form-input" type="number" placeholder="选填" value={budgetMin} onInput={(e) => setBudgetMin(e.detail.value)} />
                </View>

                <View className="form-item">
                  <Text className="form-label">最高预算（元/时） *</Text>
                  <Input className="form-input" type="number" placeholder="请填写" value={budgetMax} onInput={(e) => setBudgetMax(e.detail.value)} />
                </View>

                <View className="form-item">
                  <Text className="form-label">谁订场地</Text>
                  <View className="radio-row">
                    {COURT_BOOKED_OPTIONS.map((o) => (
                      <View
                        key={o.value}
                        className={`radio-chip ${courtBookedBy === o.value ? "active" : ""}`}
                        onClick={() => setCourtBookedBy(o.value)}
                      >
                        <Text>{o.label}</Text>
                      </View>
                    ))}
                  </View>
                </View>

                <View className="form-item">
                  <Text className="form-label">备注（可选）</Text>
                  <Textarea className="form-textarea" placeholder="50字以内" value={note} onInput={(e) => setNote(e.detail.value)} maxlength={50} />
                  <Text className="char-count">{note.length}/50</Text>
                </View>
              </View>
        )}

        {/* 陪练员 Tab */}
        {activeTab === "coach" && coachEnabled && (
              <View className="form-card">
                <View className="section-title"><Text>发布陪练档期</Text></View>

                <View className="form-item">
                  <Text className="form-label">日期 *</Text>
                  <Picker mode="date" start={today} value={playDate} onChange={(e) => setPlayDate(e.detail.value)}>
                    <View className="picker-value">
                      <Text className={playDate ? "" : "placeholder"}>{playDate || "请选择日期"}</Text>
                    </View>
                  </Picker>
                </View>

                <View className="form-item">
                  <Text className="form-label">开始时间 *</Text>
                  <Picker mode="selector" range={HOUR_OPTIONS.map((h) => h.label)} value={startHour - 6} onChange={(e) => setStartHour(Number(e.detail.value) + 6)}>
                    <View className="picker-value"><Text>{HOUR_OPTIONS.find(h => h.value === startHour)?.label}</Text></View>
                  </Picker>
                </View>

                <View className="form-item">
                  <Text className="form-label">结束时间 *</Text>
                  <Picker mode="selector" range={HOUR_OPTIONS.map((h) => h.label)} value={endHour - 6} onChange={(e) => setEndHour(Number(e.detail.value) + 6)}>
                    <View className="picker-value"><Text>{HOUR_OPTIONS.find(h => h.value === endHour)?.label}</Text></View>
                  </Picker>
                </View>

                <View className="form-item">
                  <Text className="form-label">球馆 *</Text>
                  <View className="venue-entry" onClick={goToVenuePicker}>
                    {venueName ? (
                      <View className="venue-entry-selected">
                        <Text className="venue-entry-name">{venueName}</Text>
                        {venueAddress ? <Text className="venue-entry-addr">{venueAddress}</Text> : null}
                      </View>
                    ) : (
                      <Text className="venue-entry-placeholder">点击选择球馆位置</Text>
                    )}
                    <Text className="venue-entry-arrow">›</Text>
                  </View>
                </View>

                <View className="form-item">
                  <Text className="form-label">价位（元/时）</Text>
                  <Text className="form-hint">选填，不填则价格面议</Text>
                  <View className="price-preset-row">
                    {PRICE_PRESETS.map((p) => (
                      <View
                        key={p.label}
                        className={`price-preset-chip ${priceMin === String(p.min) && priceMax === String(p.max) ? "active" : ""}`}
                        onClick={() => { setPriceMin(String(p.min)); setPriceMax(String(p.max)); }}
                      >
                        <Text>{p.min}-{p.max}</Text>
                      </View>
                    ))}
                  </View>
                  <View className="dual-input-row">
                    <Input className="form-input" type="number" placeholder="最低" value={priceMin} onInput={(e) => setPriceMin(e.detail.value)} />
                    <Text className="dash">-</Text>
                    <Input className="form-input" type="number" placeholder="最高" value={priceMax} onInput={(e) => setPriceMax(e.detail.value)} />
                  </View>
                </View>

                <View className="form-item">
                  <Text className="form-label">谁订场地</Text>
                  <View className="radio-row">
                    {COURT_BOOKED_OPTIONS.map((o) => (
                      <View
                        key={o.value}
                        className={`radio-chip ${courtBookedBy === o.value ? "active" : ""}`}
                        onClick={() => setCourtBookedBy(o.value)}
                      >
                        <Text>{o.label}</Text>
                      </View>
                    ))}
                  </View>
                </View>

                <View className="form-item">
                  <Text className="form-label">备注（可选）</Text>
                  <Textarea className="form-textarea" placeholder="50字以内" value={note} onInput={(e) => setNote(e.detail.value)} maxlength={50} />
                  <Text className="char-count">{note.length}/50</Text>
                </View>
              </View>
        )}
      </ScrollView>
      )}

      {/* 底部发布按钮 */}
      {((activeTab === "student" && studentEnabled) || (activeTab === "coach" && coachEnabled)) && (
        <View className="submit-area safe-bottom">
          <Button
            className="submit-btn"
            loading={submitting}
            disabled={submitting}
            onClick={activeTab === "student" ? () => handlePublishDemand() : () => handlePublishAvailability()}
          >
            发布{activeTab === "student" ? "需求" : "档期"}
          </Button>
        </View>
      )}
    </View>
  );
}
