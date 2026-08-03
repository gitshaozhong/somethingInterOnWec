import { View, Text, Input, Textarea, Button, Image, Picker } from "@tarojs/components";
import { useState, useEffect } from "react";
import Taro from "@tarojs/taro";
import { authService } from "../../services/auth";
import { BASE_URL } from "../../services/request";
import { useUserStore } from "../../stores/user";
import Loading from "../../components/Loading";
import "./profile-edit.scss";

const LEVELS = [
  { value: 0, label: "入门" },
  { value: 1, label: "初级" },
  { value: 2, label: "中级" },
  { value: 3, label: "高级" },
  { value: 4, label: "专业" },
  { value: 5, label: "顶尖" },
];

const QUALIFICATION_OPTIONS = [
  "社会体育指导员", "羽毛球教练证", "运动员等级证", "裁判证",
  "体育院校毕业", "省队退役", "国家队退役", "其他认证",
];

const GOAL_OPTIONS = [
  "基础入门", "技术提升", "战术训练", "比赛备战",
  "体能训练", "减肥健身", "社交娱乐", "考级考证",
];

export default function ProfileEdit() {
  const { user, updateUser } = useUserStore();
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // 表单状态
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [realName, setRealName] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [bio, setBio] = useState("");
  const [teachingInfo, setTeachingInfo] = useState("");
  const [level, setLevel] = useState(0);
  const [yearsPlayed, setYearsPlayed] = useState("");
  const [city, setCity] = useState("");
  const [frequentAreas, setFrequentAreas] = useState<string[]>([]);
  const [areaInput, setAreaInput] = useState("");
  const [qualifications, setQualifications] = useState<string[]>([]);
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");
  const [zhongyuCertId, setZhongyuCertId] = useState("");
  const [goalTags, setGoalTags] = useState<string[]>([]);

  // 头像上传
  const [avatarVirtual, setAvatarVirtual] = useState("");
  const [avatarReal, setAvatarReal] = useState("");
  const [uploadingVirtual, setUploadingVirtual] = useState(false);
  const [uploadingReal, setUploadingReal] = useState(false);

  const isCoach = user?.role === "coach";
  const isStudent = user?.role === "student";

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

        if (u.coachProfile) {
          const cp = u.coachProfile;
          setRealName(cp.realName || "");
          setBio(cp.bio || "");
          setTeachingInfo(cp.teachingInfo || "");
          setLevel(cp.level ?? 0);
          setYearsPlayed(cp.yearsPlayed != null ? String(cp.yearsPlayed) : "");
          setCity(cp.city || "");
          setFrequentAreas(cp.frequentAreas || []);
          setQualifications(cp.qualifications || []);
          setPriceMin(cp.priceMin != null ? String(cp.priceMin) : "");
          setPriceMax(cp.priceMax != null ? String(cp.priceMax) : "");
          setZhongyuCertId(cp.zhongyuCertId || "");
        }

        if (u.studentProfile) {
          const sp = u.studentProfile;
          setRealName(sp.realName || "");
          setIdNumber(sp.idNumber || "");
          setBio(sp.bio || "");
          setLevel(sp.level ?? 0);
          setYearsPlayed(sp.yearsPlayed != null ? String(sp.yearsPlayed) : "");
          setGoalTags(sp.goalTags || []);
        }
      }
    } catch (err) {
      console.error("获取资料失败:", err);
    } finally {
      setLoading(false);
    }
  };

  // 头像上传
  const handleUploadAvatar = async (type: "virtual" | "real") => {
    setUploadingVirtual(type === "virtual");
    setUploadingReal(type === "real");
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
        // 构建完整 URL
        const fullUrl = data.url.startsWith("http") ? data.url : `${BASE_URL.replace("/api", "")}${data.url}`;
        if (type === "virtual") {
          setAvatarVirtual(fullUrl);
        } else {
          setAvatarReal(fullUrl);
        }
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

  // 保存
  const handleSave = async () => {
    if (!name.trim()) { Taro.showToast({ title: "请输入平台昵称", icon: "none" }); return; }

    if (isCoach) {
      if (!realName.trim()) { Taro.showToast({ title: "请输入真实姓名", icon: "none" }); return; }
      if (!city.trim()) { Taro.showToast({ title: "请输入所在城市", icon: "none" }); return; }
      if (frequentAreas.length === 0) { Taro.showToast({ title: "请添加常住区域", icon: "none" }); return; }
      if (bio.length > 100) { Taro.showToast({ title: "个人介绍不能超过100字", icon: "none" }); return; }
      if (teachingInfo.length > 100) { Taro.showToast({ title: "授课信息不能超过100字", icon: "none" }); return; }
    }
    if (isStudent) {
      if (!realName.trim()) { Taro.showToast({ title: "请输入真实姓名", icon: "none" }); return; }
      if (!idNumber.trim()) { Taro.showToast({ title: "请输入身份证号", icon: "none" }); return; }
      if (bio.length > 100) { Taro.showToast({ title: "个人介绍不能超过100字", icon: "none" }); return; }
    }

    setSaving(true);
    try {
      const body: any = {
        name: name.trim(),
        phone: phone || null,
      };

      if (isCoach) {
        body.coachProfile = {
          realName: realName.trim(),
          bio: bio.trim() || null,
          teachingInfo: teachingInfo.trim() || null,
          level,
          yearsPlayed: yearsPlayed ? parseInt(yearsPlayed) : null,
          city: city.trim(),
          frequentAreas,
          qualifications,
          priceMin: priceMin ? parseInt(priceMin) : null,
          priceMax: priceMax ? parseInt(priceMax) : null,
          zhongyuCertId: zhongyuCertId.trim() || null,
        };
      }

      if (isStudent) {
        body.studentProfile = {
          realName: realName.trim(),
          idNumber: idNumber.trim(),
          bio: bio.trim() || null,
          level,
          yearsPlayed: yearsPlayed ? parseInt(yearsPlayed) : null,
          goalTags,
        };
      }

      const res = await authService.updateProfile(body);
      if (res.ok) {
        updateUser({ nickname: name.trim() });
        Taro.showToast({ title: "保存成功", icon: "success" });
      }
    } catch (e: any) {
      Taro.showToast({ title: e?.message || "保存失败", icon: "none" });
    } finally {
      setSaving(false);
    }
  };

  // 添加/移除标签
  const toggleArrayItem = (arr: string[], setter: (v: string[]) => void, item: string) => {
    if (arr.includes(item)) {
      setter(arr.filter((a) => a !== item));
    } else {
      setter([...arr, item]);
    }
  };

  if (loading) return <View className="page-profile-edit"><Loading /></View>;
  if (!user) return <View className="page-profile-edit"><View className="empty"><Text>请先登录</Text></View></View>;

  return (
    <View className="page-profile-edit">
      <View className="page-header">
        <Text className="page-title">个人资料</Text>
      </View>

      <View className="form-card">
        {/* 头像区域 */}
        <View className="avatar-section">
          <View className="avatar-item" onClick={() => handleUploadAvatar("virtual")}>
            <View className="avatar-label-row">
              <Text className="avatar-label">虚拟头像 {isStudent ? "*" : "*"}</Text>
              {uploadingVirtual && <Text className="uploading-text">上传中...</Text>}
            </View>
            {avatarVirtual ? (
              <Image src={avatarVirtual} className="avatar-preview" mode="aspectFill" />
            ) : (
              <View className="avatar-preview avatar-placeholder">
                <Text>点击上传</Text>
              </View>
            )}
            <Text className="avatar-hint">公开显示在平台的头像</Text>
          </View>

          <View className="avatar-item" onClick={() => handleUploadAvatar("real")}>
            <View className="avatar-label-row">
              <Text className="avatar-label">真人头像 {isStudent ? "*" : "*"}</Text>
              {uploadingReal && <Text className="uploading-text">上传中...</Text>}
            </View>
            {avatarReal ? (
              <Image src={avatarReal} className="avatar-preview" mode="aspectFill" />
            ) : (
              <View className="avatar-preview avatar-placeholder">
                <Text>点击上传</Text>
              </View>
            )}
            <Text className="avatar-hint">
              请上传含清晰正面人脸或者全身照，管理员审核通过后才会对匹配方展示，不会展示在订单大厅。
            </Text>
            {profile?.realVerifiedStatus && (
              <Text className={`verify-status status-${profile.realVerifiedStatus}`}>
                {profile.realVerifiedStatus === "verified" ? "已审核" : profile.realVerifiedStatus === "pending" ? "审核中" : "未通过"}
              </Text>
            )}
          </View>
        </View>

        {/* 基本信息 */}
        <View className="section-title"><Text>基本信息</Text></View>

        <View className="form-item">
          <Text className="form-label">平台昵称 *</Text>
          <Text className="form-hint">公开显示</Text>
          <Input className="form-input" placeholder="请输入平台昵称" value={name} onInput={(e) => setName(e.detail.value)} />
        </View>

        <View className="form-item">
          <Text className="form-label">真实姓名 *</Text>
          <Text className="form-hint">不公开显示</Text>
          <Input className="form-input" placeholder="请输入真实姓名" value={realName} onInput={(e) => setRealName(e.detail.value)} />
        </View>

        {isStudent && (
          <View className="form-item">
            <Text className="form-label">身份证号 *</Text>
            <Text className="form-hint">不公开显示</Text>
            <Input className="form-input" placeholder="请输入身份证号" value={idNumber} onInput={(e) => setIdNumber(e.detail.value)} />
          </View>
        )}

        <View className="form-item">
          <Text className="form-label">注册邮箱</Text>
          <Input className="form-input readonly" value={profile?.email || ""} disabled />
        </View>

        <View className="form-item">
          <Text className="form-label">手机号</Text>
          <Input className="form-input" type="number" placeholder="请输入手机号" value={phone} onInput={(e) => setPhone(e.detail.value)} />
        </View>

        {/* 陪练专属 */}
        {isCoach && (
          <>
            <View className="section-title"><Text>陪练资料</Text></View>

            <View className="form-item">
              <Text className="form-label">个人介绍</Text>
              <Text className="form-hint">简要介绍你的打球经历和教学风格（100字以内）</Text>
              <Textarea className="form-textarea" placeholder="例：羽毛球教学10年，擅长成人基础教学" value={bio} onInput={(e) => setBio(e.detail.value)} maxlength={100} />
              <Text className="char-count">{bio.length}/100</Text>
            </View>

            <View className="form-item">
              <Text className="form-label">授课信息</Text>
              <Text className="form-hint">简要介绍你的授课风格和内容（100字以内）</Text>
              <Textarea className="form-textarea" placeholder="例：擅长成人基础教学，纠正动作细节" value={teachingInfo} onInput={(e) => setTeachingInfo(e.detail.value)} maxlength={100} />
              <Text className="char-count">{teachingInfo.length}/100</Text>
            </View>

            <View className="form-item">
              <Text className="form-label">自身等级</Text>
              <Picker mode="selector" range={LEVELS.map((l) => l.label)} value={level} onChange={(e) => setLevel(Number(e.detail.value))}>
                <View className="picker-value"><Text>{LEVELS[level]?.label}</Text></View>
              </Picker>
            </View>

            <View className="form-item">
              <Text className="form-label">球龄（年）</Text>
              <Input className="form-input" type="number" placeholder="如：5" value={yearsPlayed} onInput={(e) => setYearsPlayed(e.detail.value)} />
            </View>

            <View className="form-item">
              <Text className="form-label">所在城市 *</Text>
              <Input className="form-input" placeholder="如：北京市" value={city} onInput={(e) => setCity(e.detail.value)} />
            </View>

            <View className="form-item">
              <Text className="form-label">常住区域 *</Text>
              <View className="tag-input-row">
                <Input className="form-input tag-input" placeholder="输入区域名后点击添加" value={areaInput} onInput={(e) => setAreaInput(e.detail.value)} />
                <View className="add-tag-btn" onClick={() => {
                  if (areaInput.trim() && !frequentAreas.includes(areaInput.trim())) {
                    setFrequentAreas([...frequentAreas, areaInput.trim()]);
                    setAreaInput("");
                  }
                }}>
                  <Text>添加</Text>
                </View>
              </View>
              {frequentAreas.length > 0 && (
                <View className="tag-list">
                  {frequentAreas.map((area) => (
                    <View key={area} className="tag-item" onClick={() => setFrequentAreas(frequentAreas.filter((a) => a !== area))}>
                      <Text>{area} ✕</Text>
                    </View>
                  ))}
                </View>
              )}
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
              <Text className="form-label">最低价格（元/时）</Text>
              <Input className="form-input" type="number" placeholder="选填" value={priceMin} onInput={(e) => setPriceMin(e.detail.value)} />
            </View>

            <View className="form-item">
              <Text className="form-label">最高价格（元/时）</Text>
              <Input className="form-input" type="number" placeholder="选填" value={priceMax} onInput={(e) => setPriceMax(e.detail.value)} />
            </View>

            <View className="form-item">
              <Text className="form-label">中羽平台账号</Text>
              <Text className="form-hint">非必填</Text>
              <Input className="form-input" placeholder="中羽平台账号（选填）" value={zhongyuCertId} onInput={(e) => setZhongyuCertId(e.detail.value)} />
            </View>
          </>
        )}

        {/* 学员专属 */}
        {isStudent && (
          <>
            <View className="section-title"><Text>学员资料</Text></View>

            <View className="form-item">
              <Text className="form-label">个人介绍</Text>
              <Text className="form-hint">简要介绍你的练球情况（100字以内）</Text>
              <Textarea className="form-textarea" placeholder="例：打羽毛球2年，想找陪练提高技术" value={bio} onInput={(e) => setBio(e.detail.value)} maxlength={100} />
              <Text className="char-count">{bio.length}/100</Text>
            </View>

            <View className="form-item">
              <Text className="form-label">自身等级</Text>
              <Picker mode="selector" range={LEVELS.map((l) => l.label)} value={level} onChange={(e) => setLevel(Number(e.detail.value))}>
                <View className="picker-value"><Text>{LEVELS[level]?.label}</Text></View>
              </Picker>
            </View>

            <View className="form-item">
              <Text className="form-label">球龄（年）</Text>
              <Input className="form-input" type="number" placeholder="如：2" value={yearsPlayed} onInput={(e) => setYearsPlayed(e.detail.value)} />
            </View>

            <View className="form-item">
              <Text className="form-label">练球目标</Text>
              <View className="tag-list">
                {GOAL_OPTIONS.map((g) => (
                  <View
                    key={g}
                    className={`tag-item ${goalTags.includes(g) ? "active" : ""}`}
                    onClick={() => toggleArrayItem(goalTags, setGoalTags, g)}
                  >
                    <Text>{g}</Text>
                  </View>
                ))}
              </View>
            </View>
          </>
        )}
      </View>

      <View className="submit-area">
        <Button className="submit-btn" onClick={handleSave} loading={saving} disabled={saving}>
          保存
        </Button>
      </View>
    </View>
  );
}