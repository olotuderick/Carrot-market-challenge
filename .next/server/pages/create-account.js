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
exports.id = "pages/create-account";
exports.ids = ["pages/create-account"];
exports.modules = {

/***/ "./lib/client/useMutation.ts":
/*!***********************************!*\
  !*** ./lib/client/useMutation.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ useMutation)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction useMutation(url) {\n    const { 0: state , 1: setSate  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n        loading: false,\n        data: undefined,\n        error: undefined\n    });\n    function mutation(data1) {\n        setSate((prev)=>({\n                ...prev,\n                loading: true\n            })\n        );\n        fetch(url, {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(data1)\n        }).then((response)=>response.json().catch(()=>{})\n        ).then((data)=>setSate((prev)=>({\n                    ...prev,\n                    data,\n                    loading: false\n                })\n            )\n        ).catch((error)=>setSate((prev)=>({\n                    ...prev,\n                    error,\n                    loading: false\n                })\n            )\n        );\n    }\n    return [\n        mutation,\n        {\n            ...state\n        }\n    ];\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvY2xpZW50L3VzZU11dGF0aW9uLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFpQztBQVNsQixTQUFTQyxXQUFXLENBQ2pDQyxHQUFXLEVBQ1c7SUFDdEIsTUFBTSxFQVpSLEdBWVNDLEtBQUssR0FaZCxHQVlnQkMsT0FBTyxNQUFJSiwrQ0FBUSxDQUFzQjtRQUNyREssT0FBTyxFQUFFLEtBQUs7UUFDZEMsSUFBSSxFQUFFQyxTQUFTO1FBQ2ZDLEtBQUssRUFBRUQsU0FBUztLQUNqQixDQUFDO0lBQ0YsU0FBU0UsUUFBUSxDQUFDSCxLQUFTLEVBQUU7UUFDM0JGLE9BQU8sQ0FBQyxDQUFDTSxJQUFJLEdBQUssQ0FBQztnQkFBRSxHQUFHQSxJQUFJO2dCQUFFTCxPQUFPLEVBQUUsSUFBSTthQUFFLENBQUM7UUFBQSxDQUFDLENBQUM7UUFDaERNLEtBQUssQ0FBQ1QsR0FBRyxFQUFFO1lBQ1RVLE1BQU0sRUFBRSxNQUFNO1lBQ2RDLE9BQU8sRUFBRTtnQkFDUCxjQUFjLEVBQUUsa0JBQWtCO2FBQ25DO1lBQ0RDLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUNWLEtBQUksQ0FBQztTQUMzQixDQUFDLENBQ0NXLElBQUksQ0FBQyxDQUFDQyxRQUFRLEdBQUtBLFFBQVEsQ0FBQ0MsSUFBSSxFQUFFLENBQUNDLEtBQUssQ0FBQyxJQUFNLEVBQUUsQ0FBQztRQUFBLENBQUMsQ0FDbkRILElBQUksQ0FBQyxDQUFDWCxJQUFJLEdBQUtGLE9BQU8sQ0FBQyxDQUFDTSxJQUFJLEdBQUssQ0FBQztvQkFBRSxHQUFHQSxJQUFJO29CQUFFSixJQUFJO29CQUFFRCxPQUFPLEVBQUUsS0FBSztpQkFBRSxDQUFDO1lBQUEsQ0FBQztRQUFBLENBQUMsQ0FDdEVlLEtBQUssQ0FBQyxDQUFDWixLQUFLLEdBQ1hKLE9BQU8sQ0FBQyxDQUFDTSxJQUFJLEdBQUssQ0FBQztvQkFBRSxHQUFHQSxJQUFJO29CQUFFRixLQUFLO29CQUFFSCxPQUFPLEVBQUUsS0FBSztpQkFBRSxDQUFDO1lBQUEsQ0FBQztRQUFBLENBQ3hELENBQUM7S0FDTDtJQUNELE9BQU87UUFBQ0ksUUFBUTtRQUFFO1lBQUUsR0FBR04sS0FBSztTQUFFO0tBQUMsQ0FBQztDQUNqQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1wcmlzbWEtc3FsaXRlLy4vbGliL2NsaWVudC91c2VNdXRhdGlvbi50cz9mY2M4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmludGVyZmFjZSBVc2VNdXRhdGlvblN0YXRlPFQ+IHtcbiAgbG9hZGluZzogYm9vbGVhbjtcbiAgZGF0YT86IFQ7XG4gIGVycm9yPzogb2JqZWN0O1xufVxudHlwZSBVc2VNdXRhdGlvblJlc3VsdDxUPiA9IFsoZGF0YTogYW55KSA9PiB2b2lkLCBVc2VNdXRhdGlvblN0YXRlPFQ+XTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlTXV0YXRpb248VCA9IGFueT4oXG4gIHVybDogc3RyaW5nXG4pOiBVc2VNdXRhdGlvblJlc3VsdDxUPiB7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U2F0ZV0gPSB1c2VTdGF0ZTxVc2VNdXRhdGlvblN0YXRlPFQ+Pih7XG4gICAgbG9hZGluZzogZmFsc2UsXG4gICAgZGF0YTogdW5kZWZpbmVkLFxuICAgIGVycm9yOiB1bmRlZmluZWQsXG4gIH0pO1xuICBmdW5jdGlvbiBtdXRhdGlvbihkYXRhOiBhbnkpIHtcbiAgICBzZXRTYXRlKChwcmV2KSA9PiAoeyAuLi5wcmV2LCBsb2FkaW5nOiB0cnVlIH0pKTtcbiAgICBmZXRjaCh1cmwsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuICAgIH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKS5jYXRjaCgoKSA9PiB7fSkpXG4gICAgICAudGhlbigoZGF0YSkgPT4gc2V0U2F0ZSgocHJldikgPT4gKHsgLi4ucHJldiwgZGF0YSwgbG9hZGluZzogZmFsc2UgfSkpKVxuICAgICAgLmNhdGNoKChlcnJvcikgPT5cbiAgICAgICAgc2V0U2F0ZSgocHJldikgPT4gKHsgLi4ucHJldiwgZXJyb3IsIGxvYWRpbmc6IGZhbHNlIH0pKVxuICAgICAgKTtcbiAgfVxuICByZXR1cm4gW211dGF0aW9uLCB7IC4uLnN0YXRlIH1dO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlTXV0YXRpb24iLCJ1cmwiLCJzdGF0ZSIsInNldFNhdGUiLCJsb2FkaW5nIiwiZGF0YSIsInVuZGVmaW5lZCIsImVycm9yIiwibXV0YXRpb24iLCJwcmV2IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiY2F0Y2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/client/useMutation.ts\n");

/***/ }),

/***/ "./pages/create-account.tsx":
/*!**********************************!*\
  !*** ./pages/create-account.tsx ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hook-form */ \"react-hook-form\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! . */ \"./pages/index.tsx\");\n/* harmony import */ var _lib_client_useMutation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/client/useMutation */ \"./lib/client/useMutation.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_3__, swr__WEBPACK_IMPORTED_MODULE_4__, ___WEBPACK_IMPORTED_MODULE_5__]);\n([react_hook_form__WEBPACK_IMPORTED_MODULE_3__, swr__WEBPACK_IMPORTED_MODULE_4__, ___WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\nconst CreateAccount = ()=>{\n    const [create, { loading , data: data1  }] = (0,_lib_client_useMutation__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\"/api/create-account\");\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { data: user  } = (0,swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"/api/user\", ___WEBPACK_IMPORTED_MODULE_5__.fetcher);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        console.log(\"create account\", data1);\n        if (user) {\n            router.replace(\"/\");\n        }\n    }, []);\n    const { register , handleSubmit  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (data1?.ok) {\n            console.log(\"redirecting to login\");\n            router.push(\"/log-in\");\n        }\n        if (data1?.ok === false) {\n            alert(\"You have an account please login.\");\n            router.push(\"/log-in\");\n        }\n    }, [\n        data1\n    ]);\n    const onValid = (data)=>{\n        create(data);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit(onValid),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Create Account\"\n                }, void 0, false, {\n                    fileName: \"/Users/derick/Downloads/Blue Print/pages/create-account.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"name\",\n                            children: \"Name:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/derick/Downloads/Blue Print/pages/create-account.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            ...register(\"name\", {\n                                required: true\n                            }),\n                            type: \"text\",\n                            id: \"name\"\n                        }, void 0, false, {\n                            fileName: \"/Users/derick/Downloads/Blue Print/pages/create-account.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/derick/Downloads/Blue Print/pages/create-account.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"email\",\n                            children: \"Email:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/derick/Downloads/Blue Print/pages/create-account.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            ...register(\"email\", {\n                                required: true\n                            }),\n                            type: \"email\",\n                            id: \"email\"\n                        }, void 0, false, {\n                            fileName: \"/Users/derick/Downloads/Blue Print/pages/create-account.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/derick/Downloads/Blue Print/pages/create-account.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"submit\",\n                    children: loading ? \"Loading...\" : \"Create Account\"\n                }, void 0, false, {\n                    fileName: \"/Users/derick/Downloads/Blue Print/pages/create-account.tsx\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/derick/Downloads/Blue Print/pages/create-account.tsx\",\n            lineNumber: 42,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateAccount);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jcmVhdGUtYWNjb3VudC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUN1QztBQUNOO0FBRVE7QUFDakI7QUFDRztBQUN3QjtBQU9uRCxNQUFNTSxhQUFhLEdBQWEsSUFBTTtJQUNwQyxNQUFNLENBQUNDLE1BQU0sRUFBRSxFQUFFQyxPQUFPLEdBQUVDLElBQUksRUFBSkEsS0FBSSxHQUFFLENBQUMsR0FBR0osbUVBQVcsQ0FBQyxxQkFBcUIsQ0FBQztJQUN0RSxNQUFNSyxNQUFNLEdBQUdWLHNEQUFTLEVBQUU7SUFDMUIsTUFBTSxFQUFFUyxJQUFJLEVBQUVFLElBQUksR0FBRSxHQUFHUiwrQ0FBTSxDQUFRLFdBQVcsRUFBRUMsc0NBQU8sQ0FBQztJQUUxREgsZ0RBQVMsQ0FBQyxJQUFNO1FBQ2RXLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGdCQUFnQixFQUFFSixLQUFJLENBQUM7UUFDbkMsSUFBSUUsSUFBSSxFQUFFO1lBQ1JELE1BQU0sQ0FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQztTQUNwQjtLQUNGLEVBQUUsRUFBRSxDQUFDO0lBQ04sTUFBTSxFQUFFQyxRQUFRLEdBQUVDLFlBQVksR0FBRSxHQUFHZCx3REFBTyxFQUFTO0lBQ25ERCxnREFBUyxDQUFDLElBQU07UUFDZCxJQUFJUSxLQUFJLEVBQUVRLEVBQUUsRUFBRTtZQUNaTCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQztZQUNuQ0gsTUFBTSxDQUFDUSxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQ3ZCO1FBQ0QsSUFBSVQsS0FBSSxFQUFFUSxFQUFFLEtBQUssS0FBSyxFQUFFO1lBQ3RCRSxLQUFLLENBQUMsbUNBQW1DLENBQUM7WUFDMUNULE1BQU0sQ0FBQ1EsSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUN2QjtLQUNGLEVBQUU7UUFBQ1QsS0FBSTtLQUFDLENBQUM7SUFDVixNQUFNVyxPQUFPLEdBQUcsQ0FBQ1gsSUFBVyxHQUFLO1FBQy9CRixNQUFNLENBQUNFLElBQUksQ0FBQztLQUNiO0lBQ0QscUJBQ0U7a0JBQ0UsNEVBQUNZLE1BQUk7WUFBQ0MsUUFBUSxFQUFFTixZQUFZLENBQUNJLE9BQU8sQ0FBQzs7OEJBQ25DLDhEQUFDRyxJQUFFOzhCQUFDLGdCQUFjOzs7Ozs2QkFBSzs4QkFDdkIsOERBQUNDLEtBQUc7O3NDQUNGLDhEQUFDQyxPQUFLOzRCQUFDQyxPQUFPLEVBQUMsTUFBTTtzQ0FBQyxPQUFLOzs7OztxQ0FBUTtzQ0FDbkMsOERBQUNDLE9BQUs7NEJBQ0gsR0FBR1osUUFBUSxDQUFDLE1BQU0sRUFBRTtnQ0FBRWEsUUFBUSxFQUFFLElBQUk7NkJBQUUsQ0FBQzs0QkFDeENDLElBQUksRUFBQyxNQUFNOzRCQUNYQyxFQUFFLEVBQUMsTUFBTTs7Ozs7cUNBQ1Q7Ozs7Ozs2QkFDRTs4QkFDTiw4REFBQ04sS0FBRzs7c0NBQ0YsOERBQUNDLE9BQUs7NEJBQUNDLE9BQU8sRUFBQyxPQUFPO3NDQUFDLFFBQU07Ozs7O3FDQUFRO3NDQUNyQyw4REFBQ0MsT0FBSzs0QkFDSCxHQUFHWixRQUFRLENBQUMsT0FBTyxFQUFFO2dDQUNwQmEsUUFBUSxFQUFFLElBQUk7NkJBQ2YsQ0FBQzs0QkFDRkMsSUFBSSxFQUFDLE9BQU87NEJBQ1pDLEVBQUUsRUFBQyxPQUFPOzs7OztxQ0FDVjs7Ozs7OzZCQUNFOzhCQUNOLDhEQUFDQyxRQUFNO29CQUFDRixJQUFJLEVBQUMsUUFBUTs4QkFDbEJyQixPQUFPLEdBQUcsWUFBWSxHQUFHLGdCQUFnQjs7Ozs7NkJBQ25DOzs7Ozs7cUJBQ0o7cUJBQ04sQ0FDSjtDQUNGO0FBQ0QsaUVBQWVGLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtcHJpc21hLXNxbGl0ZS8uL3BhZ2VzL2NyZWF0ZS1hY2NvdW50LnRzeD80NTBmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nXG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cidcbmltcG9ydCB7IGZldGNoZXIgfSBmcm9tICcuJ1xuaW1wb3J0IHVzZU11dGF0aW9uIGZyb20gJy4uL2xpYi9jbGllbnQvdXNlTXV0YXRpb24nXG5leHBvcnQgaW50ZXJmYWNlIElVc2VyIHtcbiAgLy8gaWQ6IG51bWJlclxuICBuYW1lOiBzdHJpbmdcbiAgZW1haWw6IHN0cmluZ1xufVxuXG5jb25zdCBDcmVhdGVBY2NvdW50OiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgY29uc3QgW2NyZWF0ZSwgeyBsb2FkaW5nLCBkYXRhIH1dID0gdXNlTXV0YXRpb24oJy9hcGkvY3JlYXRlLWFjY291bnQnKVxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCB7IGRhdGE6IHVzZXIgfSA9IHVzZVNXUjxJVXNlcj4oJy9hcGkvdXNlcicsIGZldGNoZXIpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnY3JlYXRlIGFjY291bnQnLCBkYXRhKVxuICAgIGlmICh1c2VyKSB7XG4gICAgICByb3V0ZXIucmVwbGFjZSgnLycpXG4gICAgfVxuICB9LCBbXSlcbiAgY29uc3QgeyByZWdpc3RlciwgaGFuZGxlU3VibWl0IH0gPSB1c2VGb3JtPElVc2VyPigpXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRhdGE/Lm9rKSB7XG4gICAgICBjb25zb2xlLmxvZygncmVkaXJlY3RpbmcgdG8gbG9naW4nKVxuICAgICAgcm91dGVyLnB1c2goJy9sb2ctaW4nKVxuICAgIH1cbiAgICBpZiAoZGF0YT8ub2sgPT09IGZhbHNlKSB7XG4gICAgICBhbGVydCgnWW91IGhhdmUgYW4gYWNjb3VudCBwbGVhc2UgbG9naW4uJylcbiAgICAgIHJvdXRlci5wdXNoKCcvbG9nLWluJylcbiAgICB9XG4gIH0sIFtkYXRhXSlcbiAgY29uc3Qgb25WYWxpZCA9IChkYXRhOiBJVXNlcikgPT4ge1xuICAgIGNyZWF0ZShkYXRhKVxuICB9XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25WYWxpZCl9PlxuICAgICAgICA8aDE+Q3JlYXRlIEFjY291bnQ8L2gxPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiPk5hbWU6PC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHsuLi5yZWdpc3RlcignbmFtZScsIHsgcmVxdWlyZWQ6IHRydWUgfSl9XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBpZD1cIm5hbWVcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5FbWFpbDo8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgey4uLnJlZ2lzdGVyKCdlbWFpbCcsIHtcbiAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICBpZD1cImVtYWlsXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAge2xvYWRpbmcgPyAnTG9hZGluZy4uLicgOiAnQ3JlYXRlIEFjY291bnQnfVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICA8Lz5cbiAgKVxufVxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlQWNjb3VudFxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZUZvcm0iLCJ1c2VTV1IiLCJmZXRjaGVyIiwidXNlTXV0YXRpb24iLCJDcmVhdGVBY2NvdW50IiwiY3JlYXRlIiwibG9hZGluZyIsImRhdGEiLCJyb3V0ZXIiLCJ1c2VyIiwiY29uc29sZSIsImxvZyIsInJlcGxhY2UiLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsIm9rIiwicHVzaCIsImFsZXJ0Iiwib25WYWxpZCIsImZvcm0iLCJvblN1Ym1pdCIsImgxIiwiZGl2IiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJyZXF1aXJlZCIsInR5cGUiLCJpZCIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/create-account.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"fetcher\": () => (/* binding */ fetcher)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"swr\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_3__]);\nswr__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst fetcher = (url)=>fetch(url).then((response)=>response.json()\n    )\n;\nconst Home = ()=>{\n    const { data  } = (0,swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"/api/user\", fetcher);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        console.log(\"\\u3147\\u3137\\u3137\\u3139\\u3134\\u3147\\u3139\", data);\n        if (data === undefined) {\n            router.replace(\"/create-account\");\n        }\n    }, [\n        data\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"Welcome \",\n                    data?.name\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/derick/Downloads/Blue Print/pages/index.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: [\n                    \"Your email is: \",\n                    data?.email\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/derick/Downloads/Blue Print/pages/index.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDdUM7QUFDQztBQUNoQjtBQUVqQixNQUFNSSxPQUFPLEdBQUcsQ0FBQ0MsR0FBVyxHQUNqQ0MsS0FBSyxDQUFDRCxHQUFHLENBQUMsQ0FBQ0UsSUFBSSxDQUFDLENBQUNDLFFBQVEsR0FBS0EsUUFBUSxDQUFDQyxJQUFJLEVBQUU7SUFBQSxDQUFDO0FBQUE7QUFDaEQsTUFBTUMsSUFBSSxHQUFhLElBQU07SUFDM0IsTUFBTSxFQUFFQyxJQUFJLEdBQUUsR0FBR1IsK0NBQU0sQ0FBUSxXQUFXLEVBQUVDLE9BQU8sQ0FBQztJQUNwRCxNQUFNUSxNQUFNLEdBQUdaLHNEQUFTLEVBQUU7SUFFMUJFLGdEQUFTLENBQUMsSUFBTTtRQUNkVyxPQUFPLENBQUNDLEdBQUcsQ0FBQyw0Q0FBUyxFQUFFSCxJQUFJLENBQUM7UUFDNUIsSUFBSUEsSUFBSSxLQUFLSSxTQUFTLEVBQUU7WUFDdEJILE1BQU0sQ0FBQ0ksT0FBTyxDQUFDLGlCQUFpQixDQUFDO1NBQ2xDO0tBQ0YsRUFBRTtRQUFDTCxJQUFJO0tBQUMsQ0FBQztJQUNWLHFCQUNFOzswQkFDRSw4REFBQ00sSUFBRTs7b0JBQUMsVUFBUTtvQkFBQ04sSUFBSSxFQUFFTyxJQUFJOzs7Ozs7eUJBQU07MEJBQzdCLDhEQUFDQyxJQUFFOztvQkFBQyxpQkFBZTtvQkFBQ1IsSUFBSSxFQUFFUyxLQUFLOzs7Ozs7eUJBQU07O29CQUNwQyxDQUNKO0NBQ0Y7QUFDRCxpRUFBZVYsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1wcmlzbWEtc3FsaXRlLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cidcbmltcG9ydCB7IElVc2VyIH0gZnJvbSAnLi9jcmVhdGUtYWNjb3VudCdcbmV4cG9ydCBjb25zdCBmZXRjaGVyID0gKHVybDogc3RyaW5nKSA9PlxuICBmZXRjaCh1cmwpLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG5jb25zdCBIb21lOiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgY29uc3QgeyBkYXRhIH0gPSB1c2VTV1I8SVVzZXI+KCcvYXBpL3VzZXInLCBmZXRjaGVyKVxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ+OFh+OEt+OEt+OEueOEtOOFh+OEuScsIGRhdGEpXG4gICAgaWYgKGRhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcm91dGVyLnJlcGxhY2UoJy9jcmVhdGUtYWNjb3VudCcpXG4gICAgfVxuICB9LCBbZGF0YV0pXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxoMT5XZWxjb21lIHtkYXRhPy5uYW1lfTwvaDE+XG4gICAgICA8aDI+WW91ciBlbWFpbCBpczoge2RhdGE/LmVtYWlsfTwvaDI+XG4gICAgPC8+XG4gIClcbn1cbmV4cG9ydCBkZWZhdWx0IEhvbWVcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVNXUiIsImZldGNoZXIiLCJ1cmwiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJIb21lIiwiZGF0YSIsInJvdXRlciIsImNvbnNvbGUiLCJsb2ciLCJ1bmRlZmluZWQiLCJyZXBsYWNlIiwiaDEiLCJuYW1lIiwiaDIiLCJlbWFpbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react-hook-form":
/*!**********************************!*\
  !*** external "react-hook-form" ***!
  \**********************************/
/***/ ((module) => {

module.exports = import("react-hook-form");;

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ ((module) => {

module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/create-account.tsx"));
module.exports = __webpack_exports__;

})();