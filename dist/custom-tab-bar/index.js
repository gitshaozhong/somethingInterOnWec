"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["custom-tab-bar/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=custom-tab-bar/index!./src/custom-tab-bar/index.tsx":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=custom-tab-bar/index!./src/custom-tab-bar/index.tsx ***!
  \**********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CustomTabBar; }
/* harmony export */ });
/* harmony import */ var E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _stores_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stores/app */ "./src/stores/app.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");







var COLOR_NORMAL = "#8a8a9a";
var COLOR_ACTIVE = "#ff6a00";

/** 线性图标 SVG 模板（currentColor 由参数控制） */
var homeSvg = function homeSvg(color) {
  return "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"".concat(color, "\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 12l9-9 9 9\"/><path d=\"M5 10v10h14V10\"/><path d=\"M10 20v-6h4v6\"/></svg>");
};
var publishSvg = function publishSvg(color) {
  return "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"".concat(color, "\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M12 8v8M8 12h8\"/></svg>");
};
var messageSvg = function messageSvg(color) {
  return "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"".concat(color, "\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M21 12a8 8 0 0 1-8 8H7l-4 3 1.5-4.5A8 8 0 1 1 21 12z\"/><circle cx=\"9\" cy=\"12\" r=\"0.8\" fill=\"").concat(color, "\"/><circle cx=\"13\" cy=\"12\" r=\"0.8\" fill=\"").concat(color, "\"/><circle cx=\"17\" cy=\"12\" r=\"0.8\" fill=\"").concat(color, "\"/></svg>");
};
var profileSvg = function profileSvg(color) {
  return "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"".concat(color, "\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"8\" r=\"4\"/><path d=\"M4 20c0-4 4-6 8-6s8 2 8 6\"/></svg>");
};
var TAB_LIST = [{
  pagePath: "/pages/index/index",
  text: "大厅",
  icon: homeSvg
}, {
  pagePath: "/pages/publish/publish",
  text: "发布",
  icon: publishSvg
}, {
  pagePath: "/pages/messages/messages",
  text: "消息",
  icon: messageSvg
}, {
  pagePath: "/pages/profile/profile",
  text: "我的",
  icon: profileSvg
}];

/** 消息 Tab 索引（用于显示未读徽标） */
var MESSAGE_TAB_INDEX = 2;

/** 将 SVG 字符串转为 data URI */
var toDataUri = function toDataUri(svg) {
  return "data:image/svg+xml,".concat(encodeURIComponent(svg));
};
function CustomTabBar() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
    _useState2 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState, 2),
    selected = _useState2[0],
    setSelected = _useState2[1];
  var _useAppStore = (0,_stores_app__WEBPACK_IMPORTED_MODULE_2__.useAppStore)(),
    unreadCount = _useAppStore.unreadCount;
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var _instance$router;
    var instance = _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getCurrentInstance();
    var path = ((_instance$router = instance.router) === null || _instance$router === void 0 ? void 0 : _instance$router.path) || "";
    var idx = TAB_LIST.findIndex(function (t) {
      return path.includes(t.pagePath);
    });
    if (idx >= 0) setSelected(idx);
  });
  var handleSwitch = function handleSwitch(idx) {
    if (idx === selected) return;
    setSelected(idx);
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().switchTab({
      url: TAB_LIST[idx].pagePath
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
    className: "custom-tabbar safe-bottom",
    children: TAB_LIST.map(function (tab, idx) {
      var active = selected === idx;
      var color = active ? COLOR_ACTIVE : COLOR_NORMAL;
      var svgUri = toDataUri(tab.icon(color));
      var showBadge = idx === MESSAGE_TAB_INDEX && unreadCount > 0;
      var badgeText = unreadCount > 99 ? "99+" : String(unreadCount);
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
        className: "tab-item ".concat(active ? "active" : ""),
        onClick: function onClick() {
          return handleSwitch(idx);
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
          className: "tab-icon-wrap",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Image, {
            className: "tab-icon",
            src: svgUri,
            mode: "aspectFit"
          }), showBadge && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
            className: "tab-badge",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
              className: "tab-badge-text",
              children: badgeText
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
          className: "tab-text",
          children: tab.text
        })]
      }, tab.pagePath);
    })
  });
}

/***/ }),

/***/ "./src/custom-tab-bar/index.tsx":
/*!**************************************!*\
  !*** ./src/custom-tab-bar/index.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/dsl/common.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_custom_tab_bar_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !!../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=custom-tab-bar/index!./index.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=custom-tab-bar/index!./src/custom-tab-bar/index.tsx");


var inst = Component((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.createComponentConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_custom_tab_bar_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"], 'custom-tab-bar/index'))

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_custom_tab_bar_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/custom-tab-bar/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map