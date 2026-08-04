import { View, Text, ScrollView } from "@tarojs/components";
import { useState, useEffect } from "react";
import Taro, { useDidShow } from "@tarojs/taro";
import { demandsService } from "../../services/demands";
import Loading from "../../components/Loading";
import Empty from "../../components/Empty";
import type { Demand } from "../../types";
import "./my-demands.scss";

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

function formatTime(start: number | null, end: number | null): string {
  if (start == null || end == null) return "时间待定";
  return `${start}:00-${end}:00`;
}

function formatBudget(min: number | null, max: number | null): string {
  if (min == null && max == null) return "预算面议";
  if (min != null && max != null) return `¥${min}-${max}/时`;
  return `¥${min ?? max}/时`;
}

export default function MyDemands() {
  const [items, setItems] = useState<Demand[]>([]);
  const [loading, setLoading] = useState(true);
  const [closingId, setClosingId] = useState<string | null>(null);

  const fetchList = async () => {
    setLoading(true);
    try {
      const res = await demandsService.mine();
      if (res.ok) {
        setItems(res.items || []);
      }
    } catch (err) {
      console.error("获取我的需求失败:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  useDidShow(() => {
    fetchList();
  });

  const goDetail = (id: string) => {
    Taro.navigateTo({
      url: `/pages/demand-detail/demand-detail?id=${id}`,
    });
  };

  const handleClose = async (id: string, e: any) => {
    e.stopPropagation();
    const res = await Taro.showModal({
      title: "关闭需求",
      content: "确定要关闭该需求吗？关闭后陪练将无法看到。",
    });
    if (!res.confirm) return;

    setClosingId(id);
    try {
      const result = await demandsService.close(id);
      if (result.ok) {
        Taro.showToast({ title: "已关闭", icon: "success" });
        setItems((prev) =>
          prev.map((it) => (it.id === id ? { ...it, status: "closed" as const } : it))
        );
      }
    } catch (err: any) {
      Taro.showToast({ title: err?.message || "操作失败", icon: "none" });
    } finally {
      setClosingId(null);
    }
  };

  return (
    <View className="page-my-demands">
      <View className="page-header">
        <Text className="page-title">我的需求</Text>
      </View>

      {loading ? (
        <Loading />
      ) : items.length === 0 ? (
        <Empty text="暂无需求，去发布一个吧" />
      ) : (
        <ScrollView className="list-scroll" scrollY>
          {items.map((item) => {
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
                    <Text className="info-value">
                      {item.locationName || "地点待定"}
                    </Text>
                  </View>
                  {item.expectedLevel != null && (
                    <View className="info-row">
                      <Text className="info-label">期望</Text>
                      <Text className="info-value">Lv.{item.expectedLevel}+ 陪练</Text>
                    </View>
                  )}
                  <View className="info-row">
                    <Text className="info-label">预算</Text>
                    <Text className="info-value budget-value">
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
                      className={`close-btn ${closingId === item.id ? "loading" : ""}`}
                      onClick={(e) => handleClose(item.id, e)}
                    >
                      <Text>{closingId === item.id ? "处理中..." : "关闭"}</Text>
                    </View>
                  </View>
                )}
              </View>
            );
          })}
          <View className="list-bottom">
            <Text>共{items.length}条需求</Text>
          </View>
        </ScrollView>
      )}
    </View>
  );
}
