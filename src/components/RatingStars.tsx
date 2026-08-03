import { View, Text } from "@tarojs/components";

interface Props {
  rating: number;
  size?: "sm" | "md";
}

/** 星级评分展示 */
export default function RatingStars({ rating, size = "sm" }: Props) {
  const starSize = size === "md" ? 16 : 12;
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    const filled = rating >= i;
    const half = !filled && rating >= i - 0.5;
    stars.push(
      <Text
        key={i}
        style={{
          color: filled || half ? "#faad14" : "#e8e8e8",
          fontSize: starSize,
          marginRight: 2,
        }}
      >
        {filled ? "★" : half ? "★" : "★"}
      </Text>
    );
  }
  return <View style={{ display: "flex", alignItems: "center" }}>{stars}</View>;
}