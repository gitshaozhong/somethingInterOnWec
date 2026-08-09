"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/following/following"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/following/following!./src/pages/following/following.tsx":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/following/following!./src/pages/following/following.tsx ***!
  \********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Following; }
/* harmony export */ });
/* harmony import */ var E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regenerator.js */ "./node_modules/@babel/runtime/helpers/esm/regenerator.js");
/* harmony import */ var E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_follows__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/follows */ "./src/services/follows.ts");
/* harmony import */ var _services_availabilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/availabilities */ "./src/services/availabilities.ts");
/* harmony import */ var _services_demands__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/demands */ "./src/services/demands.ts");
/* harmony import */ var _stores_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../stores/user */ "./src/stores/user.ts");
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Loading */ "./src/components/Loading.tsx");
/* harmony import */ var _components_Empty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Empty */ "./src/components/Empty.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");















var TIME_SLOT_LABEL = {
  morning: "上午",
  afternoon: "下午",
  evening: "晚上"
};
function Following() {
  var _useUserStore = (0,_stores_user__WEBPACK_IMPORTED_MODULE_5__.useUserStore)(),
    user = _useUserStore.user;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_useState, 2),
    items = _useState2[0],
    setItems = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState4 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState6 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_useState5, 2),
    unfollowLoading = _useState6[0],
    setUnfollowLoading = _useState6[1];
  var fetchFollowing = /*#__PURE__*/function () {
    var _ref = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_10__["default"])(/*#__PURE__*/(0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_11__["default"])().m(function _callee2() {
      var res, enriched, _t2;
      return (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_11__["default"])().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            setLoading(true);
            _context2.p = 1;
            _context2.n = 2;
            return _services_follows__WEBPACK_IMPORTED_MODULE_2__.followsService.list();
          case 2:
            res = _context2.v;
            if (!(res.ok && res.items)) {
              _context2.n = 4;
              break;
            }
            _context2.n = 3;
            return Promise.all(res.items.map(/*#__PURE__*/function () {
              var _ref2 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_10__["default"])(/*#__PURE__*/(0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_11__["default"])().m(function _callee(item) {
                var recentPosts, avRes, dmRes, _t;
                return (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_11__["default"])().w(function (_context) {
                  while (1) switch (_context.p = _context.n) {
                    case 0:
                      recentPosts = [];
                      _context.p = 1;
                      if (!(item.followedRole === "coach")) {
                        _context.n = 3;
                        break;
                      }
                      _context.n = 2;
                      return _services_availabilities__WEBPACK_IMPORTED_MODULE_3__.availabilitiesService.list({
                        page: 1,
                        limit: 3
                      });
                    case 2:
                      avRes = _context.v;
                      if (avRes.ok) {
                        recentPosts = (avRes.items || []).filter(function (a) {
                          return a.coachId === item.followedId;
                        }).slice(0, 3).map(function (a) {
                          return {
                            id: a.id,
                            playDate: a.playDate,
                            timeSlot: a.timeSlot,
                            startHour: a.startHour,
                            endHour: a.endHour,
                            venueName: a.venueName,
                            status: "open"
                          };
                        });
                      }
                      _context.n = 5;
                      break;
                    case 3:
                      _context.n = 4;
                      return _services_demands__WEBPACK_IMPORTED_MODULE_4__.demandsService.list({
                        page: 1,
                        limit: 3
                      });
                    case 4:
                      dmRes = _context.v;
                      if (dmRes.ok) {
                        recentPosts = (dmRes.items || []).filter(function (d) {
                          return d.userId === item.followedId;
                        }).slice(0, 3).map(function (d) {
                          return {
                            id: d.id,
                            playDate: d.playDate,
                            timeSlot: d.timeSlot,
                            startHour: d.startHour,
                            endHour: d.endHour,
                            locationName: d.locationName,
                            status: "open"
                          };
                        });
                      }
                    case 5:
                      _context.n = 7;
                      break;
                    case 6:
                      _context.p = 6;
                      _t = _context.v;
                    case 7:
                      return _context.a(2, (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_12__["default"])((0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_12__["default"])({}, item), {}, {
                        recentPosts: recentPosts
                      }));
                  }
                }, _callee, null, [[1, 6]]);
              }));
              return function (_x) {
                return _ref2.apply(this, arguments);
              };
            }()));
          case 3:
            enriched = _context2.v;
            setItems(enriched);
          case 4:
            _context2.n = 6;
            break;
          case 5:
            _context2.p = 5;
            _t2 = _context2.v;
            console.error("获取关注列表失败:", _t2);
          case 6:
            _context2.p = 6;
            setLoading(false);
            return _context2.f(6);
          case 7:
            return _context2.a(2);
        }
      }, _callee2, null, [[1, 5, 6, 7]]);
    }));
    return function fetchFollowing() {
      return _ref.apply(this, arguments);
    };
  }();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetchFollowing();
  }, []);
  (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__.useDidShow)(function () {
    fetchFollowing();
  });
  var handleUnfollow = /*#__PURE__*/function () {
    var _ref3 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_10__["default"])(/*#__PURE__*/(0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_11__["default"])().m(function _callee3(followedId, name) {
      var res, result, _t3;
      return (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_11__["default"])().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            _context3.n = 1;
            return _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showModal({
              title: "取消关注",
              content: "\u786E\u5B9A\u8981\u53D6\u6D88\u5173\u6CE8\u300C".concat(name, "\u300D\u5417\uFF1F")
            });
          case 1:
            res = _context3.v;
            if (res.confirm) {
              _context3.n = 2;
              break;
            }
            return _context3.a(2);
          case 2:
            setUnfollowLoading(followedId);
            _context3.p = 3;
            _context3.n = 4;
            return _services_follows__WEBPACK_IMPORTED_MODULE_2__.followsService.unfollow(followedId);
          case 4:
            result = _context3.v;
            if (result.ok) {
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
                title: "已取消关注",
                icon: "success"
              });
              setItems(function (prev) {
                return prev.filter(function (i) {
                  return i.followedId !== followedId;
                });
              });
            }
            _context3.n = 6;
            break;
          case 5:
            _context3.p = 5;
            _t3 = _context3.v;
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: (_t3 === null || _t3 === void 0 ? void 0 : _t3.message) || "操作失败",
              icon: "none"
            });
          case 6:
            _context3.p = 6;
            setUnfollowLoading(null);
            return _context3.f(6);
          case 7:
            return _context3.a(2);
        }
      }, _callee3, null, [[3, 5, 6, 7]]);
    }));
    return function handleUnfollow(_x2, _x3) {
      return _ref3.apply(this, arguments);
    };
  }();
  var goDetail = function goDetail(item, postId) {
    var targetId = postId || item.followedId;
    if (item.followedRole === "coach") {
      var _item$recentPosts;
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
        url: postId ? "/pages/availability-detail/availability-detail?id=".concat(postId) : "/pages/availability-detail/availability-detail?id=".concat(((_item$recentPosts = item.recentPosts) === null || _item$recentPosts === void 0 || (_item$recentPosts = _item$recentPosts[0]) === null || _item$recentPosts === void 0 ? void 0 : _item$recentPosts.id) || "")
      });
    } else {
      var _item$recentPosts2;
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
        url: postId ? "/pages/demand-detail/demand-detail?id=".concat(postId) : "/pages/demand-detail/demand-detail?id=".concat(((_item$recentPosts2 = item.recentPosts) === null || _item$recentPosts2 === void 0 || (_item$recentPosts2 = _item$recentPosts2[0]) === null || _item$recentPosts2 === void 0 ? void 0 : _item$recentPosts2.id) || "")
      });
    }
  };
  var formatTime = function formatTime(s, e) {
    return "".concat(s, ":00-").concat(e, ":00");
  };
  if (!user) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
      className: "page-following",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_Empty__WEBPACK_IMPORTED_MODULE_7__["default"], {
        text: "\u8BF7\u5148\u767B\u5F55"
      })
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
    className: "page-following",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
      className: "page-header",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
        className: "page-title",
        children: "\u6211\u7684\u5173\u6CE8"
      })
    }), loading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_6__["default"], {}) : items.length === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_Empty__WEBPACK_IMPORTED_MODULE_7__["default"], {
      text: "\u6682\u672A\u5173\u6CE8\u4EFB\u4F55\u4EBA"
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
      className: "following-list",
      children: items.map(function (item) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
          className: "following-card",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
            className: "following-header",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
              className: "following-user",
              onClick: function onClick() {
                return goDetail(item);
              },
              children: [item.followedAvatar ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Image, {
                src: item.followedAvatar,
                className: "following-avatar",
                mode: "aspectFill"
              }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
                className: "following-avatar following-avatar-placeholder",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
                  children: (item.followedName || "?")[0]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
                className: "following-meta",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
                  className: "following-name",
                  children: item.followedName
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
                  className: "following-role",
                  children: item.followedRole === "coach" ? "陪练员" : "学员"
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
              className: "unfollow-btn ".concat(unfollowLoading === item.followedId ? "loading" : ""),
              onClick: function onClick() {
                return handleUnfollow(item.followedId, item.followedName);
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
                children: unfollowLoading === item.followedId ? "..." : "取消关注"
              })
            })]
          }), item.recentPosts && item.recentPosts.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
            className: "recent-posts",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
              className: "recent-title",
              children: "\u6700\u8FD1\u53D1\u5E03"
            }), item.recentPosts.map(function (post) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
                className: "recent-post-item",
                onClick: function onClick() {
                  return goDetail(item, post.id);
                },
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
                  className: "post-info",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
                    className: "post-date",
                    children: post.playDate
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
                    className: "post-time",
                    children: [TIME_SLOT_LABEL[post.timeSlot] || post.timeSlot, " ", formatTime(post.startHour, post.endHour)]
                  })]
                }), post.venueName && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
                  className: "post-venue",
                  children: post.venueName
                }), post.locationName && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
                  className: "post-venue",
                  children: post.locationName
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
                  className: "post-arrow",
                  children: ">"
                })]
              }, post.id);
            })]
          }), (!item.recentPosts || item.recentPosts.length === 0) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
            className: "no-posts",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Text, {
              className: "no-posts-text",
              children: "\u6682\u65E0\u6700\u8FD1\u53D1\u5E03"
            })
          })]
        }, item.id);
      })
    })]
  });
}

/***/ }),

/***/ "./src/pages/following/following.tsx":
/*!*******************************************!*\
  !*** ./src/pages/following/following.tsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/dsl/common.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_following_following_following_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/following/following!./following.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/following/following!./src/pages/following/following.tsx");


var config = {"navigationBarTitleText":"我的关注"};



var taroOption = (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_following_following_following_tsx__WEBPACK_IMPORTED_MODULE_0__["default"], 'pages/following/following', {root:{cn:[]}}, config || {})
if (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_following_following_following_tsx__WEBPACK_IMPORTED_MODULE_0__["default"] && _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_following_following_following_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors) {
  taroOption.behaviors = (taroOption.behaviors || []).concat(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_following_following_following_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors)
}
var inst = Page(taroOption)



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_following_following_following_tsx__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/following/following.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=following.js.map