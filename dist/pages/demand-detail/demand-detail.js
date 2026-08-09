"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/demand-detail/demand-detail"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/demand-detail/demand-detail!./src/pages/demand-detail/demand-detail.tsx":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/demand-detail/demand-detail!./src/pages/demand-detail/demand-detail.tsx ***!
  \************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DemandDetail; }
/* harmony export */ });
/* harmony import */ var E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regenerator.js */ "./node_modules/@babel/runtime/helpers/esm/regenerator.js");
/* harmony import */ var E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_demands__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/demands */ "./src/services/demands.ts");
/* harmony import */ var _services_invitations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/invitations */ "./src/services/invitations.ts");
/* harmony import */ var _services_follows__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/follows */ "./src/services/follows.ts");
/* harmony import */ var _stores_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../stores/user */ "./src/stores/user.ts");
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Loading */ "./src/components/Loading.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");













var TIME_SLOT_LABEL = {
  morning: "上午",
  afternoon: "下午",
  evening: "晚上"
};
var LEVELS = [{
  value: 0,
  label: "入门"
}, {
  value: 1,
  label: "初级"
}, {
  value: 2,
  label: "中级"
}, {
  value: 3,
  label: "高级"
}, {
  value: 4,
  label: "专业"
}, {
  value: 5,
  label: "顶尖"
}];
function levelLabel(level) {
  var _LEVELS$find$label, _LEVELS$find;
  if (level == null) return "—";
  return (_LEVELS$find$label = (_LEVELS$find = LEVELS.find(function (l) {
    return l.value === level;
  })) === null || _LEVELS$find === void 0 ? void 0 : _LEVELS$find.label) !== null && _LEVELS$find$label !== void 0 ? _LEVELS$find$label : "".concat(level, " \u7EA7");
}
function formatTime(start, end) {
  return "".concat(start, ":00-").concat(end, ":00");
}
function DemandDetail() {
  var _detail$budgetMin, _detail$user, _detail$user2, _detail$user3, _detail$student$level, _detail$student, _detail$expectedLevel, _detail$student2, _detail$student3, _detail$student4, _detail$student5, _detail$student6, _detail$expectedLevel2, _detail$student$level2, _detail$student7, _detail$user4;
  var router = (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  var id = router.params.id;
  var _useUserStore = (0,_stores_user__WEBPACK_IMPORTED_MODULE_5__.useUserStore)(),
    user = _useUserStore.user;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState2 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState, 2),
    detail = _useState2[0],
    setDetail = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState4 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState6 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState5, 2),
    showContact = _useState6[0],
    setShowContact = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState8 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState7, 2),
    message = _useState8[0],
    setMessage = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState0 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState9, 2),
    sending = _useState0[0],
    setSending = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState10 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState1, 2),
    isFollowing = _useState10[0],
    setIsFollowing = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState12 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState11, 2),
    followLoading = _useState12[0],
    setFollowLoading = _useState12[1];
  var isOwner = (user === null || user === void 0 ? void 0 : user.id) === (detail === null || detail === void 0 ? void 0 : detail.userId);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!id) return;
    setLoading(true);
    _services_demands__WEBPACK_IMPORTED_MODULE_2__.demandsService.getById(id).then(function (res) {
      if (res.ok) setDetail(res.demand);
    }).catch(function () {
      return _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
        title: "加载失败",
        icon: "none"
      });
    }).finally(function () {
      return setLoading(false);
    });
  }, [id]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!user || !detail || isOwner) return;
    _services_follows__WEBPACK_IMPORTED_MODULE_4__.followsService.list().then(function (res) {
      if (res.ok && res.items) {
        setIsFollowing(res.items.some(function (f) {
          return f.followedId === detail.userId;
        }));
      }
    });
  }, [user, detail, isOwner]);
  var handleFollow = /*#__PURE__*/function () {
    var _ref = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__["default"])(/*#__PURE__*/(0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_10__["default"])().m(function _callee() {
      var res, _res, _t;
      return (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_10__["default"])().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            if (!(!detail || followLoading)) {
              _context.n = 1;
              break;
            }
            return _context.a(2);
          case 1:
            setFollowLoading(true);
            _context.p = 2;
            if (!isFollowing) {
              _context.n = 4;
              break;
            }
            _context.n = 3;
            return _services_follows__WEBPACK_IMPORTED_MODULE_4__.followsService.unfollow(detail.userId);
          case 3:
            res = _context.v;
            if (res.ok) setIsFollowing(false);
            _context.n = 6;
            break;
          case 4:
            _context.n = 5;
            return _services_follows__WEBPACK_IMPORTED_MODULE_4__.followsService.follow(detail.userId);
          case 5:
            _res = _context.v;
            if (_res.ok) setIsFollowing(true);
          case 6:
            _context.n = 8;
            break;
          case 7:
            _context.p = 7;
            _t = _context.v;
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: (_t === null || _t === void 0 ? void 0 : _t.message) || "操作失败",
              icon: "none"
            });
          case 8:
            _context.p = 8;
            setFollowLoading(false);
            return _context.f(8);
          case 9:
            return _context.a(2);
        }
      }, _callee, null, [[2, 7, 8, 9]]);
    }));
    return function handleFollow() {
      return _ref.apply(this, arguments);
    };
  }();
  var handleSendInvitation = /*#__PURE__*/function () {
    var _ref2 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__["default"])(/*#__PURE__*/(0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_10__["default"])().m(function _callee2() {
      var res, _t2;
      return (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_10__["default"])().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            if (!(!detail || sending)) {
              _context2.n = 1;
              break;
            }
            return _context2.a(2);
          case 1:
            if (message.trim()) {
              _context2.n = 2;
              break;
            }
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: "请填写留言",
              icon: "none"
            });
            return _context2.a(2);
          case 2:
            if (!(message.length > 200)) {
              _context2.n = 3;
              break;
            }
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: "留言不能超过200字",
              icon: "none"
            });
            return _context2.a(2);
          case 3:
            setSending(true);
            _context2.p = 4;
            _context2.n = 5;
            return _services_invitations__WEBPACK_IMPORTED_MODULE_3__.invitationsService.create({
              demandId: id,
              toUserId: detail.userId,
              message: message.trim()
            });
          case 5:
            res = _context2.v;
            if (res.ok) {
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
                title: "邀请已发送",
                icon: "success"
              });
              setShowContact(false);
              setMessage("");
            }
            _context2.n = 7;
            break;
          case 6:
            _context2.p = 6;
            _t2 = _context2.v;
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: (_t2 === null || _t2 === void 0 ? void 0 : _t2.message) || "发送失败",
              icon: "none"
            });
          case 7:
            _context2.p = 7;
            setSending(false);
            return _context2.f(7);
          case 8:
            return _context2.a(2);
        }
      }, _callee2, null, [[4, 6, 7, 8]]);
    }));
    return function handleSendInvitation() {
      return _ref2.apply(this, arguments);
    };
  }();
  if (loading) return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
    className: "page-detail",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_6__["default"], {})
  });
  if (!detail) return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
    className: "page-detail",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
      className: "empty-state",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
        children: "\u6570\u636E\u4E0D\u5B58\u5728"
      })
    })
  });
  var budgetText = detail.budgetMin != null || detail.budgetMax != null ? detail.budgetMin != null && detail.budgetMax != null ? "".concat(detail.budgetMin, "-").concat(detail.budgetMax, " \u5143/\u5C0F\u65F6") : "".concat((_detail$budgetMin = detail.budgetMin) !== null && _detail$budgetMin !== void 0 ? _detail$budgetMin : detail.budgetMax, " \u5143/\u5C0F\u65F6\u8D77") : "面议";
  var courtBookedText = detail.courtBookedBy === "student" ? "学员订场" : detail.courtBookedBy === "coach" ? "陪练订场" : "协商订场";
  var statusLabel = {
    open: "学员大厅中",
    closed: "已关闭",
    filled: "已找到陪练",
    expired: "已过期",
    draft: "草稿"
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
    className: "page-detail",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
      className: "detail-card",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
        className: "user-header",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
          className: "user-info",
          children: [(_detail$user = detail.user) !== null && _detail$user !== void 0 && _detail$user.avatarVirtual ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Image, {
            src: detail.user.avatarVirtual,
            className: "user-avatar",
            mode: "aspectFill"
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
            className: "user-avatar user-avatar-placeholder",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
              children: (((_detail$user2 = detail.user) === null || _detail$user2 === void 0 ? void 0 : _detail$user2.name) || "?")[0]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
            className: "user-meta",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
              className: "user-name-row",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
                className: "user-name",
                children: (_detail$user3 = detail.user) === null || _detail$user3 === void 0 ? void 0 : _detail$user3.name
              }), user && !isOwner && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
                className: "follow-btn ".concat(isFollowing ? "following" : ""),
                onClick: handleFollow,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
                  children: isFollowing ? "已关注" : "+ 关注"
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
              className: "user-tags",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
                className: "tag",
                children: "\u5B66\u5458"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
                className: "tag",
                children: ["\u81EA\u8BC4 ", levelLabel((_detail$student$level = (_detail$student = detail.student) === null || _detail$student === void 0 ? void 0 : _detail$student.level) !== null && _detail$student$level !== void 0 ? _detail$student$level : null)]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
                className: "tag",
                children: ["\u671F\u671B\u966A\u7EC3 Lv.", (_detail$expectedLevel = detail.expectedLevel) !== null && _detail$expectedLevel !== void 0 ? _detail$expectedLevel : "?", "+"]
              })]
            }), ((_detail$student2 = detail.student) === null || _detail$student2 === void 0 ? void 0 : _detail$student2.reviewCount) != null && detail.student.reviewCount >= 5 && ((_detail$student3 = detail.student) === null || _detail$student3 === void 0 ? void 0 : _detail$student3.recentRating) != null && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
              className: "rating-row",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
                className: "rating-score",
                children: [detail.student.recentRating.toFixed(1), "\u5206"]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
                className: "rating-count",
                children: ["(", detail.student.reviewCount, "\u6761\u8BC4\u4EF7)"]
              })]
            }), ((_detail$student4 = detail.student) === null || _detail$student4 === void 0 ? void 0 : _detail$student4.reviewCount) != null && detail.student.reviewCount < 5 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
              className: "review-hint",
              children: ["\u5DF2\u6709", detail.student.reviewCount, "\u6761\u8BC4\u4EF7\uFF0C\u6EE15\u6761\u540E\u5C06\u5C55\u793A\u8BC4\u5206"]
            })]
          })]
        }), ((_detail$student5 = detail.student) === null || _detail$student5 === void 0 ? void 0 : _detail$student5.bio) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
          className: "user-bio",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
            className: "bio-label",
            children: "\u4E2A\u4EBA\u4ECB\u7ECD"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
            className: "bio-text",
            children: detail.student.bio
          })]
        }), ((_detail$student6 = detail.student) === null || _detail$student6 === void 0 ? void 0 : _detail$student6.goalTags) && detail.student.goalTags.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
          className: "goal-tags-section",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
            className: "bio-label",
            children: "\u7EC3\u7403\u76EE\u6807"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
            className: "goal-tags",
            children: detail.student.goalTags.map(function (t, i) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
                className: "goal-tag",
                children: t
              }, i);
            })
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
      className: "detail-card",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
        className: "section-header",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
          className: "section-title",
          children: "\u7EC3\u7403\u9700\u6C42"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
          className: "status-badge status-".concat(detail.status),
          children: statusLabel[detail.status] || detail.status
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
        className: "info-grid",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
          className: "info-item",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
            className: "info-label",
            children: "\u65E5\u671F"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
            className: "info-value",
            children: detail.playDate
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
          className: "info-item",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
            className: "info-label",
            children: "\u65F6\u6BB5"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
            className: "info-value",
            children: [TIME_SLOT_LABEL[detail.timeSlot] || detail.timeSlot, " ", formatTime(detail.startHour, detail.endHour)]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
          className: "info-item info-item-full",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
            className: "info-label",
            children: "\u671F\u671B\u5730\u70B9"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
            className: "info-value",
            children: detail.locationName || "地点待定"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
          className: "info-item",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
            className: "info-label",
            children: "\u9884\u7B97"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
            className: "info-value price",
            children: budgetText
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
          className: "info-item",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
            className: "info-label",
            children: "\u671F\u671B\u7B49\u7EA7"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
            className: "info-value",
            children: ["Lv.", (_detail$expectedLevel2 = detail.expectedLevel) !== null && _detail$expectedLevel2 !== void 0 ? _detail$expectedLevel2 : "?", "+"]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
          className: "info-item",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
            className: "info-label",
            children: "\u81EA\u8BC4\u7B49\u7EA7"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
            className: "info-value",
            children: levelLabel((_detail$student$level2 = (_detail$student7 = detail.student) === null || _detail$student7 === void 0 ? void 0 : _detail$student7.level) !== null && _detail$student$level2 !== void 0 ? _detail$student$level2 : null)
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
          className: "info-item",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
            className: "info-label",
            children: "\u8BA2\u573A"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
            className: "info-value",
            children: courtBookedText
          })]
        })]
      }), detail.note && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
        className: "note-box",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
          className: "note-label",
          children: "\u5907\u6CE8"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
          className: "note-text",
          children: detail.note
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
      className: "bottom-bar",
      children: [detail.status === "open" && !isOwner && user && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Button, {
        className: "contact-btn",
        onClick: function onClick() {
          return setShowContact(true);
        },
        children: "\u60F3\u8054\u7CFB"
      }), detail.status === "open" && !user && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Button, {
        className: "contact-btn",
        onClick: function onClick() {
          return _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
            url: "/pages/login/login"
          });
        },
        children: "\u767B\u5F55\u540E\u8054\u7CFB"
      }), isOwner && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Button, {
        className: "contact-btn secondary",
        onClick: function onClick() {
          return _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
            url: "/pages/orders/orders"
          });
        },
        children: "\u7BA1\u7406\u6211\u7684\u9700\u6C42"
      })]
    }), !user && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
      className: "login-hint",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
        children: "\u767B\u5F55\u540E\u53EF\u4EE5\u8054\u7CFB\u5B66\u5458"
      })
    }), showContact && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
      className: "modal-overlay",
      onClick: function onClick() {
        return setShowContact(false);
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
        className: "modal-content",
        onClick: function onClick(e) {
          return e.stopPropagation();
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
          className: "modal-header",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
            className: "modal-title",
            children: ["\u60F3\u8054\u7CFB ", (_detail$user4 = detail.user) === null || _detail$user4 === void 0 ? void 0 : _detail$user4.name]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
            className: "modal-close",
            onClick: function onClick() {
              return setShowContact(false);
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
              children: "\u2715"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
          className: "modal-body",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
            className: "modal-hint",
            children: "\u53D1\u9001\u7EC3\u7403\u9080\u8BF7\uFF0C\u5BF9\u65B9\u540C\u610F\u540E\u5373\u53EF\u67E5\u770B\u8054\u7CFB\u65B9\u5F0F"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Textarea, {
            className: "modal-textarea",
            placeholder: "\u7B80\u5355\u4ECB\u7ECD\u4E00\u4E0B\u81EA\u5DF1\u5427\uFF08200\u5B57\u4EE5\u5185\uFF09",
            value: message,
            onInput: function onInput(e) {
              return setMessage(e.detail.value);
            },
            maxlength: 200
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
            className: "char-count",
            children: [message.length, "/200"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
            className: "modal-disclaimer",
            children: "\u672C\u8BC4\u4EF7\u4E3A\u53CC\u65B9\u4E92\u8BC4\uFF0C\u5206\u6570\u5C06\u4F1A\u76F4\u63A5\u5F71\u54CD\u60A8\u5728\u5E73\u53F0\u7684\u4FE1\u7528\u54DF"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
          className: "modal-footer",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Button, {
            className: "modal-cancel",
            onClick: function onClick() {
              return setShowContact(false);
            },
            children: "\u53D6\u6D88"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Button, {
            className: "modal-confirm",
            onClick: handleSendInvitation,
            loading: sending,
            disabled: sending,
            children: "\u53D1\u9001\u9080\u8BF7"
          })]
        })]
      })
    })]
  });
}

/***/ }),

/***/ "./src/pages/demand-detail/demand-detail.tsx":
/*!***************************************************!*\
  !*** ./src/pages/demand-detail/demand-detail.tsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/dsl/common.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_demand_detail_demand_detail_demand_detail_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/demand-detail/demand-detail!./demand-detail.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/demand-detail/demand-detail!./src/pages/demand-detail/demand-detail.tsx");


var config = {"navigationBarTitleText":"需求详情"};



var taroOption = (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_demand_detail_demand_detail_demand_detail_tsx__WEBPACK_IMPORTED_MODULE_0__["default"], 'pages/demand-detail/demand-detail', {root:{cn:[]}}, config || {})
if (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_demand_detail_demand_detail_demand_detail_tsx__WEBPACK_IMPORTED_MODULE_0__["default"] && _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_demand_detail_demand_detail_demand_detail_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors) {
  taroOption.behaviors = (taroOption.behaviors || []).concat(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_demand_detail_demand_detail_demand_detail_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors)
}
var inst = Page(taroOption)



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_demand_detail_demand_detail_demand_detail_tsx__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/demand-detail/demand-detail.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=demand-detail.js.map