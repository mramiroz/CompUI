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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"b5b0ff22419c\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9AY29tcHVpL2NvbXBzL3N0eWxlcy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AY29tcHVpL2NvbXBzL3N0eWxlcy5jc3M/YzRiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcImI1YjBmZjIyNDE5Y1wiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/@compui/comps/styles.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/component/Like.tsx":
/*!*******************************************!*\
  !*** ./src/components/component/Like.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Like; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _actions_Like_removeLike__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/actions/Like/removeLike */ \"(app-pages-browser)/./src/actions/Like/removeLike.tsx\");\n/* harmony import */ var _actions_Like_addLike__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/actions/Like/addLike */ \"(app-pages-browser)/./src/actions/Like/addLike.tsx\");\n/* harmony import */ var _actions_Like_getLikesAndUserLikeStatus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/actions/Like/getLikesAndUserLikeStatus */ \"(app-pages-browser)/./src/actions/Like/getLikesAndUserLikeStatus.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Like(param) {\n    let { compId } = param;\n    _s();\n    let { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    const [liked, setLiked] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [likesCount, setLikesCount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const user = session === null || session === void 0 ? void 0 : session.user;\n    const id = (user === null || user === void 0 ? void 0 : user._id) || (user === null || user === void 0 ? void 0 : user.id);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            if (!user) {\n                return;\n            }\n            const { likesCount, userHasLiked } = await (0,_actions_Like_getLikesAndUserLikeStatus__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({\n                compId,\n                userId: id\n            });\n            setLikesCount(likesCount);\n            setLiked(userHasLiked);\n        };\n        fetchData();\n    }, [\n        session\n    ]);\n    const handleLike = async ()=>{\n        if (liked) {\n            (0,_actions_Like_removeLike__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({\n                id: compId,\n                userId: id\n            });\n            setLiked(false);\n            setLikesCount(likesCount - 1);\n        } else {\n            (0,_actions_Like_addLike__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\n                id: compId,\n                userId: id\n            });\n            setLiked(true);\n            setLikesCount(likesCount + 1);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center mt-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: handleLike,\n                className: \"transition-all duration-200 ease-in-out transform \".concat(liked ? \"scale-110\" : \"scale-100\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    src: liked ? \"/like-fill.svg\" : \"/like.svg\",\n                    alt: \"like\",\n                    width: 30,\n                    height: 30,\n                    className: \"mr-4 cursor-pointer \"\n                }, void 0, false, {\n                    fileName: \"/home/mramiroz/Escritorio/CompUI/web/src/components/component/Like.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/mramiroz/Escritorio/CompUI/web/src/components/component/Like.tsx\",\n                lineNumber: 46,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"font-bold\",\n                children: likesCount\n            }, void 0, false, {\n                fileName: \"/home/mramiroz/Escritorio/CompUI/web/src/components/component/Like.tsx\",\n                lineNumber: 55,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/mramiroz/Escritorio/CompUI/web/src/components/component/Like.tsx\",\n        lineNumber: 45,\n        columnNumber: 9\n    }, this);\n}\n_s(Like, \"hQDWDYeI66Ch1A+6upqIkgxDRBs=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession\n    ];\n});\n_c = Like;\nvar _c;\n$RefreshReg$(_c, \"Like\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2NvbXBvbmVudC9MaWtlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDNkM7QUFDRDtBQUViO0FBQ29CO0FBQ047QUFDb0M7QUFHbEUsU0FBU08sS0FBSyxLQUEwQjtRQUExQixFQUFDQyxNQUFNLEVBQW1CLEdBQTFCOztJQUN6QixJQUFJLEVBQUVDLE1BQU1DLE9BQU8sRUFBQyxHQUFHViwyREFBVUE7SUFDakMsTUFBTSxDQUFDVyxPQUFPQyxTQUFTLEdBQUdWLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ1csWUFBWUMsY0FBYyxHQUFHWiwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNYSxPQUFPTCxvQkFBQUEsOEJBQUFBLFFBQVNLLElBQUk7SUFDMUIsTUFBTUMsS0FBSyxDQUFDRCxpQkFBQUEsMkJBQUQsS0FBZUUsR0FBRyxNQUFLRixpQkFBQUEsMkJBQUQsS0FBZUMsRUFBRTtJQUVsRGYsZ0RBQVNBLENBQUM7UUFDTixNQUFNaUIsWUFBWTtZQUVkLElBQUksQ0FBQ0gsTUFBTTtnQkFDUDtZQUNKO1lBQ0EsTUFBTSxFQUFFRixVQUFVLEVBQUVNLFlBQVksRUFBRSxHQUFHLE1BQU1iLG1GQUF5QkEsQ0FBQztnQkFBQ0U7Z0JBQVFZLFFBQVFKO1lBQUU7WUFDeEZGLGNBQWNEO1lBQ2RELFNBQVNPO1FBQ2I7UUFDQUQ7SUFDSixHQUFFO1FBQUNSO0tBQVE7SUFFWCxNQUFNVyxhQUFhO1FBQ2YsSUFBSVYsT0FBTztZQUNQUCxvRUFBVUEsQ0FBQztnQkFBQ1ksSUFBSVI7Z0JBQVFZLFFBQVFKO1lBQUU7WUFDbENKLFNBQVM7WUFDVEUsY0FBY0QsYUFBYTtRQUMvQixPQUNLO1lBQ0RSLGlFQUFPQSxDQUFDO2dCQUFDVyxJQUFJUjtnQkFBUVksUUFBUUo7WUFBRTtZQUMvQkosU0FBUztZQUNURSxjQUFjRCxhQUFhO1FBQy9CO0lBQ0o7SUFFQSxxQkFDSSw4REFBQ1M7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNEO2dCQUNHRSxTQUFTSDtnQkFDVEUsV0FBVyxxREFBdUYsT0FBbENaLFFBQVEsY0FBYzswQkFFdEYsNEVBQUNSLGtEQUFLQTtvQkFDRnNCLEtBQUtkLFFBQVEsbUJBQW1CO29CQUNoQ2UsS0FBSTtvQkFBT0MsT0FBTztvQkFBSUMsUUFBUTtvQkFDOUJMLFdBQVU7Ozs7Ozs7Ozs7OzBCQUVsQiw4REFBQ007Z0JBQUtOLFdBQVU7MEJBQWFWOzs7Ozs7Ozs7Ozs7QUFHekM7R0EvQ3dCTjs7UUFDR1AsdURBQVVBOzs7S0FEYk8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY29tcG9uZW50L0xpa2UudHN4P2UzYTMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0JztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBPYmplY3RJZCB9IGZyb20gJ21vbmdvZGInO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IHJlbW92ZUxpa2UgZnJvbSAnQC9hY3Rpb25zL0xpa2UvcmVtb3ZlTGlrZSc7XG5pbXBvcnQgYWRkTGlrZSBmcm9tICdAL2FjdGlvbnMvTGlrZS9hZGRMaWtlJztcbmltcG9ydCBnZXRMaWtlc0FuZFVzZXJMaWtlU3RhdHVzIGZyb20gJ0AvYWN0aW9ucy9MaWtlL2dldExpa2VzQW5kVXNlckxpa2VTdGF0dXMnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExpa2Uoe2NvbXBJZH06IHtjb21wSWQ6IHN0cmluZ30pe1xuICAgIGxldCB7IGRhdGE6IHNlc3Npb259ID0gdXNlU2Vzc2lvbigpO1xuICAgIGNvbnN0IFtsaWtlZCwgc2V0TGlrZWRdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgW2xpa2VzQ291bnQsIHNldExpa2VzQ291bnRdID0gdXNlU3RhdGUoMClcbiAgICBjb25zdCB1c2VyID0gc2Vzc2lvbj8udXNlcjtcbiAgICBjb25zdCBpZCA9ICh1c2VyIGFzIGFueSk/Ll9pZCB8fCAodXNlciBhcyBhbnkpPy5pZDtcbiAgICBcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PlxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAoIXVzZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB7IGxpa2VzQ291bnQsIHVzZXJIYXNMaWtlZCB9ID0gYXdhaXQgZ2V0TGlrZXNBbmRVc2VyTGlrZVN0YXR1cyh7Y29tcElkLCB1c2VySWQ6IGlkfSk7XG4gICAgICAgICAgICBzZXRMaWtlc0NvdW50KGxpa2VzQ291bnQpO1xuICAgICAgICAgICAgc2V0TGlrZWQodXNlckhhc0xpa2VkKTtcbiAgICAgICAgfVxuICAgICAgICBmZXRjaERhdGEoKTtcbiAgICB9LFtzZXNzaW9uXSlcbiAgICBcbiAgICBjb25zdCBoYW5kbGVMaWtlID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBpZiAobGlrZWQpIHtcbiAgICAgICAgICAgIHJlbW92ZUxpa2Uoe2lkOiBjb21wSWQsIHVzZXJJZDogaWR9KTtcbiAgICAgICAgICAgIHNldExpa2VkKGZhbHNlKTtcbiAgICAgICAgICAgIHNldExpa2VzQ291bnQobGlrZXNDb3VudCAtIDEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYWRkTGlrZSh7aWQ6IGNvbXBJZCwgdXNlcklkOiBpZH0pO1xuICAgICAgICAgICAgc2V0TGlrZWQodHJ1ZSk7XG4gICAgICAgICAgICBzZXRMaWtlc0NvdW50KGxpa2VzQ291bnQgKyAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgbXQtNFwiPlxuICAgICAgICAgICAgPGRpdiBcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVMaWtlfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTIwMCBlYXNlLWluLW91dCB0cmFuc2Zvcm0gJHtsaWtlZCA/ICdzY2FsZS0xMTAnIDogJ3NjYWxlLTEwMCd9YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8SW1hZ2UgXG4gICAgICAgICAgICAgICAgICAgIHNyYz17bGlrZWQgPyBcIi9saWtlLWZpbGwuc3ZnXCIgOiBcIi9saWtlLnN2Z1wifSBcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwibGlrZVwiIHdpZHRoPXszMH0gaGVpZ2h0PXszMH0gXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1yLTQgY3Vyc29yLXBvaW50ZXIgXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmb250LWJvbGQnPntsaWtlc0NvdW50fTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJ1c2VTZXNzaW9uIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJJbWFnZSIsInJlbW92ZUxpa2UiLCJhZGRMaWtlIiwiZ2V0TGlrZXNBbmRVc2VyTGlrZVN0YXR1cyIsIkxpa2UiLCJjb21wSWQiLCJkYXRhIiwic2Vzc2lvbiIsImxpa2VkIiwic2V0TGlrZWQiLCJsaWtlc0NvdW50Iiwic2V0TGlrZXNDb3VudCIsInVzZXIiLCJpZCIsIl9pZCIsImZldGNoRGF0YSIsInVzZXJIYXNMaWtlZCIsInVzZXJJZCIsImhhbmRsZUxpa2UiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/component/Like.tsx\n"));

/***/ })

});