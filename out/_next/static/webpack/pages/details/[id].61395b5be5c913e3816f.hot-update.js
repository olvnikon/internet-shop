webpackHotUpdate_N_E("pages/details/[id]",{

/***/ "./componets/Detail/Detail.tsx":
/*!*************************************!*\
  !*** ./componets/Detail/Detail.tsx ***!
  \*************************************/
/*! exports provided: Detail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Detail", function() { return Detail; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styledComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styledComponents */ "./componets/Detail/styledComponents.tsx");
/* harmony import */ var _common_ThemeLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/ThemeLink */ "./componets/common/ThemeLink.tsx");


var _jsxFileName = "D:\\Work\\internet-shop\\componets\\Detail\\Detail.tsx",
    _this = undefined;




var Detail = function Detail(_ref) {
  var category = _ref.category,
      title = _ref.title,
      price = _ref.price,
      image = _ref.image,
      description = _ref.description;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledComponents__WEBPACK_IMPORTED_MODULE_2__["DetailWrapper"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledComponents__WEBPACK_IMPORTED_MODULE_2__["DetailImageWrapper"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledComponents__WEBPACK_IMPORTED_MODULE_2__["DetailImage"], {
        src: image
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledComponents__WEBPACK_IMPORTED_MODULE_2__["DetailContent"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledComponents__WEBPACK_IMPORTED_MODULE_2__["DetailTitle"], {
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_ThemeLink__WEBPACK_IMPORTED_MODULE_3__["ThemeLink"], {
          href: "/category/".concat(category),
          children: category
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledComponents__WEBPACK_IMPORTED_MODULE_2__["DetailPrice"], {
        children: ["$", price]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledComponents__WEBPACK_IMPORTED_MODULE_2__["DetailInformation"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          children: "Description"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, _this), description]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, _this);
};
_c = Detail;

var _c;

$RefreshReg$(_c, "Detail");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZXRzL0RldGFpbC9EZXRhaWwudHN4Il0sIm5hbWVzIjpbIkRldGFpbCIsImNhdGVnb3J5IiwidGl0bGUiLCJwcmljZSIsImltYWdlIiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQVNBO0FBRU8sSUFBTUEsTUFBcUMsR0FBRyxTQUF4Q0EsTUFBd0MsT0FNL0M7QUFBQSxNQUxKQyxRQUtJLFFBTEpBLFFBS0k7QUFBQSxNQUpKQyxLQUlJLFFBSkpBLEtBSUk7QUFBQSxNQUhKQyxLQUdJLFFBSEpBLEtBR0k7QUFBQSxNQUZKQyxLQUVJLFFBRkpBLEtBRUk7QUFBQSxNQURKQyxXQUNJLFFBREpBLFdBQ0k7QUFDSixzQkFDRSxxRUFBQywrREFBRDtBQUFBLDRCQUNFLHFFQUFDLG9FQUFEO0FBQUEsNkJBQ0UscUVBQUMsNkRBQUQ7QUFBYSxXQUFHLEVBQUVEO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFJRSxxRUFBQywrREFBRDtBQUFBLDhCQUNFLHFFQUFDLDZEQUFEO0FBQUEsa0JBQWNGO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFBQSwrQkFDRSxxRUFBQywyREFBRDtBQUFXLGNBQUksc0JBQWVELFFBQWYsQ0FBZjtBQUFBLG9CQUEyQ0E7QUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRixlQUtFLHFFQUFDLDZEQUFEO0FBQUEsd0JBQWVFLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEYsZUFNRSxxRUFBQyxtRUFBRDtBQUFBLGdDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLEVBRUdFLFdBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFrQkQsQ0F6Qk07S0FBTUwsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kZXRhaWxzL1tpZF0uNjEzOTViNWJlNWM5MTNlMzgxNmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGl0ZW0gfSBmcm9tIFwiLi4vLi4vdHlwZXMvaXRlbVwiO1xuaW1wb3J0IHtcbiAgRGV0YWlsSW1hZ2UsXG4gIERldGFpbFRpdGxlLFxuICBEZXRhaWxXcmFwcGVyLFxuICBEZXRhaWxJbmZvcm1hdGlvbixcbiAgRGV0YWlsUHJpY2UsXG4gIERldGFpbENvbnRlbnQsXG4gIERldGFpbEltYWdlV3JhcHBlcixcbn0gZnJvbSBcIi4vc3R5bGVkQ29tcG9uZW50c1wiO1xuaW1wb3J0IHsgVGhlbWVMaW5rIH0gZnJvbSBcIi4uL2NvbW1vbi9UaGVtZUxpbmtcIjtcblxuZXhwb3J0IGNvbnN0IERldGFpbDogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8aXRlbT4gPSAoe1xuICBjYXRlZ29yeSxcbiAgdGl0bGUsXG4gIHByaWNlLFxuICBpbWFnZSxcbiAgZGVzY3JpcHRpb24sXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPERldGFpbFdyYXBwZXI+XG4gICAgICA8RGV0YWlsSW1hZ2VXcmFwcGVyPlxuICAgICAgICA8RGV0YWlsSW1hZ2Ugc3JjPXtpbWFnZX0gLz5cbiAgICAgIDwvRGV0YWlsSW1hZ2VXcmFwcGVyPlxuICAgICAgPERldGFpbENvbnRlbnQ+XG4gICAgICAgIDxEZXRhaWxUaXRsZT57dGl0bGV9PC9EZXRhaWxUaXRsZT5cbiAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgPFRoZW1lTGluayBocmVmPXtgL2NhdGVnb3J5LyR7Y2F0ZWdvcnl9YH0+e2NhdGVnb3J5fTwvVGhlbWVMaW5rPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxEZXRhaWxQcmljZT4ke3ByaWNlfTwvRGV0YWlsUHJpY2U+XG4gICAgICAgIDxEZXRhaWxJbmZvcm1hdGlvbj5cbiAgICAgICAgICA8aDM+RGVzY3JpcHRpb248L2gzPlxuICAgICAgICAgIHtkZXNjcmlwdGlvbn1cbiAgICAgICAgPC9EZXRhaWxJbmZvcm1hdGlvbj5cbiAgICAgIDwvRGV0YWlsQ29udGVudD5cbiAgICA8L0RldGFpbFdyYXBwZXI+XG4gICk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==