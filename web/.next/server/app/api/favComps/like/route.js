"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/favComps/like/route";
exports.ids = ["app/api/favComps/like/route"];
exports.modules = {

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2FfavComps%2Flike%2Froute&page=%2Fapi%2FfavComps%2Flike%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FfavComps%2Flike%2Froute.ts&appDir=%2Fhome%2Fmramiroz%2FEscritorio%2FCompUI%2Fweb%2Fsrc%2Fapp&pageExtensions=js&pageExtensions=jsx&pageExtensions=ts&pageExtensions=tsx&pageExtensions=md&pageExtensions=mdx&rootDir=%2Fhome%2Fmramiroz%2FEscritorio%2FCompUI%2Fweb&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2FfavComps%2Flike%2Froute&page=%2Fapi%2FfavComps%2Flike%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FfavComps%2Flike%2Froute.ts&appDir=%2Fhome%2Fmramiroz%2FEscritorio%2FCompUI%2Fweb%2Fsrc%2Fapp&pageExtensions=js&pageExtensions=jsx&pageExtensions=ts&pageExtensions=tsx&pageExtensions=md&pageExtensions=mdx&rootDir=%2Fhome%2Fmramiroz%2FEscritorio%2FCompUI%2Fweb&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_mramiroz_Escritorio_CompUI_web_src_app_api_favComps_like_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/favComps/like/route.ts */ \"(rsc)/./src/app/api/favComps/like/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/favComps/like/route\",\n        pathname: \"/api/favComps/like\",\n        filename: \"route\",\n        bundlePath: \"app/api/favComps/like/route\"\n    },\n    resolvedPagePath: \"/home/mramiroz/Escritorio/CompUI/web/src/app/api/favComps/like/route.ts\",\n    nextConfigOutput,\n    userland: _home_mramiroz_Escritorio_CompUI_web_src_app_api_favComps_like_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/favComps/like/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZmYXZDb21wcyUyRmxpa2UlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmZhdkNvbXBzJTJGbGlrZSUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmZhdkNvbXBzJTJGbGlrZSUyRnJvdXRlLnRzJmFwcERpcj0lMkZob21lJTJGbXJhbWlyb3olMkZFc2NyaXRvcmlvJTJGQ29tcFVJJTJGd2ViJTJGc3JjJTJGYXBwJnBhZ2VFeHRlbnNpb25zPWpzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9bWQmcGFnZUV4dGVuc2lvbnM9bWR4JnJvb3REaXI9JTJGaG9tZSUyRm1yYW1pcm96JTJGRXNjcml0b3JpbyUyRkNvbXBVSSUyRndlYiZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUN1QjtBQUNwRztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVHQUF1RztBQUMvRztBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzZKOztBQUU3SiIsInNvdXJjZXMiOlsid2VicGFjazovL2NvbXBzdWkvP2E2ZWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL2hvbWUvbXJhbWlyb3ovRXNjcml0b3Jpby9Db21wVUkvd2ViL3NyYy9hcHAvYXBpL2ZhdkNvbXBzL2xpa2Uvcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2ZhdkNvbXBzL2xpa2Uvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9mYXZDb21wcy9saWtlXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9mYXZDb21wcy9saWtlL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL2hvbWUvbXJhbWlyb3ovRXNjcml0b3Jpby9Db21wVUkvd2ViL3NyYy9hcHAvYXBpL2ZhdkNvbXBzL2xpa2Uvcm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0IH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvZmF2Q29tcHMvbGlrZS9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2FfavComps%2Flike%2Froute&page=%2Fapi%2FfavComps%2Flike%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FfavComps%2Flike%2Froute.ts&appDir=%2Fhome%2Fmramiroz%2FEscritorio%2FCompUI%2Fweb%2Fsrc%2Fapp&pageExtensions=js&pageExtensions=jsx&pageExtensions=ts&pageExtensions=tsx&pageExtensions=md&pageExtensions=mdx&rootDir=%2Fhome%2Fmramiroz%2FEscritorio%2FCompUI%2Fweb&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/favComps/like/route.ts":
/*!********************************************!*\
  !*** ./src/app/api/favComps/like/route.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PUT: () => (/* binding */ PUT)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/User */ \"(rsc)/./src/models/User.ts\");\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/mongodb */ \"(rsc)/./src/lib/mongodb.js\");\n/* harmony import */ var _models_Component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/models/Component */ \"(rsc)/./src/models/Component.ts\");\n\n\n\n\nasync function PUT(req) {\n    try {\n        await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_2__.connectToDatabase)();\n        const { id, compId } = await req.json();\n        const user = await _models_User__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findById(id);\n        const comp = await _models_Component__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findById(compId);\n        if (!comp) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                message: \"Component not found\"\n            }, {\n                status: 404\n            });\n        }\n        if (!user) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                message: \"User not found\"\n            }, {\n                status: 404\n            });\n        }\n        if (user.favComps.includes(compId)) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                message: \"Component already in favorites\"\n            }, {\n                status: 400\n            });\n        }\n        comp.likes += 1;\n        await comp.save();\n        user.favComps.push(compId);\n        await user.save();\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json(user, {\n            status: 200\n        });\n    } catch (error) {\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            message: \"Error adding component to favorites\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9mYXZDb21wcy9saWtlL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXdEO0FBQ3ZCO0FBQ2lCO0FBRVA7QUFFcEMsZUFBZUksSUFBSUMsR0FBZ0I7SUFDdEMsSUFBSTtRQUNBLE1BQU1ILCtEQUFpQkE7UUFDdkIsTUFBTSxFQUFDSSxFQUFFLEVBQUVDLE1BQU0sRUFBQyxHQUFHLE1BQU1GLElBQUlHLElBQUk7UUFDbkMsTUFBTUMsT0FBTyxNQUFNUixvREFBSUEsQ0FBQ1MsUUFBUSxDQUFDSjtRQUNqQyxNQUFNSyxPQUFPLE1BQU1SLHlEQUFTQSxDQUFDTyxRQUFRLENBQUNIO1FBQ3RDLElBQUksQ0FBQ0ksTUFBSztZQUNOLE9BQU9YLGtGQUFZQSxDQUFDUSxJQUFJLENBQUM7Z0JBQUNJLFNBQVM7WUFBcUIsR0FBRztnQkFBQ0MsUUFBUTtZQUFHO1FBQzNFO1FBQ0EsSUFBSSxDQUFDSixNQUFLO1lBQ04sT0FBT1Qsa0ZBQVlBLENBQUNRLElBQUksQ0FBQztnQkFBQ0ksU0FBUztZQUFnQixHQUFHO2dCQUFDQyxRQUFRO1lBQUc7UUFDdEU7UUFDQSxJQUFJSixLQUFLSyxRQUFRLENBQUNDLFFBQVEsQ0FBQ1IsU0FBUTtZQUMvQixPQUFPUCxrRkFBWUEsQ0FBQ1EsSUFBSSxDQUFDO2dCQUFDSSxTQUFTO1lBQWdDLEdBQUc7Z0JBQUNDLFFBQVE7WUFBRztRQUN0RjtRQUNBRixLQUFLSyxLQUFLLElBQUk7UUFDZCxNQUFNTCxLQUFLTSxJQUFJO1FBQ2ZSLEtBQUtLLFFBQVEsQ0FBQ0ksSUFBSSxDQUFDWDtRQUNuQixNQUFNRSxLQUFLUSxJQUFJO1FBQ2YsT0FBT2pCLGtGQUFZQSxDQUFDUSxJQUFJLENBQUNDLE1BQU07WUFBQ0ksUUFBUTtRQUFHO0lBQy9DLEVBQ0EsT0FBT00sT0FBTztRQUNWLE9BQU9uQixrRkFBWUEsQ0FBQ1EsSUFBSSxDQUFDO1lBQUNJLFNBQVM7UUFBcUMsR0FBRztZQUFDQyxRQUFRO1FBQUc7SUFDM0Y7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL2NvbXBzdWkvLi9zcmMvYXBwL2FwaS9mYXZDb21wcy9saWtlL3JvdXRlLnRzPzc3MmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcbmltcG9ydCBVc2VyIGZyb20gXCJAL21vZGVscy9Vc2VyXCI7XG5pbXBvcnQgeyBjb25uZWN0VG9EYXRhYmFzZSB9IGZyb20gJ0AvbGliL21vbmdvZGInO1xuaW1wb3J0IHsgT2JqZWN0SWQgfSBmcm9tICdtb25nb2RiJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnQC9tb2RlbHMvQ29tcG9uZW50JztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBVVChyZXE6IE5leHRSZXF1ZXN0KXtcbiAgICB0cnkge1xuICAgICAgICBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpO1xuICAgICAgICBjb25zdCB7aWQsIGNvbXBJZH0gPSBhd2FpdCByZXEuanNvbigpO1xuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kQnlJZChpZCk7XG4gICAgICAgIGNvbnN0IGNvbXAgPSBhd2FpdCBDb21wb25lbnQuZmluZEJ5SWQoY29tcElkKTtcbiAgICAgICAgaWYgKCFjb21wKXtcbiAgICAgICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7bWVzc2FnZTogXCJDb21wb25lbnQgbm90IGZvdW5kXCJ9LCB7c3RhdHVzOiA0MDR9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXVzZXIpe1xuICAgICAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHttZXNzYWdlOiBcIlVzZXIgbm90IGZvdW5kXCJ9LCB7c3RhdHVzOiA0MDR9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodXNlci5mYXZDb21wcy5pbmNsdWRlcyhjb21wSWQpKXtcbiAgICAgICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7bWVzc2FnZTogXCJDb21wb25lbnQgYWxyZWFkeSBpbiBmYXZvcml0ZXNcIn0sIHtzdGF0dXM6IDQwMH0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbXAubGlrZXMgKz0gMTtcbiAgICAgICAgYXdhaXQgY29tcC5zYXZlKCk7XG4gICAgICAgIHVzZXIuZmF2Q29tcHMucHVzaChjb21wSWQpO1xuICAgICAgICBhd2FpdCB1c2VyLnNhdmUoKTtcbiAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHVzZXIsIHtzdGF0dXM6IDIwMH0pO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHttZXNzYWdlOiBcIkVycm9yIGFkZGluZyBjb21wb25lbnQgdG8gZmF2b3JpdGVzXCJ9LCB7c3RhdHVzOiA1MDB9KTtcbiAgICB9XG59XG5cbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJVc2VyIiwiY29ubmVjdFRvRGF0YWJhc2UiLCJDb21wb25lbnQiLCJQVVQiLCJyZXEiLCJpZCIsImNvbXBJZCIsImpzb24iLCJ1c2VyIiwiZmluZEJ5SWQiLCJjb21wIiwibWVzc2FnZSIsInN0YXR1cyIsImZhdkNvbXBzIiwiaW5jbHVkZXMiLCJsaWtlcyIsInNhdmUiLCJwdXNoIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/favComps/like/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/mongodb.js":
/*!****************************!*\
  !*** ./src/lib/mongodb.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectToDatabase: () => (/* binding */ connectToDatabase)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dotenv */ \"(rsc)/./node_modules/dotenv/lib/main.js\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\ndotenv__WEBPACK_IMPORTED_MODULE_1___default().config();\nconst uri = process.env.MONGODB_URI2;\nif (!uri) {\n    throw new Error(\"MONGODB_URI is not defined. Please check your environment variables.\");\n}\nlet db;\nasync function connectToDatabase() {\n    if (!db) {\n        const client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri);\n        await client.connect();\n        db = client.db(\"CompUI\");\n        await mongoose.connect(uri, {\n            useNewUrlParser: true,\n            useUnifiedTopology: true,\n            dbName: \"CompUI\"\n        });\n    }\n    return db;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL21vbmdvZGIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBc0M7QUFDVjtBQUM1QixNQUFNRSxXQUFXQyxtQkFBT0EsQ0FBQztBQUV6QkYsb0RBQWE7QUFFYixNQUFNSSxNQUFNQyxRQUFRQyxHQUFHLENBQUNDLFlBQVk7QUFFcEMsSUFBSSxDQUFDSCxLQUFLO0lBQ1IsTUFBTSxJQUFJSSxNQUFNO0FBQ2xCO0FBRUEsSUFBSUM7QUFFRyxlQUFlQztJQUNwQixJQUFJLENBQUNELElBQUk7UUFDUCxNQUFNRSxTQUFTLElBQUlaLGdEQUFXQSxDQUFDSztRQUMvQixNQUFNTyxPQUFPQyxPQUFPO1FBQ3BCSCxLQUFLRSxPQUFPRixFQUFFLENBQUM7UUFDZixNQUFNUixTQUFTVyxPQUFPLENBQUNSLEtBQUs7WUFBRVMsaUJBQWlCO1lBQU1DLG9CQUFvQjtZQUFNQyxRQUFRO1FBQVE7SUFDakc7SUFDQSxPQUFPTjtBQUNUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29tcHN1aS8uL3NyYy9saWIvbW9uZ29kYi5qcz84YjAzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcbmltcG9ydCBkb3RlbnYgZnJvbSAnZG90ZW52JztcbmNvbnN0IG1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKTtcblxuZG90ZW52LmNvbmZpZygpO1xuXG5jb25zdCB1cmkgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSSTI7XG5cbmlmICghdXJpKSB7XG4gIHRocm93IG5ldyBFcnJvcihcIk1PTkdPREJfVVJJIGlzIG5vdCBkZWZpbmVkLiBQbGVhc2UgY2hlY2sgeW91ciBlbnZpcm9ubWVudCB2YXJpYWJsZXMuXCIpO1xufVxuXG5sZXQgZGI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb25uZWN0VG9EYXRhYmFzZSgpIHtcbiAgaWYgKCFkYikge1xuICAgIGNvbnN0IGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmkpO1xuICAgIGF3YWl0IGNsaWVudC5jb25uZWN0KCk7XG4gICAgZGIgPSBjbGllbnQuZGIoXCJDb21wVUlcIik7XG4gICAgYXdhaXQgbW9uZ29vc2UuY29ubmVjdCh1cmksIHsgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLCB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsIGRiTmFtZTogJ0NvbXBVSSd9KTtcbiAgfVxuICByZXR1cm4gZGI7XG59Il0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwiZG90ZW52IiwibW9uZ29vc2UiLCJyZXF1aXJlIiwiY29uZmlnIiwidXJpIiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJJMiIsIkVycm9yIiwiZGIiLCJjb25uZWN0VG9EYXRhYmFzZSIsImNsaWVudCIsImNvbm5lY3QiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJkYk5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/mongodb.js\n");

/***/ }),

/***/ "(rsc)/./src/models/Component.ts":
/*!*********************************!*\
  !*** ./src/models/Component.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst { Schema } = (mongoose__WEBPACK_IMPORTED_MODULE_0___default());\nconst componentSchema = new Schema({\n    title: {\n        type: String,\n        required: true\n    },\n    description: {\n        type: String,\n        required: true\n    },\n    category: {\n        type: String,\n        required: true\n    },\n    props: {\n        type: Object,\n        required: true\n    },\n    import: {\n        type: String,\n        required: true\n    },\n    code: {\n        type: String,\n        required: true\n    },\n    component: {\n        type: String,\n        required: true\n    },\n    likes: {\n        type: Number,\n        default: 0\n    }\n}, {\n    timestamps: true\n});\nconst Component = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Component || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Component\", componentSchema, \"Components\");\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Component);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL0NvbXBvbmVudC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTSxFQUFFQyxNQUFNLEVBQUUsR0FBR0QsaURBQVFBO0FBRTNCLE1BQU1FLGtCQUFrQixJQUFJRCxPQUFPO0lBQ2pDRSxPQUFPO1FBQUVDLE1BQU1DO1FBQVFDLFVBQVU7SUFBSztJQUN0Q0MsYUFBYTtRQUFFSCxNQUFNQztRQUFRQyxVQUFVO0lBQUs7SUFDNUNFLFVBQVU7UUFBRUosTUFBTUM7UUFBUUMsVUFBVTtJQUFLO0lBQ3pDRyxPQUFPO1FBQUVMLE1BQU1NO1FBQVFKLFVBQVU7SUFBSztJQUN0Q0ssUUFBUTtRQUFFUCxNQUFNQztRQUFRQyxVQUFVO0lBQUs7SUFDdkNNLE1BQU07UUFBRVIsTUFBTUM7UUFBUUMsVUFBVTtJQUFLO0lBQ3JDTyxXQUFXO1FBQUVULE1BQU1DO1FBQVFDLFVBQVU7SUFBSztJQUMxQ1EsT0FBTztRQUFFVixNQUFNVztRQUFRQyxTQUFTO0lBQUU7QUFDcEMsR0FBRztJQUFFQyxZQUFZO0FBQUs7QUFFdEIsTUFBTUMsWUFBWWxCLHdEQUFlLENBQUNrQixTQUFTLElBQUlsQixxREFBYyxDQUFDLGFBQWFFLGlCQUFpQjtBQUU1RixpRUFBZWdCLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb21wc3VpLy4vc3JjL21vZGVscy9Db21wb25lbnQudHM/NGNiNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmNvbnN0IHsgU2NoZW1hIH0gPSBtb25nb29zZTtcblxuY29uc3QgY29tcG9uZW50U2NoZW1hID0gbmV3IFNjaGVtYSh7XG4gIHRpdGxlOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcbiAgZGVzY3JpcHRpb246IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICBjYXRlZ29yeTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG4gIHByb3BzOiB7IHR5cGU6IE9iamVjdCwgcmVxdWlyZWQ6IHRydWUgfSxcbiAgaW1wb3J0OiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcbiAgY29kZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG4gIGNvbXBvbmVudDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG4gIGxpa2VzOiB7IHR5cGU6IE51bWJlciwgZGVmYXVsdDogMCB9XG59LCB7IHRpbWVzdGFtcHM6IHRydWUgfSk7XG5cbmNvbnN0IENvbXBvbmVudCA9IG1vbmdvb3NlLm1vZGVscy5Db21wb25lbnQgfHwgbW9uZ29vc2UubW9kZWwoXCJDb21wb25lbnRcIiwgY29tcG9uZW50U2NoZW1hLCBcIkNvbXBvbmVudHNcIilcblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50OyJdLCJuYW1lcyI6WyJtb25nb29zZSIsIlNjaGVtYSIsImNvbXBvbmVudFNjaGVtYSIsInRpdGxlIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwiZGVzY3JpcHRpb24iLCJjYXRlZ29yeSIsInByb3BzIiwiT2JqZWN0IiwiaW1wb3J0IiwiY29kZSIsImNvbXBvbmVudCIsImxpa2VzIiwiTnVtYmVyIiwiZGVmYXVsdCIsInRpbWVzdGFtcHMiLCJDb21wb25lbnQiLCJtb2RlbHMiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/models/Component.ts\n");

/***/ }),

/***/ "(rsc)/./src/models/User.ts":
/*!****************************!*\
  !*** ./src/models/User.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst { Schema } = (mongoose__WEBPACK_IMPORTED_MODULE_0___default());\nconst UserSchema = new Schema({\n    name: {\n        type: String,\n        required: [\n            true,\n            \"Username is required\"\n        ],\n        unique: true\n    },\n    password: {\n        type: String,\n        required: [\n            true,\n            \"Password is required\"\n        ],\n        select: false\n    },\n    email: {\n        type: String,\n        required: [\n            true,\n            \"Email is required\"\n        ],\n        unique: true,\n        match: [\n            /^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$/,\n            \"Email is invalid\"\n        ]\n    },\n    role: {\n        type: String,\n        enum: [\n            \"admin\",\n            \"user\"\n        ],\n        default: \"user\"\n    },\n    favComps: {\n        type: Array,\n        default: []\n    }\n}, {\n    timestamps: true\n});\nUserSchema.pre(\"save\", async function(next) {\n    if (this.isModified(\"password\")) {\n        this.password = await bcrypt__WEBPACK_IMPORTED_MODULE_1___default().hash(this.password, 10);\n    }\n    next();\n});\nconst User = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).User || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", UserSchema, \"Users\");\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL1VzZXIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBZ0M7QUFDSjtBQUU1QixNQUFNLEVBQUNFLE1BQU0sRUFBQyxHQUFHRixpREFBUUE7QUFFekIsTUFBTUcsYUFBYSxJQUFJRCxPQUFPO0lBQzFCRSxNQUFLO1FBQ0RDLE1BQU1DO1FBQ05DLFVBQVU7WUFBQztZQUFNO1NBQXVCO1FBQ3hDQyxRQUFRO0lBQ1o7SUFDQUMsVUFBUztRQUNMSixNQUFNQztRQUNOQyxVQUFVO1lBQUM7WUFBTTtTQUF1QjtRQUN4Q0csUUFBUTtJQUNaO0lBQ0FDLE9BQU07UUFDRk4sTUFBTUM7UUFDTkMsVUFBVTtZQUFDO1lBQU07U0FBb0I7UUFDckNDLFFBQVE7UUFDUkksT0FBTztZQUNIO1lBQ0E7U0FDSDtJQUNMO0lBQ0FDLE1BQUs7UUFDRFIsTUFBTUM7UUFDTlEsTUFBTTtZQUFDO1lBQVM7U0FBTztRQUN2QkMsU0FBUztJQUNiO0lBQ0FDLFVBQVU7UUFDTlgsTUFBTVk7UUFDTkYsU0FBUyxFQUFFO0lBQ2Y7QUFDSixHQUFHO0lBQUNHLFlBQVk7QUFBSTtBQUVwQmYsV0FBV2dCLEdBQUcsQ0FBQyxRQUFRLGVBQWVDLElBQUk7SUFDdEMsSUFBRyxJQUFJLENBQUNDLFVBQVUsQ0FBQyxhQUFZO1FBQzNCLElBQUksQ0FBQ1osUUFBUSxHQUFHLE1BQU1SLGtEQUFXLENBQUMsSUFBSSxDQUFDUSxRQUFRLEVBQUU7SUFDckQ7SUFDQVc7QUFDSjtBQUVBLE1BQU1HLE9BQU92Qix3REFBZSxDQUFDdUIsSUFBSSxJQUFJdkIscURBQWMsQ0FBQyxRQUFRRyxZQUFZO0FBRXhFLGlFQUFlb0IsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NvbXBzdWkvLi9zcmMvbW9kZWxzL1VzZXIudHM/MDk2ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5pbXBvcnQgYmNyeXB0IGZyb20gXCJiY3J5cHRcIjtcblxuY29uc3Qge1NjaGVtYX0gPSBtb25nb29zZTtcblxuY29uc3QgVXNlclNjaGVtYSA9IG5ldyBTY2hlbWEoe1xuICAgIG5hbWU6e1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiBbdHJ1ZSwgXCJVc2VybmFtZSBpcyByZXF1aXJlZFwiXSxcbiAgICAgICAgdW5pcXVlOiB0cnVlXG4gICAgfSxcbiAgICBwYXNzd29yZDp7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IFt0cnVlLCBcIlBhc3N3b3JkIGlzIHJlcXVpcmVkXCJdLFxuICAgICAgICBzZWxlY3Q6IGZhbHNlXG4gICAgfSxcbiAgICBlbWFpbDp7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IFt0cnVlLCBcIkVtYWlsIGlzIHJlcXVpcmVkXCJdLFxuICAgICAgICB1bmlxdWU6IHRydWUsXG4gICAgICAgIG1hdGNoOiBbXG4gICAgICAgICAgICAvXlxcdysoW1xcLi1dP1xcdyspKkBcXHcrKFtcXC4tXT9cXHcrKSooXFwuXFx3ezIsM30pKyQvLFxuICAgICAgICAgICAgXCJFbWFpbCBpcyBpbnZhbGlkXCJcbiAgICAgICAgXVxuICAgIH0sXG4gICAgcm9sZTp7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgZW51bTogW1wiYWRtaW5cIiwgXCJ1c2VyXCJdLFxuICAgICAgICBkZWZhdWx0OiBcInVzZXJcIlxuICAgIH0sXG4gICAgZmF2Q29tcHM6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgIGRlZmF1bHQ6IFtdXG4gICAgfVxufSwge3RpbWVzdGFtcHM6IHRydWV9KTtcblxuVXNlclNjaGVtYS5wcmUoXCJzYXZlXCIsIGFzeW5jIGZ1bmN0aW9uKG5leHQpe1xuICAgIGlmKHRoaXMuaXNNb2RpZmllZChcInBhc3N3b3JkXCIpKXtcbiAgICAgICAgdGhpcy5wYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5oYXNoKHRoaXMucGFzc3dvcmQsIDEwKTtcbiAgICB9XG4gICAgbmV4dCgpO1xufSk7XG5cbmNvbnN0IFVzZXIgPSBtb25nb29zZS5tb2RlbHMuVXNlciB8fCBtb25nb29zZS5tb2RlbChcIlVzZXJcIiwgVXNlclNjaGVtYSwgXCJVc2Vyc1wiKTtcblxuZXhwb3J0IGRlZmF1bHQgVXNlcjsiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJiY3J5cHQiLCJTY2hlbWEiLCJVc2VyU2NoZW1hIiwibmFtZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsInVuaXF1ZSIsInBhc3N3b3JkIiwic2VsZWN0IiwiZW1haWwiLCJtYXRjaCIsInJvbGUiLCJlbnVtIiwiZGVmYXVsdCIsImZhdkNvbXBzIiwiQXJyYXkiLCJ0aW1lc3RhbXBzIiwicHJlIiwibmV4dCIsImlzTW9kaWZpZWQiLCJoYXNoIiwiVXNlciIsIm1vZGVscyIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/models/User.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/dotenv"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2FfavComps%2Flike%2Froute&page=%2Fapi%2FfavComps%2Flike%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FfavComps%2Flike%2Froute.ts&appDir=%2Fhome%2Fmramiroz%2FEscritorio%2FCompUI%2Fweb%2Fsrc%2Fapp&pageExtensions=js&pageExtensions=jsx&pageExtensions=ts&pageExtensions=tsx&pageExtensions=md&pageExtensions=mdx&rootDir=%2Fhome%2Fmramiroz%2FEscritorio%2FCompUI%2Fweb&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();