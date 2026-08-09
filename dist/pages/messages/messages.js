"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/messages/messages"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/messages/messages!./src/pages/messages/messages.tsx":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/messages/messages!./src/pages/messages/messages.tsx ***!
  \****************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Messages; }
/* harmony export */ });
/* harmony import */ var E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regenerator.js */ "./node_modules/@babel/runtime/helpers/esm/regenerator.js");
/* harmony import */ var E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/notifications */ "./src/services/notifications.ts");
/* harmony import */ var _stores_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../stores/user */ "./src/stores/user.ts");
/* harmony import */ var _stores_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../stores/app */ "./src/stores/app.ts");
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Loading */ "./src/components/Loading.tsx");
/* harmony import */ var _components_Empty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Empty */ "./src/components/Empty.tsx");
/* harmony import */ var _components_CustomNav_CustomNav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/CustomNav/CustomNav */ "./src/components/CustomNav/CustomNav.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");














/** 微信订阅消息模板ID（占位，需在微信后台申请后替换） */

var SUBSCRIBE_TEMPLATE_IDS = [];
function Messages() {
  var _useUserStore = (0,_stores_user__WEBPACK_IMPORTED_MODULE_3__.useUserStore)(),
    user = _useUserStore.user;
  var _useAppStore = (0,_stores_app__WEBPACK_IMPORTED_MODULE_4__.useAppStore)(),
    setUnreadCount = _useAppStore.setUnreadCount;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_useState, 2),
    systemItems = _useState2[0],
    setSystemItems = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_useState3, 2),
    adItems = _useState4[0],
    setAdItems = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState6 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_useState5, 2),
    firstConfirmCount = _useState6[0],
    setFirstConfirmCount = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState8 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_useState7, 2),
    secondConfirmCount = _useState8[0],
    setSecondConfirmCount = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState0 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_useState9, 2),
    loading = _useState0[0],
    setLoading = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState10 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_useState1, 2),
    showAnnouncement = _useState10[0],
    setShowAnnouncement = _useState10[1];
  var fetchAll = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(/*#__PURE__*/(0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_10__["default"])(/*#__PURE__*/(0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_11__["default"])().m(function _callee() {
    var _firstRes$items, _secondRes$items, _yield$Promise$all, _yield$Promise$all2, systemRes, adRes, firstRes, secondRes, unreadRes, _t;
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
          return Promise.all([_services_notifications__WEBPACK_IMPORTED_MODULE_2__.notificationsService.systemList().catch(function () {
            return {
              ok: false,
              items: []
            };
          }), _services_notifications__WEBPACK_IMPORTED_MODULE_2__.notificationsService.adList().catch(function () {
            return {
              ok: false,
              items: []
            };
          }), _services_notifications__WEBPACK_IMPORTED_MODULE_2__.notificationsService.firstConfirmList().catch(function () {
            return {
              ok: false,
              items: []
            };
          }), _services_notifications__WEBPACK_IMPORTED_MODULE_2__.notificationsService.secondConfirmList().catch(function () {
            return {
              ok: false,
              items: []
            };
          }), _services_notifications__WEBPACK_IMPORTED_MODULE_2__.notificationsService.unreadCount().catch(function () {
            return {
              ok: false,
              count: 0
            };
          })]);
        case 3:
          _yield$Promise$all = _context.v;
          _yield$Promise$all2 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_yield$Promise$all, 5);
          systemRes = _yield$Promise$all2[0];
          adRes = _yield$Promise$all2[1];
          firstRes = _yield$Promise$all2[2];
          secondRes = _yield$Promise$all2[3];
          unreadRes = _yield$Promise$all2[4];
          if (systemRes.ok) setSystemItems(systemRes.items || []);
          if (adRes.ok) setAdItems(adRes.items || []);
          if (firstRes.ok) setFirstConfirmCount(((_firstRes$items = firstRes.items) === null || _firstRes$items === void 0 ? void 0 : _firstRes$items.length) || 0);
          if (secondRes.ok) setSecondConfirmCount(((_secondRes$items = secondRes.items) === null || _secondRes$items === void 0 ? void 0 : _secondRes$items.length) || 0);
          if (unreadRes.ok) setUnreadCount(unreadRes.count || 0);
          _context.n = 5;
          break;
        case 4:
          _context.p = 4;
          _t = _context.v;
          console.error("[messages] 加载失败:", _t);
        case 5:
          _context.p = 5;
          setLoading(false);
          return _context.f(5);
        case 6:
          return _context.a(2);
      }
    }, _callee, null, [[2, 4, 5, 6]]);
  })), [user, setUnreadCount]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (user) fetchAll();
  }, [user, fetchAll]);
  (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__.useDidShow)(function () {
    if (user) fetchAll();
  });

  // 去开启订阅消息授权
  var handleEnableSubscribe = /*#__PURE__*/function () {
    var _ref2 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_10__["default"])(/*#__PURE__*/(0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_11__["default"])().m(function _callee2() {
      var _t2;
      return (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_11__["default"])().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            _context2.p = 0;
            if (!(SUBSCRIBE_TEMPLATE_IDS.length === 0)) {
              _context2.n = 1;
              break;
            }
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showModal({
              title: "订阅消息",
              content: "订阅消息模板正在配置中，敬请期待。",
              showCancel: false
            });
            return _context2.a(2);
          case 1:
            _context2.n = 2;
            return _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().requestSubscribeMessage({
              tmplIds: SUBSCRIBE_TEMPLATE_IDS
            });
          case 2:
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: "订阅成功",
              icon: "success"
            });
            _context2.n = 4;
            break;
          case 3:
            _context2.p = 3;
            _t2 = _context2.v;
          case 4:
            return _context2.a(2);
        }
      }, _callee2, null, [[0, 3]]);
    }));
    return function handleEnableSubscribe() {
      return _ref2.apply(this, arguments);
    };
  }();
  var formatDate = function formatDate(dateStr) {
    if (!dateStr) return "";
    var d = new Date(dateStr);
    var now = new Date();
    var isSameDay = d.getFullYear() === now.getFullYear() && d.getMonth() === now.getMonth() && d.getDate() === now.getDate();
    var hh = String(d.getHours()).padStart(2, "0");
    var mm = String(d.getMinutes()).padStart(2, "0");
    if (isSameDay) return "".concat(hh, ":").concat(mm);
    return "".concat(d.getMonth() + 1, "/").concat(d.getDate(), " ").concat(hh, ":").concat(mm);
  };

  // 未登录空状态
  if (!user) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
      className: "page-messages",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_CustomNav_CustomNav__WEBPACK_IMPORTED_MODULE_7__["default"], {
        title: "\u6D88\u606F\u4E2D\u5FC3"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
        className: "login-empty",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
          className: "login-empty-icon",
          children: "\uD83C\uDFF8"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Text, {
          className: "login-empty-text",
          children: "\u767B\u5F55\u540E\u4F53\u9A8C\u5168\u90E8\u529F\u80FD"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Button, {
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
  var renderNotificationRow = function renderNotificationRow(item, kind) {
    var unread = !item.readAt;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
      className: "msg-row ".concat(unread ? "unread" : ""),
      onClick: function onClick() {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showModal({
          title: item.title,
          content: item.body || "无详细内容",
          showCancel: false
        });
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
        className: "msg-row-avatar ".concat(kind === "system" ? "system" : "ad"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Text, {
          className: "msg-row-avatar-icon",
          children: kind === "system" ? "💬" : "📢"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
        className: "msg-row-main",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
          className: "msg-row-title-row",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Text, {
            className: "msg-row-title",
            children: item.title
          }), unread && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
            className: "msg-row-badge"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Text, {
          className: "msg-row-preview",
          children: item.body || "暂无内容"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
        className: "msg-row-meta",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Text, {
          className: "msg-row-time",
          children: formatDate(item.createdAt)
        }), unread && kind === "system" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Text, {
          className: "msg-row-unread-num",
          children: "\u65B0"
        })]
      })]
    }, item.id);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
    className: "page-messages",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_CustomNav_CustomNav__WEBPACK_IMPORTED_MODULE_7__["default"], {
      title: "\u6D88\u606F\u4E2D\u5FC3"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.ScrollView, {
      scrollY: true,
      className: "messages-scroll",
      enhanced: true,
      showScrollbar: false,
      children: [showAnnouncement && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
        className: "announce-bar",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Text, {
          className: "announce-text",
          children: "\u5F00\u542F\u8BA2\u9605\u6D88\u606F\uFF0C\u53CA\u65F6\u6536\u5230\u8BA2\u5355\u8FDB\u5C55\u901A\u77E5"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
          className: "announce-btn",
          onClick: handleEnableSubscribe,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Text, {
            className: "announce-btn-text",
            children: "\u53BB\u5F00\u542F"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
          className: "announce-close",
          onClick: function onClick() {
            return setShowAnnouncement(false);
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Text, {
            className: "announce-close-icon",
            children: "\u2715"
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
        className: "category-cards",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
          className: "category-card first",
          onClick: function onClick() {
            return _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
              url: "/pages/messages/first-confirm/first-confirm"
            });
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
            className: "category-card-header",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Text, {
              className: "category-card-title",
              children: "\u6D3B\u52A8\u8BA2\u5355\u4E00\u6B21\u786E\u8BA4"
            }), firstConfirmCount > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
              className: "category-card-badge",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Text, {
                className: "category-card-badge-text",
                children: firstConfirmCount
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Text, {
            className: "category-card-preview",
            children: "\u6D3B\u52A8\u5F00\u59CB\u524D\u901A\u8FC7\u7B2C\u4E00\u6B21\u786E\u8BA4\u83B7\u5F97\u5BF9\u65B9\u8054\u7CFB\u65B9\u5F0F"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
          className: "category-card second",
          onClick: function onClick() {
            return _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
              url: "/pages/messages/second-confirm/second-confirm"
            });
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
            className: "category-card-header",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Text, {
              className: "category-card-title",
              children: "\u6D3B\u52A8\u8BA2\u5355\u4E8C\u6B21\u786E\u8BA4"
            }), secondConfirmCount > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
              className: "category-card-badge",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Text, {
                className: "category-card-badge-text",
                children: secondConfirmCount
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Text, {
            className: "category-card-preview",
            children: "\u7B2C\u4E8C\u6B21\u786E\u8BA4\u6D3B\u52A8\u540E\uFF0C\u53CC\u65B9\u5C06\u6B63\u5F0F\u5F00\u5C55\u7EBF\u4E0B\u6D3B\u52A8"
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
        className: "section-list",
        children: loading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_5__["default"], {}) : systemItems.length === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_Empty__WEBPACK_IMPORTED_MODULE_6__["default"], {
          text: "\u6682\u65E0\u7CFB\u7EDF\u6D88\u606F"
        }) : systemItems.slice(0, 20).map(function (n) {
          return renderNotificationRow(n, "system");
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
        className: "section-divider",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Text, {
          className: "section-divider-text",
          children: "\u4EE5\u4E0B\u4E3A\u5E7F\u544A\u6D88\u606F"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
        className: "section-list",
        children: loading ? null : adItems.length === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_Empty__WEBPACK_IMPORTED_MODULE_6__["default"], {
          text: "\u6682\u65E0\u5E7F\u544A\u6D88\u606F"
        }) : adItems.slice(0, 20).map(function (n) {
          return renderNotificationRow(n, "ad");
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
        className: "safe-bottom"
      })]
    })]
  });
}

/***/ }),

/***/ "./src/pages/messages/messages.tsx":
/*!*****************************************!*\
  !*** ./src/pages/messages/messages.tsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/dsl/common.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_messages_messages_messages_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/messages/messages!./messages.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/messages/messages!./src/pages/messages/messages.tsx");


var config = {"navigationBarTitleText":"消息中心","navigationStyle":"custom","backgroundColor":"#AEECEB"};



var taroOption = (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_messages_messages_messages_tsx__WEBPACK_IMPORTED_MODULE_0__["default"], 'pages/messages/messages', {root:{cn:[]}}, config || {})
if (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_messages_messages_messages_tsx__WEBPACK_IMPORTED_MODULE_0__["default"] && _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_messages_messages_messages_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors) {
  taroOption.behaviors = (taroOption.behaviors || []).concat(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_messages_messages_messages_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors)
}
var inst = Page(taroOption)



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_messages_messages_messages_tsx__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/messages/messages.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=messages.js.map