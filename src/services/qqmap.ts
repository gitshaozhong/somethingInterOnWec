/**
 * 腾讯位置服务 SDK 封装
 *
 * 接入步骤：
 * 1. 在 https://lbs.qq.com 申请 Key，勾选 WebServiceAPI + 填写小程序 AppID
 * 2. 将 Key 填入下方 QQ_MAP_KEY
 * 3. 下载 qqmap-wx-jssdk.min.js 放入 src/lib/ 目录
 *    下载地址：https://lbs.qq.com/miniProgram/jsSdk/jsSdkGuide/jsSdkOverview
 * 4. 在小程序后台 → 开发管理 → 服务器域名 → request 合法域名 添加：
 *    https://apis.map.qq.com
 *
 * 当前状态：Key 待申请，SDK 文件待下载。
 * 已实现降级逻辑：Key 未配置时搜索返回预置球馆库匹配结果。
 */
import Taro from "@tarojs/taro";
import { PRESET_VENUE_LIST, PresetVenue } from "../config/site";

// 腾讯位置服务 Key（申请后填入此处，或从环境变量读取）
// TODO: 申请到 Key 后替换为实际值
export const QQ_MAP_KEY = "";

// SDK 实例（懒加载）
let sdkInstance: any = null;

/**
 * 初始化腾讯位置服务 SDK
 * 需要先下载 qqmap-wx-jssdk.min.js 放入 src/lib/ 目录
 */
function getSDK(): any {
  if (sdkInstance) return sdkInstance;
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const QQMapWX = require("../lib/qqmap-wx-jssdk.min.js");
    sdkInstance = new QQMapWX({ key: QQ_MAP_KEY });
    return sdkInstance;
  } catch (e) {
    console.warn("[qqmap] SDK 未加载，将使用预置球馆库降级模式", e);
    return null;
  }
}

/** POI 搜索结果项 */
export interface PoiResult {
  id: string;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  distance?: number;
}

/**
 * 关键词搜索 POI（球馆）
 * - Key 已配置：调用腾讯 POI 搜索
 * - Key 未配置：从预置球馆库模糊匹配（降级）
 *
 * @param keyword 搜索关键词（如"朝阳体育中心"）
 * @param location 当前位置（可选，传入后结果按距离排序）
 */
export async function searchPoi(
  keyword: string,
  location?: { latitude: number; longitude: number }
): Promise<PoiResult[]> {
  const trimmed = keyword.trim();
  if (!trimmed) return [];

  const sdk = getSDK();

  // 主路径：腾讯位置服务 POI 搜索
  if (sdk && QQ_MAP_KEY) {
    return new Promise((resolve) => {
      sdk.search({
        keyword: trimmed,
        location: location
          ? `${location.latitude},${location.longitude}`
          : undefined,
        page_size: 20,
        page_index: 1,
        success: (res: any) => {
          const list: PoiResult[] = (res.data || []).map((item: any) => ({
            id: item.id || String(item.latitude + item.longitude),
            name: item.title,
            address: item.address || "",
            latitude: item.location.lat,
            longitude: item.location.lng,
            distance: item._distance,
          }));
          resolve(list);
        },
        fail: (err: any) => {
          console.warn("[qqmap] POI 搜索失败，降级到本地匹配", err);
          resolve(fallbackSearch(trimmed, location));
        },
      });
    });
  }

  // 降级路径：预置球馆库模糊匹配
  return fallbackSearch(trimmed, location);
}

/**
 * 逆地址解析：根据坐标获取地址描述
 * - Key 已配置：调用腾讯逆地理编码
 * - Key 未配置：返回坐标字符串（降级）
 *
 * @param latitude 纬度
 * @param longitude 经度
 */
export async function reverseGeocode(
  latitude: number,
  longitude: number
): Promise<{ address: string; name: string }> {
  const sdk = getSDK();

  if (sdk && QQ_MAP_KEY) {
    return new Promise((resolve) => {
      sdk.reverseGeocoder({
        location: `${latitude},${longitude}`,
        success: (res: any) => {
          resolve({
            address: res.result?.address || "",
            name:
              res.result?.formatted_addresses?.recommend ||
              res.result?.address ||
              "未知位置",
          });
        },
        fail: (err: any) => {
          console.warn("[qqmap] 逆地址解析失败", err);
          resolve({
            address: `${latitude.toFixed(6)}, ${longitude.toFixed(6)}`,
            name: "未知位置",
          });
        },
      });
    });
  }

  // 降级
  return {
    address: `${latitude.toFixed(6)}, ${longitude.toFixed(6)}`,
    name: "未知位置（SDK 未接入）",
  };
}

/**
 * 降级搜索：从预置球馆库模糊匹配
 */
function fallbackSearch(
  keyword: string,
  location?: { latitude: number; longitude: number }
): PoiResult[] {
  const lower = keyword.toLowerCase();
  const matched = PRESET_VENUE_LIST.filter(
    (v) =>
      v.name.toLowerCase().includes(lower) ||
      v.district.toLowerCase().includes(lower) ||
      v.address.toLowerCase().includes(lower)
  );

  return matched.map((v: PresetVenue & { district: string }) => ({
    id: `preset_${v.name}`,
    name: v.name,
    address: `${v.district}区 · ${v.address}`,
    // 预置球馆无坐标，标记为 0（venue-picker 中需特殊处理）
    latitude: 0,
    longitude: 0,
  }));
}
