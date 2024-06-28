webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/footer/footer.js":
/*!*****************************************!*\
  !*** ./src/components/footer/footer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Footer; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ \"./node_modules/theme-ui/dist/index.esm.js\");\n/* harmony import */ var components_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/link */ \"./src/components/link.js\");\n/* harmony import */ var components_logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/logo */ \"./src/components/logo.js\");\nvar _jsxFileName = \"/Users/sanjeev/smartflux/Landing/src/components/footer/footer.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n/** @jsx jsx */\n\n\n\nfunction Footer() {\n  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"footer\", {\n    sx: {\n      variant: 'layout.footer',\n      backgroundColor: '#fff'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    sx: {\n      variant: 'layout.toolbar',\n      justifyContent: ['center', null, null, 'space-between'],\n      flexDirection: ['column', null, null, null, 'row'],\n      paddingTop: [30, 40],\n      paddingBottom: [30, 65]\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    sx: styles.left,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(components_logo__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 11\n    }\n  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    as: \"p\",\n    sx: styles.center,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 11\n    }\n  }, \"\\xA9 \", new Date().getFullYear(), \" All right reserved - Smart Flux Software Solutions\"))));\n}\n_c = Footer;\nvar styles = {\n  left: {\n    display: 'flex',\n    flexDirection: ['column', null, 'row'],\n    alignItems: 'center',\n    p: {\n      fontSize: [0, 1],\n      color: 'black',\n      opacity: 0.6,\n      mt: ['10px', null, '0']\n    }\n  },\n  right: {\n    display: ['none', null, null, null, 'flex'],\n    fontSize: 2,\n    alignItems: 'center',\n    color: 'black',\n    a: {\n      transition: '500ms',\n      '&:hover': {\n        color: 'primary'\n      }\n    },\n    'a+a': {\n      marginLeft: '30px'\n    }\n  }\n};\nvar _c;\n$RefreshReg$(_c, \"Footer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5qcz83YzhiIl0sIm5hbWVzIjpbIkZvb3RlciIsImpzeCIsInN4IiwidmFyaWFudCIsImJhY2tncm91bmRDb2xvciIsIl9fc2VsZiIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiQ29udGFpbmVyIiwianVzdGlmeUNvbnRlbnQiLCJmbGV4RGlyZWN0aW9uIiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJCb3giLCJzdHlsZXMiLCJsZWZ0IiwiTG9nbyIsIlRleHQiLCJhcyIsImNlbnRlciIsIkRhdGUiLCJnZXRGdWxsWWVhciIsIl9jIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJwIiwiZm9udFNpemUiLCJjb2xvciIsIm9wYWNpdHkiLCJtdCIsInJpZ2h0IiwiYSIsInRyYW5zaXRpb24iLCJtYXJnaW5MZWZ0IiwiJFJlZnJlc2hSZWckIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDcUQ7QUFDZDtBQUNKO0FBQ3BCLFNBQVNBLE1BQU1BLENBQUEsRUFBRztFQUMvQixPQUNFQyxvREFBQTtJQUNFQyxFQUFFLEVBQUU7TUFDRkMsT0FBTyxFQUFFLGVBQWU7TUFDeEJDLGVBQWUsRUFBRTtJQUNuQixDQUFFO0lBQUFDLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUVGVCxvREFBQSxDQUFDVSxrREFBUztJQUNSVCxFQUFFLEVBQUU7TUFDRkMsT0FBTyxFQUFFLGdCQUFnQjtNQUN6QlMsY0FBYyxFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsZUFBZSxDQUFDO01BQ3ZEQyxhQUFhLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDO01BQ2xEQyxVQUFVLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDO01BQ3BCQyxhQUFhLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRTtJQUN4QixDQUFFO0lBQUFWLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUVGVCxvREFBQSxDQUFDZSw0Q0FBRztJQUFDZCxFQUFFLEVBQUVlLE1BQU0sQ0FBQ0MsSUFBSztJQUFBYixNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDbkJULG9EQUFBLENBQUNrQix1REFBSTtJQUFBZCxNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsQ0FBRSxDQUFDLEVBQ1JULG9EQUFBLENBQUNtQiw2Q0FBSTtJQUFDQyxFQUFFLEVBQUMsR0FBRztJQUFDbkIsRUFBRSxFQUFFZSxNQUFNLENBQUNLLE1BQU87SUFBQWpCLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxZQUNyQixJQUFJYSxJQUFJLENBQUMsQ0FBQyxDQUFDQyxXQUFXLENBQUMsQ0FBQyx1REFDNUIsQ0FDSCxDQVFJLENBQ0wsQ0FBQztBQUViO0FBQUNDLEVBQUEsR0FqQ3VCekIsTUFBTTtBQW1DOUIsSUFBTWlCLE1BQU0sR0FBRztFQUNiQyxJQUFJLEVBQUU7SUFDSlEsT0FBTyxFQUFFLE1BQU07SUFDZmIsYUFBYSxFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxLQUFLLENBQUM7SUFDdENjLFVBQVUsRUFBRSxRQUFRO0lBQ3BCQyxDQUFDLEVBQUU7TUFDREMsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztNQUNoQkMsS0FBSyxFQUFFLE9BQU87TUFDZEMsT0FBTyxFQUFFLEdBQUc7TUFDWkMsRUFBRSxFQUFFLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHO0lBQ3hCO0VBQ0YsQ0FBQztFQUNEQyxLQUFLLEVBQUU7SUFDTFAsT0FBTyxFQUFFLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQztJQUMzQ0csUUFBUSxFQUFFLENBQUM7SUFDWEYsVUFBVSxFQUFFLFFBQVE7SUFDcEJHLEtBQUssRUFBRSxPQUFPO0lBQ2RJLENBQUMsRUFBRTtNQUNEQyxVQUFVLEVBQUUsT0FBTztNQUNuQixTQUFTLEVBQUU7UUFDVEwsS0FBSyxFQUFFO01BQ1Q7SUFDRixDQUFDO0lBQ0QsS0FBSyxFQUFFO01BQ0xNLFVBQVUsRUFBRTtJQUNkO0VBQ0Y7QUFDRixDQUFDO0FBQUMsSUFBQVgsRUFBQTtBQUFBWSxZQUFBLENBQUFaLEVBQUEiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIEJveCwgVGV4dCwgQ29udGFpbmVyIH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ2NvbXBvbmVudHMvbGluayc7XG5pbXBvcnQgTG9nbyBmcm9tICdjb21wb25lbnRzL2xvZ28nO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKCkge1xuICByZXR1cm4gKFxuICAgIDxmb290ZXJcbiAgICAgIHN4PXt7XG4gICAgICAgIHZhcmlhbnQ6ICdsYXlvdXQuZm9vdGVyJyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxDb250YWluZXJcbiAgICAgICAgc3g9e3tcbiAgICAgICAgICB2YXJpYW50OiAnbGF5b3V0LnRvb2xiYXInLFxuICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBbJ2NlbnRlcicsIG51bGwsIG51bGwsICdzcGFjZS1iZXR3ZWVuJ10sXG4gICAgICAgICAgZmxleERpcmVjdGlvbjogWydjb2x1bW4nLCBudWxsLCBudWxsLCBudWxsLCAncm93J10sXG4gICAgICAgICAgcGFkZGluZ1RvcDogWzMwLCA0MF0sXG4gICAgICAgICAgcGFkZGluZ0JvdHRvbTogWzMwLCA2NV0sXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy5sZWZ0fT5cbiAgICAgICAgICA8TG9nbyAvPlxuICAgICAgICAgIDxUZXh0IGFzPVwicFwiIHN4PXtzdHlsZXMuY2VudGVyfT5cbiAgICAgICAgICAgICZjb3B5OyB7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfSBBbGwgcmlnaHQgcmVzZXJ2ZWQgLSBTbWFydCBGbHV4IFNvZnR3YXJlIFNvbHV0aW9uc1xuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIHsvKiA8Qm94IHN4PXtzdHlsZXMucmlnaHR9PlxuICAgICAgICAgIDxMaW5rIHBhdGg9XCIvXCIgbGFiZWw9XCJIb21lXCIgLz5cbiAgICAgICAgICA8TGluayBwYXRoPVwiL1wiIGxhYmVsPVwiQWR2ZXJzaXRlXCIgLz5cbiAgICAgICAgICA8TGluayBwYXRoPVwiL1wiIGxhYmVsPVwiU3VwcG9ydHNcIiAvPlxuICAgICAgICAgIDxMaW5rIHBhdGg9XCIvXCIgbGFiZWw9XCJNYXJrZXRpbmdcIiAvPlxuICAgICAgICAgIDxMaW5rIHBhdGg9XCIvXCIgbGFiZWw9XCJGQVFcIiAvPlxuICAgICAgICA8L0JveD4gKi99XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L2Zvb3Rlcj5cbiAgKTtcbn1cblxuY29uc3Qgc3R5bGVzID0ge1xuICBsZWZ0OiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246IFsnY29sdW1uJywgbnVsbCwgJ3JvdyddLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIHA6IHtcbiAgICAgIGZvbnRTaXplOiBbMCwgMV0sXG4gICAgICBjb2xvcjogJ2JsYWNrJyxcbiAgICAgIG9wYWNpdHk6IDAuNixcbiAgICAgIG10OiBbJzEwcHgnLCBudWxsLCAnMCddLFxuICAgIH0sXG4gIH0sXG4gIHJpZ2h0OiB7XG4gICAgZGlzcGxheTogWydub25lJywgbnVsbCwgbnVsbCwgbnVsbCwgJ2ZsZXgnXSxcbiAgICBmb250U2l6ZTogMixcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBjb2xvcjogJ2JsYWNrJyxcbiAgICBhOiB7XG4gICAgICB0cmFuc2l0aW9uOiAnNTAwbXMnLFxuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgIGNvbG9yOiAncHJpbWFyeScsXG4gICAgICB9LFxuICAgIH0sXG4gICAgJ2ErYSc6IHtcbiAgICAgIG1hcmdpbkxlZnQ6ICczMHB4JyxcbiAgICB9LFxuICB9LFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/footer/footer.js\n");

/***/ })

})