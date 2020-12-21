webpackHotUpdate_N_E("pages/index",{

/***/ "./componets/SearchPanel/SearchPanel.tsx":
/*!***********************************************!*\
  !*** ./componets/SearchPanel/SearchPanel.tsx ***!
  \***********************************************/
/*! exports provided: SearchPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPanel", function() { return SearchPanel; });
/* harmony import */ var D_Work_internet_shop_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store */ "./store/index.ts");
/* harmony import */ var _common_ThemeLink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/ThemeLink */ "./componets/common/ThemeLink.tsx");
/* harmony import */ var _DropdownButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DropdownButton */ "./componets/SearchPanel/DropdownButton.tsx");
/* harmony import */ var _styledComponents__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styledComponents */ "./componets/SearchPanel/styledComponents.tsx");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../routes */ "./routes.ts");



var _jsxFileName = "D:\\Work\\internet-shop\\componets\\SearchPanel\\SearchPanel.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function _templateObject() {
  var data = Object(D_Work_internet_shop_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin: 0 10px 10px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}










var CategoryLink = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(_common_ThemeLink__WEBPACK_IMPORTED_MODULE_7__["ThemeLink"])(_templateObject());
_c = CategoryLink;
var SearchPanel = function SearchPanel() {
  _s();

  var searchQuery = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.searchQuery;
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(searchQuery),
      value = _useState[0],
      setValue = _useState[1];

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  var _router$query$categor = router.query.category,
      category = _router$query$categor === void 0 ? "" : _router$query$categor;

  var navigateToSearch = function navigateToSearch() {
    var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_6__["searchItems"])(query));
    var categoryLink = category ? "category/".concat(category, "/") : "";
    router.push("/".concat(categoryLink));
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styledComponents__WEBPACK_IMPORTED_MODULE_9__["Header"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styledComponents__WEBPACK_IMPORTED_MODULE_9__["Find"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styledComponents__WEBPACK_IMPORTED_MODULE_9__["SideTitle"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styledComponents__WEBPACK_IMPORTED_MODULE_9__["HomePageLink"], {
          onClick: function onClick(e) {
            e.preventDefault();
            router.push("/");
          },
          children: "All goods"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styledComponents__WEBPACK_IMPORTED_MODULE_9__["Controls"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styledComponents__WEBPACK_IMPORTED_MODULE_9__["ControlWrapper"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styledComponents__WEBPACK_IMPORTED_MODULE_9__["FindGoods"], {
            placeholder: "find goods",
            value: value,
            onChange: function onChange(e) {
              setValue(e.target.value);
            },
            onKeyDown: function onKeyDown(e) {
              if (e.key === "Escape") {
                setValue("");
                navigateToSearch("");
              }

              if (e.key === "Enter") {
                navigateToSearch(value);
              }
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styledComponents__WEBPACK_IMPORTED_MODULE_9__["FindButton"], {
            onClick: function onClick() {
              navigateToSearch(value);
            },
            children: "Search"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styledComponents__WEBPACK_IMPORTED_MODULE_9__["ControlWrapper"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_DropdownButton__WEBPACK_IMPORTED_MODULE_8__["DropdownButton"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styledComponents__WEBPACK_IMPORTED_MODULE_9__["CategoryLinks"], {
      children: _routes__WEBPACK_IMPORTED_MODULE_10__["categories"].map(function (siteCategory, id) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(CategoryLink, {
          active: category.toString().toLowerCase() === siteCategory.title.toLowerCase(),
          href: siteCategory.route,
          children: siteCategory.title
        }, id, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 5
  }, _this);
};

_s(SearchPanel, "0b6jgSbEj1PcU6mFlAGpKK2Pxrc=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"], next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
});

_c2 = SearchPanel;

var _c, _c2;

$RefreshReg$(_c, "CategoryLink");
$RefreshReg$(_c2, "SearchPanel");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZXRzL1NlYXJjaFBhbmVsL1NlYXJjaFBhbmVsLnRzeCJdLCJuYW1lcyI6WyJDYXRlZ29yeUxpbmsiLCJzdHlsZWQiLCJUaGVtZUxpbmsiLCJTZWFyY2hQYW5lbCIsInNlYXJjaFF1ZXJ5IiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZVN0YXRlIiwidmFsdWUiLCJzZXRWYWx1ZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJxdWVyeSIsImNhdGVnb3J5IiwibmF2aWdhdGVUb1NlYXJjaCIsInNlYXJjaEl0ZW1zIiwiY2F0ZWdvcnlMaW5rIiwicHVzaCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsImtleSIsImNhdGVnb3JpZXMiLCJtYXAiLCJzaXRlQ2F0ZWdvcnkiLCJpZCIsInRvU3RyaW5nIiwidG9Mb3dlckNhc2UiLCJ0aXRsZSIsInJvdXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQVdBO0FBRUEsSUFBTUEsWUFBWSxHQUFHQyxpRUFBTSxDQUFDQywyREFBRCxDQUFULG1CQUFsQjtLQUFNRixZO0FBSUMsSUFBTUcsV0FBb0MsR0FBRyxTQUF2Q0EsV0FBdUMsR0FBTTtBQUFBOztBQUN4RCxNQUFNQyxXQUFXLEdBQUdDLCtEQUFXLENBQzdCLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNGLFdBQWpCO0FBQUEsR0FENkIsQ0FBL0I7O0FBRHdELGtCQUk5Qkcsc0RBQVEsQ0FBQ0gsV0FBRCxDQUpzQjtBQUFBLE1BSWpESSxLQUppRDtBQUFBLE1BSTFDQyxRQUowQzs7QUFLeEQsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFOd0QsOEJBTzlCRCxNQUFNLENBQUNFLEtBUHVCLENBT2hEQyxRQVBnRDtBQUFBLE1BT2hEQSxRQVBnRCxzQ0FPckMsRUFQcUM7O0FBU3hELE1BQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBZ0I7QUFBQSxRQUFmRixLQUFlLHVFQUFQLEVBQU87QUFDdkNKLFlBQVEsQ0FBQ08sMERBQVcsQ0FBQ0gsS0FBRCxDQUFaLENBQVI7QUFDQSxRQUFNSSxZQUFZLEdBQUdILFFBQVEsc0JBQWVBLFFBQWYsU0FBNkIsRUFBMUQ7QUFDQUgsVUFBTSxDQUFDTyxJQUFQLFlBQWdCRCxZQUFoQjtBQUNELEdBSkQ7O0FBTUEsc0JBQ0UscUVBQUMsd0RBQUQ7QUFBQSw0QkFDRSxxRUFBQyxzREFBRDtBQUFBLDhCQUNFLHFFQUFDLDJEQUFEO0FBQUEsK0JBQ0UscUVBQUMsOERBQUQ7QUFDRSxpQkFBTyxFQUFFLGlCQUFDRSxDQUFELEVBQU87QUFDZEEsYUFBQyxDQUFDQyxjQUFGO0FBQ0FULGtCQUFNLENBQUNPLElBQVAsQ0FBWSxHQUFaO0FBQ0QsV0FKSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQVdFLHFFQUFDLDBEQUFEO0FBQUEsZ0NBQ0UscUVBQUMsZ0VBQUQ7QUFBQSxrQ0FDRSxxRUFBQywyREFBRDtBQUNFLHVCQUFXLEVBQUMsWUFEZDtBQUVFLGlCQUFLLEVBQUVYLEtBRlQ7QUFHRSxvQkFBUSxFQUFFLGtCQUFDWSxDQUFELEVBQU87QUFDZlgsc0JBQVEsQ0FBQ1csQ0FBQyxDQUFDRSxNQUFGLENBQVNkLEtBQVYsQ0FBUjtBQUNELGFBTEg7QUFNRSxxQkFBUyxFQUFFLG1CQUFDWSxDQUFELEVBQU87QUFDaEIsa0JBQUlBLENBQUMsQ0FBQ0csR0FBRixLQUFVLFFBQWQsRUFBd0I7QUFDdEJkLHdCQUFRLENBQUMsRUFBRCxDQUFSO0FBQ0FPLGdDQUFnQixDQUFDLEVBQUQsQ0FBaEI7QUFDRDs7QUFDRCxrQkFBSUksQ0FBQyxDQUFDRyxHQUFGLEtBQVUsT0FBZCxFQUF1QjtBQUNyQlAsZ0NBQWdCLENBQUNSLEtBQUQsQ0FBaEI7QUFDRDtBQUNGO0FBZEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQWlCRSxxRUFBQyw0REFBRDtBQUNFLG1CQUFPLEVBQUUsbUJBQU07QUFDYlEsOEJBQWdCLENBQUNSLEtBQUQsQ0FBaEI7QUFDRCxhQUhIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUEwQkUscUVBQUMsZ0VBQUQ7QUFBQSxpQ0FDRSxxRUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkExQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUEyQ0UscUVBQUMsK0RBQUQ7QUFBQSxnQkFDR2dCLG1EQUFVLENBQUNDLEdBQVgsQ0FBZSxVQUFDQyxZQUFELEVBQWVDLEVBQWY7QUFBQSw0QkFDZCxxRUFBQyxZQUFEO0FBRUUsZ0JBQU0sRUFDSlosUUFBUSxDQUFDYSxRQUFULEdBQW9CQyxXQUFwQixPQUNBSCxZQUFZLENBQUNJLEtBQWIsQ0FBbUJELFdBQW5CLEVBSko7QUFNRSxjQUFJLEVBQUVILFlBQVksQ0FBQ0ssS0FOckI7QUFBQSxvQkFRR0wsWUFBWSxDQUFDSTtBQVJoQixXQUNPSCxFQURQO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGM7QUFBQSxPQUFmO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTNDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTRERCxDQTNFTTs7R0FBTXhCLFc7VUFDU0UsdUQsRUFJSE0sdUQsRUFDRkUscUQ7OztNQU5KVixXIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjVhMDMwODFlNjllMDEzZjU3MWE3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgc3RvcmUgfSBmcm9tIFwiLi4vLi4vdHlwZXMvc3RvcmVcIjtcbmltcG9ydCB7IHNlYXJjaEl0ZW1zIH0gZnJvbSBcIi4uLy4uL3N0b3JlXCI7XG5pbXBvcnQgeyBUaGVtZUxpbmsgfSBmcm9tIFwiLi4vY29tbW9uL1RoZW1lTGlua1wiO1xuaW1wb3J0IHsgRHJvcGRvd25CdXR0b24gfSBmcm9tIFwiLi9Ecm9wZG93bkJ1dHRvblwiO1xuaW1wb3J0IHtcbiAgQ29udHJvbFdyYXBwZXIsXG4gIEZpbmQsXG4gIEZpbmRCdXR0b24sXG4gIEZpbmRHb29kcyxcbiAgSG9tZVBhZ2VMaW5rLFxuICBTaWRlVGl0bGUsXG4gIENvbnRyb2xzLFxuICBDYXRlZ29yeUxpbmtzLFxuICBIZWFkZXIsXG59IGZyb20gXCIuL3N0eWxlZENvbXBvbmVudHNcIjtcbmltcG9ydCB7IGNhdGVnb3JpZXMgfSBmcm9tIFwiLi4vLi4vcm91dGVzXCI7XG5cbmNvbnN0IENhdGVnb3J5TGluayA9IHN0eWxlZChUaGVtZUxpbmspYFxuICBtYXJnaW46IDAgMTBweCAxMHB4O1xuYDtcblxuZXhwb3J0IGNvbnN0IFNlYXJjaFBhbmVsOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudCA9ICgpID0+IHtcbiAgY29uc3Qgc2VhcmNoUXVlcnkgPSB1c2VTZWxlY3RvcjxzdG9yZSwgc3RvcmVbXCJzZWFyY2hRdWVyeVwiXT4oXG4gICAgKHN0YXRlKSA9PiBzdGF0ZS5zZWFyY2hRdWVyeVxuICApO1xuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKHNlYXJjaFF1ZXJ5KTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBjYXRlZ29yeSA9IFwiXCIgfSA9IHJvdXRlci5xdWVyeTtcblxuICBjb25zdCBuYXZpZ2F0ZVRvU2VhcmNoID0gKHF1ZXJ5ID0gXCJcIikgPT4ge1xuICAgIGRpc3BhdGNoKHNlYXJjaEl0ZW1zKHF1ZXJ5KSk7XG4gICAgY29uc3QgY2F0ZWdvcnlMaW5rID0gY2F0ZWdvcnkgPyBgY2F0ZWdvcnkvJHtjYXRlZ29yeX0vYCA6IFwiXCI7XG4gICAgcm91dGVyLnB1c2goYC8ke2NhdGVnb3J5TGlua31gKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxIZWFkZXI+XG4gICAgICA8RmluZD5cbiAgICAgICAgPFNpZGVUaXRsZT5cbiAgICAgICAgICA8SG9tZVBhZ2VMaW5rXG4gICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgQWxsIGdvb2RzXG4gICAgICAgICAgPC9Ib21lUGFnZUxpbms+XG4gICAgICAgIDwvU2lkZVRpdGxlPlxuICAgICAgICA8Q29udHJvbHM+XG4gICAgICAgICAgPENvbnRyb2xXcmFwcGVyPlxuICAgICAgICAgICAgPEZpbmRHb29kc1xuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImZpbmQgZ29vZHNcIlxuICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFZhbHVlKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgb25LZXlEb3duPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlLmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgICAgICAgICAgICAgc2V0VmFsdWUoXCJcIik7XG4gICAgICAgICAgICAgICAgICBuYXZpZ2F0ZVRvU2VhcmNoKFwiXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgICAgICAgICAgICAgbmF2aWdhdGVUb1NlYXJjaCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPjwvRmluZEdvb2RzPlxuICAgICAgICAgICAgPEZpbmRCdXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIG5hdmlnYXRlVG9TZWFyY2godmFsdWUpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBTZWFyY2hcbiAgICAgICAgICAgIDwvRmluZEJ1dHRvbj5cbiAgICAgICAgICA8L0NvbnRyb2xXcmFwcGVyPlxuICAgICAgICAgIDxDb250cm9sV3JhcHBlcj5cbiAgICAgICAgICAgIDxEcm9wZG93bkJ1dHRvbiAvPlxuICAgICAgICAgIDwvQ29udHJvbFdyYXBwZXI+XG4gICAgICAgIDwvQ29udHJvbHM+XG4gICAgICA8L0ZpbmQ+XG4gICAgICA8Q2F0ZWdvcnlMaW5rcz5cbiAgICAgICAge2NhdGVnb3JpZXMubWFwKChzaXRlQ2F0ZWdvcnksIGlkKSA9PiAoXG4gICAgICAgICAgPENhdGVnb3J5TGlua1xuICAgICAgICAgICAga2V5PXtpZH1cbiAgICAgICAgICAgIGFjdGl2ZT17XG4gICAgICAgICAgICAgIGNhdGVnb3J5LnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSA9PT1cbiAgICAgICAgICAgICAgc2l0ZUNhdGVnb3J5LnRpdGxlLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGhyZWY9e3NpdGVDYXRlZ29yeS5yb3V0ZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7c2l0ZUNhdGVnb3J5LnRpdGxlfVxuICAgICAgICAgIDwvQ2F0ZWdvcnlMaW5rPlxuICAgICAgICApKX1cbiAgICAgIDwvQ2F0ZWdvcnlMaW5rcz5cbiAgICA8L0hlYWRlcj5cbiAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9