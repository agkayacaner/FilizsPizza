"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/products/[id]",{

/***/ "./pages/products/[id].jsx":
/*!*********************************!*\
  !*** ./pages/products/[id].jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Product_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/Product.module.css */ \"./styles/Product.module.css\");\n/* harmony import */ var _styles_Product_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Product = function(param) {\n    var pizza = param.pizza;\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(pizza.prices[0]), price = ref[0], setPrice = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), size = ref1[0], setSize = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1), quantity = ref2[0], setQuantity = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), extras = ref3[0], setExtras = ref3[1];\n    var dispatch = react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch;\n    var changePrice = function(number) {\n        setPrice(price + number);\n    };\n    var handleSize = function(sizeIndex) {\n        var difference = pizza.prices[sizeIndex] - pizza.prices[size];\n        setSize(sizeIndex);\n        changePrice(difference);\n    };\n    var handleChange = function(e, option) {\n        var checked = e.target.checked;\n        if (checked) {\n            changePrice(option.price);\n            setExtras(function(prev) {\n                return _toConsumableArray(prev).concat([\n                    option\n                ]);\n            });\n        } else {\n            changePrice(-option.price);\n            setExtras(extras.filter(function(extra) {\n                return extra._id !== option._id;\n            }));\n        }\n    };\n    var handleClick = function() {};\n    console.log(extras);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_4___default().left),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_4___default().imgContainer),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        src: pizza.img,\n                        objectFit: \"contain\",\n                        layout: \"fill\",\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"/Users/caneragkaya/Documents/GitHub/FilizsPizza/pages/products/[id].jsx\",\n                        lineNumber: 43,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/caneragkaya/Documents/GitHub/FilizsPizza/pages/products/[id].jsx\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/caneragkaya/Documents/GitHub/FilizsPizza/pages/products/[id].jsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_4___default().right),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_4___default().title),\n                        children: pizza.title\n                    }, void 0, false, {\n                        fileName: \"/Users/caneragkaya/Documents/GitHub/FilizsPizza/pages/products/[id].jsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_4___default().price),\n                        children: [\n                            \"$\",\n                            price\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/caneragkaya/Documents/GitHub/FilizsPizza/pages/products/[id].jsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_4___default().desc),\n                        children: pizza.desc\n                    }, void 0, false, {\n                        fileName: \"/Users/caneragkaya/Documents/GitHub/FilizsPizza/pages/products/[id].jsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_4___default().choose),\n                        children: \"Choose the size\"\n                    }, void 0, false, {\n                        fileName: \"/Users/caneragkaya/Documents/GitHub/FilizsPizza/pages/products/[id].jsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_4___default().sizes),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_4___default().size),\n                                onClick: function() {\n                                    return handleSize(0);\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        src: \"/img/size.png\",\n                                        layout: \"fill\",\n                                        alt: \"\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/caneragkaya/Documents/GitHub/FilizsPizza/pages/products/[id].jsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_4___default().number),\n                                        children: \"Small\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/caneragkaya/Documents/GitHub/FilizsPizza/pages/products/[id].jsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/caneragkaya/Documents/GitHub/FilizsPizza/pages/products/[id].jsx\",\n                                lineNumber: 52,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_4___default().size),\n                                onClick: function() {\n                                    return handleSize(1);\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        src: \"/img/size.png\",\n                                        layout: \"fill\",\n                                        alt: \"\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/caneragkaya/Documents/GitHub/FilizsPizza/pages/products/[id].jsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_4___default().number),\n                                        children: \"Medium\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/caneragkaya/Documents/GitHub/FilizsPizza/pages/products/[id].jsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/caneragkaya/Documents/GitHub/FilizsPizza/pages/products/[id].jsx\",\n                                lineNumber: 56,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_4___default().size),\n                                onClick: function() {\n                                    return handleSize(2);\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        src: \"/img/size.png\",\n                                        layout: \"fill\",\n                                        alt: \"\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/caneragkaya/Documents/GitHub/FilizsPizza/pages/products/[id].jsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_4___default().number),\n                                        children: \"Large\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/caneragkaya/Documents/GitHub/FilizsPizza/pages/products/[id].jsx\",\n                                        lineNumber: 62,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/caneragkaya/Documents/GitHub/FilizsPizza/pages/products/[id].jsx\",\n                                lineNumber: 60,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/caneragkaya/Documents/GitHub/FilizsPizza/pages/products/[id].jsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_4___default().choose),\n                        children: \"Choose additional ingredients\"\n                    }, void 0, false, {\n                        fileName: \"/Users/caneragkaya/Documents/GitHub/FilizsPizza/pages/products/[id].jsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_4___default().ingredients),\n                        children: pizza.extraOptions.map(function(option) {\n                            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_4___default().option),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"checkbox\",\n                                        id: option.text,\n                                        name: option.text,\n                                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_4___default().checkbox),\n                                        onChange: function(e) {\n                                            return handleChange(e, option);\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"/Users/caneragkaya/Documents/GitHub/FilizsPizza/pages/products/[id].jsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 15\n                                    }, _this1),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"double\",\n                                        children: option.text\n                                    }, void 0, false, {\n                                        fileName: \"/Users/caneragkaya/Documents/GitHub/FilizsPizza/pages/products/[id].jsx\",\n                                        lineNumber: 76,\n                                        columnNumber: 15\n                                    }, _this1)\n                                ]\n                            }, option._id, true, {\n                                fileName: \"/Users/caneragkaya/Documents/GitHub/FilizsPizza/pages/products/[id].jsx\",\n                                lineNumber: 68,\n                                columnNumber: 13\n                            }, _this1);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/caneragkaya/Documents/GitHub/FilizsPizza/pages/products/[id].jsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_4___default().add),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                onChange: function(e) {\n                                    return setQuantity(e.target.value);\n                                },\n                                type: \"number\",\n                                defaultValue: 1,\n                                className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_4___default().quantity)\n                            }, void 0, false, {\n                                fileName: \"/Users/caneragkaya/Documents/GitHub/FilizsPizza/pages/products/[id].jsx\",\n                                lineNumber: 81,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_4___default().button),\n                                onClick: handleClick(),\n                                children: \"Add to Cart\"\n                            }, void 0, false, {\n                                fileName: \"/Users/caneragkaya/Documents/GitHub/FilizsPizza/pages/products/[id].jsx\",\n                                lineNumber: 87,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/caneragkaya/Documents/GitHub/FilizsPizza/pages/products/[id].jsx\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/caneragkaya/Documents/GitHub/FilizsPizza/pages/products/[id].jsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/caneragkaya/Documents/GitHub/FilizsPizza/pages/products/[id].jsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, _this));\n};\n_s(Product, \"tA2/H4CMhh7SmOE8n37kf2P9Dq8=\");\n_c = Product;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Product);\nvar _c;\n$RefreshReg$(_c, \"Product\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TyxFQUFFdEIsV0FBVzswQ0FBSSxDQUUxRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS1YsQ0FBQztHQXZGSzFCLE9BQU87S0FBUEEsT0FBTzs7QUFvR2IsK0RBQWVBLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wcm9kdWN0cy9baWRdLmpzeD9lMzE0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9Qcm9kdWN0Lm1vZHVsZS5jc3NcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuXG5jb25zdCBQcm9kdWN0ID0gKHsgcGl6emEgfSkgPT4ge1xuICBjb25zdCBbcHJpY2UsIHNldFByaWNlXSA9IHVzZVN0YXRlKHBpenphLnByaWNlc1swXSk7XG4gIGNvbnN0IFtzaXplLCBzZXRTaXplXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbcXVhbnRpdHksIHNldFF1YW50aXR5XSA9IHVzZVN0YXRlKDEpO1xuICBjb25zdCBbZXh0cmFzLCBzZXRFeHRyYXNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoO1xuXG4gIGNvbnN0IGNoYW5nZVByaWNlID0gKG51bWJlcikgPT4ge1xuICAgIHNldFByaWNlKHByaWNlICsgbnVtYmVyKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTaXplID0gKHNpemVJbmRleCkgPT4ge1xuICAgIGNvbnN0IGRpZmZlcmVuY2UgPSBwaXp6YS5wcmljZXNbc2l6ZUluZGV4XSAtIHBpenphLnByaWNlc1tzaXplXTtcbiAgICBzZXRTaXplKHNpemVJbmRleCk7XG4gICAgY2hhbmdlUHJpY2UoZGlmZmVyZW5jZSk7XG4gIH07XG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlLCBvcHRpb24pID0+IHtcbiAgICBjb25zdCBjaGVja2VkID0gZS50YXJnZXQuY2hlY2tlZDtcblxuICAgIGlmIChjaGVja2VkKSB7XG4gICAgICBjaGFuZ2VQcmljZShvcHRpb24ucHJpY2UpO1xuICAgICAgc2V0RXh0cmFzKChwcmV2KSA9PiBbLi4ucHJldiwgb3B0aW9uXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNoYW5nZVByaWNlKC1vcHRpb24ucHJpY2UpO1xuICAgICAgc2V0RXh0cmFzKGV4dHJhcy5maWx0ZXIoKGV4dHJhKSA9PiBleHRyYS5faWQgIT09IG9wdGlvbi5faWQpKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7fTtcblxuICBjb25zb2xlLmxvZyhleHRyYXMpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sZWZ0fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWdDb250YWluZXJ9PlxuICAgICAgICAgIDxJbWFnZSBzcmM9e3BpenphLmltZ30gb2JqZWN0Rml0PVwiY29udGFpblwiIGxheW91dD1cImZpbGxcIiBhbHQ9XCJcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yaWdodH0+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+e3BpenphLnRpdGxlfTwvaDE+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnByaWNlfT4ke3ByaWNlfTwvc3Bhbj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY30+e3BpenphLmRlc2N9PC9wPlxuICAgICAgICA8aDMgY2xhc3NOYW1lPXtzdHlsZXMuY2hvb3NlfT5DaG9vc2UgdGhlIHNpemU8L2gzPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNpemVzfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNpemV9IG9uQ2xpY2s9eygpID0+IGhhbmRsZVNpemUoMCl9PlxuICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9pbWcvc2l6ZS5wbmdcIiBsYXlvdXQ9XCJmaWxsXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLm51bWJlcn0+U21hbGw8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaXplfSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTaXplKDEpfT5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvaW1nL3NpemUucG5nXCIgbGF5b3V0PVwiZmlsbFwiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5udW1iZXJ9Pk1lZGl1bTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNpemV9IG9uQ2xpY2s9eygpID0+IGhhbmRsZVNpemUoMil9PlxuICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9pbWcvc2l6ZS5wbmdcIiBsYXlvdXQ9XCJmaWxsXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLm51bWJlcn0+TGFyZ2U8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aDMgY2xhc3NOYW1lPXtzdHlsZXMuY2hvb3NlfT5DaG9vc2UgYWRkaXRpb25hbCBpbmdyZWRpZW50czwvaDM+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5ncmVkaWVudHN9PlxuICAgICAgICAgIHtwaXp6YS5leHRyYU9wdGlvbnMubWFwKChvcHRpb24pID0+IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3B0aW9ufSBrZXk9e29wdGlvbi5faWR9PlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgIGlkPXtvcHRpb24udGV4dH1cbiAgICAgICAgICAgICAgICBuYW1lPXtvcHRpb24udGV4dH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jaGVja2JveH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlLCBvcHRpb24pfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImRvdWJsZVwiPntvcHRpb24udGV4dH08L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFkZH0+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFF1YW50aXR5KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXsxfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucXVhbnRpdHl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0gb25DbGljaz17aGFuZGxlQ2xpY2soKX0+XG4gICAgICAgICAgICBBZGQgdG8gQ2FydFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChcbiAgICBgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9wcm9kdWN0cy8ke3BhcmFtcy5pZH1gXG4gICk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBpenphOiByZXMuZGF0YSxcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdDtcbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJJbWFnZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VEaXNwYXRjaCIsIlByb2R1Y3QiLCJwaXp6YSIsInByaWNlcyIsInByaWNlIiwic2V0UHJpY2UiLCJzaXplIiwic2V0U2l6ZSIsInF1YW50aXR5Iiwic2V0UXVhbnRpdHkiLCJleHRyYXMiLCJzZXRFeHRyYXMiLCJkaXNwYXRjaCIsImNoYW5nZVByaWNlIiwibnVtYmVyIiwiaGFuZGxlU2l6ZSIsInNpemVJbmRleCIsImRpZmZlcmVuY2UiLCJoYW5kbGVDaGFuZ2UiLCJlIiwib3B0aW9uIiwiY2hlY2tlZCIsInRhcmdldCIsInByZXYiLCJmaWx0ZXIiLCJleHRyYSIsIl9pZCIsImhhbmRsZUNsaWNrIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImxlZnQiLCJpbWdDb250YWluZXIiLCJzcmMiLCJpbWciLCJvYmplY3RGaXQiLCJsYXlvdXQiLCJhbHQiLCJyaWdodCIsImgxIiwidGl0bGUiLCJzcGFuIiwicCIsImRlc2MiLCJoMyIsImNob29zZSIsInNpemVzIiwib25DbGljayIsImluZ3JlZGllbnRzIiwiZXh0cmFPcHRpb25zIiwibWFwIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJ0ZXh0IiwibmFtZSIsImNoZWNrYm94Iiwib25DaGFuZ2UiLCJsYWJlbCIsImh0bWxGb3IiLCJhZGQiLCJ2YWx1ZSIsImRlZmF1bHRWYWx1ZSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/products/[id].jsx\n");

/***/ })

});