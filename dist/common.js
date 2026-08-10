"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["common"],{

/***/ "./src/components/CustomNav/CustomNav.tsx":
/*!************************************************!*\
  !*** ./src/components/CustomNav/CustomNav.tsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CustomNav; }
/* harmony export */ });
/* harmony import */ var E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");






/**
 * 统一自定义导航栏（4 个 Tab 页共用）
 * - 半透明白色背景 + 毛玻璃
 * - 居中标题（17px / 600 字重）
 * - 左右占位维持标题居中
 * - 通过 statusBarHeight 适配刘海屏
 */
function CustomNav(_ref) {
  var title = _ref.title,
    actionText = _ref.actionText,
    onAction = _ref.onAction;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(20),
    _useState2 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState, 2),
    statusBarHeight = _useState2[0],
    setStatusBarHeight = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    try {
      var sysInfo = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().getSystemInfoSync();
      setStatusBarHeight(sysInfo.statusBarHeight || 20);
    } catch (e) {
      // ignore
    }
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
    className: "custom-nav",
    style: {
      paddingTop: "".concat(statusBarHeight, "px")
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
      className: "custom-nav-inner",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
        className: "custom-nav-left"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Text, {
        className: "custom-nav-title",
        children: title
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
        className: "custom-nav-right",
        children: actionText && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Text, {
          className: "custom-nav-action",
          onClick: onAction,
          children: actionText
        })
      })]
    })
  });
}

/***/ }),

/***/ "./src/components/Empty.tsx":
/*!**********************************!*\
  !*** ./src/components/Empty.tsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Empty; }
/* harmony export */ });
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");


function Empty(_ref) {
  var _ref$text = _ref.text,
    text = _ref$text === void 0 ? "暂无数据" : _ref$text;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
    style: {
      textAlign: "center",
      padding: "60px 0",
      color: "var(--text-color-hint)"
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.Text, {
      children: text
    })
  });
}

/***/ }),

/***/ "./src/components/Loading.tsx":
/*!************************************!*\
  !*** ./src/components/Loading.tsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Loading; }
/* harmony export */ });
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");


function Loading(_ref) {
  var _ref$text = _ref.text,
    text = _ref$text === void 0 ? "加载中..." : _ref$text;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
    style: {
      textAlign: "center",
      padding: "60px 0",
      color: "var(--text-color-hint)"
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.Text, {
      children: text
    })
  });
}

/***/ }),

/***/ "./src/components/RatingStars.tsx":
/*!****************************************!*\
  !*** ./src/components/RatingStars.tsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ RatingStars; }
/* harmony export */ });
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");


/** 星级评分展示 */
function RatingStars(_ref) {
  var rating = _ref.rating,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? "sm" : _ref$size;
  var starSize = size === "md" ? 16 : 12;
  var stars = [];
  for (var i = 1; i <= 5; i++) {
    var filled = rating >= i;
    var half = !filled && rating >= i - 0.5;
    stars.push(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.Text, {
      style: {
        color: filled || half ? "#faad14" : "#e8e8e8",
        fontSize: starSize,
        marginRight: 2
      },
      children: filled ? "★" : half ? "★" : "★"
    }, i));
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
    style: {
      display: "flex",
      alignItems: "center"
    },
    children: stars
  });
}

/***/ }),

/***/ "./src/config/site.ts":
/*!****************************!*\
  !*** ./src/config/site.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* empty/unused harmony star reexport */
/* empty/unused harmony star reexport */
/* empty/unused harmony star reexport */
/* empty/unused harmony star reexport */
/* empty/unused harmony star reexport */
/* empty/unused harmony star reexport */
/* empty/unused harmony star reexport */
/* empty/unused harmony star reexport */
/* empty/unused harmony star reexport */
/* empty/unused harmony star reexport */
/* empty/unused harmony star reexport */
/* empty/unused harmony star reexport */
/* empty/unused harmony star reexport */
/* empty/unused harmony star reexport */
/* empty/unused harmony star reexport */
/* empty/unused harmony star reexport */
/* empty/unused harmony star reexport */
/* empty/unused harmony star reexport */
/* unused harmony exports BEIJING_VENUES_GROUPED, siteConfig */
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@shared/site'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/**
 * 小程序站点配置：从 shared/site.ts 导入共享常量，仅保留 miniapp 专属派生。
 * 共享常量的单一数据源为 wechatMiniApp/shared/site.ts。
 */



/** 按区域分组的预置球馆（miniapp venue-picker 使用） */
var BEIJING_VENUES_GROUPED = Object(function webpackMissingModule() { var e = new Error("Cannot find module '@shared/site'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@shared/site'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var siteConfig = {
  badmintonLevels: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@shared/site'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  studentSelfLevels: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@shared/site'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  courtBookedOptions: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@shared/site'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  timeSlots: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@shared/site'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  hourOptions: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@shared/site'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  beijingDistricts: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@shared/site'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  specialtyTags: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@shared/site'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  studentGoalTags: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@shared/site'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  maxPriceOptions: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@shared/site'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  pricePresets: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@shared/site'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  beijingVenues: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@shared/site'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
};

/***/ }),

/***/ "./src/services/auth.ts":
/*!******************************!*\
  !*** ./src/services/auth.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   authService: function() { return /* binding */ authService; }
/* harmony export */ });
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request */ "./src/services/request.ts");

var authService = {
  /** 微信登录 */login: function login(code, role, name, avatar) {
    return _request__WEBPACK_IMPORTED_MODULE_0__["default"].post("/auth/wechat-login", {
      code: code,
      role: role,
      name: name,
      avatar: avatar
    });
  },
  /** 获取当前用户信息 */getProfile: function getProfile() {
    return _request__WEBPACK_IMPORTED_MODULE_0__["default"].get("/auth/me");
  },
  /** 更新用户信息 */updateProfile: function updateProfile(data) {
    return _request__WEBPACK_IMPORTED_MODULE_0__["default"].put("/auth/profile", data);
  }
};

/***/ }),

/***/ "./src/services/availabilities.ts":
/*!****************************************!*\
  !*** ./src/services/availabilities.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   availabilitiesService: function() { return /* binding */ availabilitiesService; }
/* harmony export */ });
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request */ "./src/services/request.ts");

var availabilitiesService = {
  /** 获取档期列表 */list: function list() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request__WEBPACK_IMPORTED_MODULE_0__["default"].get("/availabilities", params);
  },
  /** 获取档期详情 */getById: function getById(id) {
    return _request__WEBPACK_IMPORTED_MODULE_0__["default"].get("/availabilities/".concat(id));
  },
  /** 发布档期 */create: function create(data) {
    return _request__WEBPACK_IMPORTED_MODULE_0__["default"].post("/availabilities", data);
  },
  /** 下架档期 */close: function close(id) {
    return _request__WEBPACK_IMPORTED_MODULE_0__["default"].put("/availabilities/".concat(id, "/close"));
  },
  /** 我的档期 */mine: function mine() {
    return _request__WEBPACK_IMPORTED_MODULE_0__["default"].get("/availabilities/mine");
  }
};

/***/ }),

/***/ "./src/services/demands.ts":
/*!*********************************!*\
  !*** ./src/services/demands.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   demandsService: function() { return /* binding */ demandsService; }
/* harmony export */ });
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request */ "./src/services/request.ts");

var demandsService = {
  /** 获取需求列表 */list: function list() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request__WEBPACK_IMPORTED_MODULE_0__["default"].get("/demands", params);
  },
  /** 获取需求详情 */getById: function getById(id) {
    return _request__WEBPACK_IMPORTED_MODULE_0__["default"].get("/demands/".concat(id));
  },
  /** 发布需求 */create: function create(data) {
    return _request__WEBPACK_IMPORTED_MODULE_0__["default"].post("/demands", data);
  },
  /** 关闭需求 */close: function close(id) {
    return _request__WEBPACK_IMPORTED_MODULE_0__["default"].put("/demands/".concat(id, "/close"));
  },
  /** 我的需求 */mine: function mine() {
    return _request__WEBPACK_IMPORTED_MODULE_0__["default"].get("/demands/mine");
  }
};

/***/ }),

/***/ "./src/services/follows.ts":
/*!*********************************!*\
  !*** ./src/services/follows.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   followsService: function() { return /* binding */ followsService; }
/* harmony export */ });
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request */ "./src/services/request.ts");

var followsService = {
  /** 关注用户 */follow: function follow(followedId) {
    return _request__WEBPACK_IMPORTED_MODULE_0__["default"].post("/follows", {
      followedId: followedId
    });
  },
  /** 取消关注 */unfollow: function unfollow(followedId) {
    return _request__WEBPACK_IMPORTED_MODULE_0__["default"].delete("/follows/".concat(followedId));
  },
  /** 检查是否已关注 */isFollowing: function isFollowing(followedId) {
    return _request__WEBPACK_IMPORTED_MODULE_0__["default"].get("/follows/".concat(followedId, "/check"));
  },
  /** 我的关注列表 */list: function list() {
    return _request__WEBPACK_IMPORTED_MODULE_0__["default"].get("/follows");
  }
};

/***/ }),

/***/ "./src/services/invitations.ts":
/*!*************************************!*\
  !*** ./src/services/invitations.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   invitationsService: function() { return /* binding */ invitationsService; }
/* harmony export */ });
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request */ "./src/services/request.ts");

var invitationsService = {
  /** 发起邀请 */create: function create(data) {
    return _request__WEBPACK_IMPORTED_MODULE_0__["default"].post("/invitations", data);
  },
  /** 我的消息列表 */list: function list() {
    return _request__WEBPACK_IMPORTED_MODULE_0__["default"].get("/invitations");
  },
  /** 未读消息数 */unreadCount: function unreadCount() {
    return _request__WEBPACK_IMPORTED_MODULE_0__["default"].get("/invitations/unread-count");
  },
  /** 响应邀请 */respond: function respond(id, data) {
    return _request__WEBPACK_IMPORTED_MODULE_0__["default"].put("/invitations/".concat(id, "/respond"), data);
  },
  /** 撤回邀请 */revoke: function revoke(id) {
    return _request__WEBPACK_IMPORTED_MODULE_0__["default"].put("/invitations/".concat(id, "/revoke"));
  },
  /** 确认练球（第二次确认） */confirmPractice: function confirmPractice(id) {
    return _request__WEBPACK_IMPORTED_MODULE_0__["default"].put("/invitations/".concat(id, "/confirm-practice"));
  },
  /** 标记所有消息已读 */markRead: function markRead() {
    return _request__WEBPACK_IMPORTED_MODULE_0__["default"].put("/invitations/mark-read");
  },
  /** 我的订单列表 */orders: function orders() {
    return _request__WEBPACK_IMPORTED_MODULE_0__["default"].get("/invitations/orders");
  }
};

/***/ }),

/***/ "./src/services/notifications.ts":
/*!***************************************!*\
  !*** ./src/services/notifications.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   notificationsService: function() { return /* binding */ notificationsService; }
/* harmony export */ });
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request */ "./src/services/request.ts");

var notificationsService = {
  /**
   * 消息列表
   * @param category 不传返回所有未读+最近已读；system/ad 走 notifications 表；first_confirm/second_confirm 聚合自 invitations 表
   */
  list: function list(category) {
    return _request__WEBPACK_IMPORTED_MODULE_0__["default"].get("/notifications", category ? {
      category: category
    } : undefined);
  },
  /** 系统消息列表 */systemList: function systemList() {
    return _request__WEBPACK_IMPORTED_MODULE_0__["default"].get("/notifications", {
      category: "system"
    });
  },
  /** 广告消息列表 */adList: function adList() {
    return _request__WEBPACK_IMPORTED_MODULE_0__["default"].get("/notifications", {
      category: "ad"
    });
  },
  /** 一次确认消息列表（来自 invitations 表） */firstConfirmList: function firstConfirmList() {
    return _request__WEBPACK_IMPORTED_MODULE_0__["default"].get("/notifications", {
      category: "first_confirm"
    });
  },
  /** 二次确认消息列表（来自 invitations 表） */secondConfirmList: function secondConfirmList() {
    return _request__WEBPACK_IMPORTED_MODULE_0__["default"].get("/notifications", {
      category: "second_confirm"
    });
  },
  /** 未读消息数 */unreadCount: function unreadCount() {
    return _request__WEBPACK_IMPORTED_MODULE_0__["default"].get("/notifications/unread-count");
  },
  /** 标记所有消息已读 */markRead: function markRead() {
    return _request__WEBPACK_IMPORTED_MODULE_0__["default"].put("/notifications/mark-read");
  }
};

/***/ }),

/***/ "./src/services/request.ts":
/*!*********************************!*\
  !*** ./src/services/request.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BASE_URL: function() { return /* binding */ BASE_URL; }
/* harmony export */ });
/* harmony import */ var E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regenerator.js */ "./node_modules/@babel/runtime/helpers/esm/regenerator.js");
/* harmony import */ var E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);







var BASE_URL = "http://172.22.14.172:3001/api" || 0;
var TOKEN_KEY = "auth_token";
var Request = /*#__PURE__*/function () {
  function Request() {
    (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Request);
  }
  return (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Request, [{
    key: "getToken",
    value: function getToken() {
      return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync(TOKEN_KEY) || "";
    }
  }, {
    key: "setToken",
    value: function setToken(token) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().setStorageSync(TOKEN_KEY, token);
    }
  }, {
    key: "clearToken",
    value: function clearToken() {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().removeStorageSync(TOKEN_KEY);
    }
  }, {
    key: "request",
    value: function () {
      var _request = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__["default"])(/*#__PURE__*/(0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_4__["default"])().m(function _callee(url) {
        var options,
          _options$method,
          method,
          data,
          _options$header,
          header,
          _options$skipAuth,
          skipAuth,
          token,
          headers,
          res,
          errData,
          msg,
          _err$errMsg,
          _args = arguments,
          _t;
        return (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_4__["default"])().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              options = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
              _options$method = options.method, method = _options$method === void 0 ? "GET" : _options$method, data = options.data, _options$header = options.header, header = _options$header === void 0 ? {} : _options$header, _options$skipAuth = options.skipAuth, skipAuth = _options$skipAuth === void 0 ? false : _options$skipAuth;
              token = this.getToken();
              headers = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__["default"])({
                "Content-Type": "application/json"
              }, header);
              if (!skipAuth && token) {
                headers["Authorization"] = "Bearer ".concat(token);
              }
              _context.p = 1;
              _context.n = 2;
              return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().request({
                url: "".concat(BASE_URL).concat(url),
                method: method,
                data: data,
                header: headers
              });
            case 2:
              res = _context.v;
              if (!(res.statusCode === 401)) {
                _context.n = 3;
                break;
              }
              this.clearToken();
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().showToast({
                title: "登录已过期，请重新登录",
                icon: "none"
              });
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().reLaunch({
                url: "/pages/login/login"
              });
              throw new Error("Unauthorized");
            case 3:
              if (!(res.statusCode >= 400)) {
                _context.n = 4;
                break;
              }
              errData = res.data;
              msg = (errData === null || errData === void 0 ? void 0 : errData.error) || (errData === null || errData === void 0 ? void 0 : errData.message) || "请求失败";
              throw new Error(msg);
            case 4:
              return _context.a(2, res.data);
            case 5:
              _context.p = 5;
              _t = _context.v;
              if (!((_t === null || _t === void 0 ? void 0 : _t.message) === "Unauthorized")) {
                _context.n = 6;
                break;
              }
              throw _t;
            case 6:
              if (!(_t !== null && _t !== void 0 && (_err$errMsg = _t.errMsg) !== null && _err$errMsg !== void 0 && _err$errMsg.includes("request:fail"))) {
                _context.n = 7;
                break;
              }
              throw new Error("网络连接失败，请检查网络");
            case 7:
              throw _t;
            case 8:
              return _context.a(2);
          }
        }, _callee, this, [[1, 5]]);
      }));
      function request(_x) {
        return _request.apply(this, arguments);
      }
      return request;
    }()
  }, {
    key: "get",
    value: function get(url, params) {
      var query = params ? "?" + Object.entries(params).filter(function (_ref) {
        var _ref2 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_ref, 2),
          v = _ref2[1];
        return v !== undefined && v !== null;
      }).map(function (_ref3) {
        var _ref4 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_ref3, 2),
          k = _ref4[0],
          v = _ref4[1];
        return "".concat(encodeURIComponent(k), "=").concat(encodeURIComponent(String(v)));
      }).join("&") : "";
      return this.request("".concat(url).concat(query), {
        method: "GET"
      });
    }
  }, {
    key: "post",
    value: function post(url, data) {
      return this.request(url, {
        method: "POST",
        data: data
      });
    }
  }, {
    key: "put",
    value: function put(url, data) {
      return this.request(url, {
        method: "PUT",
        data: data
      });
    }
  }, {
    key: "delete",
    value: function _delete(url) {
      return this.request(url, {
        method: "DELETE"
      });
    }
  }]);
}();
var request = new Request();
/* harmony default export */ __webpack_exports__["default"] = (request);

/***/ }),

/***/ "./src/stores/app.ts":
/*!***************************!*\
  !*** ./src/stores/app.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useAppStore: function() { return /* binding */ useAppStore; }
/* harmony export */ });
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zustand */ "./node_modules/zustand/esm/index.mjs");

var useAppStore = (0,zustand__WEBPACK_IMPORTED_MODULE_0__.create)(function (set) {
  return {
    systemInfo: null,
    unreadCount: 0,
    init: function init() {
      try {
        var wx = globalThis.wx;
        if (wx !== null && wx !== void 0 && wx.getSystemInfoSync) {
          var info = wx.getSystemInfoSync();
          set({
            systemInfo: info
          });
        }
      } catch (_unused) {
        // 非微信环境忽略
      }
    },
    setUnreadCount: function setUnreadCount(count) {
      return set({
        unreadCount: Math.max(0, count)
      });
    }
  };
});

/***/ }),

/***/ "./src/stores/user.ts":
/*!****************************!*\
  !*** ./src/stores/user.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useUserStore: function() { return /* binding */ useUserStore; }
/* harmony export */ });
/* harmony import */ var E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regenerator.js */ "./node_modules/@babel/runtime/helpers/esm/regenerator.js");
/* harmony import */ var E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! zustand */ "./node_modules/zustand/esm/index.mjs");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth */ "./src/services/auth.ts");






var useUserStore = (0,zustand__WEBPACK_IMPORTED_MODULE_2__.create)(function (set, get) {
  return {
    user: null,
    token: _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync("auth_token") || "",
    loading: false,
    login: function () {
      var _login = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__["default"])(/*#__PURE__*/(0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_4__["default"])().m(function _callee(code, role) {
        var res, data;
        return (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_4__["default"])().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              set({
                loading: true
              });
              _context.p = 1;
              _context.n = 2;
              return _services_auth__WEBPACK_IMPORTED_MODULE_1__.authService.login(code, role);
            case 2:
              res = _context.v;
              if (!(res.ok && res.token)) {
                _context.n = 3;
                break;
              }
              data = res;
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().setStorageSync("auth_token", data.token);
              set({
                user: data.user,
                token: data.token
              });
              _context.n = 4;
              break;
            case 3:
              throw new Error(res.error || "登录失败");
            case 4:
              _context.p = 4;
              set({
                loading: false
              });
              return _context.f(4);
            case 5:
              return _context.a(2);
          }
        }, _callee, null, [[1,, 4, 5]]);
      }));
      function login(_x, _x2) {
        return _login.apply(this, arguments);
      }
      return login;
    }(),
    logout: function logout() {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().removeStorageSync("auth_token");
      set({
        user: null,
        token: ""
      });
    },
    checkLogin: function () {
      var _checkLogin = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__["default"])(/*#__PURE__*/(0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_4__["default"])().m(function _callee2() {
        var token, res, _t;
        return (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_4__["default"])().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              token = get().token;
              if (token) {
                _context2.n = 1;
                break;
              }
              return _context2.a(2);
            case 1:
              set({
                loading: true
              });
              _context2.p = 2;
              _context2.n = 3;
              return _services_auth__WEBPACK_IMPORTED_MODULE_1__.authService.getProfile();
            case 3:
              res = _context2.v;
              if (res.ok && res.user) {
                set({
                  user: res.user
                });
              } else {
                get().logout();
              }
              _context2.n = 5;
              break;
            case 4:
              _context2.p = 4;
              _t = _context2.v;
              get().logout();
            case 5:
              _context2.p = 5;
              set({
                loading: false
              });
              return _context2.f(5);
            case 6:
              return _context2.a(2);
          }
        }, _callee2, null, [[2, 4, 5, 6]]);
      }));
      function checkLogin() {
        return _checkLogin.apply(this, arguments);
      }
      return checkLogin;
    }(),
    updateUser: function updateUser(data) {
      set(function (state) {
        return {
          user: state.user ? (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__["default"])((0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__["default"])({}, state.user), data) : null
        };
      });
    }
  };
});

/***/ })

}]);
//# sourceMappingURL=common.js.map