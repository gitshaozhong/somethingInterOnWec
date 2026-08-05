/**
 * 定位与授权引导工具
 * 封装 wx.getLocation 调用 + 授权失败引导设置
 */
import Taro from "@tarojs/taro";

export interface LocationResult {
  latitude: number;
  longitude: number;
  accuracy: number;
}

/**
 * 获取用户当前位置
 * - 首次调用会触发系统授权弹窗
 * - 授权被拒绝时引导用户去设置页开启
 * - 超时默认 8 秒
 */
export async function getCurrentLocation(): Promise<LocationResult> {
  // 1. 先检查权限状态
  try {
    const setting = await Taro.getSetting();
    const scope = setting.authSetting["scope.userLocation"];

    // 已明确拒绝过 → 引导去设置
    if (scope === false) {
      const confirmed = await showAuthGuide();
      if (!confirmed) {
        throw new Error("用户未授权位置信息");
      }
      // 用户从设置页返回后重新请求
    }
    // scope === true 或 undefined（未询问过）→ 直接调用 getLocation
  } catch (e) {
    // getSetting 失败不阻塞，继续尝试 getLocation
  }

  // 2. 调用 getLocation
  try {
    const res = await Taro.getLocation({
      type: "gcj02", // 腾讯地图使用 gcj02 坐标系
      altitude: false,
      isHighAccuracy: false,
    });
    return {
      latitude: res.latitude,
      longitude: res.longitude,
      accuracy: res.accuracy,
    };
  } catch (err: any) {
    // 授权拒绝
    if (err?.errMsg?.includes("auth deny") || err?.errMsg?.includes("authorize")) {
      const confirmed = await showAuthGuide();
      if (confirmed) {
        // 用户从设置页返回，再次尝试
        return retryGetLocation();
      }
    }
    throw new Error(err?.errMsg || "获取定位失败");
  }
}

/** 重试获取定位（用户授权后） */
async function retryGetLocation(): Promise<LocationResult> {
  try {
    const res = await Taro.getLocation({
      type: "gcj02",
      altitude: false,
      isHighAccuracy: false,
    });
    return {
      latitude: res.latitude,
      longitude: res.longitude,
      accuracy: res.accuracy,
    };
  } catch (err: any) {
    throw new Error(err?.errMsg || "获取定位失败");
  }
}

/** 显示授权引导弹窗，返回用户是否确认去设置 */
async function showAuthGuide(): Promise<boolean> {
  return new Promise((resolve) => {
    Taro.showModal({
      title: "需要位置授权",
      content: "选择球馆需要获取您的位置信息，请在设置中开启位置权限",
      confirmText: "去设置",
      cancelText: "取消",
      success: (res) => {
        if (res.confirm) {
          Taro.openSetting({
            success: (settingRes) => {
              resolve(settingRes.authSetting["scope.userLocation"] === true);
            },
            fail: () => resolve(false),
          });
        } else {
          resolve(false);
        }
      },
      fail: () => resolve(false),
    });
  });
}

/**
 * Haversine 公式计算两点间距离（单位：km）
 * 用于展示"距您 X.Xkm"
 */
export function calculateDistance(
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number
): number {
  const R = 6371; // 地球半径 km
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function toRad(deg: number): number {
  return (deg * Math.PI) / 180;
}

/** 格式化距离展示：< 1km 用米，否则用公里 */
export function formatDistance(km: number): string {
  if (km < 1) {
    return `${Math.round(km * 1000)}m`;
  }
  return `${km.toFixed(1)}km`;
}
