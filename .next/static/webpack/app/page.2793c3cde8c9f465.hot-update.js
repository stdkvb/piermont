"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/shared/Lobby.tsx":
/*!*************************************!*\
  !*** ./components/shared/Lobby.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Lobby: function() { return /* binding */ Lobby; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ \"(app-pages-browser)/./node_modules/gsap/index.js\");\n/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap/ScrollTrigger */ \"(app-pages-browser)/./node_modules/gsap/ScrollTrigger.js\");\n/* __next_internal_client_entry_do_not_use__ Lobby auto */ \nvar _s = $RefreshSig$();\n\n\n\ngsap__WEBPACK_IMPORTED_MODULE_2__.gsap.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__.ScrollTrigger);\nconst Lobby = (props)=>{\n    _s();\n    const sectionRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const h2Refs = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)([]);\n    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const section = sectionRef.current;\n        const headers = h2Refs.current;\n        const container = containerRef.current;\n        if (section && headers.length && container) {\n            const sectionHeight = section.offsetHeight;\n            // Устанавливаем фиксированное позиционирование для контейнера в начале\n            gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.set(container, {\n                position: \"fixed\",\n                top: \"48px\"\n            });\n            // Создаем анимацию для каждого заголовка\n            headers.forEach((header, index)=>{\n                const startPercentages = [\n                    0.2,\n                    0.5,\n                    0.9\n                ]; // Проценты от высоты блока\n                gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.fromTo(header, {\n                    opacity: 0,\n                    y: 50\n                }, {\n                    opacity: 1,\n                    y: 0,\n                    ease: \"none\",\n                    scrollTrigger: {\n                        trigger: section,\n                        start: \"top+=\".concat(sectionHeight * startPercentages[index], \" bottom\"),\n                        scrub: true,\n                        markers: false,\n                        onEnter: ()=>{\n                            gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.set(container, {\n                                position: \"fixed\",\n                                top: \"48px\"\n                            }); // Устанавливаем фиксированное позиционирование\n                        },\n                        onLeaveBack: ()=>{\n                            gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.set(container, {\n                                position: \"fixed\",\n                                top: \"48px\"\n                            }); // Устанавливаем фиксированное позиционирование при прокрутке назад\n                        }\n                    }\n                });\n            });\n            // Создаем триггер, чтобы отслеживать окончание анимации всех заголовков\n            const allAnimationComplete = gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.timeline({\n                scrollTrigger: {\n                    trigger: section,\n                    start: \"top+=\".concat(sectionHeight * 0.9, \" bottom\"),\n                    onEnterBack: ()=>{\n                        gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.set(container, {\n                            position: \"fixed\",\n                            top: \"48px\"\n                        }); // Устанавливаем фиксированное позиционирование при прокрутке назад\n                    },\n                    onEnter: ()=>{\n                        gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.to(container, {\n                            position: \"relative\",\n                            duration: 0\n                        }); // Меняем на относительное позиционирование\n                    }\n                }\n            });\n            // Объединяем все анимации в один timeline\n            headers.forEach((header, index)=>{\n                allAnimationComplete.add(gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.fromTo(header, {\n                    opacity: 0,\n                    y: 50\n                }, {\n                    opacity: 1,\n                    y: 0,\n                    duration: 1,\n                    ease: \"none\"\n                }), 0);\n            });\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        ref: sectionRef,\n        className: \"min-h-[920px] sm:min-h-[1453px] md:min-h-[1662px] py-[32px] md:py-[120px] relative\",\n        style: {\n            background: \"linear-gradient(rgba(0, 0, 0, 0.32), rgba(0, 0, 0, 0.32)), url('images/lobby.jpeg') center center / cover scroll no-repeat\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            ref: containerRef,\n            className: \"container flex flex-col justify-end\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    ref: (el)=>h2Refs.current[0] = el,\n                    className: \"header_1 md:text-[200px] text-white mb-[12px] sm:mb-[48px]\",\n                    children: \"Трехуровневые\"\n                }, void 0, false, {\n                    fileName: \"/Users/bulatsitdikov/dev/piermont/components/shared/Lobby.tsx\",\n                    lineNumber: 97,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    ref: (el)=>h2Refs.current[1] = el,\n                    className: \"header_1 md:text-[200px] text-white mb-[12px] sm:mb-[48px]\",\n                    children: \"премиальные\"\n                }, void 0, false, {\n                    fileName: \"/Users/bulatsitdikov/dev/piermont/components/shared/Lobby.tsx\",\n                    lineNumber: 103,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    ref: (el)=>h2Refs.current[2] = el,\n                    className: \"header_1 md:text-[200px] text-white\",\n                    children: \"лобби\"\n                }, void 0, false, {\n                    fileName: \"/Users/bulatsitdikov/dev/piermont/components/shared/Lobby.tsx\",\n                    lineNumber: 109,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/bulatsitdikov/dev/piermont/components/shared/Lobby.tsx\",\n            lineNumber: 96,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/bulatsitdikov/dev/piermont/components/shared/Lobby.tsx\",\n        lineNumber: 88,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Lobby, \"gp4lLGTSqQGp7vE/Uh25CT9DPS0=\");\n_c = Lobby;\nvar _c;\n$RefreshReg$(_c, \"Lobby\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvc2hhcmVkL0xvYmJ5LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUVpRDtBQUNyQjtBQUN1QjtBQUVuREcsc0NBQUlBLENBQUNFLGNBQWMsQ0FBQ0QsNkRBQWFBO0FBSTFCLE1BQU1FLFFBQVEsQ0FBQ0M7O0lBQ3BCLE1BQU1DLGFBQWFOLDZDQUFNQSxDQUFpQjtJQUMxQyxNQUFNTyxTQUFTUCw2Q0FBTUEsQ0FBdUIsRUFBRTtJQUM5QyxNQUFNUSxlQUFlUiw2Q0FBTUEsQ0FBaUI7SUFFNUNELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVUsVUFBVUgsV0FBV0ksT0FBTztRQUNsQyxNQUFNQyxVQUFVSixPQUFPRyxPQUFPO1FBQzlCLE1BQU1FLFlBQVlKLGFBQWFFLE9BQU87UUFFdEMsSUFBSUQsV0FBV0UsUUFBUUUsTUFBTSxJQUFJRCxXQUFXO1lBQzFDLE1BQU1FLGdCQUFnQkwsUUFBUU0sWUFBWTtZQUUxQyx1RUFBdUU7WUFDdkVkLHNDQUFJQSxDQUFDZSxHQUFHLENBQUNKLFdBQVc7Z0JBQUVLLFVBQVU7Z0JBQVNDLEtBQUs7WUFBTztZQUVyRCx5Q0FBeUM7WUFDekNQLFFBQVFRLE9BQU8sQ0FBQyxDQUFDQyxRQUFRQztnQkFDdkIsTUFBTUMsbUJBQW1CO29CQUFDO29CQUFLO29CQUFLO2lCQUFJLEVBQUUsMkJBQTJCO2dCQUVyRXJCLHNDQUFJQSxDQUFDc0IsTUFBTSxDQUNUSCxRQUNBO29CQUFFSSxTQUFTO29CQUFHQyxHQUFHO2dCQUFHLEdBQ3BCO29CQUNFRCxTQUFTO29CQUNUQyxHQUFHO29CQUNIQyxNQUFNO29CQUNOQyxlQUFlO3dCQUNiQyxTQUFTbkI7d0JBQ1RvQixPQUFPLFFBQWdELE9BQXhDZixnQkFBZ0JRLGdCQUFnQixDQUFDRCxNQUFNLEVBQUM7d0JBQ3ZEUyxPQUFPO3dCQUNQQyxTQUFTO3dCQUNUQyxTQUFTOzRCQUNQL0Isc0NBQUlBLENBQUNlLEdBQUcsQ0FBQ0osV0FBVztnQ0FBRUssVUFBVTtnQ0FBU0MsS0FBSzs0QkFBTyxJQUFJLCtDQUErQzt3QkFDMUc7d0JBQ0FlLGFBQWE7NEJBQ1hoQyxzQ0FBSUEsQ0FBQ2UsR0FBRyxDQUFDSixXQUFXO2dDQUFFSyxVQUFVO2dDQUFTQyxLQUFLOzRCQUFPLElBQUksbUVBQW1FO3dCQUM5SDtvQkFDRjtnQkFDRjtZQUVKO1lBRUEsd0VBQXdFO1lBQ3hFLE1BQU1nQix1QkFBdUJqQyxzQ0FBSUEsQ0FBQ2tDLFFBQVEsQ0FBQztnQkFDekNSLGVBQWU7b0JBQ2JDLFNBQVNuQjtvQkFDVG9CLE9BQU8sUUFBNEIsT0FBcEJmLGdCQUFnQixLQUFJO29CQUNuQ3NCLGFBQWE7d0JBQ1huQyxzQ0FBSUEsQ0FBQ2UsR0FBRyxDQUFDSixXQUFXOzRCQUFFSyxVQUFVOzRCQUFTQyxLQUFLO3dCQUFPLElBQUksbUVBQW1FO29CQUM5SDtvQkFDQWMsU0FBUzt3QkFDUC9CLHNDQUFJQSxDQUFDb0MsRUFBRSxDQUFDekIsV0FBVzs0QkFBRUssVUFBVTs0QkFBWXFCLFVBQVU7d0JBQUUsSUFBSSwyQ0FBMkM7b0JBQ3hHO2dCQUNGO1lBQ0Y7WUFFQSwwQ0FBMEM7WUFDMUMzQixRQUFRUSxPQUFPLENBQUMsQ0FBQ0MsUUFBUUM7Z0JBQ3ZCYSxxQkFBcUJLLEdBQUcsQ0FDdEJ0QyxzQ0FBSUEsQ0FBQ3NCLE1BQU0sQ0FDVEgsUUFDQTtvQkFBRUksU0FBUztvQkFBR0MsR0FBRztnQkFBRyxHQUNwQjtvQkFDRUQsU0FBUztvQkFDVEMsR0FBRztvQkFDSGEsVUFBVTtvQkFDVlosTUFBTTtnQkFDUixJQUVGO1lBRUo7UUFDRjtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDakI7UUFDQytCLEtBQUtsQztRQUNMbUMsV0FBVTtRQUNWQyxPQUFPO1lBQ0xDLFlBQ0U7UUFDSjtrQkFFQSw0RUFBQ0M7WUFBSUosS0FBS2hDO1lBQWNpQyxXQUFVOzs4QkFDaEMsOERBQUNJO29CQUNDTCxLQUFLLENBQUNNLEtBQVF2QyxPQUFPRyxPQUFPLENBQUMsRUFBRSxHQUFHb0M7b0JBQ2xDTCxXQUFVOzhCQUNYOzs7Ozs7OEJBR0QsOERBQUNJO29CQUNDTCxLQUFLLENBQUNNLEtBQVF2QyxPQUFPRyxPQUFPLENBQUMsRUFBRSxHQUFHb0M7b0JBQ2xDTCxXQUFVOzhCQUNYOzs7Ozs7OEJBR0QsOERBQUNJO29CQUNDTCxLQUFLLENBQUNNLEtBQVF2QyxPQUFPRyxPQUFPLENBQUMsRUFBRSxHQUFHb0M7b0JBQ2xDTCxXQUFVOzhCQUNYOzs7Ozs7Ozs7Ozs7Ozs7OztBQU1ULEVBQUU7R0EzR1dyQztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3NoYXJlZC9Mb2JieS50c3g/NGRiZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBnc2FwIH0gZnJvbSBcImdzYXBcIjtcbmltcG9ydCB7IFNjcm9sbFRyaWdnZXIgfSBmcm9tIFwiZ3NhcC9TY3JvbGxUcmlnZ2VyXCI7XG5cbmdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlcik7XG5cbnR5cGUgUHJvcHMgPSB7fTtcblxuZXhwb3J0IGNvbnN0IExvYmJ5ID0gKHByb3BzOiBQcm9wcykgPT4ge1xuICBjb25zdCBzZWN0aW9uUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcbiAgY29uc3QgaDJSZWZzID0gdXNlUmVmPEhUTUxIZWFkaW5nRWxlbWVudFtdPihbXSk7XG4gIGNvbnN0IGNvbnRhaW5lclJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzZWN0aW9uID0gc2VjdGlvblJlZi5jdXJyZW50O1xuICAgIGNvbnN0IGhlYWRlcnMgPSBoMlJlZnMuY3VycmVudDtcbiAgICBjb25zdCBjb250YWluZXIgPSBjb250YWluZXJSZWYuY3VycmVudDtcblxuICAgIGlmIChzZWN0aW9uICYmIGhlYWRlcnMubGVuZ3RoICYmIGNvbnRhaW5lcikge1xuICAgICAgY29uc3Qgc2VjdGlvbkhlaWdodCA9IHNlY3Rpb24ub2Zmc2V0SGVpZ2h0O1xuXG4gICAgICAvLyDQo9GB0YLQsNC90LDQstC70LjQstCw0LXQvCDRhNC40LrRgdC40YDQvtCy0LDQvdC90L7QtSDQv9C+0LfQuNGG0LjQvtC90LjRgNC+0LLQsNC90LjQtSDQtNC70Y8g0LrQvtC90YLQtdC50L3QtdGA0LAg0LIg0L3QsNGH0LDQu9C1XG4gICAgICBnc2FwLnNldChjb250YWluZXIsIHsgcG9zaXRpb246IFwiZml4ZWRcIiwgdG9wOiBcIjQ4cHhcIiB9KTtcblxuICAgICAgLy8g0KHQvtC30LTQsNC10Lwg0LDQvdC40LzQsNGG0LjRjiDQtNC70Y8g0LrQsNC20LTQvtCz0L4g0LfQsNCz0L7Qu9C+0LLQutCwXG4gICAgICBoZWFkZXJzLmZvckVhY2goKGhlYWRlciwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhcnRQZXJjZW50YWdlcyA9IFswLjIsIDAuNSwgMC45XTsgLy8g0J/RgNC+0YbQtdC90YLRiyDQvtGCINCy0YvRgdC+0YLRiyDQsdC70L7QutCwXG5cbiAgICAgICAgZ3NhcC5mcm9tVG8oXG4gICAgICAgICAgaGVhZGVyLFxuICAgICAgICAgIHsgb3BhY2l0eTogMCwgeTogNTAgfSwgLy8g0J3QsNGH0LDQu9GM0L3QsNGPINC/0L7Qt9C40YbQuNGPINGBINC70ZHQs9C60LjQvCDRgdC80LXRidC10L3QuNC10Lwg0L/QviBZXG4gICAgICAgICAge1xuICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICBlYXNlOiBcIm5vbmVcIixcbiAgICAgICAgICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgICAgICAgdHJpZ2dlcjogc2VjdGlvbixcbiAgICAgICAgICAgICAgc3RhcnQ6IGB0b3ArPSR7c2VjdGlvbkhlaWdodCAqIHN0YXJ0UGVyY2VudGFnZXNbaW5kZXhdfSBib3R0b21gLCAvLyDQndCw0YfQsNC70L4g0LDQvdC40LzQsNGG0LjQuFxuICAgICAgICAgICAgICBzY3J1YjogdHJ1ZSxcbiAgICAgICAgICAgICAgbWFya2VyczogZmFsc2UsIC8vINCc0LDRgNC60LXRgNGLINC00LvRjyDQvtGC0LvQsNC00LrQuCAo0LXRgdC70Lgg0L3Rg9C20L3QvilcbiAgICAgICAgICAgICAgb25FbnRlcjogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGdzYXAuc2V0KGNvbnRhaW5lciwgeyBwb3NpdGlvbjogXCJmaXhlZFwiLCB0b3A6IFwiNDhweFwiIH0pOyAvLyDQo9GB0YLQsNC90LDQstC70LjQstCw0LXQvCDRhNC40LrRgdC40YDQvtCy0LDQvdC90L7QtSDQv9C+0LfQuNGG0LjQvtC90LjRgNC+0LLQsNC90LjQtVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBvbkxlYXZlQmFjazogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGdzYXAuc2V0KGNvbnRhaW5lciwgeyBwb3NpdGlvbjogXCJmaXhlZFwiLCB0b3A6IFwiNDhweFwiIH0pOyAvLyDQo9GB0YLQsNC90LDQstC70LjQstCw0LXQvCDRhNC40LrRgdC40YDQvtCy0LDQvdC90L7QtSDQv9C+0LfQuNGG0LjQvtC90LjRgNC+0LLQsNC90LjQtSDQv9GA0Lgg0L/RgNC+0LrRgNGD0YLQutC1INC90LDQt9Cw0LRcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgfSk7XG5cbiAgICAgIC8vINCh0L7Qt9C00LDQtdC8INGC0YDQuNCz0LPQtdGALCDRh9GC0L7QsdGLINC+0YLRgdC70LXQttC40LLQsNGC0Ywg0L7QutC+0L3Rh9Cw0L3QuNC1INCw0L3QuNC80LDRhtC40Lgg0LLRgdC10YUg0LfQsNCz0L7Qu9C+0LLQutC+0LJcbiAgICAgIGNvbnN0IGFsbEFuaW1hdGlvbkNvbXBsZXRlID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgICB0cmlnZ2VyOiBzZWN0aW9uLFxuICAgICAgICAgIHN0YXJ0OiBgdG9wKz0ke3NlY3Rpb25IZWlnaHQgKiAwLjl9IGJvdHRvbWAsIC8vINCe0L/RgNC10LTQtdC70Y/QtdC8LCDQutC+0LPQtNCwINC+0LrQvtC90YfQsNC90LjQtSDQsNC90LjQvNCw0YbQuNC4INC00L7Qu9C20L3QviDQv9GA0L7QuNC30L7QudGC0LhcbiAgICAgICAgICBvbkVudGVyQmFjazogKCkgPT4ge1xuICAgICAgICAgICAgZ3NhcC5zZXQoY29udGFpbmVyLCB7IHBvc2l0aW9uOiBcImZpeGVkXCIsIHRvcDogXCI0OHB4XCIgfSk7IC8vINCj0YHRgtCw0L3QsNCy0LvQuNCy0LDQtdC8INGE0LjQutGB0LjRgNC+0LLQsNC90L3QvtC1INC/0L7Qt9C40YbQuNC+0L3QuNGA0L7QstCw0L3QuNC1INC/0YDQuCDQv9GA0L7QutGA0YPRgtC60LUg0L3QsNC30LDQtFxuICAgICAgICAgIH0sXG4gICAgICAgICAgb25FbnRlcjogKCkgPT4ge1xuICAgICAgICAgICAgZ3NhcC50byhjb250YWluZXIsIHsgcG9zaXRpb246IFwicmVsYXRpdmVcIiwgZHVyYXRpb246IDAgfSk7IC8vINCc0LXQvdGP0LXQvCDQvdCwINC+0YLQvdC+0YHQuNGC0LXQu9GM0L3QvtC1INC/0L7Qt9C40YbQuNC+0L3QuNGA0L7QstCw0L3QuNC1XG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgICAvLyDQntCx0YrQtdC00LjQvdGP0LXQvCDQstGB0LUg0LDQvdC40LzQsNGG0LjQuCDQsiDQvtC00LjQvSB0aW1lbGluZVxuICAgICAgaGVhZGVycy5mb3JFYWNoKChoZWFkZXIsIGluZGV4KSA9PiB7XG4gICAgICAgIGFsbEFuaW1hdGlvbkNvbXBsZXRlLmFkZChcbiAgICAgICAgICBnc2FwLmZyb21UbyhcbiAgICAgICAgICAgIGhlYWRlcixcbiAgICAgICAgICAgIHsgb3BhY2l0eTogMCwgeTogNTAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgICAgeTogMCxcbiAgICAgICAgICAgICAgZHVyYXRpb246IDEsIC8vINCU0LvQuNGC0LXQu9GM0L3QvtGB0YLRjCDQsNC90LjQvNCw0YbQuNC4XG4gICAgICAgICAgICAgIGVhc2U6IFwibm9uZVwiLFxuICAgICAgICAgICAgfVxuICAgICAgICAgICksXG4gICAgICAgICAgMFxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvblxuICAgICAgcmVmPXtzZWN0aW9uUmVmfVxuICAgICAgY2xhc3NOYW1lPVwibWluLWgtWzkyMHB4XSBzbTptaW4taC1bMTQ1M3B4XSBtZDptaW4taC1bMTY2MnB4XSBweS1bMzJweF0gbWQ6cHktWzEyMHB4XSByZWxhdGl2ZVwiXG4gICAgICBzdHlsZT17e1xuICAgICAgICBiYWNrZ3JvdW5kOlxuICAgICAgICAgIFwibGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC4zMiksIHJnYmEoMCwgMCwgMCwgMC4zMikpLCB1cmwoJ2ltYWdlcy9sb2JieS5qcGVnJykgY2VudGVyIGNlbnRlciAvIGNvdmVyIHNjcm9sbCBuby1yZXBlYXRcIixcbiAgICAgIH19XG4gICAgPlxuICAgICAgPGRpdiByZWY9e2NvbnRhaW5lclJlZn0gY2xhc3NOYW1lPVwiY29udGFpbmVyIGZsZXggZmxleC1jb2wganVzdGlmeS1lbmRcIj5cbiAgICAgICAgPGgyXG4gICAgICAgICAgcmVmPXsoZWwpID0+IChoMlJlZnMuY3VycmVudFswXSA9IGVsISl9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiaGVhZGVyXzEgbWQ6dGV4dC1bMjAwcHhdIHRleHQtd2hpdGUgbWItWzEycHhdIHNtOm1iLVs0OHB4XVwiXG4gICAgICAgID5cbiAgICAgICAgICDQotGA0LXRhdGD0YDQvtCy0L3QtdCy0YvQtVxuICAgICAgICA8L2gyPlxuICAgICAgICA8aDJcbiAgICAgICAgICByZWY9eyhlbCkgPT4gKGgyUmVmcy5jdXJyZW50WzFdID0gZWwhKX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJoZWFkZXJfMSBtZDp0ZXh0LVsyMDBweF0gdGV4dC13aGl0ZSBtYi1bMTJweF0gc206bWItWzQ4cHhdXCJcbiAgICAgICAgPlxuICAgICAgICAgINC/0YDQtdC80LjQsNC70YzQvdGL0LVcbiAgICAgICAgPC9oMj5cbiAgICAgICAgPGgyXG4gICAgICAgICAgcmVmPXsoZWwpID0+IChoMlJlZnMuY3VycmVudFsyXSA9IGVsISl9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiaGVhZGVyXzEgbWQ6dGV4dC1bMjAwcHhdIHRleHQtd2hpdGVcIlxuICAgICAgICA+XG4gICAgICAgICAg0LvQvtCx0LHQuFxuICAgICAgICA8L2gyPlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsImdzYXAiLCJTY3JvbGxUcmlnZ2VyIiwicmVnaXN0ZXJQbHVnaW4iLCJMb2JieSIsInByb3BzIiwic2VjdGlvblJlZiIsImgyUmVmcyIsImNvbnRhaW5lclJlZiIsInNlY3Rpb24iLCJjdXJyZW50IiwiaGVhZGVycyIsImNvbnRhaW5lciIsImxlbmd0aCIsInNlY3Rpb25IZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJzZXQiLCJwb3NpdGlvbiIsInRvcCIsImZvckVhY2giLCJoZWFkZXIiLCJpbmRleCIsInN0YXJ0UGVyY2VudGFnZXMiLCJmcm9tVG8iLCJvcGFjaXR5IiwieSIsImVhc2UiLCJzY3JvbGxUcmlnZ2VyIiwidHJpZ2dlciIsInN0YXJ0Iiwic2NydWIiLCJtYXJrZXJzIiwib25FbnRlciIsIm9uTGVhdmVCYWNrIiwiYWxsQW5pbWF0aW9uQ29tcGxldGUiLCJ0aW1lbGluZSIsIm9uRW50ZXJCYWNrIiwidG8iLCJkdXJhdGlvbiIsImFkZCIsInJlZiIsImNsYXNzTmFtZSIsInN0eWxlIiwiYmFja2dyb3VuZCIsImRpdiIsImgyIiwiZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/shared/Lobby.tsx\n"));

/***/ })

});