"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/my-availabilities/my-availabilities"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/my-availabilities/my-availabilities!./src/pages/my-availabilities/my-availabilities.tsx":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/my-availabilities/my-availabilities!./src/pages/my-availabilities/my-availabilities.tsx ***!
  \****************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MyAvailabilities; }
/* harmony export */ });
/* harmony import */ var E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regenerator.js */ "./node_modules/@babel/runtime/helpers/esm/regenerator.js");
/* harmony import */ var E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_availabilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/availabilities */ "./src/services/availabilities.ts");
/* harmony import */ var _services_demands__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/demands */ "./src/services/demands.ts");
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Loading */ "./src/components/Loading.tsx");
/* harmony import */ var _components_Empty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Empty */ "./src/components/Empty.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");













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
var COURT_LABEL = {
  student: "学员订场",
  coach: "陪练订场",
  negotiate: "协商订场"
};
function formatTime(start, end) {
  if (start == null || end == null) return "时间待定";
  return "".concat(start, ":00-").concat(end, ":00");
}
function formatPrice(min, max) {
  if (min == null && max == null) return "价格面议";
  if (min != null && max != null) return "".concat(min, "-").concat(max, "\u5143/\u65F6");
  return "".concat(min !== null && min !== void 0 ? min : max, "\u5143/\u65F6");
}
function formatBudget(min, max) {
  if (min == null && max == null) return "预算面议";
  if (min != null && max != null) return "".concat(min, "-").concat(max, "\u5143/\u65F6");
  return "".concat(min !== null && min !== void 0 ? min : max, "\u5143/\u65F6");
}
function MyAvailabilities() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("student"),
    _useState2 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_useState, 2),
    activeTab = _useState2[0],
    setActiveTab = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_useState3, 2),
    coachList = _useState4[0],
    setCoachList = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState6 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_useState5, 2),
    studentList = _useState6[0],
    setStudentList = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState8 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_useState7, 2),
    loading = _useState8[0],
    setLoading = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState0 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_useState9, 2),
    operatingId = _useState0[0],
    setOperatingId = _useState0[1];
  var fetchStudentList = /*#__PURE__*/function () {
    var _ref = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__["default"])(/*#__PURE__*/(0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_9__["default"])().m(function _callee() {
      var res, _t;
      return (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_9__["default"])().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            setLoading(true);
            _context.p = 1;
            _context.n = 2;
            return _services_demands__WEBPACK_IMPORTED_MODULE_3__.demandsService.mine();
          case 2:
            res = _context.v;
            if (res.ok) {
              setStudentList(res.items || []);
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
    return function fetchStudentList() {
      return _ref.apply(this, arguments);
    };
  }();
  var fetchCoachList = /*#__PURE__*/function () {
    var _ref2 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__["default"])(/*#__PURE__*/(0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_9__["default"])().m(function _callee2() {
      var res, _t2;
      return (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_9__["default"])().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            setLoading(true);
            _context2.p = 1;
            _context2.n = 2;
            return _services_availabilities__WEBPACK_IMPORTED_MODULE_2__.availabilitiesService.mine();
          case 2:
            res = _context2.v;
            if (res.ok) {
              setCoachList(res.items || []);
            }
            _context2.n = 4;
            break;
          case 3:
            _context2.p = 3;
            _t2 = _context2.v;
            console.error("获取我的档期失败:", _t2);
          case 4:
            _context2.p = 4;
            setLoading(false);
            return _context2.f(4);
          case 5:
            return _context2.a(2);
        }
      }, _callee2, null, [[1, 3, 4, 5]]);
    }));
    return function fetchCoachList() {
      return _ref2.apply(this, arguments);
    };
  }();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (activeTab === "student") fetchStudentList();else fetchCoachList();
  }, [activeTab]);
  (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__.useDidShow)(function () {
    if (activeTab === "student") fetchStudentList();else fetchCoachList();
  });
  var switchTab = function switchTab(tab) {
    if (tab === activeTab) return;
    setActiveTab(tab);
  };
  var goDetail = function goDetail(id) {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
      url: activeTab === "student" ? "/pages/demand-detail/demand-detail?id=".concat(id) : "/pages/availability-detail/availability-detail?id=".concat(id)
    });
  };
  var handleClose = /*#__PURE__*/function () {
    var _ref3 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__["default"])(/*#__PURE__*/(0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_9__["default"])().m(function _callee3(id, e) {
      var res, result, _t3, _t4;
      return (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_9__["default"])().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            e.stopPropagation();
            _context3.n = 1;
            return _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showModal({
              title: activeTab === "student" ? "关闭需求" : "下架档期",
              content: activeTab === "student" ? "确定要关闭该需求吗？关闭后陪练员将无法看到。" : "确定要下架该档期吗？下架后学员将无法看到。"
            });
          case 1:
            res = _context3.v;
            if (res.confirm) {
              _context3.n = 2;
              break;
            }
            return _context3.a(2);
          case 2:
            setOperatingId(id);
            _context3.p = 3;
            if (!(activeTab === "student")) {
              _context3.n = 5;
              break;
            }
            _context3.n = 4;
            return _services_demands__WEBPACK_IMPORTED_MODULE_3__.demandsService.close(id);
          case 4:
            _t3 = _context3.v;
            _context3.n = 7;
            break;
          case 5:
            _context3.n = 6;
            return _services_availabilities__WEBPACK_IMPORTED_MODULE_2__.availabilitiesService.close(id);
          case 6:
            _t3 = _context3.v;
          case 7:
            result = _t3;
            if (result.ok) {
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
                title: activeTab === "student" ? "已关闭" : "已下架",
                icon: "success"
              });
              if (activeTab === "student") {
                setStudentList(function (prev) {
                  return prev.map(function (it) {
                    return it.id === id ? (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_10__["default"])((0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_10__["default"])({}, it), {}, {
                      status: "closed"
                    }) : it;
                  });
                });
              } else {
                setCoachList(function (prev) {
                  return prev.map(function (it) {
                    return it.id === id ? (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_10__["default"])((0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_10__["default"])({}, it), {}, {
                      status: "closed"
                    }) : it;
                  });
                });
              }
            }
            _context3.n = 9;
            break;
          case 8:
            _context3.p = 8;
            _t4 = _context3.v;
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: (_t4 === null || _t4 === void 0 ? void 0 : _t4.message) || "操作失败",
              icon: "none"
            });
          case 9:
            _context3.p = 9;
            setOperatingId(null);
            return _context3.f(9);
          case 10:
            return _context3.a(2);
        }
      }, _callee3, null, [[3, 8, 9, 10]]);
    }));
    return function handleClose(_x, _x2) {
      return _ref3.apply(this, arguments);
    };
  }();
  var renderCoachLocation = function renderCoachLocation(item) {
    if (item.tempLocation) return item.tempLocation;
    if (item.venueId) return "已选球馆";
    return "地点待定";
  };
  var renderStudentLocation = function renderStudentLocation(item) {
    if (item.locationName) return item.locationName;
    return "地点待定";
  };
  var renderCoachList = function renderCoachList() {
    return coachList.length === 0 && !loading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_Empty__WEBPACK_IMPORTED_MODULE_5__["default"], {
      text: "\u6682\u65E0\u966A\u7EC3\u6863\u671F\uFF0C\u53BB\u53D1\u5E03\u4E00\u4E2A\u5427"
    }) : coachList.map(function (item) {
      var statusCfg = STATUS_MAP[item.status] || STATUS_MAP.open;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
        className: "card",
        onClick: function onClick() {
          return goDetail(item.id);
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
          className: "card-header",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
            className: "card-date",
            children: item.playDate
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
            className: "status-badge ".concat(statusCfg.className),
            children: statusCfg.label
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
          className: "card-body",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
            className: "info-row",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
              className: "info-label",
              children: "\u65F6\u6BB5"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
              className: "info-value",
              children: [TIME_SLOT_LABEL[item.timeSlot] || item.timeSlot, " ", formatTime(item.startHour, item.endHour)]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
            className: "info-row",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
              className: "info-label",
              children: "\u7403\u9986"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
              className: "info-value",
              children: renderCoachLocation(item)
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
            className: "info-row",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
              className: "info-label",
              children: "\u8BA2\u573A"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
              className: "info-value",
              children: COURT_LABEL[item.courtBookedBy] || "协商订场"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
            className: "info-row",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
              className: "info-label",
              children: "\u4EF7\u4F4D"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
              className: "info-value price-value",
              children: formatPrice(item.priceMin, item.priceMax)
            })]
          }), item.note && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
            className: "info-row",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
              className: "info-label",
              children: "\u5907\u6CE8"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
              className: "info-value note-text",
              children: item.note
            })]
          })]
        }), item.status === "open" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
          className: "card-footer",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
            className: "close-btn ".concat(operatingId === item.id ? "loading" : ""),
            onClick: function onClick(e) {
              return handleClose(item.id, e);
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
              children: operatingId === item.id ? "处理中..." : "下架"
            })
          })
        })]
      }, item.id);
    });
  };
  var renderStudentList = function renderStudentList() {
    return studentList.length === 0 && !loading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_Empty__WEBPACK_IMPORTED_MODULE_5__["default"], {
      text: "\u6682\u65E0\u5B66\u5458\u9700\u6C42\uFF0C\u53BB\u53D1\u5E03\u4E00\u4E2A\u5427"
    }) : studentList.map(function (item) {
      var statusCfg = STATUS_MAP[item.status] || STATUS_MAP.open;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
        className: "card",
        onClick: function onClick() {
          return goDetail(item.id);
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
          className: "card-header",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
            className: "card-date",
            children: item.playDate
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
            className: "status-badge ".concat(statusCfg.className),
            children: statusCfg.label
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
          className: "card-body",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
            className: "info-row",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
              className: "info-label",
              children: "\u65F6\u6BB5"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
              className: "info-value",
              children: [TIME_SLOT_LABEL[item.timeSlot] || item.timeSlot, " ", formatTime(item.startHour, item.endHour)]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
            className: "info-row",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
              className: "info-label",
              children: "\u5730\u70B9"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
              className: "info-value",
              children: renderStudentLocation(item)
            })]
          }), item.expectedLevel != null && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
            className: "info-row",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
              className: "info-label",
              children: "\u671F\u671B"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
              className: "info-value",
              children: ["Lv.", item.expectedLevel, "+ \u966A\u7EC3"]
            })]
          }), item.studentLevel != null && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
            className: "info-row",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
              className: "info-label",
              children: "\u81EA\u8EAB"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
              className: "info-value",
              children: ["Lv.", item.studentLevel]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
            className: "info-row",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
              className: "info-label",
              children: "\u8BA2\u573A"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
              className: "info-value",
              children: COURT_LABEL[item.courtBookedBy] || "协商订场"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
            className: "info-row",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
              className: "info-label",
              children: "\u9884\u7B97"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
              className: "info-value price-value",
              children: formatBudget(item.budgetMin, item.budgetMax)
            })]
          }), item.note && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
            className: "info-row",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
              className: "info-label",
              children: "\u5907\u6CE8"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
              className: "info-value note-text",
              children: item.note
            })]
          })]
        }), item.status === "open" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
          className: "card-footer",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
            className: "close-btn ".concat(operatingId === item.id ? "loading" : ""),
            onClick: function onClick(e) {
              return handleClose(item.id, e);
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
              children: operatingId === item.id ? "处理中..." : "关闭需求"
            })
          })
        })]
      }, item.id);
    });
  };
  var totalCount = activeTab === "student" ? studentList.length : coachList.length;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
    className: "page-my-availabilities",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
      className: "page-header",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
        className: "page-title",
        children: "\u6211\u7684\u53D1\u5E03"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
      className: "post-tab-bar",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
        className: "post-tab-item ".concat(activeTab === "student" ? "active" : ""),
        onClick: function onClick() {
          return switchTab("student");
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
          children: "\u5B66\u5458\u9700\u6C42"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
        className: "post-tab-item ".concat(activeTab === "coach" ? "active" : ""),
        onClick: function onClick() {
          return switchTab("coach");
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
          children: "\u966A\u7EC3\u6863\u671F"
        })
      })]
    }), loading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_4__["default"], {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.ScrollView, {
      className: "list-scroll",
      scrollY: true,
      children: [activeTab === "student" ? renderStudentList() : renderCoachList(), totalCount > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
        className: "list-bottom",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
          children: ["\u5171", totalCount, "\u6761", activeTab === "student" ? "需求" : "档期"]
        })
      })]
    })]
  });
}

/***/ }),

/***/ "./src/pages/my-availabilities/my-availabilities.tsx":
/*!***********************************************************!*\
  !*** ./src/pages/my-availabilities/my-availabilities.tsx ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/dsl/common.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_my_availabilities_my_availabilities_my_availabilities_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/my-availabilities/my-availabilities!./my-availabilities.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/my-availabilities/my-availabilities!./src/pages/my-availabilities/my-availabilities.tsx");


var config = {"navigationBarTitleText":"我的档期"};



var taroOption = (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_my_availabilities_my_availabilities_my_availabilities_tsx__WEBPACK_IMPORTED_MODULE_0__["default"], 'pages/my-availabilities/my-availabilities', {root:{cn:[]}}, config || {})
if (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_my_availabilities_my_availabilities_my_availabilities_tsx__WEBPACK_IMPORTED_MODULE_0__["default"] && _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_my_availabilities_my_availabilities_my_availabilities_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors) {
  taroOption.behaviors = (taroOption.behaviors || []).concat(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_my_availabilities_my_availabilities_my_availabilities_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors)
}
var inst = Page(taroOption)



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_my_availabilities_my_availabilities_my_availabilities_tsx__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/my-availabilities/my-availabilities.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=my-availabilities.js.map