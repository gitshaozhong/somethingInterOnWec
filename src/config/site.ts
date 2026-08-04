/**
 * 小程序站点配置：枚举值、标签等业务常量集中管理。
 * 与 Web 端 project/src/config/site.ts 保持同步。
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
  { value: 6, label: "06:00" },
  { value: 7, label: "07:00" },
  { value: 8, label: "08:00" },
  { value: 9, label: "09:00" },
  { value: 10, label: "10:00" },
  { value: 11, label: "11:00" },
  { value: 12, label: "12:00" },
  { value: 13, label: "13:00" },
  { value: 14, label: "14:00" },
  { value: 15, label: "15:00" },
  { value: 16, label: "16:00" },
  { value: 17, label: "17:00" },
  { value: 18, label: "18:00" },
  { value: 19, label: "19:00" },
  { value: 20, label: "20:00" },
  { value: 21, label: "21:00" },
  { value: 22, label: "22:00" },
  { value: 23, label: "23:00" },
] as const;

/** 根据小时推断时段 */
export function inferTimeSlot(hour: number): "morning" | "afternoon" | "evening" {
  if (hour < 12) return "morning";
  if (hour < 18) return "afternoon";
  return "evening";
}

/** 北京区域列表 */
export const BEIJING_DISTRICTS = [
  "朝阳",
  "海淀",
  "东城",
  "西城",
  "丰台",
  "石景山",
  "通州",
  "顺义",
  "昌平",
  "大兴",
  "房山",
  "怀柔",
  "密云",
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

/** 预算上限选项 */
export const MAX_PRICE_OPTIONS = [
  { value: 50, label: "≤50元" },
  { value: 80, label: "≤80元" },
  { value: 100, label: "≤100元" },
  { value: 150, label: "≤150元" },
  { value: 200, label: "≤200元" },
] as const;

/** 价位预设（陪练档期发布） */
export const PRICE_PRESETS = [
  { min: 30, max: 50, label: "30-50 元/时（3 级陪练）" },
  { min: 40, max: 60, label: "40-60 元/时（4 级陪练）" },
  { min: 50, max: 70, label: "50-70 元/时（5 级陪练）" },
  { min: 70, max: 100, label: "70-100 元/时（6 级以上陪练）" },
] as const;

/** 北京预置球馆（按区域分组） */
export const BEIJING_VENUES: Record<string, string[]> = {
  朝阳: [
    "朝阳体育中心羽毛球馆",
    "奥体中心羽毛球馆",
    "地坛体育馆羽毛球馆",
    "工人体育馆羽毛球馆",
  ],
  海淀: [
    "清华大学综合体育馆羽毛球馆",
    "北京大学邱德拔体育馆羽毛球馆",
    "首体羽毛球馆",
  ],
  西城: ["月坛体育馆羽毛球馆", "西单体育场羽毛球馆"],
  东城: ["东单体育中心羽毛球馆"],
  丰台: ["丰台体育中心羽毛球馆"],
  石景山: ["石景山体育场羽毛球馆"],
  通州: ["通州运河羽毛球馆"],
  顺义: ["顺义奥林匹克水上公园羽毛球馆"],
  昌平: ["昌平体育馆羽毛球馆"],
  大兴: ["大兴体育馆羽毛球馆"],
  房山: ["房山体育中心羽毛球馆"],
  怀柔: ["怀柔体育馆羽毛球馆"],
  密云: ["密云体育馆羽毛球馆"],
};

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
