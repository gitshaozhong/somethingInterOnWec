import { View, Text, Image, Button } from "@tarojs/components";
import { useState, useEffect } from "react";
import Taro, { useDidShow } from "@tarojs/taro";
import { followsService } from "../../services/follows";
import { availabilitiesService } from "../../services/availabilities";
import { demandsService } from "../../services/demands";
import { useUserStore } from "../../stores/user";
import Loading from "../../components/Loading";
import Empty from "../../components/Empty";
import "./following.scss";

interface FollowedItem {
  id: string;
  followedId: string;
  followedName: string;
  followedAvatar: string | null;
  followedRole: string;
  createdAt: string;
  recentPosts?: Array<{
    id: string;
    playDate: string;
    timeSlot: string;
    startHour: number;
    endHour: number;
    venueName?: string;
    locationName?: string;
    status: string;
  }>;
}

const TIME_SLOT_LABEL: Record<string, string> = { morning: "上午", afternoon: "下午", evening: "晚上" };

export default function Following() {
  const { user } = useUserStore();
  const [items, setItems] = useState<FollowedItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [unfollowLoading, setUnfollowLoading] = useState<string | null>(null);

  const fetchFollowing = async () => {
    setLoading(true);
    try {
      const res = await followsService.list();
      if (res.ok && res.items) {
        // 为每个关注对象获取最近发布的档期/需求
        const enriched = await Promise.all(
          res.items.map(async (item) => {
            let recentPosts: FollowedItem["recentPosts"] = [];
            try {
              if (item.followedRole === "coach") {
                const avRes = await availabilitiesService.list({ page: 1, limit: 3 });
                if (avRes.ok) {
                  recentPosts = (avRes.items || [])
                    .filter((a: any) => a.coachId === item.followedId)
                    .slice(0, 3)
                    .map((a: any) => ({
                      id: a.id,
                      playDate: a.playDate,
                      timeSlot: a.timeSlot,
                      startHour: a.startHour,
                      endHour: a.endHour,
                      venueName: a.venueName,
                      status: "open",
                    }));
                }
              } else {
                const dmRes = await demandsService.list({ page: 1, limit: 3 });
                if (dmRes.ok) {
                  recentPosts = (dmRes.items || [])
                    .filter((d: any) => d.userId === item.followedId)
                    .slice(0, 3)
                    .map((d: any) => ({
                      id: d.id,
                      playDate: d.playDate,
                      timeSlot: d.timeSlot,
                      startHour: d.startHour,
                      endHour: d.endHour,
                      locationName: d.locationName,
                      status: "open",
                    }));
                }
              }
            } catch (e) {
              // ignore
            }
            return { ...item, recentPosts };
          })
        );
        setItems(enriched);
      }
    } catch (err) {
      console.error("获取关注列表失败:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchFollowing(); }, []);
  useDidShow(() => { fetchFollowing(); });

  const handleUnfollow = async (followedId: string, name: string) => {
    const res = await Taro.showModal({
      title: "取消关注",
      content: `确定要取消关注「${name}」吗？`,
    });
    if (!res.confirm) return;

    setUnfollowLoading(followedId);
    try {
      const result = await followsService.unfollow(followedId);
      if (result.ok) {
        Taro.showToast({ title: "已取消关注", icon: "success" });
        setItems((prev) => prev.filter((i) => i.followedId !== followedId));
      }
    } catch (e: any) {
      Taro.showToast({ title: e?.message || "操作失败", icon: "none" });
    } finally {
      setUnfollowLoading(null);
    }
  };

  const goDetail = (item: FollowedItem, postId?: string) => {
    const targetId = postId || item.followedId;
    if (item.followedRole === "coach") {
      Taro.navigateTo({
        url: postId
          ? `/pages/availability-detail/availability-detail?id=${postId}`
          : `/pages/availability-detail/availability-detail?id=${item.recentPosts?.[0]?.id || ""}`,
      });
    } else {
      Taro.navigateTo({
        url: postId
          ? `/pages/demand-detail/demand-detail?id=${postId}`
          : `/pages/demand-detail/demand-detail?id=${item.recentPosts?.[0]?.id || ""}`,
      });
    }
  };

  const formatTime = (s: number, e: number) => `${s}:00-${e}:00`;

  if (!user) {
    return (
      <View className="page-following">
        <Empty text="请先登录" />
      </View>
    );
  }

  return (
    <View className="page-following">
      <View className="page-header">
        <Text className="page-title">我的关注</Text>
      </View>

      {loading ? (
        <Loading />
      ) : items.length === 0 ? (
        <Empty text="暂未关注任何人" />
      ) : (
        <View className="following-list">
          {items.map((item) => (
            <View key={item.id} className="following-card">
              <View className="following-header">
                <View className="following-user" onClick={() => goDetail(item)}>
                  {item.followedAvatar ? (
                    <Image src={item.followedAvatar} className="following-avatar" mode="aspectFill" />
                  ) : (
                    <View className="following-avatar following-avatar-placeholder">
                      <Text>{(item.followedName || "?")[0]}</Text>
                    </View>
                  )}
                  <View className="following-meta">
                    <Text className="following-name">{item.followedName}</Text>
                    <Text className="following-role">
                      {item.followedRole === "coach" ? "陪练员" : "学员"}
                    </Text>
                  </View>
                </View>
                <View
                  className={`unfollow-btn ${unfollowLoading === item.followedId ? "loading" : ""}`}
                  onClick={() => handleUnfollow(item.followedId, item.followedName)}
                >
                  <Text>{unfollowLoading === item.followedId ? "..." : "取消关注"}</Text>
                </View>
              </View>

              {item.recentPosts && item.recentPosts.length > 0 && (
                <View className="recent-posts">
                  <Text className="recent-title">最近发布</Text>
                  {item.recentPosts.map((post) => (
                    <View
                      key={post.id}
                      className="recent-post-item"
                      onClick={() => goDetail(item, post.id)}
                    >
                      <View className="post-info">
                        <Text className="post-date">{post.playDate}</Text>
                        <Text className="post-time">
                          {TIME_SLOT_LABEL[post.timeSlot] || post.timeSlot} {formatTime(post.startHour, post.endHour)}
                        </Text>
                      </View>
                      {post.venueName && (
                        <Text className="post-venue">{post.venueName}</Text>
                      )}
                      {post.locationName && (
                        <Text className="post-venue">{post.locationName}</Text>
                      )}
                      <Text className="post-arrow">&gt;</Text>
                    </View>
                  ))}
                </View>
              )}

              {(!item.recentPosts || item.recentPosts.length === 0) && (
                <View className="no-posts">
                  <Text className="no-posts-text">暂无最近发布</Text>
                </View>
              )}
            </View>
          ))}
        </View>
      )}
    </View>
  );
}