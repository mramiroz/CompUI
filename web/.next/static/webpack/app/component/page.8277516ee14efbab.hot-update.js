"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/component/page",{

/***/ "(app-pages-browser)/./node_modules/@zabui/comps/dist/styles.css":
/*!***************************************************!*\
  !*** ./node_modules/@zabui/comps/dist/styles.css ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"b5ef94880082\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9AemFidWkvY29tcHMvZGlzdC9zdHlsZXMuY3NzIiwibWFwcGluZ3MiOiI7QUFBQSwrREFBZSxjQUFjO0FBQzdCLElBQUksSUFBVSxJQUFJLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHphYnVpL2NvbXBzL2Rpc3Qvc3R5bGVzLmNzcz84OWM5Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiYjVlZjk0ODgwMDgyXCJcbmlmIChtb2R1bGUuaG90KSB7IG1vZHVsZS5ob3QuYWNjZXB0KCkgfVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/@zabui/comps/dist/styles.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/component/page.tsx":
/*!************************************!*\
  !*** ./src/app/component/page.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_component_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/component/Card */ \"(app-pages-browser)/./src/components/component/Card.tsx\");\n/* harmony import */ var _actions_Comps_getComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/actions/Comps/getComponents */ \"(app-pages-browser)/./src/actions/Comps/getComponents.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1);\n    const [components, setComponents] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const fetchComponents = async ()=>{\n            const newComponents = await (0,_actions_Comps_getComponents__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(page, 5);\n            setComponents(newComponents);\n        };\n        fetchComponents();\n    }, [\n        page\n    ]);\n    const isLastPage = components.length < 5;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            Array.isArray(components) && components.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_component_Card__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    id: item._id.toString(),\n                    code: item.code,\n                    title: item.title,\n                    description: item.description,\n                    category: item.category,\n                    component: item.component,\n                    props: item.props,\n                    likes: item.likes\n                }, index, false, {\n                    fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/component/page.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, this)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center mt-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"font-bold py-2 px-4 rounded \".concat(page === 1 ? \"bg-gray-500 cursor-not-allowed\" : \"bg-blue-500 hover:bg-blue-700 text-white\"),\n                        onClick: ()=>{\n                            setPage(page - 1);\n                            window.scrollTo(0, 0);\n                        },\n                        disabled: page === 1,\n                        children: \"Previous\"\n                    }, void 0, false, {\n                        fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/component/page.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"font-bold py-2 px-4 rounded ml-4 \".concat(isLastPage ? \"bg-gray-500 cursor-not-allowed\" : \"bg-blue-500 hover:bg-blue-700 text-white\"),\n                        onClick: ()=>{\n                            setPage(page + 1);\n                            window.scrollTo(0, 0);\n                        },\n                        children: \"Next\"\n                    }, void 0, false, {\n                        fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/component/page.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/component/page.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/component/page.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"qD8CVojAQq+kw1xqcA2pGnylS7c=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50L3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRStDO0FBQ1c7QUFDZDtBQWM3QixTQUFTSTs7SUFDdEIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdKLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ0ssWUFBWUMsY0FBYyxHQUFHTiwrQ0FBUUEsQ0FBYyxFQUFFO0lBRTVEQyxnREFBU0EsQ0FBQztRQUNSLE1BQU1NLGtCQUFrQjtZQUN0QixNQUFNQyxnQkFBZ0IsTUFBTVQsd0VBQWFBLENBQUNJLE1BQU07WUFDaERHLGNBQWNFO1FBQ2hCO1FBQ0FEO0lBQ0YsR0FBRztRQUFDSjtLQUFLO0lBRVQsTUFBTU0sYUFBYUosV0FBV0ssTUFBTSxHQUFHO0lBQ3ZDLHFCQUNFLDhEQUFDQzs7WUFDRUMsTUFBTUMsT0FBTyxDQUFDUixlQUFlQSxXQUFXUyxHQUFHLENBQUMsQ0FBQ0MsTUFBaUJDLHNCQUM3RCw4REFBQ2xCLGtFQUFJQTtvQkFFSG1CLElBQUlGLEtBQUtHLEdBQUcsQ0FBQ0MsUUFBUTtvQkFDckJDLE1BQU1MLEtBQUtLLElBQUk7b0JBQ2ZDLE9BQU9OLEtBQUtNLEtBQUs7b0JBQ2pCQyxhQUFhUCxLQUFLTyxXQUFXO29CQUM3QkMsVUFBVVIsS0FBS1EsUUFBUTtvQkFDdkJDLFdBQVdULEtBQUtTLFNBQVM7b0JBQ3pCQyxPQUFPVixLQUFLVSxLQUFLO29CQUNqQkMsT0FBT1gsS0FBS1csS0FBSzttQkFSWlY7Ozs7OzBCQVdULDhEQUFDTDtnQkFBSWdCLFdBQVU7O2tDQUNmLDhEQUFDQzt3QkFDQ0QsV0FBVywrQkFBMEgsT0FBM0Z4QixTQUFTLElBQUksbUNBQW1DO3dCQUMxRjBCLFNBQVM7NEJBQ1B6QixRQUFRRCxPQUFPOzRCQUNmMkIsT0FBT0MsUUFBUSxDQUFDLEdBQUc7d0JBQ3JCO3dCQUNBQyxVQUFVN0IsU0FBUztrQ0FDcEI7Ozs7OztrQ0FHRCw4REFBQ3lCO3dCQUNDRCxXQUFXLG9DQUErSCxPQUEzRmxCLGFBQWEsbUNBQW1DO3dCQUMvRm9CLFNBQVM7NEJBQ1B6QixRQUFRRCxPQUFPOzRCQUNmMkIsT0FBT0MsUUFBUSxDQUFDLEdBQUc7d0JBQ3JCO2tDQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNUDtHQW5Ed0I3QjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudC9wYWdlLnRzeD85MGFmIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgeyBjb25uZWN0VG9EYXRhYmFzZSB9IGZyb20gJ0AvbGliL21vbmdvZGInO1xuaW1wb3J0IENhcmQgZnJvbSAnQC9jb21wb25lbnRzL2NvbXBvbmVudC9DYXJkJztcbmltcG9ydCBnZXRDb21wb25lbnRzIGZyb20gJ0AvYWN0aW9ucy9Db21wcy9nZXRDb21wb25lbnRzJztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBNZXRhZGF0YSB9IGZyb20gJ25leHQnO1xuXG5pbnRlcmZhY2UgQ29tcG9uZW50IHtcbiAgX2lkOiBzdHJpbmc7XG4gIGNvZGU6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgY2F0ZWdvcnk6IHN0cmluZztcbiAgY29tcG9uZW50OiBzdHJpbmc7XG4gIHByb3BzOiBzdHJpbmc7XG4gIGxpa2VzOiBudW1iZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKXtcbiAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGUoMSk7XG4gIGNvbnN0IFtjb21wb25lbnRzLCBzZXRDb21wb25lbnRzXSA9IHVzZVN0YXRlPENvbXBvbmVudFtdPihbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaENvbXBvbmVudHMgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBuZXdDb21wb25lbnRzID0gYXdhaXQgZ2V0Q29tcG9uZW50cyhwYWdlLCA1KTtcbiAgICAgIHNldENvbXBvbmVudHMobmV3Q29tcG9uZW50cyk7XG4gICAgfTtcbiAgICBmZXRjaENvbXBvbmVudHMoKTtcbiAgfSwgW3BhZ2VdKTtcblxuICBjb25zdCBpc0xhc3RQYWdlID0gY29tcG9uZW50cy5sZW5ndGggPCA1O1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7QXJyYXkuaXNBcnJheShjb21wb25lbnRzKSAmJiBjb21wb25lbnRzLm1hcCgoaXRlbTogQ29tcG9uZW50LCBpbmRleCkgPT4gKFxuICAgICAgICA8Q2FyZFxuICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgaWQ9e2l0ZW0uX2lkLnRvU3RyaW5nKCl9XG4gICAgICAgICAgY29kZT17aXRlbS5jb2RlfVxuICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlfVxuICAgICAgICAgIGRlc2NyaXB0aW9uPXtpdGVtLmRlc2NyaXB0aW9ufVxuICAgICAgICAgIGNhdGVnb3J5PXtpdGVtLmNhdGVnb3J5fVxuICAgICAgICAgIGNvbXBvbmVudD17aXRlbS5jb21wb25lbnR9XG4gICAgICAgICAgcHJvcHM9e2l0ZW0ucHJvcHN9XG4gICAgICAgICAgbGlrZXM9e2l0ZW0ubGlrZXN9XG4gICAgICAgIC8+XG4gICAgICApKX1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtdC00XCI+XG4gICAgICA8YnV0dG9uIFxuICAgICAgICBjbGFzc05hbWU9e2Bmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQgJHtwYWdlID09PSAxID8gJ2JnLWdyYXktNTAwIGN1cnNvci1ub3QtYWxsb3dlZCcgOiAnYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS03MDAgdGV4dC13aGl0ZSd9YH1cbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgIHNldFBhZ2UocGFnZSAtIDEpO1xuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICAgICAgfX1cbiAgICAgICAgZGlzYWJsZWQ9e3BhZ2UgPT09IDF9XG4gICAgICA+XG4gICAgICAgIFByZXZpb3VzXG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gXG4gICAgICAgIGNsYXNzTmFtZT17YGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZCBtbC00ICR7aXNMYXN0UGFnZSA/ICdiZy1ncmF5LTUwMCBjdXJzb3Itbm90LWFsbG93ZWQnIDogJ2JnLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtNzAwIHRleHQtd2hpdGUnfWB9XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBzZXRQYWdlKHBhZ2UgKyAxKTtcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIE5leHRcbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59Il0sIm5hbWVzIjpbIkNhcmQiLCJnZXRDb21wb25lbnRzIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJIb21lIiwicGFnZSIsInNldFBhZ2UiLCJjb21wb25lbnRzIiwic2V0Q29tcG9uZW50cyIsImZldGNoQ29tcG9uZW50cyIsIm5ld0NvbXBvbmVudHMiLCJpc0xhc3RQYWdlIiwibGVuZ3RoIiwiZGl2IiwiQXJyYXkiLCJpc0FycmF5IiwibWFwIiwiaXRlbSIsImluZGV4IiwiaWQiLCJfaWQiLCJ0b1N0cmluZyIsImNvZGUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiY2F0ZWdvcnkiLCJjb21wb25lbnQiLCJwcm9wcyIsImxpa2VzIiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbGljayIsIndpbmRvdyIsInNjcm9sbFRvIiwiZGlzYWJsZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/component/page.tsx\n"));

/***/ })

});