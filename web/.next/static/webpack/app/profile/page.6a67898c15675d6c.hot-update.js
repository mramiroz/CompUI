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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"c4f1b7ed3ebd\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9AY29tcHVpL2NvbXBzL3N0eWxlcy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AY29tcHVpL2NvbXBzL3N0eWxlcy5jc3M/YzRiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcImM0ZjFiN2VkM2ViZFwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/@compui/comps/styles.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/profile/page.tsx":
/*!**********************************!*\
  !*** ./src/app/profile/page.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Profile; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_component_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/component/Card */ \"(app-pages-browser)/./src/components/component/Card.tsx\");\n/* harmony import */ var _compui_comps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @compui/comps */ \"(app-pages-browser)/./node_modules/@compui/comps/src/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Profile() {\n    _s();\n    const { data: session, status, update } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)();\n    const [comps, setComps] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    const user = session === null || session === void 0 ? void 0 : session.user;\n    up;\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        if (user === null || user === void 0 ? void 0 : user.favComps) {\n            fetch(\"/api/favComps\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    compIds: user.favComps\n                })\n            }).then(async (res)=>{\n                const data = await res.json();\n                setComps(data);\n            });\n        }\n    }, [\n        user === null || user === void 0 ? void 0 : user.favComps\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"my-5 text-5xl text-center\",\n                children: [\n                    \"Hello \",\n                    user === null || user === void 0 ? void 0 : user.name,\n                    \" \\uD83D\\uDC4B\"\n                ]\n            }, void 0, true, {\n                fileName: \"/home/mramiroz/Escritorio/CompUI/web/src/app/profile/page.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"my-3 text-3xl\",\n                children: \"Here are your favorite components: \"\n            }, void 0, false, {\n                fileName: \"/home/mramiroz/Escritorio/CompUI/web/src/app/profile/page.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"md:flex md:flex-wrap\",\n                children: comps.map((comp, index)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_component_Card__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        id: comp._id,\n                        code: comp.code,\n                        title: comp.title,\n                        description: comp.description,\n                        category: comp.category,\n                        props: comp.props,\n                        likes: comp.likes\n                    }, index, false, {\n                        fileName: \"/home/mramiroz/Escritorio/CompUI/web/src/app/profile/page.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 13\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/home/mramiroz/Escritorio/CompUI/web/src/app/profile/page.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_compui_comps__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.signOut)(),\n                children: \"Logout\"\n            }, void 0, false, {\n                fileName: \"/home/mramiroz/Escritorio/CompUI/web/src/app/profile/page.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Profile, \"Sz2GDTujNPZKdC9jouVXoHATpgA=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession\n    ];\n});\n_c = Profile;\nvar _c;\n$RefreshReg$(_c, \"Profile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcHJvZmlsZS9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQytDO0FBQ1I7QUFDMkI7QUFDakI7QUFhbEMsU0FBU007O0lBQ3RCLE1BQU0sRUFBRUMsTUFBTUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLE1BQU0sRUFBQyxHQUFHUiwyREFBVUE7SUFDbkQsTUFBTSxDQUFDUyxPQUFPQyxTQUFTLEdBQUdQLCtDQUFRQSxDQUFrQixFQUFFO0lBQ3RELE1BQU1RLE9BQU9MLG9CQUFBQSw4QkFBQUEsUUFBU0ssSUFBSTtJQUUxQkM7SUFDQVYsZ0RBQVNBLENBQUM7UUFDUixJQUFJUyxpQkFBQUEsMkJBQUFBLEtBQU1FLFFBQVEsRUFBRTtZQUNsQkMsTUFBTSxpQkFBaUI7Z0JBQ3JCQyxRQUFRO2dCQUNSQyxTQUFTO29CQUNQLGdCQUFnQjtnQkFDbEI7Z0JBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztvQkFBQ0MsU0FBU1QsS0FBS0UsUUFBUTtnQkFBQTtZQUM5QyxHQUFHUSxJQUFJLENBQUMsT0FBT0M7Z0JBQ2IsTUFBTWpCLE9BQU8sTUFBTWlCLElBQUlDLElBQUk7Z0JBQzNCYixTQUFTTDtZQUNYO1FBQ0Y7SUFDRixHQUFHO1FBQUNNLGlCQUFBQSwyQkFBQUEsS0FBTUUsUUFBUTtLQUFDO0lBRW5CLHFCQUNFOzswQkFDRSw4REFBQ1c7Z0JBQUVDLFdBQVU7O29CQUE0QjtvQkFBUWQsaUJBQUFBLDJCQUFELEtBQWVlLElBQUk7b0JBQUM7Ozs7Ozs7MEJBQ3BFLDhEQUFDRjtnQkFBRUMsV0FBVTswQkFBZ0I7Ozs7OzswQkFDN0IsOERBQUNFO2dCQUFJRixXQUFVOzBCQUNaaEIsTUFBTW1CLEdBQUcsQ0FBQyxDQUFDQyxNQUFxQkM7b0JBQy9CLHFCQUNFLDhEQUFDaEMsa0VBQUlBO3dCQUVIaUMsSUFBSUYsS0FBS0csR0FBRzt3QkFDWkMsTUFBTUosS0FBS0ksSUFBSTt3QkFDZkMsT0FBT0wsS0FBS0ssS0FBSzt3QkFDakJDLGFBQWFOLEtBQUtNLFdBQVc7d0JBQzdCQyxVQUFVUCxLQUFLTyxRQUFRO3dCQUN2QkMsT0FBT1IsS0FBS1EsS0FBSzt3QkFDakJDLE9BQU9ULEtBQUtTLEtBQUs7dUJBUFpSOzs7OztnQkFTWDs7Ozs7OzBCQUVGLDhEQUFDL0IsaURBQU1BO2dCQUFDd0MsU0FBUyxJQUFNdEMsd0RBQU9BOzBCQUFJOzs7Ozs7OztBQUt4QztHQTdDd0JHOztRQUNtQkosdURBQVVBOzs7S0FEN0JJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcHJvZmlsZS9wYWdlLnRzeD9jNGU2Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IENhcmQgZnJvbSAnQC9jb21wb25lbnRzL2NvbXBvbmVudC9DYXJkJztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0Bjb21wdWkvY29tcHMnO1xuaW1wb3J0IHsgdXNlU2Vzc2lvbiwgc2lnbk91dCwgZ2V0U2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCc7XG5pbXBvcnQgeyB1c2UsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBPYmplY3RJZCB9IGZyb20gJ21vbmdvZGInO1xuaW1wb3J0IHsgcmVkaXJlY3QgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xuXG5pbnRlcmZhY2UgQ29tcG9uZW50RGF0YXtcbiAgX2lkOiBPYmplY3RJZDtcbiAgY29kZTogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBjYXRlZ29yeTogc3RyaW5nO1xuICBwcm9wczogYW55O1xuICBsaWtlczogbnVtYmVyO1xufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZmlsZSgpe1xuICBjb25zdCB7IGRhdGE6IHNlc3Npb24sIHN0YXR1cywgdXBkYXRlfSA9IHVzZVNlc3Npb24oKTtcbiAgY29uc3QgW2NvbXBzLCBzZXRDb21wc10gPSB1c2VTdGF0ZTxDb21wb25lbnREYXRhW10+KFtdKTtcbiAgY29uc3QgdXNlciA9IHNlc3Npb24/LnVzZXIgYXMgYW55O1xuXG4gIHVwXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHVzZXI/LmZhdkNvbXBzKSB7XG4gICAgICBmZXRjaChcIi9hcGkvZmF2Q29tcHNcIiwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe2NvbXBJZHM6IHVzZXIuZmF2Q29tcHN9KVxuICAgICAgfSkudGhlbihhc3luYyAocmVzKSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgICBzZXRDb21wcyhkYXRhKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW3VzZXI/LmZhdkNvbXBzXSk7XG4gIFxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8cCBjbGFzc05hbWU9J215LTUgdGV4dC01eGwgdGV4dC1jZW50ZXInPkhlbGxvIHsodXNlciBhcyBhbnkpPy5uYW1lfSDwn5GLPC9wPlxuICAgICAgPHAgY2xhc3NOYW1lPSdteS0zIHRleHQtM3hsJz5IZXJlIGFyZSB5b3VyIGZhdm9yaXRlIGNvbXBvbmVudHM6IDwvcD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZDpmbGV4IG1kOmZsZXgtd3JhcCc+XG4gICAgICAgIHtjb21wcy5tYXAoKGNvbXA6IENvbXBvbmVudERhdGEsIGluZGV4KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgIGlkPXtjb21wLl9pZH1cbiAgICAgICAgICAgICAgY29kZT17Y29tcC5jb2RlfVxuICAgICAgICAgICAgICB0aXRsZT17Y29tcC50aXRsZX1cbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2NvbXAuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgIGNhdGVnb3J5PXtjb21wLmNhdGVnb3J5fVxuICAgICAgICAgICAgICBwcm9wcz17Y29tcC5wcm9wc31cbiAgICAgICAgICAgICAgbGlrZXM9e2NvbXAubGlrZXN9IC8+XG4gICAgICAgICAgKVxuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzaWduT3V0KCl9PlxuICAgICAgICBMb2dvdXRcbiAgICAgIDwvQnV0dG9uPlxuICAgIDwvPlxuICApXG59XG4iXSwibmFtZXMiOlsiQ2FyZCIsIkJ1dHRvbiIsInVzZVNlc3Npb24iLCJzaWduT3V0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJQcm9maWxlIiwiZGF0YSIsInNlc3Npb24iLCJzdGF0dXMiLCJ1cGRhdGUiLCJjb21wcyIsInNldENvbXBzIiwidXNlciIsInVwIiwiZmF2Q29tcHMiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImNvbXBJZHMiLCJ0aGVuIiwicmVzIiwianNvbiIsInAiLCJjbGFzc05hbWUiLCJuYW1lIiwiZGl2IiwibWFwIiwiY29tcCIsImluZGV4IiwiaWQiLCJfaWQiLCJjb2RlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImNhdGVnb3J5IiwicHJvcHMiLCJsaWtlcyIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/profile/page.tsx\n"));

/***/ })

});