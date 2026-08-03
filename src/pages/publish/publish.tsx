import { View, Text, Input, Textarea, Button, Picker } from "@tarojs/components";
import { useState, useEffect } from "react";
import Taro, { useRouter } from "@tarojs/taro";
import { availabilitiesService } from "../../services/availabilities";
import { demandsService } from "../../services/demands";
import { useUserStore } from "../../stores/user";
import "./publish.scss";

const TIME_SLOTS = [
  { value: "morning", label: "上午" },
  { value: "afternoon", label: "下午" },
  { value: "evening", label: "晚上" },
];

const LEVELS = [
  { value: 0, label: "入门" },
  { value: 1, label: "初级" },
  { value: 2, label: "中级" },
  { value: 3, label: "高级" },
  { value: 4, label: "专业" },
  { value: 5, label: "顶尖" },
];

const HOURS = Array.from({ length: 24 }, (_, i) => ({ value: i, label: `${i}:00` }));

const COURT_OPTIONS = [
  { value: "either", label: "协商" },
  { value: "coach", label: "陪练订场" },
  { value: "student", label: "学员订场" },
];

export default function Publish() {
  const router = useRouter();
  const { type } = router.params;
  const { user } = useUserStore();

  const [loading, setLoading] = useState(false);

  // 陪练档期表单
  const [playDate, setPlayDate] = useState("");
  const [startHour, setStartHour] = useState(18);
  const [endHour, setEndHour] = useState(20);
  const [venueName, setVenueName] = useState("");
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");
  const [courtBookedBy, setCourtBookedBy] = useState("either");
  const [note, setNote] = useState("");

  // 学员需求表单
  const [locationName, setLocationName] = useState("");
  const [expectedLevel, setExpectedLevel] = useState(2);
  const [studentLevel, setStudentLevel] = useState(0);
  const [budgetMin, setBudgetMin] = useState("");
  const [budgetMax, setBudgetMax] = useState("");

  const isCoach = user?.role === "coach";
  const isStudent = user?.role === "student";

  if (!user) {
    return (
      <View className="page-publish">
        <View className="empty">
          <Text>请先登录</Text>
          <Button className="login-btn" onClick={() => Taro.navigateTo({ url: "/pages/login/login" })}>
            去登录
          </Button>
        </View>
      </View>
    );
  }

  // 未选择发布类型
  if (!type) {
    return (
      <View className="page-publish">
        <View className="publish-options">
          {isCoach && (
            <View
              className="option-card"
              onClick={() => Taro.redirectTo({ url: "/pages/publish/publish?type=availability" })}
            >
              <View className="option-icon coach-icon" />
              <Text className="option-title">发布陪练档期</Text>
              <Text className="option-desc">发布你的可用时间，等待学员联系</Text>
            </View>
          )}
          {isStudent && (
            <View
              className="option-card"
              onClick={() => Taro.redirectTo({ url: "/pages/publish/publish?type=demand" })}
            >
              <View className="option-icon student-icon" />
              <Text className="option-title">发布学员需求</Text>
              <Text className="option-desc">描述你的需求，寻找合适的陪练</Text>
            </View>
          )}
          {!isCoach && !isStudent && (
            <View className="empty">
              <Text>请先完善个人资料并选择角色</Text>
            </View>
          )}
        </View>
      </View>
    );
  }

  // 陪练档期发布表单
  if (type === "availability") {
    const handleSubmit = async () => {
      if (!playDate) { Taro.showToast({ title: "请选择日期", icon: "none" }); return; }
      if (startHour >= endHour) { Taro.showToast({ title: "结束时间需大于开始时间", icon: "none" }); return; }
      if (!venueName.trim()) { Taro.showToast({ title: "请填写球馆名称", icon: "none" }); return; }
      if (note.length > 100) { Taro.showToast({ title: "授课信息不能超过100字", icon: "none" }); return; }

      setLoading(true);
      try {
        const res = await availabilitiesService.create({
          playDate,
          startHour,
          endHour,
          tempLocation: venueName.trim(),
          priceMin: priceMin ? Number(priceMin) : null,
          priceMax: priceMax ? Number(priceMax) : null,
          courtBookedBy,
          note: note.trim() || null,
        });
        if (res.ok) {
          Taro.showToast({ title: "发布成功", icon: "success" });
          setTimeout(() => Taro.switchTab({ url: "/pages/index/index" }), 1500);
        }
      } catch (e: any) {
        Taro.showToast({ title: e?.message || "发布失败", icon: "none" });
      } finally {
        setLoading(false);
      }
    };

    return (
      <View className="page-publish-form">
        <View className="form-header">
          <Text className="back-btn" onClick={() => Taro.redirectTo({ url: "/pages/publish/publish" })}>← 返回</Text>
          <Text className="form-title">发布陪练档期</Text>
        </View>

        <View className="form-card">
          <View className="form-item">
            <Text className="form-label">活动日期 *</Text>
            <Picker mode="date" value={playDate} onChange={(e) => setPlayDate(e.detail.value)}>
              <View className="picker-value">
                <Text className={playDate ? "" : "placeholder"}>{playDate || "请选择日期"}</Text>
              </View>
            </Picker>
          </View>

          <View className="form-item">
            <Text className="form-label">开始时间 *</Text>
            <Picker mode="selector" range={HOURS.map((h) => h.label)} value={startHour} onChange={(e) => setStartHour(Number(e.detail.value))}>
              <View className="picker-value">
                <Text>{HOURS[startHour]?.label}</Text>
              </View>
            </Picker>
          </View>

          <View className="form-item">
            <Text className="form-label">结束时间 *</Text>
            <Picker mode="selector" range={HOURS.map((h) => h.label)} value={endHour} onChange={(e) => setEndHour(Number(e.detail.value))}>
              <View className="picker-value">
                <Text>{HOURS[endHour]?.label}</Text>
              </View>
            </Picker>
          </View>

          <View className="form-item">
            <Text className="form-label">球馆名称 *</Text>
            <Input
              className="form-input"
              placeholder="请输入球馆名称"
              value={venueName}
              onInput={(e) => setVenueName(e.detail.value)}
            />
          </View>

          <View className="form-item">
            <Text className="form-label">最低价格（元/时）</Text>
            <Input
              className="form-input"
              type="number"
              placeholder="选填"
              value={priceMin}
              onInput={(e) => setPriceMin(e.detail.value)}
            />
          </View>

          <View className="form-item">
            <Text className="form-label">最高价格（元/时）</Text>
            <Input
              className="form-input"
              type="number"
              placeholder="选填"
              value={priceMax}
              onInput={(e) => setPriceMax(e.detail.value)}
            />
          </View>

          <View className="form-item">
            <Text className="form-label">谁订场地</Text>
            <Picker mode="selector" range={COURT_OPTIONS.map((c) => c.label)} value={COURT_OPTIONS.findIndex((c) => c.value === courtBookedBy)} onChange={(e) => setCourtBookedBy(COURT_OPTIONS[Number(e.detail.value)].value)}>
              <View className="picker-value">
                <Text>{COURT_OPTIONS.find((c) => c.value === courtBookedBy)?.label}</Text>
              </View>
            </Picker>
          </View>

          <View className="form-item">
            <Text className="form-label">授课信息</Text>
            <Text className="form-hint">简要介绍你的授课风格和内容（100字以内）</Text>
            <Textarea
              className="form-textarea"
              placeholder="例：擅长成人基础教学，纠正动作细节"
              value={note}
              onInput={(e) => setNote(e.detail.value)}
              maxlength={100}
            />
            <Text className="char-count">{note.length}/100</Text>
          </View>

          <View className="form-notice">
            <Text>发布前需确保：虚拟头像、真人头像（已审核）、所在城市、常住区域已填写完成</Text>
          </View>
        </View>

        <View className="form-submit">
          <Button className="submit-btn" onClick={handleSubmit} loading={loading} disabled={loading}>
            发布档期
          </Button>
        </View>
      </View>
    );
  }

  // 学员需求发布表单
  if (type === "demand") {
    const handleSubmit = async () => {
      if (!playDate) { Taro.showToast({ title: "请选择日期", icon: "none" }); return; }
      if (startHour >= endHour) { Taro.showToast({ title: "结束时间需大于开始时间", icon: "none" }); return; }
      if (!budgetMax) { Taro.showToast({ title: "请填写预算上限", icon: "none" }); return; }
      if (note.length > 100) { Taro.showToast({ title: "个人介绍不能超过100字", icon: "none" }); return; }

      setLoading(true);
      try {
        const res = await demandsService.create({
          playDate,
          startHour,
          endHour,
          locationName: locationName.trim() || null,
          expectedLevel,
          studentLevel,
          budgetMin: budgetMin ? Number(budgetMin) : null,
          budgetMax: Number(budgetMax),
          courtBookedBy,
          note: note.trim() || null,
        });
        if (res.ok) {
          Taro.showToast({ title: "发布成功", icon: "success" });
          setTimeout(() => Taro.switchTab({ url: "/pages/index/index" }), 1500);
        }
      } catch (e: any) {
        Taro.showToast({ title: e?.message || "发布失败", icon: "none" });
      } finally {
        setLoading(false);
      }
    };

    return (
      <View className="page-publish-form">
        <View className="form-header">
          <Text className="back-btn" onClick={() => Taro.redirectTo({ url: "/pages/publish/publish" })}>← 返回</Text>
          <Text className="form-title">发布学员需求</Text>
        </View>

        <View className="form-card">
          <View className="form-item">
            <Text className="form-label">活动日期 *</Text>
            <Picker mode="date" value={playDate} onChange={(e) => setPlayDate(e.detail.value)}>
              <View className="picker-value">
                <Text className={playDate ? "" : "placeholder"}>{playDate || "请选择日期"}</Text>
              </View>
            </Picker>
          </View>

          <View className="form-item">
            <Text className="form-label">开始时间 *</Text>
            <Picker mode="selector" range={HOURS.map((h) => h.label)} value={startHour} onChange={(e) => setStartHour(Number(e.detail.value))}>
              <View className="picker-value">
                <Text>{HOURS[startHour]?.label}</Text>
              </View>
            </Picker>
          </View>

          <View className="form-item">
            <Text className="form-label">结束时间 *</Text>
            <Picker mode="selector" range={HOURS.map((h) => h.label)} value={endHour} onChange={(e) => setEndHour(Number(e.detail.value))}>
              <View className="picker-value">
                <Text>{HOURS[endHour]?.label}</Text>
              </View>
            </Picker>
          </View>

          <View className="form-item">
            <Text className="form-label">期望地点</Text>
            <Input
              className="form-input"
              placeholder="选填，如：朝阳区"
              value={locationName}
              onInput={(e) => setLocationName(e.detail.value)}
            />
          </View>

          <View className="form-item">
            <Text className="form-label">期望陪练等级 *</Text>
            <Picker mode="selector" range={LEVELS.map((l) => l.label)} value={expectedLevel} onChange={(e) => setExpectedLevel(Number(e.detail.value))}>
              <View className="picker-value">
                <Text>Lv.{expectedLevel}+ ({LEVELS[expectedLevel]?.label})</Text>
              </View>
            </Picker>
          </View>

          <View className="form-item">
            <Text className="form-label">自身等级 *</Text>
            <Picker mode="selector" range={LEVELS.map((l) => l.label)} value={studentLevel} onChange={(e) => setStudentLevel(Number(e.detail.value))}>
              <View className="picker-value">
                <Text>{LEVELS[studentLevel]?.label}</Text>
              </View>
            </Picker>
          </View>

          <View className="form-item">
            <Text className="form-label">最低预算（元/时）</Text>
            <Input
              className="form-input"
              type="number"
              placeholder="选填"
              value={budgetMin}
              onInput={(e) => setBudgetMin(e.detail.value)}
            />
          </View>

          <View className="form-item">
            <Text className="form-label">最高预算（元/时） *</Text>
            <Input
              className="form-input"
              type="number"
              placeholder="请填写"
              value={budgetMax}
              onInput={(e) => setBudgetMax(e.detail.value)}
            />
          </View>

          <View className="form-item">
            <Text className="form-label">谁订场地</Text>
            <Picker mode="selector" range={COURT_OPTIONS.map((c) => c.label)} value={COURT_OPTIONS.findIndex((c) => c.value === courtBookedBy)} onChange={(e) => setCourtBookedBy(COURT_OPTIONS[Number(e.detail.value)].value)}>
              <View className="picker-value">
                <Text>{COURT_OPTIONS.find((c) => c.value === courtBookedBy)?.label}</Text>
              </View>
            </Picker>
          </View>

          <View className="form-item">
            <Text className="form-label">个人介绍</Text>
            <Text className="form-hint">简要介绍你的练球情况（100字以内）</Text>
            <Textarea
              className="form-textarea"
              placeholder="例：打羽毛球2年，想找陪练提高技术"
              value={note}
              onInput={(e) => setNote(e.detail.value)}
              maxlength={100}
            />
            <Text className="char-count">{note.length}/100</Text>
          </View>
        </View>

        <View className="form-submit">
          <Button className="submit-btn" onClick={handleSubmit} loading={loading} disabled={loading}>
            发布需求
          </Button>
        </View>
      </View>
    );
  }

  return null;
}