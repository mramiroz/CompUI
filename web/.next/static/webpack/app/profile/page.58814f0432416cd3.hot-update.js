"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/profile/page",{

/***/ "(app-pages-browser)/./node_modules/@compui/comps/styles.css":
/*!***********************************************!*\
  !*** ./node_modules/@compui/comps/styles.css ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"13552262937a\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9AY29tcHVpL2NvbXBzL3N0eWxlcy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AY29tcHVpL2NvbXBzL3N0eWxlcy5jc3M/YzRiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjEzNTUyMjYyOTM3YVwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/@compui/comps/styles.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/component/Card.tsx":
/*!*******************************************!*\
  !*** ./src/components/component/Card.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _components_component_Like__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/component/Like */ \"(app-pages-browser)/./src/components/component/Like.tsx\");\n/* harmony import */ var _Copy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Copy */ \"(app-pages-browser)/./src/components/component/Copy.tsx\");\n/* harmony import */ var _compui_comps__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @compui/comps */ \"(app-pages-browser)/./node_modules/@compui/comps/src/index.js\");\n\n\n\n\n\n\nconst Card = (param)=>{\n    let { id, code, title, description, category, props, likes } = param;\n    const Component = _compui_comps__WEBPACK_IMPORTED_MODULE_5__[title];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"m-10 rounded-lg shadow-lg\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center h-\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...props\n                }, void 0, false, {\n                    fileName: \"/home/mramiroz/Escritorio/CompUI/web/src/components/component/Card.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/mramiroz/Escritorio/CompUI/web/src/components/component/Card.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-between px-6 py-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        href: \"/component/\".concat(id),\n                        className: \"inline-block p-3 mr-2 text-sm font-semibold text-gray-700 bg-blue-500 rounded-full\",\n                        children: \"Details\"\n                    }, void 0, false, {\n                        fileName: \"/home/mramiroz/Escritorio/CompUI/web/src/components/component/Card.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Copy__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        code: code,\n                        showCode: false\n                    }, void 0, false, {\n                        fileName: \"/home/mramiroz/Escritorio/CompUI/web/src/components/component/Card.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/mramiroz/Escritorio/CompUI/web/src/components/component/Card.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between px-6 py-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"mb-2 text-xl font-bold\",\n                                children: title\n                            }, void 0, false, {\n                                fileName: \"/home/mramiroz/Escritorio/CompUI/web/src/components/component/Card.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-base text-gray-700\",\n                                children: description\n                            }, void 0, false, {\n                                fileName: \"/home/mramiroz/Escritorio/CompUI/web/src/components/component/Card.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/mramiroz/Escritorio/CompUI/web/src/components/component/Card.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center mt-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_component_Like__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            compId: id.toString()\n                        }, void 0, false, {\n                            fileName: \"/home/mramiroz/Escritorio/CompUI/web/src/components/component/Card.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 10\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/mramiroz/Escritorio/CompUI/web/src/components/component/Card.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/mramiroz/Escritorio/CompUI/web/src/components/component/Card.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/mramiroz/Escritorio/CompUI/web/src/components/component/Card.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\nvar _c;\n$RefreshReg$(_c, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2NvbXBvbmVudC9DYXJkLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDMEI7QUFDRztBQUNrQjtBQUNyQjtBQUNZO0FBWXRDLE1BQU1LLE9BQU87UUFBQyxFQUFFQyxFQUFFLEVBQUdDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxXQUFXLEVBQUVDLFFBQVEsRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQVk7SUFDL0UsTUFBTUMsWUFBWVQsMENBQUksQ0FBQ0ksTUFBTTtJQUM3QixxQkFDRSw4REFBQ007UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRjtvQkFBVyxHQUFHRixLQUFLOzs7Ozs7Ozs7OzswQkFFdEIsOERBQUNHO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ2QsaURBQUlBO3dCQUFDZSxNQUFNLGNBQWlCLE9BQUhWO3dCQUFNUyxXQUFVO2tDQUFxRjs7Ozs7O2tDQUcvSCw4REFBQ1osNkNBQUlBO3dCQUFDSSxNQUFNQTt3QkFBTVUsVUFBVTs7Ozs7Ozs7Ozs7OzBCQUU5Qiw4REFBQ0g7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRDs7MENBQ0MsOERBQUNJO2dDQUFHSCxXQUFVOzBDQUEwQlA7Ozs7OzswQ0FDeEMsOERBQUNXO2dDQUFFSixXQUFVOzBDQUEyQk47Ozs7Ozs7Ozs7OztrQ0FFMUMsOERBQUNLO3dCQUFJQyxXQUFVO2tDQUNkLDRFQUFDYixrRUFBSUE7NEJBQUNrQixRQUFRZCxHQUFHZSxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtsQztLQXhCTWhCO0FBMEJOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2NvbXBvbmVudC9DYXJkLnRzeD9lZmQyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9iamVjdElkIH0gZnJvbSAnbW9uZ29kYic7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBMaWtlIGZyb20gJ0AvY29tcG9uZW50cy9jb21wb25lbnQvTGlrZSc7XG5pbXBvcnQgQ29weSBmcm9tICcuL0NvcHknO1xuaW1wb3J0ICogYXMgQ29tcCBmcm9tICdAY29tcHVpL2NvbXBzJztcblxuaW50ZXJmYWNlIENhcmRQcm9wcyB7XG4gIGlkOiBzdHJpbmc7XG4gIGNvZGU6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZzsgIFxuICBjYXRlZ29yeTogc3RyaW5nO1xuICBwcm9wczogYW55O1xuICBsaWtlczogbnVtYmVyO1xufVxuXG5jb25zdCBDYXJkID0gKHsgaWQsICBjb2RlLCB0aXRsZSwgZGVzY3JpcHRpb24sIGNhdGVnb3J5LCBwcm9wcywgbGlrZXN9OiBDYXJkUHJvcHMpID0+IHtcbiAgY29uc3QgQ29tcG9uZW50ID0gQ29tcFt0aXRsZV07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtLTEwIHJvdW5kZWQtbGcgc2hhZG93LWxnXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWNlbnRlciBoLSc+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnByb3BzfS8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHB4LTYgcHktNFwiPlxuICAgICAgICA8TGluayBocmVmPXtgL2NvbXBvbmVudC8ke2lkfWB9IGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBwLTMgbXItMiB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTcwMCBiZy1ibHVlLTUwMCByb3VuZGVkLWZ1bGxcIj5cbiAgICAgICAgICBEZXRhaWxzXG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPENvcHkgY29kZT17Y29kZX0gc2hvd0NvZGU9e2ZhbHNlfS8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gcHgtNiBweS00XCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1iLTIgdGV4dC14bCBmb250LWJvbGRcIj57dGl0bGV9PC9oMz5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgdGV4dC1ncmF5LTcwMFwiPntkZXNjcmlwdGlvbn08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIG10LTRcIj5cbiAgICAgICAgIDxMaWtlIGNvbXBJZD17aWQudG9TdHJpbmcoKX0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FyZDsiXSwibmFtZXMiOlsiUmVhY3QiLCJMaW5rIiwiTGlrZSIsIkNvcHkiLCJDb21wIiwiQ2FyZCIsImlkIiwiY29kZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJjYXRlZ29yeSIsInByb3BzIiwibGlrZXMiLCJDb21wb25lbnQiLCJkaXYiLCJjbGFzc05hbWUiLCJocmVmIiwic2hvd0NvZGUiLCJoMyIsInAiLCJjb21wSWQiLCJ0b1N0cmluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/component/Card.tsx\n"));

/***/ })

});