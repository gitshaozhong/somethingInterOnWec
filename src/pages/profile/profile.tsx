import { View, Text, Image, Button } from "@tarojs/components";
import Taro, { useDidShow } from "@tarojs/taro";
import { useState } from "react";
import { useUserStore } from "../../stores/user";
import { authService } from "../../services/auth";
import CustomNav from "../../components/CustomNav/CustomNav";
import "./profile.scss";

export default function Profile() {
  const { user, logout } = useUserStore();
  const [profile, setProfile] = useState<any>(null);

  useDidShow(() => {
    fetchProfile();
  });

  const fetchProfile = async () => {
    if (!user) return;
    try {
      const res = await authService.getProfile();
      if (res.ok && (res as any).user) {
        setProfile((res as any).user);
      }
    } catch (err) {
      console.error("获取资料失败:", err);
    }
  };

  if (!user) {
    return (
      <View className="page-profile-loggedout">
        <CustomNav title="我的" />
        <View className="login-empty">
          <View className="login-empty-icon">🏸</View>
          <Text className="login-empty-text">登录后体验全部功能</Text>
          <Button className="login-btn" onClick={() => Taro.navigateTo({ url: "/pages/login/login" })}>
            微信一键登录
          </Button>
        </View>
      </View>
    );
  }

  // 学员身份状态
  const studentStatus = (() => {
    const sp = profile?.studentProfile;
    if (!sp) return { done: false, label: "未开通" };
    const required = [
      !!profile?.avatarVirtual,
      !!profile?.avatarReal,
      // 真人头像必须审核通过才能开通
      profile?.studentAvatarStatus === "verified",
      !!profile?.name,
      !!profile?.phone && /^1[3-9]\d{9}$/.test(profile.phone),
      !!sp.realName,
      !!sp.idNumber,
      sp.level > 0,
    ];
    const allDone = required.every(Boolean);
    return { done: allDone, label: allDone ? "已开通" : "未完善" };
  })();

  // 陪练身份状态
  const coachStatus = (() => {
    const cp = profile?.coachProfile;
    if (!cp) return { done: false, label: "未开通" };
    const required = [
      !!profile?.avatarVirtual,
      !!profile?.avatarReal,
      // 真人头像必须审核通过才能开通
      profile?.coachAvatarStatus === "verified",
      !!profile?.name,
      !!profile?.phone && /^1[3-9]\d{9}$/.test(profile.phone),
      !!cp.realName,
      !!cp.bio,
      !!cp.teachingInfo,
      !!cp.city,
      (cp.frequentAreas?.length ?? 0) > 0,
      cp.level > 0,
    ];
    const allDone = required.every(Boolean);
    return { done: allDone, label: allDone ? "已开通" : "未完善" };
  })();

  // 订单网格入口
  const orderEntries = [
    { icon: "📋", text: "全部", status: undefined },
    { icon: "⏳", text: "进行中", status: "pending" },
    { icon: "✅", text: "已完成", status: "completed" },
    { icon: "❌", text: "已取消", status: "cancelled" },
  ];

  // 身份菜单
  const identityMenu = [
    {
      label: "我的学员身份",
      icon: "🏸",
      status: studentStatus.label,
      statusDone: studentStatus.done,
      url: "/pages/profile-edit/profile-edit?tab=student",
      gradient: "orange",
    },
    {
      label: "我的陪练员身份",
      icon: "🎯",
      status: coachStatus.label,
      statusDone: coachStatus.done,
      url: "/pages/profile-edit/profile-edit?tab=coach",
      gradient: "green",
    },
  ];

  // 功能菜单
  const funcMenu = [
    { label: "我的发布", icon: "📢", url: "/pages/my-availabilities/my-availabilities" },
    { label: "我的订单", icon: "📋", url: "/pages/orders/orders" },
    { label: "我的关注", icon: "⭐", url: "/pages/following/following" },
    { label: "意见反馈", icon: "💬", url: "/pages/feedback/feedback" },
  ];

  return (
    <View className="page-profile">
      {/* 统一自定义导航栏 */}
      <CustomNav title="我的" />
      {/* 顶部用户信息（橙色渐变背景） */}
      <View className="header">
        <View className="user-info" onClick={() => Taro.navigateTo({ url: "/pages/profile-edit/profile-edit?tab=student" })}>
          <View className="avatar">
            {user.avatarUrl ? (
              <Image src={user.avatarUrl} className="avatar-img" mode="aspectFill" />
            ) : (
              <View className="avatar-placeholder">
                <Text>{(user.nickname || "用")[0]}</Text>
              </View>
            )}
          </View>
          <View className="user-details">
            <Text className="nickname">{user.nickname || "用户"}</Text>
            <Text className="phone">{profile?.phone ? `ID：${profile.phone}` : "未绑定手机号"}</Text>
          </View>
          <View className="setting-btn">
            <Text className="setting-arrow">›</Text>
          </View>
        </View>

        {/* 双数据卡片 */}
        <View className="balance-cards">
          <View
            className="balance-card orange"
            onClick={() => Taro.navigateTo({ url: "/pages/orders/orders?role=student" })}
          >
            <View className="card-content">
              <Text className="amount">{studentStatus.done ? "学员" : "未开通"}</Text>
              <Text className="label">学员身份</Text>
              <View className="view-btn">
                <Text className="view-arrow">›</Text>
              </View>
            </View>
          </View>
          <View
            className="balance-card green"
            onClick={() => Taro.navigateTo({ url: "/pages/orders/orders?role=coach" })}
          >
            <View className="card-content">
              <Text className="amount">{coachStatus.done ? "陪练" : "未开通"}</Text>
              <Text className="label">陪练身份</Text>
              <View className="view-btn">
                <Text className="view-arrow">›</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* 订单管理网格 */}
      <View className="order-section">
        <View className="section-title">订单管理</View>
        <View className="order-grid">
          {orderEntries.map((item) => (
            <View
              key={item.text}
              className="order-item"
              onClick={() => Taro.navigateTo({ url: `/pages/orders/orders${item.status ? `?status=${item.status}` : ""}` })}
            >
              <View className="order-icon">
                <Text className="order-emoji">{item.icon}</Text>
              </View>
              <Text className="order-text">{item.text}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* 身份管理分组 */}
      <View className="menu-section">
        {identityMenu.map((item, idx) => (
          <View key={item.label}>
            <View
              className="menu-item"
              onClick={() => Taro.navigateTo({ url: item.url })}
            >
              <View className={`menu-icon-wrap ${item.gradient}`}>
                <Text className="menu-icon">{item.icon}</Text>
              </View>
              <Text className="menu-label">{item.label}</Text>
              <Text className={`menu-status ${item.statusDone ? "done" : "pending"}`}>
                {item.status}
              </Text>
              <Text className="menu-arrow">›</Text>
            </View>
            {idx < identityMenu.length - 1 && <View className="menu-divider"></View>}
          </View>
        ))}
      </View>

      {/* 功能菜单分组 */}
      <View className="menu-section">
        {funcMenu.map((item, idx) => (
          <View key={item.label}>
            <View
              className="menu-item"
              onClick={() => Taro.navigateTo({ url: item.url })}
            >
              <View className="menu-icon-wrap gray">
                <Text className="menu-icon">{item.icon}</Text>
              </View>
              <Text className="menu-label">{item.label}</Text>
              <Text className="menu-arrow">›</Text>
            </View>
            {idx < funcMenu.length - 1 && <View className="menu-divider"></View>}
          </View>
        ))}
      </View>

      {/* 退出登录 */}
      <View className="logout-section">
        <Button className="logout-btn" onClick={logout}>
          退出登录
        </Button>
      </View>
    </View>
  );
}
