"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/profile-edit/profile-edit"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/profile-edit/profile-edit!./src/pages/profile-edit/profile-edit.tsx":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/profile-edit/profile-edit!./src/pages/profile-edit/profile-edit.tsx ***!
  \********************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ProfileEdit; }
/* harmony export */ });
/* harmony import */ var E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js */ "./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js");
/* harmony import */ var E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regenerator.js */ "./node_modules/@babel/runtime/helpers/esm/regenerator.js");
/* harmony import */ var E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth */ "./src/services/auth.ts");
/* harmony import */ var _services_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/request */ "./src/services/request.ts");
/* harmony import */ var _stores_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../stores/user */ "./src/stores/user.ts");
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Loading */ "./src/components/Loading.tsx");
/* harmony import */ var _config_site__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../config/site */ "./src/config/site.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
















/** 等级选项：0-7 级，标签格式 "0 级（零基础/未评级）" */

var LEVEL_OPTIONS = _config_site__WEBPACK_IMPORTED_MODULE_6__.BADMINTON_LEVELS.map(function (l) {
  return {
    value: l.value,
    label: "".concat(l.label, "\uFF08").concat(l.desc, "\uFF09")
  };
});

/** 等级选择器下方说明 */
var LEVEL_HINT = "中羽评级参考：0 级=零基础，3 级起对应中羽认证体系，7 级=专业级";
var QUALIFICATION_OPTIONS = ["社会体育指导员", "羽毛球教练证", "运动员等级证", "裁判证", "体育院校毕业", "省队退役", "国家队退役", "其他认证"];
function ProfileEdit() {
  var _LEVEL_OPTIONS$studen, _LEVEL_OPTIONS$studen2, _LEVEL_OPTIONS$coachL, _LEVEL_OPTIONS$coachL2;
  var router = (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  var _useUserStore = (0,_stores_user__WEBPACK_IMPORTED_MODULE_4__.useUserStore)(),
    user = _useUserStore.user,
    updateUser = _useUserStore.updateUser;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(router.params.tab === "coach" ? "coach" : "student"),
    _useState2 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState, 2),
    activeTab = _useState2[0],
    setActiveTab = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState4 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState3, 2),
    profile = _useState4[0],
    setProfile = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState6 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState5, 2),
    loading = _useState6[0],
    setLoading = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState8 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState7, 2),
    saving = _useState8[0],
    setSaving = _useState8[1];

  // 共享字段
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState0 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState9, 2),
    name = _useState0[0],
    setName = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState10 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState1, 2),
    phone = _useState10[0],
    setPhone = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState12 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState11, 2),
    avatarVirtual = _useState12[0],
    setAvatarVirtual = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState14 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState13, 2),
    avatarReal = _useState14[0],
    setAvatarReal = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState16 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState15, 2),
    uploadingVirtual = _useState16[0],
    setUploadingVirtual = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState18 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState17, 2),
    uploadingReal = _useState18[0],
    setUploadingReal = _useState18[1];

  // 账号维度真实姓名/身份证号（学员/陪练员共享，第一次写入后锁定）
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState20 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState19, 2),
    realName = _useState20[0],
    setRealName = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState22 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState21, 2),
    idNumber = _useState22[0],
    setIdNumber = _useState22[1];
  // 是否锁定：账号已登记后，编辑第二身份时只读
  var identityLocked = !!(profile !== null && profile !== void 0 && profile.realName);
  // 平台昵称同样账号维度统一，第一次写入后锁定
  var nameLocked = !!(profile !== null && profile !== void 0 && profile.name);

  // 学员档案字段
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState24 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState23, 2),
    studentBio = _useState24[0],
    setStudentBio = _useState24[1];
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState26 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState25, 2),
    studentLevel = _useState26[0],
    setStudentLevel = _useState26[1];
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState28 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState27, 2),
    studentYearsPlayed = _useState28[0],
    setStudentYearsPlayed = _useState28[1];
  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState30 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState29, 2),
    goalTags = _useState30[0],
    setGoalTags = _useState30[1];

  // 陪练档案字段
  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState32 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState31, 2),
    coachBio = _useState32[0],
    setCoachBio = _useState32[1];
  var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState34 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState33, 2),
    coachTeachingInfo = _useState34[0],
    setCoachTeachingInfo = _useState34[1];
  var _useState35 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState36 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState35, 2),
    coachLevel = _useState36[0],
    setCoachLevel = _useState36[1];
  var _useState37 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState38 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState37, 2),
    coachYearsPlayed = _useState38[0],
    setCoachYearsPlayed = _useState38[1];
  var _useState39 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState40 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState39, 2),
    coachCity = _useState40[0],
    setCoachCity = _useState40[1];
  var _useState41 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState42 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState41, 2),
    qualifications = _useState42[0],
    setQualifications = _useState42[1];
  var _useState43 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState44 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState43, 2),
    coachPriceMin = _useState44[0],
    setCoachPriceMin = _useState44[1];
  var _useState45 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState46 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState45, 2),
    coachPriceMax = _useState46[0],
    setCoachPriceMax = _useState46[1];
  var _useState47 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState48 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState47, 2),
    zhongyuCertId = _useState48[0],
    setZhongyuCertId = _useState48[1];
  var _useState49 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState50 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState49, 2),
    specialtyTags = _useState50[0],
    setSpecialtyTags = _useState50[1];
  // 能力认证（陪练员）
  var _useState51 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState52 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState51, 2),
    otherQualification = _useState52[0],
    setOtherQualification = _useState52[1];
  var _useState53 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState54 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState53, 2),
    certificatePhotos = _useState54[0],
    setCertificatePhotos = _useState54[1];
  var _useState55 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState56 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState55, 2),
    uploadingCertificate = _useState56[0],
    setUploadingCertificate = _useState56[1];

  // 各自错误提示
  var _useState57 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState58 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState57, 2),
    studentErrors = _useState58[0],
    setStudentErrors = _useState58[1];
  var _useState59 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState60 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState59, 2),
    coachErrors = _useState60[0],
    setCoachErrors = _useState60[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetchProfile();
  }, []);
  var fetchProfile = /*#__PURE__*/function () {
    var _ref = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__["default"])(/*#__PURE__*/(0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_10__["default"])().m(function _callee() {
      var res, _u$studentProfile, _u$coachProfile, _u$studentProfile2, _u$coachProfile2, u, _sp$level, sp, _cp$level, cp, _t;
      return (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_10__["default"])().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            setLoading(true);
            _context.p = 1;
            _context.n = 2;
            return _services_auth__WEBPACK_IMPORTED_MODULE_2__.authService.getProfile();
          case 2:
            res = _context.v;
            if (res.ok && res.user) {
              u = res.user;
              setProfile(u);
              setName(u.name || "");
              setPhone(u.phone || "");
              setAvatarVirtual(u.avatarVirtual || "");
              setAvatarReal(u.avatarReal || "");

              // 账号维度真实姓名/身份证号（学员/陪练员共享）
              setRealName(u.realName || ((_u$studentProfile = u.studentProfile) === null || _u$studentProfile === void 0 ? void 0 : _u$studentProfile.realName) || ((_u$coachProfile = u.coachProfile) === null || _u$coachProfile === void 0 ? void 0 : _u$coachProfile.realName) || "");
              setIdNumber(u.idNumber || ((_u$studentProfile2 = u.studentProfile) === null || _u$studentProfile2 === void 0 ? void 0 : _u$studentProfile2.idNumber) || ((_u$coachProfile2 = u.coachProfile) === null || _u$coachProfile2 === void 0 ? void 0 : _u$coachProfile2.idNumber) || "");
              if (u.studentProfile) {
                sp = u.studentProfile;
                setStudentBio(sp.bio || "");
                setStudentLevel((_sp$level = sp.level) !== null && _sp$level !== void 0 ? _sp$level : 0);
                setStudentYearsPlayed(sp.yearsPlayed != null ? String(sp.yearsPlayed) : "");
                setGoalTags(sp.goalTags || []);
              }
              if (u.coachProfile) {
                cp = u.coachProfile;
                setCoachBio(cp.bio || "");
                setCoachTeachingInfo(cp.teachingInfo || "");
                setCoachLevel((_cp$level = cp.level) !== null && _cp$level !== void 0 ? _cp$level : 0);
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
            _context.n = 4;
            break;
          case 3:
            _context.p = 3;
            _t = _context.v;
            console.error("获取资料失败:", _t);
          case 4:
            _context.p = 4;
            setLoading(false);
            return _context.f(4);
          case 5:
            return _context.a(2);
        }
      }, _callee, null, [[1, 3, 4, 5]]);
    }));
    return function fetchProfile() {
      return _ref.apply(this, arguments);
    };
  }();
  var handleUploadAvatar = /*#__PURE__*/function () {
    var _ref2 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__["default"])(/*#__PURE__*/(0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_10__["default"])().m(function _callee2(type) {
      var chooseRes, uploadRes, data, fullUrl, _t2;
      return (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_10__["default"])().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            if (type === "virtual") setUploadingVirtual(true);else setUploadingReal(true);
            _context2.p = 1;
            _context2.n = 2;
            return _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().chooseImage({
              count: 1,
              sizeType: ["compressed"],
              sourceType: ["album", "camera"]
            });
          case 2:
            chooseRes = _context2.v;
            _context2.n = 3;
            return _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().uploadFile({
              url: "".concat(_services_request__WEBPACK_IMPORTED_MODULE_3__.BASE_URL, "/upload/avatar"),
              filePath: chooseRes.tempFilePaths[0],
              name: "file",
              header: {
                Authorization: "Bearer ".concat(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().getStorageSync("auth_token"))
              }
            });
          case 3:
            uploadRes = _context2.v;
            data = JSON.parse(uploadRes.data);
            if (!(data.ok && data.url)) {
              _context2.n = 4;
              break;
            }
            fullUrl = data.url.startsWith("http") ? data.url : "".concat(_services_request__WEBPACK_IMPORTED_MODULE_3__.BASE_URL.replace("/api", "")).concat(data.url);
            if (type === "virtual") setAvatarVirtual(fullUrl);else setAvatarReal(fullUrl);
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: "上传成功",
              icon: "success"
            });
            _context2.n = 5;
            break;
          case 4:
            throw new Error("上传失败");
          case 5:
            _context2.n = 7;
            break;
          case 6:
            _context2.p = 6;
            _t2 = _context2.v;
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: (_t2 === null || _t2 === void 0 ? void 0 : _t2.message) || "上传失败",
              icon: "none"
            });
          case 7:
            _context2.p = 7;
            setUploadingVirtual(false);
            setUploadingReal(false);
            return _context2.f(7);
          case 8:
            return _context2.a(2);
        }
      }, _callee2, null, [[1, 6, 7, 8]]);
    }));
    return function handleUploadAvatar(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  // 上传能力证明照片（最多5张）
  var handleUploadCertificate = /*#__PURE__*/function () {
    var _ref3 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__["default"])(/*#__PURE__*/(0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_10__["default"])().m(function _callee3() {
      var remain, chooseRes, token, uploaded, _iterator, _step, filePath, uploadRes, data, fullUrl, _t3, _t4;
      return (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_10__["default"])().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            if (!(certificatePhotos.length >= 5)) {
              _context3.n = 1;
              break;
            }
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: "最多上传5张",
              icon: "none"
            });
            return _context3.a(2);
          case 1:
            setUploadingCertificate(true);
            _context3.p = 2;
            remain = 5 - certificatePhotos.length;
            _context3.n = 3;
            return _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().chooseImage({
              count: remain,
              sizeType: ["compressed"],
              sourceType: ["album", "camera"]
            });
          case 3:
            chooseRes = _context3.v;
            token = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().getStorageSync("auth_token");
            uploaded = [];
            _iterator = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_11__["default"])(chooseRes.tempFilePaths);
            _context3.p = 4;
            _iterator.s();
          case 5:
            if ((_step = _iterator.n()).done) {
              _context3.n = 8;
              break;
            }
            filePath = _step.value;
            _context3.n = 6;
            return _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().uploadFile({
              url: "".concat(_services_request__WEBPACK_IMPORTED_MODULE_3__.BASE_URL, "/upload/certificate"),
              filePath: filePath,
              name: "file",
              header: {
                Authorization: "Bearer ".concat(token)
              }
            });
          case 6:
            uploadRes = _context3.v;
            data = JSON.parse(uploadRes.data);
            if (data.ok && data.url) {
              fullUrl = data.url.startsWith("http") ? data.url : "".concat(_services_request__WEBPACK_IMPORTED_MODULE_3__.BASE_URL.replace("/api", "")).concat(data.url);
              uploaded.push(fullUrl);
            }
          case 7:
            _context3.n = 5;
            break;
          case 8:
            _context3.n = 10;
            break;
          case 9:
            _context3.p = 9;
            _t3 = _context3.v;
            _iterator.e(_t3);
          case 10:
            _context3.p = 10;
            _iterator.f();
            return _context3.f(10);
          case 11:
            if (uploaded.length > 0) {
              setCertificatePhotos([].concat((0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_12__["default"])(certificatePhotos), uploaded));
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
                title: "上传成功",
                icon: "success"
              });
            }
            _context3.n = 13;
            break;
          case 12:
            _context3.p = 12;
            _t4 = _context3.v;
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: (_t4 === null || _t4 === void 0 ? void 0 : _t4.message) || "上传失败",
              icon: "none"
            });
          case 13:
            _context3.p = 13;
            setUploadingCertificate(false);
            return _context3.f(13);
          case 14:
            return _context3.a(2);
        }
      }, _callee3, null, [[4, 9, 10, 11], [2, 12, 13, 14]]);
    }));
    return function handleUploadCertificate() {
      return _ref3.apply(this, arguments);
    };
  }();

  // 学员完整度
  var studentComplete = function () {
    var studentAvatarVerified = (profile === null || profile === void 0 ? void 0 : profile.studentAvatarStatus) === "verified";
    var checks = [{
      key: "avatarVirtual",
      label: "虚拟头像",
      done: !!avatarVirtual
    }, {
      key: "avatarReal",
      label: "真人头像",
      done: !!avatarReal && studentAvatarVerified
    }, {
      key: "name",
      label: "平台昵称",
      done: !!name.trim()
    }, {
      key: "phone",
      label: "手机号",
      done: !!phone.trim() && /^1[3-9]\d{9}$/.test(phone)
    }, {
      key: "realName",
      label: "真实姓名",
      done: !!realName.trim()
    }, {
      key: "idNumber",
      label: "身份证号",
      done: !!idNumber.trim()
    }, {
      key: "studentLevel",
      label: "自评等级",
      done: studentLevel > 0
    }];
    var done = checks.filter(function (c) {
      return c.done;
    }).length;
    return {
      done: done,
      total: checks.length,
      allDone: done === checks.length,
      checks: checks
    };
  }();

  // 陪练完整度
  var coachComplete = function () {
    var coachAvatarVerified = (profile === null || profile === void 0 ? void 0 : profile.coachAvatarStatus) === "verified";
    var checks = [{
      key: "avatarVirtual",
      label: "虚拟头像",
      done: !!avatarVirtual
    }, {
      key: "avatarReal",
      label: "真人头像",
      done: !!avatarReal && coachAvatarVerified
    }, {
      key: "name",
      label: "平台昵称",
      done: !!name.trim()
    }, {
      key: "phone",
      label: "手机号",
      done: !!phone.trim() && /^1[3-9]\d{9}$/.test(phone)
    }, {
      key: "realName",
      label: "真实姓名",
      done: !!realName.trim()
    }, {
      key: "coachBio",
      label: "个人介绍",
      done: !!coachBio.trim()
    }, {
      key: "coachTeachingInfo",
      label: "授课信息",
      done: !!coachTeachingInfo.trim()
    }, {
      key: "coachCity",
      label: "所在城市",
      done: !!coachCity.trim()
    }, {
      key: "coachLevel",
      label: "自评等级",
      done: coachLevel > 0
    }];
    var done = checks.filter(function (c) {
      return c.done;
    }).length;
    return {
      done: done,
      total: checks.length,
      allDone: done === checks.length,
      checks: checks
    };
  }();
  var toggleArrayItem = function toggleArrayItem(arr, setter, item) {
    if (arr.includes(item)) setter(arr.filter(function (a) {
      return a !== item;
    }));else setter([].concat((0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_12__["default"])(arr), [item]));
  };
  var clearError = function clearError(tab, key) {
    var setter = tab === "student" ? setStudentErrors : setCoachErrors;
    setter(function (prev) {
      var n = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_13__["default"])({}, prev);
      delete n[key];
      return n;
    });
  };

  // 保存学员档案
  var handleSaveStudent = /*#__PURE__*/function () {
    var _ref4 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__["default"])(/*#__PURE__*/(0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_10__["default"])().m(function _callee4() {
      var errors, body, res, _t5;
      return (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_10__["default"])().w(function (_context4) {
        while (1) switch (_context4.p = _context4.n) {
          case 0:
            errors = {};
            if (!name.trim()) errors.name = "请输入平台昵称";
            if (!avatarVirtual) errors.avatarVirtual = "请上传虚拟头像";
            if (!avatarReal) errors.avatarReal = "请上传真人头像";
            if (!phone.trim()) errors.phone = "请输入手机号";else if (!/^1[3-9]\d{9}$/.test(phone)) errors.phone = "手机号格式不正确";
            if (!realName.trim()) errors.realName = "请输入真实姓名";
            if (!idNumber.trim()) errors.idNumber = "请输入身份证号";
            if (studentBio.length > 100) errors.studentBio = "个人介绍不能超过100字";
            if (!(Object.keys(errors).length > 0)) {
              _context4.n = 1;
              break;
            }
            setStudentErrors(errors);
            return _context4.a(2);
          case 1:
            setStudentErrors({});
            setSaving(true);
            _context4.p = 2;
            body = {
              name: name.trim(),
              phone: phone.trim(),
              avatarVirtual: avatarVirtual,
              avatarReal: avatarReal,
              currentRole: "student",
              studentProfile: {
                realName: realName.trim(),
                idNumber: idNumber.trim(),
                bio: studentBio.trim() || null,
                level: studentLevel,
                yearsPlayed: studentYearsPlayed ? parseInt(studentYearsPlayed) : null,
                goalTags: goalTags
              }
            };
            _context4.n = 3;
            return _services_auth__WEBPACK_IMPORTED_MODULE_2__.authService.updateProfile(body);
          case 3:
            res = _context4.v;
            if (res.ok) {
              updateUser({
                nickname: name.trim()
              });
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
                title: "保存成功",
                icon: "success"
              });
            }
            _context4.n = 5;
            break;
          case 4:
            _context4.p = 4;
            _t5 = _context4.v;
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: (_t5 === null || _t5 === void 0 ? void 0 : _t5.message) || "保存失败",
              icon: "none"
            });
          case 5:
            _context4.p = 5;
            setSaving(false);
            return _context4.f(5);
          case 6:
            return _context4.a(2);
        }
      }, _callee4, null, [[2, 4, 5, 6]]);
    }));
    return function handleSaveStudent() {
      return _ref4.apply(this, arguments);
    };
  }();

  // 保存陪练档案
  var handleSaveCoach = /*#__PURE__*/function () {
    var _ref5 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__["default"])(/*#__PURE__*/(0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_10__["default"])().m(function _callee5() {
      var errors, body, res, _t6;
      return (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_10__["default"])().w(function (_context5) {
        while (1) switch (_context5.p = _context5.n) {
          case 0:
            errors = {};
            if (!name.trim()) errors.name = "请输入平台昵称";
            if (!avatarVirtual) errors.avatarVirtual = "请上传虚拟头像";
            if (!avatarReal) errors.avatarReal = "请上传真人头像";
            if (!phone.trim()) errors.phone = "请输入手机号";else if (!/^1[3-9]\d{9}$/.test(phone)) errors.phone = "手机号格式不正确";
            if (!realName.trim()) errors.realName = "请输入真实姓名";
            if (!coachBio.trim()) errors.coachBio = "请填写个人介绍";
            if (!coachTeachingInfo.trim()) errors.coachTeachingInfo = "请填写授课信息";
            if (!coachCity.trim()) errors.coachCity = "请选择所在城市";
            if (coachBio.length > 100) errors.coachBio = "个人介绍不能超过100字";
            if (coachTeachingInfo.length > 100) errors.coachTeachingInfo = "授课信息不能超过100字";
            if (!(Object.keys(errors).length > 0)) {
              _context5.n = 1;
              break;
            }
            setCoachErrors(errors);
            return _context5.a(2);
          case 1:
            setCoachErrors({});
            setSaving(true);
            _context5.p = 2;
            body = {
              name: name.trim(),
              phone: phone.trim(),
              avatarVirtual: avatarVirtual,
              avatarReal: avatarReal,
              currentRole: "coach",
              coachProfile: {
                realName: realName.trim(),
                bio: coachBio.trim() || null,
                teachingInfo: coachTeachingInfo.trim() || null,
                level: coachLevel,
                yearsPlayed: coachYearsPlayed ? parseInt(coachYearsPlayed) : null,
                city: coachCity.trim(),
                qualifications: qualifications,
                priceMin: coachPriceMin ? parseInt(coachPriceMin) : null,
                priceMax: coachPriceMax ? parseInt(coachPriceMax) : null,
                zhongyuCertId: zhongyuCertId.trim() || null,
                specialtyTags: specialtyTags,
                otherQualification: otherQualification.trim() || null,
                certificatePhotos: certificatePhotos
              }
            };
            _context5.n = 3;
            return _services_auth__WEBPACK_IMPORTED_MODULE_2__.authService.updateProfile(body);
          case 3:
            res = _context5.v;
            if (res.ok) {
              updateUser({
                nickname: name.trim()
              });
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
                title: "保存成功",
                icon: "success"
              });
            }
            _context5.n = 5;
            break;
          case 4:
            _context5.p = 4;
            _t6 = _context5.v;
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: (_t6 === null || _t6 === void 0 ? void 0 : _t6.message) || "保存失败",
              icon: "none"
            });
          case 5:
            _context5.p = 5;
            setSaving(false);
            return _context5.f(5);
          case 6:
            return _context5.a(2);
        }
      }, _callee5, null, [[2, 4, 5, 6]]);
    }));
    return function handleSaveCoach() {
      return _ref5.apply(this, arguments);
    };
  }();

  // 跳转城市选择页（通过 eventChannel 接收选中的城市，Taro 函数组件下比 prevPage.fn 更可靠）
  var goToCityPicker = function goToCityPicker() {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
      url: "/pages/city-picker/city-picker",
      events: {
        onCitySelected: function onCitySelected(city) {
          setCoachCity(city);
          clearError("coach", "coachCity");
        }
      }
    });
  };
  if (loading) return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
    className: "page-profile-edit",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_5__["default"], {})
  });
  if (!user) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
      className: "page-profile-edit",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
        className: "empty",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
          children: "\u8BF7\u5148\u767B\u5F55"
        })
      })
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
    className: "page-profile-edit",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
      className: "profile-tab-bar",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
        className: "profile-tab-item ".concat(activeTab === "student" ? "active" : ""),
        onClick: function onClick() {
          return setActiveTab("student");
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
          children: "\u5B66\u5458\u6863\u6848"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
        className: "profile-tab-item ".concat(activeTab === "coach" ? "active" : ""),
        onClick: function onClick() {
          return setActiveTab("coach");
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
          children: "\u966A\u7EC3\u5458\u6863\u6848"
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.ScrollView, {
      scrollY: true,
      className: "form-scroll",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
        className: "form-card",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
          className: "completeness-banner ".concat((activeTab === "student" ? studentComplete : coachComplete).allDone ? "all-done" : ""),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
            className: "completeness-text",
            children: (activeTab === "student" ? studentComplete : coachComplete).allDone ? "\u2713 ".concat(activeTab === "student" ? "学员" : "陪练员", "\u6863\u6848\u5DF2\u5B8C\u6210\uFF08").concat((activeTab === "student" ? studentComplete : coachComplete).done, "/").concat((activeTab === "student" ? studentComplete : coachComplete).total, "\uFF09\uFF0C\u53EF\u53D1\u5E03").concat(activeTab === "student" ? "需求" : "档期") : "\u6807\u661F\u9879\u5168\u90E8\u5B8C\u6210\u540E\u5373\u53EF\u53D1\u5E03".concat(activeTab === "student" ? "需求" : "档期", "\uFF08").concat((activeTab === "student" ? studentComplete : coachComplete).done, "/").concat((activeTab === "student" ? studentComplete : coachComplete).total, "\uFF09")
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
          className: "avatar-section",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
            className: "avatar-item",
            onClick: function onClick() {
              return handleUploadAvatar("virtual");
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
              className: "avatar-label-row",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
                className: "avatar-label",
                children: "\u865A\u62DF\u5934\u50CF *"
              }), uploadingVirtual && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
                className: "uploading-text",
                children: "\u4E0A\u4F20\u4E2D..."
              })]
            }), avatarVirtual ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Image, {
              src: avatarVirtual,
              className: "avatar-preview",
              mode: "aspectFill"
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
              className: "avatar-preview avatar-placeholder",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
                children: "\u70B9\u51FB\u4E0A\u4F20"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
              className: "avatar-hint",
              children: "\u516C\u5F00\u663E\u793A"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
            className: "avatar-item",
            onClick: function onClick() {
              return handleUploadAvatar("real");
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
              className: "avatar-label-row",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
                className: "avatar-label",
                children: "\u771F\u4EBA\u5934\u50CF *"
              }), uploadingReal && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
                className: "uploading-text",
                children: "\u4E0A\u4F20\u4E2D..."
              })]
            }), avatarReal ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Image, {
              src: avatarReal,
              className: "avatar-preview",
              mode: "aspectFill"
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
              className: "avatar-preview avatar-placeholder",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
                children: "\u70B9\u51FB\u4E0A\u4F20"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
              className: "avatar-hint",
              children: "\u8BF7\u4E0A\u4F20\u542B\u672C\u4EBA\u6B63\u9762\u4EBA\u8138\u6216\u5168\u8EAB\u7167\uFF0C\u5BA1\u6838\u901A\u8FC7\u540E\u7528\u4E8E\u8BA2\u5355\u5185\u5C55\u793A\uFF0C\u4E0D\u516C\u5F00\u5230\u5927\u5385"
            }), function () {
              var avatarStatus = activeTab === "student" ? profile === null || profile === void 0 ? void 0 : profile.studentAvatarStatus : profile === null || profile === void 0 ? void 0 : profile.coachAvatarStatus;
              var rejectReason = activeTab === "student" ? profile === null || profile === void 0 ? void 0 : profile.studentAvatarRejectReason : profile === null || profile === void 0 ? void 0 : profile.coachAvatarRejectReason;
              if (!avatarStatus) return null;
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
                  className: "verify-status status-".concat(avatarStatus),
                  children: avatarStatus === "verified" ? "已审核" : avatarStatus === "pending" ? "审核中" : "未通过"
                }), avatarStatus === "rejected" && rejectReason && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
                  className: "reject-reason",
                  children: ["\u62D2\u7EDD\u539F\u56E0\uFF1A", rejectReason]
                })]
              });
            }()]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
          className: "section-title",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
            children: "\u57FA\u672C\u4FE1\u606F"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
          className: "form-item",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
            className: "form-label",
            children: "\u5E73\u53F0\u6635\u79F0 *"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
            className: "form-hint",
            children: nameLocked ? "账号已登记，不可更改" : "公开显示"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Input, {
            className: "form-input ".concat(nameLocked ? "readonly" : ""),
            placeholder: "\u8BF7\u8F93\u5165\u5E73\u53F0\u6635\u79F0",
            value: name,
            disabled: nameLocked,
            onInput: function onInput(e) {
              setName(e.detail.value);
              clearError(activeTab, "name");
            }
          }), (activeTab === "student" ? studentErrors : coachErrors).name && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
            className: "field-error",
            children: (activeTab === "student" ? studentErrors : coachErrors).name
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
          className: "form-item",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
            className: "form-label",
            children: "\u624B\u673A\u53F7 *"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
            className: "form-hint",
            children: "\u53CC\u65B9\u540C\u610F\u540E\u4E92\u770B\uFF0C\u4E0D\u516C\u5F00"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Input, {
            className: "form-input",
            type: "number",
            placeholder: "\u8BF7\u8F93\u516511\u4F4D\u624B\u673A\u53F7",
            maxlength: 11,
            value: phone,
            onInput: function onInput(e) {
              setPhone(e.detail.value);
              clearError(activeTab, "phone");
            }
          }), (activeTab === "student" ? studentErrors : coachErrors).phone && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
            className: "field-error",
            children: (activeTab === "student" ? studentErrors : coachErrors).phone
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
          className: "form-item",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
            className: "form-label",
            children: "\u6CE8\u518C\u90AE\u7BB1"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Input, {
            className: "form-input readonly",
            value: (profile === null || profile === void 0 ? void 0 : profile.email) || "",
            disabled: true
          })]
        })]
      }), activeTab === "student" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
        className: "form-card",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
          className: "section-title",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
            children: "\u5B66\u5458\u6863\u6848"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
          className: "form-item",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
            className: "form-label",
            children: "\u771F\u5B9E\u59D3\u540D *"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
            className: "form-hint",
            children: identityLocked ? "账号已登记，不可修改" : "不公开显示"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Input, {
            className: "form-input ".concat(identityLocked ? "readonly" : ""),
            placeholder: "\u8BF7\u8F93\u5165\u771F\u5B9E\u59D3\u540D",
            value: realName,
            disabled: identityLocked,
            onInput: function onInput(e) {
              setRealName(e.detail.value);
              clearError("student", "realName");
            }
          }), studentErrors.realName && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
            className: "field-error",
            children: studentErrors.realName
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
          className: "form-item",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
            className: "form-label",
            children: "\u8EAB\u4EFD\u8BC1\u53F7 *"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
            className: "form-hint",
            children: identityLocked ? "账号已登记，不可修改" : "不公开显示"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Input, {
            className: "form-input ".concat(identityLocked ? "readonly" : ""),
            placeholder: "\u8BF7\u8F93\u5165\u8EAB\u4EFD\u8BC1\u53F7",
            value: idNumber,
            disabled: identityLocked,
            onInput: function onInput(e) {
              setIdNumber(e.detail.value);
              clearError("student", "idNumber");
            }
          }), studentErrors.idNumber && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
            className: "field-error",
            children: studentErrors.idNumber
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
          className: "form-item",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
            className: "form-label",
            children: "\u4E2A\u4EBA\u4ECB\u7ECD"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
            className: "form-hint",
            children: "100 \u5B57\u5185"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Textarea, {
            className: "form-textarea",
            placeholder: "\u4F8B\uFF1A\u6253\u7FBD\u6BDB\u74032\u5E74\uFF0C\u60F3\u627E\u966A\u7EC3\u63D0\u9AD8\u6280\u672F",
            value: studentBio,
            onInput: function onInput(e) {
              setStudentBio(e.detail.value);
              clearError("student", "studentBio");
            },
            maxlength: 100
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
            className: "char-count",
            children: [studentBio.length, "/100"]
          }), studentErrors.studentBio && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
            className: "field-error",
            children: studentErrors.studentBio
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
          className: "form-item",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
            className: "form-label",
            children: "\u81EA\u8BC4\u7B49\u7EA7 *"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Picker, {
            mode: "selector",
            range: LEVEL_OPTIONS.map(function (l) {
              return l.label;
            }),
            value: studentLevel,
            onChange: function onChange(e) {
              return setStudentLevel(Number(e.detail.value));
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
              className: "picker-value",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
                children: (_LEVEL_OPTIONS$studen = (_LEVEL_OPTIONS$studen2 = LEVEL_OPTIONS[studentLevel]) === null || _LEVEL_OPTIONS$studen2 === void 0 ? void 0 : _LEVEL_OPTIONS$studen2.label) !== null && _LEVEL_OPTIONS$studen !== void 0 ? _LEVEL_OPTIONS$studen : "请选择"
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
            className: "level-hint",
            children: LEVEL_HINT
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
          className: "form-item",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
            className: "form-label",
            children: "\u7403\u9F84\uFF08\u5E74\uFF09"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Input, {
            className: "form-input",
            type: "number",
            placeholder: "\u5982\uFF1A2",
            value: studentYearsPlayed,
            onInput: function onInput(e) {
              return setStudentYearsPlayed(e.detail.value);
            }
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
          className: "form-item",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
            className: "form-label",
            children: "\u5B66\u4E60\u76EE\u6807"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
            className: "form-hint",
            children: "\u53EF\u591A\u9009\uFF0C\u5E2E\u52A9\u966A\u7EC3\u4E86\u89E3\u4F60\u7684\u7EC3\u7403\u65B9\u5411"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
            className: "tag-list",
            children: _config_site__WEBPACK_IMPORTED_MODULE_6__.STUDENT_GOAL_TAGS.map(function (t) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
                className: "tag-item ".concat(goalTags.includes(t.slug) ? "active" : ""),
                onClick: function onClick() {
                  return toggleArrayItem(goalTags, setGoalTags, t.slug);
                },
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
                  children: t.label
                })
              }, t.slug);
            })
          })]
        })]
      }), activeTab === "coach" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
        className: "form-card",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
          className: "section-title",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
            children: "\u80FD\u529B\u8BA4\u8BC1"
          })
        }), qualifications.includes("其他认证") && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
          className: "form-item",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
            className: "form-label",
            children: "\u5176\u4ED6\u8BA4\u8BC1"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
            className: "form-hint",
            children: "\u8BF7\u586B\u5199\u8BA4\u8BC1\u540D\u79F0\uFF0C\u5982\u9700\u5C55\u793A\u591A\u9879\u8BF7\u7528\u987F\u53F7\u5206\u9694"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Input, {
            className: "form-input",
            placeholder: "\u5982\uFF1A\u56FD\u5BB6\u4E8C\u7EA7\u8FD0\u52A8\u5458\u3001XX\u8D5B\u4E8B\u51A0\u519B\u7B49",
            value: otherQualification,
            onInput: function onInput(e) {
              return setOtherQualification(e.detail.value);
            }
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
          className: "form-item",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
            className: "ability-photo-header",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
              className: "form-label",
              children: "\u80FD\u529B\u8BC1\u660E\u7167\u7247"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
              className: "ability-photo-count",
              children: [certificatePhotos.length, "/5"]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
            className: "form-hint",
            children: "\u80FD\u591F\u5145\u5206\u8BC1\u660E\u4F60\u7684\u8BE5\u9879\u8FD0\u52A8\u80FD\u529B\uFF0C\u6BD4\u5982\u6253\u7403\u7167\u7247\u3001\u7403\u9886\u3001\u83B7\u5956\u8BC1\u660E\u6216\u8005\u4E13\u4E1A\u6559\u7EC3\u7684\u6D3B\u52A8\u8BC1\u660E\u7B49\u7B49"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
            className: "ability-photo-grid",
            children: [certificatePhotos.map(function (url, idx) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
                className: "ability-photo-item",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Image, {
                  src: url,
                  className: "ability-photo",
                  mode: "aspectFill"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
                  className: "ability-photo-del",
                  onClick: function onClick() {
                    return setCertificatePhotos(certificatePhotos.filter(function (_, i) {
                      return i !== idx;
                    }));
                  },
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
                    children: "\u2715"
                  })
                })]
              }, idx);
            }), certificatePhotos.length < 5 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
              className: "ability-photo-upload",
              onClick: handleUploadCertificate,
              children: uploadingCertificate ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
                className: "uploading-text",
                children: "\u4E0A\u4F20\u4E2D..."
              }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
                className: "upload-icon",
                children: "+"
              })
            })]
          })]
        })]
      }), activeTab === "coach" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
        className: "form-card",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
          className: "section-title",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
            children: "\u966A\u7EC3\u5458\u6863\u6848"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
          className: "form-item",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
            className: "form-label",
            children: "\u771F\u5B9E\u59D3\u540D *"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
            className: "form-hint",
            children: identityLocked ? "账号已登记，不可修改" : "不公开显示"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Input, {
            className: "form-input ".concat(identityLocked ? "readonly" : ""),
            placeholder: "\u8BF7\u8F93\u5165\u771F\u5B9E\u59D3\u540D",
            value: realName,
            disabled: identityLocked,
            onInput: function onInput(e) {
              setRealName(e.detail.value);
              clearError("coach", "realName");
            }
          }), coachErrors.realName && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
            className: "field-error",
            children: coachErrors.realName
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
          className: "form-item",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
            className: "form-label",
            children: "\u4E2A\u4EBA\u4ECB\u7ECD *"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
            className: "form-hint",
            children: "100 \u5B57\u5185\uFF0C\u4ECB\u7ECD\u6253\u7403\u7279\u957F\u3001\u6559\u5B66\u7ECF\u9A8C\u7B49"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Textarea, {
            className: "form-textarea",
            placeholder: "\u8BF7\u8BE6\u7EC6\u4ECB\u7ECD\u60A8\u7684\u7FBD\u6BDB\u7403\u7279\u957F\u3001\u6559\u5B66\u7ECF\u9A8C\u3001\u83B7\u5956\u7ECF\u5386\u7B49...",
            value: coachBio,
            onInput: function onInput(e) {
              setCoachBio(e.detail.value);
              clearError("coach", "coachBio");
            },
            maxlength: 100
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
            className: "char-count",
            children: [coachBio.length, "/100"]
          }), coachErrors.coachBio && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
            className: "field-error",
            children: coachErrors.coachBio
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
          className: "form-item",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
            className: "form-label",
            children: "\u966A\u7EC3\u6388\u8BFE\u4FE1\u606F *"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
            className: "form-hint",
            children: "100 \u5B57\u5185\uFF0C\u6388\u8BFE\u5BF9\u8C61/\u5730\u70B9/\u6A21\u5F0F/\u65F6\u95F4"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Textarea, {
            className: "form-textarea",
            placeholder: "\u8BF7\u8BF4\u660E\u6388\u8BFE\u5BF9\u8C61\u3001\u5730\u70B9\u5B89\u6392\u3001\u6388\u8BFE\u6A21\u5F0F\u3001\u65F6\u95F4\u5B89\u6392\u7B49...",
            value: coachTeachingInfo,
            onInput: function onInput(e) {
              setCoachTeachingInfo(e.detail.value);
              clearError("coach", "coachTeachingInfo");
            },
            maxlength: 100
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
            className: "char-count",
            children: [coachTeachingInfo.length, "/100"]
          }), coachErrors.coachTeachingInfo && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
            className: "field-error",
            children: coachErrors.coachTeachingInfo
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
          className: "form-item",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
            className: "form-label",
            children: "\u81EA\u8BC4\u7B49\u7EA7 *"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Picker, {
            mode: "selector",
            range: LEVEL_OPTIONS.map(function (l) {
              return l.label;
            }),
            value: coachLevel,
            onChange: function onChange(e) {
              return setCoachLevel(Number(e.detail.value));
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
              className: "picker-value",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
                children: (_LEVEL_OPTIONS$coachL = (_LEVEL_OPTIONS$coachL2 = LEVEL_OPTIONS[coachLevel]) === null || _LEVEL_OPTIONS$coachL2 === void 0 ? void 0 : _LEVEL_OPTIONS$coachL2.label) !== null && _LEVEL_OPTIONS$coachL !== void 0 ? _LEVEL_OPTIONS$coachL : "请选择"
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
            className: "level-hint",
            children: LEVEL_HINT
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
          className: "form-item",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
            className: "form-label",
            children: "\u7403\u9F84\uFF08\u5E74\uFF09"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Input, {
            className: "form-input",
            type: "number",
            placeholder: "\u5982\uFF1A5",
            value: coachYearsPlayed,
            onInput: function onInput(e) {
              return setCoachYearsPlayed(e.detail.value);
            }
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
          className: "form-item",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
            className: "form-label",
            children: "\u6240\u5728\u57CE\u5E02 *"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
            className: "city-entry ".concat(!coachCity ? "is-empty" : ""),
            onClick: goToCityPicker,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
              className: coachCity ? "city-entry-value" : "city-entry-placeholder",
              children: coachCity || "请选择城市"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
              className: "city-entry-arrow",
              children: "\u203A"
            })]
          }), coachErrors.coachCity && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
            className: "field-error",
            children: coachErrors.coachCity
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
          className: "form-item",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
            className: "form-label",
            children: "\u8D44\u8D28\u8BA4\u8BC1"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
            className: "tag-list",
            children: QUALIFICATION_OPTIONS.map(function (q) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
                className: "tag-item ".concat(qualifications.includes(q) ? "active" : ""),
                onClick: function onClick() {
                  return toggleArrayItem(qualifications, setQualifications, q);
                },
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
                  children: q
                })
              }, q);
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
          className: "form-item",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
            className: "form-label",
            children: "\u64C5\u957F\u65B9\u5411"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
            className: "form-hint",
            children: "\u81F3\u5C11\u9009 2 \u4E2A\uFF0C\u8FBE\u5230\u5B8C\u6574\u5EA6\u6EE1\u5206"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
            className: "tag-list",
            children: _config_site__WEBPACK_IMPORTED_MODULE_6__.SPECIALTY_TAGS.map(function (t) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
                className: "tag-item ".concat(specialtyTags.includes(t.slug) ? "active" : ""),
                onClick: function onClick() {
                  return toggleArrayItem(specialtyTags, setSpecialtyTags, t.slug);
                },
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
                  children: t.label
                })
              }, t.slug);
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
          className: "form-item",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
            className: "form-label",
            children: "\u6700\u4F4E\u4EF7\u683C\uFF08\u5143/\u65F6\uFF09"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Input, {
            className: "form-input",
            type: "number",
            placeholder: "\u9009\u586B",
            value: coachPriceMin,
            onInput: function onInput(e) {
              return setCoachPriceMin(e.detail.value);
            }
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
          className: "form-item",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
            className: "form-label",
            children: "\u6700\u9AD8\u4EF7\u683C\uFF08\u5143/\u65F6\uFF09"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Input, {
            className: "form-input",
            type: "number",
            placeholder: "\u9009\u586B",
            value: coachPriceMax,
            onInput: function onInput(e) {
              return setCoachPriceMax(e.detail.value);
            }
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
          className: "form-item",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
            className: "form-label",
            children: "\u4E2D\u7FBD\u5E73\u53F0\u8D26\u53F7"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
            className: "form-hint",
            children: "\u9009\u586B"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Input, {
            className: "form-input",
            placeholder: "\u4E2D\u7FBD\u5E73\u53F0\u8D26\u53F7",
            value: zhongyuCertId,
            onInput: function onInput(e) {
              return setZhongyuCertId(e.detail.value);
            }
          })]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
      className: "submit-area safe-bottom",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Button, {
        className: "submit-btn",
        loading: saving,
        disabled: saving,
        onClick: activeTab === "student" ? handleSaveStudent : handleSaveCoach,
        children: ["\u4FDD\u5B58", activeTab === "student" ? "学员档案" : "陪练员档案"]
      })
    })]
  });
}

/***/ }),

/***/ "./src/pages/profile-edit/profile-edit.tsx":
/*!*************************************************!*\
  !*** ./src/pages/profile-edit/profile-edit.tsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/dsl/common.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_profile_edit_profile_edit_profile_edit_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/profile-edit/profile-edit!./profile-edit.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/profile-edit/profile-edit!./src/pages/profile-edit/profile-edit.tsx");


var config = {"navigationBarTitleText":"个人资料"};



var taroOption = (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_profile_edit_profile_edit_profile_edit_tsx__WEBPACK_IMPORTED_MODULE_0__["default"], 'pages/profile-edit/profile-edit', {root:{cn:[]}}, config || {})
if (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_profile_edit_profile_edit_profile_edit_tsx__WEBPACK_IMPORTED_MODULE_0__["default"] && _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_profile_edit_profile_edit_profile_edit_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors) {
  taroOption.behaviors = (taroOption.behaviors || []).concat(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_profile_edit_profile_edit_profile_edit_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors)
}
var inst = Page(taroOption)



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_profile_edit_profile_edit_profile_edit_tsx__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/profile-edit/profile-edit.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=profile-edit.js.map