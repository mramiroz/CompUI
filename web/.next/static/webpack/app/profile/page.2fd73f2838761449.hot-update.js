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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"72351f1cc720\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9AY29tcHVpL2NvbXBzL3N0eWxlcy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AY29tcHVpL2NvbXBzL3N0eWxlcy5jc3M/YzRiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjcyMzUxZjFjYzcyMFwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/@compui/comps/styles.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/profile/page.tsx":
/*!**********************************!*\
  !*** ./src/app/profile/page.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Profile; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_component_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/component/Card */ \"(app-pages-browser)/./src/components/component/Card.tsx\");\n/* harmony import */ var _compui_comps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @compui/comps */ \"(app-pages-browser)/./node_modules/@compui/comps/src/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Profile() {\n    _s();\n    const { data: session, status } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)();\n    const [comps, setComps] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    const user = session === null || session === void 0 ? void 0 : session.user;\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        if (user === null || user === void 0 ? void 0 : user.favComps) {\n            fetch(\"/api/favComps\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    compIds: user.favComps\n                })\n            }).then(async (res)=>{\n                const data = await res.json();\n                setComps(data);\n            });\n        }\n    }, [\n        user === null || user === void 0 ? void 0 : user.favComps\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"my-5 text-5xl text-center\",\n                children: [\n                    \"Hello \",\n                    user === null || user === void 0 ? void 0 : user.name,\n                    \" \\uD83D\\uDC4B\"\n                ]\n            }, void 0, true, {\n                fileName: \"/home/mramiroz/Escritorio/CompUI/web/src/app/profile/page.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"my-3 text-3xl\",\n                children: \"Here are your favorite components: \"\n            }, void 0, false, {\n                fileName: \"/home/mramiroz/Escritorio/CompUI/web/src/app/profile/page.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"md:flex md:flex-wrap\",\n                children: comps.map((comp, index)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_component_Card__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        id: comp._id,\n                        code: comp.code,\n                        title: comp.title,\n                        description: comp.description,\n                        category: comp.category,\n                        props: comp.props,\n                        likes: comp.likes\n                    }, index, false, {\n                        fileName: \"/home/mramiroz/Escritorio/CompUI/web/src/app/profile/page.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 13\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/home/mramiroz/Escritorio/CompUI/web/src/app/profile/page.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_compui_comps__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.signOut)(),\n                children: \"Logout\"\n            }, void 0, false, {\n                fileName: \"/home/mramiroz/Escritorio/CompUI/web/src/app/profile/page.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Profile, \"/0G1OmhMpX80tX4L2pLuo7QJy3E=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession\n    ];\n});\n_c = Profile;\nvar _c;\n$RefreshReg$(_c, \"Profile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcHJvZmlsZS9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQytDO0FBQ1I7QUFDMkI7QUFDakI7QUFhbEMsU0FBU007O0lBQ3RCLE1BQU0sRUFBRUMsTUFBTUMsT0FBTyxFQUFFQyxNQUFNLEVBQUMsR0FBR1AsMkRBQVVBO0lBQzNDLE1BQU0sQ0FBQ1EsT0FBT0MsU0FBUyxHQUFHTiwrQ0FBUUEsQ0FBa0IsRUFBRTtJQUN0RCxNQUFNTyxPQUFPSixvQkFBQUEsOEJBQUFBLFFBQVNJLElBQUk7SUFJMUJSLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSVEsaUJBQUFBLDJCQUFBQSxLQUFNQyxRQUFRLEVBQUU7WUFDbEJDLE1BQU0saUJBQWlCO2dCQUNyQkMsUUFBUTtnQkFDUkMsU0FBUztvQkFDUCxnQkFBZ0I7Z0JBQ2xCO2dCQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7b0JBQUNDLFNBQVNSLEtBQUtDLFFBQVE7Z0JBQUE7WUFDOUMsR0FBR1EsSUFBSSxDQUFDLE9BQU9DO2dCQUNiLE1BQU1mLE9BQU8sTUFBTWUsSUFBSUMsSUFBSTtnQkFDM0JaLFNBQVNKO1lBQ1g7UUFDRjtJQUNGLEdBQUc7UUFBQ0ssaUJBQUFBLDJCQUFBQSxLQUFNQyxRQUFRO0tBQUM7SUFFbkIscUJBQ0U7OzBCQUNFLDhEQUFDVztnQkFBRUMsV0FBVTs7b0JBQTRCO29CQUFRYixpQkFBQUEsMkJBQUQsS0FBZWMsSUFBSTtvQkFBQzs7Ozs7OzswQkFDcEUsOERBQUNGO2dCQUFFQyxXQUFVOzBCQUFnQjs7Ozs7OzBCQUM3Qiw4REFBQ0U7Z0JBQUlGLFdBQVU7MEJBQ1pmLE1BQU1rQixHQUFHLENBQUMsQ0FBQ0MsTUFBcUJDO29CQUMvQixxQkFDRSw4REFBQzlCLGtFQUFJQTt3QkFFSCtCLElBQUlGLEtBQUtHLEdBQUc7d0JBQ1pDLE1BQU1KLEtBQUtJLElBQUk7d0JBQ2ZDLE9BQU9MLEtBQUtLLEtBQUs7d0JBQ2pCQyxhQUFhTixLQUFLTSxXQUFXO3dCQUM3QkMsVUFBVVAsS0FBS08sUUFBUTt3QkFDdkJDLE9BQU9SLEtBQUtRLEtBQUs7d0JBQ2pCQyxPQUFPVCxLQUFLUyxLQUFLO3VCQVBaUjs7Ozs7Z0JBU1g7Ozs7OzswQkFFRiw4REFBQzdCLGlEQUFNQTtnQkFBQ3NDLFNBQVMsSUFBTXBDLHdEQUFPQTswQkFBSTs7Ozs7Ozs7QUFLeEM7R0E5Q3dCRzs7UUFDV0osdURBQVVBOzs7S0FEckJJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcHJvZmlsZS9wYWdlLnRzeD9jNGU2Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IENhcmQgZnJvbSAnQC9jb21wb25lbnRzL2NvbXBvbmVudC9DYXJkJztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0Bjb21wdWkvY29tcHMnO1xuaW1wb3J0IHsgdXNlU2Vzc2lvbiwgc2lnbk91dCwgZ2V0U2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCc7XG5pbXBvcnQgeyB1c2UsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBPYmplY3RJZCB9IGZyb20gJ21vbmdvZGInO1xuaW1wb3J0IHsgcmVkaXJlY3QgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xuXG5pbnRlcmZhY2UgQ29tcG9uZW50RGF0YXtcbiAgX2lkOiBPYmplY3RJZDtcbiAgY29kZTogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBjYXRlZ29yeTogc3RyaW5nO1xuICBwcm9wczogYW55O1xuICBsaWtlczogbnVtYmVyO1xufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZmlsZSgpe1xuICBjb25zdCB7IGRhdGE6IHNlc3Npb24sIHN0YXR1c30gPSB1c2VTZXNzaW9uKCk7XG4gIGNvbnN0IFtjb21wcywgc2V0Q29tcHNdID0gdXNlU3RhdGU8Q29tcG9uZW50RGF0YVtdPihbXSk7XG4gIGNvbnN0IHVzZXIgPSBzZXNzaW9uPy51c2VyIGFzIGFueTtcblxuICBcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh1c2VyPy5mYXZDb21wcykge1xuICAgICAgZmV0Y2goXCIvYXBpL2ZhdkNvbXBzXCIsIHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtjb21wSWRzOiB1c2VyLmZhdkNvbXBzfSlcbiAgICAgIH0pLnRoZW4oYXN5bmMgKHJlcykgPT4ge1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAgICAgc2V0Q29tcHMoZGF0YSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFt1c2VyPy5mYXZDb21wc10pO1xuICBcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPHAgY2xhc3NOYW1lPSdteS01IHRleHQtNXhsIHRleHQtY2VudGVyJz5IZWxsbyB7KHVzZXIgYXMgYW55KT8ubmFtZX0g8J+RizwvcD5cbiAgICAgIDxwIGNsYXNzTmFtZT0nbXktMyB0ZXh0LTN4bCc+SGVyZSBhcmUgeW91ciBmYXZvcml0ZSBjb21wb25lbnRzOiA8L3A+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbWQ6ZmxleCBtZDpmbGV4LXdyYXAnPlxuICAgICAgICB7Y29tcHMubWFwKChjb21wOiBDb21wb25lbnREYXRhLCBpbmRleCkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICBpZD17Y29tcC5faWR9XG4gICAgICAgICAgICAgIGNvZGU9e2NvbXAuY29kZX1cbiAgICAgICAgICAgICAgdGl0bGU9e2NvbXAudGl0bGV9XG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtjb21wLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICBjYXRlZ29yeT17Y29tcC5jYXRlZ29yeX1cbiAgICAgICAgICAgICAgcHJvcHM9e2NvbXAucHJvcHN9XG4gICAgICAgICAgICAgIGxpa2VzPXtjb21wLmxpa2VzfSAvPlxuICAgICAgICAgIClcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gc2lnbk91dCgpfT5cbiAgICAgICAgTG9nb3V0XG4gICAgICA8L0J1dHRvbj5cbiAgICA8Lz5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkNhcmQiLCJCdXR0b24iLCJ1c2VTZXNzaW9uIiwic2lnbk91dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUHJvZmlsZSIsImRhdGEiLCJzZXNzaW9uIiwic3RhdHVzIiwiY29tcHMiLCJzZXRDb21wcyIsInVzZXIiLCJmYXZDb21wcyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiY29tcElkcyIsInRoZW4iLCJyZXMiLCJqc29uIiwicCIsImNsYXNzTmFtZSIsIm5hbWUiLCJkaXYiLCJtYXAiLCJjb21wIiwiaW5kZXgiLCJpZCIsIl9pZCIsImNvZGUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiY2F0ZWdvcnkiLCJwcm9wcyIsImxpa2VzIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/profile/page.tsx\n"));

/***/ })

});