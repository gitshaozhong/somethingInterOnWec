"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/orders/orders"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/orders/orders!./src/pages/orders/orders.tsx":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/orders/orders!./src/pages/orders/orders.tsx ***!
  \********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Orders; }
/* harmony export */ });
/* harmony import */ var E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regenerator.js */ "./node_modules/@babel/runtime/helpers/esm/regenerator.js");
/* harmony import */ var E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_invitations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/invitations */ "./src/services/invitations.ts");
/* harmony import */ var _stores_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../stores/user */ "./src/stores/user.ts");
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Loading */ "./src/components/Loading.tsx");
/* harmony import */ var _components_Empty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Empty */ "./src/components/Empty.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");












var ORDER_TABS = [{
  key: "all",
  label: "全部"
}, {
  key: "pending",
  label: "待确认"
}, {
  key: "in_progress",
  label: "进行中"
}, {
  key: "completed",
  label: "已完成"
}];
function Orders() {
  var _useUserStore = (0,_stores_user__WEBPACK_IMPORTED_MODULE_3__.useUserStore)(),
    user = _useUserStore.user;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_useState, 2),
    orders = _useState2[0],
    setOrders = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState4 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  // 从 URL 参数初始化 tab（profile "订单管理" 网格跳转携带 status）
  var initialTab = function (_Taro$getCurrentInsta) {
    var params = (_Taro$getCurrentInsta = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().getCurrentInstance().router) === null || _Taro$getCurrentInsta === void 0 ? void 0 : _Taro$getCurrentInsta.params;
    var s = params === null || params === void 0 ? void 0 : params.status;
    return s && ORDER_TABS.some(function (t) {
      return t.key === s;
    }) ? s : "all";
  }();
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialTab),
    _useState6 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_useState5, 2),
    tab = _useState6[0],
    setTab = _useState6[1];
  var fetchOrders = /*#__PURE__*/function () {
    var _ref = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__["default"])(/*#__PURE__*/(0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_9__["default"])().m(function _callee() {
      var res, _t;
      return (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_9__["default"])().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            setLoading(true);
            _context.p = 1;
            _context.n = 2;
            return _services_invitations__WEBPACK_IMPORTED_MODULE_2__.invitationsService.orders();
          case 2:
            res = _context.v;
            if (res.ok) {
              setOrders(res.items || []);
            }
            _context.n = 4;
            break;
          case 3:
            _context.p = 3;
            _t = _context.v;
            console.error("获取订单失败:", _t);
          case 4:
            _context.p = 4;
            setLoading(false);
            return _context.f(4);
          case 5:
            return _context.a(2);
        }
      }, _callee, null, [[1, 3, 4, 5]]);
    }));
    return function fetchOrders() {
      return _ref.apply(this, arguments);
    };
  }();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetchOrders();
  }, []);
  (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__.useDidShow)(function () {
    fetchOrders();
  });
  if (!user) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
      className: "page-orders",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_Empty__WEBPACK_IMPORTED_MODULE_5__["default"], {
        text: "\u8BF7\u5148\u767B\u5F55"
      })
    });
  }
  var filtered = tab === "all" ? orders : tab === "pending" ? orders.filter(function (o) {
    return o.orderStatus === null && o.status === "accepted";
  }) : orders.filter(function (o) {
    return o.orderStatus === tab;
  });
  var orderStatusLabel = function orderStatusLabel(o) {
    if (o.orderStatus === "completed") return "已完成";
    if (o.orderStatus === "closed") return "已关闭";
    if (o.orderStatus === "in_progress") return "进行中";
    if (o.orderStatus === null && o.status === "accepted") {
      if (o.studentConfirmedAt && o.coachConfirmedAt) return "待练球";
      return "待确认";
    }
    return o.status;
  };
  var orderStatusColor = function orderStatusColor(o) {
    if (o.orderStatus === "completed") return "#52c41a";
    if (o.orderStatus === "in_progress") return "#1677ff";
    return "#faad14";
  };
  var formatTime = function formatTime(s, e) {
    if (s == null || e == null) return "";
    return "".concat(s, ":00-").concat(e, ":00");
  };
  var timeLabel = function timeLabel(slot) {
    var map = {
      morning: "上午",
      afternoon: "下午",
      evening: "晚上"
    };
    return map[slot] || "";
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
    className: "page-orders",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
      className: "tab-scroll",
      children: ORDER_TABS.map(function (t) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
          className: "tab-chip ".concat(tab === t.key ? "active" : ""),
          onClick: function onClick() {
            return setTab(t.key);
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
            children: t.label
          })
        }, t.key);
      })
    }), loading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_4__["default"], {}) : filtered.length === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_Empty__WEBPACK_IMPORTED_MODULE_5__["default"], {
      text: "\u6682\u65E0\u8BA2\u5355"
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.ScrollView, {
      className: "list-scroll",
      scrollY: true,
      children: filtered.map(function (order) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
          className: "order-card",
          onClick: function onClick() {
            return _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
              url: "/pages/order-detail/order-detail?id=".concat(order.id)
            });
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
            className: "order-header",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
              className: "order-user-info",
              children: [order.peerAvatar ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
                className: "order-avatar",
                style: {
                  backgroundImage: "url(".concat(order.peerAvatar, ")")
                }
              }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
                className: "order-avatar order-avatar-placeholder",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
                  children: (order.peerName || "?")[0]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
                  className: "order-peer-name",
                  children: order.peerName
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
                  className: "order-role-tag",
                  children: order.myRole === "student" ? "我是学员" : "我是陪练"
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
              style: {
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                gap: 4
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
                style: {
                  fontSize: 12,
                  color: orderStatusColor(order),
                  fontWeight: 600
                },
                children: orderStatusLabel(order)
              }), order.orderNo && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
                className: "order-no-text",
                children: order.orderNo
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
            className: "order-body",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
              className: "order-info-row",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
                className: "order-info-label",
                children: "\u65E5\u671F"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
                className: "order-info-value",
                children: order.playDate || "待定"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
              className: "order-info-row",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
                className: "order-info-label",
                children: "\u65F6\u95F4"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
                className: "order-info-value",
                children: formatTime(order.startHour, order.endHour)
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
              className: "order-info-row",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
                className: "order-info-label",
                children: "\u6765\u6E90"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
                className: "order-info-value",
                children: order.sourceTitle
              })]
            })]
          }), order.checkIn && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
            className: "order-checkin",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
              className: "checkin-badge ".concat(order.checkIn.validCheckIn ? "valid" : "invalid"),
              children: order.checkIn.validCheckIn ? "已打卡" : "无效打卡"
            })
          }), order.orderStatus === "completed" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
            className: "order-review-status",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
              className: "review-tag",
              children: order.myReviewDone ? "已评价" : "待评价"
            })
          })]
        }, order.id);
      })
    })]
  });
}

/***/ }),

/***/ "./src/pages/orders/orders.tsx":
/*!*************************************!*\
  !*** ./src/pages/orders/orders.tsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/dsl/common.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_orders_orders_orders_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/orders/orders!./orders.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/orders/orders!./src/pages/orders/orders.tsx");


var config = {"navigationBarTitleText":"我的订单"};



var taroOption = (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_orders_orders_orders_tsx__WEBPACK_IMPORTED_MODULE_0__["default"], 'pages/orders/orders', {root:{cn:[]}}, config || {})
if (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_orders_orders_orders_tsx__WEBPACK_IMPORTED_MODULE_0__["default"] && _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_orders_orders_orders_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors) {
  taroOption.behaviors = (taroOption.behaviors || []).concat(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_orders_orders_orders_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors)
}
var inst = Page(taroOption)



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_orders_orders_orders_tsx__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/orders/orders.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=orders.js.map