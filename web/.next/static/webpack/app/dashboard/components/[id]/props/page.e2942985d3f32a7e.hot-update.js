"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/components/[id]/props/page",{

/***/ "(app-pages-browser)/./node_modules/@zabui/comps/dist/styles.css":
/*!***************************************************!*\
  !*** ./node_modules/@zabui/comps/dist/styles.css ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"45981ee984d2\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9AemFidWkvY29tcHMvZGlzdC9zdHlsZXMuY3NzIiwibWFwcGluZ3MiOiI7QUFBQSwrREFBZSxjQUFjO0FBQzdCLElBQUksSUFBVSxJQUFJLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHphYnVpL2NvbXBzL2Rpc3Qvc3R5bGVzLmNzcz84OWM5Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiNDU5ODFlZTk4NGQyXCJcbmlmIChtb2R1bGUuaG90KSB7IG1vZHVsZS5ob3QuYWNjZXB0KCkgfVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/@zabui/comps/dist/styles.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/dashboard/LabelComponentsProps.tsx":
/*!***********************************************************!*\
  !*** ./src/components/dashboard/LabelComponentsProps.tsx ***!
  \***********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Label; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _zabui_comps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @zabui/comps */ \"(app-pages-browser)/./node_modules/@zabui/comps/dist/index.js\");\n/* harmony import */ var _actions_Props_updateCompProp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/actions/Props/updateCompProp */ \"(app-pages-browser)/./src/actions/Props/updateCompProp.tsx\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Label(param) {\n    let { prop, onDelete } = param;\n    _s();\n    const [value, setValue] = useState(prop.value);\n    const update = async ()=>{\n        await (0,_actions_Props_updateCompProp__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n            id: prop._id,\n            value: prop.value\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col mb-4 border rounded-lg\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex justify-between p-2 flex-col md:flex-row\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-4 md:mb-0\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"text-xl font-bold\",\n                            children: prop.name\n                        }, void 0, false, {\n                            fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/components/dashboard/LabelComponentsProps.tsx\",\n                            lineNumber: 14,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-base text-gray-700\",\n                            children: prop.description\n                        }, void 0, false, {\n                            fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/components/dashboard/LabelComponentsProps.tsx\",\n                            lineNumber: 15,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/components/dashboard/LabelComponentsProps.tsx\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex space-x-2 flex-wrap\",\n                    children: [\n                        prop.type === \"string\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            className: \"p-2 text-black border rounded-md mb-4 md:mb-0\",\n                            value: prop.value,\n                            onChange: (e)=>setValue(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/components/dashboard/LabelComponentsProps.tsx\",\n                            lineNumber: 18,\n                            columnNumber: 39\n                        }, this),\n                        prop.type === \"number\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"number\",\n                            className: \"p-2 text-black border rounded-md mb-4 md:mb-0\",\n                            value: prop.value,\n                            onChange: (e)=>setValue(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/components/dashboard/LabelComponentsProps.tsx\",\n                            lineNumber: 19,\n                            columnNumber: 39\n                        }, this),\n                        prop.type === \"boolean\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"checkbox\",\n                            className: \"p-2 text-black border rounded-md mb-4 md:mb-0\",\n                            value: prop.value,\n                            onChange: (e)=>setValue(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/components/dashboard/LabelComponentsProps.tsx\",\n                            lineNumber: 20,\n                            columnNumber: 40\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_zabui_comps__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                            onClick: update,\n                            backColor: \"darkblue\",\n                            children: \"Update\"\n                        }, void 0, false, {\n                            fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/components/dashboard/LabelComponentsProps.tsx\",\n                            lineNumber: 21,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_zabui_comps__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                            onClick: onDelete,\n                            backColor: \"red\",\n                            children: \"Delete\"\n                        }, void 0, false, {\n                            fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/components/dashboard/LabelComponentsProps.tsx\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/components/dashboard/LabelComponentsProps.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/components/dashboard/LabelComponentsProps.tsx\",\n            lineNumber: 12,\n            columnNumber: 7\n        }, this)\n    }, prop._id, false, {\n        fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/components/dashboard/LabelComponentsProps.tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n_s(Label, \"dAL0APRqn+d9yZ4Qf8YyA0GCV2Y=\");\n_c = Label;\nvar _c;\n$RefreshReg$(_c, \"Label\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2Rhc2hib2FyZC9MYWJlbENvbXBvbmVudHNQcm9wcy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQW9DO0FBQ3lCO0FBRzlDLFNBQVNFLE1BQU0sS0FBNEM7UUFBNUMsRUFBQ0MsSUFBSSxFQUFFQyxRQUFRLEVBQTZCLEdBQTVDOztJQUM1QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0MsU0FBU0osS0FBS0UsS0FBSztJQUM3QyxNQUFNRyxTQUFTO1FBQ2IsTUFBTVAseUVBQWVBLENBQUM7WUFBQ1EsSUFBSU4sS0FBS08sR0FBRztZQUFFTCxPQUFPRixLQUFLRSxLQUFLO1FBQUE7SUFDeEQ7SUFDQSxxQkFDRSw4REFBQ007UUFBbUJDLFdBQVU7a0JBQzVCLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDQzs0QkFBR0QsV0FBVTtzQ0FBcUJULEtBQUtXLElBQUk7Ozs7OztzQ0FDNUMsOERBQUNDOzRCQUFFSCxXQUFVO3NDQUEyQlQsS0FBS2EsV0FBVzs7Ozs7Ozs7Ozs7OzhCQUUxRCw4REFBQ0w7b0JBQUlDLFdBQVU7O3dCQUNaVCxLQUFLYyxJQUFJLEtBQUssMEJBQWEsOERBQUNDOzRCQUFNRCxNQUFLOzRCQUFPTCxXQUFVOzRCQUFnRFAsT0FBT0YsS0FBS0UsS0FBSzs0QkFBRWMsVUFBVUMsQ0FBQUEsSUFBS2QsU0FBU2MsRUFBRUMsTUFBTSxDQUFDaEIsS0FBSzs7Ozs7O3dCQUNqS0YsS0FBS2MsSUFBSSxLQUFLLDBCQUFhLDhEQUFDQzs0QkFBTUQsTUFBSzs0QkFBU0wsV0FBVTs0QkFBZ0RQLE9BQU9GLEtBQUtFLEtBQUs7NEJBQUVjLFVBQVVDLENBQUFBLElBQUtkLFNBQVNjLEVBQUVDLE1BQU0sQ0FBQ2hCLEtBQUs7Ozs7Ozt3QkFDbktGLEtBQUtjLElBQUksS0FBSywyQkFBYyw4REFBQ0M7NEJBQU1ELE1BQUs7NEJBQVdMLFdBQVU7NEJBQWdEUCxPQUFPRixLQUFLRSxLQUFLOzRCQUFFYyxVQUFVQyxDQUFBQSxJQUFLZCxTQUFTYyxFQUFFQyxNQUFNLENBQUNoQixLQUFLOzs7Ozs7c0NBQ3ZLLDhEQUFDTCxnREFBTUE7NEJBQUNzQixTQUFTZDs0QkFBUWUsV0FBVTtzQ0FBVzs7Ozs7O3NDQUc5Qyw4REFBQ3ZCLGdEQUFNQTs0QkFBQ3NCLFNBQVNsQjs0QkFBVW1CLFdBQVU7c0NBQU07Ozs7Ozs7Ozs7Ozs7Ozs7OztPQWJ2Q3BCLEtBQUtPLEdBQUc7Ozs7O0FBb0J0QjtHQTFCd0JSO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2Rhc2hib2FyZC9MYWJlbENvbXBvbmVudHNQcm9wcy50c3g/ZmM5MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0J1dHRvbn0gZnJvbSBcIkB6YWJ1aS9jb21wc1wiO1xuaW1wb3J0IHVwZGF0ZUNvbXBQcm9wcyBmcm9tIFwiQC9hY3Rpb25zL1Byb3BzL3VwZGF0ZUNvbXBQcm9wXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGFiZWwoe3Byb3AsIG9uRGVsZXRlfToge3Byb3A6IGFueSwgb25EZWxldGU6IGFueX0pe1xuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKHByb3AudmFsdWUpO1xuICBjb25zdCB1cGRhdGUgPSBhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgdXBkYXRlQ29tcFByb3BzKHtpZDogcHJvcC5faWQsIHZhbHVlOiBwcm9wLnZhbHVlfSk7XG4gIH1cbiAgcmV0dXJuKFxuICAgIDxkaXYga2V5PXtwcm9wLl9pZH0gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtYi00IGJvcmRlciByb3VuZGVkLWxnXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIHAtMiBmbGV4LWNvbCBtZDpmbGV4LXJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTQgbWQ6bWItMFwiPlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZFwiPntwcm9wLm5hbWV9PC9oMz5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgdGV4dC1ncmF5LTcwMFwiPntwcm9wLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTIgZmxleC13cmFwXCI+XG4gICAgICAgICAge3Byb3AudHlwZSA9PT0gJ3N0cmluZycgJiYgKDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cInAtMiB0ZXh0LWJsYWNrIGJvcmRlciByb3VuZGVkLW1kIG1iLTQgbWQ6bWItMFwiIHZhbHVlPXtwcm9wLnZhbHVlfSBvbkNoYW5nZT17ZSA9PiBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSl9Lz4pfVxuICAgICAgICAgIHtwcm9wLnR5cGUgPT09ICdudW1iZXInICYmICg8aW5wdXQgdHlwZT1cIm51bWJlclwiIGNsYXNzTmFtZT1cInAtMiB0ZXh0LWJsYWNrIGJvcmRlciByb3VuZGVkLW1kIG1iLTQgbWQ6bWItMFwiIHZhbHVlPXtwcm9wLnZhbHVlfSBvbkNoYW5nZT17ZSA9PiBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSl9Lz4pfVxuICAgICAgICAgIHtwcm9wLnR5cGUgPT09ICdib29sZWFuJyAmJiAoPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzTmFtZT1cInAtMiB0ZXh0LWJsYWNrIGJvcmRlciByb3VuZGVkLW1kIG1iLTQgbWQ6bWItMFwiIHZhbHVlPXtwcm9wLnZhbHVlfSBvbkNoYW5nZT17ZSA9PiBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSl9Lz4pfVxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dXBkYXRlfSBiYWNrQ29sb3I9XCJkYXJrYmx1ZVwiPlxuICAgICAgICAgICAgVXBkYXRlXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkRlbGV0ZX0gYmFja0NvbG9yPVwicmVkXCI+XG4gICAgICAgICAgICBEZWxldGVcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufSJdLCJuYW1lcyI6WyJCdXR0b24iLCJ1cGRhdGVDb21wUHJvcHMiLCJMYWJlbCIsInByb3AiLCJvbkRlbGV0ZSIsInZhbHVlIiwic2V0VmFsdWUiLCJ1c2VTdGF0ZSIsInVwZGF0ZSIsImlkIiwiX2lkIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDMiLCJuYW1lIiwicCIsImRlc2NyaXB0aW9uIiwidHlwZSIsImlucHV0Iiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0Iiwib25DbGljayIsImJhY2tDb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/dashboard/LabelComponentsProps.tsx\n"));

/***/ })

});