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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"ba57867fb5ab\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9AY29tcHVpL2NvbXBzL3N0eWxlcy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AY29tcHVpL2NvbXBzL3N0eWxlcy5jc3M/YzRiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcImJhNTc4NjdmYjVhYlwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/@compui/comps/styles.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/component/Like.tsx":
/*!*******************************************!*\
  !*** ./src/components/component/Like.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Like; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Like(param) {\n    let { compId } = param;\n    var _session_data;\n    _s();\n    const session = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    const [liked, setLiked] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [likesCount, setLikesCount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const user = session === null || session === void 0 ? void 0 : (_session_data = session.data) === null || _session_data === void 0 ? void 0 : _session_data.user;\n    const id = user === null || user === void 0 ? void 0 : user._id;\n    const handleLike = async ()=>{\n        const newLike = !liked;\n        setLiked(newLike);\n        if (newLike) {\n            setLikesCount(likesCount + 1);\n            await fetch(\"/api/favComps/like\", {\n                method: \"PUT\",\n                body: JSON.stringify({\n                    id,\n                    compId\n                }),\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n        } else {\n            setLikesCount(likesCount - 1);\n            await fetch(\"/api/favComps/unlike\", {\n                method: \"PUT\",\n                body: JSON.stringify({\n                    id,\n                    compId\n                }),\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (session) {\n            var _session_data, _user_favComps;\n            const user = session === null || session === void 0 ? void 0 : (_session_data = session.data) === null || _session_data === void 0 ? void 0 : _session_data.user;\n            const id = user === null || user === void 0 ? void 0 : user._id;\n            const toString = compId.toString();\n            if ((_user_favComps = user.favComps) === null || _user_favComps === void 0 ? void 0 : _user_favComps.includes(toString)) {\n                setLiked(true);\n            } else {\n                setLiked(false);\n            }\n        }\n    }, [\n        session\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center mt-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: handleLike,\n                className: \"transition-all duration-200 ease-in-out transform \".concat(liked ? \"scale-110\" : \"scale-100\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    src: liked ? \"/like-fill.svg\" : \"/like.svg\",\n                    alt: \"like\",\n                    width: 30,\n                    height: 30,\n                    className: \"mr-4 cursor-pointer\"\n                }, void 0, false, {\n                    fileName: \"/home/mramiroz/Escritorio/CompUI/web/src/components/component/Like.tsx\",\n                    lineNumber: 57,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/mramiroz/Escritorio/CompUI/web/src/components/component/Like.tsx\",\n                lineNumber: 53,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"font-bold\",\n                children: likesCount\n            }, void 0, false, {\n                fileName: \"/home/mramiroz/Escritorio/CompUI/web/src/components/component/Like.tsx\",\n                lineNumber: 62,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/mramiroz/Escritorio/CompUI/web/src/components/component/Like.tsx\",\n        lineNumber: 52,\n        columnNumber: 9\n    }, this);\n}\n_s(Like, \"GWf1zlDnib+bwyQrpULYseX7Mm0=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession\n    ];\n});\n_c = Like;\nvar _c;\n$RefreshReg$(_c, \"Like\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2NvbXBvbmVudC9MaWtlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBeUQ7QUFDYjtBQUViO0FBRWhCLFNBQVNJLEtBQUssS0FBNEI7UUFBNUIsRUFBQ0MsTUFBTSxFQUFxQixHQUE1QjtRQUlaQzs7SUFIYixNQUFNQSxVQUFVTiwyREFBVUE7SUFDMUIsTUFBTSxDQUFDTyxPQUFPQyxTQUFTLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ08sWUFBWUMsY0FBYyxHQUFHUiwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNUyxPQUFPTCxvQkFBQUEsK0JBQUFBLGdCQUFBQSxRQUFTTSxJQUFJLGNBQWJOLG9DQUFBQSxjQUFlSyxJQUFJO0lBQ2hDLE1BQU1FLEtBQU1GLGlCQUFBQSwyQkFBRCxLQUFlRyxHQUFHO0lBRTdCLE1BQU1DLGFBQWE7UUFDZixNQUFNQyxVQUFVLENBQUNUO1FBQ2pCQyxTQUFTUTtRQUNULElBQUlBLFNBQVE7WUFDUk4sY0FBY0QsYUFBYTtZQUMzQixNQUFNUSxNQUFNLHNCQUFzQjtnQkFDOUJDLFFBQVE7Z0JBQ1JDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztvQkFBQ1I7b0JBQUlSO2dCQUFNO2dCQUNoQ2lCLFNBQVM7b0JBQ0wsZ0JBQWdCO2dCQUNwQjtZQUNKO1FBQ0osT0FDSTtZQUNBWixjQUFjRCxhQUFhO1lBQzNCLE1BQU1RLE1BQU0sd0JBQXdCO2dCQUNoQ0MsUUFBUTtnQkFDUkMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO29CQUFDUjtvQkFBSVI7Z0JBQU07Z0JBQ2hDaUIsU0FBUztvQkFDTCxnQkFBZ0I7Z0JBQ3BCO1lBQ0o7UUFDSjtJQUNKO0lBRUFyQixnREFBU0EsQ0FBQztRQUNOLElBQUlLLFNBQVM7Z0JBQ0lBLGVBR1Q7WUFISixNQUFNSyxPQUFPTCxvQkFBQUEsK0JBQUFBLGdCQUFBQSxRQUFTTSxJQUFJLGNBQWJOLG9DQUFBQSxjQUFlSyxJQUFJO1lBQ2hDLE1BQU1FLEtBQU1GLGlCQUFBQSwyQkFBRCxLQUFlRyxHQUFHO1lBQzdCLE1BQU1TLFdBQVdsQixPQUFPa0IsUUFBUTtZQUNoQyxLQUFJLHNCQUFjQyxRQUFRLGNBQXRCLG9EQUF3QkMsUUFBUSxDQUFDRixXQUFVO2dCQUMzQ2YsU0FBUztZQUNiLE9BQU87Z0JBQ0hBLFNBQVM7WUFDYjtRQUNKO0lBQ0osR0FBRztRQUFDRjtLQUFRO0lBRVoscUJBQ0ksOERBQUNvQjtRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0Q7Z0JBQ0dFLFNBQVNiO2dCQUNUWSxXQUFXLHFEQUF1RixPQUFsQ3BCLFFBQVEsY0FBYzswQkFFdEYsNEVBQUNKLGtEQUFLQTtvQkFDRjBCLEtBQUt0QixRQUFRLG1CQUFtQjtvQkFDaEN1QixLQUFJO29CQUFPQyxPQUFPO29CQUFJQyxRQUFRO29CQUM5QkwsV0FBVTs7Ozs7Ozs7Ozs7MEJBRWxCLDhEQUFDTTtnQkFBS04sV0FBVTswQkFBYWxCOzs7Ozs7Ozs7Ozs7QUFHekM7R0EzRHdCTDs7UUFDSkosdURBQVVBOzs7S0FETkkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY29tcG9uZW50L0xpa2UudHN4P2UzYTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0U2Vzc2lvbiwgdXNlU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgT2JqZWN0SWQgfSBmcm9tICdtb25nb2RiJztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGlrZSh7Y29tcElkfToge2NvbXBJZDogT2JqZWN0SWR9KXtcbiAgICBjb25zdCBzZXNzaW9uID0gdXNlU2Vzc2lvbigpO1xuICAgIGNvbnN0IFtsaWtlZCwgc2V0TGlrZWRdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgW2xpa2VzQ291bnQsIHNldExpa2VzQ291bnRdID0gdXNlU3RhdGUoMClcbiAgICBjb25zdCB1c2VyID0gc2Vzc2lvbj8uZGF0YT8udXNlcjtcbiAgICBjb25zdCBpZCA9ICh1c2VyIGFzIGFueSk/Ll9pZDtcbiAgICBcbiAgICBjb25zdCBoYW5kbGVMaWtlID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBuZXdMaWtlID0gIWxpa2VkO1xuICAgICAgICBzZXRMaWtlZChuZXdMaWtlKTtcbiAgICAgICAgaWYgKG5ld0xpa2Upe1xuICAgICAgICAgICAgc2V0TGlrZXNDb3VudChsaWtlc0NvdW50ICsgMSk7XG4gICAgICAgICAgICBhd2FpdCBmZXRjaCgnL2FwaS9mYXZDb21wcy9saWtlJywge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe2lkLCBjb21wSWR9KSxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgc2V0TGlrZXNDb3VudChsaWtlc0NvdW50IC0gMSk7XG4gICAgICAgICAgICBhd2FpdCBmZXRjaCgnL2FwaS9mYXZDb21wcy91bmxpa2UnLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7aWQsIGNvbXBJZH0pLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChzZXNzaW9uKSB7XG4gICAgICAgICAgICBjb25zdCB1c2VyID0gc2Vzc2lvbj8uZGF0YT8udXNlcjtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gKHVzZXIgYXMgYW55KT8uX2lkO1xuICAgICAgICAgICAgY29uc3QgdG9TdHJpbmcgPSBjb21wSWQudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGlmICgodXNlciBhcyBhbnkpLmZhdkNvbXBzPy5pbmNsdWRlcyh0b1N0cmluZykpe1xuICAgICAgICAgICAgICAgIHNldExpa2VkKHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZXRMaWtlZChmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbc2Vzc2lvbl0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBtdC00XCI+XG4gICAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUxpa2V9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMjAwIGVhc2UtaW4tb3V0IHRyYW5zZm9ybSAke2xpa2VkID8gJ3NjYWxlLTExMCcgOiAnc2NhbGUtMTAwJ31gfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxJbWFnZSBcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtsaWtlZCA/IFwiL2xpa2UtZmlsbC5zdmdcIiA6IFwiL2xpa2Uuc3ZnXCJ9IFxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJsaWtlXCIgd2lkdGg9ezMwfSBoZWlnaHQ9ezMwfSBcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXItNCBjdXJzb3ItcG9pbnRlclwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZm9udC1ib2xkJz57bGlrZXNDb3VudH08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwibmFtZXMiOlsidXNlU2Vzc2lvbiIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSW1hZ2UiLCJMaWtlIiwiY29tcElkIiwic2Vzc2lvbiIsImxpa2VkIiwic2V0TGlrZWQiLCJsaWtlc0NvdW50Iiwic2V0TGlrZXNDb3VudCIsInVzZXIiLCJkYXRhIiwiaWQiLCJfaWQiLCJoYW5kbGVMaWtlIiwibmV3TGlrZSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwidG9TdHJpbmciLCJmYXZDb21wcyIsImluY2x1ZGVzIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0Iiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/component/Like.tsx\n"));

/***/ })

});