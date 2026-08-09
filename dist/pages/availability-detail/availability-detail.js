"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/availability-detail/availability-detail"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/availability-detail/availability-detail!./src/pages/availability-detail/availability-detail.tsx":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/availability-detail/availability-detail!./src/pages/availability-detail/availability-detail.tsx ***!
  \************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AvailabilityDetail; }
/* harmony export */ });
/* harmony import */ var E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regenerator.js */ "./node_modules/@babel/runtime/helpers/esm/regenerator.js");
/* harmony import */ var E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_availabilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/availabilities */ "./src/services/availabilities.ts");
/* harmony import */ var _services_invitations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/invitations */ "./src/services/invitations.ts");
/* harmony import */ var _services_follows__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/follows */ "./src/services/follows.ts");
/* harmony import */ var _stores_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../stores/user */ "./src/stores/user.ts");
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Loading */ "./src/components/Loading.tsx");
/* harmony import */ var _components_RatingStars__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/RatingStars */ "./src/components/RatingStars.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");














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
function AvailabilityDetail() {
  var _detail$tempLocation, _detail$priceMin, _detail$coach, _detail$coach2, _detail$coach3, _detail$coach4, _detail$coach5, _detail$coach6, _detail$coach$recentR, _detail$coach7, _detail$coach8, _detail$coach$recentR2, _detail$coach9, _detail$coach0, _detail$coach1, _detail$coach10, _detail$coach11;
  var router = (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  var id = router.params.id;
  var _useUserStore = (0,_stores_user__WEBPACK_IMPORTED_MODULE_5__.useUserStore)(),
    user = _useUserStore.user;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState2 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_useState, 2),
    detail = _useState2[0],
    setDetail = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState4 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState6 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_useState5, 2),
    showContact = _useState6[0],
    setShowContact = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState8 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_useState7, 2),
    message = _useState8[0],
    setMessage = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState0 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_useState9, 2),
    sending = _useState0[0],
    setSending = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState10 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_useState1, 2),
    isFollowing = _useState10[0],
    setIsFollowing = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState12 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_useState11, 2),
    followLoading = _useState12[0],
    setFollowLoading = _useState12[1];
  var isOwner = (user === null || user === void 0 ? void 0 : user.id) === (detail === null || detail === void 0 ? void 0 : detail.coachId);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!id) return;
    setLoading(true);
    _services_availabilities__WEBPACK_IMPORTED_MODULE_2__.availabilitiesService.getById(id).then(function (res) {
      if (res.ok) setDetail(res.availability);
    }).catch(function () {
      return _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
        title: "加载失败",
        icon: "none"
      });
    }).finally(function () {
      return setLoading(false);
    });
  }, [id]);

  // 检查关注状态
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!user || !detail || isOwner) return;
    _services_follows__WEBPACK_IMPORTED_MODULE_4__.followsService.list().then(function (res) {
      if (res.ok && res.items) {
        setIsFollowing(res.items.some(function (f) {
          return f.followedId === detail.coachId;
        }));
      }
    });
  }, [user, detail, isOwner]);
  var handleFollow = /*#__PURE__*/function () {
    var _ref = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_10__["default"])(/*#__PURE__*/(0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_11__["default"])().m(function _callee() {
      var res, _res, _t;
      return (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_11__["default"])().w(function (_context) {
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
            return _services_follows__WEBPACK_IMPORTED_MODULE_4__.followsService.unfollow(detail.coachId);
          case 3:
            res = _context.v;
            if (res.ok) setIsFollowing(false);
            _context.n = 6;
            break;
          case 4:
            _context.n = 5;
            return _services_follows__WEBPACK_IMPORTED_MODULE_4__.followsService.follow(detail.coachId);
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
    var _ref2 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_10__["default"])(/*#__PURE__*/(0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_11__["default"])().m(function _callee2() {
      var res, _t2;
      return (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_11__["default"])().w(function (_context2) {
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
              availabilityId: id,
              toUserId: detail.coachId,
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
  if (loading) return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
    className: "page-detail",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_6__["default"], {})
  });
  if (!detail) return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
    className: "page-detail",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
      className: "empty-state",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Text, {
        children: "\u6570\u636E\u4E0D\u5B58\u5728"
      })
    })
  });
  var locationText = detail.venueName ? detail.venueAddress ? "".concat(detail.venueName, "\uFF08").concat(detail.venueAddress, "\uFF09") : detail.venueName : (_detail$tempLocation = detail.tempLocation) !== null && _detail$tempLocation !== void 0 ? _detail$tempLocation : "地点待定";
  var priceText = detail.priceMin != null || detail.priceMax != null ? detail.priceMin != null && detail.priceMax != null ? "".concat(detail.priceMin, "-").concat(detail.priceMax, " \u5143/\u5C0F\u65F6") : "".concat((_detail$priceMin = detail.priceMin) !== null && _detail$priceMin !== void 0 ? _detail$priceMin : detail.priceMax, " \u5143/\u5C0F\u65F6\u8D77") : "面议";
  var courtBookedText = detail.courtBookedBy === "student" ? "学员订场" : detail.courtBookedBy === "coach" ? "陪练订场" : "协商订场";
  var statusLabel = {
    open: "可约",
    closed: "已下架",
    expired: "已过期"
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
    className: "page-detail",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
      className: "detail-card",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
        className: "coach-header",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
          className: "coach-info",
          children: [detail.coachAvatar ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Image, {
            src: detail.coachAvatar,
            className: "coach-avatar",
            mode: "aspectFill"
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
            className: "coach-avatar coach-avatar-placeholder",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Text, {
              children: (detail.coachName || "?")[0]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
            className: "coach-meta",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
              className: "coach-name-row",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Text, {
                className: "coach-name",
                children: detail.coachName
              }), user && !isOwner && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
                className: "follow-btn ".concat(isFollowing ? "following" : ""),
                onClick: handleFollow,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Text, {
                  children: isFollowing ? "已关注" : "+ 关注"
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
              className: "coach-tags",
              children: [((_detail$coach = detail.coach) === null || _detail$coach === void 0 ? void 0 : _detail$coach.level) != null && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Text, {
                className: "tag",
                children: ["Lv.", (_detail$coach2 = detail.coach) === null || _detail$coach2 === void 0 ? void 0 : _detail$coach2.level]
              }), ((_detail$coach3 = detail.coach) === null || _detail$coach3 === void 0 ? void 0 : _detail$coach3.yearsPlayed) != null && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Text, {
                className: "tag",
                children: [(_detail$coach4 = detail.coach) === null || _detail$coach4 === void 0 ? void 0 : _detail$coach4.yearsPlayed, "\u5E74\u7403\u9F84"]
              }), ((_detail$coach5 = detail.coach) === null || _detail$coach5 === void 0 ? void 0 : _detail$coach5.city) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Text, {
                className: "tag",
                children: (_detail$coach6 = detail.coach) === null || _detail$coach6 === void 0 ? void 0 : _detail$coach6.city
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
              className: "rating-row",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_RatingStars__WEBPACK_IMPORTED_MODULE_7__["default"], {
                rating: (_detail$coach$recentR = (_detail$coach7 = detail.coach) === null || _detail$coach7 === void 0 ? void 0 : _detail$coach7.recentRating) !== null && _detail$coach$recentR !== void 0 ? _detail$coach$recentR : 5
              }), ((_detail$coach8 = detail.coach) === null || _detail$coach8 === void 0 ? void 0 : _detail$coach8.reviewCount) != null && detail.coach.reviewCount >= 5 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Text, {
                className: "rating-score",
                children: [((_detail$coach$recentR2 = (_detail$coach9 = detail.coach) === null || _detail$coach9 === void 0 ? void 0 : _detail$coach9.recentRating) !== null && _detail$coach$recentR2 !== void 0 ? _detail$coach$recentR2 : 5).toFixed(1), "\u5206"]
              }), ((_detail$coach0 = detail.coach) === null || _detail$coach0 === void 0 ? void 0 : _detail$coach0.reviewCount) != null && detail.coach.reviewCount < 5 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Text, {
                className: "review-hint",
                children: ["\u5DF2\u6709", detail.coach.reviewCount, "\u6761\u8BC4\u4EF7\uFF0C\u6EE15\u6761\u540E\u5C06\u5C55\u793A\u8BC4\u5206"]
              })]
            })]
          })]
        }), ((_detail$coach1 = detail.coach) === null || _detail$coach1 === void 0 ? void 0 : _detail$coach1.bio) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
          className: "coach-bio",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Text, {
            className: "bio-label",
            children: "\u4E2A\u4EBA\u4ECB\u7ECD"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Text, {
            className: "bio-text",
            children: detail.coach.bio
          })]
        }), ((_detail$coach10 = detail.coach) === null || _detail$coach10 === void 0 ? void 0 : _detail$coach10.teachingInfo) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
          className: "coach-bio",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Text, {
            className: "bio-label",
            children: "\u6388\u8BFE\u4FE1\u606F"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Text, {
            className: "bio-text",
            children: detail.coach.teachingInfo
          })]
        }), ((_detail$coach11 = detail.coach) === null || _detail$coach11 === void 0 ? void 0 : _detail$coach11.qualifications) && detail.coach.qualifications.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
          className: "qualifications",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Text, {
            className: "bio-label",
            children: "\u8D44\u8D28\u8BA4\u8BC1"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
            className: "qual-tags",
            children: detail.coach.qualifications.map(function (q, i) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Text, {
                className: "qual-tag",
                children: q
              }, i);
            })
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
      className: "detail-card",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
        className: "section-header",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Text, {
          className: "section-title",
          children: "\u6863\u671F\u4FE1\u606F"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Text, {
          className: "status-badge status-".concat(detail.status),
          children: statusLabel[detail.status] || detail.status
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
        className: "info-grid",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
          className: "info-item",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Text, {
            className: "info-label",
            children: "\u65E5\u671F"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Text, {
            className: "info-value",
            children: detail.playDate
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
          className: "info-item",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Text, {
            className: "info-label",
            children: "\u65F6\u6BB5"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Text, {
            className: "info-value",
            children: [TIME_SLOT_LABEL[detail.timeSlot] || detail.timeSlot, " ", formatTime(detail.startHour, detail.endHour)]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
          className: "info-item info-item-full",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Text, {
            className: "info-label",
            children: "\u5730\u70B9"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Text, {
            className: "info-value",
            children: locationText
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
          className: "info-item",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Text, {
            className: "info-label",
            children: "\u4EF7\u4F4D"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Text, {
            className: "info-value price",
            children: priceText
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
          className: "info-item",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Text, {
            className: "info-label",
            children: "\u8BA2\u573A"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Text, {
            className: "info-value",
            children: courtBookedText
          })]
        })]
      }), detail.note && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
        className: "note-box",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Text, {
          className: "note-label",
          children: "\u5907\u6CE8"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Text, {
          className: "note-text",
          children: detail.note
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
      className: "bottom-bar",
      children: [detail.status === "open" && !isOwner && user && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Button, {
        className: "contact-btn",
        onClick: function onClick() {
          return setShowContact(true);
        },
        children: "\u60F3\u8054\u7CFB"
      }), detail.status === "open" && !user && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Button, {
        className: "contact-btn",
        onClick: function onClick() {
          return _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
            url: "/pages/login/login"
          });
        },
        children: "\u767B\u5F55\u540E\u8054\u7CFB"
      }), isOwner && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Button, {
        className: "contact-btn secondary",
        onClick: function onClick() {
          return _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
            url: "/pages/orders/orders"
          });
        },
        children: "\u7BA1\u7406\u6211\u7684\u6863\u671F"
      })]
    }), !user && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
      className: "login-hint",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Text, {
        children: "\u767B\u5F55\u540E\u53EF\u4EE5\u8054\u7CFB\u966A\u7EC3"
      })
    }), showContact && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
      className: "modal-overlay",
      onClick: function onClick() {
        return setShowContact(false);
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
        className: "modal-content",
        onClick: function onClick(e) {
          return e.stopPropagation();
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
          className: "modal-header",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Text, {
            className: "modal-title",
            children: ["\u60F3\u8054\u7CFB ", detail.coachName]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
            className: "modal-close",
            onClick: function onClick() {
              return setShowContact(false);
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Text, {
              children: "\u2715"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
          className: "modal-body",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Text, {
            className: "modal-hint",
            children: "\u53D1\u9001\u7EC3\u7403\u9080\u8BF7\uFF0C\u5BF9\u65B9\u540C\u610F\u540E\u5373\u53EF\u67E5\u770B\u8054\u7CFB\u65B9\u5F0F"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Textarea, {
            className: "modal-textarea",
            placeholder: "\u7B80\u5355\u4ECB\u7ECD\u4E00\u4E0B\u81EA\u5DF1\u5427\uFF08200\u5B57\u4EE5\u5185\uFF09",
            value: message,
            onInput: function onInput(e) {
              return setMessage(e.detail.value);
            },
            maxlength: 200
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Text, {
            className: "char-count",
            children: [message.length, "/200"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Text, {
            className: "modal-disclaimer",
            children: "\u672C\u8BC4\u4EF7\u4E3A\u53CC\u65B9\u4E92\u8BC4\uFF0C\u5206\u6570\u5C06\u4F1A\u76F4\u63A5\u5F71\u54CD\u60A8\u5728\u5E73\u53F0\u7684\u4FE1\u7528\u54DF"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
          className: "modal-footer",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Button, {
            className: "modal-cancel",
            onClick: function onClick() {
              return setShowContact(false);
            },
            children: "\u53D6\u6D88"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Button, {
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

/***/ "./src/pages/availability-detail/availability-detail.tsx":
/*!***************************************************************!*\
  !*** ./src/pages/availability-detail/availability-detail.tsx ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/dsl/common.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_availability_detail_availability_detail_availability_detail_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/availability-detail/availability-detail!./availability-detail.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/availability-detail/availability-detail!./src/pages/availability-detail/availability-detail.tsx");


var config = {"navigationBarTitleText":"档期详情"};



var taroOption = (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_availability_detail_availability_detail_availability_detail_tsx__WEBPACK_IMPORTED_MODULE_0__["default"], 'pages/availability-detail/availability-detail', {root:{cn:[]}}, config || {})
if (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_availability_detail_availability_detail_availability_detail_tsx__WEBPACK_IMPORTED_MODULE_0__["default"] && _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_availability_detail_availability_detail_availability_detail_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors) {
  taroOption.behaviors = (taroOption.behaviors || []).concat(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_availability_detail_availability_detail_availability_detail_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors)
}
var inst = Page(taroOption)



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_availability_detail_availability_detail_availability_detail_tsx__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/availability-detail/availability-detail.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=availability-detail.js.map