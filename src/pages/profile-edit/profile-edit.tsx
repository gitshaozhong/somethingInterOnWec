import { View, Text, Input, Textarea, Button, Image, Picker, ScrollView } from "@tarojs/components";
import { useState, useEffect } from "react";
import Taro, { useRouter } from "@tarojs/taro";
import { authService } from "../../services/auth";
import { BASE_URL } from "../../services/request";
import { useUserStore } from "../../stores/user";
import Loading from "../../components/Loading";
import { BADMINTON_LEVELS, SPECIALTY_TAGS, STUDENT_GOAL_TAGS } from "../../config/site";
import "./profile-edit.scss";

/** 等级选项：0-7 级，标签格式 "0 级（零基础/未评级）" */
const LEVEL_OPTIONS = BADMINTON_LEVELS.map((l) => ({
  value: l.value,
  label: `${l.label}（${l.desc}）`,
}));

/** 等级选择器下方说明 */
const LEVEL_HINT = "中羽评级参考：0 级=零基础，3 级起对应中羽认证体系，7 级=专业级";

const QUALIFICATION_OPTIONS = [
  "社会体育指导员", "羽毛球教练证", "运动员等级证", "裁判证",
  "体育院校毕业", "省队退役", "国家队退役", "其他认证",
];

type ProfileTab = "student" | "coach";

export default function ProfileEdit() {
  const router = useRouter();
  const { user, updateUser } = useUserStore();
  const [activeTab, setActiveTab] = useState<ProfileTab>(
    router.params.tab === "coach" ? "coach" : "student"
  );
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // 共享字段
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [avatarVirtual, setAvatarVirtual] = useState("");
  const [avatarReal, setAvatarReal] = useState("");
  const [uploadingVirtual, setUploadingVirtual] = useState(false);
  const [uploadingReal, setUploadingReal] = useState(false);

  // 账号维度真实姓名/身份证号（学员/陪练员共享，第一次写入后锁定）
  const [realName, setRealName] = useState("");
  const [idNumber, setIdNumber] = useState("");
  // 是否锁定：账号已登记后，编辑第二身份时只读
  const identityLocked = !!(profile?.realName);
  // 平台昵称同样账号维度统一，第一次写入后锁定
  const nameLocked = !!(profile?.name);

  // 学员档案字段
  const [studentBio, setStudentBio] = useState("");
  const [studentLevel, setStudentLevel] = useState(0);
  const [studentYearsPlayed, setStudentYearsPlayed] = useState("");
  const [goalTags, setGoalTags] = useState<string[]>([]);

  // 陪练档案字段
  const [coachBio, setCoachBio] = useState("");
  const [coachTeachingInfo, setCoachTeachingInfo] = useState("");
  const [coachLevel, setCoachLevel] = useState(0);
  const [coachYearsPlayed, setCoachYearsPlayed] = useState("");
  const [coachCity, setCoachCity] = useState("");
  const [qualifications, setQualifications] = useState<string[]>([]);
  const [coachPriceMin, setCoachPriceMin] = useState("");
  const [coachPriceMax, setCoachPriceMax] = useState("");
  const [zhongyuCertId, setZhongyuCertId] = useState("");
  const [specialtyTags, setSpecialtyTags] = useState<string[]>([]);
  // 能力认证（陪练员）
  const [otherQualification, setOtherQualification] = useState("");
  const [certificatePhotos, setCertificatePhotos] = useState<string[]>([]);
  const [uploadingCertificate, setUploadingCertificate] = useState(false);

  // 各自错误提示
  const [studentErrors, setStudentErrors] = useState<Record<string, string>>({});
  const [coachErrors, setCoachErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    setLoading(true);
    try {
      const res = await authService.getProfile();
      if (res.ok && (res as any).user) {
        const u = (res as any).user;
        setProfile(u);
        setName(u.name || "");
        setPhone(u.phone || "");
        setAvatarVirtual(u.avatarVirtual || "");
        setAvatarReal(u.avatarReal || "");

        // 账号维度真实姓名/身份证号（学员/陪练员共享）
        setRealName(u.realName || u.studentProfile?.realName || u.coachProfile?.realName || "");
        setIdNumber(u.idNumber || u.studentProfile?.idNumber || u.coachProfile?.idNumber || "");

        if (u.studentProfile) {
          const sp = u.studentProfile;
          setStudentBio(sp.bio || "");
          setStudentLevel(sp.level ?? 0);
          setStudentYearsPlayed(sp.yearsPlayed != null ? String(sp.yearsPlayed) : "");
          setGoalTags(sp.goalTags || []);
        }

        if (u.coachProfile) {
          const cp = u.coachProfile;
          setCoachBio(cp.bio || "");
          setCoachTeachingInfo(cp.teachingInfo || "");
          setCoachLevel(cp.level ?? 0);
          setCoachYearsPlayed(cp.yearsPlayed != null ? String(cp.yearsPlayed) : "");
          setCoachCity(cp.city || "");
          setQualifications(cp.qualifications || []);
          setCoachPriceMin(cp.priceMin != null ? String(cp.priceMin) : "");
          setCoachPriceMax(cp.priceMax != null ? String(cp.priceMax) : "");
          setZhongyuCertId(cp.zhongyuCertId || "");
          setSpecialtyTags(cp.specialtyTags || []);
          // 能力认证
          setOtherQualification(cp.otherQualification || "");
          setCertificatePhotos(cp.certificatePhotos || []);
        }
      }
    } catch (err) {
      console.error("获取资料失败:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleUploadAvatar = async (type: "virtual" | "real") => {
    if (type === "virtual") setUploadingVirtual(true);
    else setUploadingReal(true);
    try {
      const chooseRes = await Taro.chooseImage({
        count: 1,
        sizeType: ["compressed"],
        sourceType: ["album", "camera"],
      });
      const uploadRes = await Taro.uploadFile({
        url: `${BASE_URL}/upload/avatar`,
        filePath: chooseRes.tempFilePaths[0],
        name: "file",
        header: { Authorization: `Bearer ${Taro.getStorageSync("auth_token")}` },
      });
      const data = JSON.parse(uploadRes.data) as { ok: boolean; url?: string };
      if (data.ok && data.url) {
        const fullUrl = data.url.startsWith("http") ? data.url : `${BASE_URL.replace("/api", "")}${data.url}`;
        if (type === "virtual") setAvatarVirtual(fullUrl);
        else setAvatarReal(fullUrl);
        Taro.showToast({ title: "上传成功", icon: "success" });
      } else {
        throw new Error("上传失败");
      }
    } catch (e: any) {
      Taro.showToast({ title: e?.message || "上传失败", icon: "none" });
    } finally {
      setUploadingVirtual(false);
      setUploadingReal(false);
    }
  };

  // 上传能力证明照片（最多5张）
  const handleUploadCertificate = async () => {
    if (certificatePhotos.length >= 5) {
      Taro.showToast({ title: "最多上传5张", icon: "none" });
      return;
    }
    setUploadingCertificate(true);
    try {
      const remain = 5 - certificatePhotos.length;
      const chooseRes = await Taro.chooseImage({
        count: remain,
        sizeType: ["compressed"],
        sourceType: ["album", "camera"],
      });
      const token = Taro.getStorageSync("auth_token");
      const uploaded: string[] = [];
      for (const filePath of chooseRes.tempFilePaths) {
        const uploadRes = await Taro.uploadFile({
          url: `${BASE_URL}/upload/certificate`,
          filePath,
          name: "file",
          header: { Authorization: `Bearer ${token}` },
        });
        const data = JSON.parse(uploadRes.data) as { ok: boolean; url?: string };
        if (data.ok && data.url) {
          const fullUrl = data.url.startsWith("http") ? data.url : `${BASE_URL.replace("/api", "")}${data.url}`;
          uploaded.push(fullUrl);
        }
      }
      if (uploaded.length > 0) {
        setCertificatePhotos([...certificatePhotos, ...uploaded]);
        Taro.showToast({ title: "上传成功", icon: "success" });
      }
    } catch (e: any) {
      Taro.showToast({ title: e?.message || "上传失败", icon: "none" });
    } finally {
      setUploadingCertificate(false);
    }
  };

  // 学员完整度
  const studentComplete = (() => {
    const studentAvatarVerified = profile?.studentAvatarStatus === "verified";
    const checks = [
      { key: "avatarVirtual", label: "虚拟头像", done: !!avatarVirtual },
      { key: "avatarReal", label: "真人头像", done: !!avatarReal && studentAvatarVerified },
      { key: "name", label: "平台昵称", done: !!name.trim() },
      { key: "phone", label: "手机号", done: !!phone.trim() && /^1[3-9]\d{9}$/.test(phone) },
      { key: "realName", label: "真实姓名", done: !!realName.trim() },
      { key: "idNumber", label: "身份证号", done: !!idNumber.trim() },
      { key: "studentLevel", label: "自评等级", done: studentLevel > 0 },
    ];
    const done = checks.filter((c) => c.done).length;
    return { done, total: checks.length, allDone: done === checks.length, checks };
  })();

  // 陪练完整度
  const coachComplete = (() => {
    const coachAvatarVerified = profile?.coachAvatarStatus === "verified";
    const checks = [
      { key: "avatarVirtual", label: "虚拟头像", done: !!avatarVirtual },
      { key: "avatarReal", label: "真人头像", done: !!avatarReal && coachAvatarVerified },
      { key: "name", label: "平台昵称", done: !!name.trim() },
      { key: "phone", label: "手机号", done: !!phone.trim() && /^1[3-9]\d{9}$/.test(phone) },
      { key: "realName", label: "真实姓名", done: !!realName.trim() },
      { key: "coachBio", label: "个人介绍", done: !!coachBio.trim() },
      { key: "coachTeachingInfo", label: "授课信息", done: !!coachTeachingInfo.trim() },
      { key: "coachCity", label: "所在城市", done: !!coachCity.trim() },
      { key: "coachLevel", label: "自评等级", done: coachLevel > 0 },
    ];
    const done = checks.filter((c) => c.done).length;
    return { done, total: checks.length, allDone: done === checks.length, checks };
  })();

  const toggleArrayItem = (arr: string[], setter: (v: string[]) => void, item: string) => {
    if (arr.includes(item)) setter(arr.filter((a) => a !== item));
    else setter([...arr, item]);
  };

  const clearError = (tab: ProfileTab, key: string) => {
    const setter = tab === "student" ? setStudentErrors : setCoachErrors;
    setter((prev) => { const n = { ...prev }; delete n[key]; return n; });
  };

  // 保存学员档案
  const handleSaveStudent = async () => {
    const errors: Record<string, string> = {};
    if (!name.trim()) errors.name = "请输入平台昵称";
    if (!avatarVirtual) errors.avatarVirtual = "请上传虚拟头像";
    if (!avatarReal) errors.avatarReal = "请上传真人头像";
    if (!phone.trim()) errors.phone = "请输入手机号";
    else if (!/^1[3-9]\d{9}$/.test(phone)) errors.phone = "手机号格式不正确";
    if (!realName.trim()) errors.realName = "请输入真实姓名";
    if (!idNumber.trim()) errors.idNumber = "请输入身份证号";
    if (studentBio.length > 100) errors.studentBio = "个人介绍不能超过100字";

    if (Object.keys(errors).length > 0) {
      setStudentErrors(errors);
      return;
    }
    setStudentErrors({});
    setSaving(true);
    try {
      const body: any = {
        name: name.trim(),
        phone: phone.trim(),
        avatarVirtual,
        avatarReal,
        currentRole: "student",
        studentProfile: {
          realName: realName.trim(),
          idNumber: idNumber.trim(),
          bio: studentBio.trim() || null,
          level: studentLevel,
          yearsPlayed: studentYearsPlayed ? parseInt(studentYearsPlayed) : null,
          goalTags,
        },
      };
      const res = await authService.updateProfile(body);
      if (res.ok) {
        updateUser({ nickname: name.trim() } as any);
        Taro.showToast({ title: "保存成功", icon: "success" });
      }
    } catch (e: any) {
      Taro.showToast({ title: e?.message || "保存失败", icon: "none" });
    } finally {
      setSaving(false);
    }
  };

  // 保存陪练档案
  const handleSaveCoach = async () => {
    const errors: Record<string, string> = {};
    if (!name.trim()) errors.name = "请输入平台昵称";
    if (!avatarVirtual) errors.avatarVirtual = "请上传虚拟头像";
    if (!avatarReal) errors.avatarReal = "请上传真人头像";
    if (!phone.trim()) errors.phone = "请输入手机号";
    else if (!/^1[3-9]\d{9}$/.test(phone)) errors.phone = "手机号格式不正确";
    if (!realName.trim()) errors.realName = "请输入真实姓名";
    if (!coachBio.trim()) errors.coachBio = "请填写个人介绍";
    if (!coachTeachingInfo.trim()) errors.coachTeachingInfo = "请填写授课信息";
    if (!coachCity.trim()) errors.coachCity = "请选择所在城市";
    if (coachBio.length > 100) errors.coachBio = "个人介绍不能超过100字";
    if (coachTeachingInfo.length > 100) errors.coachTeachingInfo = "授课信息不能超过100字";

    if (Object.keys(errors).length > 0) {
      setCoachErrors(errors);
      return;
    }
    setCoachErrors({});
    setSaving(true);
    try {
      const body: any = {
        name: name.trim(),
        phone: phone.trim(),
        avatarVirtual,
        avatarReal,
        currentRole: "coach",
        coachProfile: {
          realName: realName.trim(),
          bio: coachBio.trim() || null,
          teachingInfo: coachTeachingInfo.trim() || null,
          level: coachLevel,
          yearsPlayed: coachYearsPlayed ? parseInt(coachYearsPlayed) : null,
          city: coachCity.trim(),
          qualifications,
          priceMin: coachPriceMin ? parseInt(coachPriceMin) : null,
          priceMax: coachPriceMax ? parseInt(coachPriceMax) : null,
          zhongyuCertId: zhongyuCertId.trim() || null,
          specialtyTags,
          otherQualification: otherQualification.trim() || null,
          certificatePhotos,
        },
      };
      const res = await authService.updateProfile(body);
      if (res.ok) {
        updateUser({ nickname: name.trim() } as any);
        Taro.showToast({ title: "保存成功", icon: "success" });
      }
    } catch (e: any) {
      Taro.showToast({ title: e?.message || "保存失败", icon: "none" });
    } finally {
      setSaving(false);
    }
  };

  // 跳转城市选择页（通过 eventChannel 接收选中的城市，Taro 函数组件下比 prevPage.fn 更可靠）
  const goToCityPicker = () => {
    Taro.navigateTo({
      url: "/pages/city-picker/city-picker",
      events: {
        onCitySelected: (city: string) => {
          setCoachCity(city);
          clearError("coach", "coachCity");
        },
      },
    });
  };

  if (loading) return <View className="page-profile-edit"><Loading /></View>;
  if (!user) {
    return (
      <View className="page-profile-edit">
        <View className="empty"><Text>请先登录</Text></View>
      </View>
    );
  }

  return (
    <View className="page-profile-edit">
      {/* 顶部双 Tab */}
      <View className="profile-tab-bar">
        <View
          className={`profile-tab-item ${activeTab === "student" ? "active" : ""}`}
          onClick={() => setActiveTab("student")}
        >
          <Text>学员档案</Text>
        </View>
        <View
          className={`profile-tab-item ${activeTab === "coach" ? "active" : ""}`}
          onClick={() => setActiveTab("coach")}
        >
          <Text>陪练员档案</Text>
        </View>
      </View>

      <ScrollView scrollY className="form-scroll">
        {/* 共享头像 + 基本信息 */}
        <View className="form-card">
          {/* 完整度引导 */}
          <View className={`completeness-banner ${(activeTab === "student" ? studentComplete : coachComplete).allDone ? "all-done" : ""}`}>
            <Text className="completeness-text">
              {(activeTab === "student" ? studentComplete : coachComplete).allDone
                ? `✓ ${activeTab === "student" ? "学员" : "陪练员"}档案已完成（${(activeTab === "student" ? studentComplete : coachComplete).done}/${(activeTab === "student" ? studentComplete : coachComplete).total}），可发布${activeTab === "student" ? "需求" : "档期"}`
                : `标星项全部完成后即可发布${activeTab === "student" ? "需求" : "档期"}（${(activeTab === "student" ? studentComplete : coachComplete).done}/${(activeTab === "student" ? studentComplete : coachComplete).total}）`}
            </Text>
          </View>

          {/* 头像区域 */}
          <View className="avatar-section">
            <View className="avatar-item" onClick={() => handleUploadAvatar("virtual")}>
              <View className="avatar-label-row">
                <Text className="avatar-label">虚拟头像 *</Text>
                {uploadingVirtual && <Text className="uploading-text">上传中...</Text>}
              </View>
              {avatarVirtual ? (
                <Image src={avatarVirtual} className="avatar-preview" mode="aspectFill" />
              ) : (
                <View className="avatar-preview avatar-placeholder"><Text>点击上传</Text></View>
              )}
              <Text className="avatar-hint">公开显示</Text>
            </View>

            <View className="avatar-item" onClick={() => handleUploadAvatar("real")}>
              <View className="avatar-label-row">
                <Text className="avatar-label">真人头像 *</Text>
                {uploadingReal && <Text className="uploading-text">上传中...</Text>}
              </View>
              {avatarReal ? (
                <Image src={avatarReal} className="avatar-preview" mode="aspectFill" />
              ) : (
                <View className="avatar-preview avatar-placeholder"><Text>点击上传</Text></View>
              )}
              <Text className="avatar-hint">请上传含本人正面人脸或全身照，审核通过后用于订单内展示，不公开到大厅</Text>
              {(() => {
                const avatarStatus = activeTab === "student" ? profile?.studentAvatarStatus : profile?.coachAvatarStatus;
                const rejectReason = activeTab === "student" ? profile?.studentAvatarRejectReason : profile?.coachAvatarRejectReason;
                if (!avatarStatus) return null;
                return (
                  <>
                    <Text className={`verify-status status-${avatarStatus}`}>
                      {avatarStatus === "verified" ? "已审核" : avatarStatus === "pending" ? "审核中" : "未通过"}
                    </Text>
                    {avatarStatus === "rejected" && rejectReason && (
                      <Text className="reject-reason">拒绝原因：{rejectReason}</Text>
                    )}
                  </>
                );
              })()}
            </View>
          </View>

          {/* 基本信息表单 */}
          <View className="section-title"><Text>基本信息</Text></View>

          <View className="form-item">
            <Text className="form-label">平台昵称 *</Text>
            <Text className="form-hint">{nameLocked ? "账号已登记，不可更改" : "公开显示"}</Text>
            <Input
              className={`form-input ${nameLocked ? "readonly" : ""}`}
              placeholder="请输入平台昵称"
              value={name}
              disabled={nameLocked}
              onInput={(e) => { setName(e.detail.value); clearError(activeTab, "name"); }}
            />
            {(activeTab === "student" ? studentErrors : coachErrors).name && (
              <Text className="field-error">{(activeTab === "student" ? studentErrors : coachErrors).name}</Text>
            )}
          </View>

          <View className="form-item">
            <Text className="form-label">手机号 *</Text>
            <Text className="form-hint">双方同意后互看，不公开</Text>
            <Input
              className="form-input"
              type="number"
              placeholder="请输入11位手机号"
              maxlength={11}
              value={phone}
              onInput={(e) => { setPhone(e.detail.value); clearError(activeTab, "phone"); }}
            />
            {(activeTab === "student" ? studentErrors : coachErrors).phone && (
              <Text className="field-error">{(activeTab === "student" ? studentErrors : coachErrors).phone}</Text>
            )}
          </View>

          <View className="form-item">
            <Text className="form-label">注册邮箱</Text>
            <Input className="form-input readonly" value={profile?.email || ""} disabled />
          </View>
        </View>

        {/* 学员档案表单 */}
        {activeTab === "student" && (
          <View className="form-card">
            <View className="section-title"><Text>学员档案</Text></View>

            <View className="form-item">
              <Text className="form-label">真实姓名 *</Text>
              <Text className="form-hint">{identityLocked ? "账号已登记，不可修改" : "不公开显示"}</Text>
              <Input
                className={`form-input ${identityLocked ? "readonly" : ""}`}
                placeholder="请输入真实姓名"
                value={realName}
                disabled={identityLocked}
                onInput={(e) => { setRealName(e.detail.value); clearError("student", "realName"); }}
              />
              {studentErrors.realName && <Text className="field-error">{studentErrors.realName}</Text>}
            </View>

            <View className="form-item">
              <Text className="form-label">身份证号 *</Text>
              <Text className="form-hint">{identityLocked ? "账号已登记，不可修改" : "不公开显示"}</Text>
              <Input
                className={`form-input ${identityLocked ? "readonly" : ""}`}
                placeholder="请输入身份证号"
                value={idNumber}
                disabled={identityLocked}
                onInput={(e) => { setIdNumber(e.detail.value); clearError("student", "idNumber"); }}
              />
              {studentErrors.idNumber && <Text className="field-error">{studentErrors.idNumber}</Text>}
            </View>

            <View className="form-item">
              <Text className="form-label">个人介绍</Text>
              <Text className="form-hint">100 字内</Text>
              <Textarea
                className="form-textarea"
                placeholder="例：打羽毛球2年，想找陪练提高技术"
                value={studentBio}
                onInput={(e) => { setStudentBio(e.detail.value); clearError("student", "studentBio"); }}
                maxlength={100}
              />
              <Text className="char-count">{studentBio.length}/100</Text>
              {studentErrors.studentBio && <Text className="field-error">{studentErrors.studentBio}</Text>}
            </View>

            <View className="form-item">
              <Text className="form-label">自评等级 *</Text>
              <Picker
                mode="selector"
                range={LEVEL_OPTIONS.map((l) => l.label)}
                value={studentLevel}
                onChange={(e) => setStudentLevel(Number(e.detail.value))}
              >
                <View className="picker-value">
                  <Text>{LEVEL_OPTIONS[studentLevel]?.label ?? "请选择"}</Text>
                </View>
              </Picker>
              <Text className="level-hint">{LEVEL_HINT}</Text>
            </View>

            <View className="form-item">
              <Text className="form-label">球龄（年）</Text>
              <Input
                className="form-input"
                type="number"
                placeholder="如：2"
                value={studentYearsPlayed}
                onInput={(e) => setStudentYearsPlayed(e.detail.value)}
              />
            </View>

            <View className="form-item">
              <Text className="form-label">学习目标</Text>
              <Text className="form-hint">可多选，帮助陪练了解你的练球方向</Text>
              <View className="tag-list">
                {STUDENT_GOAL_TAGS.map((t) => (
                  <View
                    key={t.slug}
                    className={`tag-item ${goalTags.includes(t.slug) ? "active" : ""}`}
                    onClick={() => toggleArrayItem(goalTags, setGoalTags, t.slug)}
                  >
                    <Text>{t.label}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        )}

        {/* 能力认证独立卡片（仅陪练员） */}
        {activeTab === "coach" && (
          <View className="form-card">
            <View className="section-title"><Text>能力认证</Text></View>

            {qualifications.includes("其他认证") && (
              <View className="form-item">
                <Text className="form-label">其他认证</Text>
                <Text className="form-hint">请填写认证名称，如需展示多项请用顿号分隔</Text>
                <Input
                  className="form-input"
                  placeholder="如：国家二级运动员、XX赛事冠军等"
                  value={otherQualification}
                  onInput={(e) => setOtherQualification(e.detail.value)}
                />
              </View>
            )}

            <View className="form-item">
              <View className="ability-photo-header">
                <Text className="form-label">能力证明照片</Text>
                <Text className="ability-photo-count">{certificatePhotos.length}/5</Text>
              </View>
              <Text className="form-hint">能够充分证明你的该项运动能力，比如打球照片、球领、获奖证明或者专业教练的活动证明等等</Text>
              <View className="ability-photo-grid">
                {certificatePhotos.map((url, idx) => (
                  <View key={idx} className="ability-photo-item">
                    <Image src={url} className="ability-photo" mode="aspectFill" />
                    <View
                      className="ability-photo-del"
                      onClick={() => setCertificatePhotos(certificatePhotos.filter((_, i) => i !== idx))}
                    >
                      <Text>✕</Text>
                    </View>
                  </View>
                ))}
                {certificatePhotos.length < 5 && (
                  <View
                    className="ability-photo-upload"
                    onClick={handleUploadCertificate}
                  >
                    {uploadingCertificate ? (
                      <Text className="uploading-text">上传中...</Text>
                    ) : (
                      <Text className="upload-icon">+</Text>
                    )}
                  </View>
                )}
              </View>
            </View>
          </View>
        )}

        {/* 陪练员档案表单 */}
        {activeTab === "coach" && (
          <View className="form-card">
            <View className="section-title"><Text>陪练员档案</Text></View>

            <View className="form-item">
              <Text className="form-label">真实姓名 *</Text>
              <Text className="form-hint">{identityLocked ? "账号已登记，不可修改" : "不公开显示"}</Text>
              <Input
                className={`form-input ${identityLocked ? "readonly" : ""}`}
                placeholder="请输入真实姓名"
                value={realName}
                disabled={identityLocked}
                onInput={(e) => { setRealName(e.detail.value); clearError("coach", "realName"); }}
              />
              {coachErrors.realName && <Text className="field-error">{coachErrors.realName}</Text>}
            </View>

            <View className="form-item">
              <Text className="form-label">个人介绍 *</Text>
              <Text className="form-hint">100 字内，介绍打球特长、教学经验等</Text>
              <Textarea
                className="form-textarea"
                placeholder="请详细介绍您的羽毛球特长、教学经验、获奖经历等..."
                value={coachBio}
                onInput={(e) => { setCoachBio(e.detail.value); clearError("coach", "coachBio"); }}
                maxlength={100}
              />
              <Text className="char-count">{coachBio.length}/100</Text>
              {coachErrors.coachBio && <Text className="field-error">{coachErrors.coachBio}</Text>}
            </View>

            <View className="form-item">
              <Text className="form-label">陪练授课信息 *</Text>
              <Text className="form-hint">100 字内，授课对象/地点/模式/时间</Text>
              <Textarea
                className="form-textarea"
                placeholder="请说明授课对象、地点安排、授课模式、时间安排等..."
                value={coachTeachingInfo}
                onInput={(e) => { setCoachTeachingInfo(e.detail.value); clearError("coach", "coachTeachingInfo"); }}
                maxlength={100}
              />
              <Text className="char-count">{coachTeachingInfo.length}/100</Text>
              {coachErrors.coachTeachingInfo && <Text className="field-error">{coachErrors.coachTeachingInfo}</Text>}
            </View>

            <View className="form-item">
              <Text className="form-label">自评等级 *</Text>
              <Picker
                mode="selector"
                range={LEVEL_OPTIONS.map((l) => l.label)}
                value={coachLevel}
                onChange={(e) => setCoachLevel(Number(e.detail.value))}
              >
                <View className="picker-value">
                  <Text>{LEVEL_OPTIONS[coachLevel]?.label ?? "请选择"}</Text>
                </View>
              </Picker>
              <Text className="level-hint">{LEVEL_HINT}</Text>
            </View>

            <View className="form-item">
              <Text className="form-label">球龄（年）</Text>
              <Input
                className="form-input"
                type="number"
                placeholder="如：5"
                value={coachYearsPlayed}
                onInput={(e) => setCoachYearsPlayed(e.detail.value)}
              />
            </View>

            <View className="form-item">
              <Text className="form-label">所在城市 *</Text>
              <View
                className={`city-entry ${!coachCity ? "is-empty" : ""}`}
                onClick={goToCityPicker}
              >
                <Text className={coachCity ? "city-entry-value" : "city-entry-placeholder"}>
                  {coachCity || "请选择城市"}
                </Text>
                <Text className="city-entry-arrow">›</Text>
              </View>
              {coachErrors.coachCity && <Text className="field-error">{coachErrors.coachCity}</Text>}
            </View>

            <View className="form-item">
              <Text className="form-label">资质认证</Text>
              <View className="tag-list">
                {QUALIFICATION_OPTIONS.map((q) => (
                  <View
                    key={q}
                    className={`tag-item ${qualifications.includes(q) ? "active" : ""}`}
                    onClick={() => toggleArrayItem(qualifications, setQualifications, q)}
                  >
                    <Text>{q}</Text>
                  </View>
                ))}
              </View>
            </View>

            <View className="form-item">
              <Text className="form-label">擅长方向</Text>
              <Text className="form-hint">至少选 2 个，达到完整度满分</Text>
              <View className="tag-list">
                {SPECIALTY_TAGS.map((t) => (
                  <View
                    key={t.slug}
                    className={`tag-item ${specialtyTags.includes(t.slug) ? "active" : ""}`}
                    onClick={() => toggleArrayItem(specialtyTags, setSpecialtyTags, t.slug)}
                  >
                    <Text>{t.label}</Text>
                  </View>
                ))}
              </View>
            </View>

            <View className="form-item">
              <Text className="form-label">最低价格（元/时）</Text>
              <Input
                className="form-input"
                type="number"
                placeholder="选填"
                value={coachPriceMin}
                onInput={(e) => setCoachPriceMin(e.detail.value)}
              />
            </View>

            <View className="form-item">
              <Text className="form-label">最高价格（元/时）</Text>
              <Input
                className="form-input"
                type="number"
                placeholder="选填"
                value={coachPriceMax}
                onInput={(e) => setCoachPriceMax(e.detail.value)}
              />
            </View>

            <View className="form-item">
              <Text className="form-label">中羽平台账号</Text>
              <Text className="form-hint">选填</Text>
              <Input
                className="form-input"
                placeholder="中羽平台账号"
                value={zhongyuCertId}
                onInput={(e) => setZhongyuCertId(e.detail.value)}
              />
            </View>
          </View>
        )}
      </ScrollView>

      <View className="submit-area safe-bottom">
        <Button
          className="submit-btn"
          loading={saving}
          disabled={saving}
          onClick={activeTab === "student" ? handleSaveStudent : handleSaveCoach}
        >
          保存{activeTab === "student" ? "学员档案" : "陪练员档案"}
        </Button>
      </View>
    </View>
  );
}
