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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ create; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _actions_Props_createProp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/actions/Props/createProp */ \"(app-pages-browser)/./src/actions/Props/createProp.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction create() {\n    _s();\n    const [success, setSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const handleSubmit = async (formData)=>{\n        const name = formData.get(\"name\");\n        const description = formData.get(\"description\");\n        const type = formData.get(\"type\");\n        let required = formData.get(\"required\");\n        if (required === \"true\") {\n            required = true;\n        } else {\n            required = false;\n        }\n        const prop = await (0,_actions_Props_createProp__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            name,\n            description,\n            type,\n            required\n        });\n        setSuccess(true);\n        setTimeout(()=>{\n            window.location.href = \"/dashboard/props\";\n        }, 1500);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col w-full max-w-md p-8 mx-auto space-y-4 bg-gray-900 rounded-lg shadow-md\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"mb-4 text-xl font-bold text-center\",\n                    children: \"Create Prop\"\n                }, void 0, false, {\n                    fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/dashboard/props/create/page.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    action: handleSubmit,\n                    className: \"flex flex-col w-full max-w-md p-8 mx-auto space-y-4 bg-gray-900 rounded-lg shadow-md\",\n                    children: [\n                        success && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"p-2 text-white bg-green-500 rounded-md\",\n                            children: \"Prop Created Successfully\"\n                        }, void 0, false, {\n                            fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/dashboard/props/create/page.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 23\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"text-sm font-bold\",\n                            children: \"Name:\"\n                        }, void 0, false, {\n                            fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/dashboard/props/create/page.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            id: \"name\",\n                            name: \"name\",\n                            className: \"p-2 text-black border rounded-md\"\n                        }, void 0, false, {\n                            fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/dashboard/props/create/page.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"text-sm font-bold\",\n                            children: \"Description:\"\n                        }, void 0, false, {\n                            fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/dashboard/props/create/page.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            id: \"description\",\n                            name: \"description\",\n                            className: \"p-2 text-black border rounded-md\"\n                        }, void 0, false, {\n                            fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/dashboard/props/create/page.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"text-sm font-bold\",\n                            children: \"Type:\"\n                        }, void 0, false, {\n                            fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/dashboard/props/create/page.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                            name: \"type\",\n                            className: \"p-2 text-black border rounded-md\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"string\",\n                                    children: \"string\"\n                                }, void 0, false, {\n                                    fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/dashboard/props/create/page.tsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"number\",\n                                    children: \"number\"\n                                }, void 0, false, {\n                                    fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/dashboard/props/create/page.tsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"boolean\",\n                                    children: \"boolean\"\n                                }, void 0, false, {\n                                    fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/dashboard/props/create/page.tsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/dashboard/props/create/page.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"text-sm font-bold\",\n                            children: \"Required:\"\n                        }, void 0, false, {\n                            fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/dashboard/props/create/page.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                            name: \"required\",\n                            className: \"p-2 text-black border rounded-md\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"true\",\n                                    children: \"true\"\n                                }, void 0, false, {\n                                    fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/dashboard/props/create/page.tsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"false\",\n                                    children: \"false\"\n                                }, void 0, false, {\n                                    fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/dashboard/props/create/page.tsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/dashboard/props/create/page.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"p-2 text-white bg-blue-500 rounded-md\",\n                            children: \"Create Prop\"\n                        }, void 0, false, {\n                            fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/dashboard/props/create/page.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/dashboard/props/create/page.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/dashboard/props/create/page.tsx\",\n            lineNumber: 25,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/dashboard/props/create/page.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n_s(create, \"2ev0mvhfKtKU+/wFmg1ua/kU1bg=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZGFzaGJvYXJkL3Byb3BzL2NyZWF0ZS9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ29EO0FBQ25CO0FBRWxCLFNBQVNFOztJQUN0QixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR0gsK0NBQVFBLENBQUM7SUFDdkMsTUFBTUksZUFBZSxPQUFPQztRQUMxQixNQUFNQyxPQUFPRCxTQUFTRSxHQUFHLENBQUM7UUFDMUIsTUFBTUMsY0FBY0gsU0FBU0UsR0FBRyxDQUFDO1FBQ2pDLE1BQU1FLE9BQU9KLFNBQVNFLEdBQUcsQ0FBQztRQUMxQixJQUFJRyxXQUFXTCxTQUFTRSxHQUFHLENBQUM7UUFDNUIsSUFBSUcsYUFBYSxRQUFRO1lBQ3ZCQSxXQUFXO1FBQ2IsT0FBSztZQUNIQSxXQUFXO1FBQ2I7UUFFQSxNQUFNQyxPQUFPLE1BQU1aLHFFQUFVQSxDQUFDO1lBQUNPO1lBQU1FO1lBQWFDO1lBQU1DO1FBQVE7UUFDaEVQLFdBQVc7UUFDWFMsV0FBVztZQUFPQyxPQUFPQyxRQUFRLENBQUNDLElBQUksR0FBRztRQUFtQixHQUFHO0lBQ2pFO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUViLDhEQUFDQztvQkFBR0QsV0FBVTs4QkFBcUM7Ozs7Ozs4QkFDbkQsOERBQUNFO29CQUFLQyxRQUFRaEI7b0JBQWNhLFdBQVU7O3dCQUNuQ2YseUJBQVcsOERBQUNtQjs0QkFBRUosV0FBVTtzQ0FBeUM7Ozs7OztzQ0FDbEUsOERBQUNLOzRCQUFNTCxXQUFVO3NDQUFvQjs7Ozs7O3NDQUNyQyw4REFBQ007NEJBQU1kLE1BQUs7NEJBQU9lLElBQUc7NEJBQU9sQixNQUFLOzRCQUFPVyxXQUFVOzs7Ozs7c0NBQ25ELDhEQUFDSzs0QkFBTUwsV0FBVTtzQ0FBb0I7Ozs7OztzQ0FDckMsOERBQUNNOzRCQUFNZCxNQUFLOzRCQUFPZSxJQUFHOzRCQUFjbEIsTUFBSzs0QkFBY1csV0FBVTs7Ozs7O3NDQUNqRSw4REFBQ0s7NEJBQU1MLFdBQVU7c0NBQW9COzs7Ozs7c0NBQ3JDLDhEQUFDUTs0QkFBT25CLE1BQUs7NEJBQU9XLFdBQVU7OzhDQUM1Qiw4REFBQ1M7b0NBQU9DLE9BQU07OENBQVM7Ozs7Ozs4Q0FDdkIsOERBQUNEO29DQUFPQyxPQUFNOzhDQUFTOzs7Ozs7OENBQ3ZCLDhEQUFDRDtvQ0FBT0MsT0FBTTs4Q0FBVTs7Ozs7Ozs7Ozs7O3NDQUUxQiw4REFBQ0w7NEJBQU1MLFdBQVU7c0NBQW9COzs7Ozs7c0NBQ3JDLDhEQUFDUTs0QkFBT25CLE1BQUs7NEJBQVdXLFdBQVU7OzhDQUNoQyw4REFBQ1M7b0NBQU9DLE9BQU07OENBQU87Ozs7Ozs4Q0FDckIsOERBQUNEO29DQUFPQyxPQUFNOzhDQUFROzs7Ozs7Ozs7Ozs7c0NBRXhCLDhEQUFDQzs0QkFBT1gsV0FBVTtzQ0FBd0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3BFO0dBN0N3QmhCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZGFzaGJvYXJkL3Byb3BzL2NyZWF0ZS9wYWdlLnRzeD9iMDViIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IGNyZWF0ZVByb3AgZnJvbSBcIkAvYWN0aW9ucy9Qcm9wcy9jcmVhdGVQcm9wXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGUoKXtcbiAgY29uc3QgW3N1Y2Nlc3MsIHNldFN1Y2Nlc3NdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZm9ybURhdGE6IEZvcm1EYXRhKSA9PiB7XG4gICAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZm9ybURhdGEuZ2V0KFwiZGVzY3JpcHRpb25cIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IHR5cGUgPSBmb3JtRGF0YS5nZXQoXCJ0eXBlXCIpIGFzIHN0cmluZztcbiAgICBsZXQgcmVxdWlyZWQgPSBmb3JtRGF0YS5nZXQoXCJyZXF1aXJlZFwiKSBhcyBzdHJpbmcgfCBib29sZWFuO1xuICAgIGlmIChyZXF1aXJlZCA9PT0gXCJ0cnVlXCIpIHtcbiAgICAgIHJlcXVpcmVkID0gdHJ1ZTtcbiAgICB9ZWxzZXtcbiAgICAgIHJlcXVpcmVkID0gZmFsc2U7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHByb3AgPSBhd2FpdCBjcmVhdGVQcm9wKHtuYW1lLCBkZXNjcmlwdGlvbiwgdHlwZSwgcmVxdWlyZWR9KTtcbiAgICBzZXRTdWNjZXNzKHRydWUpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge3dpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9kYXNoYm9hcmQvcHJvcHMnO30sIDE1MDApXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHctZnVsbCBtYXgtdy1tZCBwLTggbXgtYXV0byBzcGFjZS15LTQgYmctZ3JheS05MDAgcm91bmRlZC1sZyBzaGFkb3ctbWRcIj5cblxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwibWItNCB0ZXh0LXhsIGZvbnQtYm9sZCB0ZXh0LWNlbnRlclwiPkNyZWF0ZSBQcm9wPC9oMT5cbiAgICAgICAgPGZvcm0gYWN0aW9uPXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdy1mdWxsIG1heC13LW1kIHAtOCBteC1hdXRvIHNwYWNlLXktNCBiZy1ncmF5LTkwMCByb3VuZGVkLWxnIHNoYWRvdy1tZFwiPlxuICAgICAgICAgIHtzdWNjZXNzICYmIDxwIGNsYXNzTmFtZT1cInAtMiB0ZXh0LXdoaXRlIGJnLWdyZWVuLTUwMCByb3VuZGVkLW1kXCI+UHJvcCBDcmVhdGVkIFN1Y2Nlc3NmdWxseTwvcD59XG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1ib2xkXCI+TmFtZTo8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibmFtZVwiIG5hbWU9XCJuYW1lXCIgY2xhc3NOYW1lPVwicC0yIHRleHQtYmxhY2sgYm9yZGVyIHJvdW5kZWQtbWRcIiAvPlxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtYm9sZFwiPkRlc2NyaXB0aW9uOjwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJkZXNjcmlwdGlvblwiIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNsYXNzTmFtZT1cInAtMiB0ZXh0LWJsYWNrIGJvcmRlciByb3VuZGVkLW1kXCIgLz5cbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJvbGRcIj5UeXBlOjwvbGFiZWw+XG4gICAgICAgICAgPHNlbGVjdCBuYW1lPVwidHlwZVwiIGNsYXNzTmFtZT1cInAtMiB0ZXh0LWJsYWNrIGJvcmRlciByb3VuZGVkLW1kXCI+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwic3RyaW5nXCI+c3RyaW5nPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibnVtYmVyXCI+bnVtYmVyPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYm9vbGVhblwiPmJvb2xlYW48L29wdGlvbj5cbiAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJvbGRcIj5SZXF1aXJlZDo8L2xhYmVsPlxuICAgICAgICAgIDxzZWxlY3QgbmFtZT1cInJlcXVpcmVkXCIgY2xhc3NOYW1lPVwicC0yIHRleHQtYmxhY2sgYm9yZGVyIHJvdW5kZWQtbWRcIj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ0cnVlXCI+dHJ1ZTwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImZhbHNlXCI+ZmFsc2U8L29wdGlvbj5cbiAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInAtMiB0ZXh0LXdoaXRlIGJnLWJsdWUtNTAwIHJvdW5kZWQtbWRcIj5DcmVhdGUgUHJvcDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufSJdLCJuYW1lcyI6WyJjcmVhdGVQcm9wIiwidXNlU3RhdGUiLCJjcmVhdGUiLCJzdWNjZXNzIiwic2V0U3VjY2VzcyIsImhhbmRsZVN1Ym1pdCIsImZvcm1EYXRhIiwibmFtZSIsImdldCIsImRlc2NyaXB0aW9uIiwidHlwZSIsInJlcXVpcmVkIiwicHJvcCIsInNldFRpbWVvdXQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImZvcm0iLCJhY3Rpb24iLCJwIiwibGFiZWwiLCJpbnB1dCIsImlkIiwic2VsZWN0Iiwib3B0aW9uIiwidmFsdWUiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/dashboard/props/create/page.tsx\n"));

/***/ })

});