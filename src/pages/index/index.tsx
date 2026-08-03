import { View, Text, ScrollView } from "@tarojs/components";
import { useState, useEffect, useCallback } from "react";
import Taro, { useDidShow, usePullDownRefresh } from "@tarojs/taro";
import { availabilitiesService } from "../../services/availabilities";
import { demandsService } from "../../services/demands";
import Loading from "../../components/Loading";
import Empty from "../../components/Empty";
import RatingStars from "../../components/RatingStars";
import type { AvailabilityItem, DemandItem } from "../../types";
import "./index.scss";

const TIME_SLOTS = [
  { value: "", label: "全部时段" },
  { value: "morning", label: "上午" },
  { value: "afternoon", label: "下午" },
  { value: "evening", label: "晚上" },
];

const LEVELS = [
  { value: 0, label: "全部等级" },
  { value: 1, label: "Lv1+" },
  { value: 2, label: "Lv2+" },
  { value: 3, label: "Lv3+" },
  { value: 4, label: "Lv4+" },
  { value: 5, label: "Lv5+" },
];

export default function Index() {
  const [tab, setTab] = useState<"coach" | "student">("coach");
  const [coachList, setCoachList] = useState<AvailabilityItem[]>([]);
  const [studentList, setStudentList] = useState<DemandItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [timeSlot, setTimeSlot] = useState("");
  const [level, setLevel] = useState(0);
  const [showFilters, setShowFilters] = useState(false);

  const fetchList = useCallback(async (pageNum = 1, append = false) => {
    if (pageNum === 1) setLoading(true);
    try {
      const params: Record<string, unknown> = { page: pageNum, limit: 20 };
      if (timeSlot) params.timeSlot = timeSlot;
      if (level > 0) params.level = level;

      if (tab === "coach") {
        const res = await availabilitiesService.list(params);
        if (res.ok) {
          setCoachList(append ? [...coachList, ...res.items] : res.items);
          setTotal(res.total);
          setHasMore(pageNum * 20 < res.total);
        }
      } else {
        const res = await demandsService.list(params);
        if (res.ok) {
          setStudentList(append ? [...studentList, ...res.items] : res.items);
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
  }, [tab, timeSlot, level]);

  useEffect(() => {
    setPage(1);
    setHasMore(true);
    fetchList(1);
  }, [tab, timeSlot, level]);

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

  const renderCoachList = () => (
    coachList.length === 0 && !loading ? (
      <Empty text="暂无档期" />
    ) : (
      coachList.map((item) => (
        <View key={item.id} className="card" onClick={() => goDetail(item.id)}>
          <View className="card-header">
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

          <View className="card-body">
            <View className="info-row">
              <Text className="info-label">日期</Text>
              <Text className="info-value">{item.playDate}</Text>
            </View>
            <View className="info-row">
              <Text className="info-label">时间</Text>
              <Text className="info-value">{timeLabel(item.timeSlot)} {formatTime(item.startHour, item.endHour)}</Text>
            </View>
            <View className="info-row">
              <Text className="info-label">球馆</Text>
              <Text className="info-value">{item.venueName}</Text>
            </View>
          </View>

          <View className="card-footer">
            <Text className="price">
              {item.priceMin != null ? `${item.priceMin}-${item.priceMax}元/时` : "价格面议"}
            </Text>
            <Text className="court-badge">
              {item.courtBookedBy === "coach" ? "陪练订场" : item.courtBookedBy === "student" ? "学员订场" : "协商订场"}
            </Text>
          </View>
        </View>
      ))
    )
  );

  const renderStudentList = () => (
    studentList.length === 0 && !loading ? (
      <Empty text="暂无需求" />
    ) : (
      studentList.map((item) => (
        <View key={item.id} className="card" onClick={() => goDetail(item.id)}>
          <View className="card-header">
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

          <View className="card-body">
            <View className="info-row">
              <Text className="info-label">日期</Text>
              <Text className="info-value">{item.playDate}</Text>
            </View>
            <View className="info-row">
              <Text className="info-label">时间</Text>
              <Text className="info-value">{timeLabel(item.timeSlot)} {formatTime(item.startHour, item.endHour)}</Text>
            </View>
            {item.locationName && (
              <View className="info-row">
                <Text className="info-label">地点</Text>
                <Text className="info-value">{item.locationName}</Text>
              </View>
            )}
          </View>

          <View className="card-footer">
            <Text className="price">
              {item.budgetMax != null ? `预算 ¥${item.budgetMin ?? 0}-${item.budgetMax}/时` : "预算面议"}
            </Text>
          </View>
        </View>
      ))
    )
  );

  return (
    <View className="page-index">
      {/* 顶部 Tab */}
      <View className="tab-bar">
        <View className={`tab-item ${tab === "coach" ? "active" : ""}`} onClick={() => setTab("coach")}>
          <Text>陪练大厅</Text>
        </View>
        <View className={`tab-item ${tab === "student" ? "active" : ""}`} onClick={() => setTab("student")}>
          <Text>学员大厅</Text>
        </View>
      </View>

      {/* 筛选栏 */}
      <View className="filter-bar">
        <View className="filter-trigger" onClick={() => setShowFilters(!showFilters)}>
          <Text>筛选</Text>
          <Text className="filter-arrow">{showFilters ? "▲" : "▼"}</Text>
        </View>
        <Text className="filter-count">共{total}条</Text>
      </View>

      {showFilters && (
        <View className="filter-panel">
          <View className="filter-row">
            <Text className="filter-label">时段</Text>
            <View className="filter-options">
              {TIME_SLOTS.map((s) => (
                <View
                  key={s.value}
                  className={`filter-tag ${timeSlot === s.value ? "active" : ""}`}
                  onClick={() => setTimeSlot(s.value)}
                >
                  <Text>{s.label}</Text>
                </View>
              ))}
            </View>
          </View>
          <View className="filter-row">
            <Text className="filter-label">等级</Text>
            <View className="filter-options">
              {LEVELS.map((l) => (
                <View
                  key={l.value}
                  className={`filter-tag ${level === l.value ? "active" : ""}`}
                  onClick={() => setLevel(l.value)}
                >
                  <Text>{l.label}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
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