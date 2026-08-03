import { View, Text, Image, Button } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { useUserStore } from "../../stores/user";
import "./profile.scss";

export default function Profile() {
  const { user, logout } = useUserStore();

  if (!user) {
    return (
      <View className="page-profile">
        <View className="empty">
          <Text>请先登录</Text>
          <Button className="login-btn" onClick={() => Taro.navigateTo({ url: "/pages/login/login" })}>
            去登录
          </Button>
        </View>
      </View>
    );
  }

  const menuItems = [
    { label: "个人资料", icon: "📝", url: "/pages/profile-edit/profile-edit" },
    { label: "我的关注", icon: "⭐", url: "/pages/following/following" },
    { label: "意见反馈", icon: "💬", url: "/pages/feedback/feedback" },
  ];

  return (
    <View className="page-profile">
      <View className="header">
        <View className="avatar">
          {user.avatarUrl ? (
            <Image src={user.avatarUrl} className="avatar-img" mode="aspectFill" />
          ) : (
            <View className="avatar-placeholder">
              <Text>{(user.nickname || "用")[0]}</Text>
            </View>
          )}
        </View>
        <Text className="nickname">{user.nickname || "用户"}</Text>
        <Text className="role">{user.role === "coach" ? "陪练员" : "学员"}</Text>
      </View>

      <View className="menu">
        {menuItems.map((item) => (
          <View key={item.label} className="menu-item" onClick={() => Taro.navigateTo({ url: item.url })}>
            <Text className="menu-icon">{item.icon}</Text>
            <Text className="menu-label">{item.label}</Text>
            <Text className="menu-arrow">&gt;</Text>
          </View>
        ))}
      </View>

      <View className="logout-section">
        <Button className="logout-btn" onClick={logout}>
          退出登录
        </Button>
      </View>
    </View>
  );
}