"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Games",{

/***/ "./pages/components/GamesCardComponents/Card.jsx":
/*!*******************************************************!*\
  !*** ./pages/components/GamesCardComponents/Card.jsx ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Card; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_App_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../styles/App.module.scss */ \"./styles/App.module.scss\");\n/* harmony import */ var _styles_App_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_App_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Card(param) {\n    let { item } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_App_module_scss__WEBPACK_IMPORTED_MODULE_1___default().gameCard),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                src: item.img,\n                alt: item.id,\n                layout: \"fill\",\n                objectFit: \"cover\",\n                className: (_styles_App_module_scss__WEBPACK_IMPORTED_MODULE_1___default().cardImage)\n            }, void 0, false, {\n                fileName: \"D:\\\\webAppMeteo\\\\meteo\\\\pages\\\\components\\\\GamesCardComponents\\\\Card.jsx\",\n                lineNumber: 8,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\webAppMeteo\\\\meteo\\\\pages\\\\components\\\\GamesCardComponents\\\\Card.jsx\",\n            lineNumber: 7,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_c = Card;\nvar _c;\n$RefreshReg$(_c, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL0dhbWVzQ2FyZENvbXBvbmVudHMvQ2FyZC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBb0Q7QUFDdEI7QUFFZixTQUFTRSxLQUFLLEtBQVE7UUFBUixFQUFFQyxJQUFJLEVBQUUsR0FBUjtJQUN6QixxQkFDSTtrQkFDSSw0RUFBQ0M7WUFBSUMsV0FBV0wseUVBQWU7c0JBQzNCLDRFQUFDQyxtREFBS0E7Z0JBQUNNLEtBQUtKLEtBQUtLLEdBQUc7Z0JBQUVDLEtBQUtOLEtBQUtPLEVBQUU7Z0JBQUVDLFFBQU87Z0JBQU9DLFdBQVU7Z0JBQVFQLFdBQVdMLDBFQUFnQjs7Ozs7Ozs7Ozs7O0FBSS9HO0tBUndCRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb21wb25lbnRzL0dhbWVzQ2FyZENvbXBvbmVudHMvQ2FyZC5qc3g/MmVlNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uLy4uL3N0eWxlcy9BcHAubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FyZCh7IGl0ZW0gfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdhbWVDYXJkfT5cclxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2l0ZW0uaW1nfSBhbHQ9e2l0ZW0uaWR9IGxheW91dD1cImZpbGxcIiBvYmplY3RGaXQ9XCJjb3ZlclwiIGNsYXNzTmFtZT17c3R5bGVzLmNhcmRJbWFnZX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuIl0sIm5hbWVzIjpbInN0eWxlcyIsIkltYWdlIiwiQ2FyZCIsIml0ZW0iLCJkaXYiLCJjbGFzc05hbWUiLCJnYW1lQ2FyZCIsInNyYyIsImltZyIsImFsdCIsImlkIiwibGF5b3V0Iiwib2JqZWN0Rml0IiwiY2FyZEltYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/GamesCardComponents/Card.jsx\n"));

/***/ })

});