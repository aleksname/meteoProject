"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Random",{

/***/ "./pages/Random.jsx":
/*!**************************!*\
  !*** ./pages/Random.jsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Random; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_MainContainter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/MainContainter */ \"./pages/components/MainContainter.jsx\");\n/* harmony import */ var _styles_App_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/App.module.scss */ \"./styles/App.module.scss\");\n/* harmony import */ var _styles_App_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_App_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Random() {\n    _s();\n    const [spinning, setSpinning] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [rotation, setRotation] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const data = [\n        \"Item 1\",\n        \"Item 2\",\n        \"Item 3\",\n        \"Item 4\",\n        \"Item 5\",\n        \"Item 6\",\n        \"Item 7\",\n        \"Item 8\"\n    ];\n    // Функція для отримання випадкових даних з масиву\n    const getRandomData = ()=>{\n        const randomIndex = Math.floor(Math.random() * data.length);\n        return data[randomIndex];\n    };\n    const handleClick = ()=>{\n        const additionalRotation = Math.floor(Math.random() * 360) + 1440; // 4+ оберти та випадковий кут\n        setRotation((prevRotation)=>prevRotation + additionalRotation);\n        setSpinning(true);\n        setTimeout(()=>{\n            setSpinning(false);\n        }, 4000); // тривалість анімації\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MainContainter__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            titels: \"Random page\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_App_module_scss__WEBPACK_IMPORTED_MODULE_3___default().randomBlock),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                        className: (_styles_App_module_scss__WEBPACK_IMPORTED_MODULE_3___default().navRandomPages),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                href: \"Random\",\n                                className: (_styles_App_module_scss__WEBPACK_IMPORTED_MODULE_3___default().linkRandom),\n                                children: \"Random color\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\webAppMeteo\\\\meteo\\\\pages\\\\Random.jsx\",\n                                lineNumber: 31,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                href: \"Spin\",\n                                className: (_styles_App_module_scss__WEBPACK_IMPORTED_MODULE_3___default().linkRandom),\n                                children: \"Spin\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\webAppMeteo\\\\meteo\\\\pages\\\\Random.jsx\",\n                                lineNumber: 32,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\webAppMeteo\\\\meteo\\\\pages\\\\Random.jsx\",\n                        lineNumber: 30,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_App_module_scss__WEBPACK_IMPORTED_MODULE_3___default().randomBlockArea),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: (_styles_App_module_scss__WEBPACK_IMPORTED_MODULE_3___default().randomUl),\n                            children: Array(8).fill(null).map((_, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: (_styles_App_module_scss__WEBPACK_IMPORTED_MODULE_3___default().randomLi),\n                                    children: getRandomData()\n                                }, index, false, {\n                                    fileName: \"D:\\\\webAppMeteo\\\\meteo\\\\pages\\\\Random.jsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 33\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"D:\\\\webAppMeteo\\\\meteo\\\\pages\\\\Random.jsx\",\n                            lineNumber: 36,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\webAppMeteo\\\\meteo\\\\pages\\\\Random.jsx\",\n                        lineNumber: 35,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\webAppMeteo\\\\meteo\\\\pages\\\\Random.jsx\",\n                lineNumber: 29,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\webAppMeteo\\\\meteo\\\\pages\\\\Random.jsx\",\n            lineNumber: 28,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(Random, \"k06fW8o8fCH5tcmEgl/pRXH0WRg=\");\n_c = Random;\nvar _c;\n$RefreshReg$(_c, \"Random\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9SYW5kb20uanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFpQztBQUN3QjtBQUNWO0FBQ2xCO0FBRWQsU0FBU0k7O0lBQ3BCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNPLFVBQVVDLFlBQVksR0FBR1IsK0NBQVFBLENBQUM7SUFDekMsTUFBTVMsT0FBTztRQUFDO1FBQVU7UUFBVTtRQUFVO1FBQVU7UUFBVTtRQUFVO1FBQVU7S0FBUztJQUU3RixrREFBa0Q7SUFDbEQsTUFBTUMsZ0JBQWdCO1FBQ2xCLE1BQU1DLGNBQWNDLEtBQUtDLEtBQUssQ0FBQ0QsS0FBS0UsTUFBTSxLQUFLTCxLQUFLTSxNQUFNO1FBQzFELE9BQU9OLElBQUksQ0FBQ0UsWUFBWTtJQUM1QjtJQUVBLE1BQU1LLGNBQWM7UUFDaEIsTUFBTUMscUJBQXFCTCxLQUFLQyxLQUFLLENBQUNELEtBQUtFLE1BQU0sS0FBSyxPQUFPLE1BQU0sOEJBQThCO1FBQ2pHTixZQUFZVSxDQUFBQSxlQUFnQkEsZUFBZUQ7UUFDM0NYLFlBQVk7UUFDWmEsV0FBVztZQUNQYixZQUFZO1FBQ2hCLEdBQUcsT0FBTyxzQkFBc0I7SUFDcEM7SUFFQSxxQkFDSTtrQkFDSSw0RUFBQ0wsa0VBQWNBO1lBQUNtQixRQUFRO3NCQUNwQiw0RUFBQ0M7Z0JBQUlDLFdBQVdwQiw0RUFBa0I7O2tDQUM5Qiw4REFBQ3NCO3dCQUFJRixXQUFXcEIsK0VBQXFCOzswQ0FDakMsOERBQUNDLGtEQUFJQTtnQ0FBQ3VCLE1BQUs7Z0NBQVNKLFdBQVdwQiwyRUFBaUI7MENBQUU7Ozs7OzswQ0FDbEQsOERBQUNDLGtEQUFJQTtnQ0FBQ3VCLE1BQUs7Z0NBQU9KLFdBQVdwQiwyRUFBaUI7MENBQUU7Ozs7Ozs7Ozs7OztrQ0FHcEQsOERBQUNtQjt3QkFBSUMsV0FBV3BCLGdGQUFzQjtrQ0FDbEMsNEVBQUMyQjs0QkFBR1AsV0FBV3BCLHlFQUFlO3NDQUN6QjZCLE1BQU0sR0FBR0MsSUFBSSxDQUFDLE1BQU1DLEdBQUcsQ0FBQyxDQUFDQyxHQUFHQyxzQkFDekIsOERBQUNDO29DQUFlZCxXQUFXcEIseUVBQWU7OENBQ3JDUTttQ0FESXlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVekM7R0ExQ3dCL0I7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvUmFuZG9tLmpzeD8wMGFjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTWFpbkNvbnRhaW50ZXIgZnJvbSAnLi9jb21wb25lbnRzL01haW5Db250YWludGVyJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvQXBwLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJhbmRvbSgpIHtcclxuICAgIGNvbnN0IFtzcGlubmluZywgc2V0U3Bpbm5pbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3JvdGF0aW9uLCBzZXRSb3RhdGlvbl0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IGRhdGEgPSBbJ0l0ZW0gMScsICdJdGVtIDInLCAnSXRlbSAzJywgJ0l0ZW0gNCcsICdJdGVtIDUnLCAnSXRlbSA2JywgJ0l0ZW0gNycsICdJdGVtIDgnXTtcclxuXHJcbiAgICAvLyDQpNGD0L3QutGG0ZbRjyDQtNC70Y8g0L7RgtGA0LjQvNCw0L3QvdGPINCy0LjQv9Cw0LTQutC+0LLQuNGFINC00LDQvdC40YUg0Lcg0LzQsNGB0LjQstGDXHJcbiAgICBjb25zdCBnZXRSYW5kb21EYXRhID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZGF0YS5sZW5ndGgpO1xyXG4gICAgICAgIHJldHVybiBkYXRhW3JhbmRvbUluZGV4XTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYWRkaXRpb25hbFJvdGF0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMzYwKSArIDE0NDA7IC8vIDQrINC+0LHQtdGA0YLQuCDRgtCwINCy0LjQv9Cw0LTQutC+0LLQuNC5INC60YPRglxyXG4gICAgICAgIHNldFJvdGF0aW9uKHByZXZSb3RhdGlvbiA9PiBwcmV2Um90YXRpb24gKyBhZGRpdGlvbmFsUm90YXRpb24pO1xyXG4gICAgICAgIHNldFNwaW5uaW5nKHRydWUpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRTcGlubmluZyhmYWxzZSk7XHJcbiAgICAgICAgfSwgNDAwMCk7IC8vINGC0YDQuNCy0LDQu9GW0YHRgtGMINCw0L3RltC80LDRhtGW0ZdcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8TWFpbkNvbnRhaW50ZXIgdGl0ZWxzPXsnUmFuZG9tIHBhZ2UnfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmFuZG9tQmxvY2t9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2UmFuZG9tUGFnZXN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPSdSYW5kb20nIGNsYXNzTmFtZT17c3R5bGVzLmxpbmtSYW5kb219PlJhbmRvbSBjb2xvcjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nU3BpbicgY2xhc3NOYW1lPXtzdHlsZXMubGlua1JhbmRvbX0+U3BpbjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L25hdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yYW5kb21CbG9ja0FyZWF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMucmFuZG9tVWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge0FycmF5KDgpLmZpbGwobnVsbCkubWFwKChfLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9e3N0eWxlcy5yYW5kb21MaX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtnZXRSYW5kb21EYXRhKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvTWFpbkNvbnRhaW50ZXI+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIk1haW5Db250YWludGVyIiwic3R5bGVzIiwiTGluayIsIlJhbmRvbSIsInNwaW5uaW5nIiwic2V0U3Bpbm5pbmciLCJyb3RhdGlvbiIsInNldFJvdGF0aW9uIiwiZGF0YSIsImdldFJhbmRvbURhdGEiLCJyYW5kb21JbmRleCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsImhhbmRsZUNsaWNrIiwiYWRkaXRpb25hbFJvdGF0aW9uIiwicHJldlJvdGF0aW9uIiwic2V0VGltZW91dCIsInRpdGVscyIsImRpdiIsImNsYXNzTmFtZSIsInJhbmRvbUJsb2NrIiwibmF2IiwibmF2UmFuZG9tUGFnZXMiLCJocmVmIiwibGlua1JhbmRvbSIsInJhbmRvbUJsb2NrQXJlYSIsInVsIiwicmFuZG9tVWwiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJfIiwiaW5kZXgiLCJsaSIsInJhbmRvbUxpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Random.jsx\n"));

/***/ })

});