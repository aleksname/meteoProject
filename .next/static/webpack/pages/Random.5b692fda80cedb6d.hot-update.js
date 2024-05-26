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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Random; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_MainContainter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/MainContainter */ \"./pages/components/MainContainter.jsx\");\n/* harmony import */ var _styles_App_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/App.module.scss */ \"./styles/App.module.scss\");\n/* harmony import */ var _styles_App_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_App_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Random() {\n    _s();\n    const [randomData, setRandomData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const data = [\n        \"Єгор\",\n        \"Софія\",\n        \"Аміна\",\n        \"Артем\",\n        \"Алан та Вєлат\"\n    ];\n    const shuffleArray = (array)=>{\n        for(let i = array.length - 1; i > 0; i--){\n            const j = Math.floor(Math.random() * (i + 1));\n            [array[i], array[j]] = [\n                array[j],\n                array[i]\n            ];\n        }\n        return array;\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const shuffledData = shuffleArray([\n            ...data\n        ]);\n        setRandomData(shuffledData.slice(0, 6)); // Вибрати перші 6 елементів після перемішування\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MainContainter__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        titels: \"Random page\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_App_module_scss__WEBPACK_IMPORTED_MODULE_3___default().randomBlock),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_App_module_scss__WEBPACK_IMPORTED_MODULE_3___default().randomBlockArea),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                        className: (_styles_App_module_scss__WEBPACK_IMPORTED_MODULE_3___default().randomTitle),\n                        children: [\n                            \"Я - старий чаклун із далекої чарівної країни. Сьогодні до мене долетів магічний сигнал, і він розповів мені дещо неймовірне про кожного з вас. Кожен із вас має свій особливий колір, який супроводжує вас у житті та надає вам сили та натхнення. Цей колір - частина вашої природи, вашого внутрішнього світу.\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: (_styles_App_module_scss__WEBPACK_IMPORTED_MODULE_3___default().randomTitle2),\n                                children: \"Ось ваші кольори ⤸\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\webAppMeteo\\\\meteo\\\\pages\\\\Random.jsx\",\n                                lineNumber: 28,\n                                columnNumber: 29\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\webAppMeteo\\\\meteo\\\\pages\\\\Random.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_styles_App_module_scss__WEBPACK_IMPORTED_MODULE_3___default().randomTitle)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\webAppMeteo\\\\meteo\\\\pages\\\\Random.jsx\",\n                        lineNumber: 30,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: (_styles_App_module_scss__WEBPACK_IMPORTED_MODULE_3___default().randomUl),\n                        children: randomData.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: (_styles_App_module_scss__WEBPACK_IMPORTED_MODULE_3___default().randomLi),\n                                children: item\n                            }, index, false, {\n                                fileName: \"D:\\\\webAppMeteo\\\\meteo\\\\pages\\\\Random.jsx\",\n                                lineNumber: 33,\n                                columnNumber: 29\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"D:\\\\webAppMeteo\\\\meteo\\\\pages\\\\Random.jsx\",\n                        lineNumber: 31,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        href: \"Spin\",\n                        className: (_styles_App_module_scss__WEBPACK_IMPORTED_MODULE_3___default().linkRandom),\n                        children: \"⤹Почати пригоду\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\webAppMeteo\\\\meteo\\\\pages\\\\Random.jsx\",\n                        lineNumber: 38,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\webAppMeteo\\\\meteo\\\\pages\\\\Random.jsx\",\n                lineNumber: 25,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\webAppMeteo\\\\meteo\\\\pages\\\\Random.jsx\",\n            lineNumber: 23,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\webAppMeteo\\\\meteo\\\\pages\\\\Random.jsx\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, this);\n}\n_s(Random, \"ZtH0+3pb0i8mJU5PeFzkKZuwF2M=\");\n_c = Random;\nvar _c;\n$RefreshReg$(_c, \"Random\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9SYW5kb20uanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUE0QztBQUNhO0FBQ1Y7QUFDbEI7QUFFZCxTQUFTSzs7SUFDcEIsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdQLCtDQUFRQSxDQUFDLEVBQUU7SUFDL0MsTUFBTVEsT0FBTztRQUFDO1FBQVE7UUFBUztRQUFTO1FBQVM7S0FBZ0I7SUFDakUsTUFBTUMsZUFBZSxDQUFDQztRQUNsQixJQUFLLElBQUlDLElBQUlELE1BQU1FLE1BQU0sR0FBRyxHQUFHRCxJQUFJLEdBQUdBLElBQUs7WUFDdkMsTUFBTUUsSUFBSUMsS0FBS0MsS0FBSyxDQUFDRCxLQUFLRSxNQUFNLEtBQU1MLENBQUFBLElBQUk7WUFDMUMsQ0FBQ0QsS0FBSyxDQUFDQyxFQUFFLEVBQUVELEtBQUssQ0FBQ0csRUFBRSxDQUFDLEdBQUc7Z0JBQUNILEtBQUssQ0FBQ0csRUFBRTtnQkFBRUgsS0FBSyxDQUFDQyxFQUFFO2FBQUM7UUFDL0M7UUFDQSxPQUFPRDtJQUNYO0lBQ0FULGdEQUFTQSxDQUFDO1FBQ04sTUFBTWdCLGVBQWVSLGFBQWE7ZUFBSUQ7U0FBSztRQUMzQ0QsY0FBY1UsYUFBYUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxnREFBZ0Q7SUFDN0YsR0FBRyxFQUFFO0lBRUwscUJBQ0ksOERBQUNoQixrRUFBY0E7UUFBQ2lCLFFBQVE7a0JBQ3BCLDRFQUFDQztZQUFJQyxXQUFXbEIsNEVBQWtCO3NCQUU5Qiw0RUFBQ2lCO2dCQUFJQyxXQUFXbEIsZ0ZBQXNCOztrQ0FDOUIsOERBQUNxQjt3QkFBT0gsV0FBV2xCLDRFQUFrQjs7NEJBQUU7MENBRW5DLDhEQUFDdUI7Z0NBQUdMLFdBQVdsQiw2RUFBbUI7MENBQUU7Ozs7Ozs7Ozs7OztrQ0FFNUMsOERBQUN5Qjt3QkFBRVAsV0FBV2xCLDRFQUFrQjs7Ozs7O2tDQUNoQyw4REFBQzBCO3dCQUFHUixXQUFXbEIseUVBQWU7a0NBQ3pCRyxXQUFXeUIsR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUNuQiw4REFBQ0M7Z0NBQWViLFdBQVdsQix5RUFBZTswQ0FDckM2QjsrQkFESUM7Ozs7Ozs7Ozs7a0NBS2pCLDhEQUFDN0Isa0RBQUlBO3dCQUFDZ0MsTUFBSzt3QkFBT2YsV0FBV2xCLDJFQUFpQjtrQ0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtwRTtHQXJDd0JFO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL1JhbmRvbS5qc3g/MDBhYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTWFpbkNvbnRhaW50ZXIgZnJvbSAnLi9jb21wb25lbnRzL01haW5Db250YWludGVyJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvQXBwLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJhbmRvbSgpIHtcclxuICAgIGNvbnN0IFtyYW5kb21EYXRhLCBzZXRSYW5kb21EYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IGRhdGEgPSBbJ9CE0LPQvtGAJywgJ9Ch0L7RhNGW0Y8nLCAn0JDQvNGW0L3QsCcsICfQkNGA0YLQtdC8JywgJ9CQ0LvQsNC9INGC0LAg0JLRlNC70LDRgiddO1xyXG4gICAgY29uc3Qgc2h1ZmZsZUFycmF5ID0gKGFycmF5KSA9PiB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IGFycmF5Lmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcclxuICAgICAgICAgICAgY29uc3QgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChpICsgMSkpO1xyXG4gICAgICAgICAgICBbYXJyYXlbaV0sIGFycmF5W2pdXSA9IFthcnJheVtqXSwgYXJyYXlbaV1dO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYXJyYXk7XHJcbiAgICB9O1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBzaHVmZmxlZERhdGEgPSBzaHVmZmxlQXJyYXkoWy4uLmRhdGFdKTtcclxuICAgICAgICBzZXRSYW5kb21EYXRhKHNodWZmbGVkRGF0YS5zbGljZSgwLCA2KSk7IC8vINCS0LjQsdGA0LDRgtC4INC/0LXRgNGI0ZYgNiDQtdC70LXQvNC10L3RgtGW0LIg0L/RltGB0LvRjyDQv9C10YDQtdC80ZbRiNGD0LLQsNC90L3Rj1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPE1haW5Db250YWludGVyIHRpdGVscz17J1JhbmRvbSBwYWdlJ30+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmFuZG9tQmxvY2t9PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmFuZG9tQmxvY2tBcmVhfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9e3N0eWxlcy5yYW5kb21UaXRsZX0+0K8gLSDRgdGC0LDRgNC40Lkg0YfQsNC60LvRg9C9INGW0Lcg0LTQsNC70LXQutC+0Zcg0YfQsNGA0ZbQstC90L7RlyDQutGA0LDRl9C90LguINCh0YzQvtCz0L7QtNC90ZYg0LTQviDQvNC10L3QtSDQtNC+0LvQtdGC0ZbQsiDQvNCw0LPRltGH0L3QuNC5INGB0LjQs9C90LDQuywg0ZYg0LLRltC9INGA0L7Qt9C/0L7QstGW0LIg0LzQtdC90ZYg0LTQtdGJ0L4g0L3QtdC50LzQvtCy0ZbRgNC90LUg0L/RgNC+INC60L7QttC90L7Qs9C+INC3INCy0LDRgS4g0JrQvtC20LXQvSDRltC3INCy0LDRgSDQvNCw0ZQg0YHQstGW0Lkg0L7RgdC+0LHQu9C40LLQuNC5INC60L7Qu9GW0YAsINGP0LrQuNC5INGB0YPQv9GA0L7QstC+0LTQttGD0ZQg0LLQsNGBINGDINC20LjRgtGC0ZYg0YLQsCDQvdCw0LTQsNGUINCy0LDQvCDRgdC40LvQuCDRgtCwINC90LDRgtGF0L3QtdC90L3Rjy4g0KbQtdC5INC60L7Qu9GW0YAgLSDRh9Cw0YHRgtC40L3QsCDQstCw0YjQvtGXINC/0YDQuNGA0L7QtNC4LCDQstCw0YjQvtCz0L4g0LLQvdGD0YLRgNGW0YjQvdGM0L7Qs9C+INGB0LLRltGC0YMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5yYW5kb21UaXRsZTJ9PtCe0YHRjCDQstCw0YjRliDQutC+0LvRjNC+0YDQuCAmIzEwNTUyOzwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnJhbmRvbVRpdGxlfT48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLnJhbmRvbVVsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3JhbmRvbURhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9IGNsYXNzTmFtZT17c3R5bGVzLnJhbmRvbUxpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nU3BpbicgY2xhc3NOYW1lPXtzdHlsZXMubGlua1JhbmRvbX0+JiMxMDU1MzvQn9C+0YfQsNGC0Lgg0L/RgNC40LPQvtC00YM8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9NYWluQ29udGFpbnRlcj5cclxuICAgICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTWFpbkNvbnRhaW50ZXIiLCJzdHlsZXMiLCJMaW5rIiwiUmFuZG9tIiwicmFuZG9tRGF0YSIsInNldFJhbmRvbURhdGEiLCJkYXRhIiwic2h1ZmZsZUFycmF5IiwiYXJyYXkiLCJpIiwibGVuZ3RoIiwiaiIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInNodWZmbGVkRGF0YSIsInNsaWNlIiwidGl0ZWxzIiwiZGl2IiwiY2xhc3NOYW1lIiwicmFuZG9tQmxvY2siLCJyYW5kb21CbG9ja0FyZWEiLCJzdHJvbmciLCJyYW5kb21UaXRsZSIsImgyIiwicmFuZG9tVGl0bGUyIiwicCIsInVsIiwicmFuZG9tVWwiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJsaSIsInJhbmRvbUxpIiwiaHJlZiIsImxpbmtSYW5kb20iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Random.jsx\n"));

/***/ })

});