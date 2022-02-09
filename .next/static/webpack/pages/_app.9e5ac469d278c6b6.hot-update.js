"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./redux/cartSlice.js":
/*!****************************!*\
  !*** ./redux/cartSlice.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addProduct\": function() { return /* binding */ addProduct; },\n/* harmony export */   \"reset\": function() { return /* binding */ reset; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar cartSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"cart\",\n    initialState: {\n        products: [],\n        quantity: 0,\n        total: 0\n    },\n    reducers: {\n        addProduct: function(state, action) {\n            state.products.push(action.payload);\n            state.quantity += 1;\n            state.total += action.payload.price * action.payload.quantity;\n        },\n        reset: function(state) {\n            state.products = [];\n            state.quantity = 0;\n            state.total += action.payload.price * action.payload.quantity;\n        }\n    }\n});\nvar _actions = cartSlice.actions;\nvar addProduct = _actions.addProduct, reset = _actions.reset;\n/* harmony default export */ __webpack_exports__[\"default\"] = (cartSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9jYXJ0U2xpY2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUE4QztBQUU5QyxHQUFLLENBQUNDLFNBQVMsR0FBR0QsNkRBQVcsQ0FBQyxDQUFDO0lBQzdCRSxJQUFJLEVBQUUsQ0FBTTtJQUNaQyxZQUFZLEVBQUUsQ0FBQztRQUNiQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ1pDLFFBQVEsRUFBRSxDQUFDO1FBQ1hDLEtBQUssRUFBRSxDQUFDO0lBQ1YsQ0FBQztJQUNEQyxRQUFRLEVBQUUsQ0FBQztRQUNUQyxVQUFVLEVBQUUsUUFBUUMsQ0FBUEMsS0FBSyxFQUFFRCxNQUFNLEVBQUssQ0FBQztZQUM5QkMsS0FBSyxDQUFDTixRQUFRLENBQUNPLElBQUksQ0FBQ0YsTUFBTSxDQUFDRyxPQUFPO1lBQ2xDRixLQUFLLENBQUNMLFFBQVEsSUFBSSxDQUFDO1lBQ25CSyxLQUFLLENBQUNKLEtBQUssSUFBSUcsTUFBTSxDQUFDRyxPQUFPLENBQUNDLEtBQUssR0FBR0osTUFBTSxDQUFDRyxPQUFPLENBQUNQLFFBQVE7UUFDL0QsQ0FBQztRQUNEUyxLQUFLLEVBQUUsUUFBUSxDQUFQSixLQUFLLEVBQUssQ0FBQztZQUNqQkEsS0FBSyxDQUFDTixRQUFRLEdBQUcsQ0FBQyxDQUFDO1lBQ25CTSxLQUFLLENBQUNMLFFBQVEsR0FBRyxDQUFDO1lBQ2xCSyxLQUFLLENBQUNKLEtBQUssSUFBSUcsTUFBTSxDQUFDRyxPQUFPLENBQUNDLEtBQUssR0FBR0osTUFBTSxDQUFDRyxPQUFPLENBQUNQLFFBQVE7UUFDL0QsQ0FBQztJQUNILENBQUM7QUFDSCxDQUFDO0lBRW9DSixRQUFpQixHQUFqQkEsU0FBUyxDQUFDYyxPQUFPO0FBQS9DLEdBQUssQ0FBR1AsVUFBVSxHQUFZUCxRQUFpQixDQUF2Q08sVUFBVSxFQUFFTSxLQUFLLEdBQUtiLFFBQWlCLENBQTNCYSxLQUFLO0FBQ2hDLCtEQUFlYixTQUFTLENBQUNlLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9yZWR1eC9jYXJ0U2xpY2UuanM/ZTA3MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5cbmNvbnN0IGNhcnRTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZTogXCJjYXJ0XCIsXG4gIGluaXRpYWxTdGF0ZToge1xuICAgIHByb2R1Y3RzOiBbXSxcbiAgICBxdWFudGl0eTogMCxcbiAgICB0b3RhbDogMCxcbiAgfSxcbiAgcmVkdWNlcnM6IHtcbiAgICBhZGRQcm9kdWN0OiAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgc3RhdGUucHJvZHVjdHMucHVzaChhY3Rpb24ucGF5bG9hZCk7XG4gICAgICBzdGF0ZS5xdWFudGl0eSArPSAxO1xuICAgICAgc3RhdGUudG90YWwgKz0gYWN0aW9uLnBheWxvYWQucHJpY2UgKiBhY3Rpb24ucGF5bG9hZC5xdWFudGl0eTtcbiAgICB9LFxuICAgIHJlc2V0OiAoc3RhdGUpID0+IHtcbiAgICAgIHN0YXRlLnByb2R1Y3RzID0gW107XG4gICAgICBzdGF0ZS5xdWFudGl0eSA9IDA7XG4gICAgICBzdGF0ZS50b3RhbCArPSBhY3Rpb24ucGF5bG9hZC5wcmljZSAqIGFjdGlvbi5wYXlsb2FkLnF1YW50aXR5O1xuICAgIH0sXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IHsgYWRkUHJvZHVjdCwgcmVzZXQgfSA9IGNhcnRTbGljZS5hY3Rpb25zO1xuZXhwb3J0IGRlZmF1bHQgY2FydFNsaWNlLnJlZHVjZXI7XG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJjYXJ0U2xpY2UiLCJuYW1lIiwiaW5pdGlhbFN0YXRlIiwicHJvZHVjdHMiLCJxdWFudGl0eSIsInRvdGFsIiwicmVkdWNlcnMiLCJhZGRQcm9kdWN0IiwiYWN0aW9uIiwic3RhdGUiLCJwdXNoIiwicGF5bG9hZCIsInByaWNlIiwicmVzZXQiLCJhY3Rpb25zIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./redux/cartSlice.js\n");

/***/ })

});