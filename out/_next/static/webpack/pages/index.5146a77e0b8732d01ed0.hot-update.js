webpackHotUpdate_N_E("pages/index",{

/***/ "./componets/SideMenu/SideMenu.tsx":
/*!*****************************************!*\
  !*** ./componets/SideMenu/SideMenu.tsx ***!
  \*****************************************/
/*! exports provided: SideMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideMenu", function() { return SideMenu; });
/* harmony import */ var D_Work_internet_shop_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _common_ThemeLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/ThemeLink */ "./componets/common/ThemeLink.tsx");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../routes */ "./routes.ts");



var _jsxFileName = "D:\\Work\\internet-shop\\componets\\SideMenu\\SideMenu.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function _templateObject3() {
  var data = Object(D_Work_internet_shop_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex-direction: column;\n  font-size: 1rem;\n  letter-spacing: 0.5px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(D_Work_internet_shop_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-size: 1.3rem;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(D_Work_internet_shop_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex-direction: column;\n  flex: start;\n  width: 200px;\n  margin-left: 50px;\n\n  @media (max-width: 768px) {\n    display: none;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var SideWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].aside(_templateObject());
_c = SideWrapper;
var SideCategories = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].h2(_templateObject2());
_c2 = SideCategories;
var SideLinkSection = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject3());
_c3 = SideLinkSection;
var SideMenu = function SideMenu() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  var _router$query$categor = router.query.category,
      category = _router$query$categor === void 0 ? "" : _router$query$categor;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(SideWrapper, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(SideCategories, {
      children: "Categories"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(SideLinkSection, {
      children: _routes__WEBPACK_IMPORTED_MODULE_6__["categories"].map(function (siteCategory, id) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_common_ThemeLink__WEBPACK_IMPORTED_MODULE_5__["ThemeLink"], {
          active: category.toString().toLowerCase() === siteCategory.title.toLowerCase(),
          href: siteCategory.route,
          children: siteCategory.title
        }, id, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 5
  }, _this);
};

_s(SideMenu, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c4 = SideMenu;

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "SideWrapper");
$RefreshReg$(_c2, "SideCategories");
$RefreshReg$(_c3, "SideLinkSection");
$RefreshReg$(_c4, "SideMenu");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZXRzL1NpZGVNZW51L1NpZGVNZW51LnRzeCJdLCJuYW1lcyI6WyJTaWRlV3JhcHBlciIsInN0eWxlZCIsImFzaWRlIiwiU2lkZUNhdGVnb3JpZXMiLCJoMiIsIlNpZGVMaW5rU2VjdGlvbiIsImRpdiIsIlNpZGVNZW51Iiwicm91dGVyIiwidXNlUm91dGVyIiwicXVlcnkiLCJjYXRlZ29yeSIsImNhdGVnb3JpZXMiLCJtYXAiLCJzaXRlQ2F0ZWdvcnkiLCJpZCIsInRvU3RyaW5nIiwidG9Mb3dlckNhc2UiLCJ0aXRsZSIsInJvdXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxXQUFXLEdBQUdDLHlEQUFNLENBQUNDLEtBQVYsbUJBQWpCO0tBQU1GLFc7QUFZTixJQUFNRyxjQUFjLEdBQUdGLHlEQUFNLENBQUNHLEVBQVYsb0JBQXBCO01BQU1ELGM7QUFHTixJQUFNRSxlQUFlLEdBQUdKLHlEQUFNLENBQUNLLEdBQVYsb0JBQXJCO01BQU1ELGU7QUFPQyxJQUFNRSxRQUFpQyxHQUFHLFNBQXBDQSxRQUFvQyxHQUFNO0FBQUE7O0FBQ3JELE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFEcUQsOEJBRTNCRCxNQUFNLENBQUNFLEtBRm9CLENBRTdDQyxRQUY2QztBQUFBLE1BRTdDQSxRQUY2QyxzQ0FFbEMsRUFGa0M7QUFJckQsc0JBQ0UscUVBQUMsV0FBRDtBQUFBLDRCQUNFLHFFQUFDLGNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFLHFFQUFDLGVBQUQ7QUFBQSxnQkFDR0Msa0RBQVUsQ0FBQ0MsR0FBWCxDQUFlLFVBQUNDLFlBQUQsRUFBZUMsRUFBZjtBQUFBLDRCQUNkLHFFQUFDLDJEQUFEO0FBRUUsZ0JBQU0sRUFDSkosUUFBUSxDQUFDSyxRQUFULEdBQW9CQyxXQUFwQixPQUNBSCxZQUFZLENBQUNJLEtBQWIsQ0FBbUJELFdBQW5CLEVBSko7QUFNRSxjQUFJLEVBQUVILFlBQVksQ0FBQ0ssS0FOckI7QUFBQSxvQkFRR0wsWUFBWSxDQUFDSTtBQVJoQixXQUNPSCxFQURQO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGM7QUFBQSxPQUFmO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBbUJELENBdkJNOztHQUFNUixRO1VBQ0lFLHFEOzs7TUFESkYsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41MTQ2YTc3ZTBiODczMmQwMWVkMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgVGhlbWVMaW5rIH0gZnJvbSBcIi4uL2NvbW1vbi9UaGVtZUxpbmtcIjtcclxuaW1wb3J0IHsgY2F0ZWdvcmllcyB9IGZyb20gXCIuLi8uLi9yb3V0ZXNcIjtcclxuXHJcbmNvbnN0IFNpZGVXcmFwcGVyID0gc3R5bGVkLmFzaWRlYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmbGV4OiBzdGFydDtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBTaWRlQ2F0ZWdvcmllcyA9IHN0eWxlZC5oMmBcclxuICBmb250LXNpemU6IDEuM3JlbTtcclxuYDtcclxuY29uc3QgU2lkZUxpbmtTZWN0aW9uID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTaWRlTWVudTogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBjYXRlZ29yeSA9IFwiXCIgfSA9IHJvdXRlci5xdWVyeTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTaWRlV3JhcHBlcj5cclxuICAgICAgPFNpZGVDYXRlZ29yaWVzPkNhdGVnb3JpZXM8L1NpZGVDYXRlZ29yaWVzPlxyXG4gICAgICA8U2lkZUxpbmtTZWN0aW9uPlxyXG4gICAgICAgIHtjYXRlZ29yaWVzLm1hcCgoc2l0ZUNhdGVnb3J5LCBpZCkgPT4gKFxyXG4gICAgICAgICAgPFRoZW1lTGlua1xyXG4gICAgICAgICAgICBrZXk9e2lkfVxyXG4gICAgICAgICAgICBhY3RpdmU9e1xyXG4gICAgICAgICAgICAgIGNhdGVnb3J5LnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSA9PT1cclxuICAgICAgICAgICAgICBzaXRlQ2F0ZWdvcnkudGl0bGUudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGhyZWY9e3NpdGVDYXRlZ29yeS5yb3V0ZX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3NpdGVDYXRlZ29yeS50aXRsZX1cclxuICAgICAgICAgIDwvVGhlbWVMaW5rPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L1NpZGVMaW5rU2VjdGlvbj5cclxuICAgIDwvU2lkZVdyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==