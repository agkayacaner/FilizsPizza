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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/Product.module.css */ \"./styles/Product.module.css\");\n/* harmony import */ var _styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Product = function(param) {\n    var pizza = param.pizza;\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(pizza.prices[0]), price = ref[0], setPrice = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), size = ref1[0], setSize = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1), quantity = ref2[0], setQuantity = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), extras = ref3[0], setExtras = ref3[1];\n    var changePrice = function(number) {\n        setPrice(price + number);\n    };\n    var handleSize = function(sizeIndex) {\n        var difference = pizza.prices[sizeIndex] - pizza.prices[size];\n        setSize(sizeIndex);\n        changePrice(difference);\n    };\n    var handleChange = function(e, option) {\n        var checked = e.target.checked;\n        if (checked) {\n            changePrice(option.price);\n            setExtras(function(prev) {\n                return _toConsumableArray(prev).concat([\n                    option\n                ]);\n            });\n        } else {\n            changePrice(-option.price);\n            setExtras(extras.filter(function(extra) {\n                return extra._id !== option._id;\n            }));\n        }\n    };\n    console.log(extras);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().left),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().imgContainer),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        src: pizza.img,\n                        objectFit: \"contain\",\n                        layout: \"fill\",\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"/Users/caneragkaya/Documents/GitHub/FilizsPizza/pages/products/[id].jsx\",\n                        lineNumber: 39,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/caneragkaya/Documents/GitHub/FilizsPizza/pages/products/[id].jsx\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/caneragkaya/Documents/GitHub/FilizsPizza/pages/products/[id].jsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().right),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n                        children: pizza.title\n                    }, void 0, false, {\n                        fileName: \"/Users/caneragkaya/Documents/GitHub/FilizsPizza/pages/products/[id].jsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().price),\n                        children: [\n                            \"$\",\n                            price\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/caneragkaya/Documents/GitHub/FilizsPizza/pages/products/[id].jsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().desc),\n                        children: pizza.desc\n                    }, void 0, false, {\n                        fileName: \"/Users/caneragkaya/Documents/GitHub/FilizsPizza/pages/products/[id].jsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().choose),\n                        children: \"Choose the size\"\n                    }, void 0, false, {\n                        fileName: \"/Users/caneragkaya/Documents/GitHub/FilizsPizza/pages/products/[id].jsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().sizes),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().size),\n                                onClick: function() {\n                                    return handleSize(0);\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        src: \"/img/size.png\",\n                                        layout: \"fill\",\n                                        alt: \"\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/caneragkaya/Documents/GitHub/FilizsPizza/pages/products/[id].jsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().number),\n                                        children: \"Small\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/caneragkaya/Documents/GitHub/FilizsPizza/pages/products/[id].jsx\",\n                                        lineNumber: 50,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/caneragkaya/Documents/GitHub/FilizsPizza/pages/products/[id].jsx\",\n                                lineNumber: 48,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().size),\n                                onClick: function() {\n                                    return handleSize(1);\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        src: \"/img/size.png\",\n                                        layout: \"fill\",\n                                        alt: \"\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/caneragkaya/Documents/GitHub/FilizsPizza/pages/products/[id].jsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().number),\n                                        children: \"Medium\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/caneragkaya/Documents/GitHub/FilizsPizza/pages/products/[id].jsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/caneragkaya/Documents/GitHub/FilizsPizza/pages/products/[id].jsx\",\n                                lineNumber: 52,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().size),\n                                onClick: function() {\n                                    return handleSize(2);\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        src: \"/img/size.png\",\n                                        layout: \"fill\",\n                                        alt: \"\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/caneragkaya/Documents/GitHub/FilizsPizza/pages/products/[id].jsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().number),\n                                        children: \"Large\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/caneragkaya/Documents/GitHub/FilizsPizza/pages/products/[id].jsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/caneragkaya/Documents/GitHub/FilizsPizza/pages/products/[id].jsx\",\n                                lineNumber: 56,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/caneragkaya/Documents/GitHub/FilizsPizza/pages/products/[id].jsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().choose),\n                        children: \"Choose additional ingredients\"\n                    }, void 0, false, {\n                        fileName: \"/Users/caneragkaya/Documents/GitHub/FilizsPizza/pages/products/[id].jsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().ingredients),\n                        children: pizza.extraOptions.map(function(option) {\n                            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().option),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"checkbox\",\n                                        id: option.text,\n                                        name: option.text,\n                                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().checkbox),\n                                        onChange: function(e) {\n                                            return handleChange(e, option);\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"/Users/caneragkaya/Documents/GitHub/FilizsPizza/pages/products/[id].jsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 15\n                                    }, _this1),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"double\",\n                                        children: option.text\n                                    }, void 0, false, {\n                                        fileName: \"/Users/caneragkaya/Documents/GitHub/FilizsPizza/pages/products/[id].jsx\",\n                                        lineNumber: 72,\n                                        columnNumber: 15\n                                    }, _this1)\n                                ]\n                            }, option._id, true, {\n                                fileName: \"/Users/caneragkaya/Documents/GitHub/FilizsPizza/pages/products/[id].jsx\",\n                                lineNumber: 64,\n                                columnNumber: 13\n                            }, _this1);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/caneragkaya/Documents/GitHub/FilizsPizza/pages/products/[id].jsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().add),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                onChange: function(e) {\n                                    return setQuantity(e.target.value);\n                                },\n                                type: \"number\",\n                                defaultValue: 1,\n                                className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().quantity)\n                            }, void 0, false, {\n                                fileName: \"/Users/caneragkaya/Documents/GitHub/FilizsPizza/pages/products/[id].jsx\",\n                                lineNumber: 77,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().button),\n                                on: true,\n                                children: \"Add to Cart\"\n                            }, void 0, false, {\n                                fileName: \"/Users/caneragkaya/Documents/GitHub/FilizsPizza/pages/products/[id].jsx\",\n                                lineNumber: 83,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/caneragkaya/Documents/GitHub/FilizsPizza/pages/products/[id].jsx\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/caneragkaya/Documents/GitHub/FilizsPizza/pages/products/[id].jsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/caneragkaya/Documents/GitHub/FilizsPizza/pages/products/[id].jsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, _this));\n};\n_s(Product, \"tA2/H4CMhh7SmOE8n37kf2P9Dq8=\");\n_c = Product;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Product);\nvar _c;\n$RefreshReg$(_c, \"Product\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdHMvW2lkXS5qc3g/ZTMxNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvUHJvZHVjdC5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5jb25zdCBQcm9kdWN0ID0gKHsgcGl6emEgfSkgPT4ge1xuICBjb25zdCBbcHJpY2UsIHNldFByaWNlXSA9IHVzZVN0YXRlKHBpenphLnByaWNlc1swXSk7XG4gIGNvbnN0IFtzaXplLCBzZXRTaXplXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbcXVhbnRpdHksIHNldFF1YW50aXR5XSA9IHVzZVN0YXRlKDEpO1xuICBjb25zdCBbZXh0cmFzLCBzZXRFeHRyYXNdID0gdXNlU3RhdGUoW10pO1xuXG4gIGNvbnN0IGNoYW5nZVByaWNlID0gKG51bWJlcikgPT4ge1xuICAgIHNldFByaWNlKHByaWNlICsgbnVtYmVyKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTaXplID0gKHNpemVJbmRleCkgPT4ge1xuICAgIGNvbnN0IGRpZmZlcmVuY2UgPSBwaXp6YS5wcmljZXNbc2l6ZUluZGV4XSAtIHBpenphLnByaWNlc1tzaXplXTtcbiAgICBzZXRTaXplKHNpemVJbmRleCk7XG4gICAgY2hhbmdlUHJpY2UoZGlmZmVyZW5jZSk7XG4gIH07XG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlLCBvcHRpb24pID0+IHtcbiAgICBjb25zdCBjaGVja2VkID0gZS50YXJnZXQuY2hlY2tlZDtcblxuICAgIGlmIChjaGVja2VkKSB7XG4gICAgICBjaGFuZ2VQcmljZShvcHRpb24ucHJpY2UpO1xuICAgICAgc2V0RXh0cmFzKChwcmV2KSA9PiBbLi4ucHJldiwgb3B0aW9uXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNoYW5nZVByaWNlKC1vcHRpb24ucHJpY2UpO1xuICAgICAgc2V0RXh0cmFzKGV4dHJhcy5maWx0ZXIoKGV4dHJhKSA9PiBleHRyYS5faWQgIT09IG9wdGlvbi5faWQpKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc29sZS5sb2coZXh0cmFzKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGVmdH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1nQ29udGFpbmVyfT5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtwaXp6YS5pbWd9IG9iamVjdEZpdD1cImNvbnRhaW5cIiBsYXlvdXQ9XCJmaWxsXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmlnaHR9PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PntwaXp6YS50aXRsZX08L2gxPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5wcmljZX0+JHtwcmljZX08L3NwYW4+XG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2N9PntwaXp6YS5kZXNjfTwvcD5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT17c3R5bGVzLmNob29zZX0+Q2hvb3NlIHRoZSBzaXplPC9oMz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaXplc30+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaXplfSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTaXplKDApfT5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvaW1nL3NpemUucG5nXCIgbGF5b3V0PVwiZmlsbFwiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5udW1iZXJ9PlNtYWxsPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2l6ZX0gb25DbGljaz17KCkgPT4gaGFuZGxlU2l6ZSgxKX0+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2ltZy9zaXplLnBuZ1wiIGxheW91dD1cImZpbGxcIiBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubnVtYmVyfT5NZWRpdW08L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaXplfSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTaXplKDIpfT5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvaW1nL3NpemUucG5nXCIgbGF5b3V0PVwiZmlsbFwiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5udW1iZXJ9PkxhcmdlPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT17c3R5bGVzLmNob29zZX0+Q2hvb3NlIGFkZGl0aW9uYWwgaW5ncmVkaWVudHM8L2gzPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmluZ3JlZGllbnRzfT5cbiAgICAgICAgICB7cGl6emEuZXh0cmFPcHRpb25zLm1hcCgob3B0aW9uKSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm9wdGlvbn0ga2V5PXtvcHRpb24uX2lkfT5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICBpZD17b3B0aW9uLnRleHR9XG4gICAgICAgICAgICAgICAgbmFtZT17b3B0aW9uLnRleHR9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2hlY2tib3h9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSwgb3B0aW9uKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkb3VibGVcIj57b3B0aW9uLnRleHR9PC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hZGR9PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRRdWFudGl0eShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17MX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnF1YW50aXR5fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259IG9uPkFkZCB0byBDYXJ0PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAgIGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3Byb2R1Y3RzLyR7cGFyYW1zLmlkfWBcbiAgKTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcGl6emE6IHJlcy5kYXRhLFxuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0O1xuIl0sIm5hbWVzIjpbInN0eWxlcyIsIkltYWdlIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIlByb2R1Y3QiLCJwaXp6YSIsInByaWNlcyIsInByaWNlIiwic2V0UHJpY2UiLCJzaXplIiwic2V0U2l6ZSIsInF1YW50aXR5Iiwic2V0UXVhbnRpdHkiLCJleHRyYXMiLCJzZXRFeHRyYXMiLCJjaGFuZ2VQcmljZSIsIm51bWJlciIsImhhbmRsZVNpemUiLCJzaXplSW5kZXgiLCJkaWZmZXJlbmNlIiwiaGFuZGxlQ2hhbmdlIiwiZSIsIm9wdGlvbiIsImNoZWNrZWQiLCJ0YXJnZXQiLCJwcmV2IiwiZmlsdGVyIiwiZXh0cmEiLCJfaWQiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwibGVmdCIsImltZ0NvbnRhaW5lciIsInNyYyIsImltZyIsIm9iamVjdEZpdCIsImxheW91dCIsImFsdCIsInJpZ2h0IiwiaDEiLCJ0aXRsZSIsInNwYW4iLCJwIiwiZGVzYyIsImgzIiwiY2hvb3NlIiwic2l6ZXMiLCJvbkNsaWNrIiwiaW5ncmVkaWVudHMiLCJleHRyYU9wdGlvbnMiLCJtYXAiLCJpbnB1dCIsInR5cGUiLCJpZCIsInRleHQiLCJuYW1lIiwiY2hlY2tib3giLCJvbkNoYW5nZSIsImxhYmVsIiwiaHRtbEZvciIsImFkZCIsInZhbHVlIiwiZGVmYXVsdFZhbHVlIiwiYnV0dG9uIiwib24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/products/[id].jsx\n");

/***/ })

});