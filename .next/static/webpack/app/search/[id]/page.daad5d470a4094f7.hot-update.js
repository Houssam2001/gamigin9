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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n/**\n * Our PostCard is a reusable UI component used to display a post as a card format.\n *\n * @property featured image, category name, a heading, author image, author name, and publication date.\n *\n * @returns React component that can be easily integrated into any web application.\n */ const PostCard = (children)=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"card w-fit p-4 border border-base-content/10 rounded-xl font-work\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"figure\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    src: children.Image_URL,\n                    alt: \"email\",\n                    className: \"rounded-xl\",\n                    width: 360,\n                    height: 240\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\houss\\\\OneDrive\\\\Bureau\\\\gamigin\\\\src\\\\components\\\\molecules\\\\card\\\\PostCard.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\houss\\\\OneDrive\\\\Bureau\\\\gamigin\\\\src\\\\components\\\\molecules\\\\card\\\\PostCard.tsx\",\n                lineNumber: 17,\n                columnNumber: 10\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card-body py-6 px-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"btn no-animation hover:bg-primary hover:text-primary-content bg-primary/5 border-0 text-primary text-sm px-3 py-2 min-h-fit h-fit rounded-md w-fit capitalize font-medium\",\n                        children: children.Category\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\houss\\\\OneDrive\\\\Bureau\\\\gamigin\\\\src\\\\components\\\\molecules\\\\card\\\\PostCard.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"overflow-x-hidden\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/blog/\".concat(children.Title.replaceAll(\" \", \"-\").toLowerCase()),\n                            className: \"text-base-content hover:text-primary  transition-all duration-300 ease-in-out font-semibold text-lg md:text-xl lg:text-2xl mt-2\",\n                            children: children.Title.length > 20 ? children.Title.substring(0, 25)() : children.Title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\houss\\\\OneDrive\\\\Bureau\\\\gamigin\\\\src\\\\components\\\\molecules\\\\card\\\\PostCard.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 16\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\houss\\\\OneDrive\\\\Bureau\\\\gamigin\\\\src\\\\components\\\\molecules\\\\card\\\\PostCard.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-5 flex items-center gap-5 text-base-content/60 \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \" flex items-center gap-3\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                    children: children.Genre.split(\",\").map((e)=>{\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"btn no-animation hover:bg-primary hover:text-primary-content bg-primary/5 border-0 text-primary text-sm px-3 py-2 mx-2 my-1 min-h-fit h-fit rounded-md w-fit capitalize font-medium\",\n                                            children: e\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\houss\\\\OneDrive\\\\Bureau\\\\gamigin\\\\src\\\\components\\\\molecules\\\\card\\\\PostCard.tsx\",\n                                            lineNumber: 48,\n                                            columnNumber: 31\n                                        }, undefined);\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\houss\\\\OneDrive\\\\Bureau\\\\gamigin\\\\src\\\\components\\\\molecules\\\\card\\\\PostCard.tsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 19\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\houss\\\\OneDrive\\\\Bureau\\\\gamigin\\\\src\\\\components\\\\molecules\\\\card\\\\PostCard.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 16\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-base\",\n                                children: children.Date\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\houss\\\\OneDrive\\\\Bureau\\\\gamigin\\\\src\\\\components\\\\molecules\\\\card\\\\PostCard.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 16\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\houss\\\\OneDrive\\\\Bureau\\\\gamigin\\\\src\\\\components\\\\molecules\\\\card\\\\PostCard.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\houss\\\\OneDrive\\\\Bureau\\\\gamigin\\\\src\\\\components\\\\molecules\\\\card\\\\PostCard.tsx\",\n                lineNumber: 26,\n                columnNumber: 10\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\houss\\\\OneDrive\\\\Bureau\\\\gamigin\\\\src\\\\components\\\\molecules\\\\card\\\\PostCard.tsx\",\n        lineNumber: 16,\n        columnNumber: 7\n    }, undefined);\n};\n_c = PostCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostCard);\nvar _c;\n$RefreshReg$(_c, \"PostCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL21vbGVjdWxlcy9jYXJkL1Bvc3RDYXJkLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDOEI7QUFDRjtBQUNIO0FBRXpCOzs7Ozs7Q0FNQyxHQUVELE1BQU1HLFdBQVcsQ0FBQ0M7SUFDZixxQkFDRyw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ1osOERBQUNDOzBCQUNFLDRFQUFDUCxtREFBS0E7b0JBQ0hRLEtBQUtKLFNBQVNLLFNBQVM7b0JBQ3ZCQyxLQUFJO29CQUNKSixXQUFZO29CQUNaSyxPQUFPO29CQUNQQyxRQUFROzs7Ozs7Ozs7OzswQkFHZCw4REFBQ1A7Z0JBQUlDLFdBQVU7O2tDQUNaLDhEQUFDTzt3QkFBS1AsV0FBVTtrQ0FDWkYsU0FBU1UsUUFBUTs7Ozs7O2tDQUVyQiw4REFBQ0M7d0JBQUdULFdBQVU7a0NBQ1gsNEVBQUNMLGtEQUFJQTs0QkFDRmUsTUFBTSxTQUEwRCxPQUFqRFosU0FBU2EsS0FBSyxDQUFDQyxVQUFVLENBQUMsS0FBSSxLQUFLQyxXQUFXOzRCQUM3RGIsV0FBVTtzQ0FFVEYsU0FBU2EsS0FBSyxDQUFDRyxNQUFNLEdBQUMsS0FBR2hCLFNBQVNhLEtBQUssQ0FBQ0ksU0FBUyxDQUFDLEdBQUUsUUFBTWpCLFNBQVNhLEtBQUs7Ozs7Ozs7Ozs7O2tDQUcvRSw4REFBQ1o7d0JBQUlDLFdBQVU7OzBDQUNaLDhEQUFDRDtnQ0FBSUMsV0FBVTswQ0FNWiw0RUFBQ2dCOzhDQUNNbEIsU0FBU21CLEtBQUssQ0FBQ0MsS0FBSyxDQUFDLEtBQUtDLEdBQUcsQ0FBQyxDQUFDQzt3Q0FDN0IscUJBQ0csOERBQUNiOzRDQUFLUCxXQUFVO3NEQUNmb0I7Ozs7OztvQ0FDUDs7Ozs7Ozs7Ozs7MENBR1QsOERBQUNDO2dDQUFFckIsV0FBVTswQ0FBYUYsU0FBU3dCLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUt0RDtLQTVDTXpCO0FBOENOLCtEQUFlQSxRQUFRQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL21vbGVjdWxlcy9jYXJkL1Bvc3RDYXJkLnRzeD84ZTA3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdhbWVEYXRhIH0gZnJvbSAnQC9hcHAvbW9kZWxzL0dhbWUnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLyoqXG4gKiBPdXIgUG9zdENhcmQgaXMgYSByZXVzYWJsZSBVSSBjb21wb25lbnQgdXNlZCB0byBkaXNwbGF5IGEgcG9zdCBhcyBhIGNhcmQgZm9ybWF0LlxuICpcbiAqIEBwcm9wZXJ0eSBmZWF0dXJlZCBpbWFnZSwgY2F0ZWdvcnkgbmFtZSwgYSBoZWFkaW5nLCBhdXRob3IgaW1hZ2UsIGF1dGhvciBuYW1lLCBhbmQgcHVibGljYXRpb24gZGF0ZS5cbiAqXG4gKiBAcmV0dXJucyBSZWFjdCBjb21wb25lbnQgdGhhdCBjYW4gYmUgZWFzaWx5IGludGVncmF0ZWQgaW50byBhbnkgd2ViIGFwcGxpY2F0aW9uLlxuICovXG5cbmNvbnN0IFBvc3RDYXJkID0gKGNoaWxkcmVuOiBHYW1lRGF0YSkgPT4ge1xuICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCB3LWZpdCBwLTQgYm9yZGVyIGJvcmRlci1iYXNlLWNvbnRlbnQvMTAgcm91bmRlZC14bCBmb250LXdvcmtcIj5cbiAgICAgICAgIDxmaWd1cmU+XG4gICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgIHNyYz17Y2hpbGRyZW4uSW1hZ2VfVVJMfVxuICAgICAgICAgICAgICAgYWx0PVwiZW1haWxcIlxuICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcm91bmRlZC14bGB9XG4gICAgICAgICAgICAgICB3aWR0aD17MzYwfVxuICAgICAgICAgICAgICAgaGVpZ2h0PXsyNDB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keSBweS02IHB4LTJcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJ0biBuby1hbmltYXRpb24gaG92ZXI6YmctcHJpbWFyeSBob3Zlcjp0ZXh0LXByaW1hcnktY29udGVudCBiZy1wcmltYXJ5LzUgYm9yZGVyLTAgdGV4dC1wcmltYXJ5IHRleHQtc20gcHgtMyBweS0yIG1pbi1oLWZpdCBoLWZpdCByb3VuZGVkLW1kIHctZml0IGNhcGl0YWxpemUgZm9udC1tZWRpdW1cIj5cbiAgICAgICAgICAgICAgIHtjaGlsZHJlbi5DYXRlZ29yeX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9J292ZXJmbG93LXgtaGlkZGVuJz5cbiAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICBocmVmPXtgL2Jsb2cvJHtjaGlsZHJlbi5UaXRsZS5yZXBsYWNlQWxsKCcgJywnLScpLnRvTG93ZXJDYXNlKCl9YH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtYmFzZS1jb250ZW50IGhvdmVyOnRleHQtcHJpbWFyeSAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0IGZvbnQtc2VtaWJvbGQgdGV4dC1sZyBtZDp0ZXh0LXhsIGxnOnRleHQtMnhsIG10LTJcIlxuICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2NoaWxkcmVuLlRpdGxlLmxlbmd0aD4yMD9jaGlsZHJlbi5UaXRsZS5zdWJzdHJpbmcoMCwyNSkoKTpjaGlsZHJlbi5UaXRsZX1cbiAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTUgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTUgdGV4dC1iYXNlLWNvbnRlbnQvNjAgXCI+XG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtM1wiPlxuICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiYXZhdGFyXCI+XG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctOSByb3VuZGVkLWZ1bGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9wbGFjZWhvbGQuaXQvMTAweDEwMFwiIGFsdD1cImF2YXRhclwiIC8+XG4gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgICAgICAgICAgIDxoNT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbi5HZW5yZS5zcGxpdCgnLCcpLm1hcCgoZTphbnkpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJidG4gbm8tYW5pbWF0aW9uIGhvdmVyOmJnLXByaW1hcnkgaG92ZXI6dGV4dC1wcmltYXJ5LWNvbnRlbnQgYmctcHJpbWFyeS81IGJvcmRlci0wIHRleHQtcHJpbWFyeSB0ZXh0LXNtIHB4LTMgcHktMiBteC0yIG15LTEgbWluLWgtZml0IGgtZml0IHJvdW5kZWQtbWQgdy1maXQgY2FwaXRhbGl6ZSBmb250LW1lZGl1bVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2V9PC9zcGFuPik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmFzZVwiPntjaGlsZHJlbi5EYXRlfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9zdENhcmRcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIkxpbmsiLCJSZWFjdCIsIlBvc3RDYXJkIiwiY2hpbGRyZW4iLCJkaXYiLCJjbGFzc05hbWUiLCJmaWd1cmUiLCJzcmMiLCJJbWFnZV9VUkwiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInNwYW4iLCJDYXRlZ29yeSIsImgzIiwiaHJlZiIsIlRpdGxlIiwicmVwbGFjZUFsbCIsInRvTG93ZXJDYXNlIiwibGVuZ3RoIiwic3Vic3RyaW5nIiwiaDUiLCJHZW5yZSIsInNwbGl0IiwibWFwIiwiZSIsInAiLCJEYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/molecules/card/PostCard.tsx\n"));

/***/ })

});