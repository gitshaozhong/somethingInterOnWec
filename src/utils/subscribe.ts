/**
 * 订阅消息辅助：在关键业务动作成功后请求用户订阅，并上报结果累计可发送额度。
 *
 * - 服务端未配置模板 ID（templates 接口返回空）时静默跳过，开发环境无感；
 * - 同一模板 24 小时内最多弹窗一次，避免频繁打扰；
 * - 用户拒绝属正常行为，不上报额度、不影响主流程。
 */
import Taro from "@tarojs/taro";
import { subscribeService } from "../services/subscribe";

let cachedTemplates: Record<string, string> | null = null;

async function getTemplates(): Promise<Record<string, string>> {
  if (cachedTemplates) return cachedTemplates;
  try {
    const res = await subscribeService.templates();
    cachedTemplates = res.ok ? res.templates || {} : {};
  } catch {
    cachedTemplates = {};
  }
  return cachedTemplates;
}

const throttleKey = (key: string) => `subscribe_asked_${key}`;
const THROTTLE_MS = 24 * 3600 * 1000;

/**
 * 请求订阅指定模板（一次最多 3 个，微信限制）。
 * 用法：业务动作成功后 `ensureSubscribe(["invite_result"])`。
 */
export async function ensureSubscribe(keys: string[]): Promise<void> {
  try {
    const templates = await getTemplates();
    const now = Date.now();
    const tmplIds: string[] = [];
    const keyById = new Map<string, string>();

    for (const key of keys) {
      const id = templates[key];
      if (!id) continue;
      const last = Number(Taro.getStorageSync(throttleKey(key)) || 0);
      if (now - last < THROTTLE_MS) continue;
      tmplIds.push(id);
      keyById.set(id, key);
    }
    if (tmplIds.length === 0) return;

    // entityIds 为支付宝专用字段，微信端传空数组即可（Taro 类型定义将其标为必填）
    const res = await Taro.requestSubscribeMessage({ tmplIds: tmplIds.slice(0, 3), entityIds: [] });
    for (const [id, key] of keyById) {
      Taro.setStorageSync(throttleKey(key), now);
      subscribeService.report(key, res[id] === "accept").catch(() => {
        // 上报失败可忽略：最坏情况是少发一次提醒
      });
    }
  } catch {
    // 用户拒绝/取消/系统异常，均静默处理
  }
}
