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

/***/ "(app-pages-browser)/./src/app/dashboard/props/create/page.tsx":
/*!*************************************************!*\
  !*** ./src/app/dashboard/props/create/page.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ create; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _actions_Props_createProp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/actions/Props/createProp */ \"(app-pages-browser)/./src/actions/Props/createProp.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction create() {\n    _s();\n    const [success, setSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const handleSubmit = async (formData)=>{\n        const name = formData.get(\"name\");\n        const description = formData.get(\"description\");\n        const type = formData.get(\"type\");\n        let required = formData.get(\"required\");\n        if (required === \"true\") {\n            required = true;\n        } else {\n            required = false;\n        }\n        const prop = await (0,_actions_Props_createProp__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            name,\n            description,\n            type,\n            required\n        });\n        setSuccess(true);\n        setTimeout(()=>{\n            window.location.href = \"/dashboard/props\";\n        }, 1500);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col w-full max-w-md p-8 mx-auto space-y-4 bg-gray-900 rounded-lg shadow-md\"\n            }, void 0, false, {\n                fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/dashboard/props/create/page.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"mb-4 text-xl font-bold text-center\",\n                children: \"Create Prop\"\n            }, void 0, false, {\n                fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/dashboard/props/create/page.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                action: handleSubmit,\n                className: \"flex flex-col w-full max-w-md p-8 mx-auto space-y-4 bg-gray-900 rounded-lg shadow-md\",\n                children: [\n                    success && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"p-2 text-white bg-green-500 rounded-md\",\n                        children: \"Prop Created Successfully\"\n                    }, void 0, false, {\n                        fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/dashboard/props/create/page.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"text-sm font-bold\",\n                        children: \"Name:\"\n                    }, void 0, false, {\n                        fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/dashboard/props/create/page.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        id: \"name\",\n                        name: \"name\",\n                        className: \"p-2 text-black border rounded-md\"\n                    }, void 0, false, {\n                        fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/dashboard/props/create/page.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"text-sm font-bold\",\n                        children: \"Description:\"\n                    }, void 0, false, {\n                        fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/dashboard/props/create/page.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        id: \"description\",\n                        name: \"description\",\n                        className: \"p-2 text-black border rounded-md\"\n                    }, void 0, false, {\n                        fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/dashboard/props/create/page.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"text-sm font-bold\",\n                        children: \"Type:\"\n                    }, void 0, false, {\n                        fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/dashboard/props/create/page.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        name: \"type\",\n                        className: \"p-2 text-black border rounded-md\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"string\",\n                                children: \"string\"\n                            }, void 0, false, {\n                                fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/dashboard/props/create/page.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"number\",\n                                children: \"number\"\n                            }, void 0, false, {\n                                fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/dashboard/props/create/page.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"boolean\",\n                                children: \"boolean\"\n                            }, void 0, false, {\n                                fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/dashboard/props/create/page.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/dashboard/props/create/page.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"text-sm font-bold\",\n                        children: \"Required:\"\n                    }, void 0, false, {\n                        fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/dashboard/props/create/page.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        name: \"required\",\n                        className: \"p-2 text-black border rounded-md\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"true\",\n                                children: \"true\"\n                            }, void 0, false, {\n                                fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/dashboard/props/create/page.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"false\",\n                                children: \"false\"\n                            }, void 0, false, {\n                                fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/dashboard/props/create/page.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/dashboard/props/create/page.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"p-2 text-white bg-blue-500 rounded-md\",\n                        children: \"Create Prop\"\n                    }, void 0, false, {\n                        fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/dashboard/props/create/page.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/dashboard/props/create/page.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/dashboard/props/create/page.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n_s(create, \"2ev0mvhfKtKU+/wFmg1ua/kU1bg=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZGFzaGJvYXJkL3Byb3BzL2NyZWF0ZS9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ29EO0FBQ25CO0FBRWxCLFNBQVNFOztJQUN0QixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR0gsK0NBQVFBLENBQUM7SUFDdkMsTUFBTUksZUFBZSxPQUFPQztRQUMxQixNQUFNQyxPQUFPRCxTQUFTRSxHQUFHLENBQUM7UUFDMUIsTUFBTUMsY0FBY0gsU0FBU0UsR0FBRyxDQUFDO1FBQ2pDLE1BQU1FLE9BQU9KLFNBQVNFLEdBQUcsQ0FBQztRQUMxQixJQUFJRyxXQUFXTCxTQUFTRSxHQUFHLENBQUM7UUFDNUIsSUFBSUcsYUFBYSxRQUFRO1lBQ3ZCQSxXQUFXO1FBQ2IsT0FBSztZQUNIQSxXQUFXO1FBQ2I7UUFFQSxNQUFNQyxPQUFPLE1BQU1aLHFFQUFVQSxDQUFDO1lBQUNPO1lBQU1FO1lBQWFDO1lBQU1DO1FBQVE7UUFDaEVQLFdBQVc7UUFDWFMsV0FBVztZQUFPQyxPQUFPQyxRQUFRLENBQUNDLElBQUksR0FBRztRQUFtQixHQUFHO0lBQ2pFO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTs7Ozs7OzBCQUNmLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBcUM7Ozs7OzswQkFDbkQsOERBQUNFO2dCQUFLQyxRQUFRaEI7Z0JBQWNhLFdBQVU7O29CQUNuQ2YseUJBQVcsOERBQUNtQjt3QkFBRUosV0FBVTtrQ0FBeUM7Ozs7OztrQ0FDbEUsOERBQUNLO3dCQUFNTCxXQUFVO2tDQUFvQjs7Ozs7O2tDQUNyQyw4REFBQ007d0JBQU1kLE1BQUs7d0JBQU9lLElBQUc7d0JBQU9sQixNQUFLO3dCQUFPVyxXQUFVOzs7Ozs7a0NBQ25ELDhEQUFDSzt3QkFBTUwsV0FBVTtrQ0FBb0I7Ozs7OztrQ0FDckMsOERBQUNNO3dCQUFNZCxNQUFLO3dCQUFPZSxJQUFHO3dCQUFjbEIsTUFBSzt3QkFBY1csV0FBVTs7Ozs7O2tDQUNqRSw4REFBQ0s7d0JBQU1MLFdBQVU7a0NBQW9COzs7Ozs7a0NBQ3JDLDhEQUFDUTt3QkFBT25CLE1BQUs7d0JBQU9XLFdBQVU7OzBDQUM1Qiw4REFBQ1M7Z0NBQU9DLE9BQU07MENBQVM7Ozs7OzswQ0FDdkIsOERBQUNEO2dDQUFPQyxPQUFNOzBDQUFTOzs7Ozs7MENBQ3ZCLDhEQUFDRDtnQ0FBT0MsT0FBTTswQ0FBVTs7Ozs7Ozs7Ozs7O2tDQUUxQiw4REFBQ0w7d0JBQU1MLFdBQVU7a0NBQW9COzs7Ozs7a0NBQ3JDLDhEQUFDUTt3QkFBT25CLE1BQUs7d0JBQVdXLFdBQVU7OzBDQUNoQyw4REFBQ1M7Z0NBQU9DLE9BQU07MENBQU87Ozs7OzswQ0FDckIsOERBQUNEO2dDQUFPQyxPQUFNOzBDQUFROzs7Ozs7Ozs7Ozs7a0NBRXhCLDhEQUFDQzt3QkFBT1gsV0FBVTtrQ0FBd0M7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlsRTtHQTNDd0JoQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2Rhc2hib2FyZC9wcm9wcy9jcmVhdGUvcGFnZS50c3g/YjA1YiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBjcmVhdGVQcm9wIGZyb20gXCJAL2FjdGlvbnMvUHJvcHMvY3JlYXRlUHJvcFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlKCl7XG4gIGNvbnN0IFtzdWNjZXNzLCBzZXRTdWNjZXNzXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGZvcm1EYXRhOiBGb3JtRGF0YSkgPT4ge1xuICAgIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGZvcm1EYXRhLmdldChcImRlc2NyaXB0aW9uXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCB0eXBlID0gZm9ybURhdGEuZ2V0KFwidHlwZVwiKSBhcyBzdHJpbmc7XG4gICAgbGV0IHJlcXVpcmVkID0gZm9ybURhdGEuZ2V0KFwicmVxdWlyZWRcIikgYXMgc3RyaW5nIHwgYm9vbGVhbjtcbiAgICBpZiAocmVxdWlyZWQgPT09IFwidHJ1ZVwiKSB7XG4gICAgICByZXF1aXJlZCA9IHRydWU7XG4gICAgfWVsc2V7XG4gICAgICByZXF1aXJlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBwcm9wID0gYXdhaXQgY3JlYXRlUHJvcCh7bmFtZSwgZGVzY3JpcHRpb24sIHR5cGUsIHJlcXVpcmVkfSk7XG4gICAgc2V0U3VjY2Vzcyh0cnVlKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHt3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvZGFzaGJvYXJkL3Byb3BzJzt9LCAxNTAwKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB3LWZ1bGwgbWF4LXctbWQgcC04IG14LWF1dG8gc3BhY2UteS00IGJnLWdyYXktOTAwIHJvdW5kZWQtbGcgc2hhZG93LW1kXCI+PC9kaXY+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwibWItNCB0ZXh0LXhsIGZvbnQtYm9sZCB0ZXh0LWNlbnRlclwiPkNyZWF0ZSBQcm9wPC9oMT5cbiAgICAgIDxmb3JtIGFjdGlvbj17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHctZnVsbCBtYXgtdy1tZCBwLTggbXgtYXV0byBzcGFjZS15LTQgYmctZ3JheS05MDAgcm91bmRlZC1sZyBzaGFkb3ctbWRcIj5cbiAgICAgICAge3N1Y2Nlc3MgJiYgPHAgY2xhc3NOYW1lPVwicC0yIHRleHQtd2hpdGUgYmctZ3JlZW4tNTAwIHJvdW5kZWQtbWRcIj5Qcm9wIENyZWF0ZWQgU3VjY2Vzc2Z1bGx5PC9wPn1cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1ib2xkXCI+TmFtZTo8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIiBuYW1lPVwibmFtZVwiIGNsYXNzTmFtZT1cInAtMiB0ZXh0LWJsYWNrIGJvcmRlciByb3VuZGVkLW1kXCIgLz5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1ib2xkXCI+RGVzY3JpcHRpb246PC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJkZXNjcmlwdGlvblwiIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNsYXNzTmFtZT1cInAtMiB0ZXh0LWJsYWNrIGJvcmRlciByb3VuZGVkLW1kXCIgLz5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1ib2xkXCI+VHlwZTo8L2xhYmVsPlxuICAgICAgICA8c2VsZWN0IG5hbWU9XCJ0eXBlXCIgY2xhc3NOYW1lPVwicC0yIHRleHQtYmxhY2sgYm9yZGVyIHJvdW5kZWQtbWRcIj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwic3RyaW5nXCI+c3RyaW5nPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm51bWJlclwiPm51bWJlcjwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJib29sZWFuXCI+Ym9vbGVhbjwvb3B0aW9uPlxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1ib2xkXCI+UmVxdWlyZWQ6PC9sYWJlbD5cbiAgICAgICAgPHNlbGVjdCBuYW1lPVwicmVxdWlyZWRcIiBjbGFzc05hbWU9XCJwLTIgdGV4dC1ibGFjayBib3JkZXIgcm91bmRlZC1tZFwiPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ0cnVlXCI+dHJ1ZTwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJmYWxzZVwiPmZhbHNlPC9vcHRpb24+XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInAtMiB0ZXh0LXdoaXRlIGJnLWJsdWUtNTAwIHJvdW5kZWQtbWRcIj5DcmVhdGUgUHJvcDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICApXG59Il0sIm5hbWVzIjpbImNyZWF0ZVByb3AiLCJ1c2VTdGF0ZSIsImNyZWF0ZSIsInN1Y2Nlc3MiLCJzZXRTdWNjZXNzIiwiaGFuZGxlU3VibWl0IiwiZm9ybURhdGEiLCJuYW1lIiwiZ2V0IiwiZGVzY3JpcHRpb24iLCJ0eXBlIiwicmVxdWlyZWQiLCJwcm9wIiwic2V0VGltZW91dCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiZm9ybSIsImFjdGlvbiIsInAiLCJsYWJlbCIsImlucHV0IiwiaWQiLCJzZWxlY3QiLCJvcHRpb24iLCJ2YWx1ZSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/dashboard/props/create/page.tsx\n"));

/***/ })

});