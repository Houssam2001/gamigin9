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

/***/ "(app-pages-browser)/./src/components/molecules/card/PostCard.tsx":
/*!****************************************************!*\
  !*** ./src/components/molecules/card/PostCard.tsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n/**\n * Our PostCard is a reusable UI component used to display a post as a card format.\n *\n * @property featured image, category name, a heading, author image, author name, and publication date.\n *\n * @returns React component that can be easily integrated into any web application.\n */ const PostCard = (children)=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"card w-fit p-4 border border-base-content/10 rounded-xl font-work\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"figure\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    src: children.Image_URL,\n                    alt: \"email\",\n                    className: \"rounded-xl\",\n                    width: 360,\n                    height: 240\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\houss\\\\OneDrive\\\\Bureau\\\\gamigin\\\\src\\\\components\\\\molecules\\\\card\\\\PostCard.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\houss\\\\OneDrive\\\\Bureau\\\\gamigin\\\\src\\\\components\\\\molecules\\\\card\\\\PostCard.tsx\",\n                lineNumber: 17,\n                columnNumber: 10\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card-body py-6 px-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"btn no-animation hover:bg-primary hover:text-primary-content bg-primary/5 border-0 text-primary text-sm px-3 py-2 min-h-fit h-fit rounded-md w-fit capitalize font-medium\",\n                        children: children.Category\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\houss\\\\OneDrive\\\\Bureau\\\\gamigin\\\\src\\\\components\\\\molecules\\\\card\\\\PostCard.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/blog/\".concat(children.Title.replaceAll(\" \", \"-\").toLowerCase()),\n                            className: \"text-base-content hover:text-primary over transition-all duration-300 ease-in-out font-semibold text-lg md:text-xl lg:text-2xl mt-2\",\n                            children: children.Title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\houss\\\\OneDrive\\\\Bureau\\\\gamigin\\\\src\\\\components\\\\molecules\\\\card\\\\PostCard.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 16\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\houss\\\\OneDrive\\\\Bureau\\\\gamigin\\\\src\\\\components\\\\molecules\\\\card\\\\PostCard.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-5 flex items-center gap-5 text-base-content/60 \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \" flex items-center gap-3\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                    children: children.Genre.split(\",\").map((e)=>{\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"btn no-animation hover:bg-primary hover:text-primary-content bg-primary/5 border-0 text-primary text-sm px-3 py-2 mx-2 my-1 min-h-fit h-fit rounded-md w-fit capitalize font-medium\",\n                                            children: e\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\houss\\\\OneDrive\\\\Bureau\\\\gamigin\\\\src\\\\components\\\\molecules\\\\card\\\\PostCard.tsx\",\n                                            lineNumber: 48,\n                                            columnNumber: 31\n                                        }, undefined);\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\houss\\\\OneDrive\\\\Bureau\\\\gamigin\\\\src\\\\components\\\\molecules\\\\card\\\\PostCard.tsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 19\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\houss\\\\OneDrive\\\\Bureau\\\\gamigin\\\\src\\\\components\\\\molecules\\\\card\\\\PostCard.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 16\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-base\",\n                                children: children.Date\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\houss\\\\OneDrive\\\\Bureau\\\\gamigin\\\\src\\\\components\\\\molecules\\\\card\\\\PostCard.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 16\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\houss\\\\OneDrive\\\\Bureau\\\\gamigin\\\\src\\\\components\\\\molecules\\\\card\\\\PostCard.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\houss\\\\OneDrive\\\\Bureau\\\\gamigin\\\\src\\\\components\\\\molecules\\\\card\\\\PostCard.tsx\",\n                lineNumber: 26,\n                columnNumber: 10\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\houss\\\\OneDrive\\\\Bureau\\\\gamigin\\\\src\\\\components\\\\molecules\\\\card\\\\PostCard.tsx\",\n        lineNumber: 16,\n        columnNumber: 7\n    }, undefined);\n};\n_c = PostCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostCard);\nvar _c;\n$RefreshReg$(_c, \"PostCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL21vbGVjdWxlcy9jYXJkL1Bvc3RDYXJkLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDOEI7QUFDRjtBQUNIO0FBRXpCOzs7Ozs7Q0FNQyxHQUVELE1BQU1HLFdBQVcsQ0FBQ0M7SUFDZixxQkFDRyw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ1osOERBQUNDOzBCQUNFLDRFQUFDUCxtREFBS0E7b0JBQ0hRLEtBQUtKLFNBQVNLLFNBQVM7b0JBQ3ZCQyxLQUFJO29CQUNKSixXQUFZO29CQUNaSyxPQUFPO29CQUNQQyxRQUFROzs7Ozs7Ozs7OzswQkFHZCw4REFBQ1A7Z0JBQUlDLFdBQVU7O2tDQUNaLDhEQUFDTzt3QkFBS1AsV0FBVTtrQ0FDWkYsU0FBU1UsUUFBUTs7Ozs7O2tDQUVyQiw4REFBQ0M7a0NBQ0UsNEVBQUNkLGtEQUFJQTs0QkFDRmUsTUFBTSxTQUEwRCxPQUFqRFosU0FBU2EsS0FBSyxDQUFDQyxVQUFVLENBQUMsS0FBSSxLQUFLQyxXQUFXOzRCQUM3RGIsV0FBVTtzQ0FFVEYsU0FBU2EsS0FBSzs7Ozs7Ozs7Ozs7a0NBR3JCLDhEQUFDWjt3QkFBSUMsV0FBVTs7MENBQ1osOERBQUNEO2dDQUFJQyxXQUFVOzBDQU1aLDRFQUFDYzs4Q0FDTWhCLFNBQVNpQixLQUFLLENBQUNDLEtBQUssQ0FBQyxLQUFLQyxHQUFHLENBQUMsQ0FBQ0M7d0NBQzdCLHFCQUNHLDhEQUFDWDs0Q0FBS1AsV0FBVTtzREFDZmtCOzs7Ozs7b0NBQ1A7Ozs7Ozs7Ozs7OzBDQUdULDhEQUFDQztnQ0FBRW5CLFdBQVU7MENBQWFGLFNBQVNzQixJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLdEQ7S0E1Q012QjtBQThDTiwrREFBZUEsUUFBUUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9tb2xlY3VsZXMvY2FyZC9Qb3N0Q2FyZC50c3g/OGUwNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHYW1lRGF0YSB9IGZyb20gJ0AvYXBwL21vZGVscy9HYW1lJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbi8qKlxuICogT3VyIFBvc3RDYXJkIGlzIGEgcmV1c2FibGUgVUkgY29tcG9uZW50IHVzZWQgdG8gZGlzcGxheSBhIHBvc3QgYXMgYSBjYXJkIGZvcm1hdC5cbiAqXG4gKiBAcHJvcGVydHkgZmVhdHVyZWQgaW1hZ2UsIGNhdGVnb3J5IG5hbWUsIGEgaGVhZGluZywgYXV0aG9yIGltYWdlLCBhdXRob3IgbmFtZSwgYW5kIHB1YmxpY2F0aW9uIGRhdGUuXG4gKlxuICogQHJldHVybnMgUmVhY3QgY29tcG9uZW50IHRoYXQgY2FuIGJlIGVhc2lseSBpbnRlZ3JhdGVkIGludG8gYW55IHdlYiBhcHBsaWNhdGlvbi5cbiAqL1xuXG5jb25zdCBQb3N0Q2FyZCA9IChjaGlsZHJlbjogR2FtZURhdGEpID0+IHtcbiAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgdy1maXQgcC00IGJvcmRlciBib3JkZXItYmFzZS1jb250ZW50LzEwIHJvdW5kZWQteGwgZm9udC13b3JrXCI+XG4gICAgICAgICA8ZmlndXJlPlxuICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICBzcmM9e2NoaWxkcmVuLkltYWdlX1VSTH1cbiAgICAgICAgICAgICAgIGFsdD1cImVtYWlsXCJcbiAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHJvdW5kZWQteGxgfVxuICAgICAgICAgICAgICAgd2lkdGg9ezM2MH1cbiAgICAgICAgICAgICAgIGhlaWdodD17MjQwfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHkgcHktNiBweC0yXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJidG4gbm8tYW5pbWF0aW9uIGhvdmVyOmJnLXByaW1hcnkgaG92ZXI6dGV4dC1wcmltYXJ5LWNvbnRlbnQgYmctcHJpbWFyeS81IGJvcmRlci0wIHRleHQtcHJpbWFyeSB0ZXh0LXNtIHB4LTMgcHktMiBtaW4taC1maXQgaC1maXQgcm91bmRlZC1tZCB3LWZpdCBjYXBpdGFsaXplIGZvbnQtbWVkaXVtXCI+XG4gICAgICAgICAgICAgICB7Y2hpbGRyZW4uQ2F0ZWdvcnl9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgaHJlZj17YC9ibG9nLyR7Y2hpbGRyZW4uVGl0bGUucmVwbGFjZUFsbCgnICcsJy0nKS50b0xvd2VyQ2FzZSgpfWB9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UtY29udGVudCBob3Zlcjp0ZXh0LXByaW1hcnkgb3ZlciB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXQgZm9udC1zZW1pYm9sZCB0ZXh0LWxnIG1kOnRleHQteGwgbGc6dGV4dC0yeGwgbXQtMlwiXG4gICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7Y2hpbGRyZW4uVGl0bGV9XG4gICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC01IGZsZXggaXRlbXMtY2VudGVyIGdhcC01IHRleHQtYmFzZS1jb250ZW50LzYwIFwiPlxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTNcIj5cbiAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImF2YXRhclwiPlxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTkgcm91bmRlZC1mdWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vcGxhY2Vob2xkLml0LzEwMHgxMDBcIiBhbHQ9XCJhdmF0YXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgICAgICAgICAgICA8aDU+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW4uR2VucmUuc3BsaXQoJywnKS5tYXAoKGU6YW55KT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnRuIG5vLWFuaW1hdGlvbiBob3ZlcjpiZy1wcmltYXJ5IGhvdmVyOnRleHQtcHJpbWFyeS1jb250ZW50IGJnLXByaW1hcnkvNSBib3JkZXItMCB0ZXh0LXByaW1hcnkgdGV4dC1zbSBweC0zIHB5LTIgbXgtMiBteS0xIG1pbi1oLWZpdCBoLWZpdCByb3VuZGVkLW1kIHctZml0IGNhcGl0YWxpemUgZm9udC1tZWRpdW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlfTwvc3Bhbj4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICA8L2g1PlxuICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2VcIj57Y2hpbGRyZW4uRGF0ZX08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RDYXJkXG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJMaW5rIiwiUmVhY3QiLCJQb3N0Q2FyZCIsImNoaWxkcmVuIiwiZGl2IiwiY2xhc3NOYW1lIiwiZmlndXJlIiwic3JjIiwiSW1hZ2VfVVJMIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJzcGFuIiwiQ2F0ZWdvcnkiLCJoMyIsImhyZWYiLCJUaXRsZSIsInJlcGxhY2VBbGwiLCJ0b0xvd2VyQ2FzZSIsImg1IiwiR2VucmUiLCJzcGxpdCIsIm1hcCIsImUiLCJwIiwiRGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/molecules/card/PostCard.tsx\n"));

/***/ })

});