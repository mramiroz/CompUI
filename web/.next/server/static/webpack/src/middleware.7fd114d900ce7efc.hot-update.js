"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("src/middleware",{

/***/ "(middleware)/./src/middleware.ts":
/*!***************************!*\
  !*** ./src/middleware.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_auth_jwt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/jwt */ \"(middleware)/./node_modules/next-auth/jwt/index.js\");\n/* harmony import */ var next_auth_jwt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_jwt__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(middleware)/./node_modules/next/dist/esm/server/web/exports/next-response.js\");\n\n\nasync function middleware(req) {\n    const adminRoutes = [\n        req.nextUrl.pathname.startsWith(\"/dashboard\")\n    ];\n    const token = await (0,next_auth_jwt__WEBPACK_IMPORTED_MODULE_0__.getToken)({\n        req,\n        secret: process.env.NEXTAUTH_SECRET\n    });\n    const session = token?.user;\n    const path = req.nextUrl.pathname;\n    if (!session && (req.nextUrl.pathname === \"/profile\" || req.nextUrl.pathname.startsWith(\"/dashboard\"))) {\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__[\"default\"].redirect(new URL(\"/login\", req.nextUrl));\n    } else if (session?.role === \"user\" && adminRoutes.includes(path)) {\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__[\"default\"].redirect(new URL(\"/profile\", req.nextUrl));\n    } else {\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__[\"default\"].next();\n    }\n}\nconst config = {\n    matcher: [\n        \"/((?!api|_next/static|_next/image|.*\\\\.png$).*)\",\n        \"/api/:path*\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL21pZGRsZXdhcmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDeUM7QUFDZTtBQUd6QyxlQUFlRSxXQUFXQyxHQUFnQjtJQUN2RCxNQUFNQyxjQUFjO1FBQUNELElBQUlFLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDQyxVQUFVLENBQUM7S0FBYztJQUNuRSxNQUFNQyxRQUFRLE1BQU1SLHVEQUFRQSxDQUFDO1FBQUVHO1FBQUtNLFFBQVFDLFFBQVFDLEdBQUcsQ0FBQ0MsZUFBZTtJQUFDO0lBQ3hFLE1BQU1DLFVBQVVMLE9BQU9NO0lBQ3ZCLE1BQU1DLE9BQU9aLElBQUlFLE9BQU8sQ0FBQ0MsUUFBUTtJQUVqQyxJQUFJLENBQUNPLFdBQ0ZWLENBQUFBLElBQUlFLE9BQU8sQ0FBQ0MsUUFBUSxLQUFLLGNBQ3hCSCxJQUFJRSxPQUFPLENBQUNDLFFBQVEsQ0FBQ0MsVUFBVSxDQUFDLGFBQVksR0FDM0M7UUFDSCxPQUFPTixrRkFBWUEsQ0FBQ2UsUUFBUSxDQUFDLElBQUlDLElBQUksVUFBVWQsSUFBSUUsT0FBTztJQUM1RCxPQUFPLElBQUlRLFNBQVNLLFNBQVMsVUFBVWQsWUFBWWUsUUFBUSxDQUFDSixPQUFNO1FBQ2hFLE9BQU9kLGtGQUFZQSxDQUFDZSxRQUFRLENBQUMsSUFBSUMsSUFBSSxZQUFZZCxJQUFJRSxPQUFPO0lBQzlELE9BQU87UUFDTCxPQUFPSixrRkFBWUEsQ0FBQ21CLElBQUk7SUFDMUI7QUFDRjtBQUNPLE1BQU1DLFNBQVM7SUFDcEJDLFNBQVM7UUFBQztRQUFtRDtLQUFjO0FBQzdFLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL21pZGRsZXdhcmUudHM/ZDE5OSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IGdldFRva2VuIH0gZnJvbSBcIm5leHQtYXV0aC9qd3RcIjtcbmltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBtaWRkbGV3YXJlKHJlcTogTmV4dFJlcXVlc3QpIHtcbiAgY29uc3QgYWRtaW5Sb3V0ZXMgPSBbcmVxLm5leHRVcmwucGF0aG5hbWUuc3RhcnRzV2l0aChcIi9kYXNoYm9hcmRcIildO1xuICBjb25zdCB0b2tlbiA9IGF3YWl0IGdldFRva2VuKHsgcmVxLCBzZWNyZXQ6IHByb2Nlc3MuZW52Lk5FWFRBVVRIX1NFQ1JFVCB9KTtcbiAgY29uc3Qgc2Vzc2lvbiA9IHRva2VuPy51c2VyIGFzIGFueTtcbiAgY29uc3QgcGF0aCA9IHJlcS5uZXh0VXJsLnBhdGhuYW1lO1xuXG4gIGlmICghc2Vzc2lvbiAmJiBcbiAgICAocmVxLm5leHRVcmwucGF0aG5hbWUgPT09IFwiL3Byb2ZpbGVcIiB8fFxuICAgICAgcmVxLm5leHRVcmwucGF0aG5hbWUuc3RhcnRzV2l0aChcIi9kYXNoYm9hcmRcIilcbiAgICApKSB7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5yZWRpcmVjdChuZXcgVVJMKFwiL2xvZ2luXCIsIHJlcS5uZXh0VXJsKSk7XG4gIH0gZWxzZSBpZiAoc2Vzc2lvbj8ucm9sZSA9PT0gXCJ1c2VyXCIgJiYgYWRtaW5Sb3V0ZXMuaW5jbHVkZXMocGF0aCkpe1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UucmVkaXJlY3QobmV3IFVSTChcIi9wcm9maWxlXCIsIHJlcS5uZXh0VXJsKSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5uZXh0KCk7XG4gIH1cbn1cbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XG4gIG1hdGNoZXI6IFsnLygoPyFhcGl8X25leHQvc3RhdGljfF9uZXh0L2ltYWdlfC4qXFxcXC5wbmckKS4qKScsICcvYXBpLzpwYXRoKiddLFxufTsiXSwibmFtZXMiOlsiZ2V0VG9rZW4iLCJOZXh0UmVzcG9uc2UiLCJtaWRkbGV3YXJlIiwicmVxIiwiYWRtaW5Sb3V0ZXMiLCJuZXh0VXJsIiwicGF0aG5hbWUiLCJzdGFydHNXaXRoIiwidG9rZW4iLCJzZWNyZXQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVEFVVEhfU0VDUkVUIiwic2Vzc2lvbiIsInVzZXIiLCJwYXRoIiwicmVkaXJlY3QiLCJVUkwiLCJyb2xlIiwiaW5jbHVkZXMiLCJuZXh0IiwiY29uZmlnIiwibWF0Y2hlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./src/middleware.ts\n");

/***/ })

});