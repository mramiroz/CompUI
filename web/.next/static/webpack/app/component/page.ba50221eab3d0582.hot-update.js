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

/***/ "(app-pages-browser)/./node_modules/@compui/comps/styles.css":
/*!***********************************************!*\
  !*** ./node_modules/@compui/comps/styles.css ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"57d5cb23f25a\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9AY29tcHVpL2NvbXBzL3N0eWxlcy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AY29tcHVpL2NvbXBzL3N0eWxlcy5jc3M/YzRiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjU3ZDVjYjIzZjI1YVwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/@compui/comps/styles.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/component/Like.tsx":
/*!*******************************************!*\
  !*** ./src/components/component/Like.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Like; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Like(param) {\n    let { compId } = param;\n    var _session_data;\n    _s();\n    const { data: session, status } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    const [liked, setLiked] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [likesCount, setLikesCount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const user = session === null || session === void 0 ? void 0 : (_session_data = session.data) === null || _session_data === void 0 ? void 0 : _session_data.user;\n    const id = user === null || user === void 0 ? void 0 : user._id;\n    const handleLike = async ()=>{\n        const newLike = !liked;\n        setLiked(newLike);\n        if (newLike) {\n            setLikesCount(likesCount + 1);\n            await fetch(\"/api/favComps/like\", {\n                method: \"PUT\",\n                body: JSON.stringify({\n                    id,\n                    compId\n                }),\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n        } else {\n            setLikesCount(likesCount - 1);\n            await fetch(\"/api/favComps/unlike\", {\n                method: \"PUT\",\n                body: JSON.stringify({\n                    id,\n                    compId\n                }),\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (session) {\n            var _session_data, _user_favComps;\n            const user = session === null || session === void 0 ? void 0 : (_session_data = session.data) === null || _session_data === void 0 ? void 0 : _session_data.user;\n            const id = user === null || user === void 0 ? void 0 : user._id;\n            const toString = compId.toString();\n            if ((_user_favComps = user.favComps) === null || _user_favComps === void 0 ? void 0 : _user_favComps.includes(toString)) {\n                setLiked(true);\n            } else {\n                setLiked(false);\n            }\n        }\n    }, [\n        session\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center mt-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: handleLike,\n                className: \"transition-all duration-200 ease-in-out transform \".concat(liked ? \"scale-110\" : \"scale-100\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    src: liked ? \"/like-fill.svg\" : \"/like.svg\",\n                    alt: \"like\",\n                    width: 30,\n                    height: 30,\n                    className: \"mr-4 cursor-pointer\"\n                }, void 0, false, {\n                    fileName: \"/home/mramiroz/Escritorio/CompUI/web/src/components/component/Like.tsx\",\n                    lineNumber: 57,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/mramiroz/Escritorio/CompUI/web/src/components/component/Like.tsx\",\n                lineNumber: 53,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"font-bold\",\n                children: likesCount\n            }, void 0, false, {\n                fileName: \"/home/mramiroz/Escritorio/CompUI/web/src/components/component/Like.tsx\",\n                lineNumber: 62,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/mramiroz/Escritorio/CompUI/web/src/components/component/Like.tsx\",\n        lineNumber: 52,\n        columnNumber: 9\n    }, this);\n}\n_s(Like, \"G1cO+GOJtSygztSxSN+CdJueYE0=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession\n    ];\n});\n_c = Like;\nvar _c;\n$RefreshReg$(_c, \"Like\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2NvbXBvbmVudC9MaWtlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBeUQ7QUFDYjtBQUViO0FBRWhCLFNBQVNJLEtBQUssS0FBNEI7UUFBNUIsRUFBQ0MsTUFBTSxFQUFxQixHQUE1QjtRQUlaQzs7SUFIYixNQUFNLEVBQUVDLE1BQU1ELE9BQU8sRUFBRUUsTUFBTSxFQUFDLEdBQUdSLDJEQUFVQTtJQUMzQyxNQUFNLENBQUNTLE9BQU9DLFNBQVMsR0FBR1IsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDUyxZQUFZQyxjQUFjLEdBQUdWLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU1XLE9BQU9QLG9CQUFBQSwrQkFBQUEsZ0JBQUFBLFFBQVNDLElBQUksY0FBYkQsb0NBQUFBLGNBQWVPLElBQUk7SUFDaEMsTUFBTUMsS0FBTUQsaUJBQUFBLDJCQUFELEtBQWVFLEdBQUc7SUFFN0IsTUFBTUMsYUFBYTtRQUNmLE1BQU1DLFVBQVUsQ0FBQ1I7UUFDakJDLFNBQVNPO1FBQ1QsSUFBSUEsU0FBUTtZQUNSTCxjQUFjRCxhQUFhO1lBQzNCLE1BQU1PLE1BQU0sc0JBQXNCO2dCQUM5QkMsUUFBUTtnQkFDUkMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO29CQUFDUjtvQkFBSVQ7Z0JBQU07Z0JBQ2hDa0IsU0FBUztvQkFDTCxnQkFBZ0I7Z0JBQ3BCO1lBQ0o7UUFDSixPQUNJO1lBQ0FYLGNBQWNELGFBQWE7WUFDM0IsTUFBTU8sTUFBTSx3QkFBd0I7Z0JBQ2hDQyxRQUFRO2dCQUNSQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7b0JBQUNSO29CQUFJVDtnQkFBTTtnQkFDaENrQixTQUFTO29CQUNMLGdCQUFnQjtnQkFDcEI7WUFDSjtRQUNKO0lBQ0o7SUFFQXRCLGdEQUFTQSxDQUFDO1FBQ04sSUFBSUssU0FBUztnQkFDSUEsZUFHVDtZQUhKLE1BQU1PLE9BQU9QLG9CQUFBQSwrQkFBQUEsZ0JBQUFBLFFBQVNDLElBQUksY0FBYkQsb0NBQUFBLGNBQWVPLElBQUk7WUFDaEMsTUFBTUMsS0FBTUQsaUJBQUFBLDJCQUFELEtBQWVFLEdBQUc7WUFDN0IsTUFBTVMsV0FBV25CLE9BQU9tQixRQUFRO1lBQ2hDLEtBQUksc0JBQWNDLFFBQVEsY0FBdEIsb0RBQXdCQyxRQUFRLENBQUNGLFdBQVU7Z0JBQzNDZCxTQUFTO1lBQ2IsT0FBTztnQkFDSEEsU0FBUztZQUNiO1FBQ0o7SUFDSixHQUFHO1FBQUNKO0tBQVE7SUFFWixxQkFDSSw4REFBQ3FCO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDRDtnQkFDR0UsU0FBU2I7Z0JBQ1RZLFdBQVcscURBQXVGLE9BQWxDbkIsUUFBUSxjQUFjOzBCQUV0Riw0RUFBQ04sa0RBQUtBO29CQUNGMkIsS0FBS3JCLFFBQVEsbUJBQW1CO29CQUNoQ3NCLEtBQUk7b0JBQU9DLE9BQU87b0JBQUlDLFFBQVE7b0JBQzlCTCxXQUFVOzs7Ozs7Ozs7OzswQkFFbEIsOERBQUNNO2dCQUFLTixXQUFVOzBCQUFhakI7Ozs7Ozs7Ozs7OztBQUd6QztHQTNEd0JQOztRQUNhSix1REFBVUE7OztLQUR2QkkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY29tcG9uZW50L0xpa2UudHN4P2UzYTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0U2Vzc2lvbiwgdXNlU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgT2JqZWN0SWQgfSBmcm9tICdtb25nb2RiJztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGlrZSh7Y29tcElkfToge2NvbXBJZDogT2JqZWN0SWR9KXtcbiAgICBjb25zdCB7IGRhdGE6IHNlc3Npb24sIHN0YXR1c30gPSB1c2VTZXNzaW9uKCk7XG4gICAgY29uc3QgW2xpa2VkLCBzZXRMaWtlZF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCBbbGlrZXNDb3VudCwgc2V0TGlrZXNDb3VudF0gPSB1c2VTdGF0ZSgwKVxuICAgIGNvbnN0IHVzZXIgPSBzZXNzaW9uPy5kYXRhPy51c2VyO1xuICAgIGNvbnN0IGlkID0gKHVzZXIgYXMgYW55KT8uX2lkO1xuICAgIFxuICAgIGNvbnN0IGhhbmRsZUxpa2UgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0xpa2UgPSAhbGlrZWQ7XG4gICAgICAgIHNldExpa2VkKG5ld0xpa2UpO1xuICAgICAgICBpZiAobmV3TGlrZSl7XG4gICAgICAgICAgICBzZXRMaWtlc0NvdW50KGxpa2VzQ291bnQgKyAxKTtcbiAgICAgICAgICAgIGF3YWl0IGZldGNoKCcvYXBpL2ZhdkNvbXBzL2xpa2UnLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7aWQsIGNvbXBJZH0pLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBzZXRMaWtlc0NvdW50KGxpa2VzQ291bnQgLSAxKTtcbiAgICAgICAgICAgIGF3YWl0IGZldGNoKCcvYXBpL2ZhdkNvbXBzL3VubGlrZScsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtpZCwgY29tcElkfSksXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHNlc3Npb24pIHtcbiAgICAgICAgICAgIGNvbnN0IHVzZXIgPSBzZXNzaW9uPy5kYXRhPy51c2VyO1xuICAgICAgICAgICAgY29uc3QgaWQgPSAodXNlciBhcyBhbnkpPy5faWQ7XG4gICAgICAgICAgICBjb25zdCB0b1N0cmluZyA9IGNvbXBJZC50b1N0cmluZygpO1xuICAgICAgICAgICAgaWYgKCh1c2VyIGFzIGFueSkuZmF2Q29tcHM/LmluY2x1ZGVzKHRvU3RyaW5nKSl7XG4gICAgICAgICAgICAgICAgc2V0TGlrZWQodHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNldExpa2VkKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtzZXNzaW9uXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIG10LTRcIj5cbiAgICAgICAgICAgIDxkaXYgXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTGlrZX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0yMDAgZWFzZS1pbi1vdXQgdHJhbnNmb3JtICR7bGlrZWQgPyAnc2NhbGUtMTEwJyA6ICdzY2FsZS0xMDAnfWB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEltYWdlIFxuICAgICAgICAgICAgICAgICAgICBzcmM9e2xpa2VkID8gXCIvbGlrZS1maWxsLnN2Z1wiIDogXCIvbGlrZS5zdmdcIn0gXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cImxpa2VcIiB3aWR0aD17MzB9IGhlaWdodD17MzB9IFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtci00IGN1cnNvci1wb2ludGVyXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmb250LWJvbGQnPntsaWtlc0NvdW50fTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJ1c2VTZXNzaW9uIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJJbWFnZSIsIkxpa2UiLCJjb21wSWQiLCJzZXNzaW9uIiwiZGF0YSIsInN0YXR1cyIsImxpa2VkIiwic2V0TGlrZWQiLCJsaWtlc0NvdW50Iiwic2V0TGlrZXNDb3VudCIsInVzZXIiLCJpZCIsIl9pZCIsImhhbmRsZUxpa2UiLCJuZXdMaWtlIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJ0b1N0cmluZyIsImZhdkNvbXBzIiwiaW5jbHVkZXMiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/component/Like.tsx\n"));

/***/ })

});