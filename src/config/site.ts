/**
 * 小程序站点配置：从 shared/site.ts 导入共享常量，仅保留 miniapp 专属派生。
 * 共享常量的单一数据源为 wechatMiniApp/shared/site.ts。
 */
export {
  BADMINTON_LEVELS,
  STUDENT_SELF_LEVELS,
  COURT_BOOKED_OPTIONS,
  TIME_SLOTS,
  HOUR_OPTIONS,
  inferTimeSlot,
  formatHourRange,
  BEIJING_DISTRICTS,
  SPECIALTY_TAGS,
  STUDENT_GOAL_TAGS,
  REVIEW_TAGS_COACH,
  REVIEW_TAGS_STUDENT,
  BEIJING_VENUES,
  DISTANCE_OPTIONS,
  PRICE_PRESETS,
  MAX_PRICE_OPTIONS,
  PRESET_VENUE_LIST,
  groupVenuesByDistrict,
  type PresetVenue,
} from "@shared/site";

import {
  BADMINTON_LEVELS,
  STUDENT_SELF_LEVELS,
  COURT_BOOKED_OPTIONS,
  TIME_SLOTS,
  HOUR_OPTIONS,
  BEIJING_DISTRICTS,
  SPECIALTY_TAGS,
  STUDENT_GOAL_TAGS,
  MAX_PRICE_OPTIONS,
  PRICE_PRESETS,
  BEIJING_VENUES,
  groupVenuesByDistrict,
} from "@shared/site";

/** 按区域分组的预置球馆（miniapp venue-picker 使用） */
export const BEIJING_VENUES_GROUPED = groupVenuesByDistrict(BEIJING_VENUES);

export const siteConfig = {
  badmintonLevels: BADMINTON_LEVELS,
  studentSelfLevels: STUDENT_SELF_LEVELS,
  courtBookedOptions: COURT_BOOKED_OPTIONS,
  timeSlots: TIME_SLOTS,
  hourOptions: HOUR_OPTIONS,
  beijingDistricts: BEIJING_DISTRICTS,
  specialtyTags: SPECIALTY_TAGS,
  studentGoalTags: STUDENT_GOAL_TAGS,
  maxPriceOptions: MAX_PRICE_OPTIONS,
  pricePresets: PRICE_PRESETS,
  beijingVenues: BEIJING_VENUES,
} as const;
