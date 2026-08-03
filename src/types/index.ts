/** 用户角色 */
export type UserRole = "coach" | "student";

/** 用户信息 */
export interface User {
  id: string;
  openid: string;
  nickname: string;
  avatarUrl?: string;
  realAvatarUrl?: string;
  role: UserRole;
  level?: string;
  city?: string;
  district?: string;
  intro?: string;
  rating: number;
  reviewCount: number;
  createdAt: string;
}

/** 陪练档期列表项 (API 返回) */
export interface AvailabilityItem {
  id: string;
  coachId: string;
  coachName: string;
  coachAvatar: string | null;
  coachLevel: number | null;
  coachRating: number | null;
  reviewCount: number;
  playDate: string;
  timeSlot: string;
  startHour: number;
  endHour: number;
  venueName: string;
  venueAddress: string | null;
  priceMin: number | null;
  priceMax: number | null;
  courtBookedBy: string;
  note: string | null;
  score: number;
  createdAt: string;
}

/** 陪练档期详情 */
export interface AvailabilityDetail {
  id: string;
  coachId: string;
  coachName: string;
  coachAvatar: string | null;
  playDate: string;
  timeSlot: string;
  startHour: number;
  endHour: number;
  venueName: string;
  venueAddress: string | null;
  priceMin: number | null;
  priceMax: number | null;
  courtBookedBy: string;
  note: string | null;
  coach: {
    userId: string;
    bio: string | null;
    teachingInfo: string | null;
    level: number | null;
    yearsPlayed: number | null;
    recentRating: number | null;
    completionRate: number | null;
    reviewCount: number;
    city: string | null;
    frequentAreas: string[] | null;
    qualifications: string[] | null;
  };
  venue: {
    name: string;
    address: string;
  } | null;
  createdAt: string;
}

/** 学员需求列表项 */
export interface DemandItem {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string | null;
  studentLevel: number | null;
  playDate: string;
  timeSlot: string;
  startHour: number;
  endHour: number;
  locationName: string | null;
  expectedLevel: number | null;
  budgetMin: number | null;
  budgetMax: number | null;
  courtBookedBy: string;
  note: string | null;
  score: number;
  createdAt: string;
}

/** 学员需求详情 */
export interface DemandDetail {
  id: string;
  userId: string;
  playDate: string;
  timeSlot: string;
  startHour: number;
  endHour: number;
  locationName: string | null;
  expectedLevel: number | null;
  budgetMin: number | null;
  budgetMax: number | null;
  courtBookedBy: string;
  note: string | null;
  user: {
    name: string;
    avatarVirtual: string | null;
  };
  student: {
    bio: string | null;
    level: number | null;
    yearsPlayed: number | null;
    goalTags: string[] | null;
    reviewCount: number;
    recentRating: number | null;
  } | null;
  createdAt: string;
}

/** 邀请/消息列表项 */
export interface InvitationItem {
  id: string;
  availabilityId: string | null;
  demandId: string | null;
  sourceTitle: string;
  fromUserId: string;
  fromUserName: string;
  fromUserAvatar: string | null;
  fromUserRealAvatar: string | null;
  toUserId: string;
  toUserName: string;
  toUserAvatar: string | null;
  toUserRealAvatar: string | null;
  peerPhone: string | null;
  peerRealAvatar: string | null;
  orderNo: string | null;
  message: string | null;
  status: string;
  orderStatus: string | null;
  studentConfirmedAt: string | null;
  coachConfirmedAt: string | null;
  replyMessage: string | null;
  acceptedAt: string | null;
  expiresAt: string | null;
  inviteCount: number;
  createdAt: string;
  updatedAt: string;
}

/** 订单列表项 */
export interface OrderItem {
  id: string;
  availabilityId: string | null;
  demandId: string | null;
  sourceTitle: string;
  playDate: string | null;
  startHour: number | null;
  endHour: number | null;
  fromUserId: string;
  fromUserName: string;
  fromUserAvatar: string | null;
  toUserId: string;
  toUserName: string;
  toUserAvatar: string | null;
  myRole: "student" | "coach";
  peerUserId: string;
  peerName: string;
  peerAvatar: string | null;
  peerPhone: string | null;
  orderNo: string | null;
  status: string;
  orderStatus: string | null;
  studentConfirmedAt: string | null;
  coachConfirmedAt: string | null;
  studentCompletedAt: string | null;
  acceptedAt: string | null;
  orderClosedAt: string | null;
  checkIn: {
    id: string;
    status: string;
    validCheckIn: boolean;
    startTime: string;
    startPhoto: string | null;
    startGpsLat: number | null;
    startGpsLng: number | null;
    endTime: string | null;
    endPhoto: string | null;
    endGpsLat: number | null;
    endGpsLng: number | null;
  } | null;
  myReviewDone: boolean;
  peerReviewDone: boolean;
  createdAt: string;
  updatedAt: string;
}

/** API 响应基础结构 */
export interface ApiResponse<T = unknown> {
  ok: boolean;
  items?: T[];
  total?: number;
  page?: number;
  limit?: number;
  data?: T;
  error?: string;
  message?: string;
  count?: number;
  [key: string]: unknown;
}