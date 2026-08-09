"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/login/login"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/login/login!./src/pages/login/login.tsx":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/login/login!./src/pages/login/login.tsx ***!
  \****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Login; }
/* harmony export */ });
/* harmony import */ var E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regenerator.js */ "./node_modules/@babel/runtime/helpers/esm/regenerator.js");
/* harmony import */ var E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _stores_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../stores/user */ "./src/stores/user.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");









function Login() {
  var _useUserStore = (0,_stores_user__WEBPACK_IMPORTED_MODULE_2__.useUserStore)(),
    login = _useUserStore.login;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
    _useState2 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState, 2),
    loading = _useState2[0],
    setLoading = _useState2[1];
  var handleLogin = /*#__PURE__*/function () {
    var _ref = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__["default"])(/*#__PURE__*/(0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_6__["default"])().m(function _callee() {
      var loginRes, _t;
      return (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_6__["default"])().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            setLoading(true);
            _context.p = 1;
            _context.n = 2;
            return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().login();
          case 2:
            loginRes = _context.v;
            if (loginRes.code) {
              _context.n = 3;
              break;
            }
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().showToast({
              title: "获取微信登录凭证失败",
              icon: "none"
            });
            return _context.a(2);
          case 3:
            _context.n = 4;
            return login(loginRes.code, "student");
          case 4:
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().showToast({
              title: "登录成功",
              icon: "success"
            });
            setTimeout(function () {
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().switchTab({
                url: "/pages/publish/publish"
              });
            }, 1000);
            _context.n = 6;
            break;
          case 5:
            _context.p = 5;
            _t = _context.v;
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().showToast({
              title: (_t === null || _t === void 0 ? void 0 : _t.message) || "登录失败",
              icon: "none"
            });
          case 6:
            _context.p = 6;
            setLoading(false);
            return _context.f(6);
          case 7:
            return _context.a(2);
        }
      }, _callee, null, [[1, 5, 6, 7]]);
    }));
    return function handleLogin() {
      return _ref.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
    className: "page-login",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
      className: "login-content",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
        className: "logo-area",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.Text, {
          className: "app-name",
          children: "\u7FBD\u7403\u642D\u5B50"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.Text, {
          className: "app-desc",
          children: "\u7FBD\u6BDB\u7403\u966A\u7EC3\u64AE\u5408\u5E73\u53F0"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.Button, {
        className: "wechat-login-btn",
        loading: loading,
        disabled: loading,
        onClick: handleLogin,
        children: "\u5FAE\u4FE1\u4E00\u952E\u767B\u5F55"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.Text, {
        className: "privacy-tip",
        children: "\u767B\u5F55\u540E\u8BF7\u524D\u5F80\"\u6211\u7684\"\u5B8C\u5584\u5B66\u5458/\u966A\u7EC3\u5458\u6863\u6848\uFF0C\u5373\u53EF\u53D1\u5E03\u9700\u6C42\u6216\u6863\u671F"
      })]
    })
  });
}

/***/ }),

/***/ "./src/pages/login/login.tsx":
/*!***********************************!*\
  !*** ./src/pages/login/login.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/dsl/common.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_login_login_login_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/login/login!./login.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/login/login!./src/pages/login/login.tsx");


var config = {"navigationBarTitleText":"登录"};



var taroOption = (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_login_login_login_tsx__WEBPACK_IMPORTED_MODULE_0__["default"], 'pages/login/login', {root:{cn:[]}}, config || {})
if (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_login_login_login_tsx__WEBPACK_IMPORTED_MODULE_0__["default"] && _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_login_login_login_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors) {
  taroOption.behaviors = (taroOption.behaviors || []).concat(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_login_login_login_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors)
}
var inst = Page(taroOption)



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_login_login_login_tsx__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/login/login.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=login.js.map