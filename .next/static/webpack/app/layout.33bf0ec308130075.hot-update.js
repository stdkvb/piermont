"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/globals.scss":
/*!**************************!*\
  !*** ./app/globals.scss ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"a6c97f33f2e8\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLnNjc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9nbG9iYWxzLnNjc3M/YTNhNCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcImE2Yzk3ZjMzZjJlOFwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.scss\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/shared/RecaptchaProvider.tsx":
/*!*************************************************!*\
  !*** ./components/shared/RecaptchaProvider.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   RecaptchaProvider: function() { return /* binding */ RecaptchaProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_google_recaptcha_v3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-google-recaptcha-v3 */ \"(app-pages-browser)/./node_modules/react-google-recaptcha-v3/dist/react-google-recaptcha-v3.esm.js\");\n/* __next_internal_client_entry_do_not_use__ RecaptchaProvider auto */ \n\nconst RecaptchaProvider = (param)=>{\n    let { children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_google_recaptcha_v3__WEBPACK_IMPORTED_MODULE_1__.GoogleReCaptchaProvider, {\n        reCaptchaKey: \"6LcJw2IqAAAAANm0pDgC9TeUJTKFWPl_CpsHh0xI\",\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/bulatsitdikov/dev/piermont/components/shared/RecaptchaProvider.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, undefined);\n};\n_c = RecaptchaProvider;\nvar _c;\n$RefreshReg$(_c, \"RecaptchaProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvc2hhcmVkL1JlY2FwdGNoYVByb3ZpZGVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ29FO0FBRTdELE1BQU1DLG9CQUFvQjtRQUFDLEVBQ2hDQyxRQUFRLEVBR1I7SUFDQSxxQkFDRSw4REFBQ0YsOEVBQXVCQTtRQUFDRyxjQUFhO2tCQUNuQ0Q7Ozs7OztBQUdQLEVBQUU7S0FWV0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvUmVjYXB0Y2hhUHJvdmlkZXIudHN4P2E2ZTUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyBHb29nbGVSZUNhcHRjaGFQcm92aWRlciB9IGZyb20gXCJyZWFjdC1nb29nbGUtcmVjYXB0Y2hhLXYzXCI7XG5cbmV4cG9ydCBjb25zdCBSZWNhcHRjaGFQcm92aWRlciA9ICh7XG4gIGNoaWxkcmVuLFxufTogUmVhZG9ubHk8e1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xufT4pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8R29vZ2xlUmVDYXB0Y2hhUHJvdmlkZXIgcmVDYXB0Y2hhS2V5PVwiNkxjSncySXFBQUFBQU5tMHBEZ0M5VGVVSlRLRldQbF9DcHNIaDB4SVwiPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvR29vZ2xlUmVDYXB0Y2hhUHJvdmlkZXI+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbIkdvb2dsZVJlQ2FwdGNoYVByb3ZpZGVyIiwiUmVjYXB0Y2hhUHJvdmlkZXIiLCJjaGlsZHJlbiIsInJlQ2FwdGNoYUtleSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/shared/RecaptchaProvider.tsx\n"));

/***/ })

});