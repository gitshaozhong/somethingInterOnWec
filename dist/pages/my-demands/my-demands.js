"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/my-demands/my-demands"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/my-demands/my-demands!./src/pages/my-demands/my-demands.tsx":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/my-demands/my-demands!./src/pages/my-demands/my-demands.tsx ***!
  \************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MyDemands; }
/* harmony export */ });
/* harmony import */ var E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regenerator.js */ "./node_modules/@babel/runtime/helpers/esm/regenerator.js");
/* harmony import */ var E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_demands__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/demands */ "./src/services/demands.ts");
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Loading */ "./src/components/Loading.tsx");
/* harmony import */ var _components_Empty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Empty */ "./src/components/Empty.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");












var TIME_SLOT_LABEL = {
  morning: "上午",
  afternoon: "下午",
  evening: "晚上"
};
var STATUS_MAP = {
  open: {
    label: "进行中",
    className: "status-open"
  },
  closed: {
    label: "已关闭",
    className: "status-closed"
  },
  expired: {
    label: "已过期",
    className: "status-expired"
  }
};
function formatTime(start, end) {
  if (start == null || end == null) return "时间待定";
  return "".concat(start, ":00-").concat(end, ":00");
}
function formatBudget(min, max) {
  if (min == null && max == null) return "预算面议";
  if (min != null && max != null) return "\xA5".concat(min, "-").concat(max, "/\u65F6");
  return "\xA5".concat(min !== null && min !== void 0 ? min : max, "/\u65F6");
}
function MyDemands() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState, 2),
    items = _useState2[0],
    setItems = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState4 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState6 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState5, 2),
    closingId = _useState6[0],
    setClosingId = _useState6[1];
  var fetchList = /*#__PURE__*/function () {
    var _ref = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__["default"])(/*#__PURE__*/(0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_8__["default"])().m(function _callee() {
      var res, _t;
      return (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_8__["default"])().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            setLoading(true);
            _context.p = 1;
            _context.n = 2;
            return _services_demands__WEBPACK_IMPORTED_MODULE_2__.demandsService.mine();
          case 2:
            res = _context.v;
            if (res.ok) {
              setItems(res.items || []);
            }
            _context.n = 4;
            break;
          case 3:
            _context.p = 3;
            _t = _context.v;
            console.error("获取我的需求失败:", _t);
          case 4:
            _context.p = 4;
            setLoading(false);
            return _context.f(4);
          case 5:
            return _context.a(2);
        }
      }, _callee, null, [[1, 3, 4, 5]]);
    }));
    return function fetchList() {
      return _ref.apply(this, arguments);
    };
  }();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetchList();
  }, []);
  (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__.useDidShow)(function () {
    fetchList();
  });
  var goDetail = function goDetail(id) {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
      url: "/pages/demand-detail/demand-detail?id=".concat(id)
    });
  };
  var handleClose = /*#__PURE__*/function () {
    var _ref2 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__["default"])(/*#__PURE__*/(0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_8__["default"])().m(function _callee2(id, e) {
      var res, result, _t2;
      return (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_8__["default"])().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            e.stopPropagation();
            _context2.n = 1;
            return _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showModal({
              title: "关闭需求",
              content: "确定要关闭该需求吗？关闭后陪练将无法看到。"
            });
          case 1:
            res = _context2.v;
            if (res.confirm) {
              _context2.n = 2;
              break;
            }
            return _context2.a(2);
          case 2:
            setClosingId(id);
            _context2.p = 3;
            _context2.n = 4;
            return _services_demands__WEBPACK_IMPORTED_MODULE_2__.demandsService.close(id);
          case 4:
            result = _context2.v;
            if (result.ok) {
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
                title: "已关闭",
                icon: "success"
              });
              setItems(function (prev) {
                return prev.map(function (it) {
                  return it.id === id ? (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_9__["default"])((0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_9__["default"])({}, it), {}, {
                    status: "closed"
                  }) : it;
                });
              });
            }
            _context2.n = 6;
            break;
          case 5:
            _context2.p = 5;
            _t2 = _context2.v;
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: (_t2 === null || _t2 === void 0 ? void 0 : _t2.message) || "操作失败",
              icon: "none"
            });
          case 6:
            _context2.p = 6;
            setClosingId(null);
            return _context2.f(6);
          case 7:
            return _context2.a(2);
        }
      }, _callee2, null, [[3, 5, 6, 7]]);
    }));
    return function handleClose(_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
    className: "page-my-demands",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
      className: "page-header",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
        className: "page-title",
        children: "\u6211\u7684\u9700\u6C42"
      })
    }), loading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_3__["default"], {}) : items.length === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_Empty__WEBPACK_IMPORTED_MODULE_4__["default"], {
      text: "\u6682\u65E0\u9700\u6C42\uFF0C\u53BB\u53D1\u5E03\u4E00\u4E2A\u5427"
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.ScrollView, {
      className: "list-scroll",
      scrollY: true,
      children: [items.map(function (item) {
        var statusCfg = STATUS_MAP[item.status] || STATUS_MAP.open;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
          className: "card",
          onClick: function onClick() {
            return goDetail(item.id);
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
            className: "card-header",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
              className: "card-date",
              children: item.playDate
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
              className: "status-badge ".concat(statusCfg.className),
              children: statusCfg.label
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
            className: "card-body",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
              className: "info-row",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
                className: "info-label",
                children: "\u65F6\u6BB5"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
                className: "info-value",
                children: [TIME_SLOT_LABEL[item.timeSlot] || item.timeSlot, " ", formatTime(item.startHour, item.endHour)]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
              className: "info-row",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
                className: "info-label",
                children: "\u5730\u70B9"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
                className: "info-value",
                children: item.locationName || "地点待定"
              })]
            }), item.expectedLevel != null && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
              className: "info-row",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
                className: "info-label",
                children: "\u671F\u671B"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
                className: "info-value",
                children: ["Lv.", item.expectedLevel, "+ \u966A\u7EC3"]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
              className: "info-row",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
                className: "info-label",
                children: "\u9884\u7B97"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
                className: "info-value budget-value",
                children: formatBudget(item.budgetMin, item.budgetMax)
              })]
            }), item.note && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
              className: "info-row",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
                className: "info-label",
                children: "\u5907\u6CE8"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
                className: "info-value note-text",
                children: item.note
              })]
            })]
          }), item.status === "open" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
            className: "card-footer",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
              className: "close-btn ".concat(closingId === item.id ? "loading" : ""),
              onClick: function onClick(e) {
                return handleClose(item.id, e);
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
                children: closingId === item.id ? "处理中..." : "关闭"
              })
            })
          })]
        }, item.id);
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
        className: "list-bottom",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
          children: ["\u5171", items.length, "\u6761\u9700\u6C42"]
        })
      })]
    })]
  });
}

/***/ }),

/***/ "./src/pages/my-demands/my-demands.tsx":
/*!*********************************************!*\
  !*** ./src/pages/my-demands/my-demands.tsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/dsl/common.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_my_demands_my_demands_my_demands_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/my-demands/my-demands!./my-demands.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/my-demands/my-demands!./src/pages/my-demands/my-demands.tsx");


var config = {"navigationBarTitleText":"我的需求"};



var taroOption = (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_my_demands_my_demands_my_demands_tsx__WEBPACK_IMPORTED_MODULE_0__["default"], 'pages/my-demands/my-demands', {root:{cn:[]}}, config || {})
if (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_my_demands_my_demands_my_demands_tsx__WEBPACK_IMPORTED_MODULE_0__["default"] && _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_my_demands_my_demands_my_demands_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors) {
  taroOption.behaviors = (taroOption.behaviors || []).concat(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_my_demands_my_demands_my_demands_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors)
}
var inst = Page(taroOption)



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_my_demands_my_demands_my_demands_tsx__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/my-demands/my-demands.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=my-demands.js.map