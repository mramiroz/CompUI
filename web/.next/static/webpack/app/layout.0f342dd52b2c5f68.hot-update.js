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

/***/ "(app-pages-browser)/./node_modules/@compui/comps/styles.css":
/*!***********************************************!*\
  !*** ./node_modules/@compui/comps/styles.css ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"82104dd15c52\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9AY29tcHVpL2NvbXBzL3N0eWxlcy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AY29tcHVpL2NvbXBzL3N0eWxlcy5jc3M/YzRiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjgyMTA0ZGQxNWM1MlwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/@compui/comps/styles.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"47bbc46c0108\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zdHlsZXMvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zdHlsZXMvZ2xvYmFscy5jc3M/OGM0YiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjQ3YmJjNDZjMDEwOFwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/styles/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/categories/Aside.tsx":
/*!*********************************************!*\
  !*** ./src/components/categories/Aside.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Aside; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _actions_Categories_getCategories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/actions/Categories/getCategories */ \"(app-pages-browser)/./src/actions/Categories/getCategories.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nlet cachedCategories = null;\nfunction Aside(param) {\n    let { isAsideOpen } = param;\n    _s();\n    const [categories, setCategories] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [isAccordionOpen, setIsAccordionOpen] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            if (!cachedCategories) {\n                const res = await (0,_actions_Categories_getCategories__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n                cachedCategories = res;\n            }\n            setCategories(cachedCategories);\n        };\n        fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aside\", {\n        className: \"order-first bg-gray-900 w-3/5 md:w-2/5 lg:w-1/5 \".concat(isAsideOpen ? \"open\" : \"\", \" fixed bg-opacity-55 z-40 top-16 sm:top-24 left-0\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            className: \"m-5\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    className: \"mb-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            onClick: ()=>setIsAccordionOpen(!isAccordionOpen),\n                            className: \"p-2 border rounded-lg cursor-pointer bg-slate-700 hover:bg-slate-800\",\n                            children: [\n                                \"Categories \",\n                                isAccordionOpen ? \"▼\" : \"▲\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/mramiroz/Escritorio/CompUI/web/src/components/categories/Aside.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 11\n                        }, this),\n                        isAccordionOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            children: categories.map((category, index)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    href: \"/categories/\".concat(category),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"w-full p-2 m-4 border rounded-lg cursor-pointer bg-slate-700 hover:bg-slate-800\",\n                                        children: category\n                                    }, index, false, {\n                                        fileName: \"/home/mramiroz/Escritorio/CompUI/web/src/components/categories/Aside.tsx\",\n                                        lineNumber: 35,\n                                        columnNumber: 23\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/mramiroz/Escritorio/CompUI/web/src/components/categories/Aside.tsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 21\n                                }, this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/home/mramiroz/Escritorio/CompUI/web/src/components/categories/Aside.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/mramiroz/Escritorio/CompUI/web/src/components/categories/Aside.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    href: \"/component\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"p-2 border rounded-lg cursor-pointer bg-slate-700 hover:bg-slate-800\",\n                        children: \"Components\"\n                    }, void 0, false, {\n                        fileName: \"/home/mramiroz/Escritorio/CompUI/web/src/components/categories/Aside.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/mramiroz/Escritorio/CompUI/web/src/components/categories/Aside.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/mramiroz/Escritorio/CompUI/web/src/components/categories/Aside.tsx\",\n            lineNumber: 25,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/mramiroz/Escritorio/CompUI/web/src/components/categories/Aside.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n_s(Aside, \"BUKUDPxEWB0J1m5lv2WT7OE+EbQ=\");\n_c = Aside;\nvar _c;\n$RefreshReg$(_c, \"Aside\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2NhdGVnb3JpZXMvQXNpZGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQytEO0FBQ2xDO0FBQ2U7QUFFNUMsSUFBSUksbUJBQW9DO0FBRXpCLFNBQVNDLE1BQU0sS0FBdUM7UUFBdkMsRUFBRUMsV0FBVyxFQUEwQixHQUF2Qzs7SUFDNUIsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdOLCtDQUFRQSxDQUFXLEVBQUU7SUFDekQsTUFBTSxDQUFDTyxpQkFBaUJDLG1CQUFtQixHQUFHUiwrQ0FBUUEsQ0FBQztJQUV2REMsZ0RBQVNBLENBQUM7UUFDUixNQUFNUSxZQUFZO1lBQ2hCLElBQUksQ0FBQ1Asa0JBQWtCO2dCQUNyQixNQUFNUSxNQUFNLE1BQU1aLDZFQUFhQTtnQkFDL0JJLG1CQUFtQlE7WUFDckI7WUFDQUosY0FBY0o7UUFDaEI7UUFDQU87SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ0U7UUFBTUMsV0FBVyxtREFBNkUsT0FBMUJSLGNBQWMsU0FBUyxJQUFHO2tCQUM3Riw0RUFBQ1M7WUFBR0QsV0FBVTs7OEJBQ1osOERBQUNFO29CQUFHRixXQUFVOztzQ0FDWiw4REFBQ0c7NEJBQUlDLFNBQVMsSUFBTVIsbUJBQW1CLENBQUNEOzRCQUFrQkssV0FBVTs7Z0NBQXVFO2dDQUM3SEwsa0JBQWtCLE1BQU07Ozs7Ozs7d0JBRXJDQSxpQ0FDQyw4REFBQ007c0NBQ0VSLFdBQVdZLEdBQUcsQ0FBQyxDQUFDQyxVQUFVQztnQ0FDekIscUJBQ0ksOERBQUNwQixpREFBSUE7b0NBQUNxQixNQUFNLGVBQXdCLE9BQVRGOzhDQUN6Qiw0RUFBQ0o7d0NBQWVGLFdBQVU7a0RBQ3JCTTt1Q0FESUM7Ozs7Ozs7Ozs7NEJBS2pCOzs7Ozs7Ozs7Ozs7OEJBSUosOERBQUNwQixpREFBSUE7b0JBQUNxQixNQUFLOzhCQUNiLDRFQUFDTjt3QkFBR0YsV0FBVTtrQ0FBdUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPN0Y7R0E1Q3dCVDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jYXRlZ29yaWVzL0FzaWRlLnRzeD9lY2ZjIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IGdldENhdGVnb3JpZXMgZnJvbSAnQC9hY3Rpb25zL0NhdGVnb3JpZXMvZ2V0Q2F0ZWdvcmllcyc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxubGV0IGNhY2hlZENhdGVnb3JpZXM6IHN0cmluZ1tdIHwgbnVsbCA9IG51bGw7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFzaWRlKHsgaXNBc2lkZU9wZW59OiB7IGlzQXNpZGVPcGVuOiBib29sZWFufSkge1xuICBjb25zdCBbY2F0ZWdvcmllcywgc2V0Q2F0ZWdvcmllc10gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pO1xuICBjb25zdCBbaXNBY2NvcmRpb25PcGVuLCBzZXRJc0FjY29yZGlvbk9wZW5dID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICBpZiAoIWNhY2hlZENhdGVnb3JpZXMpIHtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZ2V0Q2F0ZWdvcmllcygpO1xuICAgICAgICBjYWNoZWRDYXRlZ29yaWVzID0gcmVzO1xuICAgICAgfVxuICAgICAgc2V0Q2F0ZWdvcmllcyhjYWNoZWRDYXRlZ29yaWVzIGFzIHN0cmluZ1tdKTtcbiAgICB9XG4gICAgZmV0Y2hEYXRhKCk7XG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPGFzaWRlIGNsYXNzTmFtZT17YG9yZGVyLWZpcnN0IGJnLWdyYXktOTAwIHctMy81IG1kOnctMi81IGxnOnctMS81ICR7aXNBc2lkZU9wZW4gPyAnb3BlbicgOiAnJ30gZml4ZWQgYmctb3BhY2l0eS01NSB6LTQwIHRvcC0xNiBzbTp0b3AtMjQgbGVmdC0wYH0+XG4gICAgICA8dWwgY2xhc3NOYW1lPSdtLTUnPlxuICAgICAgICA8bGkgY2xhc3NOYW1lPSdtYi0zJz5cbiAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHNldElzQWNjb3JkaW9uT3BlbighaXNBY2NvcmRpb25PcGVuKX0gY2xhc3NOYW1lPSdwLTIgYm9yZGVyIHJvdW5kZWQtbGcgY3Vyc29yLXBvaW50ZXIgYmctc2xhdGUtNzAwIGhvdmVyOmJnLXNsYXRlLTgwMCc+XG4gICAgICAgICAgICBDYXRlZ29yaWVzIHtpc0FjY29yZGlvbk9wZW4gPyAn4pa8JyA6ICfilrInfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtpc0FjY29yZGlvbk9wZW4gJiYgKFxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvY2F0ZWdvcmllcy8ke2NhdGVnb3J5fWB9PlxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9J3ctZnVsbCBwLTIgbS00IGJvcmRlciByb3VuZGVkLWxnIGN1cnNvci1wb2ludGVyIGJnLXNsYXRlLTcwMCBob3ZlcjpiZy1zbGF0ZS04MDAnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcnl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvbGk+XG4gICAgICAgICAgPExpbmsgaHJlZj0nL2NvbXBvbmVudCcgPlxuICAgICAgICA8bGkgY2xhc3NOYW1lPSdwLTIgYm9yZGVyIHJvdW5kZWQtbGcgY3Vyc29yLXBvaW50ZXIgYmctc2xhdGUtNzAwIGhvdmVyOmJnLXNsYXRlLTgwMCc+XG4gICAgICAgICAgICBDb21wb25lbnRzXG4gICAgICAgIDwvbGk+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgPC91bD5cbiAgICA8L2FzaWRlPlxuICApXG59Il0sIm5hbWVzIjpbImdldENhdGVnb3JpZXMiLCJMaW5rIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJjYWNoZWRDYXRlZ29yaWVzIiwiQXNpZGUiLCJpc0FzaWRlT3BlbiIsImNhdGVnb3JpZXMiLCJzZXRDYXRlZ29yaWVzIiwiaXNBY2NvcmRpb25PcGVuIiwic2V0SXNBY2NvcmRpb25PcGVuIiwiZmV0Y2hEYXRhIiwicmVzIiwiYXNpZGUiLCJjbGFzc05hbWUiLCJ1bCIsImxpIiwiZGl2Iiwib25DbGljayIsIm1hcCIsImNhdGVnb3J5IiwiaW5kZXgiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/categories/Aside.tsx\n"));

/***/ })

});