import { View, Text, Button } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { useState } from "react";
import { useUserStore } from "../../stores/user";
import "./login.scss";

export default function Login() {
  const { login } = useUserStore();
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState<"student" | "coach" | null>(null);

  const handleLogin = async () => {
    if (!role) {
      Taro.showToast({ title: "请选择角色", icon: "none" });
      return;
    }
    setLoading(true);
    try {
      const loginRes = await Taro.login();
      if (!loginRes.code) {
        Taro.showToast({ title: "获取微信登录凭证失败", icon: "none" });
        return;
      }

      await login(loginRes.code, role);
      Taro.showToast({ title: "登录成功", icon: "success" });
      setTimeout(() => {
        Taro.switchTab({ url: "/pages/index/index" });
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

        <View className="role-select">
          <Text className="role-label">请选择你的角色</Text>
          <View className="role-options">
            <View
              className={`role-card ${role === "student" ? "active" : ""}`}
              onClick={() => setRole("student")}
            >
              <Text className="role-icon">🏸</Text>
              <Text className="role-name">我是学员</Text>
              <Text className="role-desc">寻找陪练，提升球技</Text>
            </View>
            <View
              className={`role-card ${role === "coach" ? "active" : ""}`}
              onClick={() => setRole("coach")}
            >
              <Text className="role-icon">🎯</Text>
              <Text className="role-name">我是陪练员</Text>
              <Text className="role-desc">发布档期，接单教学</Text>
            </View>
          </View>
        </View>

        <Button
          className="wechat-login-btn"
          loading={loading}
          disabled={loading || !role}
          onClick={handleLogin}
        >
          微信一键登录
        </Button>

        <Text className="privacy-tip">
          登录即表示同意《用户协议》和《隐私政策》
        </Text>
      </View>
    </View>
  );
}