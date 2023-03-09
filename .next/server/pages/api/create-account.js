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
exports.id = "pages/api/create-account";
exports.ids = ["pages/api/create-account"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./lib/db.ts":
/*!*******************!*\
  !*** ./lib/db.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst db = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) global.db = db;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (db);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvZGIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThDO0FBTTlDLE1BQU1DLEVBQUUsR0FBRyxJQUFJRCx3REFBWSxFQUFFO0FBRTdCLElBQUlFLElBQXNDLEVBQUVDLE1BQU0sQ0FBQ0YsRUFBRSxHQUFHQSxFQUFFLENBQUM7QUFFM0QsaUVBQWVBLEVBQUUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1wcmlzbWEtc3FsaXRlLy4vbGliL2RiLnRzPzFkZjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgdmFyIGRiOiBQcmlzbWFDbGllbnQgfCB1bmRlZmluZWQ7XG59XG5cbmNvbnN0IGRiID0gbmV3IFByaXNtYUNsaWVudCgpO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikgZ2xvYmFsLmRiID0gZGI7XG5cbmV4cG9ydCBkZWZhdWx0IGRiO1xuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsImRiIiwicHJvY2VzcyIsImdsb2JhbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/db.ts\n");

/***/ }),

/***/ "(api)/./pages/api/create-account.tsx":
/*!**************************************!*\
  !*** ./pages/api/create-account.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/db */ \"(api)/./lib/db.ts\");\n\nasync function handler(req, res) {\n    const { name , email  } = req.body;\n    await _lib_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.deleteMany({});\n    if (req.method === \"POST\") {\n        const user = await _lib_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.findUnique({\n            where: {\n                email\n            }\n        });\n        console.log(user);\n        if (user) {\n            console.log(\"found user\");\n            return res.json({\n                ok: false\n            });\n        } else {\n            console.log(\"Did not find. Will create.\");\n            await _lib_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.create({\n                data: {\n                    name,\n                    email\n                }\n            });\n            return res.json({\n                ok: true\n            });\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY3JlYXRlLWFjY291bnQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQzZCO0FBV2QsZUFBZUMsT0FBTyxDQUNuQ0MsR0FBbUIsRUFDbkJDLEdBQW9CLEVBQ3BCO0lBQ0EsTUFBTSxFQUFFQyxJQUFJLEdBQUVDLEtBQUssR0FBRSxHQUFHSCxHQUFHLENBQUNJLElBQUk7SUFDaEMsTUFBTU4sK0RBQWtCLENBQUMsRUFBRSxDQUFDO0lBQzVCLElBQUlFLEdBQUcsQ0FBQ08sTUFBTSxLQUFLLE1BQU0sRUFBRTtRQUN6QixNQUFNRixJQUFJLEdBQUcsTUFBTVAsK0RBQWtCLENBQUM7WUFDcENXLEtBQUssRUFBRTtnQkFDTE4sS0FBSzthQUNOO1NBQ0YsQ0FBQztRQUNGTyxPQUFPLENBQUNDLEdBQUcsQ0FBQ04sSUFBSSxDQUFDO1FBQ2pCLElBQUlBLElBQUksRUFBRTtZQUNSSyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxZQUFZLENBQUM7WUFDekIsT0FBT1YsR0FBRyxDQUFDVyxJQUFJLENBQUM7Z0JBQ2RDLEVBQUUsRUFBRSxLQUFLO2FBQ1YsQ0FBQztTQUNILE1BQU07WUFDTEgsT0FBTyxDQUFDQyxHQUFHLENBQUMsNEJBQTRCLENBQUM7WUFDekMsTUFBTWIsMkRBQWMsQ0FBQztnQkFDbkJpQixJQUFJLEVBQUU7b0JBQ0piLElBQUk7b0JBQ0pDLEtBQUs7aUJBQ047YUFDRixDQUFDO1lBQ0YsT0FBT0YsR0FBRyxDQUFDVyxJQUFJLENBQUM7Z0JBQ2RDLEVBQUUsRUFBRSxJQUFJO2FBQ1QsQ0FBQztTQUNIO0tBQ0Y7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1wcmlzbWEtc3FsaXRlLy4vcGFnZXMvYXBpL2NyZWF0ZS1hY2NvdW50LnRzeD84MTZiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0J1xuaW1wb3J0IGRiIGZyb20gJy4uLy4uL2xpYi9kYidcbmltcG9ydCB7IHdpdGhJcm9uU2Vzc2lvbkFwaVJvdXRlIH0gZnJvbSAnaXJvbi1zZXNzaW9uL25leHQnXG5cbmRlY2xhcmUgbW9kdWxlICdpcm9uLXNlc3Npb24nIHtcbiAgaW50ZXJmYWNlIElyb25TZXNzaW9uRGF0YSB7XG4gICAgdXNlcj86IHtcbiAgICAgIGVtYWlsOiBzdHJpbmdcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2Vcbikge1xuICBjb25zdCB7IG5hbWUsIGVtYWlsIH0gPSByZXEuYm9keVxuICBhd2FpdCBkYi51c2VyLmRlbGV0ZU1hbnkoe30pXG4gIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgZGIudXNlci5maW5kVW5pcXVlKHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIGVtYWlsLFxuICAgICAgfSxcbiAgICB9KVxuICAgIGNvbnNvbGUubG9nKHVzZXIpXG4gICAgaWYgKHVzZXIpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdmb3VuZCB1c2VyJylcbiAgICAgIHJldHVybiByZXMuanNvbih7XG4gICAgICAgIG9rOiBmYWxzZSxcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCdEaWQgbm90IGZpbmQuIFdpbGwgY3JlYXRlLicpXG4gICAgICBhd2FpdCBkYi51c2VyLmNyZWF0ZSh7XG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBuYW1lLFxuICAgICAgICAgIGVtYWlsLFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICAgIHJldHVybiByZXMuanNvbih7XG4gICAgICAgIG9rOiB0cnVlLFxuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJkYiIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJuYW1lIiwiZW1haWwiLCJib2R5IiwidXNlciIsImRlbGV0ZU1hbnkiLCJtZXRob2QiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJjb25zb2xlIiwibG9nIiwianNvbiIsIm9rIiwiY3JlYXRlIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/create-account.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/create-account.tsx"));
module.exports = __webpack_exports__;

})();