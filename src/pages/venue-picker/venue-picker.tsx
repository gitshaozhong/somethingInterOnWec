import { View, Text, Input, Map, ScrollView, Button } from "@tarojs/components";
import { useState, useEffect, useRef, useCallback } from "react";
import Taro from "@tarojs/taro";
import { getCurrentLocation, calculateDistance, formatDistance } from "../../utils/location";
import { searchPoi, reverseGeocode, PoiResult } from "../../services/qqmap";
import { PRESET_VENUE_LIST } from "../../config/site";
import "./venue-picker.scss";

/** 选中场地回传给发布页的数据结构 */
export interface SelectedVenue {
  name: string;
  address: string;
  latitude: number;
  longitude: number;
}

/** 中心标记图标（地图中心选点用） */
const CENTER_MARKER_ICON =
  "https://mapapi.qq.com/web/lbs/javascriptV2Demo/img/center-marker.png";

export default function VenuePicker() {
  // 地图状态
  const [center, setCenter] = useState({ latitude: 39.908, longitude: 116.407 }); // 默认天安门
  const [userLocation, setUserLocation] = useState<{ latitude: number; longitude: number } | null>(null);
  const [mapReady, setMapReady] = useState(false);
  const [locating, setLocating] = useState(false);

  // 搜索状态
  const [keyword, setKeyword] = useState("");
  const [searchResults, setSearchResults] = useState<PoiResult[]>([]);
  const [searching, setSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  // 选中的场地
  const [selected, setSelected] = useState<PoiResult | null>(null);

  // 拖拽选点状态
  const [dragging, setDragging] = useState(false);
  const [dragResult, setDragResult] = useState<{ name: string; address: string } | null>(null);
  const [resolvingAddr, setResolvingAddr] = useState(false);

  // 逆地址解析防抖（拖拽时避免频繁调用）
  const reverseTimerRef = useRef<any>(null);

  // ---------- 初始化定位 ----------
  useEffect(() => {
    initLocation();
  }, []);

  const initLocation = async () => {
    setLocating(true);
    try {
      const loc = await getCurrentLocation();
      setUserLocation(loc);
      setCenter(loc);
    } catch (err: any) {
      Taro.showToast({ title: err?.message || "定位失败", icon: "none" });
    } finally {
      setLocating(false);
    }
  };

  // ---------- 地图事件 ----------
  const handleRegionChange = useCallback((e: any) => {
    // 仅处理"拖拽结束"事件（type=end 且 causedBy=drag）
    if (e.type !== "end") return;
    if (e.causedBy !== "drag" && e.causedBy !== "scale") return;

    const newCenter = {
      latitude: e.detail.latitude,
      longitude: e.detail.longitude,
    };
    setCenter(newCenter);
    setDragging(true);

    // 选中状态清空（拖拽后需重新确认）
    setSelected(null);

    // 防抖逆地址解析
    if (reverseTimerRef.current) clearTimeout(reverseTimerRef.current);
    reverseTimerRef.current = setTimeout(async () => {
      setResolvingAddr(true);
      try {
        const res = await reverseGeocode(newCenter.latitude, newCenter.longitude);
        setDragResult({ name: res.name, address: res.address });
      } catch {
        setDragResult(null);
      } finally {
        setResolvingAddr(false);
        setDragging(false);
      }
    }, 500);
  }, []);

  const handleMapClick = () => {
    // 点击地图空白处时也触发逆地址解析（与拖拽一致）
    setSelected(null);
  };

  // 回到当前位置
  const handleLocate = () => {
    if (userLocation) {
      setCenter(userLocation);
    } else {
      initLocation();
    }
  };

  // ---------- 搜索 ----------
  const handleSearch = async () => {
    const trimmed = keyword.trim();
    if (!trimmed) {
      setSearchResults([]);
      setHasSearched(false);
      return;
    }

    setSearching(true);
    setHasSearched(true);
    try {
      const results = await searchPoi(trimmed, userLocation || undefined);
      setSearchResults(results);
      if (results.length === 0) {
        Taro.showToast({ title: "未找到相关球馆", icon: "none" });
      }
    } catch (err: any) {
      Taro.showToast({ title: err?.message || "搜索失败", icon: "none" });
    } finally {
      setSearching(false);
    }
  };

  // 清空搜索
  const handleClearSearch = () => {
    setKeyword("");
    setSearchResults([]);
    setHasSearched(false);
  };

  // ---------- 选中场地 ----------
  const handleSelectResult = (item: PoiResult) => {
    if (item.latitude === 0 || item.longitude === 0) {
      // 降级模式下的预置球馆（无坐标）：提示用户需接入 SDK
      Taro.showModal({
        title: "提示",
        content: "该球馆为预置数据，需接入腾讯位置服务后才能获取精确位置。是否仍要选择？",
        confirmText: "仍然选择",
        cancelText: "取消",
        success: (res) => {
          if (res.confirm) {
            setSelected(item);
          }
        },
      });
      return;
    }

    setSelected(item);
    setCenter({ latitude: item.latitude, longitude: item.longitude });
  };

  // 使用拖拽选中的位置作为场地
  const handleUseDragLocation = () => {
    if (!dragResult) return;
    setSelected({
      id: `drag_${Date.now()}`,
      name: dragResult.name,
      address: dragResult.address,
      latitude: center.latitude,
      longitude: center.longitude,
    });
  };

  // ---------- 快捷球馆入口 ----------
  const handlePresetClick = (name: string) => {
    setKeyword(name);
    // 直接触发搜索
    setTimeout(() => {
      handleSearchManual(name);
    }, 50);
  };

  const handleSearchManual = async (kw: string) => {
    const trimmed = kw.trim();
    if (!trimmed) return;
    setSearching(true);
    setHasSearched(true);
    try {
      const results = await searchPoi(trimmed, userLocation || undefined);
      setSearchResults(results);
    } catch (err: any) {
      Taro.showToast({ title: err?.message || "搜索失败", icon: "none" });
    } finally {
      setSearching(false);
    }
  };

  // ---------- 确认场地 ----------
  const handleConfirm = () => {
    if (!selected) {
      Taro.showToast({ title: "请先选择球馆", icon: "none" });
      return;
    }
    if (selected.latitude === 0 || selected.longitude === 0) {
      // 无坐标的预置球馆：仍允许返回，但坐标为空
      Taro.showToast({ title: "该球馆无精确坐标，将仅保存名称", icon: "none" });
    }

    const venue: SelectedVenue = {
      name: selected.name,
      address: selected.address,
      latitude: selected.latitude,
      longitude: selected.longitude,
    };

    // 通过 eventChannel 或上一页实例回传数据
    const pages = Taro.getCurrentPages();
    const prevPage = pages[pages.length - 2];
    if (prevPage) {
      // 直接调用上一页方法回填（约定方法名）
      (prevPage as any).onVenueSelected?.(venue);
    }
    Taro.navigateBack();
  };

  // ---------- 渲染 ----------
  // 地图 markers：搜索结果 + 选中高亮
  const markers = searchResults
    .filter((r) => r.latitude !== 0 && r.longitude !== 0)
    .map((r) => ({
      id: r.id,
      latitude: r.latitude,
      longitude: r.longitude,
      title: r.name,
      iconPath: selected?.id === r.id
        ? "" // 选中时用默认红色 marker
        : "https://mapapi.qq.com/web/lbs/javascriptV2Demo/img/marker_blue.png",
      width: selected?.id === r.id ? 32 : 24,
      height: selected?.id === r.id ? 40 : 30,
    }));

  return (
    <View className="page-venue-picker">
      {/* 顶部搜索栏 */}
      <View className="search-bar">
        <View className="search-input-wrap">
          <Input
            className="search-input"
            placeholder="搜索球馆名称或地址"
            value={keyword}
            onInput={(e) => setKeyword(e.detail.value)}
            onConfirm={handleSearch}
            confirmType="search"
          />
          {keyword && (
            <Text className="clear-btn" onClick={handleClearSearch}>✕</Text>
          )}
        </View>
        <Text className="search-btn" onClick={handleSearch}>搜索</Text>
      </View>

      {/* 地图区域 */}
      <View className="map-container">
        <Map
          className="map"
          latitude={center.latitude}
          longitude={center.longitude}
          scale={15}
          markers={markers}
          showLocation
          enableZoom
          enableScroll
          enableRotate={false}
          onRegionChange={handleRegionChange}
          onClick={handleMapClick}
        />

        {/* 中心选点标记（拖拽选点用） */}
        {!hasSearched && (
          <View className="center-marker">
            <View className="center-marker-pin" />
            <View className="center-marker-shadow" />
          </View>
        )}

        {/* 右下角定位按钮 */}
        <View className="locate-btn" onClick={handleLocate}>
          <Text className="locate-icon">📍</Text>
        </View>

        {/* 拖拽选点信息气泡 */}
        {dragging || dragResult ? (
          <View className="drag-info-card">
            {resolvingAddr ? (
              <Text className="drag-info-text">解析地址中...</Text>
            ) : dragResult ? (
              <View className="drag-info-content">
                <View className="drag-info-main">
                  <Text className="drag-info-name">{dragResult.name}</Text>
                  <Text className="drag-info-address">{dragResult.address}</Text>
                </View>
                <Text
                  className={`drag-use-btn ${selected?.latitude === center.latitude && selected?.longitude === center.longitude ? "active" : ""}`}
                  onClick={handleUseDragLocation}
                >
                  {selected?.latitude === center.latitude && selected?.longitude === center.longitude ? "✓ 已选" : "选这里"}
                </Text>
              </View>
            ) : null}
          </View>
        ) : null}
      </View>

      {/* 下方列表区 */}
      <View className="list-area">
        {/* 快捷球馆入口（未搜索时显示） */}
        {!hasSearched && (
          <View className="preset-section">
            <View className="section-header">
              <Text className="section-title">常用球馆</Text>
              <Text className="section-hint">点击快速搜索</Text>
            </View>
            <ScrollView scrollX className="preset-scroll" enhanced showScrollbar={false}>
              {PRESET_VENUE_LIST.slice(0, 8).map((v) => (
                <View
                  key={v.name}
                  className="preset-chip"
                  onClick={() => handlePresetClick(v.name)}
                >
                  <Text className="preset-chip-name">{v.name.replace("羽毛球馆", "").replace("体育馆", "")}</Text>
                  <Text className="preset-chip-district">{v.district}</Text>
                </View>
              ))}
            </ScrollView>
          </View>
        )}

        {/* 搜索结果列表 */}
        {hasSearched && (
          <ScrollView scrollY className="result-scroll">
            {searching ? (
              <View className="loading-tip">
                <Text>搜索中...</Text>
              </View>
            ) : searchResults.length === 0 ? (
              <View className="empty-tip">
                <Text className="empty-icon">🏸</Text>
                <Text className="empty-text">未找到相关球馆</Text>
                <Text className="empty-hint">试试拖动地图选点，或更换关键词</Text>
              </View>
            ) : (
              searchResults.map((item) => {
                const distance = userLocation && item.latitude !== 0
                  ? calculateDistance(
                      userLocation.latitude,
                      userLocation.longitude,
                      item.latitude,
                      item.longitude
                    )
                  : null;

                return (
                  <View
                    key={item.id}
                    className={`result-item ${selected?.id === item.id ? "selected" : ""}`}
                    onClick={() => handleSelectResult(item)}
                  >
                    <View className="result-item-main">
                      <Text className="result-item-name">{item.name}</Text>
                      <Text className="result-item-address">{item.address}</Text>
                    </View>
                    <View className="result-item-side">
                      {distance != null && (
                        <Text className="result-item-distance">
                          {formatDistance(distance)}
                        </Text>
                      )}
                      {selected?.id === item.id && (
                        <Text className="result-item-check">✓</Text>
                      )}
                    </View>
                  </View>
                );
              })
            )}
          </ScrollView>
        )}

        {/* 选中提示 */}
        {selected && (
          <View className="selected-banner">
            <View className="selected-info">
              <Text className="selected-name">{selected.name}</Text>
              <Text className="selected-address">{selected.address}</Text>
            </View>
          </View>
        )}
      </View>

      {/* 底部确认按钮 */}
      <View className="bottom-bar safe-bottom">
        <Button
          className={`confirm-btn ${!selected ? "disabled" : ""}`}
          disabled={!selected}
          onClick={handleConfirm}
        >
          确认场地
        </Button>
      </View>
    </View>
  );
}
