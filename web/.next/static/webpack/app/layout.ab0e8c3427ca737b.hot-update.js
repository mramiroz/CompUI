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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"3e88ce2a8638\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9AY29tcHVpL2NvbXBzL3N0eWxlcy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AY29tcHVpL2NvbXBzL3N0eWxlcy5jc3M/YzRiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjNlODhjZTJhODYzOFwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/@compui/comps/styles.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"14093f706598\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zdHlsZXMvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zdHlsZXMvZ2xvYmFscy5jc3M/OGM0YiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjE0MDkzZjcwNjU5OFwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/styles/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/categories/Aside.tsx":
/*!*********************************************!*\
  !*** ./src/components/categories/Aside.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Aside; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Aside(param) {\n    let { isAsideOpen } = param;\n    _s();\n    const [categories, setCategories] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        fetch(\"/api/categories\").then((res)=>res.json()).then((data)=>setCategories(data)).catch((err)=>console.error(err));\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aside\", {\n        className: \"order-first bg-gray-900 w-3/5 md:w-1/5 h-full \".concat(isAsideOpen ? \"open\" : \"\", \" fixed z-20 top-24 left-0\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            className: \"m-5\",\n            children: categories.map((category, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    href: \"/categories/\".concat(category),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"p-2 my-2 bg-gray-700 rounded-md hover:bg-gray-600\",\n                        children: category\n                    }, void 0, false, {\n                        fileName: \"/home/mramiroz/Escritorio/CompUI/web/src/components/categories/Aside.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 15\n                    }, this)\n                }, index, false, {\n                    fileName: \"/home/mramiroz/Escritorio/CompUI/web/src/components/categories/Aside.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 13\n                }, this))\n        }, void 0, false, {\n            fileName: \"/home/mramiroz/Escritorio/CompUI/web/src/components/categories/Aside.tsx\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/mramiroz/Escritorio/CompUI/web/src/components/categories/Aside.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n_s(Aside, \"+ijgB8ROEl0Dkz53OTIi8GynN6s=\");\n_c = Aside;\nvar _c;\n$RefreshReg$(_c, \"Aside\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2NhdGVnb3JpZXMvQXNpZGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDNkI7QUFDZTtBQUU3QixTQUFTRyxNQUFNLEtBQXlDO1FBQXpDLEVBQUVDLFdBQVcsRUFBNEIsR0FBekM7O0lBQzVCLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHTCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQy9DQyxnREFBU0EsQ0FBQztRQUNSSyxNQUFNLG1CQUNIQyxJQUFJLENBQUNDLENBQUFBLE1BQU9BLElBQUlDLElBQUksSUFDcEJGLElBQUksQ0FBQ0csQ0FBQUEsT0FBUUwsY0FBY0ssT0FDM0JDLEtBQUssQ0FBQ0MsQ0FBQUEsTUFBT0MsUUFBUUMsS0FBSyxDQUFDRjtJQUNoQyxHQUFHLEVBQUU7SUFDTCxxQkFDRSw4REFBQ0c7UUFBTUMsV0FBVyxpREFBMkUsT0FBMUJiLGNBQWMsU0FBUyxJQUFHO2tCQUMzRiw0RUFBQ2M7WUFBR0QsV0FBVTtzQkFDWFosV0FBV2MsR0FBRyxDQUFDLENBQUNDLFVBQVVDLHNCQUN2Qiw4REFBQ3JCLGlEQUFJQTtvQkFBYXNCLE1BQU0sZUFBd0IsT0FBVEY7OEJBQ3JDLDRFQUFDRzt3QkFBR04sV0FBVTtrQ0FBcURHOzs7Ozs7bUJBRDFEQzs7Ozs7Ozs7Ozs7Ozs7O0FBT3ZCO0dBbkJ3QmxCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2NhdGVnb3JpZXMvQXNpZGUudHN4P2VjZmMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXNpZGUoeyBpc0FzaWRlT3BlbiB9OiB7IGlzQXNpZGVPcGVuOiBib29sZWFuIH0pIHtcbiAgY29uc3QgW2NhdGVnb3JpZXMsIHNldENhdGVnb3JpZXNdID0gdXNlU3RhdGUoW10pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoKCcvYXBpL2NhdGVnb3JpZXMnKVxuICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbihkYXRhID0+IHNldENhdGVnb3JpZXMoZGF0YSkpXG4gICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8YXNpZGUgY2xhc3NOYW1lPXtgb3JkZXItZmlyc3QgYmctZ3JheS05MDAgdy0zLzUgbWQ6dy0xLzUgaC1mdWxsICR7aXNBc2lkZU9wZW4gPyAnb3BlbicgOiAnJ30gZml4ZWQgei0yMCB0b3AtMjQgbGVmdC0wYH0+XG4gICAgICA8dWwgY2xhc3NOYW1lPSdtLTUnPlxuICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPExpbmsga2V5PXtpbmRleH0gaHJlZj17YC9jYXRlZ29yaWVzLyR7Y2F0ZWdvcnl9YH0+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J3AtMiBteS0yIGJnLWdyYXktNzAwIHJvdW5kZWQtbWQgaG92ZXI6YmctZ3JheS02MDAnPntjYXRlZ29yeX08L2xpPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgPC9hc2lkZT5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkFzaWRlIiwiaXNBc2lkZU9wZW4iLCJjYXRlZ29yaWVzIiwic2V0Q2F0ZWdvcmllcyIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJhc2lkZSIsImNsYXNzTmFtZSIsInVsIiwibWFwIiwiY2F0ZWdvcnkiLCJpbmRleCIsImhyZWYiLCJsaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/categories/Aside.tsx\n"));

/***/ })

});