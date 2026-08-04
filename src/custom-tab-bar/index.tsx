import { View, Text, Image } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { useState, useEffect } from "react";
import { useAppStore } from "../stores/app";
import "./index.scss";

const COLOR_NORMAL = "#8a8a9a";
const COLOR_ACTIVE = "#ff6a00";

/** 线性图标 SVG 模板（currentColor 由参数控制） */
const homeSvg = (color: string) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12l9-9 9 9"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/></svg>`;

const publishSvg = (color: string) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 8v8M8 12h8"/></svg>`;

const messageSvg = (color: string) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 0 1-8 8H7l-4 3 1.5-4.5A8 8 0 1 1 21 12z"/><circle cx="9" cy="12" r="0.8" fill="${color}"/><circle cx="13" cy="12" r="0.8" fill="${color}"/><circle cx="17" cy="12" r="0.8" fill="${color}"/></svg>`;

const profileSvg = (color: string) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 4-6 8-6s8 2 8 6"/></svg>`;

interface TabItem {
  pagePath: string;
  text: string;
  icon: (color: string) => string;
}

const TAB_LIST: TabItem[] = [
  { pagePath: "/pages/index/index", text: "大厅", icon: homeSvg },
  { pagePath: "/pages/publish/publish", text: "发布", icon: publishSvg },
  { pagePath: "/pages/messages/messages", text: "消息", icon: messageSvg },
  { pagePath: "/pages/profile/profile", text: "我的", icon: profileSvg },
];

/** 消息 Tab 索引（用于显示未读徽标） */
const MESSAGE_TAB_INDEX = 2;

/** 将 SVG 字符串转为 data URI */
const toDataUri = (svg: string) =>
  `data:image/svg+xml,${encodeURIComponent(svg)}`;

export default function CustomTabBar() {
  const [selected, setSelected] = useState(0);
  const { unreadCount } = useAppStore();

  useEffect(() => {
    const instance = Taro.getCurrentInstance();
    const path = instance.router?.path || "";
    const idx = TAB_LIST.findIndex((t) => path.includes(t.pagePath));
    if (idx >= 0) setSelected(idx);
  });

  const handleSwitch = (idx: number) => {
    if (idx === selected) return;
    setSelected(idx);
    Taro.switchTab({ url: TAB_LIST[idx].pagePath });
  };

  return (
    <View className="custom-tabbar safe-bottom">
      {TAB_LIST.map((tab, idx) => {
        const active = selected === idx;
        const color = active ? COLOR_ACTIVE : COLOR_NORMAL;
        const svgUri = toDataUri(tab.icon(color));
        const showBadge = idx === MESSAGE_TAB_INDEX && unreadCount > 0;
        const badgeText = unreadCount > 99 ? "99+" : String(unreadCount);
        return (
          <View
            key={tab.pagePath}
            className={`tab-item ${active ? "active" : ""}`}
            onClick={() => handleSwitch(idx)}
          >
            <View className="tab-icon-wrap">
              <Image className="tab-icon" src={svgUri} mode="aspectFit" />
              {showBadge && (
                <View className="tab-badge">
                  <Text className="tab-badge-text">{badgeText}</Text>
                </View>
              )}
            </View>
            <Text className="tab-text">{tab.text}</Text>
          </View>
        );
      })}
    </View>
  );
}
