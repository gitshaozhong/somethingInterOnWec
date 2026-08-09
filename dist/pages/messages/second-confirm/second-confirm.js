"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/messages/second-confirm/second-confirm"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/messages/second-confirm/second-confirm!./src/pages/messages/second-confirm/second-confirm.tsx":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/messages/second-confirm/second-confirm!./src/pages/messages/second-confirm/second-confirm.tsx ***!
  \**********************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SecondConfirmPage; }
/* harmony export */ });
/* harmony import */ var E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regenerator.js */ "./node_modules/@babel/runtime/helpers/esm/regenerator.js");
/* harmony import */ var E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_invitations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/invitations */ "./src/services/invitations.ts");
/* harmony import */ var _services_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/notifications */ "./src/services/notifications.ts");
/* harmony import */ var _stores_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../stores/user */ "./src/stores/user.ts");
/* harmony import */ var _stores_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../stores/app */ "./src/stores/app.ts");
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/Loading */ "./src/components/Loading.tsx");
/* harmony import */ var _components_Empty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/Empty */ "./src/components/Empty.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");














function SecondConfirmPage() {
  var _useUserStore = (0,_stores_user__WEBPACK_IMPORTED_MODULE_4__.useUserStore)(),
    user = _useUserStore.user;
  var _useAppStore = (0,_stores_app__WEBPACK_IMPORTED_MODULE_5__.useAppStore)(),
    setUnreadCount = _useAppStore.setUnreadCount;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_useState, 2),
    items = _useState2[0],
    setItems = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState4 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  var fetchMessages = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(/*#__PURE__*/(0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_10__["default"])(/*#__PURE__*/(0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_11__["default"])().m(function _callee() {
    var res, _t;
    return (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_11__["default"])().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          if (user) {
            _context.n = 1;
            break;
          }
          return _context.a(2);
        case 1:
          setLoading(true);
          _context.p = 2;
          _context.n = 3;
          return _services_invitations__WEBPACK_IMPORTED_MODULE_2__.invitationsService.list();
        case 3:
          res = _context.v;
          if (res.ok) {
            // 二次确认：orderStatus = practice_pending
            setItems((res.items || []).filter(function (i) {
              return i.orderStatus === "practice_pending";
            }));
          }
          _context.n = 5;
          break;
        case 4:
          _context.p = 4;
          _t = _context.v;
          console.error("[second-confirm] 获取失败:", _t);
        case 5:
          _context.p = 5;
          setLoading(false);
          return _context.f(5);
        case 6:
          return _context.a(2);
      }
    }, _callee, null, [[2, 4, 5, 6]]);
  })), [user]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetchMessages();
  }, [fetchMessages]);
  (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__.useDidShow)(function () {
    fetchMessages();
  });
  var formatDate = function formatDate(dateStr) {
    if (!dateStr) return "—";
    var d = new Date(dateStr);
    return "".concat(d.getMonth() + 1, "/").concat(d.getDate(), " ").concat(String(d.getHours()).padStart(2, "0"), ":").concat(String(d.getMinutes()).padStart(2, "0"));
  };
  var goOrderDetail = function goOrderDetail(id) {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
      url: "/pages/order-detail/order-detail?id=".concat(id)
    });
  };
  var getMyRole = function getMyRole(item) {
    var isReceived = item.toUserId === user.id;
    if (item.availabilityId) {
      return isReceived ? "coach" : "student";
    }
    return isReceived ? "student" : "coach";
  };
  var handleConfirmPractice = /*#__PURE__*/function () {
    var _ref2 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_10__["default"])(/*#__PURE__*/(0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_11__["default"])().m(function _callee2(item) {
      var res, unreadRes, _t2, _t3;
      return (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_11__["default"])().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            _context2.p = 0;
            _context2.n = 1;
            return _services_invitations__WEBPACK_IMPORTED_MODULE_2__.invitationsService.confirmPractice(item.id);
          case 1:
            res = _context2.v;
            if (!res.ok) {
              _context2.n = 5;
              break;
            }
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: res.bothConfirmed ? "双方已确认，订单进行中" : "已确认练球",
              icon: "success"
            });
            fetchMessages();
            _context2.p = 2;
            _context2.n = 3;
            return _services_notifications__WEBPACK_IMPORTED_MODULE_3__.notificationsService.unreadCount();
          case 3:
            unreadRes = _context2.v;
            if (unreadRes.ok) setUnreadCount(unreadRes.count || 0);
            _context2.n = 5;
            break;
          case 4:
            _context2.p = 4;
            _t2 = _context2.v;
          case 5:
            _context2.n = 7;
            break;
          case 6:
            _context2.p = 6;
            _t3 = _context2.v;
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: (_t3 === null || _t3 === void 0 ? void 0 : _t3.message) || "操作失败",
              icon: "none"
            });
          case 7:
            return _context2.a(2);
        }
      }, _callee2, null, [[2, 4], [0, 6]]);
    }));
    return function handleConfirmPractice(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  if (!user) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
      className: "page-confirm",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_Empty__WEBPACK_IMPORTED_MODULE_7__["default"], {
        text: "\u8BF7\u5148\u767B\u5F55"
      })
    });
  }
  var renderItem = function renderItem(item) {
    var isReceived = item.toUserId === user.id;
    var peerName = isReceived ? item.fromUserName : item.toUserName;
    var peerAvatar = isReceived ? item.fromUserAvatar : item.toUserAvatar;
    var myRole = getMyRole(item);
    var myConfirmed = myRole === "student" ? item.studentConfirmedAt != null : item.coachConfirmedAt != null;
    var peerConfirmed = myRole === "student" ? item.coachConfirmedAt != null : item.studentConfirmedAt != null;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
      className: "msg-card",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
        className: "msg-header",
        onClick: function onClick() {
          return goOrderDetail(item.id);
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
          className: "msg-user-info",
          children: [peerAvatar ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Image, {
            src: peerAvatar,
            className: "msg-avatar",
            mode: "aspectFill"
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
            className: "msg-avatar msg-avatar-placeholder",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Text, {
              children: (peerName || "?")[0]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
            className: "msg-user-meta",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Text, {
              className: "msg-user-name",
              children: peerName
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Text, {
              className: "msg-source",
              children: item.sourceTitle
            }), item.orderNo && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Text, {
              className: "msg-order-no",
              children: item.orderNo
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
          className: "msg-badge-warn",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Text, {
            children: "\u5F85\u786E\u8BA4\u7EC3\u7403"
          })
        })]
      }), item.peerPhone && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
        className: "msg-phone-box",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Text, {
          className: "msg-phone-label",
          children: "\u5BF9\u65B9\u624B\u673A\u53F7"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Text, {
          className: "msg-phone",
          children: ["\uD83D\uDCDE ", item.peerPhone]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
        className: "msg-confirm-status",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Text, {
          className: myConfirmed ? "confirm-tag done" : "confirm-tag",
          children: myConfirmed ? "✓ 我已确认" : "○ 我未确认"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Text, {
          className: peerConfirmed ? "confirm-tag done" : "confirm-tag",
          children: peerConfirmed ? "✓ 对方已确认" : "○ 对方未确认"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
        className: "msg-time-row",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Text, {
          className: "msg-time",
          children: ["\u540C\u610F\u65F6\u95F4\uFF1A", formatDate(item.acceptedAt)]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
        className: "msg-footer",
        children: [!myConfirmed && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
          className: "respond-btns",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
            className: "respond-btn accept",
            onClick: function onClick() {
              return handleConfirmPractice(item);
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Text, {
              children: "\u786E\u8BA4\u7EC3\u7403"
            })
          })
        }), myConfirmed && !peerConfirmed && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Text, {
          className: "msg-hint",
          children: "\u5DF2\u786E\u8BA4\uFF0C\u7B49\u5F85\u5BF9\u65B9\u786E\u8BA4\u7EC3\u7403\u2026"
        })]
      })]
    }, item.id);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
    className: "page-confirm",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.ScrollView, {
      scrollY: true,
      className: "confirm-scroll",
      enhanced: true,
      showScrollbar: false,
      children: [loading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_6__["default"], {}) : items.length === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_Empty__WEBPACK_IMPORTED_MODULE_7__["default"], {
        text: "\u6682\u65E0\u7B2C\u4E8C\u6B21\u786E\u8BA4\u6D88\u606F"
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
        className: "list",
        children: items.map(renderItem)
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
        className: "safe-bottom"
      })]
    })
  });
}

/***/ }),

/***/ "./src/pages/messages/second-confirm/second-confirm.tsx":
/*!**************************************************************!*\
  !*** ./src/pages/messages/second-confirm/second-confirm.tsx ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/dsl/common.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_messages_second_confirm_second_confirm_second_confirm_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !!../../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/messages/second-confirm/second-confirm!./second-confirm.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/messages/second-confirm/second-confirm!./src/pages/messages/second-confirm/second-confirm.tsx");


var config = {"navigationBarTitleText":"活动订单二次确认","navigationBarBackgroundColor":"#ffffff","navigationBarTextStyle":"black","backgroundColor":"#f5f7fa"};



var taroOption = (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_messages_second_confirm_second_confirm_second_confirm_tsx__WEBPACK_IMPORTED_MODULE_0__["default"], 'pages/messages/second-confirm/second-confirm', {root:{cn:[]}}, config || {})
if (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_messages_second_confirm_second_confirm_second_confirm_tsx__WEBPACK_IMPORTED_MODULE_0__["default"] && _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_messages_second_confirm_second_confirm_second_confirm_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors) {
  taroOption.behaviors = (taroOption.behaviors || []).concat(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_messages_second_confirm_second_confirm_second_confirm_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors)
}
var inst = Page(taroOption)



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_messages_second_confirm_second_confirm_second_confirm_tsx__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/messages/second-confirm/second-confirm.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=second-confirm.js.map