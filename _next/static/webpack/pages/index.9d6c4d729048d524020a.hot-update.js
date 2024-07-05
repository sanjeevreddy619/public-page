webpackHotUpdate_N_E("pages/index",{

/***/ "./src/sections/banner.js":
/*!********************************!*\
  !*** ./src/sections/banner.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-ga */ \"./node_modules/react-ga/dist/esm/index.js\");\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme-ui */ \"./node_modules/theme-ui/dist/index.esm.js\");\n/* harmony import */ var components_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/image */ \"./src/components/image.js\");\n/* harmony import */ var assets_partner_1_1_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/partner-1-1.png */ \"./src/assets/partner-1-1.png\");\n/* harmony import */ var assets_partner_1_1_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_partner_1_1_png__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var assets_partner_1_2_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/partner-1-2.png */ \"./src/assets/partner-1-2.png\");\n/* harmony import */ var assets_partner_1_2_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_partner_1_2_png__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var assets_partner_1_3_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/partner-1-3.png */ \"./src/assets/partner-1-3.png\");\n/* harmony import */ var assets_partner_1_3_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_partner_1_3_png__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var assets_banner_image_1_1_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/banner-image-1-1.png */ \"./src/assets/banner-image-1-1.png\");\n/* harmony import */ var assets_banner_image_1_1_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_banner_image_1_1_png__WEBPACK_IMPORTED_MODULE_7__);\nvar _this = undefined,\n  _jsxFileName = \"/Users/sanjeev/smartflux/landing/src/sections/banner.js\",\n  _s = $RefreshSig$();\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\nreact_ga__WEBPACK_IMPORTED_MODULE_1__[\"default\"].initialize('YOUR_GA_TRACKING_ID'); // Replace with your GA tracking ID\n\nvar Banner = function Banner() {\n  _s();\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n    email = _useState[0],\n    setEmail = _useState[1];\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n    message = _useState2[0],\n    setMessage = _useState2[1];\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n    isSuccess = _useState3[0],\n    setIsSuccess = _useState3[1];\n  var validateEmail = function validateEmail(email) {\n    var re = /\\S+@\\S+\\.\\S+/;\n    return re.test(email);\n  };\n  var handleSubmit = function handleSubmit(e) {\n    e.preventDefault();\n    if (!validateEmail(email)) {\n      setMessage('Please enter a valid email address.');\n      setIsSuccess(false);\n      return;\n    }\n\n    // Send the event to Google Analytics\n    react_ga__WEBPACK_IMPORTED_MODULE_1__[\"default\"].event({\n      category: 'Submissions',\n      action: 'Submit Email',\n      label: email\n    });\n    setMessage('Thank you for your submission. We will contact you soon.');\n    setIsSuccess(true);\n    setEmail('');\n  };\n  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n    sx: styles.banner,\n    id: \"banner\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 5\n    }\n  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"Container\"], {\n    sx: styles.container,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }\n  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"Grid\"], {\n    sx: styles.grid,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 9\n    }\n  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n    sx: styles.content,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 11\n    }\n  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"Heading\"], {\n    as: \"h3\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 13\n    }\n  }, \"Great software is built with amazing developers\"), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n    as: \"p\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 13\n    }\n  }, \"We build and manage world-class software products to bring your vision to life.\"), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n    as: \"form\",\n    sx: styles.form,\n    onSubmit: handleSubmit,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 13\n    }\n  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n    as: \"label\",\n    htmlFor: \"subscribe\",\n    variant: \"styles.srOnly\",\n    sx: styles.inputContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 15\n    }\n  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"Input\"], {\n    name: \"subscribe\",\n    id: \"subscribe\",\n    placeholder: \"Email Address To Connect\",\n    sx: styles.form.input,\n    value: email,\n    onChange: function onChange(e) {\n      return setEmail(e.target.value);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 17\n    }\n  }), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n    type: \"submit\",\n    sx: styles.form.button,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 17\n    }\n  }, \"Submit\")), message && __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n    sx: isSuccess ? styles.successMessage : styles.errorMessage,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 17\n    }\n  }, message)), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n    sx: styles.partner,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 13\n    }\n  })), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n    sx: styles.image,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 11\n    }\n  }, __jsx(components_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    src: assets_banner_image_1_1_png__WEBPACK_IMPORTED_MODULE_7___default.a,\n    alt: \"\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 13\n    }\n  })))));\n};\n_s(Banner, \"Wl6HbQXyLZoGSF1LbRalZWkFiWc=\");\n_c = Banner;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Banner);\nvar styles = {\n  banner: {\n    pt: ['110px', null, null, null, '150px', '200px'],\n    pb: ['50px', null, null, null, '60px', null, '0'],\n    backgroundColor: '#F6F8FB',\n    overflow: 'hidden'\n  },\n  container: {\n    width: [null, null, null, null, null, null, '1390px']\n  },\n  grid: {\n    display: 'grid',\n    gridTemplateColumns: ['1fr', null, null, '1fr 1fr'],\n    gridGap: '0'\n  },\n  content: {\n    h3: {\n      color: 'black',\n      fontWeight: 'bold',\n      lineHeight: [1.39],\n      letterSpacing: ['-.7px', '-1.5px'],\n      mb: ['15px', null, null, null, '20px'],\n      width: ['100%'],\n      maxWidth: ['100%', null, null, '90%', '100%', '540px'],\n      fontSize: [6, null, null, '36px', null, '55px', 9]\n    },\n    p: {\n      fontSize: [1, null, null, 2, null, 3],\n      lineHeight: ['26px', null, null, null, 2.33],\n      color: 'text_secondary',\n      mb: ['20px', null, null, null, null, '30px'],\n      width: ['100%'],\n      maxWidth: ['100%', null, null, null, null, '410px'],\n      br: {\n        display: ['none', null, null, null, 'inherit']\n      }\n    }\n  },\n  form: {\n    mb: ['30px', null, null, null, null, '60px']\n  },\n  inputContainer: {\n    display: 'flex',\n    alignItems: 'center',\n    mb: '10px',\n    // Added margin-bottom to separate input from message\n    justifyContent: 'center' // Center the form elements horizontally\n  },\n  input: {\n    borderRadius: ['4px'],\n    backgroundColor: '#fff',\n    width: ['240px', null, null, null, '315px', null, '375px'],\n    height: ['45px', null, null, '55px', null, null, '65px'],\n    padding: ['0 15px', null, null, '0 25px'],\n    fontSize: [1, null, null, 2],\n    border: 'none',\n    outline: 'none',\n    boxShadow: '0px 10px 50px rgba(48, 98, 145, 0.08)',\n    marginRight: '15px' // Added margin-right to create gap between input and button\n  },\n  button: {\n    fontSize: [1, null, null, null, 2, '20px'],\n    borderRadius: ['4px'],\n    padding: ['0 15px'],\n    width: ['auto', null, null, null, '180px'],\n    height: ['45px', null, null, '55px', null, null, '65px'],\n    backgroundColor: '#6C63FF',\n    // Adjust the background color to match the second image\n    color: '#fff',\n    border: 'none',\n    boxShadow: '0px 10px 50px rgba(48, 98, 145, 0.08)'\n  },\n  image: {\n    img: {\n      display: 'flex',\n      mixBlendMode: 'darken',\n      position: 'relative',\n      top: ['0', null, null, null, null, '-40px'],\n      maxWidth: ['100%', null, null, null, null, null, 'none']\n    }\n  },\n  partner: {\n    display: 'flex',\n    flexWrap: 'wrap',\n    alignItems: 'center',\n    mb: ['40px'],\n    '> div + div': {\n      ml: ['10px', null, null, '20px', null, '30px']\n    },\n    img: {\n      display: 'flex'\n    },\n    span: {\n      fontSize: [1, null, null, null, 2],\n      color: '#566272',\n      lineHeight: [1],\n      opacity: 0.6,\n      display: 'block',\n      mb: ['20px', null, null, null, '0px'],\n      mr: [null, null, null, null, '20px'],\n      flex: ['0 0 100%', null, null, null, '0 0 auto']\n    }\n  },\n  errorMessage: {\n    color: 'red',\n    textAlign: 'center' // Center align the message\n  },\n  successMessage: {\n    color: 'green',\n    textAlign: 'center' // Center align the message\n  }\n};\nvar _c;\n$RefreshReg$(_c, \"Banner\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL2Jhbm5lci5qcz80ODZiIl0sIm5hbWVzIjpbIlJlYWN0R0EiLCJpbml0aWFsaXplIiwiQmFubmVyIiwiX3MiLCJfdXNlU3RhdGUiLCJ1c2VTdGF0ZSIsImVtYWlsIiwic2V0RW1haWwiLCJfdXNlU3RhdGUyIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJfdXNlU3RhdGUzIiwiaXNTdWNjZXNzIiwic2V0SXNTdWNjZXNzIiwidmFsaWRhdGVFbWFpbCIsInJlIiwidGVzdCIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImV2ZW50IiwiY2F0ZWdvcnkiLCJhY3Rpb24iLCJsYWJlbCIsIl9fanN4IiwiQm94Iiwic3giLCJzdHlsZXMiLCJiYW5uZXIiLCJpZCIsIl9fc2VsZiIsIl90aGlzIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJDb250YWluZXIiLCJjb250YWluZXIiLCJHcmlkIiwiZ3JpZCIsImNvbnRlbnQiLCJIZWFkaW5nIiwiYXMiLCJUZXh0IiwiZm9ybSIsIm9uU3VibWl0IiwiaHRtbEZvciIsInZhcmlhbnQiLCJpbnB1dENvbnRhaW5lciIsIklucHV0IiwibmFtZSIsInBsYWNlaG9sZGVyIiwiaW5wdXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwiQnV0dG9uIiwidHlwZSIsImJ1dHRvbiIsInN1Y2Nlc3NNZXNzYWdlIiwiZXJyb3JNZXNzYWdlIiwicGFydG5lciIsImltYWdlIiwiSW1hZ2UiLCJzcmMiLCJiYW5uZXJJbWciLCJhbHQiLCJfYyIsInB0IiwicGIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJvdmVyZmxvdyIsIndpZHRoIiwiZGlzcGxheSIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJncmlkR2FwIiwiaDMiLCJjb2xvciIsImZvbnRXZWlnaHQiLCJsaW5lSGVpZ2h0IiwibGV0dGVyU3BhY2luZyIsIm1iIiwibWF4V2lkdGgiLCJmb250U2l6ZSIsInAiLCJiciIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImJvcmRlclJhZGl1cyIsImhlaWdodCIsInBhZGRpbmciLCJib3JkZXIiLCJvdXRsaW5lIiwiYm94U2hhZG93IiwibWFyZ2luUmlnaHQiLCJpbWciLCJtaXhCbGVuZE1vZGUiLCJwb3NpdGlvbiIsInRvcCIsImZsZXhXcmFwIiwibWwiLCJzcGFuIiwib3BhY2l0eSIsIm1yIiwiZmxleCIsInRleHRBbGlnbiIsIiRSZWZyZXNoUmVnJCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ1Q7QUFDK0M7QUFDekM7QUFFSztBQUNBO0FBQ0E7QUFDVTtBQUVwREEsZ0RBQU8sQ0FBQ0MsVUFBVSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQzs7QUFFM0MsSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQU1BLENBQUEsRUFBUztFQUFBQyxFQUFBO0VBQ25CLElBQUFDLFNBQUEsR0FBMEJDLHNEQUFRLENBQUMsRUFBRSxDQUFDO0lBQS9CQyxLQUFLLEdBQUFGLFNBQUE7SUFBRUcsUUFBUSxHQUFBSCxTQUFBO0VBQ3RCLElBQUFJLFVBQUEsR0FBOEJILHNEQUFRLENBQUMsRUFBRSxDQUFDO0lBQW5DSSxPQUFPLEdBQUFELFVBQUE7SUFBRUUsVUFBVSxHQUFBRixVQUFBO0VBQzFCLElBQUFHLFVBQUEsR0FBa0NOLHNEQUFRLENBQUMsS0FBSyxDQUFDO0lBQTFDTyxTQUFTLEdBQUFELFVBQUE7SUFBRUUsWUFBWSxHQUFBRixVQUFBO0VBRTlCLElBQU1HLGFBQWEsR0FBRyxTQUFoQkEsYUFBYUEsQ0FBSVIsS0FBSyxFQUFLO0lBQy9CLElBQU1TLEVBQUUsR0FBRyxjQUFjO0lBQ3pCLE9BQU9BLEVBQUUsQ0FBQ0MsSUFBSSxDQUFDVixLQUFLLENBQUM7RUFDdkIsQ0FBQztFQUVELElBQU1XLFlBQVksR0FBRyxTQUFmQSxZQUFZQSxDQUFJQyxDQUFDLEVBQUs7SUFDMUJB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YSxFQUFFLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQztNQUNsQ0MsRUFBRSxFQUFFLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQztNQUN0Q1QsS0FBSyxFQUFFLENBQUMsTUFBTSxDQUFDO01BQ2ZVLFFBQVEsRUFBRSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDO01BQ3REQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDO0lBQ25ELENBQUM7SUFDREMsQ0FBQyxFQUFFO01BQ0RELFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO01BQ3JDSixVQUFVLEVBQUUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDO01BQzVDRixLQUFLLEVBQUUsZ0JBQWdCO01BQ3ZCSSxFQUFFLEVBQUUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQztNQUM1Q1QsS0FBSyxFQUFFLENBQUMsTUFBTSxDQUFDO01BQ2ZVLFFBQVEsRUFBRSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDO01BQ25ERyxFQUFFLEVBQUU7UUFDRlosT0FBTyxFQUFFLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFNBQVM7TUFDL0M7SUFDRjtFQUNGLENBQUM7RUFDRDdCLElBQUksRUFBRTtJQUNKcUMsRUFBRSxFQUFFLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFN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QyxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDO01BQ3JDc0IsRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQztNQUNwQ0MsSUFBSSxFQUFFLENBQUMsVUFBVSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFVBQVU7SUFDakQ7RUFDRixDQUFDO0VBQ0Q1QyxZQUFZLEVBQUU7SUFDWmlCLEtBQUssRUFBRSxLQUFLO0lBQ1o0QixTQUFTLEVBQUUsUUFBUSxDQUFFO0VBQ3ZCLENBQUM7RUFDRDlDLGNBQWMsRUFBRTtJQUNka0IsS0FBSyxFQUFFLE9BQU87SUFDZDRCLFNBQVMsRUFBRSxRQUFRLENBQUU7RUFDdkI7QUFDRixDQUFDO0FBQUMsSUFBQXRDLEVBQUE7QUFBQXVDLFlBQUEsQ0FBQXZDLEVBQUEiLCJmaWxlIjoiLi9zcmMvc2VjdGlvbnMvYmFubmVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0R0EgZnJvbSAncmVhY3QtZ2EnO1xuaW1wb3J0IHsgQm94LCBDb250YWluZXIsIEdyaWQsIEJ1dHRvbiwgSW5wdXQsIEhlYWRpbmcsIFRleHQgfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnY29tcG9uZW50cy9pbWFnZSc7XG5cbmltcG9ydCBpbWcxIGZyb20gJ2Fzc2V0cy9wYXJ0bmVyLTEtMS5wbmcnO1xuaW1wb3J0IGltZzIgZnJvbSAnYXNzZXRzL3BhcnRuZXItMS0yLnBuZyc7XG5pbXBvcnQgaW1nMyBmcm9tICdhc3NldHMvcGFydG5lci0xLTMucG5nJztcbmltcG9ydCBiYW5uZXJJbWcgZnJvbSAnYXNzZXRzL2Jhbm5lci1pbWFnZS0xLTEucG5nJztcblxuUmVhY3RHQS5pbml0aWFsaXplKCdZT1VSX0dBX1RSQUNLSU5HX0lEJyk7IC8vIFJlcGxhY2Ugd2l0aCB5b3VyIEdBIHRyYWNraW5nIElEXG5cbmNvbnN0IEJhbm5lciA9ICgpID0+IHtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2lzU3VjY2Vzcywgc2V0SXNTdWNjZXNzXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCB2YWxpZGF0ZUVtYWlsID0gKGVtYWlsKSA9PiB7XG4gICAgY29uc3QgcmUgPSAvXFxTK0BcXFMrXFwuXFxTKy87XG4gICAgcmV0dXJuIHJlLnRlc3QoZW1haWwpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICghdmFsaWRhdGVFbWFpbChlbWFpbCkpIHtcbiAgICAgIHNldE1lc3NhZ2UoJ1BsZWFzZSBlbnRlciBhIHZhbGlkIGVtYWlsIGFkZHJlc3MuJyk7XG4gICAgICBzZXRJc1N1Y2Nlc3MoZmFsc2UpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFNlbmQgdGhlIGV2ZW50IHRvIEdvb2dsZSBBbmFseXRpY3NcbiAgICBSZWFjdEdBLmV2ZW50KHtcbiAgICAgIGNhdGVnb3J5OiAnU3VibWlzc2lvbnMnLFxuICAgICAgYWN0aW9uOiAnU3VibWl0IEVtYWlsJyxcbiAgICAgIGxhYmVsOiBlbWFpbCxcbiAgICB9KTtcblxuICAgIHNldE1lc3NhZ2UoJ1RoYW5rIHlvdSBmb3IgeW91ciBzdWJtaXNzaW9uLiBXZSB3aWxsIGNvbnRhY3QgeW91IHNvb24uJyk7XG4gICAgc2V0SXNTdWNjZXNzKHRydWUpO1xuICAgIHNldEVtYWlsKCcnKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxCb3ggc3g9e3N0eWxlcy5iYW5uZXJ9IGlkPVwiYmFubmVyXCI+XG4gICAgICA8Q29udGFpbmVyIHN4PXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgPEdyaWQgc3g9e3N0eWxlcy5ncmlkfT5cbiAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMuY29udGVudH0+XG4gICAgICAgICAgICA8SGVhZGluZyBhcz1cImgzXCI+XG4gICAgICAgICAgICAgIEdyZWF0IHNvZnR3YXJlIGlzIGJ1aWx0IHdpdGggYW1hemluZyBkZXZlbG9wZXJzXG4gICAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgICA8VGV4dCBhcz1cInBcIj5cbiAgICAgICAgICAgICAgV2UgYnVpbGQgYW5kIG1hbmFnZSB3b3JsZC1jbGFzcyBzb2Z0d2FyZSBwcm9kdWN0cyB0byBicmluZyB5b3VyIHZpc2lvbiB0byBsaWZlLlxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPEJveCBhcz1cImZvcm1cIiBzeD17c3R5bGVzLmZvcm19IG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICA8Qm94IGFzPVwibGFiZWxcIiBodG1sRm9yPVwic3Vic2NyaWJlXCIgdmFyaWFudD1cInN0eWxlcy5zck9ubHlcIiBzeD17c3R5bGVzLmlucHV0Q29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJzdWJzY3JpYmVcIlxuICAgICAgICAgICAgICAgICAgaWQ9XCJzdWJzY3JpYmVcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbCBBZGRyZXNzIFRvIENvbm5lY3RcIlxuICAgICAgICAgICAgICAgICAgc3g9e3N0eWxlcy5mb3JtLmlucHV0fVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBzeD17c3R5bGVzLmZvcm0uYnV0dG9ufT5cbiAgICAgICAgICAgICAgICAgIFN1Ym1pdFxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAge21lc3NhZ2UgJiYgKFxuICAgICAgICAgICAgICAgIDxUZXh0IHN4PXtpc1N1Y2Nlc3MgPyBzdHlsZXMuc3VjY2Vzc01lc3NhZ2UgOiBzdHlsZXMuZXJyb3JNZXNzYWdlfT5cbiAgICAgICAgICAgICAgICAgIHttZXNzYWdlfVxuICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPEJveCBzeD17c3R5bGVzLnBhcnRuZXJ9PlxuICAgICAgICAgICAgICB7LyogPFRleHQgYXM9XCJzcGFuXCI+U3BvbnNvcmVkIGJ5OjwvVGV4dD5cbiAgICAgICAgICAgICAgPEJveCBhcz1cImRpdlwiPlxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2ltZzF9IGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICA8Qm94IGFzPVwiZGl2XCI+XG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz17aW1nMn0gYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgIDxCb3ggYXM9XCJkaXZcIj5cbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtpbWczfSBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgICA8L0JveD4gKi99XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMuaW1hZ2V9PlxuICAgICAgICAgICAgPEltYWdlIHNyYz17YmFubmVySW1nfSBhbHQ9XCJcIiAvPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJhbm5lcjtcblxuY29uc3Qgc3R5bGVzID0ge1xuICBiYW5uZXI6IHtcbiAgICBwdDogWycxMTBweCcsIG51bGwsIG51bGwsIG51bGwsICcxNTBweCcsICcyMDBweCddLFxuICAgIHBiOiBbJzUwcHgnLCBudWxsLCBudWxsLCBudWxsLCAnNjBweCcsIG51bGwsICcwJ10sXG4gICAgYmFja2dyb3VuZENvbG9yOiAnI0Y2RjhGQicsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICB9LFxuICBjb250YWluZXI6IHtcbiAgICB3aWR0aDogW251bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICcxMzkwcHgnXSxcbiAgfSxcbiAgZ3JpZDoge1xuICAgIGRpc3BsYXk6ICdncmlkJyxcbiAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBbJzFmcicsIG51bGwsIG51bGwsICcxZnIgMWZyJ10sXG4gICAgZ3JpZEdhcDogJzAnLFxuICB9LFxuICBjb250ZW50OiB7XG4gICAgaDM6IHtcbiAgICAgIGNvbG9yOiAnYmxhY2snLFxuICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgICAgbGluZUhlaWdodDogWzEuMzldLFxuICAgICAgbGV0dGVyU3BhY2luZzogWyctLjdweCcsICctMS41cHgnXSxcbiAgICAgIG1iOiBbJzE1cHgnLCBudWxsLCBudWxsLCBudWxsLCAnMjBweCddLFxuICAgICAgd2lkdGg6IFsnMTAwJSddLFxuICAgICAgbWF4V2lkdGg6IFsnMTAwJScsIG51bGwsIG51bGwsICc5MCUnLCAnMTAwJScsICc1NDBweCddLFxuICAgICAgZm9udFNpemU6IFs2LCBudWxsLCBudWxsLCAnMzZweCcsIG51bGwsICc1NXB4JywgOV0sXG4gICAgfSxcbiAgICBwOiB7XG4gICAgICBmb250U2l6ZTogWzEsIG51bGwsIG51bGwsIDIsIG51bGwsIDNdLFxuICAgICAgbGluZUhlaWdodDogWycyNnB4JywgbnVsbCwgbnVsbCwgbnVsbCwgMi4zM10sXG4gICAgICBjb2xvcjogJ3RleHRfc2Vjb25kYXJ5JyxcbiAgICAgIG1iOiBbJzIwcHgnLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAnMzBweCddLFxuICAgICAgd2lkdGg6IFsnMTAwJSddLFxuICAgICAgbWF4V2lkdGg6IFsnMTAwJScsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICc0MTBweCddLFxuICAgICAgYnI6IHtcbiAgICAgICAgZGlzcGxheTogWydub25lJywgbnVsbCwgbnVsbCwgbnVsbCwgJ2luaGVyaXQnXSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgZm9ybToge1xuICAgIG1iOiBbJzMwcHgnLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAnNjBweCddLFxuICB9LFxuICBpbnB1dENvbnRhaW5lcjoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBtYjogJzEwcHgnLCAvLyBBZGRlZCBtYXJnaW4tYm90dG9tIHRvIHNlcGFyYXRlIGlucHV0IGZyb20gbWVzc2FnZVxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgLy8gQ2VudGVyIHRoZSBmb3JtIGVsZW1lbnRzIGhvcml6b250YWxseVxuICB9LFxuICBpbnB1dDoge1xuICAgIGJvcmRlclJhZGl1czogWyc0cHgnXSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgICB3aWR0aDogWycyNDBweCcsIG51bGwsIG51bGwsIG51bGwsICczMTVweCcsIG51bGwsICczNzVweCddLFxuICAgIGhlaWdodDogWyc0NXB4JywgbnVsbCwgbnVsbCwgJzU1cHgnLCBudWxsLCBudWxsLCAnNjVweCddLFxuICAgIHBhZGRpbmc6IFsnMCAxNXB4JywgbnVsbCwgbnVsbCwgJzAgMjVweCddLFxuICAgIGZvbnRTaXplOiBbMSwgbnVsbCwgbnVsbCwgMl0sXG4gICAgYm9yZGVyOiAnbm9uZScsXG4gICAgb3V0bGluZTogJ25vbmUnLFxuICAgIGJveFNoYWRvdzogJzBweCAxMHB4IDUwcHggcmdiYSg0OCwgOTgsIDE0NSwgMC4wOCknLFxuICAgIG1hcmdpblJpZ2h0OiAnMTVweCcsIC8vIEFkZGVkIG1hcmdpbi1yaWdodCB0byBjcmVhdGUgZ2FwIGJldHdlZW4gaW5wdXQgYW5kIGJ1dHRvblxuICB9LFxuICBidXR0b246IHtcbiAgICBmb250U2l6ZTogWzEsIG51bGwsIG51bGwsIG51bGwsIDIsICcyMHB4J10sXG4gICAgYm9yZGVyUmFkaXVzOiBbJzRweCddLFxuICAgIHBhZGRpbmc6IFsnMCAxNXB4J10sXG4gICAgd2lkdGg6IFsnYXV0bycsIG51bGwsIG51bGwsIG51bGwsICcxODBweCddLFxuICAgIGhlaWdodDogWyc0NXB4JywgbnVsbCwgbnVsbCwgJzU1cHgnLCBudWxsLCBudWxsLCAnNjVweCddLFxuICAgIGJhY2tncm91bmRDb2xvcjogJyM2QzYzRkYnLCAvLyBBZGp1c3QgdGhlIGJhY2tncm91bmQgY29sb3IgdG8gbWF0Y2ggdGhlIHNlY29uZCBpbWFnZVxuICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgYm9yZGVyOiAnbm9uZScsXG4gICAgYm94U2hhZG93OiAnMHB4IDEwcHggNTBweCByZ2JhKDQ4LCA5OCwgMTQ1LCAwLjA4KScsXG4gIH0sXG4gIGltYWdlOiB7XG4gICAgaW1nOiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBtaXhCbGVuZE1vZGU6ICdkYXJrZW4nLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICB0b3A6IFsnMCcsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICctNDBweCddLFxuICAgICAgbWF4V2lkdGg6IFsnMTAwJScsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICdub25lJ10sXG4gICAgfSxcbiAgfSxcbiAgcGFydG5lcjoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4V3JhcDogJ3dyYXAnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIG1iOiBbJzQwcHgnXSxcbiAgICAnPiBkaXYgKyBkaXYnOiB7XG4gICAgICBtbDogWycxMHB4JywgbnVsbCwgbnVsbCwgJzIwcHgnLCBudWxsLCAnMzBweCddLFxuICAgIH0sXG4gICAgaW1nOiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgfSxcbiAgICBzcGFuOiB7XG4gICAgICBmb250U2l6ZTogWzEsIG51bGwsIG51bGwsIG51bGwsIDJdLFxuICAgICAgY29sb3I6ICcjNTY2MjcyJyxcbiAgICAgIGxpbmVIZWlnaHQ6IFsxXSxcbiAgICAgIG9wYWNpdHk6IDAuNixcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICBtYjogWycyMHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgJzBweCddLFxuICAgICAgbXI6IFtudWxsLCBudWxsLCBudWxsLCBudWxsLCAnMjBweCddLFxuICAgICAgZmxleDogWycwIDAgMTAwJScsIG51bGwsIG51bGwsIG51bGwsICcwIDAgYXV0byddLFxuICAgIH0sXG4gIH0sXG4gIGVycm9yTWVzc2FnZToge1xuICAgIGNvbG9yOiAncmVkJyxcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLCAvLyBDZW50ZXIgYWxpZ24gdGhlIG1lc3NhZ2VcbiAgfSxcbiAgc3VjY2Vzc01lc3NhZ2U6IHtcbiAgICBjb2xvcjogJ2dyZWVuJyxcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLCAvLyBDZW50ZXIgYWxpZ24gdGhlIG1lc3NhZ2VcbiAgfSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/sections/banner.js\n");

/***/ })

})