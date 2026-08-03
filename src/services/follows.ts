import request from "./request";

export const followsService = {
  /** 关注用户 */
  follow(followedId: string) {
    return request.post<{ ok: boolean }>("/follows", { followedId });
  },

  /** 取消关注 */
  unfollow(followedId: string) {
    return request.delete<{ ok: boolean }>(`/follows/${followedId}`);
  },

  /** 检查是否已关注 */
  isFollowing(followedId: string) {
    return request.get<{ ok: boolean; following: boolean }>(`/follows/${followedId}/check`);
  },

  /** 我的关注列表 */
  list() {
    return request.get<{ ok: boolean; items: Array<{ id: string; followedId: string; followedName: string; followedAvatar: string | null; followedRole: string; createdAt: string }> }>("/follows");
  },
};