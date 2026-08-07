import { View, Text } from "@tarojs/components";
import { useState, useEffect } from "react";
import Taro from "@tarojs/taro";
import "./CustomNav.scss";

interface CustomNavProps {
  /** 居中标题 */
  title: string;
  /** 右侧文字按钮（可选，如"清空未读"） */
  actionText?: string;
  /** 右侧按钮点击回调 */
  onAction?: () => void;
}

/**
 * 统一自定义导航栏（4 个 Tab 页共用）
 * - 半透明白色背景 + 毛玻璃
 * - 居中标题（17px / 600 字重）
 * - 左右占位维持标题居中
 * - 通过 statusBarHeight 适配刘海屏
 */
export default function CustomNav({ title, actionText, onAction }: CustomNavProps) {
  const [statusBarHeight, setStatusBarHeight] = useState(20);

  useEffect(() => {
    try {
      const sysInfo = Taro.getSystemInfoSync();
      setStatusBarHeight(sysInfo.statusBarHeight || 20);
    } catch (e) {
      // ignore
    }
  }, []);

  return (
    <View
      className="custom-nav"
      style={{ paddingTop: `${statusBarHeight}px` }}
    >
      <View className="custom-nav-inner">
        <View className="custom-nav-left">
          {/* 占位以维持标题居中 */}
        </View>
        <Text className="custom-nav-title">{title}</Text>
        <View className="custom-nav-right">
          {actionText && (
            <Text className="custom-nav-action" onClick={onAction}>
              {actionText}
            </Text>
          )}
        </View>
      </View>
    </View>
  );
}
