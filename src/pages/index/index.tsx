import { View, Text, ScrollView, Picker } from "@tarojs/components";
import { useState, useEffect, useCallback } from "react";
import Taro, { useDidShow, usePullDownRefresh } from "@tarojs/taro";
import { availabilitiesService } from "../../services/availabilities";
import { demandsService } from "../../services/demands";
import Loading from "../../components/Loading";
import Empty from "../../components/Empty";
import RatingStars from "../../components/RatingStars";
import CustomNav from "../../components/CustomNav/CustomNav";
import { BEIJING_DISTRICTS, BADMINTON_LEVELS, MAX_PRICE_OPTIONS, COURT_BOOKED_OPTIONS } from "../../config/site";
import type { AvailabilityItem, DemandItem } from "../../types";
import "./index.scss";

// 时段预设（单选，映射到 startHour/endHour）
const TIME_PRESETS = [
  { value: "", label: "不限", start: null as number | null, end: null as number | null },
  { value: "morning", label: "早晨 6-9", start: 6, end: 9 },
  { value: "forenoon", label: "上午 9-12", start: 9, end: 12 },
  { value: "afternoon", label: "下午 12-18", start: 12, end: 18 },
  { value: "evening", label: "晚上 18-23", start: 18, end: 23 },
];

export default function Index() {
  const [tab, setTab] = useState<"coach" | "student">("student");
  const [coachList, setCoachList] = useState<AvailabilityItem[]>([]);
  const [studentList, setStudentList] = useState<DemandItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  // 顶部半屏筛选面板
  const [showPanel, setShowPanel] = useState(false);

  // 筛选状态
  const [date, setDate] = useState("");
  const [timePreset, setTimePreset] = useState("");
  const [district, setDistrict] = useState("");
  const [level, setLevel] = useState(0);
  const [studentLevel, setStudentLevel] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [courtBooked, setCourtBooked] = useState("");
  // 「附近」筛选：定位坐标（仅学员大厅生效，与区域筛选互斥）
  const [near, setNear] = useState<{ lat: number; lng: number } | null>(null);

  const startHour = TIME_PRESETS.find(t => t.value === timePreset)?.start ?? null;
  const endHour = TIME_PRESETS.find(t => t.value === timePreset)?.end ?? null;

  const hasActiveFilter =
    !!date ||
    !!timePreset ||
    !!district ||
    !!near ||
    level > 0 ||
    studentLevel > 0 ||
    maxPrice > 0 ||
    !!courtBooked;

  const fetchList = useCallback(async (pageNum = 1, append = false) => {
    if (pageNum === 1) setLoading(true);
    try {
      const params: Record<string, unknown> = { page: pageNum, limit: 20 };
      if (date) params.date = date;
      if (startHour != null) params.startHour = startHour;
      if (endHour != null) params.endHour = endHour;
      if (district) params.district = district;
      if (courtBooked) params.courtBookedBy = courtBooked;
      if (near && tab === "student") params.near = `${near.lat},${near.lng}`;

      if (tab === "coach") {
        if (level > 0) params.level = level;
        if (maxPrice > 0) params.maxPrice = maxPrice;
        const res = await availabilitiesService.list(params);
        if (res.ok) {
          setCoachList((prev) => (append ? [...prev, ...res.items] : res.items));
          setTotal(res.total);
          setHasMore(pageNum * 20 < res.total);
        }
      } else {
        if (level > 0) params.expectedLevel = level;
        if (studentLevel > 0) params.studentLevel = studentLevel;
        if (maxPrice > 0) params.maxBudget = maxPrice;
        const res = await demandsService.list(params);
        if (res.ok) {
          setStudentList((prev) => (append ? [...prev, ...res.items] : res.items));
          setTotal(res.total);
          setHasMore(pageNum * 20 < res.total);
        }
      }
    } catch (err) {
      console.error("获取列表失败:", err);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, [tab, date, startHour, endHour, district, near, level, studentLevel, maxPrice, courtBooked]);

  useEffect(() => {
    setPage(1);
    setHasMore(true);
    fetchList(1);
  }, [tab, date, timePreset, district, near, level, studentLevel, maxPrice, courtBooked]);

  useDidShow(() => {
    fetchList(1);
  });

  usePullDownRefresh(() => {
    setRefreshing(true);
    setPage(1);
    fetchList(1).then(() => Taro.stopPullDownRefresh());
  });

  const loadMore = () => {
    if (loading || !hasMore) return;
    const nextPage = page + 1;
    setPage(nextPage);
    fetchList(nextPage, true);
  };

  const goDetail = (id: string) => {
    Taro.navigateTo({
      url: tab === "coach"
        ? `/pages/availability-detail/availability-detail?id=${id}`
        : `/pages/demand-detail/demand-detail?id=${id}`,
    });
  };

  const timeLabel = (slot: string) => {
    const map: Record<string, string> = { morning: "上午", afternoon: "下午", evening: "晚上" };
    return map[slot] || slot;
  };

  const formatTime = (start: number, end: number) => `${start}:00-${end}:00`;

  const clearFilters = () => {
    setDate("");
    setTimePreset("");
    setDistrict("");
    setNear(null);
    setLevel(0);
    setStudentLevel(0);
    setMaxPrice(0);
    setCourtBooked("");
  };

  // 切换「附近」筛选：开启时获取定位，与区域筛选互斥
  const toggleNear = () => {
    if (near) { setNear(null); return; }
    Taro.getLocation({
      type: "gcj02",
      success: (res) => {
        setNear({ lat: res.latitude, lng: res.longitude });
        setDistrict("");
      },
      fail: () => {
        Taro.showModal({
          title: "需要位置权限",
          content: "开启位置权限后，可查看你附近球馆的学员需求",
          confirmText: "去开启",
          cancelText: "取消",
          success: (r) => { if (r.confirm) Taro.openSetting(); },
        });
      },
    });
  };



  // 陪练卡片
  const renderCoachList = () => (
    coachList.length === 0 && !loading ? (
      <Empty text="暂无档期" />
    ) : (
      coachList.map((item) => (
        <View key={item.id} className="card" onClick={() => goDetail(item.id)}>
          <View className="card-top">
            <View className="user-info">
              {item.coachAvatar ? (
                <View className="avatar" style={{ backgroundImage: `url(${item.coachAvatar})` }} />
              ) : (
                <View className="avatar avatar-placeholder">
                  <Text>{(item.coachName || "?")[0]}</Text>
                </View>
              )}
              <View className="user-meta">
                <Text className="name">{item.coachName}</Text>
                <View className="rating-row">
                  <RatingStars rating={item.coachRating ?? 5} />
                  {item.reviewCount >= 5 && item.coachRating != null && (
                    <Text className="rating-text">{item.coachRating}分</Text>
                  )}
                  {item.reviewCount < 5 && (
                    <Text className="review-hint">{item.reviewCount}条评价</Text>
                  )}
                </View>
              </View>
            </View>
            <View className="level-badge">
              <Text>Lv.{item.coachLevel ?? "?"}</Text>
            </View>
          </View>

          <View className="card-mid">
            <Text className="mid-text">{item.playDate}</Text>
            <Text className="mid-dot">·</Text>
            <Text className="mid-text">{timeLabel(item.timeSlot)} {formatTime(item.startHour, item.endHour)}</Text>
            <Text className="mid-dot">·</Text>
            <Text className="mid-text">{item.venueName}</Text>
          </View>

          <View className="card-bottom">
            <Text className="court-badge">
              {item.courtBookedBy === "coach" ? "陪练订场" : item.courtBookedBy === "student" ? "学员订场" : "协商订场"}
            </Text>
            <View className="price-wrap">
              {item.priceMin != null ? (
                <>
                  <Text className="price">¥{item.priceMin}-{item.priceMax}</Text>
                  <Text className="price-unit">/时</Text>
                </>
              ) : (
                <Text className="price price-miaoyi">价格面议</Text>
              )}
            </View>
          </View>
        </View>
      ))
    )
  );

  // 学员需求卡片
  const renderStudentList = () => (
    studentList.length === 0 && !loading ? (
      <Empty text={near ? "附近暂无匹配需求，可关闭「只看附近」查看全部" : "暂无需求"} />
    ) : (
      studentList.map((item) => (
        <View key={item.id} className="card" onClick={() => goDetail(item.id)}>
          <View className="card-top">
            <View className="user-info">
              {item.userAvatar ? (
                <View className="avatar" style={{ backgroundImage: `url(${item.userAvatar})` }} />
              ) : (
                <View className="avatar avatar-placeholder">
                  <Text>{(item.userName || "?")[0]}</Text>
                </View>
              )}
              <View className="user-meta">
                <Text className="name">{item.userName}</Text>
                <Text className="sub-text">期望陪练 Lv.{item.expectedLevel ?? "?"}+</Text>
              </View>
            </View>
            {item.studentLevel != null && (
              <View className="level-badge level-student">
                <Text>Lv.{item.studentLevel}</Text>
              </View>
            )}
          </View>

          <View className="card-mid">
            <Text className="mid-text">{item.playDate}</Text>
            <Text className="mid-dot">·</Text>
            <Text className="mid-text">{timeLabel(item.timeSlot)} {formatTime(item.startHour, item.endHour)}</Text>
            {item.locationName && (
              <>
                <Text className="mid-dot">·</Text>
                <Text className="mid-text">{item.locationName}</Text>
              </>
            )}
          </View>

          <View className="card-bottom">
            <View className="badge-group">
              <Text className="court-badge">期望 Lv.{item.expectedLevel ?? "?"}+</Text>
              <Text className="court-badge">方圆{item.radiusKm ?? 5}km</Text>
            </View>
            <View className="price-wrap">
              {item.budgetMax != null ? (
                <>
                  <Text className="price">¥{item.budgetMin ?? 0}-{item.budgetMax}</Text>
                  <Text className="price-unit">/时</Text>
                </>
              ) : (
                <Text className="price price-miaoyi">预算面议</Text>
              )}
            </View>
          </View>
        </View>
      ))
    )
  );

  return (
    <View className={`page-index ${tab === "student" ? "tab-student" : "tab-coach"}`}>
      {/* 统一自定义导航栏 */}
      <CustomNav title="羽球搭子" />
      {/* 顶部渐变背景区 + 下沉式 Tab + 筛选条 */}
      <View className="header-gradient">
        {/* 下沉式双 Tab */}
        <View className="sunk-tab-bar">
          <View
            className={`sunk-tab ${tab === "student" ? "active" : ""}`}
            onClick={() => setTab("student")}
          >
            <Text className="sunk-tab-text">学员大厅</Text>
          </View>
          <View
            className={`sunk-tab ${tab === "coach" ? "active" : ""}`}
            onClick={() => setTab("coach")}
          >
            <Text className="sunk-tab-text">陪练大厅</Text>
          </View>
        </View>

        {/* 筛选入口栏（仅一个"筛选"按钮，点击弹出顶部半屏面板） */}
        <View className="filter-entry-bar">
          <View className={`entry-item ${hasActiveFilter ? "active" : ""}`} onClick={() => setShowPanel(true)}>
            <Text className="entry-icon-filter">▦</Text>
            <Text className="entry-text">筛选</Text>
            {hasActiveFilter && <View className="entry-dot" />}
            <Text className="entry-icon">▾</Text>
          </View>
          {hasActiveFilter && (
            <Text className="entry-clear" onClick={clearFilters}>清空</Text>
          )}
        </View>
      </View>

      {/* 顶部半屏筛选面板 */}
      {showPanel && (
        <>
          <View className="panel-mask" onClick={() => setShowPanel(false)} />
          <View className="filter-panel-top">
            {/* 下拉指示器 */}
            <View className="panel-handle" />

            <ScrollView className="panel-scroll" scrollY>
              {/* 日期 */}
              <View className="panel-group">
                <Text className="group-title">日期</Text>
                <View className="chip-row">
                  <Picker mode="date" value={date} onChange={(e) => setDate(e.detail.value)}>
                    <View className={`chip ${date ? "active" : ""}`}>
                      <Text>{date || "选择日期"}</Text>
                    </View>
                  </Picker>
                  {date && (
                    <View className="chip chip-clear" onClick={() => setDate("")}>
                      <Text>清除日期</Text>
                    </View>
                  )}
                </View>
              </View>

              {/* 附近（仅学员大厅） */}
              {tab === "student" && (
                <View className="panel-group">
                  <Text className="group-title">位置</Text>
                  <View className="chip-row">
                    <View className={`chip ${near ? "active" : ""}`} onClick={toggleNear}>
                      <Text>{near ? "📍 附近已开启" : "📍 只看附近"}</Text>
                    </View>
                  </View>
                  {near && (
                    <Text className="group-hint">仅显示期望地点在其匹配范围内的需求</Text>
                  )}
                </View>
              )}

              {/* 区域 */}
              <View className="panel-group">
                <Text className="group-title">区域（单选）</Text>
                <View className="chip-row">
                  <View className={`chip ${!district ? "active" : ""}`} onClick={() => { setDistrict(""); setNear(null); }}>
                    <Text>不限</Text>
                  </View>
                  {BEIJING_DISTRICTS.map((d) => (
                    <View
                      key={d}
                      className={`chip ${district === d ? "active" : ""}`}
                      onClick={() => { setDistrict(d); setNear(null); }}
                    >
                      <Text>{d}区</Text>
                    </View>
                  ))}
                </View>
              </View>

              {/* 时段（单选） */}
              <View className="panel-group">
                <Text className="group-title">时段（单选）</Text>
                <View className="chip-row">
                  {TIME_PRESETS.map((t) => (
                    <View
                      key={t.value}
                      className={`chip ${timePreset === t.value ? "active" : ""}`}
                      onClick={() => setTimePreset(t.value)}
                    >
                      <Text>{t.label}</Text>
                    </View>
                  ))}
                </View>
              </View>

              {/* 等级 */}
              <View className="panel-group">
                <Text className="group-title">{tab === "coach" ? "陪练等级（单选）" : "期望等级（单选）"}</Text>
                <View className="chip-row">
                  <View className={`chip ${level === 0 ? "active" : ""}`} onClick={() => setLevel(0)}>
                    <Text>不限</Text>
                  </View>
                  {BADMINTON_LEVELS.filter(l => l.value > 0).map((l) => (
                    <View
                      key={l.value}
                      className={`chip ${level === l.value ? "active" : ""}`}
                      onClick={() => setLevel(l.value)}
                    >
                      <Text>{l.value}级+</Text>
                    </View>
                  ))}
                </View>
              </View>

              {/* 学员等级（仅学员大厅） */}
              {tab === "student" && (
                <View className="panel-group">
                  <Text className="group-title">学员等级（单选）</Text>
                  <View className="chip-row">
                    <View className={`chip ${studentLevel === 0 ? "active" : ""}`} onClick={() => setStudentLevel(0)}>
                      <Text>不限</Text>
                    </View>
                    {BADMINTON_LEVELS.filter(l => l.value > 0).map((l) => (
                      <View
                        key={l.value}
                        className={`chip ${studentLevel === l.value ? "active" : ""}`}
                        onClick={() => setStudentLevel(l.value)}
                      >
                        <Text>≤{l.value}级</Text>
                      </View>
                    ))}
                  </View>
                </View>
              )}

              {/* 预算上限 */}
              <View className="panel-group">
                <Text className="group-title">预算上限（单选）</Text>
                <View className="chip-row">
                  <View className={`chip ${maxPrice === 0 ? "active" : ""}`} onClick={() => setMaxPrice(0)}>
                    <Text>不限</Text>
                  </View>
                  {MAX_PRICE_OPTIONS.map((p) => (
                    <View
                      key={p.value}
                      className={`chip ${maxPrice === p.value ? "active" : ""}`}
                      onClick={() => setMaxPrice(p.value)}
                    >
                      <Text>{p.label}</Text>
                    </View>
                  ))}
                </View>
              </View>

              {/* 场地预订 */}
              <View className="panel-group">
                <Text className="group-title">场地预订（单选）</Text>
                <View className="chip-row">
                  <View className={`chip ${!courtBooked ? "active" : ""}`} onClick={() => setCourtBooked("")}>
                    <Text>不限</Text>
                  </View>
                  {COURT_BOOKED_OPTIONS.map((o) => (
                    <View
                      key={o.value}
                      className={`chip ${courtBooked === o.value ? "active" : ""}`}
                      onClick={() => setCourtBooked(o.value)}
                    >
                      <Text>{o.label}</Text>
                    </View>
                  ))}
                </View>
              </View>
            </ScrollView>

            {/* 底部双按钮 */}
            <View className="panel-footer safe-bottom">
              <View className="panel-btn-clear" onClick={clearFilters}>
                <Text>清空筛选</Text>
              </View>
              <View className="panel-btn-confirm" onClick={() => setShowPanel(false)}>
                <Text>查看 {total} 条结果</Text>
              </View>
            </View>
          </View>
        </>
      )}

      {/* 列表 */}
      <ScrollView
        className="list-scroll"
        scrollY
        onScrollToLower={loadMore}
        lowerThreshold={100}
      >
        {loading && !refreshing ? (
          <Loading />
        ) : tab === "coach" ? (
          renderCoachList()
        ) : (
          renderStudentList()
        )}

        {hasMore && !loading && (
          <View className="load-more" onClick={loadMore}>
            <Text>加载更多</Text>
          </View>
        )}
        {!hasMore && (tab === "coach" ? coachList.length : studentList.length) > 0 && (
          <View className="no-more">
            <Text>没有更多了</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}
