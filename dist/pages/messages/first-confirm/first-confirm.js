"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/messages/first-confirm/first-confirm"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/messages/first-confirm/first-confirm!./src/pages/messages/first-confirm/first-confirm.tsx":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/messages/first-confirm/first-confirm!./src/pages/messages/first-confirm/first-confirm.tsx ***!
  \******************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ FirstConfirmPage; }
/* harmony export */ });
/* harmony import */ var E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regenerator.js */ "./node_modules/@babel/runtime/helpers/esm/regenerator.js");
/* harmony import */ var E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
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
/* harmony import */ var _components_StatusBadge__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/StatusBadge */ "./src/components/StatusBadge.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");















function FirstConfirmPage() {
  var _useUserStore = (0,_stores_user__WEBPACK_IMPORTED_MODULE_4__.useUserStore)(),
    user = _useUserStore.user;
  var _useAppStore = (0,_stores_app__WEBPACK_IMPORTED_MODULE_5__.useAppStore)(),
    setUnreadCount = _useAppStore.setUnreadCount;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_useState, 2),
    items = _useState2[0],
    setItems = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState4 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];

  // 响应弹窗
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState6 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_useState5, 2),
    showRespond = _useState6[0],
    setShowRespond = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState8 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_useState7, 2),
    respondInvId = _useState8[0],
    setRespondInvId = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("accept"),
    _useState0 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_useState9, 2),
    respondAction = _useState0[0],
    setRespondAction = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState10 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_useState1, 2),
    replyMessage = _useState10[0],
    setReplyMessage = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState12 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_useState11, 2),
    respondLoading = _useState12[0],
    setRespondLoading = _useState12[1];

  // 撤回弹窗
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState14 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_useState13, 2),
    showRevoke = _useState14[0],
    setShowRevoke = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState16 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_useState15, 2),
    revokeInvId = _useState16[0],
    setRevokeInvId = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState18 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_useState17, 2),
    revokeIsPending = _useState18[0],
    setRevokeIsPending = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState20 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_useState19, 2),
    revokeLoading = _useState20[0],
    setRevokeLoading = _useState20[1];
  var fetchMessages = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(/*#__PURE__*/(0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__["default"])(/*#__PURE__*/(0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_12__["default"])().m(function _callee() {
    var res, _t;
    return (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_12__["default"])().w(function (_context) {
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
            // 一次确认：orderStatus 为 null
            setItems((res.items || []).filter(function (i) {
              return !i.orderStatus;
            }));
          }
          _context.n = 5;
          break;
        case 4:
          _context.p = 4;
          _t = _context.v;
          console.error("[first-confirm] 获取失败:", _t);
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
  var showRealAvatar = function showRealAvatar(item) {
    if (item.orderStatus === "completed" || item.orderStatus === "closed") return false;
    return item.status === "accepted";
  };
  var openRespond = function openRespond(item, action) {
    setRespondInvId(item.id);
    setRespondAction(action);
    setReplyMessage("");
    setShowRespond(true);
  };
  var handleRespond = /*#__PURE__*/function () {
    var _ref2 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__["default"])(/*#__PURE__*/(0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_12__["default"])().m(function _callee2() {
      var res, unreadRes, _t2, _t3;
      return (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_12__["default"])().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            if (!respondLoading) {
              _context2.n = 1;
              break;
            }
            return _context2.a(2);
          case 1:
            setRespondLoading(true);
            _context2.p = 2;
            _context2.n = 3;
            return _services_invitations__WEBPACK_IMPORTED_MODULE_2__.invitationsService.respond(respondInvId, {
              action: respondAction,
              replyMessage: replyMessage.trim() || undefined
            });
          case 3:
            res = _context2.v;
            if (!res.ok) {
              _context2.n = 7;
              break;
            }
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: respondAction === "accept" ? "已同意，双方已解锁手机号" : "已婉拒邀请",
              icon: "success"
            });
            setShowRespond(false);
            fetchMessages();
            _context2.p = 4;
            _context2.n = 5;
            return _services_notifications__WEBPACK_IMPORTED_MODULE_3__.notificationsService.unreadCount();
          case 5:
            unreadRes = _context2.v;
            if (unreadRes.ok) setUnreadCount(unreadRes.count || 0);
            _context2.n = 7;
            break;
          case 6:
            _context2.p = 6;
            _t2 = _context2.v;
          case 7:
            _context2.n = 9;
            break;
          case 8:
            _context2.p = 8;
            _t3 = _context2.v;
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: (_t3 === null || _t3 === void 0 ? void 0 : _t3.message) || "操作失败",
              icon: "none"
            });
          case 9:
            _context2.p = 9;
            setRespondLoading(false);
            return _context2.f(9);
          case 10:
            return _context2.a(2);
        }
      }, _callee2, null, [[4, 6], [2, 8, 9, 10]]);
    }));
    return function handleRespond() {
      return _ref2.apply(this, arguments);
    };
  }();
  var openRevoke = function openRevoke(item) {
    setRevokeInvId(item.id);
    setRevokeIsPending(item.status === "pending");
    setShowRevoke(true);
  };
  var handleRevoke = /*#__PURE__*/function () {
    var _ref3 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__["default"])(/*#__PURE__*/(0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_12__["default"])().m(function _callee3() {
      var res, _t4;
      return (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_12__["default"])().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            if (!revokeLoading) {
              _context3.n = 1;
              break;
            }
            return _context3.a(2);
          case 1:
            setRevokeLoading(true);
            _context3.p = 2;
            _context3.n = 3;
            return _services_invitations__WEBPACK_IMPORTED_MODULE_2__.invitationsService.revoke(revokeInvId);
          case 3:
            res = _context3.v;
            if (res.ok) {
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
                title: revokeIsPending ? "已取消邀请" : "已撤回授权",
                icon: "success"
              });
              setShowRevoke(false);
              fetchMessages();
            }
            _context3.n = 5;
            break;
          case 4:
            _context3.p = 4;
            _t4 = _context3.v;
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: (_t4 === null || _t4 === void 0 ? void 0 : _t4.message) || "操作失败",
              icon: "none"
            });
          case 5:
            _context3.p = 5;
            setRevokeLoading(false);
            return _context3.f(5);
          case 6:
            return _context3.a(2);
        }
      }, _callee3, null, [[2, 4, 5, 6]]);
    }));
    return function handleRevoke() {
      return _ref3.apply(this, arguments);
    };
  }();
  if (!user) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
      className: "page-confirm",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Empty__WEBPACK_IMPORTED_MODULE_7__["default"], {
        text: "\u8BF7\u5148\u767B\u5F55"
      })
    });
  }
  var renderItem = function renderItem(item) {
    var isReceived = item.toUserId === user.id;
    var peerName = isReceived ? item.fromUserName : item.toUserName;
    var peerAvatar = isReceived ? item.fromUserAvatar : item.toUserAvatar;
    var peerRealAvatar = isReceived ? item.fromUserRealAvatar : item.toUserRealAvatar;
    var showReal = showRealAvatar(item);
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
      className: "msg-card",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
        className: "msg-header",
        onClick: function onClick() {
          return goOrderDetail(item.id);
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
          className: "msg-user-info",
          children: [showReal && peerRealAvatar ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Image, {
            src: peerRealAvatar,
            className: "msg-avatar",
            mode: "aspectFill"
          }) : peerAvatar ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Image, {
            src: peerAvatar,
            className: "msg-avatar",
            mode: "aspectFill"
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
            className: "msg-avatar msg-avatar-placeholder",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
              children: (peerName || "?")[0]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
            className: "msg-user-meta",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
              className: "msg-user-name",
              children: peerName
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
              className: "msg-source",
              children: [isReceived ? "发给我" : "我发出", " \xB7 ", item.sourceTitle]
            }), item.orderNo && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
              className: "msg-order-no",
              children: item.orderNo
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_StatusBadge__WEBPACK_IMPORTED_MODULE_8__["default"], {
          status: item.status
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
        className: "msg-body",
        children: [item.message && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
          className: "msg-text-box",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
            className: "msg-text-label",
            children: "\u5BF9\u65B9\u7559\u8A00"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
            className: "msg-text",
            children: item.message
          })]
        }), item.replyMessage && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
          className: "msg-reply-box",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
            className: "msg-reply-label",
            children: "\u56DE\u590D"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
            className: "msg-reply",
            children: item.replyMessage
          })]
        }), item.status === "accepted" && item.peerPhone && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
          className: "msg-phone-box",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
            className: "msg-phone-label",
            children: "\u5DF2\u89E3\u9501\u8054\u7CFB\u65B9\u5F0F"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
            className: "msg-phone",
            children: ["\uD83D\uDCDE ", item.peerPhone]
          }), showReal && peerRealAvatar && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Image, {
            src: peerRealAvatar,
            className: "msg-real-avatar",
            mode: "aspectFill"
          })]
        }), item.status === "accepted" && !item.peerPhone && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
          className: "msg-phone-revoked",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
            children: "\uD83D\uDCDE \u670D\u52A1\u5DF2\u5B8C\u6210\u6216\u8BA2\u5355\u5173\u95ED\uFF0C\u8054\u7CFB\u65B9\u5F0F\u5DF2\u64A4\u56DE"
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
        className: "msg-time-row",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
          className: "msg-time",
          children: ["\u53D1\u8D77\uFF1A", formatDate(item.createdAt)]
        }), item.acceptedAt && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
          className: "msg-time",
          children: ["\u540C\u610F\uFF1A", formatDate(item.acceptedAt)]
        }), item.status === "pending" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
          className: "msg-time",
          children: ["\u8FC7\u671F\uFF1A", formatDate(item.expiresAt)]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
        className: "msg-footer",
        children: [isReceived && item.status === "pending" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
          className: "respond-btns",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
            className: "respond-btn accept",
            onClick: function onClick() {
              return openRespond(item, "accept");
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
              children: "\u540C\u610F\u5E76\u89E3\u9501"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
            className: "respond-btn decline",
            onClick: function onClick() {
              return openRespond(item, "decline");
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
              children: "\u5A49\u62D2"
            })
          })]
        }), item.status === "accepted" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
          className: "respond-btns",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
            className: "respond-btn revoke",
            onClick: function onClick() {
              return openRevoke(item);
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
              children: "\u64A4\u56DE\u6388\u6743"
            })
          })
        }), !isReceived && item.status === "pending" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
          className: "respond-btns",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
            className: "msg-waiting",
            children: "\u7B49\u5F85\u5BF9\u65B9\u54CD\u5E94\u2026"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
            className: "respond-btn cancel",
            onClick: function onClick() {
              return openRevoke(item);
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
              children: "\u53D6\u6D88\u9080\u8BF7"
            })
          })]
        }), item.status === "accepted" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
          className: "msg-hint",
          children: "\u53CC\u65B9\u5DF2\u4E92\u76F8\u540C\u610F\uFF0C\u53EF\u5728\"\u6211\u7684\u8BA2\u5355\"\u4E2D\u786E\u8BA4\u7EC3\u7403"
        })]
      })]
    }, item.id);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
    className: "page-confirm",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.ScrollView, {
      scrollY: true,
      className: "confirm-scroll",
      enhanced: true,
      showScrollbar: false,
      children: [loading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_6__["default"], {}) : items.length === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Empty__WEBPACK_IMPORTED_MODULE_7__["default"], {
        text: "\u6682\u65E0\u7B2C\u4E00\u6B21\u786E\u8BA4\u6D88\u606F"
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
        className: "list",
        children: items.map(renderItem)
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
        className: "safe-bottom"
      })]
    }), showRespond && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
      className: "modal-overlay",
      onClick: function onClick() {
        return setShowRespond(false);
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
        className: "modal-content",
        onClick: function onClick(e) {
          return e.stopPropagation();
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
          className: "modal-header",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
            className: "modal-title",
            children: respondAction === "accept" ? "同意邀请？" : "婉拒邀请？"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
            className: "modal-close",
            onClick: function onClick() {
              return setShowRespond(false);
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
              children: "\u2715"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
          className: "modal-body",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
            className: "modal-hint",
            children: respondAction === "accept" ? "同意后双方将互见手机号和真人头像，对方可联系你约球哟^_^~" : "婉拒后对方可重新发起 1 次邀请（共 2 次机会）。"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Textarea, {
            className: "modal-textarea",
            placeholder: respondAction === "accept" ? "如：可以的，几点见？（≤100字）" : "如：不好意思，那天有安排了（≤100字）",
            value: replyMessage,
            onInput: function onInput(e) {
              return setReplyMessage(e.detail.value);
            },
            maxlength: 100
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
            className: "char-count",
            children: [replyMessage.length, "/100"]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
          className: "modal-footer",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Button, {
            className: "modal-cancel",
            onClick: function onClick() {
              return setShowRespond(false);
            },
            children: "\u53D6\u6D88"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Button, {
            className: "modal-confirm ".concat(respondAction === "decline" ? "decline" : ""),
            onClick: handleRespond,
            loading: respondLoading,
            disabled: respondLoading,
            children: respondAction === "accept" ? "确认同意" : "确认婉拒"
          })]
        })]
      })
    }), showRevoke && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
      className: "modal-overlay",
      onClick: function onClick() {
        return setShowRevoke(false);
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
        className: "modal-content",
        onClick: function onClick(e) {
          return e.stopPropagation();
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
          className: "modal-header",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
            className: "modal-title",
            children: revokeIsPending ? "取消邀请？" : "撤回联系方式授权？"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
            className: "modal-close",
            onClick: function onClick() {
              return setShowRevoke(false);
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
              children: "\u2715"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
          className: "modal-body",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
            className: "modal-hint",
            children: revokeIsPending ? "取消后对方将看不到你的邀请，此操作不可撤销。" : "撤回后双方都不再可见对方手机号，且无法再次邀请。此操作不可撤销。"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
          className: "modal-footer",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Button, {
            className: "modal-cancel",
            onClick: function onClick() {
              return setShowRevoke(false);
            },
            children: "\u8FD4\u56DE"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Button, {
            className: "modal-confirm decline",
            onClick: handleRevoke,
            loading: revokeLoading,
            disabled: revokeLoading,
            children: revokeIsPending ? "确认取消" : "确认撤回"
          })]
        })]
      })
    })]
  });
}

/***/ }),

/***/ "./src/components/StatusBadge.tsx":
/*!****************************************!*\
  !*** ./src/components/StatusBadge.tsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ StatusBadge; }
/* harmony export */ });
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");


var STATUS_MAP = {
  pending: {
    label: "待确认",
    color: "#faad14",
    bg: "#fffbe6"
  },
  accepted: {
    label: "已确认",
    color: "#1677ff",
    bg: "#e6f4ff"
  },
  in_progress: {
    label: "进行中",
    color: "#52c41a",
    bg: "#f6ffed"
  },
  completed: {
    label: "已完成",
    color: "#52c41a",
    bg: "#f6ffed"
  },
  declined: {
    label: "已拒绝",
    color: "#999",
    bg: "#f5f5f5"
  },
  cancelled: {
    label: "已取消",
    color: "#999",
    bg: "#f5f5f5"
  },
  closed: {
    label: "已关闭",
    color: "#999",
    bg: "#f5f5f5"
  },
  expired: {
    label: "已过期",
    color: "#999",
    bg: "#f5f5f5"
  },
  revoked: {
    label: "已撤回",
    color: "#999",
    bg: "#f5f5f5"
  }
};
function StatusBadge(_ref) {
  var status = _ref.status;
  var cfg = STATUS_MAP[status] || {
    label: status,
    color: "#999",
    bg: "#f5f5f5"
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.Text, {
    style: {
      fontSize: 12,
      padding: "2px 8px",
      borderRadius: 4,
      color: cfg.color,
      background: cfg.bg
    },
    children: cfg.label
  });
}

/***/ }),

/***/ "./src/pages/messages/first-confirm/first-confirm.tsx":
/*!************************************************************!*\
  !*** ./src/pages/messages/first-confirm/first-confirm.tsx ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/dsl/common.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_messages_first_confirm_first_confirm_first_confirm_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !!../../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/messages/first-confirm/first-confirm!./first-confirm.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/messages/first-confirm/first-confirm!./src/pages/messages/first-confirm/first-confirm.tsx");


var config = {"navigationBarTitleText":"活动订单一次确认","navigationBarBackgroundColor":"#ffffff","navigationBarTextStyle":"black","backgroundColor":"#f5f7fa"};



var taroOption = (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_messages_first_confirm_first_confirm_first_confirm_tsx__WEBPACK_IMPORTED_MODULE_0__["default"], 'pages/messages/first-confirm/first-confirm', {root:{cn:[]}}, config || {})
if (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_messages_first_confirm_first_confirm_first_confirm_tsx__WEBPACK_IMPORTED_MODULE_0__["default"] && _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_messages_first_confirm_first_confirm_first_confirm_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors) {
  taroOption.behaviors = (taroOption.behaviors || []).concat(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_messages_first_confirm_first_confirm_first_confirm_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors)
}
var inst = Page(taroOption)



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_messages_first_confirm_first_confirm_first_confirm_tsx__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/messages/first-confirm/first-confirm.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=first-confirm.js.map