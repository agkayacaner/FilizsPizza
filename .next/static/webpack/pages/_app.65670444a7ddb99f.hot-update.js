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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addProduct\": function() { return /* binding */ addProduct; },\n/* harmony export */   \"reset\": function() { return /* binding */ reset; }\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar cartSlice = cartSlice({\n    name: \"cart\",\n    initialState: {\n        products: [],\n        quantity: 0,\n        total: 0\n    },\n    reducers: {\n        addProduct: function(state, action) {\n            state.products.push(action.payload);\n            state.quantity += 1;\n            state.total += action.payload.price * action.payload.quantity;\n        },\n        reset: function(state) {\n            state = initialState;\n        }\n    }\n});\nvar _action = cartSlice.action;\nvar addProduct = _action.addProduct, reset = _action.reset;\n/* harmony default export */ __webpack_exports__[\"default\"] = (cartSlice.reducers);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9jYXJ0U2xpY2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThDO0FBRTlDLEdBQUssQ0FBQ0MsU0FBUyxHQUFHQSxTQUFTLENBQUMsQ0FBQztJQUMzQkMsSUFBSSxFQUFFLENBQU07SUFDWkMsWUFBWSxFQUFFLENBQUM7UUFDYkMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUNaQyxRQUFRLEVBQUUsQ0FBQztRQUNYQyxLQUFLLEVBQUUsQ0FBQztJQUNWLENBQUM7SUFDREMsUUFBUSxFQUFFLENBQUM7UUFDVEMsVUFBVSxFQUFFLFFBQVFDLENBQVBDLEtBQUssRUFBRUQsTUFBTSxFQUFLLENBQUM7WUFDOUJDLEtBQUssQ0FBQ04sUUFBUSxDQUFDTyxJQUFJLENBQUNGLE1BQU0sQ0FBQ0csT0FBTztZQUNsQ0YsS0FBSyxDQUFDTCxRQUFRLElBQUksQ0FBQztZQUNuQkssS0FBSyxDQUFDSixLQUFLLElBQUlHLE1BQU0sQ0FBQ0csT0FBTyxDQUFDQyxLQUFLLEdBQUdKLE1BQU0sQ0FBQ0csT0FBTyxDQUFDUCxRQUFRO1FBQy9ELENBQUM7UUFDRFMsS0FBSyxFQUFFLFFBQVEsQ0FBUEosS0FBSyxFQUFLLENBQUM7WUFDakJBLEtBQUssR0FBR1AsWUFBWTtRQUN0QixDQUFDO0lBQ0gsQ0FBQztBQUNILENBQUM7SUFFb0NGLE9BQWdCLEdBQWhCQSxTQUFTLENBQUNRLE1BQU07QUFBOUMsR0FBSyxDQUFHRCxVQUFVLEdBQVlQLE9BQWdCLENBQXRDTyxVQUFVLEVBQUVNLEtBQUssR0FBS2IsT0FBZ0IsQ0FBMUJhLEtBQUs7QUFDaEMsK0RBQWViLFNBQVMsQ0FBQ00sUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3JlZHV4L2NhcnRTbGljZS5qcz9lMDczIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcblxuY29uc3QgY2FydFNsaWNlID0gY2FydFNsaWNlKHtcbiAgbmFtZTogXCJjYXJ0XCIsXG4gIGluaXRpYWxTdGF0ZToge1xuICAgIHByb2R1Y3RzOiBbXSxcbiAgICBxdWFudGl0eTogMCxcbiAgICB0b3RhbDogMCxcbiAgfSxcbiAgcmVkdWNlcnM6IHtcbiAgICBhZGRQcm9kdWN0OiAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgc3RhdGUucHJvZHVjdHMucHVzaChhY3Rpb24ucGF5bG9hZCk7XG4gICAgICBzdGF0ZS5xdWFudGl0eSArPSAxXG4gICAgICBzdGF0ZS50b3RhbCArPSBhY3Rpb24ucGF5bG9hZC5wcmljZSAqIGFjdGlvbi5wYXlsb2FkLnF1YW50aXR5O1xuICAgIH0sXG4gICAgcmVzZXQ6IChzdGF0ZSkgPT4ge1xuICAgICAgc3RhdGUgPSBpbml0aWFsU3RhdGU7XG4gICAgfSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgeyBhZGRQcm9kdWN0LCByZXNldCB9ID0gY2FydFNsaWNlLmFjdGlvbjtcbmV4cG9ydCBkZWZhdWx0IGNhcnRTbGljZS5yZWR1Y2VycztcbiJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImNhcnRTbGljZSIsIm5hbWUiLCJpbml0aWFsU3RhdGUiLCJwcm9kdWN0cyIsInF1YW50aXR5IiwidG90YWwiLCJyZWR1Y2VycyIsImFkZFByb2R1Y3QiLCJhY3Rpb24iLCJzdGF0ZSIsInB1c2giLCJwYXlsb2FkIiwicHJpY2UiLCJyZXNldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./redux/cartSlice.js\n");

/***/ })

});