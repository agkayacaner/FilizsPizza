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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/Product.module.css */ \"./styles/Product.module.css\");\n/* harmony import */ var _styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Product = function(param) {\n    var pizza = param.pizza;\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(pizza.prices[0]), price = ref[0], setPrice = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), size = ref1[0], setSize = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), extras = ref2[0], setExtras = ref2[1];\n    var changePrice = function(number) {\n        setPrice(price + number);\n    };\n    var handleSize = function(sizeIndex) {\n        var difference = pizza.prices[sizeIndex] - pizza.prices[size];\n        setSize(sizeIndex);\n        changePrice(difference);\n    };\n    var handleChange = function(e, option) {\n        var checked = e.target.checked;\n        if (checked) {\n            changePrice(option.price);\n            setExtras(function(prev) {\n                return _toConsumableArray(prev).concat([\n                    option\n                ]);\n            });\n        } else {\n            changePrice(-option.price);\n            setExtras(extras);\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().left),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().imgContainer),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        src: pizza.img,\n                        objectFit: \"contain\",\n                        layout: \"fill\",\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"/Users/caneragkaya/Documents/GitHub/FilizsPizza/pages/products/[id].jsx\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/caneragkaya/Documents/GitHub/FilizsPizza/pages/products/[id].jsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/caneragkaya/Documents/GitHub/FilizsPizza/pages/products/[id].jsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().right),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n                        children: pizza.title\n                    }, void 0, false, {\n                        fileName: \"/Users/caneragkaya/Documents/GitHub/FilizsPizza/pages/products/[id].jsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().price),\n                        children: [\n                            \"$\",\n                            price\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/caneragkaya/Documents/GitHub/FilizsPizza/pages/products/[id].jsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().desc),\n                        children: pizza.desc\n                    }, void 0, false, {\n                        fileName: \"/Users/caneragkaya/Documents/GitHub/FilizsPizza/pages/products/[id].jsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().choose),\n                        children: \"Choose the size\"\n                    }, void 0, false, {\n                        fileName: \"/Users/caneragkaya/Documents/GitHub/FilizsPizza/pages/products/[id].jsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().sizes),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().size),\n                                onClick: function() {\n                                    return handleSize(0);\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        src: \"/img/size.png\",\n                                        layout: \"fill\",\n                                        alt: \"\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/caneragkaya/Documents/GitHub/FilizsPizza/pages/products/[id].jsx\",\n                                        lineNumber: 45,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().number),\n                                        children: \"Small\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/caneragkaya/Documents/GitHub/FilizsPizza/pages/products/[id].jsx\",\n                                        lineNumber: 46,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/caneragkaya/Documents/GitHub/FilizsPizza/pages/products/[id].jsx\",\n                                lineNumber: 44,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().size),\n                                onClick: function() {\n                                    return handleSize(1);\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        src: \"/img/size.png\",\n                                        layout: \"fill\",\n                                        alt: \"\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/caneragkaya/Documents/GitHub/FilizsPizza/pages/products/[id].jsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().number),\n                                        children: \"Medium\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/caneragkaya/Documents/GitHub/FilizsPizza/pages/products/[id].jsx\",\n                                        lineNumber: 50,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/caneragkaya/Documents/GitHub/FilizsPizza/pages/products/[id].jsx\",\n                                lineNumber: 48,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().size),\n                                onClick: function() {\n                                    return handleSize(2);\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        src: \"/img/size.png\",\n                                        layout: \"fill\",\n                                        alt: \"\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/caneragkaya/Documents/GitHub/FilizsPizza/pages/products/[id].jsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().number),\n                                        children: \"Large\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/caneragkaya/Documents/GitHub/FilizsPizza/pages/products/[id].jsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/caneragkaya/Documents/GitHub/FilizsPizza/pages/products/[id].jsx\",\n                                lineNumber: 52,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/caneragkaya/Documents/GitHub/FilizsPizza/pages/products/[id].jsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().choose),\n                        children: \"Choose additional ingredients\"\n                    }, void 0, false, {\n                        fileName: \"/Users/caneragkaya/Documents/GitHub/FilizsPizza/pages/products/[id].jsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().ingredients),\n                        children: pizza.extraOptions.map(function(option) {\n                            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().option),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"checkbox\",\n                                        id: option.text,\n                                        name: option.text,\n                                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().checkbox),\n                                        onChange: function(e) {\n                                            return handleChange(e, option);\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"/Users/caneragkaya/Documents/GitHub/FilizsPizza/pages/products/[id].jsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 15\n                                    }, _this1),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"double\",\n                                        children: option.text\n                                    }, void 0, false, {\n                                        fileName: \"/Users/caneragkaya/Documents/GitHub/FilizsPizza/pages/products/[id].jsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 15\n                                    }, _this1)\n                                ]\n                            }, option._id, true, {\n                                fileName: \"/Users/caneragkaya/Documents/GitHub/FilizsPizza/pages/products/[id].jsx\",\n                                lineNumber: 60,\n                                columnNumber: 13\n                            }, _this1);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/caneragkaya/Documents/GitHub/FilizsPizza/pages/products/[id].jsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().add),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                onChange: function(e) {\n                                    return setQuantity(e.target.value);\n                                },\n                                type: \"number\",\n                                defaultValue: 1,\n                                className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().quantity)\n                            }, void 0, false, {\n                                fileName: \"/Users/caneragkaya/Documents/GitHub/FilizsPizza/pages/products/[id].jsx\",\n                                lineNumber: 73,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().button),\n                                children: \"Add to Cart\"\n                            }, void 0, false, {\n                                fileName: \"/Users/caneragkaya/Documents/GitHub/FilizsPizza/pages/products/[id].jsx\",\n                                lineNumber: 79,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/caneragkaya/Documents/GitHub/FilizsPizza/pages/products/[id].jsx\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/caneragkaya/Documents/GitHub/FilizsPizza/pages/products/[id].jsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/caneragkaya/Documents/GitHub/FilizsPizza/pages/products/[id].jsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, _this));\n};\n_s(Product, \"1+kS7/UCcR1T6LlJGnq3dNc2Wno=\");\n_c = Product;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Product);\nvar _c;\n$RefreshReg$(_c, \"Product\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QitDLENBQUs7d0NBQ0pDLElBQUksRUFBQyxDQUFVO3dDQUNmQyxFQUFFLEVBQUU3QixNQUFNLENBQUM4QixJQUFJO3dDQUNmQyxJQUFJLEVBQUUvQixNQUFNLENBQUM4QixJQUFJO3dDQUNqQnpCLFNBQVMsRUFBRXpCLDRFQUFlO3dDQUMxQnFELFFBQVEsRUFBRSxRQUFRLENBQVBsQyxDQUFDOzRDQUFLRCxNQUFNLENBQU5BLFlBQVksQ0FBQ0MsQ0FBQyxFQUFFQyxNQUFNOzs7Ozs7O2dIQUV4Q2tDLENBQUs7d0NBQUNDLE9BQU8sRUFBQyxDQUFRO2tEQUFFbkMsTUFBTSxDQUFDOEIsSUFBSTs7Ozs7OzsrQkFSRjlCLE1BQU0sQ0FBQ29DLEdBQUc7Ozs7Ozs7Ozs7O2dHQVlqRGhDLENBQUc7d0JBQUNDLFNBQVMsRUFBRXpCLHVFQUFVOzt3R0FDdkIrQyxDQUFLO2dDQUNKTSxRQUFRLEVBQUUsUUFBUSxDQUFQbEMsQ0FBQztvQ0FBS3VDLE1BQU0sQ0FBTkEsV0FBVyxDQUFDdkMsQ0FBQyxDQUFDRyxNQUFNLENBQUNxQyxLQUFLOztnQ0FDM0NYLElBQUksRUFBQyxDQUFRO2dDQUNiWSxZQUFZLEVBQUUsQ0FBQztnQ0FDZm5DLFNBQVMsRUFBRXpCLDRFQUFlOzs7Ozs7d0dBRTNCOEQsQ0FBTTtnQ0FBQ3JDLFNBQVMsRUFBRXpCLDBFQUFhOzBDQUFFLENBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUt2RCxDQUFDO0dBOUVLSSxPQUFPO0tBQVBBLE9BQU87O0FBMkZiLCtEQUFlQSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdHMvW2lkXS5qc3g/ZTMxNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvUHJvZHVjdC5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5jb25zdCBQcm9kdWN0ID0gKHsgcGl6emEgfSkgPT4ge1xuICBjb25zdCBbcHJpY2UsIHNldFByaWNlXSA9IHVzZVN0YXRlKHBpenphLnByaWNlc1swXSk7XG4gIGNvbnN0IFtzaXplLCBzZXRTaXplXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbZXh0cmFzLCBzZXRFeHRyYXNdID0gdXNlU3RhdGUoW10pO1xuXG4gIGNvbnN0IGNoYW5nZVByaWNlID0gKG51bWJlcikgPT4ge1xuICAgIHNldFByaWNlKHByaWNlICsgbnVtYmVyKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTaXplID0gKHNpemVJbmRleCkgPT4ge1xuICAgIGNvbnN0IGRpZmZlcmVuY2UgPSBwaXp6YS5wcmljZXNbc2l6ZUluZGV4XSAtIHBpenphLnByaWNlc1tzaXplXTtcbiAgICBzZXRTaXplKHNpemVJbmRleCk7XG4gICAgY2hhbmdlUHJpY2UoZGlmZmVyZW5jZSk7XG4gIH07XG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlLCBvcHRpb24pID0+IHtcbiAgICBjb25zdCBjaGVja2VkID0gZS50YXJnZXQuY2hlY2tlZDtcblxuICAgIGlmIChjaGVja2VkKSB7XG4gICAgICBjaGFuZ2VQcmljZShvcHRpb24ucHJpY2UpO1xuICAgICAgc2V0RXh0cmFzKChwcmV2KSA9PiBbLi4ucHJldiwgb3B0aW9uXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNoYW5nZVByaWNlKC1vcHRpb24ucHJpY2UpO1xuICAgICAgc2V0RXh0cmFzKGV4dHJhcylcbiAgICB9XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sZWZ0fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWdDb250YWluZXJ9PlxuICAgICAgICAgIDxJbWFnZSBzcmM9e3BpenphLmltZ30gb2JqZWN0Rml0PVwiY29udGFpblwiIGxheW91dD1cImZpbGxcIiBhbHQ9XCJcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yaWdodH0+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+e3BpenphLnRpdGxlfTwvaDE+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnByaWNlfT4ke3ByaWNlfTwvc3Bhbj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY30+e3BpenphLmRlc2N9PC9wPlxuICAgICAgICA8aDMgY2xhc3NOYW1lPXtzdHlsZXMuY2hvb3NlfT5DaG9vc2UgdGhlIHNpemU8L2gzPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNpemVzfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNpemV9IG9uQ2xpY2s9eygpID0+IGhhbmRsZVNpemUoMCl9PlxuICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9pbWcvc2l6ZS5wbmdcIiBsYXlvdXQ9XCJmaWxsXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLm51bWJlcn0+U21hbGw8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaXplfSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTaXplKDEpfT5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvaW1nL3NpemUucG5nXCIgbGF5b3V0PVwiZmlsbFwiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5udW1iZXJ9Pk1lZGl1bTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNpemV9IG9uQ2xpY2s9eygpID0+IGhhbmRsZVNpemUoMil9PlxuICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9pbWcvc2l6ZS5wbmdcIiBsYXlvdXQ9XCJmaWxsXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLm51bWJlcn0+TGFyZ2U8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aDMgY2xhc3NOYW1lPXtzdHlsZXMuY2hvb3NlfT5DaG9vc2UgYWRkaXRpb25hbCBpbmdyZWRpZW50czwvaDM+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5ncmVkaWVudHN9PlxuICAgICAgICAgIHtwaXp6YS5leHRyYU9wdGlvbnMubWFwKChvcHRpb24pID0+IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3B0aW9ufSBrZXk9e29wdGlvbi5faWR9PlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgIGlkPXtvcHRpb24udGV4dH1cbiAgICAgICAgICAgICAgICBuYW1lPXtvcHRpb24udGV4dH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jaGVja2JveH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlLCBvcHRpb24pfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImRvdWJsZVwiPntvcHRpb24udGV4dH08L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFkZH0+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFF1YW50aXR5KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXsxfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucXVhbnRpdHl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0+QWRkIHRvIENhcnQ8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoXG4gICAgYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvcHJvZHVjdHMvJHtwYXJhbXMuaWR9YFxuICApO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwaXp6YTogcmVzLmRhdGEsXG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3Q7XG4iXSwibmFtZXMiOlsic3R5bGVzIiwiSW1hZ2UiLCJSZWFjdCIsInVzZVN0YXRlIiwiUHJvZHVjdCIsInBpenphIiwicHJpY2VzIiwicHJpY2UiLCJzZXRQcmljZSIsInNpemUiLCJzZXRTaXplIiwiZXh0cmFzIiwic2V0RXh0cmFzIiwiY2hhbmdlUHJpY2UiLCJudW1iZXIiLCJoYW5kbGVTaXplIiwic2l6ZUluZGV4IiwiZGlmZmVyZW5jZSIsImhhbmRsZUNoYW5nZSIsImUiLCJvcHRpb24iLCJjaGVja2VkIiwidGFyZ2V0IiwicHJldiIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImxlZnQiLCJpbWdDb250YWluZXIiLCJzcmMiLCJpbWciLCJvYmplY3RGaXQiLCJsYXlvdXQiLCJhbHQiLCJyaWdodCIsImgxIiwidGl0bGUiLCJzcGFuIiwicCIsImRlc2MiLCJoMyIsImNob29zZSIsInNpemVzIiwib25DbGljayIsImluZ3JlZGllbnRzIiwiZXh0cmFPcHRpb25zIiwibWFwIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJ0ZXh0IiwibmFtZSIsImNoZWNrYm94Iiwib25DaGFuZ2UiLCJsYWJlbCIsImh0bWxGb3IiLCJfaWQiLCJhZGQiLCJzZXRRdWFudGl0eSIsInZhbHVlIiwiZGVmYXVsdFZhbHVlIiwicXVhbnRpdHkiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/products/[id].jsx\n");

/***/ })

});