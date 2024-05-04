"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/payout",{

/***/ "./pages/payout.tsx":
/*!**************************!*\
  !*** ./pages/payout.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/index.js\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components */ \"./components/index.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils */ \"./utils/index.ts\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/constants */ \"./constants/index.ts\");\n/* harmony import */ var _atoms_stateAtom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/atoms/stateAtom */ \"./atoms/stateAtom.ts\");\n\nvar _s = $RefreshSig$();\n\"use client\";\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [state, setState] = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState)(_atoms_stateAtom__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n    const resetState = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useResetRecoilState)(_atoms_stateAtom__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n    const [netIncome, setNetIncome] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [discountRate, setDiscountRate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const { loanAmount , interestRate , loanTenure , prepayments , errors  } = state;\n    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const onInputChange = (e)=>{\n        const { name , value  } = e.target;\n        setState({\n            ...state,\n            [name]: value\n        });\n    };\n    const onresetState = ()=>{\n        setDiscountRate(0);\n        setNetIncome(0);\n        setResult(0);\n    };\n    const onCalculate = ()=>{\n        if (netIncome !== 0 && discountRate !== 0 && time !== 0) {\n            const data = netIncome / discountRate;\n            setResult(data);\n        }\n    };\n    const resetStatus = netIncome !== 0 || discountRate !== 0 || time !== 0;\n    const { outcome  } = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValue)(_atoms_stateAtom__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.Layout, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative px-6 lg:px-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mx-auto max-w-2xl py-4 sm:py-8 lg:py-12\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"hidden sm:mb-8 sm:flex sm:justify-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"relative rounded-full py-1 px-3 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20\",\n                                    children: \"Project\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/oluwabukunmi/Documents/GitHub/project-calculation/pages/payout.tsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/oluwabukunmi/Documents/GitHub/project-calculation/pages/payout.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl\",\n                                children: \"PAYOUT Calculator\"\n                            }, void 0, false, {\n                                fileName: \"/Users/oluwabukunmi/Documents/GitHub/project-calculation/pages/payout.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-center mt-6 text-lg leading-8 text-gray-600\",\n                                children: \"An NPV (Net Present Value) calculator is a financial tool used to estimate the present value of all future cash flows generated by an investment or project, considering the time value of money. It takes into account factors such as the initial investment, expected cash inflows, discount rate, and the duration of the investment to determine whether the investment is expected to generate positive or negative returns when discounted back to the present.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/oluwabukunmi/Documents/GitHub/project-calculation/pages/payout.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"py-6 px-6 sm:py-12 lg:px-8\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                    action: \"#\",\n                                    method: \"post\",\n                                    className: \"mx-auto max-w-xl\",\n                                    autoComplete: \"off\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.TextField, {\n                                                    name: \"netIncome\",\n                                                    label: \"Capital Cost($)\",\n                                                    placeholder: \"50,00,000\",\n                                                    unit: _constants__WEBPACK_IMPORTED_MODULE_5__.CURRENCY_SYMBOL,\n                                                    value: netIncome,\n                                                    onChange: (e)=>{\n                                                        setNetIncome(Number(e.target.value));\n                                                    }\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/oluwabukunmi/Documents/GitHub/project-calculation/pages/payout.tsx\",\n                                                    lineNumber: 82,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.TextField, {\n                                                    name: \"discountRate\",\n                                                    label: \"Net Income per Month ($/Month)\",\n                                                    placeholder: \"9\",\n                                                    unit: \"%\",\n                                                    value: discountRate,\n                                                    onChange: (e)=>{\n                                                        setDiscountRate(Number(e.target.value));\n                                                    }\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/oluwabukunmi/Documents/GitHub/project-calculation/pages/payout.tsx\",\n                                                    lineNumber: 92,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/oluwabukunmi/Documents/GitHub/project-calculation/pages/payout.tsx\",\n                                            lineNumber: 81,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"grid grid-cols-1 gap-4 mt-10 lg:grid-cols-2\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    type: \"button\",\n                                                    onClick: onCalculate,\n                                                    className: \"btn btn-primary\",\n                                                    children: \"Calculate\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/oluwabukunmi/Documents/GitHub/project-calculation/pages/payout.tsx\",\n                                                    lineNumber: 104,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    type: \"button\",\n                                                    onClick: onresetState,\n                                                    className: \"btn btn-secondary\",\n                                                    disabled: !resetStatus,\n                                                    children: \"Reset\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/oluwabukunmi/Documents/GitHub/project-calculation/pages/payout.tsx\",\n                                                    lineNumber: 112,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/oluwabukunmi/Documents/GitHub/project-calculation/pages/payout.tsx\",\n                                            lineNumber: 103,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/oluwabukunmi/Documents/GitHub/project-calculation/pages/payout.tsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/oluwabukunmi/Documents/GitHub/project-calculation/pages/payout.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/oluwabukunmi/Documents/GitHub/project-calculation/pages/payout.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mx-auto max-w-7xl px-6 lg:px-8 py-1 sm:py-3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dl\", {\n                            className: \"grid grid-cols-1 gap-y-16 gap-x-6 text-center lg:grid-cols-1\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Outcome, {\n                                label: \"PAYOUT\",\n                                value: result\n                            }, void 0, false, {\n                                fileName: \"/Users/oluwabukunmi/Documents/GitHub/project-calculation/pages/payout.tsx\",\n                                lineNumber: 126,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/oluwabukunmi/Documents/GitHub/project-calculation/pages/payout.tsx\",\n                            lineNumber: 125,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/oluwabukunmi/Documents/GitHub/project-calculation/pages/payout.tsx\",\n                        lineNumber: 124,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/oluwabukunmi/Documents/GitHub/project-calculation/pages/payout.tsx\",\n                lineNumber: 54,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/oluwabukunmi/Documents/GitHub/project-calculation/pages/payout.tsx\",\n            lineNumber: 53,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/oluwabukunmi/Documents/GitHub/project-calculation/pages/payout.tsx\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"pym0h1vn17eu4SGH5Ao8QHGcqmw=\", false, function() {\n    return [\n        recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState,\n        recoil__WEBPACK_IMPORTED_MODULE_2__.useResetRecoilState,\n        recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValue\n    ];\n});\n_c = Home;\nfunction Outcome(param) {\n    let { label , value  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mx-auto flex items-center max-w-xs flex-col gap-y-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dt\", {\n                className: \"text-base leading-7 text-gray-600\",\n                children: label\n            }, void 0, false, {\n                fileName: \"/Users/oluwabukunmi/Documents/GitHub/project-calculation/pages/payout.tsx\",\n                lineNumber: 150,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dd\", {\n                className: \"order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl\",\n                children: (0,_utils__WEBPACK_IMPORTED_MODULE_4__.toCurrency)(value)\n            }, void 0, false, {\n                fileName: \"/Users/oluwabukunmi/Documents/GitHub/project-calculation/pages/payout.tsx\",\n                lineNumber: 151,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/oluwabukunmi/Documents/GitHub/project-calculation/pages/payout.tsx\",\n        lineNumber: 149,\n        columnNumber: 5\n    }, this);\n}\n_c1 = Outcome;\nvar _c, _c1;\n$RefreshReg$(_c, \"Home\");\n$RefreshReg$(_c1, \"Outcome\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wYXlvdXQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRThDO0FBRWU7QUFTdkM7QUFDa0I7QUFHSDtBQUVTO0FBR0o7QUFFM0IsU0FBU1MsT0FBTzs7SUFDN0IsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdWLHNEQUFjQSxDQUFDTyx3REFBU0E7SUFDbEQsTUFBTUksYUFBYVYsMkRBQW1CQSxDQUFDTSx3REFBU0E7SUFDaEQsTUFBTSxDQUFDSyxXQUFXQyxhQUFhLEdBQUdkLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ2UsY0FBY0MsZ0JBQWdCLEdBQUdoQiwrQ0FBUUEsQ0FBQztJQUNqRCxNQUFNLEVBQUVpQixXQUFVLEVBQUVDLGFBQVksRUFBRUMsV0FBVSxFQUFFQyxZQUFXLEVBQUVDLE9BQU0sRUFBRSxHQUFHWDtJQUN0RSxNQUFNLENBQUNZLFFBQVFDLFVBQVUsR0FBR3ZCLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU13QixnQkFBZ0IsQ0FBQ0MsSUFBcUM7UUFDMUQsTUFBTSxFQUFFQyxLQUFJLEVBQUVDLE1BQUssRUFBRSxHQUFHRixFQUFFRyxNQUFNO1FBRWhDakIsU0FBUztZQUFFLEdBQUdELEtBQUs7WUFBRSxDQUFDZ0IsS0FBSyxFQUFFQztRQUFNO0lBQ3JDO0lBQ0EsTUFBTUUsZUFBZSxJQUFNO1FBQ3pCYixnQkFBZ0I7UUFDaEJGLGFBQWE7UUFDYlMsVUFBVTtJQUNaO0lBQ0EsTUFBTU8sY0FBYyxJQUFNO1FBQ3hCLElBQUlqQixjQUFjLEtBQUtFLGlCQUFpQixLQUFLZ0IsU0FBUyxHQUFHO1lBQ3ZELE1BQU1DLE9BQU9uQixZQUFZRTtZQUN6QlEsVUFBVVM7UUFDWixDQUFDO0lBQ0g7SUFFQSxNQUFNQyxjQUFjcEIsY0FBYyxLQUFLRSxpQkFBaUIsS0FBS2dCLFNBQVM7SUFDdEUsTUFBTSxFQUFFRyxRQUFPLEVBQUUsR0FBRzdCLHNEQUFjQSxDQUFDRyx3REFBU0E7SUFDNUMscUJBQ0UsOERBQUNMLCtDQUFNQTtrQkFDTCw0RUFBQ2dDO3NCQUNDLDRFQUFDQztnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBQ2IsNEVBQUNEO29DQUFJQyxXQUFVOzhDQUFpSDs7Ozs7Ozs7Ozs7MENBSWxJLDhEQUFDQztnQ0FBR0QsV0FBVTswQ0FBMEU7Ozs7OzswQ0FHeEYsOERBQUNFO2dDQUFFRixXQUFVOzBDQUFtRDs7Ozs7OzBDQVVoRSw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBQ2IsNEVBQUNHO29DQUNDQyxRQUFPO29DQUNQQyxRQUFPO29DQUNQTCxXQUFVO29DQUNWTSxjQUFhOztzREFFYiw4REFBQ1A7NENBQUlDLFdBQVU7OzhEQUNiLDhEQUFDakMsa0RBQVNBO29EQUNSc0IsTUFBSztvREFDTGtCLE9BQU07b0RBQ05DLGFBQVk7b0RBQ1pDLE1BQU12Qyx1REFBZUE7b0RBQ3JCb0IsT0FBT2Q7b0RBQ1BrQyxVQUFVLENBQUN0QixJQUFNO3dEQUNmWCxhQUFha0MsT0FBT3ZCLEVBQUVHLE1BQU0sQ0FBQ0QsS0FBSztvREFDcEM7Ozs7Ozs4REFFRiw4REFBQ3ZCLGtEQUFTQTtvREFDUnNCLE1BQUs7b0RBQ0xrQixPQUFNO29EQUNOQyxhQUFZO29EQUNaQyxNQUFLO29EQUNMbkIsT0FBT1o7b0RBQ1BnQyxVQUFVLENBQUN0QixJQUFNO3dEQUNmVCxnQkFBZ0JnQyxPQUFPdkIsRUFBRUcsTUFBTSxDQUFDRCxLQUFLO29EQUN2Qzs7Ozs7Ozs7Ozs7O3NEQUdKLDhEQUFDUzs0Q0FBSUMsV0FBVTs7OERBQ2IsOERBQUNZO29EQUNDQyxNQUFLO29EQUNMQyxTQUFTckI7b0RBQ1RPLFdBQVU7OERBQ1g7Ozs7Ozs4REFJRCw4REFBQ1k7b0RBQ0NDLE1BQUs7b0RBQ0xDLFNBQVN0QjtvREFDVFEsV0FBVTtvREFDVmUsVUFBVSxDQUFDbkI7OERBQ1o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQU9ULDhEQUFDRzt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ2dCOzRCQUFHaEIsV0FBVTtzQ0FDWiw0RUFBQ2lCO2dDQUFRVixPQUFNO2dDQUFTakIsT0FBT0w7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUI3QyxDQUFDO0dBeEh1QmI7O1FBQ0lSLGtEQUFjQTtRQUNyQkMsdURBQW1CQTtRQXVCbEJHLGtEQUFjQTs7O0tBekJaSTtBQTBIeEIsU0FBUzZDLFFBQVEsS0FBOEIsRUFBRTtRQUFoQyxFQUFFVixNQUFLLEVBQUVqQixNQUFLLEVBQWdCLEdBQTlCO0lBQ2YscUJBQ0UsOERBQUNTO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDa0I7Z0JBQUdsQixXQUFVOzBCQUFxQ087Ozs7OzswQkFDbkQsOERBQUNZO2dCQUFHbkIsV0FBVTswQkFDWC9CLGtEQUFVQSxDQUFDcUI7Ozs7Ozs7Ozs7OztBQUlwQjtNQVRTMkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGF5b3V0LnRzeD8zZDQwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyBDaGFuZ2VFdmVudCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgdXNlUmVjb2lsU3RhdGUsIHVzZVJlc2V0UmVjb2lsU3RhdGUgfSBmcm9tIFwicmVjb2lsXCI7XG5cbmltcG9ydCB7XG4gIEJvdHRvbUdyYWRpZW50LFxuICBFTUksXG4gIExheW91dCxcbiAgTG9hblJlcGF5bWVudFNjaGVkdWxlVGFibGUsXG4gIFBheW1lbnRCcmVha1VwLFxuICBUZXh0RmllbGQsXG59IGZyb20gXCJAL2NvbXBvbmVudHNcIjtcbmltcG9ydCB7IHVzZVJlY29pbFZhbHVlIH0gZnJvbSBcInJlY29pbFwiO1xuXG5pbXBvcnQgeyBPdXRjb21lUHJvcHMgfSBmcm9tIFwiQC90eXBlc1wiO1xuaW1wb3J0IHsgdG9DdXJyZW5jeSB9IGZyb20gXCJAL3V0aWxzXCI7XG5cbmltcG9ydCB7IENVUlJFTkNZX1NZTUJPTCB9IGZyb20gXCJAL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgY2FsY3VsYXRlRW1pT3V0Y29tZSwgdmFsaWRhdGVGb3JtIH0gZnJvbSBcIkAvdXRpbHNcIjtcblxuaW1wb3J0IHN0YXRlQXRvbSBmcm9tIFwiQC9hdG9tcy9zdGF0ZUF0b21cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VSZWNvaWxTdGF0ZShzdGF0ZUF0b20pO1xuICBjb25zdCByZXNldFN0YXRlID0gdXNlUmVzZXRSZWNvaWxTdGF0ZShzdGF0ZUF0b20pO1xuICBjb25zdCBbbmV0SW5jb21lLCBzZXROZXRJbmNvbWVdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtkaXNjb3VudFJhdGUsIHNldERpc2NvdW50UmF0ZV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgeyBsb2FuQW1vdW50LCBpbnRlcmVzdFJhdGUsIGxvYW5UZW51cmUsIHByZXBheW1lbnRzLCBlcnJvcnMgfSA9IHN0YXRlO1xuICBjb25zdCBbcmVzdWx0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IG9uSW5wdXRDaGFuZ2UgPSAoZTogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldDtcblxuICAgIHNldFN0YXRlKHsgLi4uc3RhdGUsIFtuYW1lXTogdmFsdWUgfSk7XG4gIH07XG4gIGNvbnN0IG9ucmVzZXRTdGF0ZSA9ICgpID0+IHtcbiAgICBzZXREaXNjb3VudFJhdGUoMCk7XG4gICAgc2V0TmV0SW5jb21lKDApO1xuICAgIHNldFJlc3VsdCgwKTtcbiAgfTtcbiAgY29uc3Qgb25DYWxjdWxhdGUgPSAoKSA9PiB7XG4gICAgaWYgKG5ldEluY29tZSAhPT0gMCAmJiBkaXNjb3VudFJhdGUgIT09IDAgJiYgdGltZSAhPT0gMCkge1xuICAgICAgY29uc3QgZGF0YSA9IG5ldEluY29tZSAvIGRpc2NvdW50UmF0ZTtcbiAgICAgIHNldFJlc3VsdChkYXRhKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVzZXRTdGF0dXMgPSBuZXRJbmNvbWUgIT09IDAgfHwgZGlzY291bnRSYXRlICE9PSAwIHx8IHRpbWUgIT09IDA7XG4gIGNvbnN0IHsgb3V0Y29tZSB9ID0gdXNlUmVjb2lsVmFsdWUoc3RhdGVBdG9tKTtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPG1haW4+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgcHgtNiBsZzpweC04XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIG1heC13LTJ4bCBweS00IHNtOnB5LTggbGc6cHktMTJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIHNtOm1iLTggc206ZmxleCBzbTpqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHJvdW5kZWQtZnVsbCBweS0xIHB4LTMgdGV4dC1zbSBsZWFkaW5nLTYgdGV4dC1ncmF5LTYwMCByaW5nLTEgcmluZy1ncmF5LTkwMC8xMCBob3ZlcjpyaW5nLWdyYXktOTAwLzIwXCI+XG4gICAgICAgICAgICAgICAgUHJvamVjdFxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtNHhsIGZvbnQtYm9sZCB0cmFja2luZy10aWdodCB0ZXh0LWdyYXktOTAwIHNtOnRleHQtNnhsXCI+XG4gICAgICAgICAgICAgIFBBWU9VVCBDYWxjdWxhdG9yXG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtNiB0ZXh0LWxnIGxlYWRpbmctOCB0ZXh0LWdyYXktNjAwXCI+XG4gICAgICAgICAgICAgIEFuIE5QViAoTmV0IFByZXNlbnQgVmFsdWUpIGNhbGN1bGF0b3IgaXMgYSBmaW5hbmNpYWwgdG9vbCB1c2VkIHRvXG4gICAgICAgICAgICAgIGVzdGltYXRlIHRoZSBwcmVzZW50IHZhbHVlIG9mIGFsbCBmdXR1cmUgY2FzaCBmbG93cyBnZW5lcmF0ZWQgYnlcbiAgICAgICAgICAgICAgYW4gaW52ZXN0bWVudCBvciBwcm9qZWN0LCBjb25zaWRlcmluZyB0aGUgdGltZSB2YWx1ZSBvZiBtb25leS4gSXRcbiAgICAgICAgICAgICAgdGFrZXMgaW50byBhY2NvdW50IGZhY3RvcnMgc3VjaCBhcyB0aGUgaW5pdGlhbCBpbnZlc3RtZW50LFxuICAgICAgICAgICAgICBleHBlY3RlZCBjYXNoIGluZmxvd3MsIGRpc2NvdW50IHJhdGUsIGFuZCB0aGUgZHVyYXRpb24gb2YgdGhlXG4gICAgICAgICAgICAgIGludmVzdG1lbnQgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGludmVzdG1lbnQgaXMgZXhwZWN0ZWQgdG9cbiAgICAgICAgICAgICAgZ2VuZXJhdGUgcG9zaXRpdmUgb3IgbmVnYXRpdmUgcmV0dXJucyB3aGVuIGRpc2NvdW50ZWQgYmFjayB0byB0aGVcbiAgICAgICAgICAgICAgcHJlc2VudC5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktNiBweC02IHNtOnB5LTEyIGxnOnB4LThcIj5cbiAgICAgICAgICAgICAgPGZvcm1cbiAgICAgICAgICAgICAgICBhY3Rpb249XCIjXCJcbiAgICAgICAgICAgICAgICBtZXRob2Q9XCJwb3N0XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJteC1hdXRvIG1heC13LXhsXCJcbiAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIGdhcC15LTYgZ2FwLXgtOCBzbTpncmlkLWNvbHMtMlwiPlxuICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmV0SW5jb21lXCJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDYXBpdGFsIENvc3QoJClcIlxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjUwLDAwLDAwMFwiXG4gICAgICAgICAgICAgICAgICAgIHVuaXQ9e0NVUlJFTkNZX1NZTUJPTH1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25ldEluY29tZX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgc2V0TmV0SW5jb21lKE51bWJlcihlLnRhcmdldC52YWx1ZSkpO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRpc2NvdW50UmF0ZVwiXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTmV0IEluY29tZSBwZXIgTW9udGggKCQvTW9udGgpXCJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCI5XCJcbiAgICAgICAgICAgICAgICAgICAgdW5pdD1cIiVcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGlzY291bnRSYXRlfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBzZXREaXNjb3VudFJhdGUoTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBnYXAtNCBtdC0xMCBsZzpncmlkLWNvbHMtMlwiPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25DYWxjdWxhdGV9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIENhbGN1bGF0ZVxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29ucmVzZXRTdGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXJlc2V0U3RhdHVzfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBSZXNldFxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBtYXgtdy03eGwgcHgtNiBsZzpweC04IHB5LTEgc206cHktM1wiPlxuICAgICAgICAgICAgPGRsIGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgZ2FwLXktMTYgZ2FwLXgtNiB0ZXh0LWNlbnRlciBsZzpncmlkLWNvbHMtMVwiPlxuICAgICAgICAgICAgICA8T3V0Y29tZSBsYWJlbD1cIlBBWU9VVFwiIHZhbHVlPXtyZXN1bHR9IC8+XG4gICAgICAgICAgICAgIHsvKiA8T3V0Y29tZVxuICAgICAgICAgICAgICAgIGxhYmVsPVwiVG90YWwgSW50ZXJlc3QgUGF5YWJsZVwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e291dGNvbWU/LnRvdGFsSW50ZXJlc3RQYXlhYmxlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8T3V0Y29tZVxuICAgICAgICAgICAgICAgIGxhYmVsPVwiUHJpbmNpcGFsIEFtb3VudFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e291dGNvbWU/LnByaW5jaXBhbEFtb3VudH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPE91dGNvbWVcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlRvdGFsIFBheW1lbnQgKFByaW5jaXBhbCArIEludGVyZXN0KVwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e291dGNvbWU/LnRvdGFsUGF5bWVudH1cbiAgICAgICAgICAgICAgLz4gKi99XG4gICAgICAgICAgICA8L2RsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cblxuZnVuY3Rpb24gT3V0Y29tZSh7IGxhYmVsLCB2YWx1ZSB9OiBPdXRjb21lUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gZmxleCBpdGVtcy1jZW50ZXIgbWF4LXcteHMgZmxleC1jb2wgZ2FwLXktNFwiPlxuICAgICAgPGR0IGNsYXNzTmFtZT1cInRleHQtYmFzZSBsZWFkaW5nLTcgdGV4dC1ncmF5LTYwMFwiPntsYWJlbH08L2R0PlxuICAgICAgPGRkIGNsYXNzTmFtZT1cIm9yZGVyLWZpcnN0IHRleHQtM3hsIGZvbnQtc2VtaWJvbGQgdHJhY2tpbmctdGlnaHQgdGV4dC1ncmF5LTkwMCBzbTp0ZXh0LTR4bFwiPlxuICAgICAgICB7dG9DdXJyZW5jeSh2YWx1ZSl9XG4gICAgICA8L2RkPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlUmVjb2lsU3RhdGUiLCJ1c2VSZXNldFJlY29pbFN0YXRlIiwiTGF5b3V0IiwiVGV4dEZpZWxkIiwidXNlUmVjb2lsVmFsdWUiLCJ0b0N1cnJlbmN5IiwiQ1VSUkVOQ1lfU1lNQk9MIiwic3RhdGVBdG9tIiwiSG9tZSIsInN0YXRlIiwic2V0U3RhdGUiLCJyZXNldFN0YXRlIiwibmV0SW5jb21lIiwic2V0TmV0SW5jb21lIiwiZGlzY291bnRSYXRlIiwic2V0RGlzY291bnRSYXRlIiwibG9hbkFtb3VudCIsImludGVyZXN0UmF0ZSIsImxvYW5UZW51cmUiLCJwcmVwYXltZW50cyIsImVycm9ycyIsInJlc3VsdCIsInNldFJlc3VsdCIsIm9uSW5wdXRDaGFuZ2UiLCJlIiwibmFtZSIsInZhbHVlIiwidGFyZ2V0Iiwib25yZXNldFN0YXRlIiwib25DYWxjdWxhdGUiLCJ0aW1lIiwiZGF0YSIsInJlc2V0U3RhdHVzIiwib3V0Y29tZSIsIm1haW4iLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInAiLCJmb3JtIiwiYWN0aW9uIiwibWV0aG9kIiwiYXV0b0NvbXBsZXRlIiwibGFiZWwiLCJwbGFjZWhvbGRlciIsInVuaXQiLCJvbkNoYW5nZSIsIk51bWJlciIsImJ1dHRvbiIsInR5cGUiLCJvbkNsaWNrIiwiZGlzYWJsZWQiLCJkbCIsIk91dGNvbWUiLCJkdCIsImRkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/payout.tsx\n"));

/***/ })

});