"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/profile/profile"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/profile/profile!./src/pages/profile/profile.tsx":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/profile/profile!./src/pages/profile/profile.tsx ***!
  \************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Profile; }
/* harmony export */ });
/* harmony import */ var E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regenerator.js */ "./node_modules/@babel/runtime/helpers/esm/regenerator.js");
/* harmony import */ var E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _stores_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../stores/user */ "./src/stores/user.ts");
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth */ "./src/services/auth.ts");
/* harmony import */ var _components_CustomNav_CustomNav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/CustomNav/CustomNav */ "./src/components/CustomNav/CustomNav.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");











function Profile() {
  var _useUserStore = (0,_stores_user__WEBPACK_IMPORTED_MODULE_2__.useUserStore)(),
    user = _useUserStore.user,
    logout = _useUserStore.logout;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
    _useState2 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState, 2),
    profile = _useState2[0],
    setProfile = _useState2[1];
  (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__.useDidShow)(function () {
    fetchProfile();
  });
  var fetchProfile = /*#__PURE__*/function () {
    var _ref = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__["default"])(/*#__PURE__*/(0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_8__["default"])().m(function _callee() {
      var res, _t;
      return (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_8__["default"])().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            if (user) {
              _context.n = 1;
              break;
            }
            return _context.a(2);
          case 1:
            _context.p = 1;
            _context.n = 2;
            return _services_auth__WEBPACK_IMPORTED_MODULE_3__.authService.getProfile();
          case 2:
            res = _context.v;
            if (res.ok && res.user) {
              setProfile(res.user);
            }
            _context.n = 4;
            break;
          case 3:
            _context.p = 3;
            _t = _context.v;
            console.error("获取资料失败:", _t);
          case 4:
            return _context.a(2);
        }
      }, _callee, null, [[1, 3]]);
    }));
    return function fetchProfile() {
      return _ref.apply(this, arguments);
    };
  }();
  if (!user) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
      className: "page-profile-loggedout",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_CustomNav_CustomNav__WEBPACK_IMPORTED_MODULE_4__["default"], {
        title: "\u6211\u7684"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
        className: "login-empty",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
          className: "login-empty-icon",
          children: "\uD83C\uDFF8"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
          className: "login-empty-text",
          children: "\u767B\u5F55\u540E\u4F53\u9A8C\u5168\u90E8\u529F\u80FD"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Button, {
          className: "login-btn",
          onClick: function onClick() {
            return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().navigateTo({
              url: "/pages/login/login"
            });
          },
          children: "\u5FAE\u4FE1\u4E00\u952E\u767B\u5F55"
        })]
      })]
    });
  }

  // 学员身份状态
  var studentStatus = function () {
    var sp = profile === null || profile === void 0 ? void 0 : profile.studentProfile;
    if (!sp) return {
      done: false,
      label: "未开通"
    };
    var required = [!!(profile !== null && profile !== void 0 && profile.avatarVirtual), !!(profile !== null && profile !== void 0 && profile.avatarReal),
    // 真人头像必须审核通过才能开通
    (profile === null || profile === void 0 ? void 0 : profile.studentAvatarStatus) === "verified", !!(profile !== null && profile !== void 0 && profile.name), !!(profile !== null && profile !== void 0 && profile.phone) && /^1[3-9]\d{9}$/.test(profile.phone), !!sp.realName, !!sp.idNumber, sp.level > 0];
    var allDone = required.every(Boolean);
    return {
      done: allDone,
      label: allDone ? "已开通" : "未完善"
    };
  }();

  // 陪练身份状态
  var coachStatus = function () {
    var cp = profile === null || profile === void 0 ? void 0 : profile.coachProfile;
    if (!cp) return {
      done: false,
      label: "未开通"
    };
    var required = [!!(profile !== null && profile !== void 0 && profile.avatarVirtual), !!(profile !== null && profile !== void 0 && profile.avatarReal),
    // 真人头像必须审核通过才能开通
    (profile === null || profile === void 0 ? void 0 : profile.coachAvatarStatus) === "verified", !!(profile !== null && profile !== void 0 && profile.name), !!(profile !== null && profile !== void 0 && profile.phone) && /^1[3-9]\d{9}$/.test(profile.phone), !!cp.realName, !!cp.bio, !!cp.teachingInfo, !!cp.city, cp.level > 0];
    var allDone = required.every(Boolean);
    return {
      done: allDone,
      label: allDone ? "已开通" : "未完善"
    };
  }();

  // 订单网格入口（无"已取消"：待确认订单若未撮合成功，系统自动从订单记录中移除）
  var orderEntries = [{
    icon: "📋",
    text: "全部",
    status: undefined
  }, {
    icon: "⏳",
    text: "待确认",
    status: "pending"
  }, {
    icon: "📊",
    text: "进行中",
    status: "in_progress"
  }, {
    icon: "✅",
    text: "已完成",
    status: "completed"
  }];

  // 身份菜单
  var identityMenu = [{
    label: "我的学员身份",
    icon: "🏸",
    status: studentStatus.label,
    statusDone: studentStatus.done,
    url: "/pages/profile-edit/profile-edit?tab=student",
    gradient: "orange"
  }, {
    label: "我的陪练员身份",
    icon: "🎯",
    status: coachStatus.label,
    statusDone: coachStatus.done,
    url: "/pages/profile-edit/profile-edit?tab=coach",
    gradient: "green"
  }];

  // 功能菜单（"我的订单"已合并进上方"订单管理"网格）
  var funcMenu = [{
    label: "我的发布",
    icon: "📢",
    url: "/pages/my-availabilities/my-availabilities"
  }, {
    label: "我的关注",
    icon: "⭐",
    url: "/pages/following/following"
  }, {
    label: "意见反馈",
    icon: "💬",
    url: "/pages/feedback/feedback"
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
    className: "page-profile",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_CustomNav_CustomNav__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: "\u6211\u7684"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
      className: "header",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
        className: "user-info",
        onClick: function onClick() {
          return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().navigateTo({
            url: "/pages/profile-edit/profile-edit?tab=student"
          });
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
          className: "avatar",
          children: user.avatarUrl ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Image, {
            src: user.avatarUrl,
            className: "avatar-img",
            mode: "aspectFill"
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
            className: "avatar-placeholder",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
              children: (user.nickname || "用")[0]
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
          className: "user-details",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
            className: "nickname",
            children: user.nickname || "用户"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
            className: "phone",
            children: profile !== null && profile !== void 0 && profile.phone ? "ID\uFF1A".concat(profile.phone) : "未绑定手机号"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
          className: "setting-btn",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
            className: "setting-arrow",
            children: "\u203A"
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
        className: "balance-cards",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
          className: "balance-card orange",
          onClick: function onClick() {
            return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().navigateTo({
              url: "/pages/orders/orders?role=student"
            });
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
            className: "card-content",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
              className: "amount",
              children: studentStatus.done ? "学员" : "未开通"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
              className: "label",
              children: "\u5B66\u5458\u8EAB\u4EFD"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
              className: "view-btn",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
                className: "view-arrow",
                children: "\u203A"
              })
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
          className: "balance-card green",
          onClick: function onClick() {
            return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().navigateTo({
              url: "/pages/orders/orders?role=coach"
            });
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
            className: "card-content",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
              className: "amount",
              children: coachStatus.done ? "陪练" : "未开通"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
              className: "label",
              children: "\u966A\u7EC3\u8EAB\u4EFD"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
              className: "view-btn",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
                className: "view-arrow",
                children: "\u203A"
              })
            })]
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
      className: "order-section",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
        className: "section-title",
        children: "\u8BA2\u5355\u7BA1\u7406"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
        className: "order-grid",
        children: orderEntries.map(function (item) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
            className: "order-item",
            onClick: function onClick() {
              return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().navigateTo({
                url: "/pages/orders/orders".concat(item.status ? "?status=".concat(item.status) : "")
              });
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
              className: "order-icon",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
                className: "order-emoji",
                children: item.icon
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
              className: "order-text",
              children: item.text
            })]
          }, item.text);
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
      className: "menu-section",
      children: identityMenu.map(function (item, idx) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
            className: "menu-item",
            onClick: function onClick() {
              return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().navigateTo({
                url: item.url
              });
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
              className: "menu-icon-wrap ".concat(item.gradient),
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
                className: "menu-icon",
                children: item.icon
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
              className: "menu-label",
              children: item.label
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
              className: "menu-status ".concat(item.statusDone ? "done" : "pending"),
              children: item.status
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
              className: "menu-arrow",
              children: "\u203A"
            })]
          }), idx < identityMenu.length - 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
            className: "menu-divider"
          })]
        }, item.label);
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
      className: "menu-section",
      children: funcMenu.map(function (item, idx) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
            className: "menu-item",
            onClick: function onClick() {
              return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().navigateTo({
                url: item.url
              });
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
              className: "menu-icon-wrap gray",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
                className: "menu-icon",
                children: item.icon
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
              className: "menu-label",
              children: item.label
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
              className: "menu-arrow",
              children: "\u203A"
            })]
          }), idx < funcMenu.length - 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
            className: "menu-divider"
          })]
        }, item.label);
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
      className: "logout-section",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Button, {
        className: "logout-btn",
        onClick: logout,
        children: "\u9000\u51FA\u767B\u5F55"
      })
    })]
  });
}

/***/ }),

/***/ "./src/pages/profile/profile.tsx":
/*!***************************************!*\
  !*** ./src/pages/profile/profile.tsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/dsl/common.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_profile_profile_profile_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/profile/profile!./profile.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/profile/profile!./src/pages/profile/profile.tsx");


var config = {"navigationBarTitleText":"我的","navigationStyle":"custom"};



var taroOption = (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_profile_profile_profile_tsx__WEBPACK_IMPORTED_MODULE_0__["default"], 'pages/profile/profile', {root:{cn:[]}}, config || {})
if (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_profile_profile_profile_tsx__WEBPACK_IMPORTED_MODULE_0__["default"] && _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_profile_profile_profile_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors) {
  taroOption.behaviors = (taroOption.behaviors || []).concat(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_profile_profile_profile_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors)
}
var inst = Page(taroOption)



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_profile_profile_profile_tsx__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/profile/profile.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=profile.js.map