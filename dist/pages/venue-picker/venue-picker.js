"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/venue-picker/venue-picker"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/venue-picker/venue-picker!./src/pages/venue-picker/venue-picker.tsx":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/venue-picker/venue-picker!./src/pages/venue-picker/venue-picker.tsx ***!
  \********************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ VenuePicker; }
/* harmony export */ });
/* harmony import */ var E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regenerator.js */ "./node_modules/@babel/runtime/helpers/esm/regenerator.js");
/* harmony import */ var E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_location__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/location */ "./src/utils/location.ts");
/* harmony import */ var _services_qqmap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/qqmap */ "./src/services/qqmap.ts");
/* harmony import */ var _config_site__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config/site */ "./src/config/site.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");











/** 选中场地回传给发布页的数据结构 */

/** 中心标记图标（地图中心选点用） */
var CENTER_MARKER_ICON = "https://mapapi.qq.com/web/lbs/javascriptV2Demo/img/center-marker.png";
function VenuePicker() {
  // 地图状态
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      latitude: 39.908,
      longitude: 116.407
    }),
    _useState2 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState, 2),
    center = _useState2[0],
    setCenter = _useState2[1]; // 默认天安门
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState4 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState3, 2),
    userLocation = _useState4[0],
    setUserLocation = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState6 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState5, 2),
    mapReady = _useState6[0],
    setMapReady = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState8 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState7, 2),
    locating = _useState8[0],
    setLocating = _useState8[1];

  // 搜索状态
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState0 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState9, 2),
    keyword = _useState0[0],
    setKeyword = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState10 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState1, 2),
    searchResults = _useState10[0],
    setSearchResults = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState12 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState11, 2),
    searching = _useState12[0],
    setSearching = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState14 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState13, 2),
    hasSearched = _useState14[0],
    setHasSearched = _useState14[1];

  // 选中的场地
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState16 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState15, 2),
    selected = _useState16[0],
    setSelected = _useState16[1];

  // 拖拽选点状态
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState18 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState17, 2),
    dragging = _useState18[0],
    setDragging = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState20 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState19, 2),
    dragResult = _useState20[0],
    setDragResult = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState22 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState21, 2),
    resolvingAddr = _useState22[0],
    setResolvingAddr = _useState22[1];

  // 逆地址解析防抖（拖拽时避免频繁调用）
  var reverseTimerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  // ---------- 初始化定位 ----------
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    initLocation();
  }, []);
  var initLocation = /*#__PURE__*/function () {
    var _ref = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__["default"])(/*#__PURE__*/(0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_8__["default"])().m(function _callee() {
      var loc, _t;
      return (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_8__["default"])().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            setLocating(true);
            _context.p = 1;
            _context.n = 2;
            return (0,_utils_location__WEBPACK_IMPORTED_MODULE_2__.getCurrentLocation)();
          case 2:
            loc = _context.v;
            setUserLocation(loc);
            setCenter(loc);
            _context.n = 4;
            break;
          case 3:
            _context.p = 3;
            _t = _context.v;
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: (_t === null || _t === void 0 ? void 0 : _t.message) || "定位失败",
              icon: "none"
            });
          case 4:
            _context.p = 4;
            setLocating(false);
            return _context.f(4);
          case 5:
            return _context.a(2);
        }
      }, _callee, null, [[1, 3, 4, 5]]);
    }));
    return function initLocation() {
      return _ref.apply(this, arguments);
    };
  }();

  // ---------- 地图事件 ----------
  var handleRegionChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (e) {
    // 仅处理"拖拽结束"事件（type=end 且 causedBy=drag）
    if (e.type !== "end") return;
    if (e.causedBy !== "drag" && e.causedBy !== "scale") return;
    var newCenter = {
      latitude: e.detail.latitude,
      longitude: e.detail.longitude
    };
    setCenter(newCenter);
    setDragging(true);

    // 选中状态清空（拖拽后需重新确认）
    setSelected(null);

    // 防抖逆地址解析
    if (reverseTimerRef.current) clearTimeout(reverseTimerRef.current);
    reverseTimerRef.current = setTimeout(/*#__PURE__*/(0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__["default"])(/*#__PURE__*/(0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_8__["default"])().m(function _callee2() {
      var res, _t2;
      return (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_8__["default"])().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            setResolvingAddr(true);
            _context2.p = 1;
            _context2.n = 2;
            return (0,_services_qqmap__WEBPACK_IMPORTED_MODULE_3__.reverseGeocode)(newCenter.latitude, newCenter.longitude);
          case 2:
            res = _context2.v;
            setDragResult({
              name: res.name,
              address: res.address
            });
            _context2.n = 4;
            break;
          case 3:
            _context2.p = 3;
            _t2 = _context2.v;
            setDragResult(null);
          case 4:
            _context2.p = 4;
            setResolvingAddr(false);
            setDragging(false);
            return _context2.f(4);
          case 5:
            return _context2.a(2);
        }
      }, _callee2, null, [[1, 3, 4, 5]]);
    })), 500);
  }, []);
  var handleMapClick = function handleMapClick() {
    // 点击地图空白处时也触发逆地址解析（与拖拽一致）
    setSelected(null);
  };

  // 回到当前位置
  var handleLocate = function handleLocate() {
    if (userLocation) {
      setCenter(userLocation);
    } else {
      initLocation();
    }
  };

  // ---------- 搜索 ----------
  var handleSearch = /*#__PURE__*/function () {
    var _ref3 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__["default"])(/*#__PURE__*/(0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_8__["default"])().m(function _callee3() {
      var trimmed, results, _t3;
      return (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_8__["default"])().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            trimmed = keyword.trim();
            if (trimmed) {
              _context3.n = 1;
              break;
            }
            setSearchResults([]);
            setHasSearched(false);
            return _context3.a(2);
          case 1:
            setSearching(true);
            setHasSearched(true);
            _context3.p = 2;
            _context3.n = 3;
            return (0,_services_qqmap__WEBPACK_IMPORTED_MODULE_3__.searchPoi)(trimmed, userLocation || undefined);
          case 3:
            results = _context3.v;
            setSearchResults(results);
            if (results.length === 0) {
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
                title: "未找到相关球馆",
                icon: "none"
              });
            }
            _context3.n = 5;
            break;
          case 4:
            _context3.p = 4;
            _t3 = _context3.v;
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: (_t3 === null || _t3 === void 0 ? void 0 : _t3.message) || "搜索失败",
              icon: "none"
            });
          case 5:
            _context3.p = 5;
            setSearching(false);
            return _context3.f(5);
          case 6:
            return _context3.a(2);
        }
      }, _callee3, null, [[2, 4, 5, 6]]);
    }));
    return function handleSearch() {
      return _ref3.apply(this, arguments);
    };
  }();

  // 清空搜索
  var handleClearSearch = function handleClearSearch() {
    setKeyword("");
    setSearchResults([]);
    setHasSearched(false);
  };

  // ---------- 选中场地 ----------
  var handleSelectResult = function handleSelectResult(item) {
    if (item.latitude === 0 || item.longitude === 0) {
      // 降级模式下的预置球馆（无坐标）：提示用户需接入 SDK
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showModal({
        title: "提示",
        content: "该球馆为预置数据，需接入腾讯位置服务后才能获取精确位置。是否仍要选择？",
        confirmText: "仍然选择",
        cancelText: "取消",
        success: function success(res) {
          if (res.confirm) {
            setSelected(item);
          }
        }
      });
      return;
    }
    setSelected(item);
    setCenter({
      latitude: item.latitude,
      longitude: item.longitude
    });
  };

  // 使用拖拽选中的位置作为场地
  var handleUseDragLocation = function handleUseDragLocation() {
    if (!dragResult) return;
    setSelected({
      id: "drag_".concat(Date.now()),
      name: dragResult.name,
      address: dragResult.address,
      latitude: center.latitude,
      longitude: center.longitude
    });
  };

  // ---------- 快捷球馆入口 ----------
  var handlePresetClick = function handlePresetClick(name) {
    setKeyword(name);
    // 直接触发搜索
    setTimeout(function () {
      handleSearchManual(name);
    }, 50);
  };
  var handleSearchManual = /*#__PURE__*/function () {
    var _ref4 = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__["default"])(/*#__PURE__*/(0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_8__["default"])().m(function _callee4(kw) {
      var trimmed, results, _t4;
      return (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_8__["default"])().w(function (_context4) {
        while (1) switch (_context4.p = _context4.n) {
          case 0:
            trimmed = kw.trim();
            if (trimmed) {
              _context4.n = 1;
              break;
            }
            return _context4.a(2);
          case 1:
            setSearching(true);
            setHasSearched(true);
            _context4.p = 2;
            _context4.n = 3;
            return (0,_services_qqmap__WEBPACK_IMPORTED_MODULE_3__.searchPoi)(trimmed, userLocation || undefined);
          case 3:
            results = _context4.v;
            setSearchResults(results);
            _context4.n = 5;
            break;
          case 4:
            _context4.p = 4;
            _t4 = _context4.v;
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: (_t4 === null || _t4 === void 0 ? void 0 : _t4.message) || "搜索失败",
              icon: "none"
            });
          case 5:
            _context4.p = 5;
            setSearching(false);
            return _context4.f(5);
          case 6:
            return _context4.a(2);
        }
      }, _callee4, null, [[2, 4, 5, 6]]);
    }));
    return function handleSearchManual(_x) {
      return _ref4.apply(this, arguments);
    };
  }();

  // ---------- 确认场地 ----------
  var handleConfirm = function handleConfirm() {
    if (!selected) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
        title: "请先选择球馆",
        icon: "none"
      });
      return;
    }
    if (selected.latitude === 0 || selected.longitude === 0) {
      // 无坐标的预置球馆：仍允许返回，但坐标为空
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
        title: "该球馆无精确坐标，将仅保存名称",
        icon: "none"
      });
    }
    var venue = {
      name: selected.name,
      address: selected.address,
      latitude: selected.latitude,
      longitude: selected.longitude
    };

    // 通过 eventChannel 或上一页实例回传数据
    var pages = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().getCurrentPages();
    var prevPage = pages[pages.length - 2];
    if (prevPage) {
      var _onVenueSelected, _ref5;
      // 直接调用上一页方法回填（约定方法名）
      (_onVenueSelected = (_ref5 = prevPage).onVenueSelected) === null || _onVenueSelected === void 0 || _onVenueSelected.call(_ref5, venue);
    }
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateBack();
  };

  // ---------- 渲染 ----------
  // 地图 markers：搜索结果 + 选中高亮
  var markers = searchResults.filter(function (r) {
    return r.latitude !== 0 && r.longitude !== 0;
  }).map(function (r) {
    return {
      id: r.id,
      latitude: r.latitude,
      longitude: r.longitude,
      title: r.name,
      iconPath: (selected === null || selected === void 0 ? void 0 : selected.id) === r.id ? "" // 选中时用默认红色 marker
      : "https://mapapi.qq.com/web/lbs/javascriptV2Demo/img/marker_blue.png",
      width: (selected === null || selected === void 0 ? void 0 : selected.id) === r.id ? 32 : 24,
      height: (selected === null || selected === void 0 ? void 0 : selected.id) === r.id ? 40 : 30
    };
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
    className: "page-venue-picker",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
      className: "search-bar",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
        className: "search-input-wrap",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Input, {
          className: "search-input",
          placeholder: "\u641C\u7D22\u7403\u9986\u540D\u79F0\u6216\u5730\u5740",
          value: keyword,
          onInput: function onInput(e) {
            return setKeyword(e.detail.value);
          },
          onConfirm: handleSearch,
          confirmType: "search"
        }), keyword && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
          className: "clear-btn",
          onClick: handleClearSearch,
          children: "\u2715"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
        className: "search-btn",
        onClick: handleSearch,
        children: "\u641C\u7D22"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
      className: "map-container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Map, {
        className: "map",
        latitude: center.latitude,
        longitude: center.longitude,
        scale: 15,
        markers: markers,
        showLocation: true,
        enableZoom: true,
        enableScroll: true,
        enableRotate: false,
        onRegionChange: handleRegionChange,
        onClick: handleMapClick
      }), !hasSearched && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
        className: "center-marker",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
          className: "center-marker-pin"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
          className: "center-marker-shadow"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
        className: "locate-btn",
        onClick: handleLocate,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
          className: "locate-icon",
          children: "\uD83D\uDCCD"
        })
      }), dragging || dragResult ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
        className: "drag-info-card",
        children: resolvingAddr ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
          className: "drag-info-text",
          children: "\u89E3\u6790\u5730\u5740\u4E2D..."
        }) : dragResult ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
          className: "drag-info-content",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
            className: "drag-info-main",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
              className: "drag-info-name",
              children: dragResult.name
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
              className: "drag-info-address",
              children: dragResult.address
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
            className: "drag-use-btn ".concat((selected === null || selected === void 0 ? void 0 : selected.latitude) === center.latitude && (selected === null || selected === void 0 ? void 0 : selected.longitude) === center.longitude ? "active" : ""),
            onClick: handleUseDragLocation,
            children: (selected === null || selected === void 0 ? void 0 : selected.latitude) === center.latitude && (selected === null || selected === void 0 ? void 0 : selected.longitude) === center.longitude ? "✓ 已选" : "选这里"
          })]
        }) : null
      }) : null]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
      className: "list-area",
      children: [!hasSearched && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
        className: "preset-section",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
          className: "section-header",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
            className: "section-title",
            children: "\u5E38\u7528\u7403\u9986"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
            className: "section-hint",
            children: "\u70B9\u51FB\u5FEB\u901F\u641C\u7D22"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.ScrollView, {
          scrollX: true,
          className: "preset-scroll",
          enhanced: true,
          showScrollbar: false,
          children: _config_site__WEBPACK_IMPORTED_MODULE_4__.PRESET_VENUE_LIST.slice(0, 8).map(function (v) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
              className: "preset-chip",
              onClick: function onClick() {
                return handlePresetClick(v.name);
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
                className: "preset-chip-name",
                children: v.name.replace("羽毛球馆", "").replace("体育馆", "")
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
                className: "preset-chip-district",
                children: v.district
              })]
            }, v.name);
          })
        })]
      }), hasSearched && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.ScrollView, {
        scrollY: true,
        className: "result-scroll",
        children: searching ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
          className: "loading-tip",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
            children: "\u641C\u7D22\u4E2D..."
          })
        }) : searchResults.length === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
          className: "empty-tip",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
            className: "empty-icon",
            children: "\uD83C\uDFF8"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
            className: "empty-text",
            children: "\u672A\u627E\u5230\u76F8\u5173\u7403\u9986"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
            className: "empty-hint",
            children: "\u8BD5\u8BD5\u62D6\u52A8\u5730\u56FE\u9009\u70B9\uFF0C\u6216\u66F4\u6362\u5173\u952E\u8BCD"
          })]
        }) : searchResults.map(function (item) {
          var distance = userLocation && item.latitude !== 0 ? (0,_utils_location__WEBPACK_IMPORTED_MODULE_2__.calculateDistance)(userLocation.latitude, userLocation.longitude, item.latitude, item.longitude) : null;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
            className: "result-item ".concat((selected === null || selected === void 0 ? void 0 : selected.id) === item.id ? "selected" : ""),
            onClick: function onClick() {
              return handleSelectResult(item);
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
              className: "result-item-main",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
                className: "result-item-name",
                children: item.name
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
                className: "result-item-address",
                children: item.address
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
              className: "result-item-side",
              children: [distance != null && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
                className: "result-item-distance",
                children: (0,_utils_location__WEBPACK_IMPORTED_MODULE_2__.formatDistance)(distance)
              }), (selected === null || selected === void 0 ? void 0 : selected.id) === item.id && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
                className: "result-item-check",
                children: "\u2713"
              })]
            })]
          }, item.id);
        })
      }), selected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
        className: "selected-banner",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
          className: "selected-info",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
            className: "selected-name",
            children: selected.name
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
            className: "selected-address",
            children: selected.address
          })]
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
      className: "bottom-bar safe-bottom",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Button, {
        className: "confirm-btn ".concat(!selected ? "disabled" : ""),
        disabled: !selected,
        onClick: handleConfirm,
        children: "\u786E\u8BA4\u573A\u5730"
      })
    })]
  });
}

/***/ }),

/***/ "./src/lib/qqmap-wx-jssdk.min.js":
/*!***************************************!*\
  !*** ./src/lib/qqmap-wx-jssdk.min.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ QQMapWX; }
/* harmony export */ });
/**
 * 腾讯位置服务 SDK 占位文件
 *
 * 此文件为占位，用于在 Key 申请前避免 webpack 解析警告。
 *
 * 申请到 Key 后，请按以下步骤替换：
 * 1. 访问 https://lbs.qq.com/miniProgram/jsSdk/jsSdkGuide/jsSdkOverview
 *    下载 qqmap-wx-jssdk.min.js（官方最新版）
 * 2. 用下载的文件覆盖本占位文件
 * 3. 在 src/services/qqmap.ts 中填入 QQ_MAP_KEY
 *
 * 当前状态：占位，所有 SDK 调用将走降级逻辑（预置球馆库匹配）
 */

console.warn("[qqmap] 当前为占位 SDK，功能降级。请下载官方 qqmap-wx-jssdk.min.js 替换此文件。");
function QQMapWX() {
  return {
    search: function search() {
      console.warn("[qqmap] SDK 未接入，search 不可用");
    },
    reverseGeocoder: function reverseGeocoder() {
      console.warn("[qqmap] SDK 未接入，reverseGeocoder 不可用");
    }
  };
}

/***/ }),

/***/ "./src/pages/venue-picker/venue-picker.tsx":
/*!*************************************************!*\
  !*** ./src/pages/venue-picker/venue-picker.tsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/dsl/common.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_venue_picker_venue_picker_venue_picker_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/venue-picker/venue-picker!./venue-picker.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/venue-picker/venue-picker!./src/pages/venue-picker/venue-picker.tsx");


var config = {"navigationBarTitleText":"选择球馆","navigationBarBackgroundColor":"#ffffff","navigationBarTextStyle":"black","enablePullDownRefresh":false};



var taroOption = (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_venue_picker_venue_picker_venue_picker_tsx__WEBPACK_IMPORTED_MODULE_0__["default"], 'pages/venue-picker/venue-picker', {root:{cn:[]}}, config || {})
if (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_venue_picker_venue_picker_venue_picker_tsx__WEBPACK_IMPORTED_MODULE_0__["default"] && _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_venue_picker_venue_picker_venue_picker_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors) {
  taroOption.behaviors = (taroOption.behaviors || []).concat(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_venue_picker_venue_picker_venue_picker_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors)
}
var inst = Page(taroOption)



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_venue_picker_venue_picker_venue_picker_tsx__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/services/qqmap.ts":
/*!*******************************!*\
  !*** ./src/services/qqmap.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   reverseGeocode: function() { return /* binding */ reverseGeocode; },
/* harmony export */   searchPoi: function() { return /* binding */ searchPoi; }
/* harmony export */ });
/* unused harmony export QQ_MAP_KEY */
/* harmony import */ var E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regenerator.js */ "./node_modules/@babel/runtime/helpers/esm/regenerator.js");
/* harmony import */ var E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _config_site__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/site */ "./src/config/site.ts");


/**
 * 腾讯位置服务 SDK 封装
 *
 * 接入步骤：
 * 1. 在 https://lbs.qq.com 申请 Key，勾选 WebServiceAPI + 填写小程序 AppID
 * 2. 将 Key 填入下方 QQ_MAP_KEY
 * 3. 下载 qqmap-wx-jssdk.min.js 放入 src/lib/ 目录
 *    下载地址：https://lbs.qq.com/miniProgram/jsSdk/jsSdkGuide/jsSdkOverview
 * 4. 在小程序后台 → 开发管理 → 服务器域名 → request 合法域名 添加：
 *    https://apis.map.qq.com
 *
 * 当前状态：Key 待申请，SDK 文件待下载。
 * 已实现降级逻辑：Key 未配置时搜索返回预置球馆库匹配结果。
 */



// 腾讯位置服务 Key（申请后填入此处，或从环境变量读取）
// TODO: 申请到 Key 后替换为实际值
var QQ_MAP_KEY = "";

// SDK 实例（懒加载）
var sdkInstance = null;

/**
 * 初始化腾讯位置服务 SDK
 * 需要先下载 qqmap-wx-jssdk.min.js 放入 src/lib/ 目录
 */
function getSDK() {
  if (sdkInstance) return sdkInstance;
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    var QQMapWX = __webpack_require__(/*! ../lib/qqmap-wx-jssdk.min.js */ "./src/lib/qqmap-wx-jssdk.min.js");
    sdkInstance = new QQMapWX({
      key: QQ_MAP_KEY
    });
    return sdkInstance;
  } catch (e) {
    console.warn("[qqmap] SDK 未加载，将使用预置球馆库降级模式", e);
    return null;
  }
}

/** POI 搜索结果项 */

/**
 * 关键词搜索 POI（球馆）
 * - Key 已配置：调用腾讯 POI 搜索
 * - Key 未配置：从预置球馆库模糊匹配（降级）
 *
 * @param keyword 搜索关键词（如"朝阳体育中心"）
 * @param location 当前位置（可选，传入后结果按距离排序）
 */
function searchPoi(_x, _x2) {
  return _searchPoi.apply(this, arguments);
}

/**
 * 逆地址解析：根据坐标获取地址描述
 * - Key 已配置：调用腾讯逆地理编码
 * - Key 未配置：返回坐标字符串（降级）
 *
 * @param latitude 纬度
 * @param longitude 经度
 */
function _searchPoi() {
  _searchPoi = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/(0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])().m(function _callee(keyword, location) {
    var trimmed, sdk;
    return (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          trimmed = keyword.trim();
          if (trimmed) {
            _context.n = 1;
            break;
          }
          return _context.a(2, []);
        case 1:
          sdk = getSDK(); // 主路径：腾讯位置服务 POI 搜索
          if (!(sdk && QQ_MAP_KEY)) {
            _context.n = 2;
            break;
          }
          return _context.a(2, new Promise(function (resolve) {
            sdk.search({
              keyword: trimmed,
              location: location ? "".concat(location.latitude, ",").concat(location.longitude) : undefined,
              page_size: 20,
              page_index: 1,
              success: function success(res) {
                var list = (res.data || []).map(function (item) {
                  return {
                    id: item.id || String(item.latitude + item.longitude),
                    name: item.title,
                    address: item.address || "",
                    latitude: item.location.lat,
                    longitude: item.location.lng,
                    distance: item._distance
                  };
                });
                resolve(list);
              },
              fail: function fail(err) {
                console.warn("[qqmap] POI 搜索失败，降级到本地匹配", err);
                resolve(fallbackSearch(trimmed, location));
              }
            });
          }));
        case 2:
          return _context.a(2, fallbackSearch(trimmed, location));
      }
    }, _callee);
  }));
  return _searchPoi.apply(this, arguments);
}
function reverseGeocode(_x3, _x4) {
  return _reverseGeocode.apply(this, arguments);
}

/**
 * 降级搜索：从预置球馆库模糊匹配
 */
function _reverseGeocode() {
  _reverseGeocode = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/(0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])().m(function _callee2(latitude, longitude) {
    var sdk;
    return (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])().w(function (_context2) {
      while (1) switch (_context2.n) {
        case 0:
          sdk = getSDK();
          if (!(sdk && QQ_MAP_KEY)) {
            _context2.n = 1;
            break;
          }
          return _context2.a(2, new Promise(function (resolve) {
            sdk.reverseGeocoder({
              location: "".concat(latitude, ",").concat(longitude),
              success: function success(res) {
                var _res$result, _res$result2, _res$result3;
                resolve({
                  address: ((_res$result = res.result) === null || _res$result === void 0 ? void 0 : _res$result.address) || "",
                  name: ((_res$result2 = res.result) === null || _res$result2 === void 0 || (_res$result2 = _res$result2.formatted_addresses) === null || _res$result2 === void 0 ? void 0 : _res$result2.recommend) || ((_res$result3 = res.result) === null || _res$result3 === void 0 ? void 0 : _res$result3.address) || "未知位置"
                });
              },
              fail: function fail(err) {
                console.warn("[qqmap] 逆地址解析失败", err);
                resolve({
                  address: "".concat(latitude.toFixed(6), ", ").concat(longitude.toFixed(6)),
                  name: "未知位置"
                });
              }
            });
          }));
        case 1:
          return _context2.a(2, {
            address: "".concat(latitude.toFixed(6), ", ").concat(longitude.toFixed(6)),
            name: "未知位置（SDK 未接入）"
          });
      }
    }, _callee2);
  }));
  return _reverseGeocode.apply(this, arguments);
}
function fallbackSearch(keyword, location) {
  var lower = keyword.toLowerCase();
  var matched = _config_site__WEBPACK_IMPORTED_MODULE_0__.PRESET_VENUE_LIST.filter(function (v) {
    return v.name.toLowerCase().includes(lower) || v.district.toLowerCase().includes(lower) || v.address.toLowerCase().includes(lower);
  });
  return matched.map(function (v) {
    return {
      id: "preset_".concat(v.name),
      name: v.name,
      address: "".concat(v.district, "\u533A \xB7 ").concat(v.address),
      // 预置球馆无坐标，标记为 0（venue-picker 中需特殊处理）
      latitude: 0,
      longitude: 0
    };
  });
}

/***/ }),

/***/ "./src/utils/location.ts":
/*!*******************************!*\
  !*** ./src/utils/location.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculateDistance: function() { return /* binding */ calculateDistance; },
/* harmony export */   formatDistance: function() { return /* binding */ formatDistance; },
/* harmony export */   getCurrentLocation: function() { return /* binding */ getCurrentLocation; }
/* harmony export */ });
/* harmony import */ var E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regenerator.js */ "./node_modules/@babel/runtime/helpers/esm/regenerator.js");
/* harmony import */ var E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);


/**
 * 定位与授权引导工具
 * 封装 wx.getLocation 调用 + 授权失败引导设置
 */

/**
 * 获取用户当前位置
 * - 首次调用会触发系统授权弹窗
 * - 授权被拒绝时引导用户去设置页开启
 * - 超时默认 8 秒
 */
function getCurrentLocation() {
  return _getCurrentLocation.apply(this, arguments);
}

/** 重试获取定位（用户授权后） */
function _getCurrentLocation() {
  _getCurrentLocation = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/(0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])().m(function _callee() {
    var setting, scope, confirmed, res, _err$errMsg, _err$errMsg2, _confirmed, _t, _t2;
    return (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          _context.p = 0;
          _context.n = 1;
          return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getSetting();
        case 1:
          setting = _context.v;
          scope = setting.authSetting["scope.userLocation"]; // 已明确拒绝过 → 引导去设置
          if (!(scope === false)) {
            _context.n = 3;
            break;
          }
          _context.n = 2;
          return showAuthGuide();
        case 2:
          confirmed = _context.v;
          if (confirmed) {
            _context.n = 3;
            break;
          }
          throw new Error("用户未授权位置信息");
        case 3:
          _context.n = 5;
          break;
        case 4:
          _context.p = 4;
          _t = _context.v;
        case 5:
          _context.p = 5;
          _context.n = 6;
          return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getLocation({
            type: "gcj02",
            // 腾讯地图使用 gcj02 坐标系
            altitude: false,
            isHighAccuracy: false
          });
        case 6:
          res = _context.v;
          return _context.a(2, {
            latitude: res.latitude,
            longitude: res.longitude,
            accuracy: res.accuracy
          });
        case 7:
          _context.p = 7;
          _t2 = _context.v;
          if (!(_t2 !== null && _t2 !== void 0 && (_err$errMsg = _t2.errMsg) !== null && _err$errMsg !== void 0 && _err$errMsg.includes("auth deny") || _t2 !== null && _t2 !== void 0 && (_err$errMsg2 = _t2.errMsg) !== null && _err$errMsg2 !== void 0 && _err$errMsg2.includes("authorize"))) {
            _context.n = 9;
            break;
          }
          _context.n = 8;
          return showAuthGuide();
        case 8:
          _confirmed = _context.v;
          if (!_confirmed) {
            _context.n = 9;
            break;
          }
          return _context.a(2, retryGetLocation());
        case 9:
          throw new Error((_t2 === null || _t2 === void 0 ? void 0 : _t2.errMsg) || "获取定位失败");
        case 10:
          return _context.a(2);
      }
    }, _callee, null, [[5, 7], [0, 4]]);
  }));
  return _getCurrentLocation.apply(this, arguments);
}
function retryGetLocation() {
  return _retryGetLocation.apply(this, arguments);
}
/** 显示授权引导弹窗，返回用户是否确认去设置 */
function _retryGetLocation() {
  _retryGetLocation = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/(0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])().m(function _callee2() {
    var res, _t3;
    return (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])().w(function (_context2) {
      while (1) switch (_context2.p = _context2.n) {
        case 0:
          _context2.p = 0;
          _context2.n = 1;
          return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getLocation({
            type: "gcj02",
            altitude: false,
            isHighAccuracy: false
          });
        case 1:
          res = _context2.v;
          return _context2.a(2, {
            latitude: res.latitude,
            longitude: res.longitude,
            accuracy: res.accuracy
          });
        case 2:
          _context2.p = 2;
          _t3 = _context2.v;
          throw new Error((_t3 === null || _t3 === void 0 ? void 0 : _t3.errMsg) || "获取定位失败");
        case 3:
          return _context2.a(2);
      }
    }, _callee2, null, [[0, 2]]);
  }));
  return _retryGetLocation.apply(this, arguments);
}
function showAuthGuide() {
  return _showAuthGuide.apply(this, arguments);
}
/**
 * Haversine 公式计算两点间距离（单位：km）
 * 用于展示"距您 X.Xkm"
 */
function _showAuthGuide() {
  _showAuthGuide = (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/(0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])().m(function _callee3() {
    return (0,E_000Project_trae_project_2026_20260713_badminton_wechatMiniApp_miniapp_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])().w(function (_context3) {
      while (1) switch (_context3.n) {
        case 0:
          return _context3.a(2, new Promise(function (resolve) {
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().showModal({
              title: "需要位置授权",
              content: "选择球馆需要获取您的位置信息，请在设置中开启位置权限",
              confirmText: "去设置",
              cancelText: "取消",
              success: function success(res) {
                if (res.confirm) {
                  _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().openSetting({
                    success: function success(settingRes) {
                      resolve(settingRes.authSetting["scope.userLocation"] === true);
                    },
                    fail: function fail() {
                      return resolve(false);
                    }
                  });
                } else {
                  resolve(false);
                }
              },
              fail: function fail() {
                return resolve(false);
              }
            });
          }));
      }
    }, _callee3);
  }));
  return _showAuthGuide.apply(this, arguments);
}
function calculateDistance(lat1, lng1, lat2, lng2) {
  var R = 6371; // 地球半径 km
  var dLat = toRad(lat2 - lat1);
  var dLng = toRad(lng2 - lng1);
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}
function toRad(deg) {
  return deg * Math.PI / 180;
}

/** 格式化距离展示：< 1km 用米，否则用公里 */
function formatDistance(km) {
  if (km < 1) {
    return "".concat(Math.round(km * 1000), "m");
  }
  return "".concat(km.toFixed(1), "km");
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/venue-picker/venue-picker.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=venue-picker.js.map