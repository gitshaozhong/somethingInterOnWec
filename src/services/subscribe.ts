import request from "./request";

export const subscribeService = {
  /** 获取服务端已配置的订阅消息模板 ID（key → 微信模板 ID） */
  templates() {
    return request.get<{ ok: boolean; templates: Record<string, string> }>("/subscribe/templates");
  },

  /** 上报订阅结果：accept 则该模板可发送额度 +1 */
  report(templateKey: string, subscribed: boolean) {
    return request.post<{ ok: boolean }>("/subscribe/report", { templateKey, subscribed });
  },
};
