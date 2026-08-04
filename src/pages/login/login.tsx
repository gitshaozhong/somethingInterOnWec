import { View, Text, Button } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { useState } from "react";
import { useUserStore } from "../../stores/user";
import "./login.scss";

export default function Login() {
  const { login } = useUserStore();
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    try {
      const loginRes = await Taro.login();
      if (!loginRes.code) {
        Taro.showToast({ title: "获取微信登录凭证失败", icon: "none" });
        return;
      }

      // 登录不再选择角色，默认 student，身份由"我的"档案完整度决定
      await login(loginRes.code, "student");
      Taro.showToast({ title: "登录成功", icon: "success" });
      setTimeout(() => {
        Taro.switchTab({ url: "/pages/publish/publish" });
      }, 1000);
    } catch (err: any) {
      Taro.showToast({ title: err?.message || "登录失败", icon: "none" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="page-login">
      <View className="login-content">
        <View className="logo-area">
          <Text className="app-name">羽球搭子</Text>
          <Text className="app-desc">羽毛球陪练撮合平台</Text>
        </View>

        <Button
          className="wechat-login-btn"
          loading={loading}
          disabled={loading}
          onClick={handleLogin}
        >
          微信一键登录
        </Button>

        <Text className="privacy-tip">
          登录后请前往"我的"完善学员/陪练员档案，即可发布需求或档期
        </Text>
      </View>
    </View>
  );
}
