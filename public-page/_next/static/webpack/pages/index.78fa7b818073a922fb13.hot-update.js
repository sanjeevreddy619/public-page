webpackHotUpdate_N_E("pages/index",{

/***/ "./src/sections/banner.js":
/*!********************************!*\
  !*** ./src/sections/banner.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-ga */ \"./node_modules/react-ga/dist/esm/index.js\");\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme-ui */ \"./node_modules/theme-ui/dist/index.esm.js\");\n/* harmony import */ var components_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/image */ \"./src/components/image.js\");\n/* harmony import */ var assets_partner_1_1_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/partner-1-1.png */ \"./src/assets/partner-1-1.png\");\n/* harmony import */ var assets_partner_1_1_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_partner_1_1_png__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var assets_partner_1_2_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/partner-1-2.png */ \"./src/assets/partner-1-2.png\");\n/* harmony import */ var assets_partner_1_2_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_partner_1_2_png__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var assets_partner_1_3_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/partner-1-3.png */ \"./src/assets/partner-1-3.png\");\n/* harmony import */ var assets_partner_1_3_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_partner_1_3_png__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var assets_banner_image_1_1_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/banner-image-1-1.png */ \"./src/assets/banner-image-1-1.png\");\n/* harmony import */ var assets_banner_image_1_1_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_banner_image_1_1_png__WEBPACK_IMPORTED_MODULE_7__);\nvar _this = undefined,\n  _jsxFileName = \"/Users/sanjeev/smartflux/landing/src/sections/banner.js\",\n  _s = $RefreshSig$();\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\nreact_ga__WEBPACK_IMPORTED_MODULE_1__[\"default\"].initialize('YOUR_GA_TRACKING_ID'); // Replace with your GA tracking ID\n\nvar Banner = function Banner() {\n  _s();\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n    email = _useState[0],\n    setEmail = _useState[1];\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n    message = _useState2[0],\n    setMessage = _useState2[1];\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n    isSuccess = _useState3[0],\n    setIsSuccess = _useState3[1];\n  var validateEmail = function validateEmail(email) {\n    var re = /\\S+@\\S+\\.\\S+/;\n    return re.test(email);\n  };\n  var handleSubmit = function handleSubmit(e) {\n    e.preventDefault();\n    if (!validateEmail(email)) {\n      setMessage('Please enter a valid email address.');\n      setIsSuccess(false);\n      return;\n    }\n\n    // Send the event to Google Analytics\n    react_ga__WEBPACK_IMPORTED_MODULE_1__[\"default\"].event({\n      category: 'Submissions',\n      action: 'Submit Email',\n      label: email\n    });\n    setMessage('Thank you for your submission. We will contact you soon.');\n    setIsSuccess(true);\n    setEmail('');\n  };\n  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n    sx: styles.banner,\n    id: \"banner\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 5\n    }\n  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"Container\"], {\n    sx: styles.container,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }\n  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"Grid\"], {\n    sx: styles.grid,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 9\n    }\n  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n    sx: styles.content,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 11\n    }\n  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"Heading\"], {\n    as: \"h3\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 13\n    }\n  }, \"Great software is built with amazing developers\"), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n    as: \"p\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 13\n    }\n  }, \"We build and manage world-class software products to bring your vision to life.\"), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n    as: \"form\",\n    sx: styles.form,\n    onSubmit: handleSubmit,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 13\n    }\n  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n    sx: styles.inputContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 15\n    }\n  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"Input\"], {\n    name: \"subscribe\",\n    id: \"subscribe\",\n    placeholder: \"Email Address To Connect\",\n    sx: styles.form.input,\n    value: email,\n    onChange: function onChange(e) {\n      return setEmail(e.target.value);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 17\n    }\n  }), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n    type: \"submit\",\n    sx: styles.form.button,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 17\n    }\n  }, \"Submit\")), message && __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n    sx: isSuccess ? styles.successMessage : styles.errorMessage,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 17\n    }\n  }, message)), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n    sx: styles.partner,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 13\n    }\n  })), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n    sx: styles.image,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 11\n    }\n  }, __jsx(components_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    src: assets_banner_image_1_1_png__WEBPACK_IMPORTED_MODULE_7___default.a,\n    alt: \"\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 13\n    }\n  })))));\n};\n_s(Banner, \"Wl6HbQXyLZoGSF1LbRalZWkFiWc=\");\n_c = Banner;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Banner);\nvar styles = {\n  banner: {\n    pt: ['110px', null, null, null, '150px', '200px'],\n    pb: ['50px', null, null, null, '60px', null, '0'],\n    backgroundColor: '#F6F8FB',\n    overflow: 'hidden'\n  },\n  container: {\n    width: [null, null, null, null, null, null, '1390px']\n  },\n  grid: {\n    display: 'grid',\n    gridTemplateColumns: ['1fr', null, null, '1fr 1fr'],\n    gridGap: '0'\n  },\n  content: {\n    h3: {\n      color: 'black',\n      fontWeight: 'bold',\n      lineHeight: [1.39],\n      letterSpacing: ['-.7px', '-1.5px'],\n      mb: ['15px', null, null, null, '20px'],\n      width: ['100%'],\n      maxWidth: ['100%', null, null, '90%', '100%', '540px'],\n      fontSize: [6, null, null, '36px', null, '55px', 9]\n    },\n    p: {\n      fontSize: [1, null, null, 2, null, 3],\n      lineHeight: ['26px', null, null, null, 2.33],\n      color: 'text_secondary',\n      mb: ['20px', null, null, null, null, '30px'],\n      width: ['100%'],\n      maxWidth: ['100%', null, null, null, null, '410px'],\n      br: {\n        display: ['none', null, null, null, 'inherit']\n      }\n    }\n  },\n  form: {\n    mb: ['30px', null, null, null, null, '60px'],\n    display: 'flex',\n    flexDirection: 'column'\n  },\n  inputContainer: {\n    display: 'flex',\n    alignItems: 'center',\n    mb: '10px' // Added margin-bottom to separate input from message\n  },\n  input: {\n    borderRadius: ['4px 0 0 4px'],\n    backgroundColor: '#fff',\n    width: ['300', null, null, null, '315px', null, '375px'],\n    height: ['45px', null, null, '55px', null, null, '65px'],\n    padding: ['0 15px', null, null, '0 25px'],\n    fontSize: [1, null, null, 2],\n    border: 'none',\n    outline: 'none',\n    boxShadow: '0px 10px 50px rgba(48, 98, 145, 0.08)'\n  },\n  button: {\n    fontSize: [1, null, null, null, 2, '20px'],\n    borderRadius: ['0 4px 4px 0'],\n    padding: ['0 15px'],\n    // height: ['45px', null, null, '55px', null, null, '65px'],\n    ml: ['10px'],\n    width: ['auto', null, null, null, '180px']\n  },\n  image: {\n    img: {\n      display: 'flex',\n      mixBlendMode: 'darken',\n      position: 'relative',\n      top: ['0', null, null, null, null, '-40px'],\n      maxWidth: ['100%', null, null, null, null, null, 'none']\n    }\n  },\n  partner: {\n    display: 'flex',\n    flexWrap: 'wrap',\n    alignItems: 'center',\n    mb: ['40px'],\n    '> div + div': {\n      ml: ['10px', null, null, '20px', null, '30px']\n    },\n    img: {\n      display: 'flex'\n    },\n    span: {\n      fontSize: [1, null, null, null, 2],\n      color: '#566272',\n      lineHeight: [1],\n      opacity: 0.6,\n      display: 'block',\n      mb: ['20px', null, null, null, '0px'],\n      mr: [null, null, null, null, '20px'],\n      flex: ['0 0 100%', null, null, null, '0 0 auto']\n    }\n  },\n  errorMessage: {\n    color: 'red'\n  },\n  successMessage: {\n    color: 'green'\n  }\n};\nvar _c;\n$RefreshReg$(_c, \"Banner\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL2Jhbm5lci5qcz80ODZiIl0sIm5hbWVzIjpbIlJlYWN0R0EiLCJpbml0aWFsaXplIiwiQmFubmVyIiwiX3MiLCJfdXNlU3RhdGUiLCJ1c2VTdGF0ZSIsImVtYWlsIiwic2V0RW1haWwiLCJfdXNlU3RhdGUyIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJfdXNlU3RhdGUzIiwiaXNTdWNjZXNzIiwic2V0SXNTdWNjZXNzIiwidmFsaWRhdGVFbWFpbCIsInJlIiwidGVzdCIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImV2ZW50IiwiY2F0ZWdvcnkiLCJhY3Rpb24iLCJsYWJlbCIsIl9fanN4IiwiQm94Iiwic3giLCJzdHlsZXMiLCJiYW5uZXIiLCJpZCIsIl9fc2VsZiIsIl90aGlzIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJDb250YWluZXIiLCJjb250YWluZXIiLCJHcmlkIiwiZ3JpZCIsImNvbnRlbnQiLCJIZWFkaW5nIiwiYXMiLCJUZXh0IiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXRDb250YWluZXIiLCJJbnB1dCIsIm5hbWUiLCJwbGFjZWhvbGRlciIsImlucHV0IiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsIkJ1dHRvbiIsInR5cGUiLCJidXR0b24iLCJzdWNjZXNzTWVzc2FnZSIsImVycm9yTWVzc2FnZSIsInBhcnRuZXIiLCJpbWFnZSIsIkltYWdlIiwic3JjIiwiYmFubmVySW1nIiwiYWx0IiwiX2MiLCJwdCIsInBiIiwiYmFja2dyb3VuZENvbG9yIiwib3ZlcmZsb3ciLCJ3aWR0aCIsImRpc3BsYXkiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwiZ3JpZEdhcCIsImgzIiwiY29sb3IiLCJmb250V2VpZ2h0IiwibGluZUhlaWdodCIsImxldHRlclNwYWNpbmciLCJtYiIsIm1heFdpZHRoIiwiZm9udFNpemUiLCJwIiwiYnIiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImJvcmRlclJhZGl1cyIsImhlaWdodCIsInBhZGRpbmciLCJib3JkZXIiLCJvdXRsaW5lIiwiYm94U2hhZG93IiwibWwiLCJpbWciLCJtaXhCbGVuZE1vZGUiLCJwb3NpdGlvbiIsInRvcCIsImZsZXhXcmFwIiwic3BhbiIsIm9wYWNpdHkiLCJtciIsImZsZXgiLCIkUmVmcmVzaFJlZyQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUNUO0FBQytDO0FBQ3pDO0FBRUs7QUFDQTtBQUNBO0FBQ1U7QUFFcERBLGdEQUFPLENBQUNDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7O0FBRTNDLElBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFNQSxDQUFBLEVBQVM7RUFBQUMsRUFBQTtFQUNuQixJQUFBQyxTQUFBLEdBQTBCQyxzREFBUSxDQUFDLEVBQUUsQ0FBQztJQUEvQkMsS0FBSyxHQUFBRixTQUFBO0lBQUVHLFFBQVEsR0FBQUgsU0FBQTtFQUN0QixJQUFBSSxVQUFBLEdBQThCSCxzREFBUSxDQUFDLEVBQUUsQ0FBQztJQUFuQ0ksT0FBTyxHQUFBRCxVQUFBO0lBQUVFLFVBQVUsR0FBQUYsVUFBQTtFQUMxQixJQUFBRyxVQUFBLEdBQWtDTixzREFBUSxDQUFDLEtBQUssQ0FBQztJQUExQ08sU0FBUyxHQUFBRCxVQUFBO0lBQUVFLFlBQVksR0FBQUYsVUFBQTtFQUU5QixJQUFNRyxhQUFhLEdBQUcsU0FBaEJBLGFBQWFBLENBQUlSLEtBQUssRUFBSztJQUMvQixJQUFNUyxFQUFFLEdBQUcsY0FBYztJQUN6QixPQUFPQSxFQUFFLENBQUNDLElBQUksQ0FBQ1YsS0FBSyxDQUFDO0VBQ3ZCLENBQUM7RUFFRCxJQUFNVyxZQUFZLEdBQUcsU0FBZkEsWUFBWUEsQ0FBSUMsQ0FBQyxFQUFLO0lBQzFCQSxDQUFDLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0lBQ2xCLElBQUksQ0FBQ0wsYUFB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RUFBRTtFQUNUO0FBQ0YsQ0FBQztBQUFDLElBQUFWLEVBQUE7QUFBQXFDLFlBQUEsQ0FBQXJDLEVBQUEiLCJmaWxlIjoiLi9zcmMvc2VjdGlvbnMvYmFubmVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0R0EgZnJvbSAncmVhY3QtZ2EnO1xuaW1wb3J0IHsgQm94LCBDb250YWluZXIsIEdyaWQsIEJ1dHRvbiwgSW5wdXQsIEhlYWRpbmcsIFRleHQgfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnY29tcG9uZW50cy9pbWFnZSc7XG5cbmltcG9ydCBpbWcxIGZyb20gJ2Fzc2V0cy9wYXJ0bmVyLTEtMS5wbmcnO1xuaW1wb3J0IGltZzIgZnJvbSAnYXNzZXRzL3BhcnRuZXItMS0yLnBuZyc7XG5pbXBvcnQgaW1nMyBmcm9tICdhc3NldHMvcGFydG5lci0xLTMucG5nJztcbmltcG9ydCBiYW5uZXJJbWcgZnJvbSAnYXNzZXRzL2Jhbm5lci1pbWFnZS0xLTEucG5nJztcblxuUmVhY3RHQS5pbml0aWFsaXplKCdZT1VSX0dBX1RSQUNLSU5HX0lEJyk7IC8vIFJlcGxhY2Ugd2l0aCB5b3VyIEdBIHRyYWNraW5nIElEXG5cbmNvbnN0IEJhbm5lciA9ICgpID0+IHtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2lzU3VjY2Vzcywgc2V0SXNTdWNjZXNzXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCB2YWxpZGF0ZUVtYWlsID0gKGVtYWlsKSA9PiB7XG4gICAgY29uc3QgcmUgPSAvXFxTK0BcXFMrXFwuXFxTKy87XG4gICAgcmV0dXJuIHJlLnRlc3QoZW1haWwpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICghdmFsaWRhdGVFbWFpbChlbWFpbCkpIHtcbiAgICAgIHNldE1lc3NhZ2UoJ1BsZWFzZSBlbnRlciBhIHZhbGlkIGVtYWlsIGFkZHJlc3MuJyk7XG4gICAgICBzZXRJc1N1Y2Nlc3MoZmFsc2UpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFNlbmQgdGhlIGV2ZW50IHRvIEdvb2dsZSBBbmFseXRpY3NcbiAgICBSZWFjdEdBLmV2ZW50KHtcbiAgICAgIGNhdGVnb3J5OiAnU3VibWlzc2lvbnMnLFxuICAgICAgYWN0aW9uOiAnU3VibWl0IEVtYWlsJyxcbiAgICAgIGxhYmVsOiBlbWFpbCxcbiAgICB9KTtcblxuICAgIHNldE1lc3NhZ2UoJ1RoYW5rIHlvdSBmb3IgeW91ciBzdWJtaXNzaW9uLiBXZSB3aWxsIGNvbnRhY3QgeW91IHNvb24uJyk7XG4gICAgc2V0SXNTdWNjZXNzKHRydWUpO1xuICAgIHNldEVtYWlsKCcnKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxCb3ggc3g9e3N0eWxlcy5iYW5uZXJ9IGlkPVwiYmFubmVyXCI+XG4gICAgICA8Q29udGFpbmVyIHN4PXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgPEdyaWQgc3g9e3N0eWxlcy5ncmlkfT5cbiAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMuY29udGVudH0+XG4gICAgICAgICAgICA8SGVhZGluZyBhcz1cImgzXCI+XG4gICAgICAgICAgICAgIEdyZWF0IHNvZnR3YXJlIGlzIGJ1aWx0IHdpdGggYW1hemluZyBkZXZlbG9wZXJzXG4gICAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgICA8VGV4dCBhcz1cInBcIj5cbiAgICAgICAgICAgICAgV2UgYnVpbGQgYW5kIG1hbmFnZSB3b3JsZC1jbGFzcyBzb2Z0d2FyZSBwcm9kdWN0cyB0byBicmluZyB5b3VyIHZpc2lvbiB0byBsaWZlLlxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPEJveCBhcz1cImZvcm1cIiBzeD17c3R5bGVzLmZvcm19IG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMuaW5wdXRDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgbmFtZT1cInN1YnNjcmliZVwiXG4gICAgICAgICAgICAgICAgICBpZD1cInN1YnNjcmliZVwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsIEFkZHJlc3MgVG8gQ29ubmVjdFwiXG4gICAgICAgICAgICAgICAgICBzeD17c3R5bGVzLmZvcm0uaW5wdXR9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIHN4PXtzdHlsZXMuZm9ybS5idXR0b259PlxuICAgICAgICAgICAgICAgICAgU3VibWl0XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICB7bWVzc2FnZSAmJiAoXG4gICAgICAgICAgICAgICAgPFRleHQgc3g9e2lzU3VjY2VzcyA/IHN0eWxlcy5zdWNjZXNzTWVzc2FnZSA6IHN0eWxlcy5lcnJvck1lc3NhZ2V9PlxuICAgICAgICAgICAgICAgICAge21lc3NhZ2V9XG4gICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMucGFydG5lcn0+XG4gICAgICAgICAgICAgIHsvKiA8VGV4dCBhcz1cInNwYW5cIj5TcG9uc29yZWQgYnk6PC9UZXh0PlxuICAgICAgICAgICAgICA8Qm94IGFzPVwiZGl2XCI+XG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz17aW1nMX0gYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgIDxCb3ggYXM9XCJkaXZcIj5cbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtpbWcyfSBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgPEJveCBhcz1cImRpdlwiPlxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2ltZzN9IGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgIDwvQm94PiAqL31cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5pbWFnZX0+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXtiYW5uZXJJbWd9IGFsdD1cIlwiIC8+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQmFubmVyO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGJhbm5lcjoge1xuICAgIHB0OiBbJzExMHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgJzE1MHB4JywgJzIwMHB4J10sXG4gICAgcGI6IFsnNTBweCcsIG51bGwsIG51bGwsIG51bGwsICc2MHB4JywgbnVsbCwgJzAnXSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRjZGOEZCJyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gIH0sXG4gIGNvbnRhaW5lcjoge1xuICAgIHdpZHRoOiBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgJzEzOTBweCddLFxuICB9LFxuICBncmlkOiB7XG4gICAgZGlzcGxheTogJ2dyaWQnLFxuICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFsnMWZyJywgbnVsbCwgbnVsbCwgJzFmciAxZnInXSxcbiAgICBncmlkR2FwOiAnMCcsXG4gIH0sXG4gIGNvbnRlbnQ6IHtcbiAgICBoMzoge1xuICAgICAgY29sb3I6ICdibGFjaycsXG4gICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgICBsaW5lSGVpZ2h0OiBbMS4zOV0sXG4gICAgICBsZXR0ZXJTcGFjaW5nOiBbJy0uN3B4JywgJy0xLjVweCddLFxuICAgICAgbWI6IFsnMTVweCcsIG51bGwsIG51bGwsIG51bGwsICcyMHB4J10sXG4gICAgICB3aWR0aDogWycxMDAlJ10sXG4gICAgICBtYXhXaWR0aDogWycxMDAlJywgbnVsbCwgbnVsbCwgJzkwJScsICcxMDAlJywgJzU0MHB4J10sXG4gICAgICBmb250U2l6ZTogWzYsIG51bGwsIG51bGwsICczNnB4JywgbnVsbCwgJzU1cHgnLCA5XSxcbiAgICB9LFxuICAgIHA6IHtcbiAgICAgIGZvbnRTaXplOiBbMSwgbnVsbCwgbnVsbCwgMiwgbnVsbCwgM10sXG4gICAgICBsaW5lSGVpZ2h0OiBbJzI2cHgnLCBudWxsLCBudWxsLCBudWxsLCAyLjMzXSxcbiAgICAgIGNvbG9yOiAndGV4dF9zZWNvbmRhcnknLFxuICAgICAgbWI6IFsnMjBweCcsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICczMHB4J10sXG4gICAgICB3aWR0aDogWycxMDAlJ10sXG4gICAgICBtYXhXaWR0aDogWycxMDAlJywgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgJzQxMHB4J10sXG4gICAgICBicjoge1xuICAgICAgICBkaXNwbGF5OiBbJ25vbmUnLCBudWxsLCBudWxsLCBudWxsLCAnaW5oZXJpdCddLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBmb3JtOiB7XG4gICAgbWI6IFsnMzBweCcsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICc2MHB4J10sXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICB9LFxuICBpbnB1dENvbnRhaW5lcjoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBtYjogJzEwcHgnLCAvLyBBZGRlZCBtYXJnaW4tYm90dG9tIHRvIHNlcGFyYXRlIGlucHV0IGZyb20gbWVzc2FnZVxuICB9LFxuICBpbnB1dDoge1xuICAgIGJvcmRlclJhZGl1czogWyc0cHggMCAwIDRweCddLFxuICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICAgIHdpZHRoOiBbJzMwMCcsIG51bGwsIG51bGwsIG51bGwsICczMTVweCcsIG51bGwsICczNzVweCddLFxuICAgIGhlaWdodDogWyc0NXB4JywgbnVsbCwgbnVsbCwgJzU1cHgnLCBudWxsLCBudWxsLCAnNjVweCddLFxuICAgIHBhZGRpbmc6IFsnMCAxNXB4JywgbnVsbCwgbnVsbCwgJzAgMjVweCddLFxuICAgIGZvbnRTaXplOiBbMSwgbnVsbCwgbnVsbCwgMl0sXG4gICAgYm9yZGVyOiAnbm9uZScsXG4gICAgb3V0bGluZTogJ25vbmUnLFxuICAgIGJveFNoYWRvdzogJzBweCAxMHB4IDUwcHggcmdiYSg0OCwgOTgsIDE0NSwgMC4wOCknLFxuICB9LFxuICBidXR0b246IHtcbiAgICBmb250U2l6ZTogWzEsIG51bGwsIG51bGwsIG51bGwsIDIsICcyMHB4J10sXG4gICAgYm9yZGVyUmFkaXVzOiBbJzAgNHB4IDRweCAwJ10sXG4gICAgcGFkZGluZzogWycwIDE1cHgnXSxcbiAgICAvLyBoZWlnaHQ6IFsnNDVweCcsIG51bGwsIG51bGwsICc1NXB4JywgbnVsbCwgbnVsbCwgJzY1cHgnXSxcbiAgICBtbDogWycxMHB4J10sXG4gICAgd2lkdGg6IFsnYXV0bycsIG51bGwsIG51bGwsIG51bGwsICcxODBweCddLFxuICB9LFxuICBpbWFnZToge1xuICAgIGltZzoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgbWl4QmxlbmRNb2RlOiAnZGFya2VuJyxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgdG9wOiBbJzAnLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAnLTQwcHgnXSxcbiAgICAgIG1heFdpZHRoOiBbJzEwMCUnLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAnbm9uZSddLFxuICAgIH0sXG4gIH0sXG4gIHBhcnRuZXI6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleFdyYXA6ICd3cmFwJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBtYjogWyc0MHB4J10sXG4gICAgJz4gZGl2ICsgZGl2Jzoge1xuICAgICAgbWw6IFsnMTBweCcsIG51bGwsIG51bGwsICcyMHB4JywgbnVsbCwgJzMwcHgnXSxcbiAgICB9LFxuICAgIGltZzoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIH0sXG4gICAgc3Bhbjoge1xuICAgICAgZm9udFNpemU6IFsxLCBudWxsLCBudWxsLCBudWxsLCAyXSxcbiAgICAgIGNvbG9yOiAnIzU2NjI3MicsXG4gICAgICBsaW5lSGVpZ2h0OiBbMV0sXG4gICAgICBvcGFjaXR5OiAwLjYsXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgbWI6IFsnMjBweCcsIG51bGwsIG51bGwsIG51bGwsICcwcHgnXSxcbiAgICAgIG1yOiBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgJzIwcHgnXSxcbiAgICAgIGZsZXg6IFsnMCAwIDEwMCUnLCBudWxsLCBudWxsLCBudWxsLCAnMCAwIGF1dG8nXSxcbiAgICB9LFxuICB9LFxuICBlcnJvck1lc3NhZ2U6IHtcbiAgICBjb2xvcjogJ3JlZCcsXG4gIH0sXG4gIHN1Y2Nlc3NNZXNzYWdlOiB7XG4gICAgY29sb3I6ICdncmVlbicsXG4gIH0sXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/sections/banner.js\n");

/***/ })

})