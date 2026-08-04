import { View, Text, ScrollView } from "@tarojs/components";
import { useState, useEffect } from "react";
import Taro, { useDidShow } from "@tarojs/taro";
import { availabilitiesService } from "../../services/availabilities";
import { demandsService } from "../../services/demands";
import Loading from "../../components/Loading";
import Empty from "../../components/Empty";
import type { Availability, Demand } from "../../types";
import "./my-availabilities.scss";

type PostTab = "student" | "coach";

const TIME_SLOT_LABEL: Record<string, string> = {
  morning: "上午",
  afternoon: "下午",
  evening: "晚上",
};

const STATUS_MAP: Record<string, { label: string; className: string }> = {
  open: { label: "进行中", className: "status-open" },
  closed: { label: "已关闭", className: "status-closed" },
  expired: { label: "已过期", className: "status-expired" },
};

const COURT_LABEL: Record<string, string> = {
  student: "学员订场",
  coach: "陪练订场",
  negotiate: "协商订场",
};

function formatTime(start: number | null, end: number | null): string {
  if (start == null || end == null) return "时间待定";
  return `${start}:00-${end}:00`;
}

function formatPrice(min: number | null, max: number | null): string {
  if (min == null && max == null) return "价格面议";
  if (min != null && max != null) return `${min}-${max}元/时`;
  return `${min ?? max}元/时`;
}

function formatBudget(min: number | null, max: number | null): string {
  if (min == null && max == null) return "预算面议";
  if (min != null && max != null) return `${min}-${max}元/时`;
  return `${min ?? max}元/时`;
}

export default function MyAvailabilities() {
  const [activeTab, setActiveTab] = useState<PostTab>("student");
  const [coachList, setCoachList] = useState<Availability[]>([]);
  const [studentList, setStudentList] = useState<Demand[]>([]);
  const [loading, setLoading] = useState(true);
  const [operatingId, setOperatingId] = useState<string | null>(null);

  const fetchStudentList = async () => {
    setLoading(true);
    try {
      const res = await demandsService.mine();
      if (res.ok) {
        setStudentList(res.items || []);
      }
    } catch (err) {
      console.error("获取我的需求失败:", err);
    } finally {
      setLoading(false);
    }
  };

  const fetchCoachList = async () => {
    setLoading(true);
    try {
      const res = await availabilitiesService.mine();
      if (res.ok) {
        setCoachList(res.items || []);
      }
    } catch (err) {
      console.error("获取我的档期失败:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (activeTab === "student") fetchStudentList();
    else fetchCoachList();
  }, [activeTab]);

  useDidShow(() => {
    if (activeTab === "student") fetchStudentList();
    else fetchCoachList();
  });

  const switchTab = (tab: PostTab) => {
    if (tab === activeTab) return;
    setActiveTab(tab);
  };

  const goDetail = (id: string) => {
    Taro.navigateTo({
      url: activeTab === "student"
        ? `/pages/demand-detail/demand-detail?id=${id}`
        : `/pages/availability-detail/availability-detail?id=${id}`,
    });
  };

  const handleClose = async (id: string, e: any) => {
    e.stopPropagation();
    const res = await Taro.showModal({
      title: activeTab === "student" ? "关闭需求" : "下架档期",
      content:
        activeTab === "student"
          ? "确定要关闭该需求吗？关闭后陪练员将无法看到。"
          : "确定要下架该档期吗？下架后学员将无法看到。",
    });
    if (!res.confirm) return;

    setOperatingId(id);
    try {
      const result =
        activeTab === "student"
          ? await demandsService.close(id)
          : await availabilitiesService.close(id);
      if (result.ok) {
        Taro.showToast({
          title: activeTab === "student" ? "已关闭" : "已下架",
          icon: "success",
        });
        if (activeTab === "student") {
          setStudentList((prev) =>
            prev.map((it) => (it.id === id ? { ...it, status: "closed" as const } : it))
          );
        } else {
          setCoachList((prev) =>
            prev.map((it) => (it.id === id ? { ...it, status: "closed" as const } : it))
          );
        }
      }
    } catch (err: any) {
      Taro.showToast({ title: err?.message || "操作失败", icon: "none" });
    } finally {
      setOperatingId(null);
    }
  };

  const renderCoachLocation = (item: Availability) => {
    if (item.tempLocation) return item.tempLocation;
    if (item.venueId) return "已选球馆";
    return "地点待定";
  };

  const renderStudentLocation = (item: Demand) => {
    if (item.locationName) return item.locationName;
    return "地点待定";
  };

  const renderCoachList = () => (
    coachList.length === 0 && !loading ? (
      <Empty text="暂无陪练档期，去发布一个吧" />
    ) : (
      coachList.map((item) => {
        const statusCfg = STATUS_MAP[item.status] || STATUS_MAP.open;
        return (
          <View
            key={item.id}
            className="card"
            onClick={() => goDetail(item.id)}
          >
            <View className="card-header">
              <Text className="card-date">{item.playDate}</Text>
              <Text className={`status-badge ${statusCfg.className}`}>
                {statusCfg.label}
              </Text>
            </View>

            <View className="card-body">
              <View className="info-row">
                <Text className="info-label">时段</Text>
                <Text className="info-value">
                  {TIME_SLOT_LABEL[item.timeSlot] || item.timeSlot}{" "}
                  {formatTime(item.startHour, item.endHour)}
                </Text>
              </View>
              <View className="info-row">
                <Text className="info-label">球馆</Text>
                <Text className="info-value">{renderCoachLocation(item)}</Text>
              </View>
              <View className="info-row">
                <Text className="info-label">订场</Text>
                <Text className="info-value">{COURT_LABEL[item.courtBookedBy] || "协商订场"}</Text>
              </View>
              <View className="info-row">
                <Text className="info-label">价位</Text>
                <Text className="info-value price-value">
                  {formatPrice(item.priceMin, item.priceMax)}
                </Text>
              </View>
              {item.note && (
                <View className="info-row">
                  <Text className="info-label">备注</Text>
                  <Text className="info-value note-text">{item.note}</Text>
                </View>
              )}
            </View>

            {item.status === "open" && (
              <View className="card-footer">
                <View
                  className={`close-btn ${operatingId === item.id ? "loading" : ""}`}
                  onClick={(e) => handleClose(item.id, e)}
                >
                  <Text>{operatingId === item.id ? "处理中..." : "下架"}</Text>
                </View>
              </View>
            )}
          </View>
        );
      })
    )
  );

  const renderStudentList = () => (
    studentList.length === 0 && !loading ? (
      <Empty text="暂无学员需求，去发布一个吧" />
    ) : (
      studentList.map((item) => {
        const statusCfg = STATUS_MAP[item.status] || STATUS_MAP.open;
        return (
          <View
            key={item.id}
            className="card"
            onClick={() => goDetail(item.id)}
          >
            <View className="card-header">
              <Text className="card-date">{item.playDate}</Text>
              <Text className={`status-badge ${statusCfg.className}`}>
                {statusCfg.label}
              </Text>
            </View>

            <View className="card-body">
              <View className="info-row">
                <Text className="info-label">时段</Text>
                <Text className="info-value">
                  {TIME_SLOT_LABEL[item.timeSlot] || item.timeSlot}{" "}
                  {formatTime(item.startHour, item.endHour)}
                </Text>
              </View>
              <View className="info-row">
                <Text className="info-label">地点</Text>
                <Text className="info-value">{renderStudentLocation(item)}</Text>
              </View>
              {item.expectedLevel != null && (
                <View className="info-row">
                  <Text className="info-label">期望</Text>
                  <Text className="info-value">Lv.{item.expectedLevel}+ 陪练</Text>
                </View>
              )}
              {item.studentLevel != null && (
                <View className="info-row">
                  <Text className="info-label">自身</Text>
                  <Text className="info-value">Lv.{item.studentLevel}</Text>
                </View>
              )}
              <View className="info-row">
                <Text className="info-label">订场</Text>
                <Text className="info-value">{COURT_LABEL[item.courtBookedBy] || "协商订场"}</Text>
              </View>
              <View className="info-row">
                <Text className="info-label">预算</Text>
                <Text className="info-value price-value">
                  {formatBudget(item.budgetMin, item.budgetMax)}
                </Text>
              </View>
              {item.note && (
                <View className="info-row">
                  <Text className="info-label">备注</Text>
                  <Text className="info-value note-text">{item.note}</Text>
                </View>
              )}
            </View>

            {item.status === "open" && (
              <View className="card-footer">
                <View
                  className={`close-btn ${operatingId === item.id ? "loading" : ""}`}
                  onClick={(e) => handleClose(item.id, e)}
                >
                  <Text>{operatingId === item.id ? "处理中..." : "关闭需求"}</Text>
                </View>
              </View>
            )}
          </View>
        );
      })
    )
  );

  const totalCount = activeTab === "student" ? studentList.length : coachList.length;

  return (
    <View className="page-my-availabilities">
      {/* 页面标题 */}
      <View className="page-header">
        <Text className="page-title">我的发布</Text>
      </View>

      {/* 双 Tab：学员 / 陪练员 */}
      <View className="post-tab-bar">
        <View
          className={`post-tab-item ${activeTab === "student" ? "active" : ""}`}
          onClick={() => switchTab("student")}
        >
          <Text>学员需求</Text>
        </View>
        <View
          className={`post-tab-item ${activeTab === "coach" ? "active" : ""}`}
          onClick={() => switchTab("coach")}
        >
          <Text>陪练档期</Text>
        </View>
      </View>

      {/* 列表 */}
      {loading ? (
        <Loading />
      ) : (
        <ScrollView className="list-scroll" scrollY>
          {activeTab === "student" ? renderStudentList() : renderCoachList()}
          {totalCount > 0 && (
            <View className="list-bottom">
              <Text>共{totalCount}条{activeTab === "student" ? "需求" : "档期"}</Text>
            </View>
          )}
        </ScrollView>
      )}
    </View>
  );
}
