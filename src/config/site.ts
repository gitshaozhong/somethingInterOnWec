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

/**
 * 预置球馆快捷搜索词（按区域分组）
 * - name: 球馆名称（展示 + 作为 POI 搜索关键词）
 * - address: 所在区域提示（展示用，不参与搜索）
 *
 * 坐标不再预置：改为进入 venue-picker 后由腾讯位置服务 POI 搜索实时返回
 */
export interface PresetVenue {
  name: string;
  address: string;
}

export const BEIJING_VENUES: Record<string, PresetVenue[]> = {
  朝阳: [
    { name: "朝阳体育中心羽毛球馆", address: "朝阳区姚家园路甲1号" },
    { name: "奥体中心羽毛球馆", address: "朝阳区安定路甲3号" },
    { name: "地坛体育馆羽毛球馆", address: "东城区安外安定门外大街" },
    { name: "工人体育馆羽毛球馆", address: "朝阳区工人体育场北路" },
  ],
  海淀: [
    { name: "清华大学综合体育馆羽毛球馆", address: "海淀区清华大学内" },
    { name: "北京大学邱德拔体育馆羽毛球馆", address: "海淀区北京大学内" },
    { name: "首体羽毛球馆", address: "海淀区中关村南大街" },
  ],
  西城: [
    { name: "月坛体育馆羽毛球馆", address: "西城区月坛南街" },
    { name: "西单体育场羽毛球馆", address: "西城区西单北大街" },
  ],
  东城: [
    { name: "东单体育中心羽毛球馆", address: "东城区东单北大街" },
  ],
  丰台: [
    { name: "丰台体育中心羽毛球馆", address: "丰台区西四环南路" },
  ],
  石景山: [
    { name: "石景山体育场羽毛球馆", address: "石景山区石景山路" },
  ],
  通州: [
    { name: "通州运河羽毛球馆", address: "通州区运河大街" },
  ],
  顺义: [
    { name: "顺义奥林匹克水上公园羽毛球馆", address: "顺义区白马路" },
  ],
  昌平: [
    { name: "昌平体育馆羽毛球馆", address: "昌平区南环路" },
  ],
  大兴: [
    { name: "大兴体育馆羽毛球馆", address: "大兴区黄村镇" },
  ],
  房山: [
    { name: "房山体育中心羽毛球馆", address: "房山区良乡" },
  ],
  怀柔: [
    { name: "怀柔体育馆羽毛球馆", address: "怀柔区青春路" },
  ],
  密云: [
    { name: "密云体育馆羽毛球馆", address: "密云区鼓楼东大街" },
  ],
};

/**
 * 扁平化预置球馆列表（供快捷搜索入口使用）
 * 保留所属区域信息
 */
export const PRESET_VENUE_LIST: (PresetVenue & { district: string })[] = (() => {
  const list: (PresetVenue & { district: string })[] = [];
  Object.entries(BEIJING_VENUES).forEach(([district, venues]) => {
    venues.forEach((v) => list.push({ ...v, district }));
  });
  return list;
})();

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
