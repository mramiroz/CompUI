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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"62f91c29a1f8\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9AemFidWkvY29tcHMvZGlzdC9zdHlsZXMuY3NzIiwibWFwcGluZ3MiOiI7QUFBQSwrREFBZSxjQUFjO0FBQzdCLElBQUksSUFBVSxJQUFJLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHphYnVpL2NvbXBzL2Rpc3Qvc3R5bGVzLmNzcz84OWM5Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiNjJmOTFjMjlhMWY4XCJcbmlmIChtb2R1bGUuaG90KSB7IG1vZHVsZS5ob3QuYWNjZXB0KCkgfVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/@zabui/comps/dist/styles.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/dashboard/components/[id]/props/page.tsx":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/components/[id]/props/page.tsx ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Props; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _actions_Comps_getComponentById__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/actions/Comps/getComponentById */ \"(app-pages-browser)/./src/actions/Comps/getComponentById.tsx\");\n/* harmony import */ var _actions_Props_getCoponentProps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/actions/Props/getCoponentProps */ \"(app-pages-browser)/./src/actions/Props/getCoponentProps.tsx\");\n/* harmony import */ var _actions_Props_addComponentProp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/actions/Props/addComponentProp */ \"(app-pages-browser)/./src/actions/Props/addComponentProp.tsx\");\n/* harmony import */ var _actions_Props_deleteComponentProp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/actions/Props/deleteComponentProp */ \"(app-pages-browser)/./src/actions/Props/deleteComponentProp.tsx\");\n/* harmony import */ var _components_dashboard_LabelComponentsProps__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/dashboard/LabelComponentsProps */ \"(app-pages-browser)/./src/components/dashboard/LabelComponentsProps.tsx\");\n/* harmony import */ var _zabui_comps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @zabui/comps */ \"(app-pages-browser)/./node_modules/@zabui/comps/dist/index.js\");\n/* harmony import */ var _actions_Props_getProps__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/actions/Props/getProps */ \"(app-pages-browser)/./src/actions/Props/getProps.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Props() {\n    _s();\n    const [component, setComponent] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)();\n    const [props, setProps] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)();\n    const [componentProps, setComponentProps] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)();\n    const [selectedProps, setSelectedProps] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)();\n    const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(\"\");\n    const pathName = (0,next_navigation__WEBPACK_IMPORTED_MODULE_9__.usePathname)();\n    const parts = pathName.split(\"/\");\n    const id = parts[3];\n    (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            const res = await (0,_actions_Comps_getComponentById__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n                id: id\n            });\n            const componentProps = await (0,_actions_Props_getCoponentProps__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n                componentId: id\n            });\n            const allProps = await (0,_actions_Props_getProps__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n            setComponent(res);\n            setComponentProps(componentProps);\n            setProps(allProps);\n        };\n        fetchData();\n    }, [\n        id\n    ]);\n    const handleInputChange = (e)=>{\n        setInputValue(e.target.value);\n    };\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        const res = await (0,_actions_Props_addComponentProp__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n            componentId: id,\n            propId: selectedProps === null || selectedProps === void 0 ? void 0 : selectedProps._id,\n            value: inputValue\n        });\n        if (res) {\n            const componentProps = await (0,_actions_Props_getCoponentProps__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n                componentId: id\n            });\n            setComponentProps(componentProps);\n        }\n    };\n    const handlePropSelected = (e)=>{\n        const prop = props === null || props === void 0 ? void 0 : props.find((prop)=>prop._id === e.target.value);\n        setSelectedProps(prop);\n    };\n    const handleDelete = async (compId, propId)=>{\n        const res = await (0,_actions_Props_deleteComponentProp__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(compId, propId);\n        if (res) {\n            const componentProps = await (0,_actions_Props_getCoponentProps__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n                componentId: id\n            });\n            setComponentProps(componentProps);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"px-4 md:px-8 lg:px-16 xl:px-32\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-4xl md:text-5xl lg:text-6xl font-bold mb-4\",\n                children: component === null || component === void 0 ? void 0 : component.title\n            }, void 0, false, {\n                fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/dashboard/components/[id]/props/page.tsx\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col space-y-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-2xl md:text-3xl font-bold\",\n                        children: \"Add New Prop\"\n                    }, void 0, false, {\n                        fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/dashboard/components/[id]/props/page.tsx\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_zabui_comps__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                            href: \"/dashboard/props/create\",\n                            children: \"Create New Prop\"\n                        }, void 0, false, {\n                            fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/dashboard/components/[id]/props/page.tsx\",\n                            lineNumber: 92,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/dashboard/components/[id]/props/page.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: handleSubmit,\n                        className: \"flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-4 flex-wrap\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                className: \"bg-gray-900 text-white rounded-md p-2 mb-4 md:mb-0\",\n                                onChange: handlePropSelected,\n                                children: props && props.map((prop, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: prop._id,\n                                        children: prop.name\n                                    }, index, false, {\n                                        fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/dashboard/components/[id]/props/page.tsx\",\n                                        lineNumber: 97,\n                                        columnNumber: 15\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/dashboard/components/[id]/props/page.tsx\",\n                                lineNumber: 95,\n                                columnNumber: 11\n                            }, this),\n                            (selectedProps === null || selectedProps === void 0 ? void 0 : selectedProps.required) && (selectedProps === null || selectedProps === void 0 ? void 0 : selectedProps.type) === \"string\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                className: \"bg-gray-900 text-white rounded-md p-2 mb-4 md:mb-0\",\n                                placeholder: \"\",\n                                onChange: handleInputChange\n                            }, void 0, false, {\n                                fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/dashboard/components/[id]/props/page.tsx\",\n                                lineNumber: 100,\n                                columnNumber: 75\n                            }, this),\n                            (selectedProps === null || selectedProps === void 0 ? void 0 : selectedProps.required) && (selectedProps === null || selectedProps === void 0 ? void 0 : selectedProps.type) === \"number\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                className: \"bg-gray-900 text-white rounded-md p-2 mb-4 md:mb-0\",\n                                onChange: handleInputChange\n                            }, void 0, false, {\n                                fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/dashboard/components/[id]/props/page.tsx\",\n                                lineNumber: 101,\n                                columnNumber: 75\n                            }, this),\n                            (selectedProps === null || selectedProps === void 0 ? void 0 : selectedProps.required) && (selectedProps === null || selectedProps === void 0 ? void 0 : selectedProps.type) === \"boolean\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"checkbox\",\n                                className: \"bg-gray-900 text-white rounded-md p-2 mb-4 md:mb-0\",\n                                onChange: handleInputChange\n                            }, void 0, false, {\n                                fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/dashboard/components/[id]/props/page.tsx\",\n                                lineNumber: 102,\n                                columnNumber: 76\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_zabui_comps__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                                type: \"submit\",\n                                children: \"Add Prop\"\n                            }, void 0, false, {\n                                fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/dashboard/components/[id]/props/page.tsx\",\n                                lineNumber: 103,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/dashboard/components/[id]/props/page.tsx\",\n                        lineNumber: 94,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/dashboard/components/[id]/props/page.tsx\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-4\",\n                children: componentProps && componentProps.map((prop, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_dashboard_LabelComponentsProps__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        prop: prop,\n                        onDelete: ()=>handleDelete(component === null || component === void 0 ? void 0 : component._id, prop._id)\n                    }, index, false, {\n                        fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/dashboard/components/[id]/props/page.tsx\",\n                        lineNumber: 108,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/dashboard/components/[id]/props/page.tsx\",\n                lineNumber: 106,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/mramiroz/Escritorio/ZabUI/web/src/app/dashboard/components/[id]/props/page.tsx\",\n        lineNumber: 87,\n        columnNumber: 5\n    }, this);\n}\n_s(Props, \"CmCOUmudQkwrKFmP4GCPSAx7SZs=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_9__.usePathname\n    ];\n});\n_c = Props;\nvar _c;\n$RefreshReg$(_c, \"Props\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZGFzaGJvYXJkL2NvbXBvbmVudHMvW2lkXS9wcm9wcy9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUdnRTtBQUNDO0FBQ0Q7QUFDTTtBQUNOO0FBQzVCO0FBQ1k7QUFDSjtBQUM4QjtBQTBCM0QsU0FBU1U7O0lBQ3RCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHSiwrQ0FBUUE7SUFDMUMsTUFBTSxDQUFDSyxPQUFPQyxTQUFTLEdBQUdOLCtDQUFRQTtJQUNsQyxNQUFNLENBQUNPLGdCQUFnQkMsa0JBQWtCLEdBQUdSLCtDQUFRQTtJQUNwRCxNQUFNLENBQUNTLGVBQWVDLGlCQUFpQixHQUFHViwrQ0FBUUE7SUFDbEQsTUFBTSxDQUFDVyxZQUFZQyxjQUFjLEdBQUdaLCtDQUFRQSxDQUE0QjtJQUN4RSxNQUFNYSxXQUFXWiw0REFBV0E7SUFDNUIsTUFBTWEsUUFBUUQsU0FBU0UsS0FBSyxDQUFDO0lBQzdCLE1BQU1DLEtBQUtGLEtBQUssQ0FBQyxFQUFFO0lBRW5CZixnREFBU0EsQ0FBQztRQUNSLE1BQU1rQixZQUFZO1lBQ2QsTUFBTUMsTUFBTSxNQUFNMUIsMkVBQWdCQSxDQUFDO2dCQUFDd0IsSUFBSUE7WUFBWTtZQUNwRCxNQUFNVCxpQkFBaUIsTUFBTWQsMkVBQWlCQSxDQUFDO2dCQUFDMEIsYUFBYUg7WUFBWTtZQUN6RSxNQUFNSSxXQUFXLE1BQU10QixtRUFBUUE7WUFDL0JNLGFBQWFjO1lBQ2JWLGtCQUFtQkQ7WUFDbkJELFNBQVNjO1FBQ2I7UUFDQUg7SUFDRixHQUFHO1FBQUNEO0tBQUc7SUFFUCxNQUFNSyxvQkFBb0IsQ0FBQ0M7UUFDekJWLGNBQWNVLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztJQUM5QjtJQUVBLE1BQU1DLGVBQWUsT0FBT0g7UUFDMUJBLEVBQUVJLGNBQWM7UUFDaEIsTUFBTVIsTUFBTSxNQUFNeEIsMkVBQWdCQSxDQUFDO1lBQUN5QixhQUFhSDtZQUFjVyxNQUFNLEVBQUVsQiwwQkFBQUEsb0NBQUFBLGNBQWVtQixHQUFHO1lBQVlKLE9BQU9iO1FBQW9CO1FBQ2hJLElBQUlPLEtBQUk7WUFDTixNQUFNWCxpQkFBaUIsTUFBTWQsMkVBQWlCQSxDQUFDO2dCQUFDMEIsYUFBYUg7WUFBWTtZQUN6RVIsa0JBQW1CRDtRQUNyQjtJQUNGO0lBRUEsTUFBTXNCLHFCQUFxQixDQUFDUDtRQUMxQixNQUFNUSxPQUFPekIsa0JBQUFBLDRCQUFBQSxNQUFPMEIsSUFBSSxDQUFDRCxDQUFBQSxPQUFRQSxLQUFLRixHQUFHLEtBQUtOLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztRQUM1RGQsaUJBQWlCb0I7SUFDbkI7SUFFQSxNQUFNRSxlQUFlLE9BQU9DLFFBQWdCTjtRQUMxQyxNQUFNVCxNQUFNLE1BQU12Qiw4RUFBbUJBLENBQUNzQyxRQUFRTjtRQUM5QyxJQUFHVCxLQUFJO1lBQ0wsTUFBTVgsaUJBQWlCLE1BQU1kLDJFQUFpQkEsQ0FBQztnQkFBQzBCLGFBQWFIO1lBQVk7WUFDekVSLGtCQUFtQkQ7UUFDckI7SUFDRjtJQUVBLHFCQUNFLDhEQUFDMkI7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUFtRGhDLHNCQUFBQSxnQ0FBQUEsVUFBV2tDLEtBQUs7Ozs7OzswQkFDakYsOERBQUNIO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0c7d0JBQUdILFdBQVU7a0NBQWlDOzs7Ozs7a0NBQy9DLDhEQUFDRDtrQ0FDQyw0RUFBQ3JDLGdEQUFNQTs0QkFBQzBDLE1BQUs7c0NBQTBCOzs7Ozs7Ozs7OztrQ0FFekMsOERBQUNDO3dCQUFLQyxVQUFVaEI7d0JBQWNVLFdBQVU7OzBDQUN0Qyw4REFBQ087Z0NBQU9QLFdBQVU7Z0NBQXFEUSxVQUFVZDswQ0FDOUV4QixTQUFTQSxNQUFNdUMsR0FBRyxDQUFDLENBQUNkLE1BQU1lLHNCQUN6Qiw4REFBQ0M7d0NBQW1CdEIsT0FBT00sS0FBS0YsR0FBRztrREFBR0UsS0FBS2lCLElBQUk7dUNBQWxDRjs7Ozs7Ozs7Ozs0QkFHaEJwQyxDQUFBQSwwQkFBQUEsb0NBQUFBLGNBQWV1QyxRQUFRLEtBQUl2QyxDQUFBQSwwQkFBQUEsb0NBQUFBLGNBQWV3QyxJQUFJLE1BQUssMEJBQVksOERBQUNDO2dDQUFNRCxNQUFLO2dDQUFPZCxXQUFVO2dDQUFxRGdCLGFBQVk7Z0NBQUdSLFVBQVV0Qjs7Ozs7OzRCQUMxS1osQ0FBQUEsMEJBQUFBLG9DQUFBQSxjQUFldUMsUUFBUSxLQUFJdkMsQ0FBQUEsMEJBQUFBLG9DQUFBQSxjQUFld0MsSUFBSSxNQUFLLDBCQUFZLDhEQUFDQztnQ0FBTUQsTUFBSztnQ0FBU2QsV0FBVTtnQ0FBcURRLFVBQVV0Qjs7Ozs7OzRCQUM3SlosQ0FBQUEsMEJBQUFBLG9DQUFBQSxjQUFldUMsUUFBUSxLQUFJdkMsQ0FBQUEsMEJBQUFBLG9DQUFBQSxjQUFld0MsSUFBSSxNQUFLLDJCQUFhLDhEQUFDQztnQ0FBTUQsTUFBSztnQ0FBV2QsV0FBVTtnQ0FBcURRLFVBQVV0Qjs7Ozs7OzBDQUNqSyw4REFBQ3hCLGdEQUFNQTtnQ0FBQ29ELE1BQUs7MENBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFHMUIsOERBQUNmO2dCQUFJQyxXQUFVOzBCQUNaNUIsa0JBQWtCQSxlQUFlcUMsR0FBRyxDQUFDLENBQUNkLE1BQU1lLHNCQUMzQyw4REFBQ2pELGtGQUFLQTt3QkFBYWtDLE1BQU1BO3dCQUFNc0IsVUFBVSxJQUFNcEIsYUFBYTdCLHNCQUFBQSxnQ0FBQUEsVUFBV3lCLEdBQUcsRUFBWUUsS0FBS0YsR0FBRzt1QkFBbEZpQjs7Ozs7Ozs7Ozs7Ozs7OztBQUt0QjtHQTNFd0IzQzs7UUFNTEQsd0RBQVdBOzs7S0FOTkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9kYXNoYm9hcmQvY29tcG9uZW50cy9baWRdL3Byb3BzL3BhZ2UudHN4PzIxZjciXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gXCJAL21vZGVscy9Db21wb25lbnRcIjtcbmltcG9ydCBDb21wb25lbnRzUHJvcHMgZnJvbSBcIkAvbW9kZWxzL0NvbXBvbmVudHNQcm9wc1wiO1xuaW1wb3J0IGdldENvbXBvbmVudEJ5SWQgZnJvbSBcIkAvYWN0aW9ucy9Db21wcy9nZXRDb21wb25lbnRCeUlkXCI7XG5pbXBvcnQgZ2V0Q29tcG9uZW50UHJvcHMgZnJvbSBcIkAvYWN0aW9ucy9Qcm9wcy9nZXRDb3BvbmVudFByb3BzXCI7XG5pbXBvcnQgYWRkQ29tcG9uZW50UHJvcCBmcm9tIFwiQC9hY3Rpb25zL1Byb3BzL2FkZENvbXBvbmVudFByb3BcIjtcbmltcG9ydCBkZWxldGVDb21wb25lbnRQcm9wIGZyb20gXCJAL2FjdGlvbnMvUHJvcHMvZGVsZXRlQ29tcG9uZW50UHJvcFwiO1xuaW1wb3J0IExhYmVsIGZyb20gXCJAL2NvbXBvbmVudHMvZGFzaGJvYXJkL0xhYmVsQ29tcG9uZW50c1Byb3BzXCI7XG5pbXBvcnQge0J1dHRvbn0gZnJvbSBcIkB6YWJ1aS9jb21wc1wiO1xuaW1wb3J0IGdldFByb3BzIGZyb20gXCJAL2FjdGlvbnMvUHJvcHMvZ2V0UHJvcHNcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVBhdGhuYW1lLCB1c2VSb3V0ZXIsIHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcblxuaW50ZXJmYWNlIENvbXBvbmVudERhdGEge1xuICBfaWQ6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgY2F0ZWdvcnk6IHN0cmluZztcbiAgY29kZTogc3RyaW5nO1xuICBwcm9wczogc3RyaW5nO1xuICBjb21wb25lbnQ6IHN0cmluZztcbn1cbmludGVyZmFjZSBQcm9wcyB7XG4gIF9pZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHR5cGU6IHN0cmluZztcbiAgaW5wdXQ6IGJvb2xlYW47XG4gIHJlcXVpcmVkOiBib29sZWFuO1xufVxuXG5pbnRlcmZhY2UgQ29tcG9uZW50c1Byb3BzIHtcbiAgX2lkOiBzdHJpbmc7XG4gIGNvbXBvbmVudDogc3RyaW5nO1xuICBwcm9wOiBzdHJpbmc7XG4gIHZhbHVlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb3BzKCl7XG4gIGNvbnN0IFtjb21wb25lbnQsIHNldENvbXBvbmVudF0gPSB1c2VTdGF0ZTxDb21wb25lbnREYXRhPigpO1xuICBjb25zdCBbcHJvcHMsIHNldFByb3BzXSA9IHVzZVN0YXRlPFByb3BzW10+KCk7XG4gIGNvbnN0IFtjb21wb25lbnRQcm9wcywgc2V0Q29tcG9uZW50UHJvcHNdID0gdXNlU3RhdGU8Q29tcG9uZW50c1Byb3BzW10+KCk7XG4gIGNvbnN0IFtzZWxlY3RlZFByb3BzLCBzZXRTZWxlY3RlZFByb3BzXSA9IHVzZVN0YXRlPFByb3BzPigpO1xuICBjb25zdCBbaW5wdXRWYWx1ZSwgc2V0SW5wdXRWYWx1ZV0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuPignJyk7XG4gIGNvbnN0IHBhdGhOYW1lID0gdXNlUGF0aG5hbWUoKTtcbiAgY29uc3QgcGFydHMgPSBwYXRoTmFtZS5zcGxpdCgnLycpO1xuICBjb25zdCBpZCA9IHBhcnRzWzNdO1xuXG4gIHVzZUVmZmVjdCgoKT0+e1xuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZ2V0Q29tcG9uZW50QnlJZCh7aWQ6IGlkIGFzIHN0cmluZ30pO1xuICAgICAgICBjb25zdCBjb21wb25lbnRQcm9wcyA9IGF3YWl0IGdldENvbXBvbmVudFByb3BzKHtjb21wb25lbnRJZDogaWQgYXMgc3RyaW5nfSk7XG4gICAgICAgIGNvbnN0IGFsbFByb3BzID0gYXdhaXQgZ2V0UHJvcHMoKTtcbiAgICAgICAgc2V0Q29tcG9uZW50KHJlcyBhcyBDb21wb25lbnREYXRhKTtcbiAgICAgICAgc2V0Q29tcG9uZW50UHJvcHMoIGNvbXBvbmVudFByb3BzIGFzIENvbXBvbmVudHNQcm9wc1tdKTtcbiAgICAgICAgc2V0UHJvcHMoYWxsUHJvcHMgYXMgUHJvcHNbXSk7XG4gICAgfVxuICAgIGZldGNoRGF0YSgpO1xuICB9LCBbaWRdKTtcblxuICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChlOiBhbnkpID0+IHtcbiAgICBzZXRJbnB1dFZhbHVlKGUudGFyZ2V0LnZhbHVlKTtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlOiBhbnkpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgYWRkQ29tcG9uZW50UHJvcCh7Y29tcG9uZW50SWQ6IGlkIGFzIHN0cmluZywgcHJvcElkOiBzZWxlY3RlZFByb3BzPy5faWQgYXMgc3RyaW5nLCB2YWx1ZTogaW5wdXRWYWx1ZSBhcyBzdHJpbmd9KTtcbiAgICBpZiAocmVzKXtcbiAgICAgIGNvbnN0IGNvbXBvbmVudFByb3BzID0gYXdhaXQgZ2V0Q29tcG9uZW50UHJvcHMoe2NvbXBvbmVudElkOiBpZCBhcyBzdHJpbmd9KTtcbiAgICAgIHNldENvbXBvbmVudFByb3BzKCBjb21wb25lbnRQcm9wcyBhcyBDb21wb25lbnRzUHJvcHNbXSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgaGFuZGxlUHJvcFNlbGVjdGVkID0gKGU6IGFueSkgPT4ge1xuICAgIGNvbnN0IHByb3AgPSBwcm9wcz8uZmluZChwcm9wID0+IHByb3AuX2lkID09PSBlLnRhcmdldC52YWx1ZSk7XG4gICAgc2V0U2VsZWN0ZWRQcm9wcyhwcm9wIGFzIFByb3BzKTtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZURlbGV0ZSA9IGFzeW5jIChjb21wSWQ6IHN0cmluZywgcHJvcElkOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBkZWxldGVDb21wb25lbnRQcm9wKGNvbXBJZCwgcHJvcElkKTtcbiAgICBpZihyZXMpe1xuICAgICAgY29uc3QgY29tcG9uZW50UHJvcHMgPSBhd2FpdCBnZXRDb21wb25lbnRQcm9wcyh7Y29tcG9uZW50SWQ6IGlkIGFzIHN0cmluZ30pO1xuICAgICAgc2V0Q29tcG9uZW50UHJvcHMoIGNvbXBvbmVudFByb3BzIGFzIENvbXBvbmVudHNQcm9wc1tdKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNCBtZDpweC04IGxnOnB4LTE2IHhsOnB4LTMyXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgbWQ6dGV4dC01eGwgbGc6dGV4dC02eGwgZm9udC1ib2xkIG1iLTRcIj57Y29tcG9uZW50Py50aXRsZX08L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNwYWNlLXktNFwiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgbWQ6dGV4dC0zeGwgZm9udC1ib2xkXCI+QWRkIE5ldyBQcm9wPC9oMj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8QnV0dG9uIGhyZWY9XCIvZGFzaGJvYXJkL3Byb3BzL2NyZWF0ZVwiPkNyZWF0ZSBOZXcgUHJvcDwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBzcGFjZS15LTQgbWQ6c3BhY2UteS0wIG1kOnNwYWNlLXgtNCBtYi00IGZsZXgtd3JhcFwiPlxuICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiYmctZ3JheS05MDAgdGV4dC13aGl0ZSByb3VuZGVkLW1kIHAtMiBtYi00IG1kOm1iLTBcIiBvbkNoYW5nZT17aGFuZGxlUHJvcFNlbGVjdGVkfT5cbiAgICAgICAgICAgIHtwcm9wcyAmJiBwcm9wcy5tYXAoKHByb3AsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpbmRleH0gdmFsdWU9e3Byb3AuX2lkfT57cHJvcC5uYW1lfTwvb3B0aW9uPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAge3NlbGVjdGVkUHJvcHM/LnJlcXVpcmVkICYmIHNlbGVjdGVkUHJvcHM/LnR5cGUgPT09ICdzdHJpbmcnICYmIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImJnLWdyYXktOTAwIHRleHQtd2hpdGUgcm91bmRlZC1tZCBwLTIgbWItNCBtZDptYi0wXCIgcGxhY2Vob2xkZXI9XCJcIiBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9Lz59XG4gICAgICAgICAge3NlbGVjdGVkUHJvcHM/LnJlcXVpcmVkICYmIHNlbGVjdGVkUHJvcHM/LnR5cGUgPT09ICdudW1iZXInICYmIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgY2xhc3NOYW1lPVwiYmctZ3JheS05MDAgdGV4dC13aGl0ZSByb3VuZGVkLW1kIHAtMiBtYi00IG1kOm1iLTBcIiBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9Lz59XG4gICAgICAgICAge3NlbGVjdGVkUHJvcHM/LnJlcXVpcmVkICYmIHNlbGVjdGVkUHJvcHM/LnR5cGUgPT09ICdib29sZWFuJyAmJiA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3NOYW1lPVwiYmctZ3JheS05MDAgdGV4dC13aGl0ZSByb3VuZGVkLW1kIHAtMiBtYi00IG1kOm1iLTBcIiBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9Lz59XG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCI+QWRkIFByb3A8L0J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTRcIj5cbiAgICAgICAge2NvbXBvbmVudFByb3BzICYmIGNvbXBvbmVudFByb3BzLm1hcCgocHJvcCwgaW5kZXgpID0+IChcbiAgICAgICAgICA8TGFiZWwga2V5PXtpbmRleH0gcHJvcD17cHJvcH0gb25EZWxldGU9eygpID0+IGhhbmRsZURlbGV0ZShjb21wb25lbnQ/Ll9pZCBhcyBzdHJpbmcsIHByb3AuX2lkKX0vPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59Il0sIm5hbWVzIjpbImdldENvbXBvbmVudEJ5SWQiLCJnZXRDb21wb25lbnRQcm9wcyIsImFkZENvbXBvbmVudFByb3AiLCJkZWxldGVDb21wb25lbnRQcm9wIiwiTGFiZWwiLCJCdXR0b24iLCJnZXRQcm9wcyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUGF0aG5hbWUiLCJQcm9wcyIsImNvbXBvbmVudCIsInNldENvbXBvbmVudCIsInByb3BzIiwic2V0UHJvcHMiLCJjb21wb25lbnRQcm9wcyIsInNldENvbXBvbmVudFByb3BzIiwic2VsZWN0ZWRQcm9wcyIsInNldFNlbGVjdGVkUHJvcHMiLCJpbnB1dFZhbHVlIiwic2V0SW5wdXRWYWx1ZSIsInBhdGhOYW1lIiwicGFydHMiLCJzcGxpdCIsImlkIiwiZmV0Y2hEYXRhIiwicmVzIiwiY29tcG9uZW50SWQiLCJhbGxQcm9wcyIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJwcm9wSWQiLCJfaWQiLCJoYW5kbGVQcm9wU2VsZWN0ZWQiLCJwcm9wIiwiZmluZCIsImhhbmRsZURlbGV0ZSIsImNvbXBJZCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwidGl0bGUiLCJoMiIsImhyZWYiLCJmb3JtIiwib25TdWJtaXQiLCJzZWxlY3QiLCJvbkNoYW5nZSIsIm1hcCIsImluZGV4Iiwib3B0aW9uIiwibmFtZSIsInJlcXVpcmVkIiwidHlwZSIsImlucHV0IiwicGxhY2Vob2xkZXIiLCJvbkRlbGV0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/dashboard/components/[id]/props/page.tsx\n"));

/***/ })

});