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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"839e920fc672\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9AY29tcHVpL2NvbXBzL3N0eWxlcy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AY29tcHVpL2NvbXBzL3N0eWxlcy5jc3M/YzRiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjgzOWU5MjBmYzY3MlwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/@compui/comps/styles.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/component/Like.tsx":
/*!*******************************************!*\
  !*** ./src/components/component/Like.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Like; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Like(param) {\n    let { compId } = param;\n    _s();\n    const { data: session, status } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    const [liked, setLiked] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [likesCount, setLikesCount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const user = session === null || session === void 0 ? void 0 : session.user;\n    const prueba = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)();\n    const id = user === null || user === void 0 ? void 0 : user._id;\n    const handleLike = async ()=>{\n        const newLike = !liked;\n        setLiked(newLike);\n        if (newLike) {\n            setLikesCount(likesCount + 1);\n            await fetch(\"/api/favComps/like\", {\n                method: \"PUT\",\n                body: JSON.stringify({\n                    id,\n                    compId\n                }),\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n        } else {\n            setLikesCount(likesCount - 1);\n            await fetch(\"/api/favComps/unlike\", {\n                method: \"PUT\",\n                body: JSON.stringify({\n                    id,\n                    compId\n                }),\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (session) {\n            var _session_data, _user_favComps;\n            const user = session === null || session === void 0 ? void 0 : (_session_data = session.data) === null || _session_data === void 0 ? void 0 : _session_data.user;\n            const id = user === null || user === void 0 ? void 0 : user._id;\n            const toString = compId.toString();\n            if ((_user_favComps = user.favComps) === null || _user_favComps === void 0 ? void 0 : _user_favComps.includes(toString)) {\n                setLiked(true);\n            } else {\n                setLiked(false);\n            }\n        }\n    }, [\n        session\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center mt-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: handleLike,\n                className: \"transition-all duration-200 ease-in-out transform \".concat(liked ? \"scale-110\" : \"scale-100\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    src: liked ? \"/like-fill.svg\" : \"/like.svg\",\n                    alt: \"like\",\n                    width: 30,\n                    height: 30,\n                    className: \"mr-4 cursor-pointer\"\n                }, void 0, false, {\n                    fileName: \"/home/mramiroz/Escritorio/CompUI/web/src/components/component/Like.tsx\",\n                    lineNumber: 59,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/mramiroz/Escritorio/CompUI/web/src/components/component/Like.tsx\",\n                lineNumber: 55,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"font-bold\",\n                children: likesCount\n            }, void 0, false, {\n                fileName: \"/home/mramiroz/Escritorio/CompUI/web/src/components/component/Like.tsx\",\n                lineNumber: 64,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/mramiroz/Escritorio/CompUI/web/src/components/component/Like.tsx\",\n        lineNumber: 54,\n        columnNumber: 9\n    }, this);\n}\n_s(Like, \"G1cO+GOJtSygztSxSN+CdJueYE0=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession\n    ];\n});\n_c = Like;\nvar _c;\n$RefreshReg$(_c, \"Like\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2NvbXBvbmVudC9MaWtlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBeUQ7QUFDYjtBQUViO0FBR2hCLFNBQVNLLEtBQUssS0FBNEI7UUFBNUIsRUFBQ0MsTUFBTSxFQUFxQixHQUE1Qjs7SUFDekIsTUFBTSxFQUFFQyxNQUFNQyxPQUFPLEVBQUVDLE1BQU0sRUFBQyxHQUFHUiwyREFBVUE7SUFDM0MsTUFBTSxDQUFDUyxPQUFPQyxTQUFTLEdBQUdSLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ1MsWUFBWUMsY0FBYyxHQUFHViwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNVyxPQUFPTixvQkFBQUEsOEJBQUFBLFFBQVNNLElBQUk7SUFDMUIsTUFBTUMsU0FBU2YsMkRBQVVBO0lBQ3pCLE1BQU1nQixLQUFNRixpQkFBQUEsMkJBQUQsS0FBZUcsR0FBRztJQUU3QixNQUFNQyxhQUFhO1FBQ2YsTUFBTUMsVUFBVSxDQUFDVDtRQUNqQkMsU0FBU1E7UUFDVCxJQUFJQSxTQUFRO1lBQ1JOLGNBQWNELGFBQWE7WUFDM0IsTUFBTVEsTUFBTSxzQkFBc0I7Z0JBQzlCQyxRQUFRO2dCQUNSQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7b0JBQUNSO29CQUFJVjtnQkFBTTtnQkFDaENtQixTQUFTO29CQUNMLGdCQUFnQjtnQkFDcEI7WUFDSjtRQUNKLE9BQ0k7WUFDQVosY0FBY0QsYUFBYTtZQUMzQixNQUFNUSxNQUFNLHdCQUF3QjtnQkFDaENDLFFBQVE7Z0JBQ1JDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztvQkFBQ1I7b0JBQUlWO2dCQUFNO2dCQUNoQ21CLFNBQVM7b0JBQ0wsZ0JBQWdCO2dCQUNwQjtZQUNKO1FBQ0o7SUFDSjtJQUVBdkIsZ0RBQVNBLENBQUM7UUFDTixJQUFJTSxTQUFTO2dCQUNJQSxlQUdUO1lBSEosTUFBTU0sT0FBT04sb0JBQUFBLCtCQUFBQSxnQkFBQUEsUUFBU0QsSUFBSSxjQUFiQyxvQ0FBQUEsY0FBZU0sSUFBSTtZQUNoQyxNQUFNRSxLQUFNRixpQkFBQUEsMkJBQUQsS0FBZUcsR0FBRztZQUM3QixNQUFNUyxXQUFXcEIsT0FBT29CLFFBQVE7WUFDaEMsS0FBSSxzQkFBY0MsUUFBUSxjQUF0QixvREFBd0JDLFFBQVEsQ0FBQ0YsV0FBVTtnQkFDM0NmLFNBQVM7WUFDYixPQUFPO2dCQUNIQSxTQUFTO1lBQ2I7UUFDSjtJQUNKLEdBQUc7UUFBQ0g7S0FBUTtJQUVaLHFCQUNJLDhEQUFDcUI7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNEO2dCQUNHRSxTQUFTYjtnQkFDVFksV0FBVyxxREFBdUYsT0FBbENwQixRQUFRLGNBQWM7MEJBRXRGLDRFQUFDTixrREFBS0E7b0JBQ0Y0QixLQUFLdEIsUUFBUSxtQkFBbUI7b0JBQ2hDdUIsS0FBSTtvQkFBT0MsT0FBTztvQkFBSUMsUUFBUTtvQkFDOUJMLFdBQVU7Ozs7Ozs7Ozs7OzBCQUVsQiw4REFBQ007Z0JBQUtOLFdBQVU7MEJBQWFsQjs7Ozs7Ozs7Ozs7O0FBR3pDO0dBNUR3QlA7O1FBQ2FKLHVEQUFVQTs7O0tBRHZCSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jb21wb25lbnQvTGlrZS50c3g/ZTNhMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRTZXNzaW9uLCB1c2VTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0JztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBPYmplY3RJZCB9IGZyb20gJ21vbmdvZGInO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IHsgZ2V0IH0gZnJvbSAnaHR0cCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExpa2Uoe2NvbXBJZH06IHtjb21wSWQ6IE9iamVjdElkfSl7XG4gICAgY29uc3QgeyBkYXRhOiBzZXNzaW9uLCBzdGF0dXN9ID0gdXNlU2Vzc2lvbigpO1xuICAgIGNvbnN0IFtsaWtlZCwgc2V0TGlrZWRdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgW2xpa2VzQ291bnQsIHNldExpa2VzQ291bnRdID0gdXNlU3RhdGUoMClcbiAgICBjb25zdCB1c2VyID0gc2Vzc2lvbj8udXNlcjtcbiAgICBjb25zdCBwcnVlYmEgPSBnZXRTZXNzaW9uKCk7XG4gICAgY29uc3QgaWQgPSAodXNlciBhcyBhbnkpPy5faWQ7XG4gICAgXG4gICAgY29uc3QgaGFuZGxlTGlrZSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgbmV3TGlrZSA9ICFsaWtlZDtcbiAgICAgICAgc2V0TGlrZWQobmV3TGlrZSk7XG4gICAgICAgIGlmIChuZXdMaWtlKXtcbiAgICAgICAgICAgIHNldExpa2VzQ291bnQobGlrZXNDb3VudCArIDEpO1xuICAgICAgICAgICAgYXdhaXQgZmV0Y2goJy9hcGkvZmF2Q29tcHMvbGlrZScsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtpZCwgY29tcElkfSksXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHNldExpa2VzQ291bnQobGlrZXNDb3VudCAtIDEpO1xuICAgICAgICAgICAgYXdhaXQgZmV0Y2goJy9hcGkvZmF2Q29tcHMvdW5saWtlJywge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe2lkLCBjb21wSWR9KSxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoc2Vzc2lvbikge1xuICAgICAgICAgICAgY29uc3QgdXNlciA9IHNlc3Npb24/LmRhdGE/LnVzZXI7XG4gICAgICAgICAgICBjb25zdCBpZCA9ICh1c2VyIGFzIGFueSk/Ll9pZDtcbiAgICAgICAgICAgIGNvbnN0IHRvU3RyaW5nID0gY29tcElkLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBpZiAoKHVzZXIgYXMgYW55KS5mYXZDb21wcz8uaW5jbHVkZXModG9TdHJpbmcpKXtcbiAgICAgICAgICAgICAgICBzZXRMaWtlZCh0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0TGlrZWQoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW3Nlc3Npb25dKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgbXQtNFwiPlxuICAgICAgICAgICAgPGRpdiBcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVMaWtlfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTIwMCBlYXNlLWluLW91dCB0cmFuc2Zvcm0gJHtsaWtlZCA/ICdzY2FsZS0xMTAnIDogJ3NjYWxlLTEwMCd9YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8SW1hZ2UgXG4gICAgICAgICAgICAgICAgICAgIHNyYz17bGlrZWQgPyBcIi9saWtlLWZpbGwuc3ZnXCIgOiBcIi9saWtlLnN2Z1wifSBcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwibGlrZVwiIHdpZHRoPXszMH0gaGVpZ2h0PXszMH0gXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1yLTQgY3Vyc29yLXBvaW50ZXJcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ZvbnQtYm9sZCc+e2xpa2VzQ291bnR9PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sIm5hbWVzIjpbImdldFNlc3Npb24iLCJ1c2VTZXNzaW9uIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJJbWFnZSIsIkxpa2UiLCJjb21wSWQiLCJkYXRhIiwic2Vzc2lvbiIsInN0YXR1cyIsImxpa2VkIiwic2V0TGlrZWQiLCJsaWtlc0NvdW50Iiwic2V0TGlrZXNDb3VudCIsInVzZXIiLCJwcnVlYmEiLCJpZCIsIl9pZCIsImhhbmRsZUxpa2UiLCJuZXdMaWtlIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJ0b1N0cmluZyIsImZhdkNvbXBzIiwiaW5jbHVkZXMiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/component/Like.tsx\n"));

/***/ })

});