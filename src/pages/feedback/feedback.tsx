import { View, Text, Textarea, Button } from "@tarojs/components";
import { useState, useEffect } from "react";
import Taro from "@tarojs/taro";
import request from "../../services/request";
import { useUserStore } from "../../stores/user";
import "./feedback.scss";

export default function Feedback() {
  const { user } = useUserStore();
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [cooldown, setCooldown] = useState(false);
  const [cooldownMsg, setCooldownMsg] = useState("");

  useEffect(() => {
    // 检查3天冷却
    if (!user) return;
    checkCooldown();
  }, [user]);

  const checkCooldown = async () => {
    try {
      const res = await request.get<{ ok: boolean; items?: Array<{ createdAt: string }> }>("/feedbacks/check");
      if (res.ok && res.items && res.items.length > 0) {
        setCooldown(true);
        const lastTime = new Date(res.items[0].createdAt);
        const nextTime = new Date(lastTime.getTime() + 3 * 24 * 60 * 60 * 1000);
        const now = new Date();
        const hoursLeft = Math.ceil((nextTime.getTime() - now.getTime()) / (60 * 60 * 1000));
        setCooldownMsg(`3天内仅限提交一次哟，${hoursLeft}小时后可再次提交`);
      }
    } catch (e) {
      // 如果接口不存在，忽略冷却检查
    }
  };

  const handleSubmit = async () => {
    if (!content.trim()) {
      Taro.showToast({ title: "请输入反馈内容", icon: "none" });
      return;
    }
    if (content.length > 100) {
      Taro.showToast({ title: "反馈内容不能超过100字", icon: "none" });
      return;
    }
    setLoading(true);
    try {
      const res = await request.post<{ ok: boolean }>("/feedbacks", { content: content.trim() });
      if (res.ok) {
        Taro.showToast({ title: "感谢您的反馈！", icon: "success" });
        setContent("");
        setCooldown(true);
        setCooldownMsg("3天内仅限提交一次哟");
      }
    } catch (e: any) {
      if (e?.message?.includes("3天")) {
        setCooldown(true);
        setCooldownMsg(e.message);
      }
      Taro.showToast({ title: e?.message || "提交失败", icon: "none" });
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return (
      <View className="page-feedback">
        <View className="empty">
          <Text>请先登录</Text>
          <Button onClick={() => Taro.navigateTo({ url: "/pages/login/login" })}>去登录</Button>
        </View>
      </View>
    );
  }

  return (
    <View className="page-feedback">
      <View className="page-header">
        <Text className="page-title">意见反馈</Text>
      </View>

      <View className="feedback-card">
        <View className="feedback-title">
          <Text className="title-text">欢迎您提意见，如有不足我们改进，谢谢</Text>
          {cooldown && (
            <Text className="cooldown-hint">{cooldownMsg}</Text>
          )}
        </View>

        <Textarea
          className="feedback-textarea"
          placeholder="请描述您的意见或建议（100字以内）"
          value={content}
          onInput={(e) => setContent(e.detail.value)}
          maxlength={100}
          disabled={cooldown}
        />
        <Text className="char-count">{content.length}/100</Text>
      </View>

      <View className="submit-area">
        <Button
          className="submit-btn"
          onClick={handleSubmit}
          loading={loading}
          disabled={loading || cooldown}
        >
          提交反馈
        </Button>
      </View>
    </View>
  );
}