"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/publish/publish"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/publish/publish!./src/pages/publish/publish.tsx":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/publish/publish!./src/pages/publish/publish.tsx ***!
  \************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Publish; }
/* harmony export */ });
/* harmony import */ var E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regenerator.js */ "./node_modules/@babel/runtime/helpers/esm/regenerator.js");
/* harmony import */ var E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_availabilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/availabilities */ "./src/services/availabilities.ts");
/* harmony import */ var _services_demands__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/demands */ "./src/services/demands.ts");
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth */ "./src/services/auth.ts");
/* harmony import */ var _stores_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../stores/user */ "./src/stores/user.ts");
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Loading */ "./src/components/Loading.tsx");
/* harmony import */ var _components_CustomNav_CustomNav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/CustomNav/CustomNav */ "./src/components/CustomNav/CustomNav.tsx");
/* harmony import */ var _config_site__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../config/site */ "./src/config/site.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");















var LEVEL_OPTIONS = _config_site__WEBPACK_IMPORTED_MODULE_8__.BADMINTON_LEVELS.map(function (l) {
  return {
    value: l.value,
    label: "".concat(l.label, "\uFF08").concat(l.desc, "\uFF09")
  };
});
function Publish() {
  var _HOUR_OPTIONS$find, _HOUR_OPTIONS$find2, _LEVEL_OPTIONS$expect, _LEVEL_OPTIONS$expect2, _LEVEL_OPTIONS$studen, _LEVEL_OPTIONS$studen2, _HOUR_OPTIONS$find3, _HOUR_OPTIONS$find4;
  var _useUserStore = (0,_stores_user__WEBPACK_IMPORTED_MODULE_5__.useUserStore)(),
    user = _useUserStore.user;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("student"),
    _useState2 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_useState, 2),
    activeTab = _useState2[0],
    setActiveTab = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState4 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_useState3, 2),
    profile = _useState4[0],
    setProfile = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState6 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_useState5, 2),
    loading = _useState6[0],
    setLoading = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState8 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_useState7, 2),
    submitting = _useState8[0],
    setSubmitting = _useState8[1];

  // 共享字段
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState0 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_useState9, 2),
    playDate = _useState0[0],
    setPlayDate = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(19),
    _useState10 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_useState1, 2),
    startHour = _useState10[0],
    setStartHour = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(21),
    _useState12 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_useState11, 2),
    endHour = _useState12[0],
    setEndHour = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("student"),
    _useState14 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_useState13, 2),
    courtBookedBy = _useState14[0],
    setCourtBookedBy = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState16 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_useState15, 2),
    note = _useState16[0],
    setNote = _useState16[1];

  // 球馆选择（通过 venue-picker 页面选择）
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState18 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_useState17, 2),
    venueName = _useState18[0],
    setVenueName = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState20 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_useState19, 2),
    venueAddress = _useState20[0],
    setVenueAddress = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState22 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_useState21, 2),
    venueLat = _useState22[0],
    setVenueLat = _useState22[1];
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState24 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_useState23, 2),
    venueLng = _useState24[0],
    setVenueLng = _useState24[1];

  // 陪练档期专属
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState26 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_useState25, 2),
    priceMin = _useState26[0],
    setPriceMin = _useState26[1];
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState28 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_useState27, 2),
    priceMax = _useState28[0],
    setPriceMax = _useState28[1];

  // 学员需求专属
  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(3),
    _useState30 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_useState29, 2),
    expectedLevel = _useState30[0],
    setExpectedLevel = _useState30[1];
  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState32 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_useState31, 2),
    studentLevel = _useState32[0],
    setStudentLevel = _useState32[1];
  var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState34 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_useState33, 2),
    budgetMin = _useState34[0],
    setBudgetMin = _useState34[1];
  var _useState35 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState36 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_useState35, 2),
    budgetMax = _useState36[0],
    setBudgetMax = _useState36[1];
  (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__.useDidShow)(function () {
    fetchProfile();
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetchProfile();
  }, []);
  var fetchProfile = /*#__PURE__*/function () {
    var _ref = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__["default"])(/*#__PURE__*/(0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_12__["default"])().m(function _callee() {
      var res, _u$studentProfile, u, sp, cp, sEnabled, cEnabled, _t;
      return (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_12__["default"])().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            if (user) {
              _context.n = 1;
              break;
            }
            setLoading(false);
            return _context.a(2);
          case 1:
            _context.p = 1;
            _context.n = 2;
            return _services_auth__WEBPACK_IMPORTED_MODULE_4__.authService.getProfile();
          case 2:
            res = _context.v;
            if (res.ok && res.user) {
              u = res.user;
              setProfile(u);
              // 默认带入学员等级
              if (((_u$studentProfile = u.studentProfile) === null || _u$studentProfile === void 0 ? void 0 : _u$studentProfile.level) != null) {
                setStudentLevel(u.studentProfile.level);
              }
              // 根据已开通身份设置默认 Tab
              sp = u.studentProfile;
              cp = u.coachProfile;
              sEnabled = !!sp && !!u.avatarVirtual && !!u.avatarReal && !!u.name && !!u.phone && /^1[3-9]\d{9}$/.test(u.phone) && !!sp.realName && !!sp.idNumber && sp.level > 0 && u.studentAvatarStatus === "verified";
              cEnabled = !!cp && !!u.avatarVirtual && !!u.avatarReal && !!u.name && !!u.phone && /^1[3-9]\d{9}$/.test(u.phone) && !!cp.realName && !!cp.bio && !!cp.teachingInfo && !!cp.city && cp.level > 0 && u.coachAvatarStatus === "verified";
              if (sEnabled) {
                setActiveTab("student");
              } else if (cEnabled) {
                setActiveTab("coach");
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

  // 学员身份是否已开通（真人头像需审核通过）
  var studentEnabled = function () {
    var sp = profile === null || profile === void 0 ? void 0 : profile.studentProfile;
    if (!sp) return false;
    return !!(profile !== null && profile !== void 0 && profile.avatarVirtual) && !!(profile !== null && profile !== void 0 && profile.avatarReal) && (profile === null || profile === void 0 ? void 0 : profile.studentAvatarStatus) === "verified" && !!(profile !== null && profile !== void 0 && profile.name) && !!(profile !== null && profile !== void 0 && profile.phone) && /^1[3-9]\d{9}$/.test(profile.phone) && !!sp.realName && !!sp.idNumber && sp.level > 0;
  }();

  // 陪练身份是否已开通（真人头像需审核通过）
  var coachEnabled = function () {
    var cp = profile === null || profile === void 0 ? void 0 : profile.coachProfile;
    if (!cp) return false;
    return !!(profile !== null && profile !== void 0 && profile.avatarVirtual) && !!(profile !== null && profile !== void 0 && profile.avatarReal) && (profile === null || profile === void 0 ? void 0 : profile.coachAvatarStatus) === "verified" && !!(profile !== null && profile !== void 0 && profile.name) && !!(profile !== null && profile !== void 0 && profile.phone) && /^1[3-9]\d{9}$/.test(profile.phone) && !!cp.realName && !!cp.bio && !!cp.teachingInfo && !!cp.city && cp.level > 0;
  }();

  // 两个身份都未注册
  var noneEnabled = !studentEnabled && !coachEnabled;

  // Tab 点击处理：未开通的身份点击时弹窗提示
  var handleTabClick = function handleTabClick(tab) {
    if (tab === "student" && !studentEnabled) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showModal({
        title: "提示",
        content: "请去个人中心完善学员信息",
        showCancel: false,
        confirmText: "确认"
      });
      return;
    }
    if (tab === "coach" && !coachEnabled) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showModal({
        title: "提示",
        content: "请去个人中心完善陪练员信息",
        showCancel: false,
        confirmText: "确认"
      });
      return;
    }
    setActiveTab(tab);
  };

  // 跳转到"我的"页面
  var goToProfile = function goToProfile() {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().switchTab({
      url: "/pages/profile/profile"
    });
  };

  // 跳转到球馆选择页
  var goToVenuePicker = function goToVenuePicker() {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
      url: "/pages/venue-picker/venue-picker"
    });
  };

  // venue-picker 页面回传数据时调用（通过 Taro.getCurrentPages 调用）
  var onVenueSelected = function onVenueSelected(venue) {
    setVenueName(venue.name);
    setVenueAddress(venue.address);
    setVenueLat(venue.latitude || null);
    setVenueLng(venue.longitude || null);
  };

  // 检查重复发布
  var checkDuplicate = /*#__PURE__*/function () {
    var _ref2 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__["default"])(/*#__PURE__*/(0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_12__["default"])().m(function _callee2() {
      var res, dup, _res, _dup, _t2;
      return (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_12__["default"])().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            _context2.p = 0;
            if (!(activeTab === "coach")) {
              _context2.n = 3;
              break;
            }
            _context2.n = 1;
            return _services_availabilities__WEBPACK_IMPORTED_MODULE_2__.availabilitiesService.mine();
          case 1:
            res = _context2.v;
            if (!(res.ok && res.items)) {
              _context2.n = 2;
              break;
            }
            dup = res.items.find(function (a) {
              return a.playDate === playDate && a.startHour === startHour && a.endHour === endHour && a.status === "open";
            });
            if (!dup) {
              _context2.n = 2;
              break;
            }
            return _context2.a(2, true);
          case 2:
            _context2.n = 5;
            break;
          case 3:
            _context2.n = 4;
            return _services_demands__WEBPACK_IMPORTED_MODULE_3__.demandsService.mine();
          case 4:
            _res = _context2.v;
            if (!(_res.ok && _res.items)) {
              _context2.n = 5;
              break;
            }
            _dup = _res.items.find(function (d) {
              return d.playDate === playDate && d.startHour === startHour && d.endHour === endHour && d.status === "open";
            });
            if (!_dup) {
              _context2.n = 5;
              break;
            }
            return _context2.a(2, true);
          case 5:
            _context2.n = 7;
            break;
          case 6:
            _context2.p = 6;
            _t2 = _context2.v;
          case 7:
            return _context2.a(2, false);
        }
      }, _callee2, null, [[0, 6]]);
    }));
    return function checkDuplicate() {
      return _ref2.apply(this, arguments);
    };
  }();

  // 发布陪练档期
  var _handlePublishAvailability = /*#__PURE__*/function () {
    var _ref3 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__["default"])(/*#__PURE__*/(0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_12__["default"])().m(function _callee4() {
      var force,
        isDup,
        timeSlot,
        res,
        _args4 = arguments,
        _t3;
      return (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_12__["default"])().w(function (_context4) {
        while (1) switch (_context4.p = _context4.n) {
          case 0:
            force = _args4.length > 0 && _args4[0] !== undefined ? _args4[0] : false;
            if (playDate) {
              _context4.n = 1;
              break;
            }
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: "请选择日期",
              icon: "none"
            });
            return _context4.a(2);
          case 1:
            if (!(startHour >= endHour)) {
              _context4.n = 2;
              break;
            }
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: "结束时间需大于开始时间",
              icon: "none"
            });
            return _context4.a(2);
          case 2:
            if (venueName) {
              _context4.n = 3;
              break;
            }
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: "请选择球馆",
              icon: "none"
            });
            return _context4.a(2);
          case 3:
            if (!(note.length > 50)) {
              _context4.n = 4;
              break;
            }
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: "备注不能超过50字",
              icon: "none"
            });
            return _context4.a(2);
          case 4:
            if (force) {
              _context4.n = 6;
              break;
            }
            _context4.n = 5;
            return checkDuplicate();
          case 5:
            isDup = _context4.v;
            if (!isDup) {
              _context4.n = 6;
              break;
            }
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showModal({
              title: "提醒",
              content: "您已有一条相同日期和时段的档期正在发布中，是否继续发布？",
              confirmText: "继续发布",
              cancelText: "取消",
              success: function () {
                var _success = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__["default"])(/*#__PURE__*/(0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_12__["default"])().m(function _callee3(res) {
                  return (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_12__["default"])().w(function (_context3) {
                    while (1) switch (_context3.n) {
                      case 0:
                        if (res.confirm) _handlePublishAvailability(true);
                      case 1:
                        return _context3.a(2);
                    }
                  }, _callee3);
                }));
                function success(_x) {
                  return _success.apply(this, arguments);
                }
                return success;
              }()
            });
            return _context4.a(2);
          case 6:
            setSubmitting(true);
            _context4.p = 7;
            timeSlot = (0,_config_site__WEBPACK_IMPORTED_MODULE_8__.inferTimeSlot)(startHour);
            _context4.n = 8;
            return _services_availabilities__WEBPACK_IMPORTED_MODULE_2__.availabilitiesService.create({
              playDate: playDate,
              startHour: startHour,
              endHour: endHour,
              timeSlot: timeSlot,
              tempLocation: venueName,
              tempLat: venueLat,
              tempLng: venueLng,
              priceMin: priceMin ? Number(priceMin) : null,
              priceMax: priceMax ? Number(priceMax) : null,
              courtBookedBy: courtBookedBy,
              note: note.trim() || null
            });
          case 8:
            res = _context4.v;
            if (res.ok) {
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
                title: "发布成功",
                icon: "success"
              });
              resetForm();
              setTimeout(function () {
                return _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().switchTab({
                  url: "/pages/index/index"
                });
              }, 1500);
            }
            _context4.n = 10;
            break;
          case 9:
            _context4.p = 9;
            _t3 = _context4.v;
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: (_t3 === null || _t3 === void 0 ? void 0 : _t3.message) || "发布失败",
              icon: "none"
            });
          case 10:
            _context4.p = 10;
            setSubmitting(false);
            return _context4.f(10);
          case 11:
            return _context4.a(2);
        }
      }, _callee4, null, [[7, 9, 10, 11]]);
    }));
    return function handlePublishAvailability() {
      return _ref3.apply(this, arguments);
    };
  }();

  // 发布学员需求
  var _handlePublishDemand = /*#__PURE__*/function () {
    var _ref4 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__["default"])(/*#__PURE__*/(0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_12__["default"])().m(function _callee6() {
      var force,
        isDup,
        timeSlot,
        res,
        _args6 = arguments,
        _t4;
      return (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_12__["default"])().w(function (_context6) {
        while (1) switch (_context6.p = _context6.n) {
          case 0:
            force = _args6.length > 0 && _args6[0] !== undefined ? _args6[0] : false;
            if (playDate) {
              _context6.n = 1;
              break;
            }
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: "请选择日期",
              icon: "none"
            });
            return _context6.a(2);
          case 1:
            if (!(startHour >= endHour)) {
              _context6.n = 2;
              break;
            }
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: "结束时间需大于开始时间",
              icon: "none"
            });
            return _context6.a(2);
          case 2:
            if (venueName) {
              _context6.n = 3;
              break;
            }
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: "请选择球馆",
              icon: "none"
            });
            return _context6.a(2);
          case 3:
            if (budgetMax) {
              _context6.n = 4;
              break;
            }
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: "请填写预算上限",
              icon: "none"
            });
            return _context6.a(2);
          case 4:
            if (!(note.length > 50)) {
              _context6.n = 5;
              break;
            }
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: "备注不能超过50字",
              icon: "none"
            });
            return _context6.a(2);
          case 5:
            if (force) {
              _context6.n = 7;
              break;
            }
            _context6.n = 6;
            return checkDuplicate();
          case 6:
            isDup = _context6.v;
            if (!isDup) {
              _context6.n = 7;
              break;
            }
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showModal({
              title: "提醒",
              content: "您已有一条相同日期和时段的需求正在发布中，是否继续发布？",
              confirmText: "继续发布",
              cancelText: "取消",
              success: function () {
                var _success2 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__["default"])(/*#__PURE__*/(0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_12__["default"])().m(function _callee5(res) {
                  return (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_12__["default"])().w(function (_context5) {
                    while (1) switch (_context5.n) {
                      case 0:
                        if (res.confirm) _handlePublishDemand(true);
                      case 1:
                        return _context5.a(2);
                    }
                  }, _callee5);
                }));
                function success(_x2) {
                  return _success2.apply(this, arguments);
                }
                return success;
              }()
            });
            return _context6.a(2);
          case 7:
            setSubmitting(true);
            _context6.p = 8;
            timeSlot = (0,_config_site__WEBPACK_IMPORTED_MODULE_8__.inferTimeSlot)(startHour);
            _context6.n = 9;
            return _services_demands__WEBPACK_IMPORTED_MODULE_3__.demandsService.create({
              playDate: playDate,
              startHour: startHour,
              endHour: endHour,
              timeSlot: timeSlot,
              locationName: venueName,
              locationLat: venueLat,
              locationLng: venueLng,
              expectedLevel: expectedLevel,
              studentLevel: studentLevel,
              budgetMin: budgetMin ? Number(budgetMin) : null,
              budgetMax: Number(budgetMax),
              courtBookedBy: courtBookedBy,
              note: note.trim() || null
            });
          case 9:
            res = _context6.v;
            if (res.ok) {
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
                title: "发布成功",
                icon: "success"
              });
              resetForm();
              setTimeout(function () {
                return _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().switchTab({
                  url: "/pages/index/index"
                });
              }, 1500);
            }
            _context6.n = 11;
            break;
          case 10:
            _context6.p = 10;
            _t4 = _context6.v;
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: (_t4 === null || _t4 === void 0 ? void 0 : _t4.message) || "发布失败",
              icon: "none"
            });
          case 11:
            _context6.p = 11;
            setSubmitting(false);
            return _context6.f(11);
          case 12:
            return _context6.a(2);
        }
      }, _callee6, null, [[8, 10, 11, 12]]);
    }));
    return function handlePublishDemand() {
      return _ref4.apply(this, arguments);
    };
  }();
  var resetForm = function resetForm() {
    setPlayDate("");
    setStartHour(19);
    setEndHour(21);
    setCourtBookedBy("student");
    setNote("");
    setVenueName("");
    setVenueAddress("");
    setVenueLat(null);
    setVenueLng(null);
    setPriceMin("");
    setPriceMax("");
    setBudgetMin("");
    setBudgetMax("");
  };
  var today = new Date().toISOString().slice(0, 10);
  if (loading) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
      className: "page-publish ".concat(activeTab === "student" ? "tab-student" : "tab-coach"),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_CustomNav_CustomNav__WEBPACK_IMPORTED_MODULE_7__["default"], {
        title: "\u53D1\u5E03"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_6__["default"], {})]
    });
  }
  if (!user) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
      className: "page-publish ".concat(activeTab === "student" ? "tab-student" : "tab-coach"),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_CustomNav_CustomNav__WEBPACK_IMPORTED_MODULE_7__["default"], {
        title: "\u53D1\u5E03"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
        className: "login-empty",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
          className: "login-empty-icon",
          children: "\uD83C\uDFF8"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
          className: "login-empty-text",
          children: "\u767B\u5F55\u540E\u4F53\u9A8C\u5168\u90E8\u529F\u80FD"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Button, {
          className: "login-btn",
          onClick: function onClick() {
            return _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
              url: "/pages/login/login"
            });
          },
          children: "\u5FAE\u4FE1\u4E00\u952E\u767B\u5F55"
        })]
      })]
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
    className: "page-publish ".concat(activeTab === "student" ? "tab-student" : "tab-coach"),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_CustomNav_CustomNav__WEBPACK_IMPORTED_MODULE_7__["default"], {
      title: "\u53D1\u5E03"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
      className: "publish-header",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
        className: "publish-tab-bar",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
          className: "publish-tab-item ".concat(activeTab === "student" ? "active" : "", " ").concat(!studentEnabled ? "disabled" : ""),
          onClick: function onClick() {
            return handleTabClick("student");
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
            children: "\u53D1\u5E03\u5B66\u5458\u8BA2\u5355"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
          className: "publish-tab-item ".concat(activeTab === "coach" ? "active" : "", " ").concat(!coachEnabled ? "disabled" : ""),
          onClick: function onClick() {
            return handleTabClick("coach");
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
            children: "\u53D1\u5E03\u966A\u7EC3\u5458\u8BA2\u5355"
          })
        })]
      })
    }), noneEnabled ?
    /*#__PURE__*/
    /* 两身份都未注册：显示完善信息按钮 */
    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
      className: "empty-identity",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
        className: "empty-icon",
        children: "\uD83C\uDFF8"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
        className: "empty-title",
        children: "\u5C1A\u672A\u5F00\u901A\u4EFB\u4F55\u8EAB\u4EFD"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
        className: "empty-desc",
        children: "\u8BF7\u5148\u5728\u4E2A\u4EBA\u4E2D\u5FC3\u5B8C\u5584\u5B66\u5458\u6216\u966A\u7EC3\u5458\u4FE1\u606F\u540E\u5373\u53EF\u53D1\u5E03"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Button, {
        className: "go-profile-btn",
        onClick: goToProfile,
        children: "\u8BF7\u53BB\u4E2A\u4EBA\u4E2D\u5FC3\u5B8C\u5584\u4FE1\u606F"
      })]
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.ScrollView, {
      scrollY: true,
      className: "form-scroll",
      children: [activeTab === "student" && studentEnabled && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
        className: "form-card",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
          className: "section-title",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
            children: "\u53D1\u5E03\u5B66\u5458\u9700\u6C42"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
          className: "form-item",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
            className: "form-label",
            children: "\u65E5\u671F *"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Picker, {
            mode: "date",
            start: today,
            value: playDate,
            onChange: function onChange(e) {
              return setPlayDate(e.detail.value);
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
              className: "picker-value",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
                className: playDate ? "" : "placeholder",
                children: playDate || "请选择日期"
              })
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
          className: "form-item",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
            className: "form-label",
            children: "\u5F00\u59CB\u65F6\u95F4 *"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Picker, {
            mode: "selector",
            range: _config_site__WEBPACK_IMPORTED_MODULE_8__.HOUR_OPTIONS.map(function (h) {
              return h.label;
            }),
            value: startHour - 6,
            onChange: function onChange(e) {
              return setStartHour(Number(e.detail.value) + 6);
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
              className: "picker-value",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
                children: (_HOUR_OPTIONS$find = _config_site__WEBPACK_IMPORTED_MODULE_8__.HOUR_OPTIONS.find(function (h) {
                  return h.value === startHour;
                })) === null || _HOUR_OPTIONS$find === void 0 ? void 0 : _HOUR_OPTIONS$find.label
              })
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
          className: "form-item",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
            className: "form-label",
            children: "\u7ED3\u675F\u65F6\u95F4 *"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Picker, {
            mode: "selector",
            range: _config_site__WEBPACK_IMPORTED_MODULE_8__.HOUR_OPTIONS.map(function (h) {
              return h.label;
            }),
            value: endHour - 6,
            onChange: function onChange(e) {
              return setEndHour(Number(e.detail.value) + 6);
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
              className: "picker-value",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
                children: (_HOUR_OPTIONS$find2 = _config_site__WEBPACK_IMPORTED_MODULE_8__.HOUR_OPTIONS.find(function (h) {
                  return h.value === endHour;
                })) === null || _HOUR_OPTIONS$find2 === void 0 ? void 0 : _HOUR_OPTIONS$find2.label
              })
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
          className: "form-item",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
            className: "form-label",
            children: "\u7403\u9986 *"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
            className: "venue-entry",
            onClick: goToVenuePicker,
            children: [venueName ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
              className: "venue-entry-selected",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
                className: "venue-entry-name",
                children: venueName
              }), venueAddress ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
                className: "venue-entry-addr",
                children: venueAddress
              }) : null]
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
              className: "venue-entry-placeholder",
              children: "\u70B9\u51FB\u9009\u62E9\u7403\u9986\u4F4D\u7F6E"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
              className: "venue-entry-arrow",
              children: "\u203A"
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
          className: "form-item",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
            className: "form-label",
            children: "\u671F\u671B\u966A\u7EC3\u7B49\u7EA7 *"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Picker, {
            mode: "selector",
            range: LEVEL_OPTIONS.map(function (l) {
              return l.label;
            }),
            value: expectedLevel,
            onChange: function onChange(e) {
              return setExpectedLevel(Number(e.detail.value));
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
              className: "picker-value",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
                children: (_LEVEL_OPTIONS$expect = (_LEVEL_OPTIONS$expect2 = LEVEL_OPTIONS[expectedLevel]) === null || _LEVEL_OPTIONS$expect2 === void 0 ? void 0 : _LEVEL_OPTIONS$expect2.label) !== null && _LEVEL_OPTIONS$expect !== void 0 ? _LEVEL_OPTIONS$expect : "请选择"
              })
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
          className: "form-item",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
            className: "form-label",
            children: "\u81EA\u8EAB\u7B49\u7EA7 *"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Picker, {
            mode: "selector",
            range: LEVEL_OPTIONS.map(function (l) {
              return l.label;
            }),
            value: studentLevel,
            onChange: function onChange(e) {
              return setStudentLevel(Number(e.detail.value));
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
              className: "picker-value",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
                children: (_LEVEL_OPTIONS$studen = (_LEVEL_OPTIONS$studen2 = LEVEL_OPTIONS[studentLevel]) === null || _LEVEL_OPTIONS$studen2 === void 0 ? void 0 : _LEVEL_OPTIONS$studen2.label) !== null && _LEVEL_OPTIONS$studen !== void 0 ? _LEVEL_OPTIONS$studen : "请选择"
              })
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
          className: "form-item",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
            className: "form-label",
            children: "\u6700\u4F4E\u9884\u7B97\uFF08\u5143/\u65F6\uFF09"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Input, {
            className: "form-input",
            type: "number",
            placeholder: "\u9009\u586B",
            value: budgetMin,
            onInput: function onInput(e) {
              return setBudgetMin(e.detail.value);
            }
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
          className: "form-item",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
            className: "form-label",
            children: "\u6700\u9AD8\u9884\u7B97\uFF08\u5143/\u65F6\uFF09 *"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Input, {
            className: "form-input",
            type: "number",
            placeholder: "\u8BF7\u586B\u5199",
            value: budgetMax,
            onInput: function onInput(e) {
              return setBudgetMax(e.detail.value);
            }
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
          className: "form-item",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
            className: "form-label",
            children: "\u8C01\u8BA2\u573A\u5730"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
            className: "radio-row",
            children: _config_site__WEBPACK_IMPORTED_MODULE_8__.COURT_BOOKED_OPTIONS.map(function (o) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
                className: "radio-chip ".concat(courtBookedBy === o.value ? "active" : ""),
                onClick: function onClick() {
                  return setCourtBookedBy(o.value);
                },
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
                  children: o.label
                })
              }, o.value);
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
          className: "form-item",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
            className: "form-label",
            children: "\u5907\u6CE8\uFF08\u53EF\u9009\uFF09"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Textarea, {
            className: "form-textarea",
            placeholder: "50\u5B57\u4EE5\u5185",
            value: note,
            onInput: function onInput(e) {
              return setNote(e.detail.value);
            },
            maxlength: 50
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
            className: "char-count",
            children: [note.length, "/50"]
          })]
        })]
      }), activeTab === "coach" && coachEnabled && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
        className: "form-card",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
          className: "section-title",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
            children: "\u53D1\u5E03\u966A\u7EC3\u6863\u671F"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
          className: "form-item",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
            className: "form-label",
            children: "\u65E5\u671F *"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Picker, {
            mode: "date",
            start: today,
            value: playDate,
            onChange: function onChange(e) {
              return setPlayDate(e.detail.value);
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
              className: "picker-value",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
                className: playDate ? "" : "placeholder",
                children: playDate || "请选择日期"
              })
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
          className: "form-item",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
            className: "form-label",
            children: "\u5F00\u59CB\u65F6\u95F4 *"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Picker, {
            mode: "selector",
            range: _config_site__WEBPACK_IMPORTED_MODULE_8__.HOUR_OPTIONS.map(function (h) {
              return h.label;
            }),
            value: startHour - 6,
            onChange: function onChange(e) {
              return setStartHour(Number(e.detail.value) + 6);
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
              className: "picker-value",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
                children: (_HOUR_OPTIONS$find3 = _config_site__WEBPACK_IMPORTED_MODULE_8__.HOUR_OPTIONS.find(function (h) {
                  return h.value === startHour;
                })) === null || _HOUR_OPTIONS$find3 === void 0 ? void 0 : _HOUR_OPTIONS$find3.label
              })
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
          className: "form-item",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
            className: "form-label",
            children: "\u7ED3\u675F\u65F6\u95F4 *"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Picker, {
            mode: "selector",
            range: _config_site__WEBPACK_IMPORTED_MODULE_8__.HOUR_OPTIONS.map(function (h) {
              return h.label;
            }),
            value: endHour - 6,
            onChange: function onChange(e) {
              return setEndHour(Number(e.detail.value) + 6);
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
              className: "picker-value",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
                children: (_HOUR_OPTIONS$find4 = _config_site__WEBPACK_IMPORTED_MODULE_8__.HOUR_OPTIONS.find(function (h) {
                  return h.value === endHour;
                })) === null || _HOUR_OPTIONS$find4 === void 0 ? void 0 : _HOUR_OPTIONS$find4.label
              })
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
          className: "form-item",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
            className: "form-label",
            children: "\u7403\u9986 *"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
            className: "venue-entry",
            onClick: goToVenuePicker,
            children: [venueName ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
              className: "venue-entry-selected",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
                className: "venue-entry-name",
                children: venueName
              }), venueAddress ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
                className: "venue-entry-addr",
                children: venueAddress
              }) : null]
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
              className: "venue-entry-placeholder",
              children: "\u70B9\u51FB\u9009\u62E9\u7403\u9986\u4F4D\u7F6E"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
              className: "venue-entry-arrow",
              children: "\u203A"
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
          className: "form-item",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
            className: "form-label",
            children: "\u4EF7\u4F4D\uFF08\u5143/\u65F6\uFF09"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
            className: "form-hint",
            children: "\u9009\u586B\uFF0C\u4E0D\u586B\u5219\u4EF7\u683C\u9762\u8BAE"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
            className: "price-preset-row",
            children: _config_site__WEBPACK_IMPORTED_MODULE_8__.PRICE_PRESETS.map(function (p) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
                className: "price-preset-chip ".concat(priceMin === String(p.min) && priceMax === String(p.max) ? "active" : ""),
                onClick: function onClick() {
                  setPriceMin(String(p.min));
                  setPriceMax(String(p.max));
                },
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
                  children: [p.min, "-", p.max]
                })
              }, p.label);
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
            className: "dual-input-row",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Input, {
              className: "form-input",
              type: "number",
              placeholder: "\u6700\u4F4E",
              value: priceMin,
              onInput: function onInput(e) {
                return setPriceMin(e.detail.value);
              }
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
              className: "dash",
              children: "-"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Input, {
              className: "form-input",
              type: "number",
              placeholder: "\u6700\u9AD8",
              value: priceMax,
              onInput: function onInput(e) {
                return setPriceMax(e.detail.value);
              }
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
          className: "form-item",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
            className: "form-label",
            children: "\u8C01\u8BA2\u573A\u5730"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
            className: "radio-row",
            children: _config_site__WEBPACK_IMPORTED_MODULE_8__.COURT_BOOKED_OPTIONS.map(function (o) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
                className: "radio-chip ".concat(courtBookedBy === o.value ? "active" : ""),
                onClick: function onClick() {
                  return setCourtBookedBy(o.value);
                },
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
                  children: o.label
                })
              }, o.value);
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
          className: "form-item",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
            className: "form-label",
            children: "\u5907\u6CE8\uFF08\u53EF\u9009\uFF09"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Textarea, {
            className: "form-textarea",
            placeholder: "50\u5B57\u4EE5\u5185",
            value: note,
            onInput: function onInput(e) {
              return setNote(e.detail.value);
            },
            maxlength: 50
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
            className: "char-count",
            children: [note.length, "/50"]
          })]
        })]
      })]
    }), (activeTab === "student" && studentEnabled || activeTab === "coach" && coachEnabled) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
      className: "submit-area safe-bottom",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Button, {
        className: "submit-btn",
        loading: submitting,
        disabled: submitting,
        onClick: activeTab === "student" ? function () {
          return _handlePublishDemand();
        } : function () {
          return _handlePublishAvailability();
        },
        children: ["\u53D1\u5E03", activeTab === "student" ? "需求" : "档期"]
      })
    })]
  });
}

/***/ }),

/***/ "./src/pages/publish/publish.tsx":
/*!***************************************!*\
  !*** ./src/pages/publish/publish.tsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/dsl/common.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_publish_publish_publish_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/publish/publish!./publish.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/publish/publish!./src/pages/publish/publish.tsx");


var config = {"navigationBarTitleText":"发布","navigationStyle":"custom"};



var taroOption = (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_publish_publish_publish_tsx__WEBPACK_IMPORTED_MODULE_0__["default"], 'pages/publish/publish', {root:{cn:[]}}, config || {})
if (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_publish_publish_publish_tsx__WEBPACK_IMPORTED_MODULE_0__["default"] && _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_publish_publish_publish_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors) {
  taroOption.behaviors = (taroOption.behaviors || []).concat(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_publish_publish_publish_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors)
}
var inst = Page(taroOption)



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_publish_publish_publish_tsx__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/publish/publish.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=publish.js.map