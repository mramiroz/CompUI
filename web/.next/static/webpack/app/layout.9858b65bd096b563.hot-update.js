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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"234fc177854a\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9AY29tcHVpL2NvbXBzL3N0eWxlcy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AY29tcHVpL2NvbXBzL3N0eWxlcy5jc3M/YzRiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjIzNGZjMTc3ODU0YVwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/@compui/comps/styles.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"f606694dec75\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zdHlsZXMvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zdHlsZXMvZ2xvYmFscy5jc3M/OGM0YiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcImY2MDY2OTRkZWM3NVwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/styles/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/categories/Aside.tsx":
/*!*********************************************!*\
  !*** ./src/components/categories/Aside.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Aside; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _actions_Categories_getCategories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/actions/Categories/getCategories */ \"(app-pages-browser)/./src/actions/Categories/getCategories.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Aside(param) {\n    let { isAsideOpen } = param;\n    _s();\n    const [categories, setCategories] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            const res = await (0,_actions_Categories_getCategories__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n            setCategories(res);\n        };\n        fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aside\", {\n        className: \"order-first bg-gray-900 w-3/5 md:w-1/5 h-full \".concat(isAsideOpen ? \"open\" : \"\", \" fixed opacity-25 z-40\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            className: \"m-5\",\n            children: categories.map((category, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    href: \"/categories/\".concat(category),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"p-2 my-2 bg-gray-700 rounded-md hover:bg-gray-600\",\n                        children: category\n                    }, void 0, false, {\n                        fileName: \"/home/mramiroz/Escritorio/CompUI/web/src/components/categories/Aside.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 15\n                    }, this)\n                }, index, false, {\n                    fileName: \"/home/mramiroz/Escritorio/CompUI/web/src/components/categories/Aside.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 13\n                }, this))\n        }, void 0, false, {\n            fileName: \"/home/mramiroz/Escritorio/CompUI/web/src/components/categories/Aside.tsx\",\n            lineNumber: 17,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/mramiroz/Escritorio/CompUI/web/src/components/categories/Aside.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n_s(Aside, \"+ijgB8ROEl0Dkz53OTIi8GynN6s=\");\n_c = Aside;\nvar _c;\n$RefreshReg$(_c, \"Aside\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2NhdGVnb3JpZXMvQXNpZGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQytEO0FBQ2xDO0FBQ2U7QUFFN0IsU0FBU0ksTUFBTSxLQUF5QztRQUF6QyxFQUFFQyxXQUFXLEVBQTRCLEdBQXpDOztJQUM1QixNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR0wsK0NBQVFBLENBQVcsRUFBRTtJQUN6REMsZ0RBQVNBLENBQUM7UUFDUixNQUFNSyxZQUFZO1lBQ2hCLE1BQU1DLE1BQU0sTUFBTVQsNkVBQWFBO1lBQy9CTyxjQUFjRTtRQUNoQjtRQUNBRDtJQUNGLEdBQUcsRUFBRTtJQUNMLHFCQUNFLDhEQUFDRTtRQUFNQyxXQUFXLGlEQUEyRSxPQUExQk4sY0FBYyxTQUFTLElBQUc7a0JBQzNGLDRFQUFDTztZQUFHRCxXQUFVO3NCQUNYTCxXQUFXTyxHQUFHLENBQUMsQ0FBQ0MsVUFBVUMsc0JBQ3ZCLDhEQUFDZCxpREFBSUE7b0JBQWFlLE1BQU0sZUFBd0IsT0FBVEY7OEJBQ3JDLDRFQUFDRzt3QkFBR04sV0FBVTtrQ0FBcURHOzs7Ozs7bUJBRDFEQzs7Ozs7Ozs7Ozs7Ozs7O0FBT3ZCO0dBcEJ3Qlg7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY2F0ZWdvcmllcy9Bc2lkZS50c3g/ZWNmYyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBnZXRDYXRlZ29yaWVzIGZyb20gJ0AvYWN0aW9ucy9DYXRlZ29yaWVzL2dldENhdGVnb3JpZXMnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFzaWRlKHsgaXNBc2lkZU9wZW4gfTogeyBpc0FzaWRlT3BlbjogYm9vbGVhbiB9KSB7XG4gIGNvbnN0IFtjYXRlZ29yaWVzLCBzZXRDYXRlZ29yaWVzXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZ2V0Q2F0ZWdvcmllcygpO1xuICAgICAgc2V0Q2F0ZWdvcmllcyhyZXMpO1xuICAgIH1cbiAgICBmZXRjaERhdGEoKTtcbiAgfSwgW10pXG4gIHJldHVybiAoXG4gICAgPGFzaWRlIGNsYXNzTmFtZT17YG9yZGVyLWZpcnN0IGJnLWdyYXktOTAwIHctMy81IG1kOnctMS81IGgtZnVsbCAke2lzQXNpZGVPcGVuID8gJ29wZW4nIDogJyd9IGZpeGVkIG9wYWNpdHktMjUgei00MGB9PlxuICAgICAgPHVsIGNsYXNzTmFtZT0nbS01Jz5cbiAgICAgICAge2NhdGVnb3JpZXMubWFwKChjYXRlZ29yeSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxMaW5rIGtleT17aW5kZXh9IGhyZWY9e2AvY2F0ZWdvcmllcy8ke2NhdGVnb3J5fWB9PlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdwLTIgbXktMiBiZy1ncmF5LTcwMCByb3VuZGVkLW1kIGhvdmVyOmJnLWdyYXktNjAwJz57Y2F0ZWdvcnl9PC9saT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgIDwvYXNpZGU+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJnZXRDYXRlZ29yaWVzIiwiTGluayIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQXNpZGUiLCJpc0FzaWRlT3BlbiIsImNhdGVnb3JpZXMiLCJzZXRDYXRlZ29yaWVzIiwiZmV0Y2hEYXRhIiwicmVzIiwiYXNpZGUiLCJjbGFzc05hbWUiLCJ1bCIsIm1hcCIsImNhdGVnb3J5IiwiaW5kZXgiLCJocmVmIiwibGkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/categories/Aside.tsx\n"));

/***/ })

});