"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/props/create/page",{

/***/ "(app-pages-browser)/./node_modules/@zabui/comps/dist/styles.css":
/*!***************************************************!*\
  !*** ./node_modules/@zabui/comps/dist/styles.css ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"fa8810b33fc2\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9AemFidWkvY29tcHMvZGlzdC9zdHlsZXMuY3NzIiwibWFwcGluZ3MiOiI7QUFBQSwrREFBZSxjQUFjO0FBQzdCLElBQUksSUFBVSxJQUFJLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHphYnVpL2NvbXBzL2Rpc3Qvc3R5bGVzLmNzcz84OWM5Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiZmE4ODEwYjMzZmMyXCJcbmlmIChtb2R1bGUuaG90KSB7IG1vZHVsZS5ob3QuYWNjZXB0KCkgfVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/@zabui/comps/dist/styles.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/dashboard/props/create/page.tsx":
/*!*************************************************!*\
  !*** ./src/app/dashboard/props/create/page.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ create; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _actions_Props_createProp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/actions/Props/createProp */ \"(app-pages-browser)/./src/actions/Props/createProp.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _zabui_comps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @zabui/comps */ \"(app-pages-browser)/./node_modules/@zabui/comps/dist/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction create() {\n    _s();\n    const [success, setSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const handleSubmit = async (formData)=>{\n        const name = formData.get(\"name\");\n        const description = formData.get(\"description\");\n        const type = formData.get(\"type\");\n        let required = formData.get(\"required\");\n        if (required === \"true\") {\n            required = true;\n        } else {\n            required = false;\n        }\n        const prop = await (0,_actions_Props_createProp__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            name,\n            description,\n            type,\n            required\n        });\n        setSuccess(true);\n        setTimeout(()=>{\n            window.location.href = \"/dashboard/props\";\n        }, 1500);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col w-full max-w-md p-8 mx-auto space-y-4 bg-gray-900 rounded-lg shadow-md\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-xl font-bold text-center\",\n                    children: \"Create Prop\"\n                }, void 0, false, {\n                    fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/dashboard/props/create/page.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    action: handleSubmit,\n                    className: \"flex flex-col w-full max-w-md p-8 mx-auto space-y-4 bg-gray-900 rounded-lg shadow-md\",\n                    children: [\n                        success && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"p-2 text-white bg-green-500 rounded-md\",\n                            children: \"Prop Created Successfully\"\n                        }, void 0, false, {\n                            fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/dashboard/props/create/page.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 23\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"text-sm font-bold\",\n                            children: \"Name:\"\n                        }, void 0, false, {\n                            fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/dashboard/props/create/page.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            id: \"name\",\n                            name: \"name\",\n                            placeholder: \"\",\n                            className: \"p-2 text-black border rounded-md\"\n                        }, void 0, false, {\n                            fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/dashboard/props/create/page.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"text-sm font-bold\",\n                            children: \"Description:\"\n                        }, void 0, false, {\n                            fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/dashboard/props/create/page.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            id: \"description\",\n                            name: \"description\",\n                            className: \"p-2 text-black border rounded-md\"\n                        }, void 0, false, {\n                            fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/dashboard/props/create/page.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"text-sm font-bold\",\n                            children: \"Type:\"\n                        }, void 0, false, {\n                            fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/dashboard/props/create/page.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                            name: \"type\",\n                            className: \"p-2 text-black border-2 rounded-md\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"string\",\n                                    children: \"string\"\n                                }, void 0, false, {\n                                    fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/dashboard/props/create/page.tsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"number\",\n                                    children: \"number\"\n                                }, void 0, false, {\n                                    fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/dashboard/props/create/page.tsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"boolean\",\n                                    children: \"boolean\"\n                                }, void 0, false, {\n                                    fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/dashboard/props/create/page.tsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/dashboard/props/create/page.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"text-sm font-bold\",\n                            children: \"Required:\"\n                        }, void 0, false, {\n                            fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/dashboard/props/create/page.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                            name: \"required\",\n                            className: \"p-2 text-black border-2 rounded-md\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"true\",\n                                    children: \"true\"\n                                }, void 0, false, {\n                                    fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/dashboard/props/create/page.tsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"false\",\n                                    children: \"false\"\n                                }, void 0, false, {\n                                    fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/dashboard/props/create/page.tsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/dashboard/props/create/page.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-end\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_zabui_comps__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                type: \"submit\",\n                                children: \"Create Prop\"\n                            }, void 0, false, {\n                                fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/dashboard/props/create/page.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/dashboard/props/create/page.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/dashboard/props/create/page.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/dashboard/props/create/page.tsx\",\n            lineNumber: 26,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/dashboard/props/create/page.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_s(create, \"2ev0mvhfKtKU+/wFmg1ua/kU1bg=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZGFzaGJvYXJkL3Byb3BzL2NyZWF0ZS9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNvRDtBQUNuQjtBQUNLO0FBRXZCLFNBQVNHOztJQUN0QixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR0osK0NBQVFBLENBQUM7SUFDdkMsTUFBTUssZUFBZSxPQUFPQztRQUMxQixNQUFNQyxPQUFPRCxTQUFTRSxHQUFHLENBQUM7UUFDMUIsTUFBTUMsY0FBY0gsU0FBU0UsR0FBRyxDQUFDO1FBQ2pDLE1BQU1FLE9BQU9KLFNBQVNFLEdBQUcsQ0FBQztRQUMxQixJQUFJRyxXQUFXTCxTQUFTRSxHQUFHLENBQUM7UUFDNUIsSUFBSUcsYUFBYSxRQUFRO1lBQ3ZCQSxXQUFXO1FBQ2IsT0FBSztZQUNIQSxXQUFXO1FBQ2I7UUFFQSxNQUFNQyxPQUFPLE1BQU1iLHFFQUFVQSxDQUFDO1lBQUNRO1lBQU1FO1lBQWFDO1lBQU1DO1FBQVE7UUFDaEVQLFdBQVc7UUFDWFMsV0FBVztZQUFPQyxPQUFPQyxRQUFRLENBQUNDLElBQUksR0FBRztRQUFtQixHQUFHO0lBQ2pFO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDQztvQkFBR0QsV0FBVTs4QkFBZ0M7Ozs7Ozs4QkFDOUMsOERBQUNFO29CQUFLQyxRQUFRaEI7b0JBQWNhLFdBQVU7O3dCQUNuQ2YseUJBQVcsOERBQUNtQjs0QkFBRUosV0FBVTtzQ0FBeUM7Ozs7OztzQ0FDbEUsOERBQUNLOzRCQUFNTCxXQUFVO3NDQUFvQjs7Ozs7O3NDQUNyQyw4REFBQ007NEJBQU1kLE1BQUs7NEJBQU9lLElBQUc7NEJBQU9sQixNQUFLOzRCQUFPbUIsYUFBWTs0QkFBR1IsV0FBVTs7Ozs7O3NDQUNsRSw4REFBQ0s7NEJBQU1MLFdBQVU7c0NBQW9COzs7Ozs7c0NBQ3JDLDhEQUFDTTs0QkFBTWQsTUFBSzs0QkFBT2UsSUFBRzs0QkFBY2xCLE1BQUs7NEJBQWNXLFdBQVU7Ozs7OztzQ0FDakUsOERBQUNLOzRCQUFNTCxXQUFVO3NDQUFvQjs7Ozs7O3NDQUNyQyw4REFBQ1M7NEJBQU9wQixNQUFLOzRCQUFPVyxXQUFVOzs4Q0FDNUIsOERBQUNVO29DQUFPQyxPQUFNOzhDQUFTOzs7Ozs7OENBQ3ZCLDhEQUFDRDtvQ0FBT0MsT0FBTTs4Q0FBUzs7Ozs7OzhDQUN2Qiw4REFBQ0Q7b0NBQU9DLE9BQU07OENBQVU7Ozs7Ozs7Ozs7OztzQ0FFMUIsOERBQUNOOzRCQUFNTCxXQUFVO3NDQUFvQjs7Ozs7O3NDQUNyQyw4REFBQ1M7NEJBQU9wQixNQUFLOzRCQUFXVyxXQUFVOzs4Q0FDaEMsOERBQUNVO29DQUFPQyxPQUFNOzhDQUFPOzs7Ozs7OENBQ3JCLDhEQUFDRDtvQ0FBT0MsT0FBTTs4Q0FBUTs7Ozs7Ozs7Ozs7O3NDQUV4Qiw4REFBQ1o7NEJBQUlDLFdBQVU7c0NBQ2IsNEVBQUNqQixnREFBTUE7Z0NBQUNTLE1BQUs7MENBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNbEM7R0E5Q3dCUiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2Rhc2hib2FyZC9wcm9wcy9jcmVhdGUvcGFnZS50c3g/YjA1YiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBjcmVhdGVQcm9wIGZyb20gXCJAL2FjdGlvbnMvUHJvcHMvY3JlYXRlUHJvcFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAemFidWkvY29tcHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlKCl7XG4gIGNvbnN0IFtzdWNjZXNzLCBzZXRTdWNjZXNzXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGZvcm1EYXRhOiBGb3JtRGF0YSkgPT4ge1xuICAgIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGZvcm1EYXRhLmdldChcImRlc2NyaXB0aW9uXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCB0eXBlID0gZm9ybURhdGEuZ2V0KFwidHlwZVwiKSBhcyBzdHJpbmc7XG4gICAgbGV0IHJlcXVpcmVkID0gZm9ybURhdGEuZ2V0KFwicmVxdWlyZWRcIikgYXMgc3RyaW5nIHwgYm9vbGVhbjtcbiAgICBpZiAocmVxdWlyZWQgPT09IFwidHJ1ZVwiKSB7XG4gICAgICByZXF1aXJlZCA9IHRydWU7XG4gICAgfWVsc2V7XG4gICAgICByZXF1aXJlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBwcm9wID0gYXdhaXQgY3JlYXRlUHJvcCh7bmFtZSwgZGVzY3JpcHRpb24sIHR5cGUsIHJlcXVpcmVkfSk7XG4gICAgc2V0U3VjY2Vzcyh0cnVlKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHt3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvZGFzaGJvYXJkL3Byb3BzJzt9LCAxNTAwKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB3LWZ1bGwgbWF4LXctbWQgcC04IG14LWF1dG8gc3BhY2UteS00IGJnLWdyYXktOTAwIHJvdW5kZWQtbGcgc2hhZG93LW1kXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCB0ZXh0LWNlbnRlclwiPkNyZWF0ZSBQcm9wPC9oMT5cbiAgICAgICAgPGZvcm0gYWN0aW9uPXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdy1mdWxsIG1heC13LW1kIHAtOCBteC1hdXRvIHNwYWNlLXktNCBiZy1ncmF5LTkwMCByb3VuZGVkLWxnIHNoYWRvdy1tZFwiPlxuICAgICAgICAgIHtzdWNjZXNzICYmIDxwIGNsYXNzTmFtZT1cInAtMiB0ZXh0LXdoaXRlIGJnLWdyZWVuLTUwMCByb3VuZGVkLW1kXCI+UHJvcCBDcmVhdGVkIFN1Y2Nlc3NmdWxseTwvcD59XG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1ib2xkXCI+TmFtZTo8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibmFtZVwiIG5hbWU9XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCJcIiBjbGFzc05hbWU9XCJwLTIgdGV4dC1ibGFjayBib3JkZXIgcm91bmRlZC1tZFwiIC8+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1ib2xkXCI+RGVzY3JpcHRpb246PC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImRlc2NyaXB0aW9uXCIgbmFtZT1cImRlc2NyaXB0aW9uXCIgY2xhc3NOYW1lPVwicC0yIHRleHQtYmxhY2sgYm9yZGVyIHJvdW5kZWQtbWRcIiAvPlxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtYm9sZFwiPlR5cGU6PC9sYWJlbD5cbiAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJ0eXBlXCIgY2xhc3NOYW1lPVwicC0yIHRleHQtYmxhY2sgYm9yZGVyLTIgcm91bmRlZC1tZFwiPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInN0cmluZ1wiPnN0cmluZzwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm51bWJlclwiPm51bWJlcjwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImJvb2xlYW5cIj5ib29sZWFuPC9vcHRpb24+XG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1ib2xkXCI+UmVxdWlyZWQ6PC9sYWJlbD5cbiAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJyZXF1aXJlZFwiIGNsYXNzTmFtZT1cInAtMiB0ZXh0LWJsYWNrIGJvcmRlci0yIHJvdW5kZWQtbWRcIj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ0cnVlXCI+dHJ1ZTwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImZhbHNlXCI+ZmFsc2U8L29wdGlvbj5cbiAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1lbmRcIj5cbiAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiPkNyZWF0ZSBQcm9wPC9CdXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59Il0sIm5hbWVzIjpbImNyZWF0ZVByb3AiLCJ1c2VTdGF0ZSIsIkJ1dHRvbiIsImNyZWF0ZSIsInN1Y2Nlc3MiLCJzZXRTdWNjZXNzIiwiaGFuZGxlU3VibWl0IiwiZm9ybURhdGEiLCJuYW1lIiwiZ2V0IiwiZGVzY3JpcHRpb24iLCJ0eXBlIiwicmVxdWlyZWQiLCJwcm9wIiwic2V0VGltZW91dCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiZm9ybSIsImFjdGlvbiIsInAiLCJsYWJlbCIsImlucHV0IiwiaWQiLCJwbGFjZWhvbGRlciIsInNlbGVjdCIsIm9wdGlvbiIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/dashboard/props/create/page.tsx\n"));

/***/ })

});