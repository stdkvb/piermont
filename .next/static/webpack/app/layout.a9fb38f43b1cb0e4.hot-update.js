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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"47624692a3f1\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLnNjc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9nbG9iYWxzLnNjc3M/YTNhNCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjQ3NjI0NjkyYTNmMVwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.scss\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/shared/Lobby.tsx":
/*!*************************************!*\
  !*** ./components/shared/Lobby.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Lobby: function() { return /* binding */ Lobby; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ \"(app-pages-browser)/./node_modules/gsap/index.js\");\n/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap/ScrollTrigger */ \"(app-pages-browser)/./node_modules/gsap/ScrollTrigger.js\");\n/* __next_internal_client_entry_do_not_use__ Lobby auto */ \nvar _s = $RefreshSig$();\n\n\n\ngsap__WEBPACK_IMPORTED_MODULE_2__.gsap.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__.ScrollTrigger);\nconst Lobby = (props)=>{\n    _s();\n    const sectionRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const h2Refs = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const section = sectionRef.current;\n        const headers = h2Refs.current;\n        if (section && headers.length) {\n            const sectionHeight = section.offsetHeight;\n            headers.forEach((header, index)=>{\n                const startPercentages = [\n                    0.3,\n                    0.5,\n                    0.9\n                ]; // проценты от высоты блока\n                gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.fromTo(header, {\n                    opacity: 0,\n                    y: 100\n                }, {\n                    opacity: 1,\n                    y: 0,\n                    ease: \"none\",\n                    scrollTrigger: {\n                        trigger: section,\n                        start: \"top+=\".concat(sectionHeight * startPercentages[index], \" bottom\"),\n                        end: \"bottom top\",\n                        scrub: true,\n                        pin: true,\n                        pinSpacing: false,\n                        markers: false\n                    }\n                });\n            });\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        ref: sectionRef,\n        className: \"min-h-[920px] sm:min-h-[1453px] md:min-h-[1662px] py-[32px] md:py-[120px]\",\n        style: {\n            background: \"linear-gradient(rgba(0, 0, 0, 0.32),rgba(0, 0, 0, 0.32)), url('images/lobby.jpeg') center center / cover scroll no-repeat\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container h-full\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    ref: (el)=>h2Refs.current[0] = el,\n                    className: \"header_1 md:text-[200px] text-white mb-[12px] sm:mb-[48px]\",\n                    children: \"Трехуровневые\"\n                }, void 0, false, {\n                    fileName: \"/Users/bulatsitdikov/dev/piermont/components/shared/Lobby.tsx\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    ref: (el)=>h2Refs.current[1] = el,\n                    className: \"header_1 md:text-[200px] text-white mb-[12px] sm:mb-[48px]\",\n                    children: \"премиальные\"\n                }, void 0, false, {\n                    fileName: \"/Users/bulatsitdikov/dev/piermont/components/shared/Lobby.tsx\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    ref: (el)=>h2Refs.current[2] = el,\n                    className: \"header_1 md:text-[200px] text-white\",\n                    children: \"лобби\"\n                }, void 0, false, {\n                    fileName: \"/Users/bulatsitdikov/dev/piermont/components/shared/Lobby.tsx\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/bulatsitdikov/dev/piermont/components/shared/Lobby.tsx\",\n            lineNumber: 56,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/bulatsitdikov/dev/piermont/components/shared/Lobby.tsx\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Lobby, \"rS+TFBpAPEcHOwnpJJB5JFkohUU=\");\n_c = Lobby;\nvar _c;\n$RefreshReg$(_c, \"Lobby\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvc2hhcmVkL0xvYmJ5LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUVpRDtBQUNyQjtBQUN1QjtBQUVuREcsc0NBQUlBLENBQUNFLGNBQWMsQ0FBQ0QsNkRBQWFBO0FBSTFCLE1BQU1FLFFBQVEsQ0FBQ0M7O0lBQ3BCLE1BQU1DLGFBQWFOLDZDQUFNQSxDQUFpQjtJQUMxQyxNQUFNTyxTQUFTUCw2Q0FBTUEsQ0FBdUIsRUFBRTtJQUU5Q0QsZ0RBQVNBLENBQUM7UUFDUixNQUFNUyxVQUFVRixXQUFXRyxPQUFPO1FBQ2xDLE1BQU1DLFVBQVVILE9BQU9FLE9BQU87UUFFOUIsSUFBSUQsV0FBV0UsUUFBUUMsTUFBTSxFQUFFO1lBQzdCLE1BQU1DLGdCQUFnQkosUUFBUUssWUFBWTtZQUUxQ0gsUUFBUUksT0FBTyxDQUFDLENBQUNDLFFBQVFDO2dCQUN2QixNQUFNQyxtQkFBbUI7b0JBQUM7b0JBQUs7b0JBQUs7aUJBQUksRUFBRSwyQkFBMkI7Z0JBRXJFaEIsc0NBQUlBLENBQUNpQixNQUFNLENBQ1RILFFBQ0E7b0JBQUVJLFNBQVM7b0JBQUdDLEdBQUc7Z0JBQUksR0FDckI7b0JBQ0VELFNBQVM7b0JBQ1RDLEdBQUc7b0JBQ0hDLE1BQU07b0JBQ05DLGVBQWU7d0JBQ2JDLFNBQVNmO3dCQUNUZ0IsT0FBTyxRQUFnRCxPQUF4Q1osZ0JBQWdCSyxnQkFBZ0IsQ0FBQ0QsTUFBTSxFQUFDO3dCQUN2RFMsS0FBSzt3QkFDTEMsT0FBTzt3QkFDUEMsS0FBSzt3QkFDTEMsWUFBWTt3QkFDWkMsU0FBUztvQkFDWDtnQkFDRjtZQUVKO1FBQ0Y7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ3JCO1FBQ0NzQixLQUFLeEI7UUFDTHlCLFdBQVU7UUFDVkMsT0FBTztZQUNMQyxZQUNFO1FBQ0o7a0JBRUEsNEVBQUNDO1lBQUlILFdBQVU7OzhCQUNiLDhEQUFDSTtvQkFDQ0wsS0FBSyxDQUFDTSxLQUFRN0IsT0FBT0UsT0FBTyxDQUFDLEVBQUUsR0FBRzJCO29CQUNsQ0wsV0FBVTs4QkFDWDs7Ozs7OzhCQUdELDhEQUFDSTtvQkFDQ0wsS0FBSyxDQUFDTSxLQUFRN0IsT0FBT0UsT0FBTyxDQUFDLEVBQUUsR0FBRzJCO29CQUNsQ0wsV0FBVTs4QkFDWDs7Ozs7OzhCQUdELDhEQUFDSTtvQkFDQ0wsS0FBSyxDQUFDTSxLQUFRN0IsT0FBT0UsT0FBTyxDQUFDLEVBQUUsR0FBRzJCO29CQUNsQ0wsV0FBVTs4QkFDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNVCxFQUFFO0dBbkVXM0I7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvTG9iYnkudHN4PzRkYmQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZ3NhcCB9IGZyb20gXCJnc2FwXCI7XG5pbXBvcnQgeyBTY3JvbGxUcmlnZ2VyIH0gZnJvbSBcImdzYXAvU2Nyb2xsVHJpZ2dlclwiO1xuXG5nc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIpO1xuXG50eXBlIFByb3BzID0ge307XG5cbmV4cG9ydCBjb25zdCBMb2JieSA9IChwcm9wczogUHJvcHMpID0+IHtcbiAgY29uc3Qgc2VjdGlvblJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IGgyUmVmcyA9IHVzZVJlZjxIVE1MSGVhZGluZ0VsZW1lbnRbXT4oW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc2VjdGlvbiA9IHNlY3Rpb25SZWYuY3VycmVudDtcbiAgICBjb25zdCBoZWFkZXJzID0gaDJSZWZzLmN1cnJlbnQ7XG5cbiAgICBpZiAoc2VjdGlvbiAmJiBoZWFkZXJzLmxlbmd0aCkge1xuICAgICAgY29uc3Qgc2VjdGlvbkhlaWdodCA9IHNlY3Rpb24ub2Zmc2V0SGVpZ2h0O1xuXG4gICAgICBoZWFkZXJzLmZvckVhY2goKGhlYWRlciwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhcnRQZXJjZW50YWdlcyA9IFswLjMsIDAuNSwgMC45XTsgLy8g0L/RgNC+0YbQtdC90YLRiyDQvtGCINCy0YvRgdC+0YLRiyDQsdC70L7QutCwXG5cbiAgICAgICAgZ3NhcC5mcm9tVG8oXG4gICAgICAgICAgaGVhZGVyLFxuICAgICAgICAgIHsgb3BhY2l0eTogMCwgeTogMTAwIH0sIC8vINCd0LDRh9Cw0LvRjNC90LDRjyDQv9C+0LfQuNGG0LjRj1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICB5OiAwLFxuICAgICAgICAgICAgZWFzZTogXCJub25lXCIsXG4gICAgICAgICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgICAgICAgIHRyaWdnZXI6IHNlY3Rpb24sXG4gICAgICAgICAgICAgIHN0YXJ0OiBgdG9wKz0ke3NlY3Rpb25IZWlnaHQgKiBzdGFydFBlcmNlbnRhZ2VzW2luZGV4XX0gYm90dG9tYCwgLy8g0L3QsNGH0LDQu9C+INCw0L3QuNC80LDRhtC40LhcbiAgICAgICAgICAgICAgZW5kOiBcImJvdHRvbSB0b3BcIiwgLy8g0LrQvtC90LXRhiDQsNC90LjQvNCw0YbQuNC4LCDRh9GC0L7QsdGLINC+0L3QuCDQvNC+0LPQu9C4INC/0YDQvtGB0LrRgNC+0LvQu9C40YLRjNGB0Y8g0YEg0LHQu9C+0LrQvtC8XG4gICAgICAgICAgICAgIHNjcnViOiB0cnVlLFxuICAgICAgICAgICAgICBwaW46IHRydWUsIC8vINCy0YDQtdC80LXQvdC90L4g0YTQuNC60YHQuNGA0YPQtdC8INC30LDQs9C+0LvQvtCy0L7QulxuICAgICAgICAgICAgICBwaW5TcGFjaW5nOiBmYWxzZSwgLy8g0YPQsdC40YDQsNC10Lwg0L7RgtGB0YLRg9C/LCDRh9GC0L7QsdGLINC90LUg0YHQvtC30LTQsNCy0LDRgtGMINC00L7Qv9C+0LvQvdC40YLQtdC70YzQvdC+0LUg0L/RgNC+0YHRgtGA0LDQvdGB0YLQstC+XG4gICAgICAgICAgICAgIG1hcmtlcnM6IGZhbHNlLCAvLyDQvNCw0YDQutC10YDRiyDQtNC70Y8g0L7RgtC70LDQtNC60LggKNC10YHQu9C4INC90YPQttC90L4sINCy0LrQu9GO0YfQuNGC0LUpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb25cbiAgICAgIHJlZj17c2VjdGlvblJlZn1cbiAgICAgIGNsYXNzTmFtZT1cIm1pbi1oLVs5MjBweF0gc206bWluLWgtWzE0NTNweF0gbWQ6bWluLWgtWzE2NjJweF0gcHktWzMycHhdIG1kOnB5LVsxMjBweF1cIlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgYmFja2dyb3VuZDpcbiAgICAgICAgICBcImxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuMzIpLHJnYmEoMCwgMCwgMCwgMC4zMikpLCB1cmwoJ2ltYWdlcy9sb2JieS5qcGVnJykgY2VudGVyIGNlbnRlciAvIGNvdmVyIHNjcm9sbCBuby1yZXBlYXRcIixcbiAgICAgIH19XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgaC1mdWxsXCI+XG4gICAgICAgIDxoMlxuICAgICAgICAgIHJlZj17KGVsKSA9PiAoaDJSZWZzLmN1cnJlbnRbMF0gPSBlbCEpfVxuICAgICAgICAgIGNsYXNzTmFtZT1cImhlYWRlcl8xIG1kOnRleHQtWzIwMHB4XSB0ZXh0LXdoaXRlIG1iLVsxMnB4XSBzbTptYi1bNDhweF1cIlxuICAgICAgICA+XG4gICAgICAgICAg0KLRgNC10YXRg9GA0L7QstC90LXQstGL0LVcbiAgICAgICAgPC9oMj5cbiAgICAgICAgPGgyXG4gICAgICAgICAgcmVmPXsoZWwpID0+IChoMlJlZnMuY3VycmVudFsxXSA9IGVsISl9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiaGVhZGVyXzEgbWQ6dGV4dC1bMjAwcHhdIHRleHQtd2hpdGUgbWItWzEycHhdIHNtOm1iLVs0OHB4XVwiXG4gICAgICAgID5cbiAgICAgICAgICDQv9GA0LXQvNC40LDQu9GM0L3Ri9C1XG4gICAgICAgIDwvaDI+XG4gICAgICAgIDxoMlxuICAgICAgICAgIHJlZj17KGVsKSA9PiAoaDJSZWZzLmN1cnJlbnRbMl0gPSBlbCEpfVxuICAgICAgICAgIGNsYXNzTmFtZT1cImhlYWRlcl8xIG1kOnRleHQtWzIwMHB4XSB0ZXh0LXdoaXRlXCJcbiAgICAgICAgPlxuICAgICAgICAgINC70L7QsdCx0LhcbiAgICAgICAgPC9oMj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJnc2FwIiwiU2Nyb2xsVHJpZ2dlciIsInJlZ2lzdGVyUGx1Z2luIiwiTG9iYnkiLCJwcm9wcyIsInNlY3Rpb25SZWYiLCJoMlJlZnMiLCJzZWN0aW9uIiwiY3VycmVudCIsImhlYWRlcnMiLCJsZW5ndGgiLCJzZWN0aW9uSGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiZm9yRWFjaCIsImhlYWRlciIsImluZGV4Iiwic3RhcnRQZXJjZW50YWdlcyIsImZyb21UbyIsIm9wYWNpdHkiLCJ5IiwiZWFzZSIsInNjcm9sbFRyaWdnZXIiLCJ0cmlnZ2VyIiwic3RhcnQiLCJlbmQiLCJzY3J1YiIsInBpbiIsInBpblNwYWNpbmciLCJtYXJrZXJzIiwicmVmIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwiZGl2IiwiaDIiLCJlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/shared/Lobby.tsx\n"));

/***/ })

});