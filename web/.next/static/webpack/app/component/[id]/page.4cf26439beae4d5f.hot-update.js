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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"866f58d663e7\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9AemFidWkvY29tcHMvZGlzdC9zdHlsZXMuY3NzIiwibWFwcGluZ3MiOiI7QUFBQSwrREFBZSxjQUFjO0FBQzdCLElBQUksSUFBVSxJQUFJLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHphYnVpL2NvbXBzL2Rpc3Qvc3R5bGVzLmNzcz84OWM5Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiODY2ZjU4ZDY2M2U3XCJcbmlmIChtb2R1bGUuaG90KSB7IG1vZHVsZS5ob3QuYWNjZXB0KCkgfVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/@zabui/comps/dist/styles.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/component/[id]/page.tsx":
/*!*****************************************!*\
  !*** ./src/app/component/[id]/page.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Show; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _actions_Comps_getComponentById__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/actions/Comps/getComponentById */ \"(app-pages-browser)/./src/actions/Comps/getComponentById.tsx\");\n/* harmony import */ var _lib_data_props_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/data/props.json */ \"(app-pages-browser)/./src/lib/data/props.json\");\n/* harmony import */ var _components_component_ComponentCode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/component/ComponentCode */ \"(app-pages-browser)/./src/components/component/ComponentCode.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Show() {\n    _s();\n    const param = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams)();\n    const [component, setComponent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [propsValues, setPropsValues] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const propsData = JSON.parse(JSON.stringify(_lib_data_props_json__WEBPACK_IMPORTED_MODULE_4__));\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            const res = await (0,_actions_Comps_getComponentById__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n                id: param.id\n            });\n            setComponent(res);\n            setPropsValues(res.props);\n        };\n        fetchData();\n    }, [\n        param.id\n    ]);\n    const handleInputChange = (prop, e)=>{\n        setPropsValues({\n            ...propsValues,\n            [prop]: e.target.value\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center justify-center m-4 space-y-4\",\n        children: component && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full max-w-md p-4 rounded shadow\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"mb-4 text-4xl font-bold\",\n                    children: component.title\n                }, void 0, false, {\n                    fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/component/[id]/page.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_component_ComponentCode__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    component: component,\n                    props: propsValues\n                }, void 0, false, {\n                    fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/component/[id]/page.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"mb-4 text-base\",\n                    children: component.description\n                }, void 0, false, {\n                    fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/component/[id]/page.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"mb-2 text-2xl font-semibold\",\n                    children: \"Props:\"\n                }, void 0, false, {\n                    fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/component/[id]/page.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"list-disc list-inside\",\n                    children: Object.entries(component.props).map((param)=>{\n                        let [prop, value] = param;\n                        var _propsData_prop;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"mb-1 text-base\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                    style: {\n                                        color: propsValues[prop]\n                                    },\n                                    children: prop\n                                }, void 0, false, {\n                                    fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/component/[id]/page.tsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 17\n                                }, this),\n                                \": \",\n                                ((_propsData_prop = propsData[prop]) === null || _propsData_prop === void 0 ? void 0 : _propsData_prop.description) || \"No description given\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    value: propsValues[prop],\n                                    onChange: (e)=>handleInputChange(prop, e),\n                                    style: {\n                                        backgroundColor: propsValues[prop]\n                                    },\n                                    className: \"p-2 text-black border rounded-md\"\n                                }, void 0, false, {\n                                    fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/component/[id]/page.tsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, prop, true, {\n                            fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/component/[id]/page.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 15\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/component/[id]/page.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/component/[id]/page.tsx\",\n            lineNumber: 50,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/component/[id]/page.tsx\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, this);\n}\n_s(Show, \"uIXZmW893/1PDHfUxo4E6CCiPaM=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams\n    ];\n});\n_c = Show;\nvar _c;\n$RefreshReg$(_c, \"Show\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50L1tpZF0vcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUM0QztBQUNEO0FBR3FCO0FBQ2Q7QUFDZTtBQW9CbEQsU0FBU007O0lBQ3RCLE1BQU1DLFFBQVFMLDBEQUFTQTtJQUN2QixNQUFNLENBQUNNLFdBQVdDLGFBQWEsR0FBR1IsK0NBQVFBLENBQXVCO0lBQ2pFLE1BQU0sQ0FBQ1MsYUFBYUMsZUFBZSxHQUFHViwrQ0FBUUEsQ0FBMEIsQ0FBQztJQUN6RSxNQUFNVyxZQUF3QkMsS0FBS0MsS0FBSyxDQUFDRCxLQUFLRSxTQUFTLENBQUNYLGlEQUFhQTtJQUVyRUosZ0RBQVNBLENBQUM7UUFDUixNQUFNZ0IsWUFBWTtZQUNoQixNQUFNQyxNQUFNLE1BQU1kLDJFQUFnQkEsQ0FBQztnQkFBQ2UsSUFBSVgsTUFBTVcsRUFBRTtZQUFVO1lBQzFEVCxhQUFhUTtZQUNiTixlQUFlTSxJQUFJRSxLQUFLO1FBQzFCO1FBQ0FIO0lBQ0YsR0FBRztRQUFDVCxNQUFNVyxFQUFFO0tBQUM7SUFFYixNQUFNRSxvQkFBb0IsQ0FBQ0MsTUFBY0M7UUFDdkNYLGVBQWU7WUFBQyxHQUFHRCxXQUFXO1lBQUUsQ0FBQ1csS0FBSyxFQUFFQyxFQUFFQyxNQUFNLENBQUNDLEtBQUs7UUFBQTtJQUN4RDtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNabEIsMkJBQ0MsOERBQUNpQjtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0M7b0JBQUdELFdBQVU7OEJBQTJCbEIsVUFBVW9CLEtBQUs7Ozs7Ozs4QkFDeEQsOERBQUN2QiwyRUFBYUE7b0JBQUNHLFdBQVdBO29CQUFXVyxPQUFPVDs7Ozs7OzhCQUM1Qyw4REFBQ21CO29CQUFFSCxXQUFVOzhCQUFrQmxCLFVBQVVzQixXQUFXOzs7Ozs7OEJBQ3BELDhEQUFDQztvQkFBR0wsV0FBVTs4QkFBOEI7Ozs7Ozs4QkFDNUMsOERBQUNNO29CQUFHTixXQUFVOzhCQUNYTyxPQUFPQyxPQUFPLENBQUMxQixVQUFVVyxLQUFLLEVBQUVnQixHQUFHLENBQUM7NEJBQUMsQ0FBQ2QsTUFBTUcsTUFBTTs0QkFFZ0JaOzZDQURqRSw4REFBQ3dCOzRCQUFjVixXQUFVOzs4Q0FDdkIsOERBQUNXO29DQUFPQyxPQUFPO3dDQUFFQyxPQUFPN0IsV0FBVyxDQUFDVyxLQUFLO29DQUFDOzhDQUFJQTs7Ozs7O2dDQUFjO2dDQUFHVCxFQUFBQSxrQkFBQUEsU0FBUyxDQUFDUyxLQUFLLGNBQWZULHNDQUFBQSxnQkFBaUJrQixXQUFXLEtBQUk7OENBQy9GLDhEQUFDVTtvQ0FDQ0MsTUFBSztvQ0FDTGpCLE9BQU9kLFdBQVcsQ0FBQ1csS0FBSztvQ0FDeEJxQixVQUFVLENBQUNwQixJQUFNRixrQkFBa0JDLE1BQU1DO29DQUN6Q2dCLE9BQU87d0NBQUVLLGlCQUFpQmpDLFdBQVcsQ0FBQ1csS0FBSztvQ0FBQztvQ0FDNUNLLFdBQVU7Ozs7Ozs7MkJBUExMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJ2QjtHQTlDd0JmOztRQUNSSixzREFBU0E7OztLQURESSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudC9baWRdL3BhZ2UudHN4PzNiMzMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7IFxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7dXNlUGFyYW1zIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcbmltcG9ydCBDb3B5ICBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2NvbXBvbmVudC9Db3B5J1xuaW1wb3J0ICogYXMgQ29tcHMgZnJvbSAnQHphYnVpL2NvbXBzJztcbmltcG9ydCBnZXRDb21wb25lbnRCeUlkIGZyb20gJ0AvYWN0aW9ucy9Db21wcy9nZXRDb21wb25lbnRCeUlkJztcbmltcG9ydCBwcm9wc0RhdGFKU09OIGZyb20gJ0AvbGliL2RhdGEvcHJvcHMuanNvbic7XG5pbXBvcnQgQ29tcG9uZW50Q29kZSBmcm9tICdAL2NvbXBvbmVudHMvY29tcG9uZW50L0NvbXBvbmVudENvZGUnO1xuXG5pbnRlcmZhY2UgUHJvcHNEYXRhe1xuICBba2V5OiBzdHJpbmddOiB7XG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgICB0eXBlOiBzdHJpbmc7XG4gIH1cbn1cblxuaW50ZXJmYWNlIENvbXBvbmVudERhdGEge1xuICBfaWQ6IHN0cmluZztcbiAgY29kZTogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBjYXRlZ29yeTogc3RyaW5nO1xuICBjb21wb25lbnQ6IHN0cmluZztcbiAgaW1wb3J0OiBzdHJpbmc7XG4gIHByb3BzOiBhbnk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNob3coKSB7XG4gIGNvbnN0IHBhcmFtID0gdXNlUGFyYW1zKCk7XG4gIGNvbnN0IFtjb21wb25lbnQsIHNldENvbXBvbmVudF0gPSB1c2VTdGF0ZTxDb21wb25lbnREYXRhIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtwcm9wc1ZhbHVlcywgc2V0UHJvcHNWYWx1ZXNdID0gdXNlU3RhdGU8e1trZXk6IHN0cmluZ106IHN0cmluZ30+KHt9KTtcbiAgY29uc3QgcHJvcHNEYXRhIDogUHJvcHNEYXRhID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShwcm9wc0RhdGFKU09OKSk7XG4gIFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGdldENvbXBvbmVudEJ5SWQoe2lkOiBwYXJhbS5pZCBhcyBzdHJpbmd9KTtcbiAgICAgIHNldENvbXBvbmVudChyZXMgYXMgQ29tcG9uZW50RGF0YSk7XG4gICAgICBzZXRQcm9wc1ZhbHVlcyhyZXMucHJvcHMpO1xuICAgIH1cbiAgICBmZXRjaERhdGEoKTtcbiAgfSwgW3BhcmFtLmlkXSk7XG5cbiAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAocHJvcDogc3RyaW5nLCBlOiBhbnkpID0+IHtcbiAgICBzZXRQcm9wc1ZhbHVlcyh7Li4ucHJvcHNWYWx1ZXMsIFtwcm9wXTogZS50YXJnZXQudmFsdWV9KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtLTQgc3BhY2UteS00XCI+XG4gICAgICB7Y29tcG9uZW50ICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXctbWQgcC00IHJvdW5kZWQgc2hhZG93XCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT0nbWItNCB0ZXh0LTR4bCBmb250LWJvbGQnPntjb21wb25lbnQudGl0bGV9PC9oMT5cbiAgICAgICAgICA8Q29tcG9uZW50Q29kZSBjb21wb25lbnQ9e2NvbXBvbmVudH0gcHJvcHM9e3Byb3BzVmFsdWVzfS8+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItNCB0ZXh0LWJhc2VcIj57Y29tcG9uZW50LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibWItMiB0ZXh0LTJ4bCBmb250LXNlbWlib2xkXCI+UHJvcHM6PC9oMj5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1kaXNjIGxpc3QtaW5zaWRlXCI+XG4gICAgICAgICAgICB7T2JqZWN0LmVudHJpZXMoY29tcG9uZW50LnByb3BzKS5tYXAoKFtwcm9wLCB2YWx1ZV0pID0+IChcbiAgICAgICAgICAgICAgPGxpIGtleT17cHJvcH0gY2xhc3NOYW1lPVwibWItMSB0ZXh0LWJhc2VcIj5cbiAgICAgICAgICAgICAgICA8c3Ryb25nIHN0eWxlPXt7IGNvbG9yOiBwcm9wc1ZhbHVlc1twcm9wXSB9fT57cHJvcH08L3N0cm9uZz46IHtwcm9wc0RhdGFbcHJvcF0/LmRlc2NyaXB0aW9uIHx8IFwiTm8gZGVzY3JpcHRpb24gZ2l2ZW5cIn1cbiAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzVmFsdWVzW3Byb3BdfSBcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlSW5wdXRDaGFuZ2UocHJvcCwgZSl9IFxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBwcm9wc1ZhbHVlc1twcm9wXSB9fVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdwLTIgdGV4dC1ibGFjayBib3JkZXIgcm91bmRlZC1tZCdcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG5cbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVBhcmFtcyIsImdldENvbXBvbmVudEJ5SWQiLCJwcm9wc0RhdGFKU09OIiwiQ29tcG9uZW50Q29kZSIsIlNob3ciLCJwYXJhbSIsImNvbXBvbmVudCIsInNldENvbXBvbmVudCIsInByb3BzVmFsdWVzIiwic2V0UHJvcHNWYWx1ZXMiLCJwcm9wc0RhdGEiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJmZXRjaERhdGEiLCJyZXMiLCJpZCIsInByb3BzIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJwcm9wIiwiZSIsInRhcmdldCIsInZhbHVlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJ0aXRsZSIsInAiLCJkZXNjcmlwdGlvbiIsImgyIiwidWwiLCJPYmplY3QiLCJlbnRyaWVzIiwibWFwIiwibGkiLCJzdHJvbmciLCJzdHlsZSIsImNvbG9yIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJiYWNrZ3JvdW5kQ29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/component/[id]/page.tsx\n"));

/***/ })

});