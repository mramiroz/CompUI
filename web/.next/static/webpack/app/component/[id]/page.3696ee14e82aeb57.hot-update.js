"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/component/[id]/page",{

/***/ "(app-pages-browser)/./node_modules/@zabui/comps/dist/styles.css":
/*!***************************************************!*\
  !*** ./node_modules/@zabui/comps/dist/styles.css ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"f87f335a6aba\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9AemFidWkvY29tcHMvZGlzdC9zdHlsZXMuY3NzIiwibWFwcGluZ3MiOiI7QUFBQSwrREFBZSxjQUFjO0FBQzdCLElBQUksSUFBVSxJQUFJLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHphYnVpL2NvbXBzL2Rpc3Qvc3R5bGVzLmNzcz84OWM5Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiZjg3ZjMzNWE2YWJhXCJcbmlmIChtb2R1bGUuaG90KSB7IG1vZHVsZS5ob3QuYWNjZXB0KCkgfVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/@zabui/comps/dist/styles.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/component/[id]/page.tsx":
/*!*****************************************!*\
  !*** ./src/app/component/[id]/page.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Show; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _actions_Comps_getComponentById__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/actions/Comps/getComponentById */ \"(app-pages-browser)/./src/actions/Comps/getComponentById.tsx\");\n/* harmony import */ var _lib_data_props_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/data/props.json */ \"(app-pages-browser)/./src/lib/data/props.json\");\n/* harmony import */ var _components_component_ComponentCode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/component/ComponentCode */ \"(app-pages-browser)/./src/components/component/ComponentCode.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Show() {\n    _s();\n    const param = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams)();\n    const [component, setComponent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [propsValues, setPropsValues] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const propsData = JSON.parse(JSON.stringify(_lib_data_props_json__WEBPACK_IMPORTED_MODULE_4__));\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            const res = await (0,_actions_Comps_getComponentById__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n                id: param.id\n            });\n            setComponent(res);\n            setPropsValues(res.props);\n        };\n        fetchData();\n    }, [\n        param.id\n    ]);\n    const handleInputChange = (prop, e)=>{\n        setPropsValues({\n            ...propsValues,\n            [prop]: e.target.value\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center justify-center m-4 space-y-4\",\n        children: component && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full max-w-md p-4 rounded shadow\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"mb-4 text-4xl font-bold\",\n                    children: component.title\n                }, void 0, false, {\n                    fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/component/[id]/page.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_component_ComponentCode__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    component: component,\n                    props: propsValues\n                }, void 0, false, {\n                    fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/component/[id]/page.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"mb-4 text-base\",\n                    children: component.description\n                }, void 0, false, {\n                    fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/component/[id]/page.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"mb-2 text-2xl font-semibold\",\n                    children: \"Props:\"\n                }, void 0, false, {\n                    fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/component/[id]/page.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"list-disc list-inside\",\n                    children: Object.entries(component.props).map((param)=>{\n                        let [prop, value] = param;\n                        var _propsData_prop;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"mb-1 text-base\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                    children: prop\n                                }, void 0, false, {\n                                    fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/component/[id]/page.tsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 17\n                                }, this),\n                                \": \",\n                                ((_propsData_prop = propsData[prop]) === null || _propsData_prop === void 0 ? void 0 : _propsData_prop.description) || \"No description given\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    value: propsValues[prop],\n                                    onChange: (e)=>handleInputChange(prop, e),\n                                    className: \"p-2 ml-4 text-black border rounded-md\"\n                                }, void 0, false, {\n                                    fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/component/[id]/page.tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, prop, true, {\n                            fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/component/[id]/page.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 15\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/component/[id]/page.tsx\",\n                    lineNumber: 56,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/component/[id]/page.tsx\",\n            lineNumber: 50,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/component/[id]/page.tsx\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, this);\n}\n_s(Show, \"uIXZmW893/1PDHfUxo4E6CCiPaM=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams\n    ];\n});\n_c = Show;\nvar _c;\n$RefreshReg$(_c, \"Show\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50L1tpZF0vcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUM0QztBQUNEO0FBR3FCO0FBQ2Q7QUFDZTtBQW9CbEQsU0FBU007O0lBQ3RCLE1BQU1DLFFBQVFMLDBEQUFTQTtJQUN2QixNQUFNLENBQUNNLFdBQVdDLGFBQWEsR0FBR1IsK0NBQVFBLENBQXVCO0lBQ2pFLE1BQU0sQ0FBQ1MsYUFBYUMsZUFBZSxHQUFHViwrQ0FBUUEsQ0FBMEIsQ0FBQztJQUN6RSxNQUFNVyxZQUF3QkMsS0FBS0MsS0FBSyxDQUFDRCxLQUFLRSxTQUFTLENBQUNYLGlEQUFhQTtJQUVyRUosZ0RBQVNBLENBQUM7UUFDUixNQUFNZ0IsWUFBWTtZQUNoQixNQUFNQyxNQUFNLE1BQU1kLDJFQUFnQkEsQ0FBQztnQkFBQ2UsSUFBSVgsTUFBTVcsRUFBRTtZQUFVO1lBQzFEVCxhQUFhUTtZQUNiTixlQUFlTSxJQUFJRSxLQUFLO1FBQzFCO1FBQ0FIO0lBQ0YsR0FBRztRQUFDVCxNQUFNVyxFQUFFO0tBQUM7SUFFYixNQUFNRSxvQkFBb0IsQ0FBQ0MsTUFBY0M7UUFDdkNYLGVBQWU7WUFBQyxHQUFHRCxXQUFXO1lBQUUsQ0FBQ1csS0FBSyxFQUFFQyxFQUFFQyxNQUFNLENBQUNDLEtBQUs7UUFBQTtJQUN4RDtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNabEIsMkJBQ0MsOERBQUNpQjtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0M7b0JBQUdELFdBQVU7OEJBQTJCbEIsVUFBVW9CLEtBQUs7Ozs7Ozs4QkFDeEQsOERBQUN2QiwyRUFBYUE7b0JBQUNHLFdBQVdBO29CQUFXVyxPQUFPVDs7Ozs7OzhCQUM1Qyw4REFBQ21CO29CQUFFSCxXQUFVOzhCQUFrQmxCLFVBQVVzQixXQUFXOzs7Ozs7OEJBRXBELDhEQUFDQztvQkFBR0wsV0FBVTs4QkFBOEI7Ozs7Ozs4QkFDNUMsOERBQUNNO29CQUFHTixXQUFVOzhCQUNYTyxPQUFPQyxPQUFPLENBQUMxQixVQUFVVyxLQUFLLEVBQUVnQixHQUFHLENBQUM7NEJBQUMsQ0FBQ2QsTUFBTUcsTUFBTTs0QkFFckJaOzZDQUQ1Qiw4REFBQ3dCOzRCQUFjVixXQUFVOzs4Q0FDdkIsOERBQUNXOzhDQUFRaEI7Ozs7OztnQ0FBYztnQ0FBR1QsRUFBQUEsa0JBQUFBLFNBQVMsQ0FBQ1MsS0FBSyxjQUFmVCxzQ0FBQUEsZ0JBQWlCa0IsV0FBVyxLQUFJOzhDQUMxRCw4REFBQ1E7b0NBQ0NDLE1BQUs7b0NBQ0xmLE9BQU9kLFdBQVcsQ0FBQ1csS0FBSztvQ0FDeEJtQixVQUFVLENBQUNsQixJQUFNRixrQkFBa0JDLE1BQU1DO29DQUN6Q0ksV0FBVTs7Ozs7OzsyQkFOTEw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQnZCO0dBOUN3QmY7O1FBQ1JKLHNEQUFTQTs7O0tBRERJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50L1tpZF0vcGFnZS50c3g/M2IzMyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjsgXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHt1c2VQYXJhbXMgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xuaW1wb3J0IENvcHkgIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvY29tcG9uZW50L0NvcHknXG5pbXBvcnQgKiBhcyBDb21wcyBmcm9tICdAemFidWkvY29tcHMnO1xuaW1wb3J0IGdldENvbXBvbmVudEJ5SWQgZnJvbSAnQC9hY3Rpb25zL0NvbXBzL2dldENvbXBvbmVudEJ5SWQnO1xuaW1wb3J0IHByb3BzRGF0YUpTT04gZnJvbSAnQC9saWIvZGF0YS9wcm9wcy5qc29uJztcbmltcG9ydCBDb21wb25lbnRDb2RlIGZyb20gJ0AvY29tcG9uZW50cy9jb21wb25lbnQvQ29tcG9uZW50Q29kZSc7XG5cbmludGVyZmFjZSBQcm9wc0RhdGF7XG4gIFtrZXk6IHN0cmluZ106IHtcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgIHR5cGU6IHN0cmluZztcbiAgfVxufVxuXG5pbnRlcmZhY2UgQ29tcG9uZW50RGF0YSB7XG4gIF9pZDogc3RyaW5nO1xuICBjb2RlOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGNhdGVnb3J5OiBzdHJpbmc7XG4gIGNvbXBvbmVudDogc3RyaW5nO1xuICBpbXBvcnQ6IHN0cmluZztcbiAgcHJvcHM6IGFueTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2hvdygpIHtcbiAgY29uc3QgcGFyYW0gPSB1c2VQYXJhbXMoKTtcbiAgY29uc3QgW2NvbXBvbmVudCwgc2V0Q29tcG9uZW50XSA9IHVzZVN0YXRlPENvbXBvbmVudERhdGEgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW3Byb3BzVmFsdWVzLCBzZXRQcm9wc1ZhbHVlc10gPSB1c2VTdGF0ZTx7W2tleTogc3RyaW5nXTogc3RyaW5nfT4oe30pO1xuICBjb25zdCBwcm9wc0RhdGEgOiBQcm9wc0RhdGEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHByb3BzRGF0YUpTT04pKTtcbiAgXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZ2V0Q29tcG9uZW50QnlJZCh7aWQ6IHBhcmFtLmlkIGFzIHN0cmluZ30pO1xuICAgICAgc2V0Q29tcG9uZW50KHJlcyBhcyBDb21wb25lbnREYXRhKTtcbiAgICAgIHNldFByb3BzVmFsdWVzKHJlcy5wcm9wcyk7XG4gICAgfVxuICAgIGZldGNoRGF0YSgpO1xuICB9LCBbcGFyYW0uaWRdKTtcblxuICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChwcm9wOiBzdHJpbmcsIGU6IGFueSkgPT4ge1xuICAgIHNldFByb3BzVmFsdWVzKHsuLi5wcm9wc1ZhbHVlcywgW3Byb3BdOiBlLnRhcmdldC52YWx1ZX0pO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG0tNCBzcGFjZS15LTRcIj5cbiAgICAgIHtjb21wb25lbnQgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy1tZCBwLTQgcm91bmRlZCBzaGFkb3dcIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdtYi00IHRleHQtNHhsIGZvbnQtYm9sZCc+e2NvbXBvbmVudC50aXRsZX08L2gxPlxuICAgICAgICAgIDxDb21wb25lbnRDb2RlIGNvbXBvbmVudD17Y29tcG9uZW50fSBwcm9wcz17cHJvcHNWYWx1ZXN9Lz5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi00IHRleHQtYmFzZVwiPntjb21wb25lbnQuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgIFxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJtYi0yIHRleHQtMnhsIGZvbnQtc2VtaWJvbGRcIj5Qcm9wczo8L2gyPlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWRpc2MgbGlzdC1pbnNpZGVcIj5cbiAgICAgICAgICAgIHtPYmplY3QuZW50cmllcyhjb21wb25lbnQucHJvcHMpLm1hcCgoW3Byb3AsIHZhbHVlXSkgPT4gKFxuICAgICAgICAgICAgICA8bGkga2V5PXtwcm9wfSBjbGFzc05hbWU9XCJtYi0xIHRleHQtYmFzZVwiPlxuICAgICAgICAgICAgICAgIDxzdHJvbmc+e3Byb3B9PC9zdHJvbmc+OiB7cHJvcHNEYXRhW3Byb3BdPy5kZXNjcmlwdGlvbiB8fCBcIk5vIGRlc2NyaXB0aW9uIGdpdmVuXCJ9XG4gICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzVmFsdWVzW3Byb3BdfSBcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlSW5wdXRDaGFuZ2UocHJvcCwgZSl9IFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdwLTIgbWwtNCB0ZXh0LWJsYWNrIGJvcmRlciByb3VuZGVkLW1kJ1xuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuXG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VQYXJhbXMiLCJnZXRDb21wb25lbnRCeUlkIiwicHJvcHNEYXRhSlNPTiIsIkNvbXBvbmVudENvZGUiLCJTaG93IiwicGFyYW0iLCJjb21wb25lbnQiLCJzZXRDb21wb25lbnQiLCJwcm9wc1ZhbHVlcyIsInNldFByb3BzVmFsdWVzIiwicHJvcHNEYXRhIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwiZmV0Y2hEYXRhIiwicmVzIiwiaWQiLCJwcm9wcyIsImhhbmRsZUlucHV0Q2hhbmdlIiwicHJvcCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwidGl0bGUiLCJwIiwiZGVzY3JpcHRpb24iLCJoMiIsInVsIiwiT2JqZWN0IiwiZW50cmllcyIsIm1hcCIsImxpIiwic3Ryb25nIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/component/[id]/page.tsx\n"));

/***/ })

});