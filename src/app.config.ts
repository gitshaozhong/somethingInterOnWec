export default defineAppConfig({
  pages: [
    "pages/publish/publish",
    "pages/index/index",
    "pages/messages/messages",
    "pages/profile/profile",
    "pages/login/login",
    "pages/availability-detail/availability-detail",
    "pages/demand-detail/demand-detail",
    "pages/order-detail/order-detail",
    "pages/following/following",
    "pages/feedback/feedback",
    "pages/profile-edit/profile-edit",
    "pages/my-availabilities/my-availabilities",
    "pages/my-demands/my-demands",
    "pages/orders/orders",
    "pages/venue-picker/venue-picker",
    "pages/messages/first-confirm/first-confirm",
    "pages/messages/second-confirm/second-confirm",
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "羽球搭子",
    navigationBarTextStyle: "black",
  },
  permission: {
    // 腾讯位置服务 SDK 需要的位置权限
    "scope.userLocation": {
      desc: "用于发布订单时选择附近球馆位置",
    },
  },
  // 必填：微信后台申请的地图 Key 配置（位置服务）
  // 在小程序后台 → 开发管理 → 接口设置中开启"地理位置"相关接口
  requiredPrivateInfos: [
    "getLocation",
    "chooseLocation",
  ],
  tabBar: {
    custom: true,
    color: "#8a8a9a",
    selectedColor: "#ff6a00",
    backgroundColor: "#ffffff",
    borderStyle: "black",
    list: [
      {
        pagePath: "pages/index/index",
        text: "大厅",
        iconPath: "assets/tabbar/home.png",
        selectedIconPath: "assets/tabbar/home-active.png",
      },
      {
        pagePath: "pages/publish/publish",
        text: "发布",
        iconPath: "assets/tabbar/publish.png",
        selectedIconPath: "assets/tabbar/publish-active.png",
      },
      {
        pagePath: "pages/messages/messages",
        text: "消息",
        iconPath: "assets/tabbar/message.png",
        selectedIconPath: "assets/tabbar/message-active.png",
      },
      {
        pagePath: "pages/profile/profile",
        text: "我的",
        iconPath: "assets/tabbar/profile.png",
        selectedIconPath: "assets/tabbar/profile-active.png",
      },
    ],
  },
});
