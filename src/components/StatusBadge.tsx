import { View, Text } from "@tarojs/components";

const STATUS_MAP: Record<string, { label: string; color: string; bg: string }> = {
  pending: { label: "待确认", color: "#faad14", bg: "#fffbe6" },
  accepted: { label: "已确认", color: "#1677ff", bg: "#e6f4ff" },
  in_progress: { label: "进行中", color: "#52c41a", bg: "#f6ffed" },
  completed: { label: "已完成", color: "#52c41a", bg: "#f6ffed" },
  declined: { label: "已拒绝", color: "#999", bg: "#f5f5f5" },
  cancelled: { label: "已取消", color: "#999", bg: "#f5f5f5" },
  closed: { label: "已关闭", color: "#999", bg: "#f5f5f5" },
  expired: { label: "已过期", color: "#999", bg: "#f5f5f5" },
  revoked: { label: "已撤回", color: "#999", bg: "#f5f5f5" },
};

interface Props {
  status: string;
}

export default function StatusBadge({ status }: Props) {
  const cfg = STATUS_MAP[status] || { label: status, color: "#999", bg: "#f5f5f5" };
  return (
    <Text
      style={{
        fontSize: 12,
        padding: "2px 8px",
        borderRadius: 4,
        color: cfg.color,
        background: cfg.bg,
      }}
    >
      {cfg.label}
    </Text>
  );
}