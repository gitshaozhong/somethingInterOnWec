"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/feedback/feedback"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/feedback/feedback!./src/pages/feedback/feedback.tsx":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/feedback/feedback!./src/pages/feedback/feedback.tsx ***!
  \****************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Feedback; }
/* harmony export */ });
/* harmony import */ var E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regenerator.js */ "./node_modules/@babel/runtime/helpers/esm/regenerator.js");
/* harmony import */ var E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/request */ "./src/services/request.ts");
/* harmony import */ var _stores_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../stores/user */ "./src/stores/user.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");










function Feedback() {
  var _useUserStore = (0,_stores_user__WEBPACK_IMPORTED_MODULE_3__.useUserStore)(),
    user = _useUserStore.user;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState2 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState, 2),
    content = _useState2[0],
    setContent = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState4 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState6 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState5, 2),
    cooldown = _useState6[0],
    setCooldown = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState8 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState7, 2),
    cooldownMsg = _useState8[0],
    setCooldownMsg = _useState8[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // 检查3天冷却
    if (!user) return;
    checkCooldown();
  }, [user]);
  var checkCooldown = /*#__PURE__*/function () {
    var _ref = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__["default"])(/*#__PURE__*/(0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_7__["default"])().m(function _callee() {
      var res, lastTime, nextTime, now, hoursLeft, _t;
      return (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_7__["default"])().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            _context.p = 0;
            _context.n = 1;
            return _services_request__WEBPACK_IMPORTED_MODULE_2__["default"].get("/feedbacks/check");
          case 1:
            res = _context.v;
            if (res.ok && res.items && res.items.length > 0) {
              setCooldown(true);
              lastTime = new Date(res.items[0].createdAt);
              nextTime = new Date(lastTime.getTime() + 3 * 24 * 60 * 60 * 1000);
              now = new Date();
              hoursLeft = Math.ceil((nextTime.getTime() - now.getTime()) / (60 * 60 * 1000));
              setCooldownMsg("3\u5929\u5185\u4EC5\u9650\u63D0\u4EA4\u4E00\u6B21\u54DF\uFF0C".concat(hoursLeft, "\u5C0F\u65F6\u540E\u53EF\u518D\u6B21\u63D0\u4EA4"));
            }
            _context.n = 3;
            break;
          case 2:
            _context.p = 2;
            _t = _context.v;
          case 3:
            return _context.a(2);
        }
      }, _callee, null, [[0, 2]]);
    }));
    return function checkCooldown() {
      return _ref.apply(this, arguments);
    };
  }();
  var handleSubmit = /*#__PURE__*/function () {
    var _ref2 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__["default"])(/*#__PURE__*/(0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_7__["default"])().m(function _callee2() {
      var res, _e$message, _t2;
      return (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_7__["default"])().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            if (content.trim()) {
              _context2.n = 1;
              break;
            }
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: "请输入反馈内容",
              icon: "none"
            });
            return _context2.a(2);
          case 1:
            if (!(content.length > 100)) {
              _context2.n = 2;
              break;
            }
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: "反馈内容不能超过100字",
              icon: "none"
            });
            return _context2.a(2);
          case 2:
            setLoading(true);
            _context2.p = 3;
            _context2.n = 4;
            return _services_request__WEBPACK_IMPORTED_MODULE_2__["default"].post("/feedbacks", {
              content: content.trim()
            });
          case 4:
            res = _context2.v;
            if (res.ok) {
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
                title: "感谢您的反馈！",
                icon: "success"
              });
              setContent("");
              setCooldown(true);
              setCooldownMsg("3天内仅限提交一次哟");
            }
            _context2.n = 6;
            break;
          case 5:
            _context2.p = 5;
            _t2 = _context2.v;
            if (_t2 !== null && _t2 !== void 0 && (_e$message = _t2.message) !== null && _e$message !== void 0 && _e$message.includes("3天")) {
              setCooldown(true);
              setCooldownMsg(_t2.message);
            }
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: (_t2 === null || _t2 === void 0 ? void 0 : _t2.message) || "提交失败",
              icon: "none"
            });
          case 6:
            _context2.p = 6;
            setLoading(false);
            return _context2.f(6);
          case 7:
            return _context2.a(2);
        }
      }, _callee2, null, [[3, 5, 6, 7]]);
    }));
    return function handleSubmit() {
      return _ref2.apply(this, arguments);
    };
  }();
  if (!user) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
      className: "page-feedback",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
        className: "empty",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
          children: "\u8BF7\u5148\u767B\u5F55"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Button, {
          onClick: function onClick() {
            return _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
              url: "/pages/login/login"
            });
          },
          children: "\u53BB\u767B\u5F55"
        })]
      })
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
    className: "page-feedback",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
      className: "page-header",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
        className: "page-title",
        children: "\u610F\u89C1\u53CD\u9988"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
      className: "feedback-card",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
        className: "feedback-title",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
          className: "title-text",
          children: "\u6B22\u8FCE\u60A8\u63D0\u610F\u89C1\uFF0C\u5982\u6709\u4E0D\u8DB3\u6211\u4EEC\u6539\u8FDB\uFF0C\u8C22\u8C22"
        }), cooldown && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
          className: "cooldown-hint",
          children: cooldownMsg
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Textarea, {
        className: "feedback-textarea",
        placeholder: "\u8BF7\u63CF\u8FF0\u60A8\u7684\u610F\u89C1\u6216\u5EFA\u8BAE\uFF08100\u5B57\u4EE5\u5185\uFF09",
        value: content,
        onInput: function onInput(e) {
          return setContent(e.detail.value);
        },
        maxlength: 100,
        disabled: cooldown
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
        className: "char-count",
        children: [content.length, "/100"]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
      className: "submit-area",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Button, {
        className: "submit-btn",
        onClick: handleSubmit,
        loading: loading,
        disabled: loading || cooldown,
        children: "\u63D0\u4EA4\u53CD\u9988"
      })
    })]
  });
}

/***/ }),

/***/ "./src/pages/feedback/feedback.tsx":
/*!*****************************************!*\
  !*** ./src/pages/feedback/feedback.tsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/dsl/common.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_feedback_feedback_feedback_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/feedback/feedback!./feedback.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/feedback/feedback!./src/pages/feedback/feedback.tsx");


var config = {"navigationBarTitleText":"意见反馈"};



var taroOption = (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_feedback_feedback_feedback_tsx__WEBPACK_IMPORTED_MODULE_0__["default"], 'pages/feedback/feedback', {root:{cn:[]}}, config || {})
if (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_feedback_feedback_feedback_tsx__WEBPACK_IMPORTED_MODULE_0__["default"] && _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_feedback_feedback_feedback_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors) {
  taroOption.behaviors = (taroOption.behaviors || []).concat(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_feedback_feedback_feedback_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors)
}
var inst = Page(taroOption)



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_feedback_feedback_feedback_tsx__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/feedback/feedback.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=feedback.js.map