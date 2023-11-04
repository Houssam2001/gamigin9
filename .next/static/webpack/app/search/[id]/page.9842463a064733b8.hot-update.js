"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/search/[id]/page",{

/***/ "(app-pages-browser)/./src/app/search/[id]/page.tsx":
/*!**************************************!*\
  !*** ./src/app/search/[id]/page.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_organism_advertisement_Advertisement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/organism/advertisement/Advertisement */ \"(app-pages-browser)/./src/components/organism/advertisement/Advertisement.tsx\");\n/* harmony import */ var _components_molecules_card_PostCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/molecules/card/PostCard */ \"(app-pages-browser)/./src/components/molecules/card/PostCard.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tanstack/react-query */ \"(app-pages-browser)/./node_modules/@tanstack/react-query/build/modern/useInfiniteQuery.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst searching = (param)=>{\n    let { params } = param;\n    _s();\n    const { status, data, error, isFetching, isFetchingNextPage, isFetchingPreviousPage, fetchNextPage, fetchPreviousPage, hasNextPage, hasPreviousPage } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__.useInfiniteQuery)({\n        queryKey: [\n            \"games\"\n        ],\n        queryFn: async (param)=>{\n            let { pageParam } = param;\n            const res = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"https://gamigin-api.vercel.app
/api/search/\".concat(params.id, \"/\") + pageParam);\n            return res.data;\n        },\n        initialPageParam: 1,\n        getPreviousPageParam: (firstPage)=>{\n            var _firstPage_previousId;\n            return (_firstPage_previousId = firstPage.previousId) !== null && _firstPage_previousId !== void 0 ? _firstPage_previousId : undefined;\n        },\n        getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams)=>{\n            return lastPageParam + 1;\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container mx-auto\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    className: \"my-20\",\n                    children: [\n                        status === \"pending\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Loading...\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\houss\\\\OneDrive\\\\Bureau\\\\gamigin\\\\src\\\\app\\\\search\\\\[id]\\\\page.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 19\n                        }, undefined) : status === \"error\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: [\n                                \"Error: \",\n                                error.message\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\houss\\\\OneDrive\\\\Bureau\\\\gamigin\\\\src\\\\app\\\\search\\\\[id]\\\\page.tsx\",\n                            lineNumber: 55,\n                            columnNumber: 19\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5\",\n                                children: data.pages.map((page)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), {\n                                        children: page.data.map((games)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_molecules_card_PostCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                                crack_only: \"\",\n                                                About_the_Game_Title: games.About_the_Game_Title,\n                                                Comments_Count: games.Comments_Count,\n                                                Image_URL: games.Image_URL,\n                                                Magnet_URL: games.Magnet_URL,\n                                                Minimum_Requirements: games.Minimum_Requirements,\n                                                Post_Details: games.Post_Details,\n                                                Post_URL: games.Post_URL,\n                                                Recommended_Requirements: games.Recommended_Requirements,\n                                                Release_Date: games.Release_Date,\n                                                Torrent_URL: \"\",\n                                                Category: games.Category,\n                                                Date: games.Date,\n                                                Developer: games.Developer,\n                                                Genre: games.Genre ? games.Genre : \"\",\n                                                NFO: games.NFO,\n                                                Publisher: games.Publisher,\n                                                Size: games.Size,\n                                                Title: games.Title,\n                                                id: undefined\n                                            }, games.id, false, {\n                                                fileName: \"C:\\\\Users\\\\houss\\\\OneDrive\\\\Bureau\\\\gamigin\\\\src\\\\app\\\\search\\\\[id]\\\\page.tsx\",\n                                                lineNumber: 63,\n                                                columnNumber: 34\n                                            }, undefined))\n                                    }, page.nextId, false, {\n                                        fileName: \"C:\\\\Users\\\\houss\\\\OneDrive\\\\Bureau\\\\gamigin\\\\src\\\\app\\\\search\\\\[id]\\\\page.tsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 28\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\houss\\\\OneDrive\\\\Bureau\\\\gamigin\\\\src\\\\app\\\\search\\\\[id]\\\\page.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 22\n                            }, undefined)\n                        }, void 0, false),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center justify-center w-full mt-8\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>fetchNextPage(),\n                                disabled: !hasNextPage || isFetchingNextPage,\n                                className: \"btn btn-outline btn-secondary font-work px-5 text-base font-medium\",\n                                children: \"Load More\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\houss\\\\OneDrive\\\\Bureau\\\\gamigin\\\\src\\\\app\\\\search\\\\[id]\\\\page.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 22\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\houss\\\\OneDrive\\\\Bureau\\\\gamigin\\\\src\\\\app\\\\search\\\\[id]\\\\page.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 16\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\houss\\\\OneDrive\\\\Bureau\\\\gamigin\\\\src\\\\app\\\\search\\\\[id]\\\\page.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    className: \"mb-24\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_organism_advertisement_Advertisement__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\houss\\\\OneDrive\\\\Bureau\\\\gamigin\\\\src\\\\app\\\\search\\\\[id]\\\\page.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 16\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\houss\\\\OneDrive\\\\Bureau\\\\gamigin\\\\src\\\\app\\\\search\\\\[id]\\\\page.tsx\",\n                    lineNumber: 90,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\houss\\\\OneDrive\\\\Bureau\\\\gamigin\\\\src\\\\app\\\\search\\\\[id]\\\\page.tsx\",\n            lineNumber: 41,\n            columnNumber: 10\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\houss\\\\OneDrive\\\\Bureau\\\\gamigin\\\\src\\\\app\\\\search\\\\[id]\\\\page.tsx\",\n        lineNumber: 40,\n        columnNumber: 7\n    }, undefined);\n};\n_s(searching, \"LjGdvSLy/k8vUUgonCWGVWnV40I=\", false, function() {\n    return [\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__.useInfiniteQuery\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (searching);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc2VhcmNoL1tpZF0vcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUM2RTtBQUNsQjtBQUNsQztBQUUrQjtBQUMvQjtBQUV6QixNQUFNSyxZQUFZO1FBQUMsRUFBRUMsTUFBTSxFQUkxQjs7SUFDRSxNQUFNLEVBQ0hDLE1BQU0sRUFDTkMsSUFBSSxFQUNKQyxLQUFLLEVBQ0xDLFVBQVUsRUFDVkMsa0JBQWtCLEVBQ2xCQyxzQkFBc0IsRUFDdEJDLGFBQWEsRUFDYkMsaUJBQWlCLEVBQ2pCQyxXQUFXLEVBQ1hDLGVBQWUsRUFDakIsR0FBR2IsdUVBQWdCQSxDQUFDO1FBQ2xCYyxVQUFVO1lBQUM7U0FBUTtRQUNuQkMsU0FBUztnQkFBTyxFQUFFQyxTQUFTLEVBQUU7WUFDMUIsTUFBTUMsTUFBTSxNQUFNaEIsNkNBQUtBLENBQUNpQixHQUFHLENBQUMscUVBQStFLE9BQVZmLE9BQU9nQixFQUFFLEVBQUMsT0FBS0g7WUFDaEgsT0FBT0MsSUFBSVosSUFBSTtRQUNsQjtRQUVBZSxrQkFBa0I7UUFDbEJDLHNCQUFzQixDQUFDQztnQkFBY0E7bUJBQUFBLENBQUFBLHdCQUFBQSxVQUFVQyxVQUFVLGNBQXBCRCxtQ0FBQUEsd0JBQXdCRTtRQUFRO1FBQ3JFQyxrQkFBa0IsQ0FBQ0MsVUFBVUMsVUFBVUMsZUFBZUM7WUFFbkQsT0FBT0QsZ0JBQWdCO1FBQzFCO0lBQ0g7SUFDQSxxQkFDRyw4REFBQ0U7a0JBQ0UsNEVBQUNDO1lBQUlDLFdBQVU7OzhCQVVaLDhEQUFDQztvQkFBUUQsV0FBVTs7d0JBQ2Y1QixXQUFXLDBCQUNULDhEQUFDOEI7c0NBQUU7Ozs7O3dDQUNGOUIsV0FBVyx3QkFDWiw4REFBQytCOztnQ0FBSztnQ0FBUTdCLE1BQU04QixPQUFPOzs7Ozs7c0RBRTNCO3NDQUNHLDRFQUFDTDtnQ0FBSUMsV0FBVTswQ0FDWDNCLEtBQUtnQyxLQUFLLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxxQkFDZCw4REFBQ3hDLHVEQUFjO2tEQUNYd0MsS0FBS2xDLElBQUksQ0FBQ2lDLEdBQUcsQ0FBQyxDQUFDRyxzQkFFYiw4REFBQzNDLDJFQUFRQTtnREFDTjRDLFlBQVc7Z0RBQ1hDLHNCQUFzQkYsTUFBTUUsb0JBQW9CO2dEQUFFQyxnQkFBZ0JILE1BQU1HLGNBQWM7Z0RBQUVDLFdBQVdKLE1BQU1JLFNBQVM7Z0RBQ2xIQyxZQUFZTCxNQUFNSyxVQUFVO2dEQUM1QkMsc0JBQXNCTixNQUFNTSxvQkFBb0I7Z0RBQUVDLGNBQWNQLE1BQU1PLFlBQVk7Z0RBQUVDLFVBQVVSLE1BQU1RLFFBQVE7Z0RBQzVHQywwQkFBMEJULE1BQU1TLHdCQUF3QjtnREFBRUMsY0FBY1YsTUFBTVUsWUFBWTtnREFBRUMsYUFBWTtnREFDeEdDLFVBQVVaLE1BQU1ZLFFBQVE7Z0RBQUVDLE1BQU1iLE1BQU1hLElBQUk7Z0RBQUVDLFdBQVdkLE1BQU1jLFNBQVM7Z0RBQUVDLE9BQU9mLE1BQU1lLEtBQUssR0FBR2YsTUFBTWUsS0FBSyxHQUFHO2dEQUFJQyxLQUFLaEIsTUFBTWdCLEdBQUc7Z0RBQUVDLFdBQVdqQixNQUFNaUIsU0FBUztnREFBRUMsTUFBTWxCLE1BQU1rQixJQUFJO2dEQUFFQyxPQUFPbkIsTUFBTW1CLEtBQUs7Z0RBQUV6QyxJQUFJSzsrQ0FEckZpQixNQUFNdEIsRUFBRTs7Ozs7dUNBUjVHb0IsS0FBS3NCLE1BQU07Ozs7Ozs7Ozs7O3NDQWdCNUMsOERBQUM5Qjs0QkFBSUMsV0FBVTtzQ0FFVCw0RUFBQzhCO2dDQUNFQyxTQUFTLElBQU1yRDtnQ0FDZnNELFVBQVUsQ0FBQ3BELGVBQWVKO2dDQUMxQndCLFdBQVU7MENBQ1o7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQVFWLDhEQUFDQztvQkFBUUQsV0FBVTs4QkFDaEIsNEVBQUNuQyx3RkFBYUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUs3QjtHQXZGTUs7O1FBZ0JDRixtRUFBZ0JBOzs7QUF5RXZCLCtEQUFlRSxTQUFTQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvc2VhcmNoL1tpZF0vcGFnZS50c3g/YjQyOCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCBBZHZlcnRpc2VtZW50IGZyb20gJ0AvY29tcG9uZW50cy9vcmdhbmlzbS9hZHZlcnRpc2VtZW50L0FkdmVydGlzZW1lbnQnXG5pbXBvcnQgUG9zdENhcmQgZnJvbSAnQC9jb21wb25lbnRzL21vbGVjdWxlcy9jYXJkL1Bvc3RDYXJkJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgR2FtZURhdGEgfSBmcm9tICcuLi8uLi9tb2RlbHMvR2FtZSdcbmltcG9ydCB7IHVzZUluZmluaXRlUXVlcnkgfSBmcm9tICdAdGFuc3RhY2svcmVhY3QtcXVlcnknXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmNvbnN0IHNlYXJjaGluZyA9ICh7IHBhcmFtcyB9OiB7XG4gICBwYXJhbXM6IHtcbiAgICAgIGlkOiBTdHJpbmdcbiAgIH1cbn0pID0+IHtcbiAgIGNvbnN0IHtcbiAgICAgIHN0YXR1cyxcbiAgICAgIGRhdGEsXG4gICAgICBlcnJvcixcbiAgICAgIGlzRmV0Y2hpbmcsXG4gICAgICBpc0ZldGNoaW5nTmV4dFBhZ2UsXG4gICAgICBpc0ZldGNoaW5nUHJldmlvdXNQYWdlLFxuICAgICAgZmV0Y2hOZXh0UGFnZSxcbiAgICAgIGZldGNoUHJldmlvdXNQYWdlLFxuICAgICAgaGFzTmV4dFBhZ2UsXG4gICAgICBoYXNQcmV2aW91c1BhZ2UsXG4gICB9ID0gdXNlSW5maW5pdGVRdWVyeSh7XG4gICAgICBxdWVyeUtleTogWydnYW1lcyddLFxuICAgICAgcXVlcnlGbjogYXN5bmMgKHsgcGFnZVBhcmFtIH0pID0+IHtcbiAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgaHR0cHM6Ly9nYW1pZ2luLWVxbHRvb2ZuZS1nYW1pZ2lucy1wcm9qZWN0cy52ZXJjZWwuYXBwL2FwaS9zZWFyY2gvJHtwYXJhbXMuaWR9L2AgKyBwYWdlUGFyYW0pXG4gICAgICAgICByZXR1cm4gcmVzLmRhdGFcbiAgICAgIH0sXG5cbiAgICAgIGluaXRpYWxQYWdlUGFyYW06IDEsXG4gICAgICBnZXRQcmV2aW91c1BhZ2VQYXJhbTogKGZpcnN0UGFnZSkgPT4gZmlyc3RQYWdlLnByZXZpb3VzSWQgPz8gdW5kZWZpbmVkLFxuICAgICAgZ2V0TmV4dFBhZ2VQYXJhbTogKGxhc3RQYWdlLCBhbGxQYWdlcywgbGFzdFBhZ2VQYXJhbSwgYWxsUGFnZVBhcmFtcykgPT4ge1xuXG4gICAgICAgICByZXR1cm4gbGFzdFBhZ2VQYXJhbSArIDE7XG4gICAgICB9LFxuICAgfSlcbiAgIHJldHVybiAoXG4gICAgICA8bWFpbj5cbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG9cIj5cbiAgICAgICAgICAgIHsvKiBQYWdlIHRpdGxlIGluZm8gKi99XG4gICAgICAgICAgICB7LyogPHNlY3Rpb24+XG4gICAgICAgICAgICAgICA8UGFnZUluZm8gLz5cbiAgICAgICAgICAgIDwvc2VjdGlvbj4gKi99XG4gICAgICAgICAgICB7LyogQmFubmVyICovfVxuICAgICAgICAgICAgey8qIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm15LTEyXCI+XG4gICAgICAgICAgICAgICA8UG9zdE92ZXJsYXlDYXJkIC8+XG4gICAgICAgICAgICA8L3NlY3Rpb24+ICovfVxuICAgICAgICAgICAgey8qIEFsbCBwb3N0cyBjb21wb25lbnQgKi99XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJteS0yMFwiPlxuICAgICAgICAgICAgICAge3N0YXR1cyA9PT0gJ3BlbmRpbmcnID8gKFxuICAgICAgICAgICAgICAgICAgPHA+TG9hZGluZy4uLjwvcD5cbiAgICAgICAgICAgICAgICkgOiBzdGF0dXMgPT09ICdlcnJvcicgPyAoXG4gICAgICAgICAgICAgICAgICA8c3Bhbj5FcnJvcjoge2Vycm9yLm1lc3NhZ2V9PC9zcGFuPlxuICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIGdhcC01XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5wYWdlcy5tYXAoKHBhZ2UpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e3BhZ2UubmV4dElkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwYWdlLmRhdGEubWFwKChnYW1lczogR2FtZURhdGEpID0+IChcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBvc3RDYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmFja19vbmx5PScnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBYm91dF90aGVfR2FtZV9UaXRsZT17Z2FtZXMuQWJvdXRfdGhlX0dhbWVfVGl0bGV9IENvbW1lbnRzX0NvdW50PXtnYW1lcy5Db21tZW50c19Db3VudH0gSW1hZ2VfVVJMPXtnYW1lcy5JbWFnZV9VUkx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYWduZXRfVVJMPXtnYW1lcy5NYWduZXRfVVJMfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWluaW11bV9SZXF1aXJlbWVudHM9e2dhbWVzLk1pbmltdW1fUmVxdWlyZW1lbnRzfSBQb3N0X0RldGFpbHM9e2dhbWVzLlBvc3RfRGV0YWlsc30gUG9zdF9VUkw9e2dhbWVzLlBvc3RfVVJMfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVjb21tZW5kZWRfUmVxdWlyZW1lbnRzPXtnYW1lcy5SZWNvbW1lbmRlZF9SZXF1aXJlbWVudHN9IFJlbGVhc2VfRGF0ZT17Z2FtZXMuUmVsZWFzZV9EYXRlfSBUb3JyZW50X1VSTD0nJyBrZXk9e2dhbWVzLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2F0ZWdvcnk9e2dhbWVzLkNhdGVnb3J5fSBEYXRlPXtnYW1lcy5EYXRlfSBEZXZlbG9wZXI9e2dhbWVzLkRldmVsb3Blcn0gR2VucmU9e2dhbWVzLkdlbnJlID8gZ2FtZXMuR2VucmUgOiAnJ30gTkZPPXtnYW1lcy5ORk99IFB1Ymxpc2hlcj17Z2FtZXMuUHVibGlzaGVyfSBTaXplPXtnYW1lcy5TaXplfSBUaXRsZT17Z2FtZXMuVGl0bGV9IGlkPXt1bmRlZmluZWR9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB3LWZ1bGwgbXQtOFwiPlxuICAgICAgICAgICAgICAgICAgeyhcbiAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGZldGNoTmV4dFBhZ2UoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshaGFzTmV4dFBhZ2UgfHwgaXNGZXRjaGluZ05leHRQYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lIGJ0bi1zZWNvbmRhcnkgZm9udC13b3JrIHB4LTUgdGV4dC1iYXNlIGZvbnQtbWVkaXVtXCJcbiAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIExvYWQgTW9yZVxuICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgICAgIHsvKiBBZHZlcnRpc2VtZW50IGNvbXBvbmVudCAqL31cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1iLTI0XCI+XG4gICAgICAgICAgICAgICA8QWR2ZXJ0aXNlbWVudCAvPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG4gICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IHNlYXJjaGluZ1xuIl0sIm5hbWVzIjpbIkFkdmVydGlzZW1lbnQiLCJQb3N0Q2FyZCIsIlJlYWN0IiwidXNlSW5maW5pdGVRdWVyeSIsImF4aW9zIiwic2VhcmNoaW5nIiwicGFyYW1zIiwic3RhdHVzIiwiZGF0YSIsImVycm9yIiwiaXNGZXRjaGluZyIsImlzRmV0Y2hpbmdOZXh0UGFnZSIsImlzRmV0Y2hpbmdQcmV2aW91c1BhZ2UiLCJmZXRjaE5leHRQYWdlIiwiZmV0Y2hQcmV2aW91c1BhZ2UiLCJoYXNOZXh0UGFnZSIsImhhc1ByZXZpb3VzUGFnZSIsInF1ZXJ5S2V5IiwicXVlcnlGbiIsInBhZ2VQYXJhbSIsInJlcyIsImdldCIsImlkIiwiaW5pdGlhbFBhZ2VQYXJhbSIsImdldFByZXZpb3VzUGFnZVBhcmFtIiwiZmlyc3RQYWdlIiwicHJldmlvdXNJZCIsInVuZGVmaW5lZCIsImdldE5leHRQYWdlUGFyYW0iLCJsYXN0UGFnZSIsImFsbFBhZ2VzIiwibGFzdFBhZ2VQYXJhbSIsImFsbFBhZ2VQYXJhbXMiLCJtYWluIiwiZGl2IiwiY2xhc3NOYW1lIiwic2VjdGlvbiIsInAiLCJzcGFuIiwibWVzc2FnZSIsInBhZ2VzIiwibWFwIiwicGFnZSIsIkZyYWdtZW50IiwiZ2FtZXMiLCJjcmFja19vbmx5IiwiQWJvdXRfdGhlX0dhbWVfVGl0bGUiLCJDb21tZW50c19Db3VudCIsIkltYWdlX1VSTCIsIk1hZ25ldF9VUkwiLCJNaW5pbXVtX1JlcXVpcmVtZW50cyIsIlBvc3RfRGV0YWlscyIsIlBvc3RfVVJMIiwiUmVjb21tZW5kZWRfUmVxdWlyZW1lbnRzIiwiUmVsZWFzZV9EYXRlIiwiVG9ycmVudF9VUkwiLCJDYXRlZ29yeSIsIkRhdGUiLCJEZXZlbG9wZXIiLCJHZW5yZSIsIk5GTyIsIlB1Ymxpc2hlciIsIlNpemUiLCJUaXRsZSIsIm5leHRJZCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJkaXNhYmxlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/search/[id]/page.tsx\n"));

/***/ })

});