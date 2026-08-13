/**
 * 小程序站点配置：枚举值、标签等业务常量集中管理。
 *
 * 注意：shared/site.ts 是 server 端的单一数据源。
 * miniapp 端因 Taro 编译限制无法直接引用 src 外文件，
 * 此文件为 shared/site.ts 的同步副本，修改时请同步更新 shared/site.ts。
 */

/** 羽毛球自评等级（0-7 级，参考中羽认证体系） */
export const BADMINTON_LEVELS = [
  { value: 0, label: "0 级", desc: "零基础/未评级" },
  { value: 1, label: "1 级", desc: "刚入门，刚学握拍" },
  { value: 2, label: "2 级", desc: "能简单对打" },
  { value: 3, label: "3 级", desc: "入门，能基本对打" },
  { value: 4, label: "4 级", desc: "业余中级，基本技术较稳" },
  { value: 5, label: "5 级", desc: "业余高级，可参加业余赛事" },
  { value: 6, label: "6 级", desc: "业余顶尖，接近专业水平" },
  { value: 7, label: "7 级", desc: "专业级" },
] as const;

export const STUDENT_SELF_LEVELS = BADMINTON_LEVELS;

/** 场地预订选项 */
export const COURT_BOOKED_OPTIONS = [
  { value: "student", label: "学员订" },
  { value: "coach", label: "陪练订" },
] as const;

/** 时段枚举（粗粒度） */
export const TIME_SLOTS = [
  { value: "morning", label: "上午" },
  { value: "afternoon", label: "下午" },
  { value: "evening", label: "晚上" },
] as const;

/** 小时级时间选项（6:00 - 23:00） */
export const HOUR_OPTIONS = [
  { value: 6, label: "06:00" }, { value: 7, label: "07:00" },
  { value: 8, label: "08:00" }, { value: 9, label: "09:00" },
  { value: 10, label: "10:00" }, { value: 11, label: "11:00" },
  { value: 12, label: "12:00" }, { value: 13, label: "13:00" },
  { value: 14, label: "14:00" }, { value: 15, label: "15:00" },
  { value: 16, label: "16:00" }, { value: 17, label: "17:00" },
  { value: 18, label: "18:00" }, { value: 19, label: "19:00" },
  { value: 20, label: "20:00" }, { value: 21, label: "21:00" },
  { value: 22, label: "22:00" }, { value: 23, label: "23:00" },
] as const;

/** 根据小时推断时段 */
export function inferTimeSlot(hour: number): "morning" | "afternoon" | "evening" {
  if (hour < 12) return "morning";
  if (hour < 18) return "afternoon";
  return "evening";
}

/** 格式化小时范围 */
export function formatHourRange(start: number | null | undefined, end: number | null | undefined): string {
  if (start == null) return "时间待定";
  const s = String(start).padStart(2, "0");
  if (end == null || end <= start) return `${s}:00`;
  return `${s}:00-${String(end).padStart(2, "0")}:00`;
}

/** 北京区域列表 */
export const BEIJING_DISTRICTS = [
  "朝阳", "海淀", "东城", "西城", "丰台", "石景山",
  "通州", "顺义", "昌平", "大兴", "房山", "怀柔", "密云",
] as const;

/** 擅长方向（陪练档案多选标签） */
export const SPECIALTY_TAGS = [
  { slug: "singles", label: "单打" },
  { slug: "doubles", label: "双打" },
  { slug: "mixed", label: "混双" },
  { slug: "technique", label: "技术教学" },
  { slug: "footwork", label: "步法训练" },
  { slug: "stamina", label: "体能陪练" },
  { slug: "tactics", label: "战术演练" },
] as const;

/** 学员学习目标标签（多选） */
export const STUDENT_GOAL_TAGS = [
  { slug: "grip", label: "入门握拍" },
  { slug: "footwork", label: "步法进阶" },
  { slug: "singles", label: "单打技术" },
  { slug: "doubles", label: "双打配合" },
  { slug: "mixed", label: "混双配合" },
  { slug: "tactics", label: "战术演练" },
  { slug: "stamina", label: "体能训练" },
  { slug: "smash", label: "杀球练习" },
  { slug: "defense", label: "防守反击" },
  { slug: "cert", label: "考级冲段" },
] as const;

/** 陪练评价标签 */
export const REVIEW_TAGS_COACH = [
  { slug: "punctual", label: "守时" }, { slug: "skillful", label: "技术过硬" },
  { slug: "attitude", label: "态度好" }, { slug: "teaching", label: "教学清晰" },
  { slug: "honor", label: "守约" }, { slug: "communication", label: "沟通顺畅" },
] as const;

/** 学员评价标签 */
export const REVIEW_TAGS_STUDENT = [
  { slug: "honor", label: "守约" }, { slug: "polite", label: "礼貌" },
  { slug: "communication", label: "沟通顺畅" }, { slug: "punctual", label: "守时" },
  { slug: "cooperative", label: "配合度高" },
] as const;

/** 预置球馆（扁平数组，按区域字段分组） */
export interface PresetVenue {
  name: string;
  address: string;
  district: string;
}

export const BEIJING_VENUES: PresetVenue[] = [
  { name: "朝阳体育中心羽毛球馆", address: "北京市朝阳区姚家园路朝阳体育中心", district: "朝阳" },
  { name: "奥体中心羽毛球馆", address: "北京市朝阳区安定路奥体中心", district: "朝阳" },
  { name: "地坛体育馆羽毛球馆", address: "北京市东城区安定门外大街地坛体育馆", district: "东城" },
  { name: "首体羽毛球馆", address: "北京市海淀区中关村南大街首都体育馆", district: "海淀" },
  { name: "五棵松文化体育中心羽毛球馆", address: "北京市海淀区复兴路五棵松", district: "海淀" },
  { name: "清华大学综合体育馆羽毛球馆", address: "北京市海淀区清华大学", district: "海淀" },
  { name: "北京大学邱德拔体育馆羽毛球馆", address: "北京市海淀区北京大学", district: "海淀" },
  { name: "工人体育馆羽毛球馆", address: "北京市朝阳区工人体育场北路", district: "朝阳" },
  { name: "西单体育场羽毛球馆", address: "北京市西城区西单北大街", district: "西城" },
  { name: "月坛体育馆羽毛球馆", address: "北京市西城区月坛南街", district: "西城" },
  { name: "广安体育馆羽毛球馆", address: "北京市西城区广安门内大街", district: "西城" },
  { name: "丰台体育中心羽毛球馆", address: "北京市丰台区西四环南路丰台体育中心", district: "丰台" },
  { name: "石景山体育馆羽毛球馆", address: "北京市石景山区八角大街石景山体育馆", district: "石景山" },
  { name: "通州区体育中心羽毛球馆", address: "北京市通州区新华大街通州体育中心", district: "通州" },
  { name: "顺义区体育馆羽毛球馆", address: "北京市顺义区光明南街顺义体育馆", district: "顺义" },
  { name: "昌平区体育馆羽毛球馆", address: "北京市昌平区南环路昌平体育馆", district: "昌平" },
  { name: "大兴区体育馆羽毛球馆", address: "北京市大兴区黄村镇大兴体育馆", district: "大兴" },
  { name: "房山区体育馆羽毛球馆", address: "北京市房山区良乡房山体育馆", district: "房山" },
  { name: "怀柔区体育馆羽毛球馆", address: "北京市怀柔区青春路怀柔体育馆", district: "怀柔" },
  { name: "密云区体育馆羽毛球馆", address: "北京市密云区鼓楼东大街密云体育馆", district: "密云" },
];

/** 距离搜索选项（公里） */
export const DISTANCE_OPTIONS = [3, 5, 10] as const;

/** 价位预设（陪练档期发布） */
export const PRICE_PRESETS = [
  { min: 30, max: 50, label: "30-50 元/小时（3 级陪练）" },
  { min: 40, max: 60, label: "40-60 元/小时（4 级陪练）" },
  { min: 50, max: 70, label: "50-70 元/小时（5 级陪练）" },
  { min: 70, max: 100, label: "70-100 元/小时（6 级以上陪练）" },
] as const;

/** 预算上限选项（学员筛选） */
export const MAX_PRICE_OPTIONS = [
  { value: 50, label: "≤50元" },
  { value: 80, label: "≤80元" },
  { value: 100, label: "≤100元" },
  { value: 150, label: "≤150元" },
  { value: 200, label: "≤200元" },
] as const;

/**
 * 将 BEIJING_VENUES 扁平数组按区域分组为 Record。
 * miniapp 端的 venue-picker 使用此格式。
 */
export function groupVenuesByDistrict(venues: PresetVenue[]): Record<string, Omit<PresetVenue, "district">[]> {
  const map: Record<string, Omit<PresetVenue, "district">[]> = {};
  for (const v of venues) {
    if (!map[v.district]) map[v.district] = [];
    map[v.district].push({ name: v.name, address: v.address });
  }
  return map;
}

/** 扁平化预置球馆列表（供快捷搜索入口使用） */
export const PRESET_VENUE_LIST = BEIJING_VENUES;

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
