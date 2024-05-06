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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_auth_jwt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/jwt */ \"(middleware)/./node_modules/next-auth/jwt/index.js\");\n/* harmony import */ var next_auth_jwt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_jwt__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(middleware)/./node_modules/next/dist/esm/server/web/exports/next-response.js\");\n\n\nasync function middleware(req) {\n    const adminRoutes = [\n        req.nextUrl.pathname.startsWith(\"/dashboard\")\n    ];\n    const token = await (0,next_auth_jwt__WEBPACK_IMPORTED_MODULE_0__.getToken)({\n        req,\n        secret: process.env.NEXTAUTH_SECRET\n    });\n    const session = token?.user;\n    const path = req.nextUrl.pathname;\n    if (!session && (req.nextUrl.pathname === \"/profile\" || req.nextUrl.pathname.startsWith(\"/dashboard\") || req.nextUrl.pathname.startsWith(\"/api\"))) {\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__[\"default\"].redirect(new URL(\"/login\", req.nextUrl));\n    } else if (session?.role === \"user\" && adminRoutes.includes(path)) {\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__[\"default\"].redirect(new URL(\"/profile\", req.nextUrl));\n    } else {\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__[\"default\"].next();\n    }\n}\nconst config = {\n    matcher: [\n        \"/((?!api|_next/static|_next/image|.*\\\\.png$).*)\",\n        \"/api/:path*\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL21pZGRsZXdhcmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDeUM7QUFDZTtBQUd6QyxlQUFlRSxXQUFXQyxHQUFnQjtJQUN2RCxNQUFNQyxjQUFjO1FBQUNELElBQUlFLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDQyxVQUFVLENBQUM7S0FBYztJQUNuRSxNQUFNQyxRQUFRLE1BQU1SLHVEQUFRQSxDQUFDO1FBQUVHO1FBQUtNLFFBQVFDLFFBQVFDLEdBQUcsQ0FBQ0MsZUFBZTtJQUFDO0lBQ3hFLE1BQU1DLFVBQVVMLE9BQU9NO0lBQ3ZCLE1BQU1DLE9BQU9aLElBQUlFLE9BQU8sQ0FBQ0MsUUFBUTtJQUVqQyxJQUFJLENBQUNPLFdBQ0ZWLENBQUFBLElBQUlFLE9BQU8sQ0FBQ0MsUUFBUSxLQUFLLGNBQ3hCSCxJQUFJRSxPQUFPLENBQUNDLFFBQVEsQ0FBQ0MsVUFBVSxDQUFDLGlCQUNoQ0osSUFBSUUsT0FBTyxDQUFDQyxRQUFRLENBQUNDLFVBQVUsQ0FBQyxPQUFNLEdBQ3JDO1FBQ0gsT0FBT04sa0ZBQVlBLENBQUNlLFFBQVEsQ0FBQyxJQUFJQyxJQUFJLFVBQVVkLElBQUlFLE9BQU87SUFDNUQsT0FBTyxJQUFJUSxTQUFTSyxTQUFTLFVBQVVkLFlBQVllLFFBQVEsQ0FBQ0osT0FBTTtRQUNoRSxPQUFPZCxrRkFBWUEsQ0FBQ2UsUUFBUSxDQUFDLElBQUlDLElBQUksWUFBWWQsSUFBSUUsT0FBTztJQUM5RCxPQUFPO1FBQ0wsT0FBT0osa0ZBQVlBLENBQUNtQixJQUFJO0lBQzFCO0FBQ0Y7QUFDTyxNQUFNQyxTQUFTO0lBQ3BCQyxTQUFTO1FBQUM7UUFBbUQ7S0FBYztBQUM3RSxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9taWRkbGV3YXJlLnRzP2QxOTkiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBnZXRUb2tlbiB9IGZyb20gXCJuZXh0LWF1dGgvand0XCI7XG5pbXBvcnQgeyBOZXh0UmVxdWVzdCwgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gbWlkZGxld2FyZShyZXE6IE5leHRSZXF1ZXN0KSB7XG4gIGNvbnN0IGFkbWluUm91dGVzID0gW3JlcS5uZXh0VXJsLnBhdGhuYW1lLnN0YXJ0c1dpdGgoXCIvZGFzaGJvYXJkXCIpXTtcbiAgY29uc3QgdG9rZW4gPSBhd2FpdCBnZXRUb2tlbih7IHJlcSwgc2VjcmV0OiBwcm9jZXNzLmVudi5ORVhUQVVUSF9TRUNSRVQgfSk7XG4gIGNvbnN0IHNlc3Npb24gPSB0b2tlbj8udXNlciBhcyBhbnk7XG4gIGNvbnN0IHBhdGggPSByZXEubmV4dFVybC5wYXRobmFtZTtcblxuICBpZiAoIXNlc3Npb24gJiYgXG4gICAgKHJlcS5uZXh0VXJsLnBhdGhuYW1lID09PSBcIi9wcm9maWxlXCIgfHxcbiAgICAgIHJlcS5uZXh0VXJsLnBhdGhuYW1lLnN0YXJ0c1dpdGgoXCIvZGFzaGJvYXJkXCIpIHx8XG4gICAgICByZXEubmV4dFVybC5wYXRobmFtZS5zdGFydHNXaXRoKFwiL2FwaVwiKVxuICAgICkpIHtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLnJlZGlyZWN0KG5ldyBVUkwoXCIvbG9naW5cIiwgcmVxLm5leHRVcmwpKTtcbiAgfSBlbHNlIGlmIChzZXNzaW9uPy5yb2xlID09PSBcInVzZXJcIiAmJiBhZG1pblJvdXRlcy5pbmNsdWRlcyhwYXRoKSl7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5yZWRpcmVjdChuZXcgVVJMKFwiL3Byb2ZpbGVcIiwgcmVxLm5leHRVcmwpKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLm5leHQoKTtcbiAgfVxufVxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcbiAgbWF0Y2hlcjogWycvKCg/IWFwaXxfbmV4dC9zdGF0aWN8X25leHQvaW1hZ2V8LipcXFxcLnBuZyQpLiopJywgJy9hcGkvOnBhdGgqJ10sXG59OyJdLCJuYW1lcyI6WyJnZXRUb2tlbiIsIk5leHRSZXNwb25zZSIsIm1pZGRsZXdhcmUiLCJyZXEiLCJhZG1pblJvdXRlcyIsIm5leHRVcmwiLCJwYXRobmFtZSIsInN0YXJ0c1dpdGgiLCJ0b2tlbiIsInNlY3JldCIsInByb2Nlc3MiLCJlbnYiLCJORVhUQVVUSF9TRUNSRVQiLCJzZXNzaW9uIiwidXNlciIsInBhdGgiLCJyZWRpcmVjdCIsIlVSTCIsInJvbGUiLCJpbmNsdWRlcyIsIm5leHQiLCJjb25maWciLCJtYXRjaGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./src/middleware.ts\n");

/***/ })

});