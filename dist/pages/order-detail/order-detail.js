"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/order-detail/order-detail"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/order-detail/order-detail!./src/pages/order-detail/order-detail.tsx":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/order-detail/order-detail!./src/pages/order-detail/order-detail.tsx ***!
  \********************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ OrderDetail; }
/* harmony export */ });
/* harmony import */ var E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regenerator.js */ "./node_modules/@babel/runtime/helpers/esm/regenerator.js");
/* harmony import */ var E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_invitations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/invitations */ "./src/services/invitations.ts");
/* harmony import */ var _services_orders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/orders */ "./src/services/orders.ts");
/* harmony import */ var _services_request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/request */ "./src/services/request.ts");
/* harmony import */ var _stores_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../stores/user */ "./src/stores/user.ts");
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Loading */ "./src/components/Loading.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");













function formatTime(s, e) {
  if (s == null || e == null) return "";
  return "".concat(s, ":00-").concat(e, ":00");
}
function formatDate(dateStr) {
  if (!dateStr) return "待定";
  var d = new Date(dateStr);
  return "".concat(d.getFullYear(), "-").concat(String(d.getMonth() + 1).padStart(2, "0"), "-").concat(String(d.getDate()).padStart(2, "0"), " ").concat(String(d.getHours()).padStart(2, "0"), ":").concat(String(d.getMinutes()).padStart(2, "0"));
}

/** 时间线时间格式：M/D HH:mm */
function formatTimelineDate(dateStr) {
  if (!dateStr) return "待操作";
  var d = new Date(dateStr);
  return "".concat(d.getMonth() + 1, "/").concat(d.getDate(), " ").concat(String(d.getHours()).padStart(2, "0"), ":").concat(String(d.getMinutes()).padStart(2, "0"));
}
function OrderDetail() {
  var _order$checkIn$validC, _order$checkIn, _order$checkIn$startT, _order$checkIn2, _order$checkIn3, _order$checkIn$startG, _order$checkIn$endGps;
  var router = (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  var id = router.params.id;
  var _useUserStore = (0,_stores_user__WEBPACK_IMPORTED_MODULE_5__.useUserStore)(),
    user = _useUserStore.user;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState2 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState, 2),
    order = _useState2[0],
    setOrder = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState4 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState6 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState5, 2),
    actionLoading = _useState6[0],
    setActionLoading = _useState6[1];

  // 打卡
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState8 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState7, 2),
    showCheckin = _useState8[0],
    setShowCheckin = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState0 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState9, 2),
    checkinPhoto = _useState0[0],
    setCheckinPhoto = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState10 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState1, 2),
    checkinLat = _useState10[0],
    setCheckinLat = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState12 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState11, 2),
    checkinLng = _useState12[0],
    setCheckinLng = _useState12[1];

  // 评价
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState14 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState13, 2),
    showReview = _useState14[0],
    setShowReview = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(5),
    _useState16 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState15, 2),
    reviewRating = _useState16[0],
    setReviewRating = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState18 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState17, 2),
    reviewComment = _useState18[0],
    setReviewComment = _useState18[1];
  var fetchOrder = /*#__PURE__*/function () {
    var _ref = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__["default"])(/*#__PURE__*/(0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_10__["default"])().m(function _callee() {
      var res, found, _t;
      return (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_10__["default"])().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            if (id) {
              _context.n = 1;
              break;
            }
            return _context.a(2);
          case 1:
            setLoading(true);
            _context.p = 2;
            _context.n = 3;
            return _services_invitations__WEBPACK_IMPORTED_MODULE_2__.invitationsService.orders();
          case 3:
            res = _context.v;
            if (res.ok) {
              found = (res.items || []).find(function (o) {
                return o.id === id;
              });
              setOrder(found || null);
            }
            _context.n = 5;
            break;
          case 4:
            _context.p = 4;
            _t = _context.v;
            console.error("获取订单详情失败:", _t);
          case 5:
            _context.p = 5;
            setLoading(false);
            return _context.f(5);
          case 6:
            return _context.a(2);
        }
      }, _callee, null, [[2, 4, 5, 6]]);
    }));
    return function fetchOrder() {
      return _ref.apply(this, arguments);
    };
  }();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetchOrder();
  }, [id]);
  if (loading) return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
    className: "page-detail",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_6__["default"], {})
  });
  if (!order) return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
    className: "page-detail",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
      className: "empty-state",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
        children: "\u8BA2\u5355\u4E0D\u5B58\u5728"
      })
    })
  });
  var isCoach = order.myRole === "coach";
  var isStudent = order.myRole === "student";

  // 订单状态判断
  var isPendingConfirm = order.orderStatus === null && order.status === "accepted";
  var isInProgress = order.orderStatus === "in_progress";
  var isCompleted = order.orderStatus === "completed";
  var isClosed = order.orderStatus === "closed";
  var bothConfirmed = order.studentConfirmedAt && order.coachConfirmedAt;
  var iConfirmed = isStudent ? order.studentConfirmedAt : order.coachConfirmedAt;
  var peerConfirmed = isStudent ? order.coachConfirmedAt : order.studentConfirmedAt;

  // 打卡状态
  var hasCheckin = order.checkIn != null;
  var checkinValid = (_order$checkIn$validC = (_order$checkIn = order.checkIn) === null || _order$checkIn === void 0 ? void 0 : _order$checkIn.validCheckIn) !== null && _order$checkIn$validC !== void 0 ? _order$checkIn$validC : false;

  // 订单时间线 6 节点
  var timeline = [{
    label: "双方同意",
    time: order.acceptedAt,
    done: !!order.acceptedAt
  }, {
    label: "学员确认练球",
    time: order.studentConfirmedAt,
    done: !!order.studentConfirmedAt
  }, {
    label: "陪练确认练球",
    time: order.coachConfirmedAt,
    done: !!order.coachConfirmedAt
  }, {
    label: "打卡开始",
    time: (_order$checkIn$startT = (_order$checkIn2 = order.checkIn) === null || _order$checkIn2 === void 0 ? void 0 : _order$checkIn2.startTime) !== null && _order$checkIn$startT !== void 0 ? _order$checkIn$startT : null,
    done: !!((_order$checkIn3 = order.checkIn) !== null && _order$checkIn3 !== void 0 && _order$checkIn3.startTime)
  }, {
    label: "学员确认完成",
    time: order.studentCompletedAt,
    done: !!order.studentCompletedAt
  }, {
    label: "订单完成",
    time: order.orderClosedAt,
    done: !!order.orderClosedAt || order.orderStatus === "completed"
  }];

  // 确认练球
  var handleConfirmPractice = /*#__PURE__*/function () {
    var _ref2 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__["default"])(/*#__PURE__*/(0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_10__["default"])().m(function _callee2() {
      var res, _t2;
      return (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_10__["default"])().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            if (!(!id || actionLoading)) {
              _context2.n = 1;
              break;
            }
            return _context2.a(2);
          case 1:
            setActionLoading(true);
            _context2.p = 2;
            _context2.n = 3;
            return _services_orders__WEBPACK_IMPORTED_MODULE_3__.ordersService.confirmPractice(id);
          case 3:
            res = _context2.v;
            if (res.ok) {
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
                title: "已确认练球",
                icon: "success"
              });
              fetchOrder();
            }
            _context2.n = 5;
            break;
          case 4:
            _context2.p = 4;
            _t2 = _context2.v;
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: (_t2 === null || _t2 === void 0 ? void 0 : _t2.message) || "操作失败",
              icon: "none"
            });
          case 5:
            _context2.p = 5;
            setActionLoading(false);
            return _context2.f(5);
          case 6:
            return _context2.a(2);
        }
      }, _callee2, null, [[2, 4, 5, 6]]);
    }));
    return function handleConfirmPractice() {
      return _ref2.apply(this, arguments);
    };
  }();

  // 获取GPS并打卡
  var handleGetLocation = function handleGetLocation() {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().getLocation({
      type: "gcj02",
      success: function success(res) {
        setCheckinLat(res.latitude);
        setCheckinLng(res.longitude);
        setShowCheckin(true);
      },
      fail: function fail() {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
          title: "请开启定位权限",
          icon: "none"
        });
      }
    });
  };

  // 选择照片
  var handleChoosePhoto = function handleChoosePhoto() {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().chooseImage({
      count: 1,
      sizeType: ["compressed"],
      sourceType: ["camera", "album"],
      success: function success(res) {
        setCheckinPhoto(res.tempFilePaths[0]);
      },
      fail: function fail() {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
          title: "请选择照片",
          icon: "none"
        });
      }
    });
  };

  // 提交打卡
  var handleSubmitCheckin = /*#__PURE__*/function () {
    var _ref3 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__["default"])(/*#__PURE__*/(0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_10__["default"])().m(function _callee3() {
      var uploadRes, uploadData, res, _t3;
      return (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_10__["default"])().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            if (!(!id || actionLoading)) {
              _context3.n = 1;
              break;
            }
            return _context3.a(2);
          case 1:
            if (checkinPhoto) {
              _context3.n = 2;
              break;
            }
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: "请上传球馆照片",
              icon: "none"
            });
            return _context3.a(2);
          case 2:
            if (!(checkinLat == null || checkinLng == null)) {
              _context3.n = 3;
              break;
            }
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: "请先获取定位",
              icon: "none"
            });
            return _context3.a(2);
          case 3:
            setActionLoading(true);
            _context3.p = 4;
            _context3.n = 5;
            return _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().uploadFile({
              url: "".concat(_services_request__WEBPACK_IMPORTED_MODULE_4__.BASE_URL, "/upload/checkin"),
              filePath: checkinPhoto,
              name: "file",
              header: {
                Authorization: "Bearer ".concat(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().getStorageSync("auth_token"))
              }
            });
          case 5:
            uploadRes = _context3.v;
            uploadData = JSON.parse(uploadRes.data);
            if (!(!uploadData.ok || !uploadData.url)) {
              _context3.n = 6;
              break;
            }
            throw new Error("照片上传失败");
          case 6:
            _context3.n = 7;
            return _services_orders__WEBPACK_IMPORTED_MODULE_3__.ordersService.checkin(id, {
              startPhoto: uploadData.url,
              startGpsLat: checkinLat,
              startGpsLng: checkinLng
            });
          case 7:
            res = _context3.v;
            if (res.ok) {
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
                title: res.validCheckIn ? "打卡成功" : "打卡成功（时间窗口外，不计入有效统计）",
                icon: "none"
              });
              setShowCheckin(false);
              fetchOrder();
            }
            _context3.n = 9;
            break;
          case 8:
            _context3.p = 8;
            _t3 = _context3.v;
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: (_t3 === null || _t3 === void 0 ? void 0 : _t3.message) || "打卡失败",
              icon: "none"
            });
          case 9:
            _context3.p = 9;
            setActionLoading(false);
            return _context3.f(9);
          case 10:
            return _context3.a(2);
        }
      }, _callee3, null, [[4, 8, 9, 10]]);
    }));
    return function handleSubmitCheckin() {
      return _ref3.apply(this, arguments);
    };
  }();

  // 学员确认完成
  var handleStudentComplete = /*#__PURE__*/function () {
    var _ref4 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__["default"])(/*#__PURE__*/(0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_10__["default"])().m(function _callee4() {
      var res, _t4;
      return (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_10__["default"])().w(function (_context4) {
        while (1) switch (_context4.p = _context4.n) {
          case 0:
            if (!(!id || actionLoading)) {
              _context4.n = 1;
              break;
            }
            return _context4.a(2);
          case 1:
            setActionLoading(true);
            _context4.p = 2;
            _context4.n = 3;
            return _services_orders__WEBPACK_IMPORTED_MODULE_3__.ordersService.studentComplete(id);
          case 3:
            res = _context4.v;
            if (res.ok) {
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
                title: "已确认完成，等待陪练确认",
                icon: "success"
              });
              fetchOrder();
            }
            _context4.n = 5;
            break;
          case 4:
            _context4.p = 4;
            _t4 = _context4.v;
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: (_t4 === null || _t4 === void 0 ? void 0 : _t4.message) || "操作失败",
              icon: "none"
            });
          case 5:
            _context4.p = 5;
            setActionLoading(false);
            return _context4.f(5);
          case 6:
            return _context4.a(2);
        }
      }, _callee4, null, [[2, 4, 5, 6]]);
    }));
    return function handleStudentComplete() {
      return _ref4.apply(this, arguments);
    };
  }();

  // 陪练确认完成
  var handleCoachComplete = /*#__PURE__*/function () {
    var _ref5 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__["default"])(/*#__PURE__*/(0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_10__["default"])().m(function _callee5() {
      var res, _t5;
      return (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_10__["default"])().w(function (_context5) {
        while (1) switch (_context5.p = _context5.n) {
          case 0:
            if (!(!id || actionLoading)) {
              _context5.n = 1;
              break;
            }
            return _context5.a(2);
          case 1:
            setActionLoading(true);
            _context5.p = 2;
            _context5.n = 3;
            return _services_orders__WEBPACK_IMPORTED_MODULE_3__.ordersService.coachComplete(id);
          case 3:
            res = _context5.v;
            if (res.ok) {
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
                title: "订单已完成",
                icon: "success"
              });
              fetchOrder();
            }
            _context5.n = 5;
            break;
          case 4:
            _context5.p = 4;
            _t5 = _context5.v;
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: (_t5 === null || _t5 === void 0 ? void 0 : _t5.message) || "操作失败",
              icon: "none"
            });
          case 5:
            _context5.p = 5;
            setActionLoading(false);
            return _context5.f(5);
          case 6:
            return _context5.a(2);
        }
      }, _callee5, null, [[2, 4, 5, 6]]);
    }));
    return function handleCoachComplete() {
      return _ref5.apply(this, arguments);
    };
  }();

  // 提交评价
  var handleSubmitReview = /*#__PURE__*/function () {
    var _ref6 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__["default"])(/*#__PURE__*/(0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_10__["default"])().m(function _callee6() {
      var _order$checkIn4, res, _t6;
      return (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_10__["default"])().w(function (_context6) {
        while (1) switch (_context6.p = _context6.n) {
          case 0:
            if (!(!id || actionLoading)) {
              _context6.n = 1;
              break;
            }
            return _context6.a(2);
          case 1:
            setActionLoading(true);
            _context6.p = 2;
            _context6.n = 3;
            return _services_orders__WEBPACK_IMPORTED_MODULE_3__.ordersService.review(id, {
              checkInId: (_order$checkIn4 = order.checkIn) === null || _order$checkIn4 === void 0 ? void 0 : _order$checkIn4.id,
              rating: reviewRating,
              comment: reviewComment.trim() || undefined
            });
          case 3:
            res = _context6.v;
            if (res.ok) {
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
                title: "评价成功",
                icon: "success"
              });
              setShowReview(false);
              fetchOrder();
            }
            _context6.n = 5;
            break;
          case 4:
            _context6.p = 4;
            _t6 = _context6.v;
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: (_t6 === null || _t6 === void 0 ? void 0 : _t6.message) || "评价失败",
              icon: "none"
            });
          case 5:
            _context6.p = 5;
            setActionLoading(false);
            return _context6.f(5);
          case 6:
            return _context6.a(2);
        }
      }, _callee6, null, [[2, 4, 5, 6]]);
    }));
    return function handleSubmitReview() {
      return _ref6.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
    className: "page-detail",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
      className: "detail-card",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
        className: "order-status-header",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
          className: "order-status-title",
          children: isCompleted ? "订单已完成" : isClosed ? "订单已关闭" : isInProgress ? "订单进行中" : "待确认订单"
        }), order.orderNo && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
          className: "order-no",
          children: order.orderNo
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
      className: "detail-card",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
        className: "peer-info",
        children: [order.peerAvatar ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Image, {
          src: order.peerAvatar,
          className: "peer-avatar",
          mode: "aspectFill"
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
          className: "peer-avatar peer-avatar-placeholder",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
            children: (order.peerName || "?")[0]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
          className: "peer-meta",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
            className: "peer-name",
            children: order.peerName
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
            className: "peer-role",
            children: isCoach ? "学员" : "陪练员"
          })]
        })]
      }), order.peerPhone && !isCompleted && !isClosed && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
        className: "peer-phone",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
          className: "phone-label",
          children: "\u8054\u7CFB\u65B9\u5F0F"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
          className: "phone-value",
          children: order.peerPhone
        })]
      }), (isCompleted || isClosed) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
        className: "peer-phone-retracted",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
          className: "phone-retracted-text",
          children: "\u670D\u52A1\u5DF2\u5B8C\u6210\uFF0C\u8054\u7CFB\u65B9\u5F0F\u5DF2\u64A4\u56DE"
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
      className: "detail-card",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
        className: "section-title",
        children: "\u8BA2\u5355\u4FE1\u606F"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
        className: "info-grid",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
          className: "info-item",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
            className: "info-label",
            children: "\u6765\u6E90"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
            className: "info-value",
            children: order.sourceTitle
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
          className: "info-item",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
            className: "info-label",
            children: "\u65E5\u671F"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
            className: "info-value",
            children: order.playDate || "待定"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
          className: "info-item",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
            className: "info-label",
            children: "\u65F6\u95F4"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
            className: "info-value",
            children: formatTime(order.startHour, order.endHour)
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
          className: "info-item",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
            className: "info-label",
            children: "\u89D2\u8272"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
            className: "info-value",
            children: isCoach ? "陪练员" : "学员"
          })]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
      className: "detail-card",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
        className: "section-title",
        children: "\u8BA2\u5355\u52A8\u6001"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
        className: "timeline",
        children: timeline.map(function (node, i) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
            className: "timeline-node ".concat(node.done ? "done" : "", " ").concat(i < timeline.length - 1 ? "has-line" : ""),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
              className: "timeline-left",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
                className: "timeline-icon",
                children: node.done ? "✓" : "○"
              }), i < timeline.length - 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
                className: "timeline-line"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
              className: "timeline-content",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
                className: "timeline-label",
                children: node.label
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
                className: "timeline-time ".concat(!node.done ? "pending" : ""),
                children: node.done ? formatTimelineDate(node.time) : "待操作"
              })]
            })]
          }, i);
        })
      })]
    }), isPendingConfirm && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
      className: "detail-card",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
        className: "section-title",
        children: "\u786E\u8BA4\u7EC3\u7403"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
        className: "confirm-status",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
          className: "confirm-item",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
            className: "confirm-icon ".concat(order.studentConfirmedAt ? "done" : ""),
            children: order.studentConfirmedAt ? "✓" : "○"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
            className: "confirm-text",
            children: ["\u5B66\u5458\u786E\u8BA4 ", order.studentConfirmedAt ? formatDate(order.studentConfirmedAt) : "待确认"]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
          className: "confirm-item",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
            className: "confirm-icon ".concat(order.coachConfirmedAt ? "done" : ""),
            children: order.coachConfirmedAt ? "✓" : "○"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
            className: "confirm-text",
            children: ["\u966A\u7EC3\u786E\u8BA4 ", order.coachConfirmedAt ? formatDate(order.coachConfirmedAt) : "待确认"]
          })]
        })]
      }), !iConfirmed && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Button, {
        className: "action-btn",
        onClick: handleConfirmPractice,
        loading: actionLoading,
        disabled: actionLoading,
        children: "\u786E\u8BA4\u7EC3\u7403"
      }), iConfirmed && !bothConfirmed && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
        className: "wait-hint",
        children: "\u7B49\u5F85\u5BF9\u65B9\u786E\u8BA4\u7EC3\u7403..."
      }), bothConfirmed && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
        className: "success-hint",
        children: "\u53CC\u65B9\u5DF2\u786E\u8BA4\uFF0C\u8BA2\u5355\u8FDB\u5165\u8FDB\u884C\u4E2D"
      })]
    }), isInProgress && isCoach && !hasCheckin && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
      className: "detail-card",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
        className: "section-title",
        children: "\u966A\u7EC3\u6253\u5361"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
        className: "checkin-hint",
        children: "\u8BF7\u5728\u6D3B\u52A8\u65F6\u95F4\u524D\u540E1\u5C0F\u65F6\u5185\u6253\u5361\uFF0C\u9700\u5F00\u542F\u5B9A\u4F4D\u5E76\u4E0A\u4F20\u7403\u9986\u7167\u7247"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Button, {
        className: "action-btn",
        onClick: handleGetLocation,
        loading: actionLoading,
        children: "\u83B7\u53D6\u5B9A\u4F4D\u5E76\u6253\u5361"
      })]
    }), hasCheckin && order.checkIn && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
      className: "detail-card",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
        className: "section-title",
        children: "\u6253\u5361\u8BB0\u5F55"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
        className: "checkin-header",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
          className: "checkin-badge ".concat(checkinValid ? "valid" : "invalid"),
          children: checkinValid ? "有效打卡" : "无效打卡"
        })
      }), !checkinValid && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
        className: "checkin-warn",
        children: "\u26A0\uFE0F \u6253\u5361\u65E0\u6548\uFF1A\u672A\u5728\u6D3B\u52A8\u65F6\u95F4\u524D\u540E1\u5C0F\u65F6\u5185\u5B8C\u6210\u6253\u5361\uFF0C\u6B64\u8BA2\u5355\u4E0D\u8BA1\u5165\u5B8C\u6210\u6570\u4E14\u8BC4\u4EF7\u65E0\u6548"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
        className: "checkin-photos",
        children: [order.checkIn.startPhoto && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
          className: "checkin-photo-block",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Image, {
            src: order.checkIn.startPhoto,
            className: "checkin-photo",
            mode: "aspectFill"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
            className: "checkin-photo-label",
            children: "\u5F00\u59CB\u7167\u7247"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
            className: "checkin-photo-time",
            children: formatTimelineDate(order.checkIn.startTime)
          }), order.checkIn.startGpsLat != null && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
            className: "checkin-photo-gps",
            children: ["\uD83D\uDCCD ", order.checkIn.startGpsLat.toFixed(4), ", ", (_order$checkIn$startG = order.checkIn.startGpsLng) === null || _order$checkIn$startG === void 0 ? void 0 : _order$checkIn$startG.toFixed(4)]
          })]
        }), order.checkIn.endPhoto && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
          className: "checkin-photo-block",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Image, {
            src: order.checkIn.endPhoto,
            className: "checkin-photo",
            mode: "aspectFill"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
            className: "checkin-photo-label",
            children: "\u7ED3\u675F\u7167\u7247"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
            className: "checkin-photo-time",
            children: formatTimelineDate(order.checkIn.endTime)
          }), order.checkIn.endGpsLat != null && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
            className: "checkin-photo-gps",
            children: ["\uD83D\uDCCD ", order.checkIn.endGpsLat.toFixed(4), ", ", (_order$checkIn$endGps = order.checkIn.endGpsLng) === null || _order$checkIn$endGps === void 0 ? void 0 : _order$checkIn$endGps.toFixed(4)]
          })]
        })]
      })]
    }), isInProgress && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
      className: "detail-card",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
        className: "section-title",
        children: "\u5B8C\u6210\u8BA2\u5355"
      }), isStudent && !order.studentCompletedAt && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Button, {
        className: "action-btn",
        onClick: handleStudentComplete,
        loading: actionLoading,
        disabled: actionLoading,
        children: "\u786E\u8BA4\u5B8C\u6210\uFF08\u5B66\u5458\u5148\u64CD\u4F5C\uFF09"
      }), isStudent && order.studentCompletedAt && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
        className: "success-hint",
        children: "\u4F60\u5DF2\u786E\u8BA4\u5B8C\u6210\uFF0C\u7B49\u5F85\u966A\u7EC3\u786E\u8BA4"
      }), isCoach && !order.studentCompletedAt && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
        className: "wait-hint",
        children: "\u7B49\u5F85\u5B66\u5458\u5148\u786E\u8BA4\u5B8C\u6210"
      }), isCoach && order.studentCompletedAt && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Button, {
        className: "action-btn",
        onClick: handleCoachComplete,
        loading: actionLoading,
        disabled: actionLoading,
        children: "\u786E\u8BA4\u5B8C\u6210\uFF08\u966A\u7EC3\u786E\u8BA4\u540E\u8BA2\u5355\u5B8C\u6210\uFF09"
      })]
    }), (isCompleted || isClosed) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
      className: "detail-card",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
        className: "section-title",
        children: "\u8BC4\u4EF7"
      }), order.myReviewDone ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
        className: "success-hint",
        children: "\u4F60\u5DF2\u8BC4\u4EF7"
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Button, {
        className: "action-btn secondary",
        onClick: function onClick() {
          return setShowReview(true);
        },
        children: "\u53BB\u8BC4\u4EF7"
      }), order.peerReviewDone && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
        className: "peer-review-hint",
        children: "\u5BF9\u65B9\u5DF2\u8BC4\u4EF7"
      })]
    }), showCheckin && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
      className: "modal-overlay",
      onClick: function onClick() {
        return setShowCheckin(false);
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
        className: "modal-content",
        onClick: function onClick(e) {
          return e.stopPropagation();
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
          className: "modal-header",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
            className: "modal-title",
            children: "\u966A\u7EC3\u6253\u5361"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
            className: "modal-close",
            onClick: function onClick() {
              return setShowCheckin(false);
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
              children: "\u2715"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
          className: "modal-body",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
            className: "modal-hint",
            children: "\u8BF7\u4E0A\u4F20\u7403\u9986\u73B0\u573A\u7167\u7247\u5E76\u786E\u8BA4\u5B9A\u4F4D"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
            className: "photo-area",
            onClick: handleChoosePhoto,
            children: checkinPhoto ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Image, {
              src: checkinPhoto,
              className: "photo-preview",
              mode: "aspectFill"
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
              className: "photo-placeholder",
              children: "\u70B9\u51FB\u4E0A\u4F20\u7403\u9986\u7167\u7247"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
            className: "gps-info",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
              className: "gps-label",
              children: "\u5B9A\u4F4D\u72B6\u6001"
            }), checkinLat != null ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
              className: "gps-value",
              children: ["\u5DF2\u83B7\u53D6 (", checkinLat.toFixed(4), ", ", checkinLng === null || checkinLng === void 0 ? void 0 : checkinLng.toFixed(4), ")"]
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
              className: "gps-value gps-waiting",
              children: "\u672A\u83B7\u53D6"
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
          className: "modal-footer",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Button, {
            className: "modal-cancel",
            onClick: function onClick() {
              return setShowCheckin(false);
            },
            children: "\u53D6\u6D88"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Button, {
            className: "modal-confirm",
            onClick: handleSubmitCheckin,
            loading: actionLoading,
            disabled: actionLoading,
            children: "\u786E\u8BA4\u6253\u5361"
          })]
        })]
      })
    }), showReview && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
      className: "modal-overlay",
      onClick: function onClick() {
        return setShowReview(false);
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
        className: "modal-content",
        onClick: function onClick(e) {
          return e.stopPropagation();
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
          className: "modal-header",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
            className: "modal-title",
            children: "\u8BC4\u4EF7"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
            className: "modal-close",
            onClick: function onClick() {
              return setShowReview(false);
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
              children: "\u2715"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
          className: "modal-body",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
            className: "modal-hint",
            children: "\u8BF7\u4E3A\u672C\u6B21\u7EC3\u7403\u4F53\u9A8C\u6253\u5206"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
            className: "review-stars",
            children: [1, 2, 3, 4, 5].map(function (s) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
                className: "review-star ".concat(s <= reviewRating ? "active" : ""),
                onClick: function onClick() {
                  return setReviewRating(s);
                },
                children: "\u2605"
              }, s);
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Textarea, {
            className: "modal-textarea",
            placeholder: "\u5199\u70B9\u8BC4\u4EF7\u5427\uFF08\u9009\u586B\uFF09",
            value: reviewComment,
            onInput: function onInput(e) {
              return setReviewComment(e.detail.value);
            },
            maxlength: 50
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
            className: "modal-disclaimer",
            children: "\u672C\u8BC4\u4EF7\u4E3A\u53CC\u65B9\u4E92\u8BC4\uFF0C\u5206\u6570\u5C06\u4F1A\u76F4\u63A5\u5F71\u54CD\u60A8\u5728\u5E73\u53F0\u7684\u4FE1\u7528\u54DF"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
          className: "modal-footer",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Button, {
            className: "modal-cancel",
            onClick: function onClick() {
              return setShowReview(false);
            },
            children: "\u53D6\u6D88"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Button, {
            className: "modal-confirm",
            onClick: handleSubmitReview,
            loading: actionLoading,
            disabled: actionLoading,
            children: "\u63D0\u4EA4\u8BC4\u4EF7"
          })]
        })]
      })
    })]
  });
}

/***/ }),

/***/ "./src/pages/order-detail/order-detail.tsx":
/*!*************************************************!*\
  !*** ./src/pages/order-detail/order-detail.tsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/dsl/common.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_order_detail_order_detail_order_detail_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/order-detail/order-detail!./order-detail.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/order-detail/order-detail!./src/pages/order-detail/order-detail.tsx");


var config = {"navigationBarTitleText":"订单详情"};



var taroOption = (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_order_detail_order_detail_order_detail_tsx__WEBPACK_IMPORTED_MODULE_0__["default"], 'pages/order-detail/order-detail', {root:{cn:[]}}, config || {})
if (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_order_detail_order_detail_order_detail_tsx__WEBPACK_IMPORTED_MODULE_0__["default"] && _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_order_detail_order_detail_order_detail_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors) {
  taroOption.behaviors = (taroOption.behaviors || []).concat(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_order_detail_order_detail_order_detail_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors)
}
var inst = Page(taroOption)



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_order_detail_order_detail_order_detail_tsx__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/services/orders.ts":
/*!********************************!*\
  !*** ./src/services/orders.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ordersService: function() { return /* binding */ ordersService; }
/* harmony export */ });
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request */ "./src/services/request.ts");

var ordersService = {
  /** 确认练球 */confirmPractice: function confirmPractice(id) {
    return _request__WEBPACK_IMPORTED_MODULE_0__["default"].post("/orders/".concat(id, "/confirm-practice"));
  },
  /** 陪练打卡 */checkin: function checkin(id, data) {
    return _request__WEBPACK_IMPORTED_MODULE_0__["default"].post("/orders/".concat(id, "/checkin"), data);
  },
  /** 学员确认完成 */studentComplete: function studentComplete(id) {
    return _request__WEBPACK_IMPORTED_MODULE_0__["default"].post("/orders/".concat(id, "/student-complete"));
  },
  /** 教练确认完成 */coachComplete: function coachComplete(id) {
    return _request__WEBPACK_IMPORTED_MODULE_0__["default"].post("/orders/".concat(id, "/coach-complete"));
  },
  /** 创建评价 */review: function review(id, data) {
    return _request__WEBPACK_IMPORTED_MODULE_0__["default"].post("/orders/".concat(id, "/review"), data);
  }
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/order-detail/order-detail.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=order-detail.js.map