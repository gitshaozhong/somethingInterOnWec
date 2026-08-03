import { View, Text } from "@tarojs/components";

interface Props {
  text?: string;
}

export default function Empty({ text = "暂无数据" }: Props) {
  return (
    <View style={{ textAlign: "center", padding: "60px 0", color: "var(--text-color-hint)" }}>
      <Text>{text}</Text>
    </View>
  );
}