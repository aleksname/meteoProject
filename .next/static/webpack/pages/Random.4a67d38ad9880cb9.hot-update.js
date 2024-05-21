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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Random; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_MainContainter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/MainContainter */ \"./pages/components/MainContainter.jsx\");\n/* harmony import */ var _styles_App_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/App.module.scss */ \"./styles/App.module.scss\");\n/* harmony import */ var _styles_App_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_App_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Random() {\n    _s();\n    const [spinning, setSpinning] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [rotation, setRotation] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [randomData, setRandomData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const data = [\n        \"Єгор\",\n        \"Софія\",\n        \"Аміна\",\n        \"Артем\",\n        \"Алан та Вєлат\",\n        \"Item 6\",\n        \"Item 7\",\n        \"Item 8\"\n    ];\n    const shuffleArray = (array)=>{\n        for(let i = array.length - 1; i > 0; i--){\n            const j = Math.floor(Math.random() * (i + 1));\n            [array[i], array[j]] = [\n                array[j],\n                array[i]\n            ];\n        }\n        return array;\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const shuffledData = shuffleArray([\n            ...data\n        ]);\n        setRandomData(shuffledData.slice(0, 8)); // Вибрати перші 8 елементів після перемішування\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MainContainter__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            titels: \"Random page\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_App_module_scss__WEBPACK_IMPORTED_MODULE_3___default().randomBlock),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                        className: (_styles_App_module_scss__WEBPACK_IMPORTED_MODULE_3___default().navRandomPages),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                href: \"Random\",\n                                className: (_styles_App_module_scss__WEBPACK_IMPORTED_MODULE_3___default().linkRandom),\n                                children: \"Random color\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\webAppMeteo\\\\meteo\\\\pages\\\\Random.jsx\",\n                                lineNumber: 33,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                href: \"Spin\",\n                                className: (_styles_App_module_scss__WEBPACK_IMPORTED_MODULE_3___default().linkRandom),\n                                children: \"Spin\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\webAppMeteo\\\\meteo\\\\pages\\\\Random.jsx\",\n                                lineNumber: 34,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\webAppMeteo\\\\meteo\\\\pages\\\\Random.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_App_module_scss__WEBPACK_IMPORTED_MODULE_3___default().randomBlockArea),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: (_styles_App_module_scss__WEBPACK_IMPORTED_MODULE_3___default().randomUl),\n                            children: randomData.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: (_styles_App_module_scss__WEBPACK_IMPORTED_MODULE_3___default().randomLi),\n                                    children: item\n                                }, index, false, {\n                                    fileName: \"D:\\\\webAppMeteo\\\\meteo\\\\pages\\\\Random.jsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 33\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"D:\\\\webAppMeteo\\\\meteo\\\\pages\\\\Random.jsx\",\n                            lineNumber: 38,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\webAppMeteo\\\\meteo\\\\pages\\\\Random.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\webAppMeteo\\\\meteo\\\\pages\\\\Random.jsx\",\n                lineNumber: 31,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\webAppMeteo\\\\meteo\\\\pages\\\\Random.jsx\",\n            lineNumber: 30,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(Random, \"AGhO6pg+FuP8A7bvGC+mG1ttM4U=\");\n_c = Random;\nvar _c;\n$RefreshReg$(_c, \"Random\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9SYW5kb20uanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUE0QztBQUNhO0FBQ1Y7QUFDbEI7QUFFZCxTQUFTSzs7SUFDcEIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ1EsVUFBVUMsWUFBWSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNVLFlBQVlDLGNBQWMsR0FBR1gsK0NBQVFBLENBQUMsRUFBRTtJQUUvQyxNQUFNWSxPQUFPO1FBQUM7UUFBUTtRQUFTO1FBQVM7UUFBUztRQUFpQjtRQUFVO1FBQVU7S0FBUztJQUUvRixNQUFNQyxlQUFlLENBQUNDO1FBQ2xCLElBQUssSUFBSUMsSUFBSUQsTUFBTUUsTUFBTSxHQUFHLEdBQUdELElBQUksR0FBR0EsSUFBSztZQUN2QyxNQUFNRSxJQUFJQyxLQUFLQyxLQUFLLENBQUNELEtBQUtFLE1BQU0sS0FBTUwsQ0FBQUEsSUFBSTtZQUMxQyxDQUFDRCxLQUFLLENBQUNDLEVBQUUsRUFBRUQsS0FBSyxDQUFDRyxFQUFFLENBQUMsR0FBRztnQkFBQ0gsS0FBSyxDQUFDRyxFQUFFO2dCQUFFSCxLQUFLLENBQUNDLEVBQUU7YUFBQztRQUMvQztRQUNBLE9BQU9EO0lBQ1g7SUFFQWIsZ0RBQVNBLENBQUM7UUFDTixNQUFNb0IsZUFBZVIsYUFBYTtlQUFJRDtTQUFLO1FBQzNDRCxjQUFjVSxhQUFhQyxLQUFLLENBQUMsR0FBRyxLQUFLLGdEQUFnRDtJQUM3RixHQUFHLEVBQUU7SUFJTCxxQkFDSTtrQkFDSSw0RUFBQ3BCLGtFQUFjQTtZQUFDcUIsUUFBUTtzQkFDcEIsNEVBQUNDO2dCQUFJQyxXQUFXdEIsNEVBQWtCOztrQ0FDOUIsOERBQUN3Qjt3QkFBSUYsV0FBV3RCLCtFQUFxQjs7MENBQ2pDLDhEQUFDQyxrREFBSUE7Z0NBQUN5QixNQUFLO2dDQUFTSixXQUFXdEIsMkVBQWlCOzBDQUFFOzs7Ozs7MENBQ2xELDhEQUFDQyxrREFBSUE7Z0NBQUN5QixNQUFLO2dDQUFPSixXQUFXdEIsMkVBQWlCOzBDQUFFOzs7Ozs7Ozs7Ozs7a0NBR3BELDhEQUFDcUI7d0JBQUlDLFdBQVd0QixnRkFBc0I7a0NBQ2xDLDRFQUFDNkI7NEJBQUdQLFdBQVd0Qix5RUFBZTtzQ0FDekJPLFdBQVd3QixHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ25CLDhEQUFDQztvQ0FBZVosV0FBV3RCLHlFQUFlOzhDQUNyQ2dDO21DQURJQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVXpDO0dBNUN3Qi9CO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL1JhbmRvbS5qc3g/MDBhYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTWFpbkNvbnRhaW50ZXIgZnJvbSAnLi9jb21wb25lbnRzL01haW5Db250YWludGVyJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvQXBwLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJhbmRvbSgpIHtcclxuICAgIGNvbnN0IFtzcGlubmluZywgc2V0U3Bpbm5pbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3JvdGF0aW9uLCBzZXRSb3RhdGlvbl0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtyYW5kb21EYXRhLCBzZXRSYW5kb21EYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICBjb25zdCBkYXRhID0gWyfQhNCz0L7RgCcsICfQodC+0YTRltGPJywgJ9CQ0LzRltC90LAnLCAn0JDRgNGC0LXQvCcsICfQkNC70LDQvSDRgtCwINCS0ZTQu9Cw0YInLCAnSXRlbSA2JywgJ0l0ZW0gNycsICdJdGVtIDgnXTtcclxuXHJcbiAgICBjb25zdCBzaHVmZmxlQXJyYXkgPSAoYXJyYXkpID0+IHtcclxuICAgICAgICBmb3IgKGxldCBpID0gYXJyYXkubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xyXG4gICAgICAgICAgICBjb25zdCBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGkgKyAxKSk7XHJcbiAgICAgICAgICAgIFthcnJheVtpXSwgYXJyYXlbal1dID0gW2FycmF5W2pdLCBhcnJheVtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhcnJheTtcclxuICAgIH07XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBzaHVmZmxlZERhdGEgPSBzaHVmZmxlQXJyYXkoWy4uLmRhdGFdKTtcclxuICAgICAgICBzZXRSYW5kb21EYXRhKHNodWZmbGVkRGF0YS5zbGljZSgwLCA4KSk7IC8vINCS0LjQsdGA0LDRgtC4INC/0LXRgNGI0ZYgOCDQtdC70LXQvNC10L3RgtGW0LIg0L/RltGB0LvRjyDQv9C10YDQtdC80ZbRiNGD0LLQsNC90L3Rj1xyXG4gICAgfSwgW10pO1xyXG5cclxuICBcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxNYWluQ29udGFpbnRlciB0aXRlbHM9eydSYW5kb20gcGFnZSd9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yYW5kb21CbG9ja30+XHJcbiAgICAgICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZSYW5kb21QYWdlc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9J1JhbmRvbScgY2xhc3NOYW1lPXtzdHlsZXMubGlua1JhbmRvbX0+UmFuZG9tIGNvbG9yPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPSdTcGluJyBjbGFzc05hbWU9e3N0eWxlcy5saW5rUmFuZG9tfT5TcGluPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbmF2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJhbmRvbUJsb2NrQXJlYX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5yYW5kb21VbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmFuZG9tRGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9IGNsYXNzTmFtZT17c3R5bGVzLnJhbmRvbUxpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvTWFpbkNvbnRhaW50ZXI+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk1haW5Db250YWludGVyIiwic3R5bGVzIiwiTGluayIsIlJhbmRvbSIsInNwaW5uaW5nIiwic2V0U3Bpbm5pbmciLCJyb3RhdGlvbiIsInNldFJvdGF0aW9uIiwicmFuZG9tRGF0YSIsInNldFJhbmRvbURhdGEiLCJkYXRhIiwic2h1ZmZsZUFycmF5IiwiYXJyYXkiLCJpIiwibGVuZ3RoIiwiaiIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInNodWZmbGVkRGF0YSIsInNsaWNlIiwidGl0ZWxzIiwiZGl2IiwiY2xhc3NOYW1lIiwicmFuZG9tQmxvY2siLCJuYXYiLCJuYXZSYW5kb21QYWdlcyIsImhyZWYiLCJsaW5rUmFuZG9tIiwicmFuZG9tQmxvY2tBcmVhIiwidWwiLCJyYW5kb21VbCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImxpIiwicmFuZG9tTGkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Random.jsx\n"));

/***/ })

});