"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/props/page",{

/***/ "(app-pages-browser)/./node_modules/@zabui/comps/dist/components/Profile.js":
/*!**************************************************************!*\
  !*** ./node_modules/@zabui/comps/dist/components/Profile.js ***!
  \**************************************************************/
/***/ (function(module, exports, __webpack_require__) {

eval(__webpack_require__.ts("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = Profile;\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\"));\nfunction _interopRequireDefault(e) { return e && e.__esModule ? e : { \"default\": e }; }\nfunction Profile(_ref) {\n  var image = _ref.image,\n    width = _ref.width,\n    height = _ref.height,\n    borderColor = _ref.borderColor,\n    href = _ref.href,\n    alt = _ref.alt;\n  if (!width) width = 3;\n  if (!height) height = 3;\n  return /*#__PURE__*/_react[\"default\"].createElement(\"div\", {\n    className: \"flex items-center\"\n  }, /*#__PURE__*/_react[\"default\"].createElement(\"a\", {\n    href: href,\n    className: \"cursor-pointer\"\n  }, /*#__PURE__*/_react[\"default\"].createElement(\"img\", {\n    src: image,\n    alt: alt,\n    style: {\n      borderColor: borderColor,\n      width: \"\".concat(width, \"rem\"),\n      height: \"\".concat(height, \"rem\"),\n      objectFit: 'cover'\n    },\n    className: \"mr-4 border-2 rounded-full cursor-pointer\"\n  })));\n}\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9AemFidWkvY29tcHMvZGlzdC9jb21wb25lbnRzL1Byb2ZpbGUuanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWIsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0Ysa0JBQWtCO0FBQ2xCLG9DQUFvQyxtQkFBTyxDQUFDLG1GQUFPO0FBQ25ELHFDQUFxQyxpQ0FBaUM7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxNQUFrQjtBQUNuRDtBQUNBLDRDQUE0QyxNQUFrQjtBQUM5RDtBQUNBO0FBQ0EsaUZBQWlGLFNBQXFCO0FBQ3RHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsTUFBa0I7QUFDbEM7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsaUJBQTZCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixNQUFrQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixNQUFrQjtBQUN0QztBQUNBO0FBQ0E7QUFDQSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AemFidWkvY29tcHMvZGlzdC9jb21wb25lbnRzL1Byb2ZpbGUuanM/OGYxMiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gUHJvZmlsZTtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KGUpIHsgcmV0dXJuIGUgJiYgZS5fX2VzTW9kdWxlID8gZSA6IHsgXCJkZWZhdWx0XCI6IGUgfTsgfVxuZnVuY3Rpb24gUHJvZmlsZShfcmVmKSB7XG4gIHZhciBpbWFnZSA9IF9yZWYuaW1hZ2UsXG4gICAgd2lkdGggPSBfcmVmLndpZHRoLFxuICAgIGhlaWdodCA9IF9yZWYuaGVpZ2h0LFxuICAgIGJvcmRlckNvbG9yID0gX3JlZi5ib3JkZXJDb2xvcixcbiAgICBocmVmID0gX3JlZi5ocmVmLFxuICAgIGFsdCA9IF9yZWYuYWx0O1xuICBpZiAoIXdpZHRoKSB3aWR0aCA9IDM7XG4gIGlmICghaGVpZ2h0KSBoZWlnaHQgPSAzO1xuICByZXR1cm4gLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBcImZsZXggaXRlbXMtY2VudGVyXCJcbiAgfSwgLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImFcIiwge1xuICAgIGhyZWY6IGhyZWYsXG4gICAgY2xhc3NOYW1lOiBcImN1cnNvci1wb2ludGVyXCJcbiAgfSwgLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImltZ1wiLCB7XG4gICAgc3JjOiBpbWFnZSxcbiAgICBhbHQ6IGFsdCxcbiAgICBzdHlsZToge1xuICAgICAgYm9yZGVyQ29sb3I6IGJvcmRlckNvbG9yLFxuICAgICAgd2lkdGg6IFwiXCIuY29uY2F0KHdpZHRoLCBcInJlbVwiKSxcbiAgICAgIGhlaWdodDogXCJcIi5jb25jYXQoaGVpZ2h0LCBcInJlbVwiKSxcbiAgICAgIG9iamVjdEZpdDogJ2NvdmVyJ1xuICAgIH0sXG4gICAgY2xhc3NOYW1lOiBcIm1yLTQgYm9yZGVyLTIgcm91bmRlZC1mdWxsIGN1cnNvci1wb2ludGVyXCJcbiAgfSkpKTtcbn1cblxuO1xuICAgIC8vIFdyYXBwZWQgaW4gYW4gSUlGRSB0byBhdm9pZCBwb2xsdXRpbmcgdGhlIGdsb2JhbCBzY29wZVxuICAgIDtcbiAgICAoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAvLyBMZWdhY3kgQ1NTIGltcGxlbWVudGF0aW9ucyB3aWxsIGBldmFsYCBicm93c2VyIGNvZGUgaW4gYSBOb2RlLmpzIGNvbnRleHRcbiAgICAgICAgLy8gdG8gZXh0cmFjdCBDU1MuIEZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSwgd2UgbmVlZCB0byBjaGVjayB3ZSdyZSBpbiBhXG4gICAgICAgIC8vIGJyb3dzZXIgY29udGV4dCBiZWZvcmUgY29udGludWluZy5cbiAgICAgICAgaWYgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICAgICAgLy8gQU1QIC8gTm8tSlMgbW9kZSBkb2VzIG5vdCBpbmplY3QgdGhlc2UgaGVscGVyczpcbiAgICAgICAgICAgICckUmVmcmVzaEhlbHBlcnMkJyBpbiBzZWxmKSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIF9fd2VicGFja19tb2R1bGVfXyBpcyBnbG9iYWxcbiAgICAgICAgICAgIHZhciBjdXJyZW50RXhwb3J0cyA9IF9fd2VicGFja19tb2R1bGVfXy5leHBvcnRzO1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBfX3dlYnBhY2tfbW9kdWxlX18gaXMgZ2xvYmFsXG4gICAgICAgICAgICB2YXIgcHJldlNpZ25hdHVyZSA9IChfYiA9IChfYSA9IF9fd2VicGFja19tb2R1bGVfXy5ob3QuZGF0YSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnByZXZTaWduYXR1cmUpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IG51bGw7XG4gICAgICAgICAgICAvLyBUaGlzIGNhbm5vdCBoYXBwZW4gaW4gTWFpblRlbXBsYXRlIGJlY2F1c2UgdGhlIGV4cG9ydHMgbWlzbWF0Y2ggYmV0d2VlblxuICAgICAgICAgICAgLy8gdGVtcGxhdGluZyBhbmQgZXhlY3V0aW9uLlxuICAgICAgICAgICAgc2VsZi4kUmVmcmVzaEhlbHBlcnMkLnJlZ2lzdGVyRXhwb3J0c0ZvclJlYWN0UmVmcmVzaChjdXJyZW50RXhwb3J0cywgX193ZWJwYWNrX21vZHVsZV9fLmlkKTtcbiAgICAgICAgICAgIC8vIEEgbW9kdWxlIGNhbiBiZSBhY2NlcHRlZCBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIGl0cyBleHBvcnRzLCBlLmcuIHdoZW5cbiAgICAgICAgICAgIC8vIGl0IGlzIGEgUmVmcmVzaCBCb3VuZGFyeS5cbiAgICAgICAgICAgIGlmIChzZWxmLiRSZWZyZXNoSGVscGVycyQuaXNSZWFjdFJlZnJlc2hCb3VuZGFyeShjdXJyZW50RXhwb3J0cykpIHtcbiAgICAgICAgICAgICAgICAvLyBTYXZlIHRoZSBwcmV2aW91cyBleHBvcnRzIHNpZ25hdHVyZSBvbiB1cGRhdGUgc28gd2UgY2FuIGNvbXBhcmUgdGhlIGJvdW5kYXJ5XG4gICAgICAgICAgICAgICAgLy8gc2lnbmF0dXJlcy4gV2UgYXZvaWQgc2F2aW5nIGV4cG9ydHMgdGhlbXNlbHZlcyBzaW5jZSBpdCBjYXVzZXMgbWVtb3J5IGxlYWtzIChodHRwczovL2dpdGh1Yi5jb20vdmVyY2VsL25leHQuanMvcHVsbC81Mzc5NylcbiAgICAgICAgICAgICAgICBfX3dlYnBhY2tfbW9kdWxlX18uaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5wcmV2U2lnbmF0dXJlID1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuJFJlZnJlc2hIZWxwZXJzJC5nZXRSZWZyZXNoQm91bmRhcnlTaWduYXR1cmUoY3VycmVudEV4cG9ydHMpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIC8vIFVuY29uZGl0aW9uYWxseSBhY2NlcHQgYW4gdXBkYXRlIHRvIHRoaXMgbW9kdWxlLCB3ZSdsbCBjaGVjayBpZiBpdCdzXG4gICAgICAgICAgICAgICAgLy8gc3RpbGwgYSBSZWZyZXNoIEJvdW5kYXJ5IGxhdGVyLlxuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgaW1wb3J0TWV0YSBpcyByZXBsYWNlZCBpbiB0aGUgbG9hZGVyXG4gICAgICAgICAgICAgICAgaW1wb3J0Lm1ldGEud2VicGFja0hvdC5hY2NlcHQoKTtcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGZpZWxkIGlzIHNldCB3aGVuIHRoZSBwcmV2aW91cyB2ZXJzaW9uIG9mIHRoaXMgbW9kdWxlIHdhcyBhXG4gICAgICAgICAgICAgICAgLy8gUmVmcmVzaCBCb3VuZGFyeSwgbGV0dGluZyB1cyBrbm93IHdlIG5lZWQgdG8gY2hlY2sgZm9yIGludmFsaWRhdGlvbiBvclxuICAgICAgICAgICAgICAgIC8vIGVucXVldWUgYW4gdXBkYXRlLlxuICAgICAgICAgICAgICAgIGlmIChwcmV2U2lnbmF0dXJlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEEgYm91bmRhcnkgY2FuIGJlY29tZSBpbmVsaWdpYmxlIGlmIGl0cyBleHBvcnRzIGFyZSBpbmNvbXBhdGlibGVcbiAgICAgICAgICAgICAgICAgICAgLy8gd2l0aCB0aGUgcHJldmlvdXMgZXhwb3J0cy5cbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgLy8gRm9yIGV4YW1wbGUsIGlmIHlvdSBhZGQvcmVtb3ZlL2NoYW5nZSBleHBvcnRzLCB3ZSdsbCB3YW50IHRvXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlLWV4ZWN1dGUgdGhlIGltcG9ydGluZyBtb2R1bGVzLCBhbmQgZm9yY2UgdGhvc2UgY29tcG9uZW50cyB0b1xuICAgICAgICAgICAgICAgICAgICAvLyByZS1yZW5kZXIuIFNpbWlsYXJseSwgaWYgeW91IGNvbnZlcnQgYSBjbGFzcyBjb21wb25lbnQgdG8gYVxuICAgICAgICAgICAgICAgICAgICAvLyBmdW5jdGlvbiwgd2Ugd2FudCB0byBpbnZhbGlkYXRlIHRoZSBib3VuZGFyeS5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuJFJlZnJlc2hIZWxwZXJzJC5zaG91bGRJbnZhbGlkYXRlUmVhY3RSZWZyZXNoQm91bmRhcnkocHJldlNpZ25hdHVyZSwgc2VsZi4kUmVmcmVzaEhlbHBlcnMkLmdldFJlZnJlc2hCb3VuZGFyeVNpZ25hdHVyZShjdXJyZW50RXhwb3J0cykpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfX3dlYnBhY2tfbW9kdWxlX18uaG90LmludmFsaWRhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuJFJlZnJlc2hIZWxwZXJzJC5zY2hlZHVsZVVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gU2luY2Ugd2UganVzdCBleGVjdXRlZCB0aGUgY29kZSBmb3IgdGhlIG1vZHVsZSwgaXQncyBwb3NzaWJsZSB0aGF0IHRoZVxuICAgICAgICAgICAgICAgIC8vIG5ldyBleHBvcnRzIG1hZGUgaXQgaW5lbGlnaWJsZSBmb3IgYmVpbmcgYSBib3VuZGFyeS5cbiAgICAgICAgICAgICAgICAvLyBXZSBvbmx5IGNhcmUgYWJvdXQgdGhlIGNhc2Ugd2hlbiB3ZSB3ZXJlIF9wcmV2aW91c2x5XyBhIGJvdW5kYXJ5LFxuICAgICAgICAgICAgICAgIC8vIGJlY2F1c2Ugd2UgYWxyZWFkeSBhY2NlcHRlZCB0aGlzIHVwZGF0ZSAoYWNjaWRlbnRhbCBzaWRlIGVmZmVjdCkuXG4gICAgICAgICAgICAgICAgdmFyIGlzTm9Mb25nZXJBQm91bmRhcnkgPSBwcmV2U2lnbmF0dXJlICE9PSBudWxsO1xuICAgICAgICAgICAgICAgIGlmIChpc05vTG9uZ2VyQUJvdW5kYXJ5KSB7XG4gICAgICAgICAgICAgICAgICAgIF9fd2VicGFja19tb2R1bGVfXy5ob3QuaW52YWxpZGF0ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/@zabui/comps/dist/components/Profile.js\n"));

/***/ }),

/***/ "(app-pages-browser)/./node_modules/@zabui/comps/dist/styles.css":
/*!***************************************************!*\
  !*** ./node_modules/@zabui/comps/dist/styles.css ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"cae5f27233c7\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9AemFidWkvY29tcHMvZGlzdC9zdHlsZXMuY3NzIiwibWFwcGluZ3MiOiI7QUFBQSwrREFBZSxjQUFjO0FBQzdCLElBQUksSUFBVSxJQUFJLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHphYnVpL2NvbXBzL2Rpc3Qvc3R5bGVzLmNzcz84OWM5Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiY2FlNWYyNzIzM2M3XCJcbmlmIChtb2R1bGUuaG90KSB7IG1vZHVsZS5ob3QuYWNjZXB0KCkgfVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/@zabui/comps/dist/styles.css\n"));

/***/ })

});