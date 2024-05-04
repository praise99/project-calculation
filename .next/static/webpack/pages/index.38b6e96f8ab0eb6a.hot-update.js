"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/index.js\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components */ \"./components/index.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils */ \"./utils/index.ts\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/constants */ \"./constants/index.ts\");\n/* harmony import */ var _atoms_stateAtom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/atoms/stateAtom */ \"./atoms/stateAtom.ts\");\n\nvar _s = $RefreshSig$();\n\"use client\";\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [state, setState] = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState)(_atoms_stateAtom__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n    const resetState = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useResetRecoilState)(_atoms_stateAtom__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n    const [netIncome, setNetIncome] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [discountRate, setDiscountRate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [time, setTime] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const { loanAmount , interestRate , loanTenure , prepayments , errors  } = state;\n    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const onInputChange = (e)=>{\n        const { name , value  } = e.target;\n        setState({\n            ...state,\n            [name]: value\n        });\n    };\n    const onresetState = ()=>{\n        setDiscountRate(0);\n        setNetIncome(0);\n        setTime(0);\n        setResult(0);\n    };\n    const onCalculate = ()=>{\n        if (netIncome !== 0 && discountRate !== 0 && time !== 0) {\n            const data = netIncome / Math.pow(1 + discountRate, time);\n            setResult(data);\n        }\n    };\n    const resetStatus = netIncome !== 0 || discountRate !== 0 || time !== 0;\n    const { outcome  } = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValue)(_atoms_stateAtom__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n    const tabs = [\n        {\n            title: \"Tab 1\",\n            content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"Content for Tab 1\"\n            }, void 0, false, {\n                fileName: \"/Users/oluwabukunmi/Documents/GitHub/project-calculation/pages/index.tsx\",\n                lineNumber: 56,\n                columnNumber: 16\n            }, this)\n        },\n        {\n            title: \"Tab 2\",\n            content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"Content for Tab 2\"\n            }, void 0, false, {\n                fileName: \"/Users/oluwabukunmi/Documents/GitHub/project-calculation/pages/index.tsx\",\n                lineNumber: 60,\n                columnNumber: 16\n            }, this)\n        },\n        {\n            title: \"Tab 3\",\n            content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"Content for Tab 3\"\n            }, void 0, false, {\n                fileName: \"/Users/oluwabukunmi/Documents/GitHub/project-calculation/pages/index.tsx\",\n                lineNumber: 64,\n                columnNumber: 16\n            }, this)\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.Layout, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative px-6 lg:px-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mx-auto max-w-2xl py-4 sm:py-8 lg:py-12\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"hidden sm:mb-8 sm:flex sm:justify-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"relative rounded-full py-1 px-3 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20\",\n                                    children: \"Project\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/oluwabukunmi/Documents/GitHub/project-calculation/pages/index.tsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/oluwabukunmi/Documents/GitHub/project-calculation/pages/index.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Tabs, {\n                                tabs: tabs\n                            }, void 0, false, {\n                                fileName: \"/Users/oluwabukunmi/Documents/GitHub/project-calculation/pages/index.tsx\",\n                                lineNumber: 77,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl\",\n                                children: \"Production Rate Calculator\"\n                            }, void 0, false, {\n                                fileName: \"/Users/oluwabukunmi/Documents/GitHub/project-calculation/pages/index.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-center mt-6 text-lg leading-8 text-gray-600\",\n                                children: \"An NPV (Net Present Value) calculator is a financial tool used to estimate the present value of all future cash flows generated by an investment or project, considering the time value of money. It takes into account factors such as the initial investment, expected cash inflows, discount rate, and the duration of the investment to determine whether the investment is expected to generate positive or negative returns when discounted back to the present.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/oluwabukunmi/Documents/GitHub/project-calculation/pages/index.tsx\",\n                                lineNumber: 81,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"py-6 px-6 sm:py-12 lg:px-8\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                    action: \"#\",\n                                    method: \"post\",\n                                    className: \"mx-auto max-w-xl\",\n                                    autoComplete: \"off\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.TextField, {\n                                                    name: \"netIncome\",\n                                                    label: \"Net Income For Time Period T\",\n                                                    placeholder: \"50,00,000\",\n                                                    unit: _constants__WEBPACK_IMPORTED_MODULE_5__.CURRENCY_SYMBOL,\n                                                    value: netIncome,\n                                                    onChange: (e)=>{\n                                                        setNetIncome(Number(e.target.value));\n                                                    }\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/oluwabukunmi/Documents/GitHub/project-calculation/pages/index.tsx\",\n                                                    lineNumber: 99,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.TextField, {\n                                                    name: \"discountRate\",\n                                                    label: \"Discount Rate\",\n                                                    placeholder: \"9\",\n                                                    unit: \"%\",\n                                                    value: discountRate,\n                                                    onChange: (e)=>{\n                                                        setDiscountRate(Number(e.target.value));\n                                                    }\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/oluwabukunmi/Documents/GitHub/project-calculation/pages/index.tsx\",\n                                                    lineNumber: 109,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.TextField, {\n                                                    name: \"time\",\n                                                    label: \"Time From Project Start Date\",\n                                                    placeholder: \"20\",\n                                                    unit: \"Yr\",\n                                                    value: time,\n                                                    onChange: (e)=>{\n                                                        setTime(Number(e.target.value));\n                                                    }\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/oluwabukunmi/Documents/GitHub/project-calculation/pages/index.tsx\",\n                                                    lineNumber: 119,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/oluwabukunmi/Documents/GitHub/project-calculation/pages/index.tsx\",\n                                            lineNumber: 98,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"grid grid-cols-1 gap-4 mt-10 lg:grid-cols-2\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    type: \"button\",\n                                                    onClick: onCalculate,\n                                                    className: \"btn btn-primary\",\n                                                    children: \"Calculate\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/oluwabukunmi/Documents/GitHub/project-calculation/pages/index.tsx\",\n                                                    lineNumber: 132,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    type: \"button\",\n                                                    onClick: onresetState,\n                                                    className: \"btn btn-secondary\",\n                                                    disabled: !resetStatus,\n                                                    children: \"Reset\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/oluwabukunmi/Documents/GitHub/project-calculation/pages/index.tsx\",\n                                                    lineNumber: 140,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/oluwabukunmi/Documents/GitHub/project-calculation/pages/index.tsx\",\n                                            lineNumber: 131,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/oluwabukunmi/Documents/GitHub/project-calculation/pages/index.tsx\",\n                                    lineNumber: 92,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/oluwabukunmi/Documents/GitHub/project-calculation/pages/index.tsx\",\n                                lineNumber: 91,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/oluwabukunmi/Documents/GitHub/project-calculation/pages/index.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mx-auto max-w-7xl px-6 lg:px-8 py-1 sm:py-3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dl\", {\n                            className: \"grid grid-cols-1 gap-y-16 gap-x-6 text-center lg:grid-cols-1\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Outcome, {\n                                label: \"NPV\",\n                                value: result\n                            }, void 0, false, {\n                                fileName: \"/Users/oluwabukunmi/Documents/GitHub/project-calculation/pages/index.tsx\",\n                                lineNumber: 154,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/oluwabukunmi/Documents/GitHub/project-calculation/pages/index.tsx\",\n                            lineNumber: 153,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/oluwabukunmi/Documents/GitHub/project-calculation/pages/index.tsx\",\n                        lineNumber: 152,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/oluwabukunmi/Documents/GitHub/project-calculation/pages/index.tsx\",\n                lineNumber: 70,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/oluwabukunmi/Documents/GitHub/project-calculation/pages/index.tsx\",\n            lineNumber: 69,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/oluwabukunmi/Documents/GitHub/project-calculation/pages/index.tsx\",\n        lineNumber: 68,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"vt7n6PwLb/o+j8QXG77VLhGjGeo=\", false, function() {\n    return [\n        recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState,\n        recoil__WEBPACK_IMPORTED_MODULE_2__.useResetRecoilState,\n        recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValue\n    ];\n});\n_c = Home;\nfunction Outcome(param) {\n    let { label , value  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mx-auto flex items-center max-w-xs flex-col gap-y-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dt\", {\n                className: \"text-base leading-7 text-gray-600\",\n                children: label\n            }, void 0, false, {\n                fileName: \"/Users/oluwabukunmi/Documents/GitHub/project-calculation/pages/index.tsx\",\n                lineNumber: 178,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dd\", {\n                className: \"order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl\",\n                children: (0,_utils__WEBPACK_IMPORTED_MODULE_4__.toCurrency)(value)\n            }, void 0, false, {\n                fileName: \"/Users/oluwabukunmi/Documents/GitHub/project-calculation/pages/index.tsx\",\n                lineNumber: 179,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/oluwabukunmi/Documents/GitHub/project-calculation/pages/index.tsx\",\n        lineNumber: 177,\n        columnNumber: 5\n    }, this);\n}\n_c1 = Outcome;\nvar _c, _c1;\n$RefreshReg$(_c, \"Home\");\n$RefreshReg$(_c1, \"Outcome\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IENoYW5nZUV2ZW50LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyB1c2VSZWNvaWxTdGF0ZSwgdXNlUmVzZXRSZWNvaWxTdGF0ZSB9IGZyb20gXCJyZWNvaWxcIjtcblxuaW1wb3J0IHtcbiAgQm90dG9tR3JhZGllbnQsXG4gIEVNSSxcbiAgTGF5b3V0LFxuICBMb2FuUmVwYXltZW50U2NoZWR1bGVUYWJsZSxcbiAgUGF5bWVudEJyZWFrVXAsXG4gIFRleHRGaWVsZCxcbn0gZnJvbSBcIkAvY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgdXNlUmVjb2lsVmFsdWUgfSBmcm9tIFwicmVjb2lsXCI7XG5cbmltcG9ydCB7IE91dGNvbWVQcm9wcyB9IGZyb20gXCJAL3R5cGVzXCI7XG5pbXBvcnQgeyB0b0N1cnJlbmN5IH0gZnJvbSBcIkAvdXRpbHNcIjtcblxuaW1wb3J0IHsgQ1VSUkVOQ1lfU1lNQk9MIH0gZnJvbSBcIkAvY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBjYWxjdWxhdGVFbWlPdXRjb21lLCB2YWxpZGF0ZUZvcm0gfSBmcm9tIFwiQC91dGlsc1wiO1xuXG5pbXBvcnQgc3RhdGVBdG9tIGZyb20gXCJAL2F0b21zL3N0YXRlQXRvbVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVJlY29pbFN0YXRlKHN0YXRlQXRvbSk7XG4gIGNvbnN0IHJlc2V0U3RhdGUgPSB1c2VSZXNldFJlY29pbFN0YXRlKHN0YXRlQXRvbSk7XG4gIGNvbnN0IFtuZXRJbmNvbWUsIHNldE5ldEluY29tZV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2Rpc2NvdW50UmF0ZSwgc2V0RGlzY291bnRSYXRlXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbdGltZSwgc2V0VGltZV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgeyBsb2FuQW1vdW50LCBpbnRlcmVzdFJhdGUsIGxvYW5UZW51cmUsIHByZXBheW1lbnRzLCBlcnJvcnMgfSA9IHN0YXRlO1xuICBjb25zdCBbcmVzdWx0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IG9uSW5wdXRDaGFuZ2UgPSAoZTogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldDtcblxuICAgIHNldFN0YXRlKHsgLi4uc3RhdGUsIFtuYW1lXTogdmFsdWUgfSk7XG4gIH07XG4gIGNvbnN0IG9ucmVzZXRTdGF0ZSA9ICgpID0+IHtcbiAgICBzZXREaXNjb3VudFJhdGUoMCk7XG4gICAgc2V0TmV0SW5jb21lKDApO1xuICAgIHNldFRpbWUoMCk7XG4gICAgc2V0UmVzdWx0KDApO1xuICB9O1xuICBjb25zdCBvbkNhbGN1bGF0ZSA9ICgpID0+IHtcbiAgICBpZiAobmV0SW5jb21lICE9PSAwICYmIGRpc2NvdW50UmF0ZSAhPT0gMCAmJiB0aW1lICE9PSAwKSB7XG4gICAgICBjb25zdCBkYXRhID0gbmV0SW5jb21lIC8gTWF0aC5wb3coMSArIGRpc2NvdW50UmF0ZSwgdGltZSk7XG4gICAgICBzZXRSZXN1bHQoZGF0YSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlc2V0U3RhdHVzID0gbmV0SW5jb21lICE9PSAwIHx8IGRpc2NvdW50UmF0ZSAhPT0gMCB8fCB0aW1lICE9PSAwO1xuICBjb25zdCB7IG91dGNvbWUgfSA9IHVzZVJlY29pbFZhbHVlKHN0YXRlQXRvbSk7XG4gIGNvbnN0IHRhYnMgPSBbXG4gICAge1xuICAgICAgdGl0bGU6IFwiVGFiIDFcIixcbiAgICAgIGNvbnRlbnQ6IDxkaXY+Q29udGVudCBmb3IgVGFiIDE8L2Rpdj4sXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJUYWIgMlwiLFxuICAgICAgY29udGVudDogPGRpdj5Db250ZW50IGZvciBUYWIgMjwvZGl2PixcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIlRhYiAzXCIsXG4gICAgICBjb250ZW50OiA8ZGl2PkNvbnRlbnQgZm9yIFRhYiAzPC9kaXY+LFxuICAgIH0sXG4gIF07XG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxtYWluPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHB4LTYgbGc6cHgtOFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBtYXgtdy0yeGwgcHktNCBzbTpweS04IGxnOnB5LTEyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBzbTptYi04IHNtOmZsZXggc206anVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSByb3VuZGVkLWZ1bGwgcHktMSBweC0zIHRleHQtc20gbGVhZGluZy02IHRleHQtZ3JheS02MDAgcmluZy0xIHJpbmctZ3JheS05MDAvMTAgaG92ZXI6cmluZy1ncmF5LTkwMC8yMFwiPlxuICAgICAgICAgICAgICAgIFByb2plY3RcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxUYWJzIHRhYnM9e3RhYnN9IC8+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC00eGwgZm9udC1ib2xkIHRyYWNraW5nLXRpZ2h0IHRleHQtZ3JheS05MDAgc206dGV4dC02eGxcIj5cbiAgICAgICAgICAgICAgUHJvZHVjdGlvbiBSYXRlIENhbGN1bGF0b3JcbiAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtdC02IHRleHQtbGcgbGVhZGluZy04IHRleHQtZ3JheS02MDBcIj5cbiAgICAgICAgICAgICAgQW4gTlBWIChOZXQgUHJlc2VudCBWYWx1ZSkgY2FsY3VsYXRvciBpcyBhIGZpbmFuY2lhbCB0b29sIHVzZWQgdG9cbiAgICAgICAgICAgICAgZXN0aW1hdGUgdGhlIHByZXNlbnQgdmFsdWUgb2YgYWxsIGZ1dHVyZSBjYXNoIGZsb3dzIGdlbmVyYXRlZCBieVxuICAgICAgICAgICAgICBhbiBpbnZlc3RtZW50IG9yIHByb2plY3QsIGNvbnNpZGVyaW5nIHRoZSB0aW1lIHZhbHVlIG9mIG1vbmV5LiBJdFxuICAgICAgICAgICAgICB0YWtlcyBpbnRvIGFjY291bnQgZmFjdG9ycyBzdWNoIGFzIHRoZSBpbml0aWFsIGludmVzdG1lbnQsXG4gICAgICAgICAgICAgIGV4cGVjdGVkIGNhc2ggaW5mbG93cywgZGlzY291bnQgcmF0ZSwgYW5kIHRoZSBkdXJhdGlvbiBvZiB0aGVcbiAgICAgICAgICAgICAgaW52ZXN0bWVudCB0byBkZXRlcm1pbmUgd2hldGhlciB0aGUgaW52ZXN0bWVudCBpcyBleHBlY3RlZCB0b1xuICAgICAgICAgICAgICBnZW5lcmF0ZSBwb3NpdGl2ZSBvciBuZWdhdGl2ZSByZXR1cm5zIHdoZW4gZGlzY291bnRlZCBiYWNrIHRvIHRoZVxuICAgICAgICAgICAgICBwcmVzZW50LlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS02IHB4LTYgc206cHktMTIgbGc6cHgtOFwiPlxuICAgICAgICAgICAgICA8Zm9ybVxuICAgICAgICAgICAgICAgIGFjdGlvbj1cIiNcIlxuICAgICAgICAgICAgICAgIG1ldGhvZD1cInBvc3RcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm14LWF1dG8gbWF4LXcteGxcIlxuICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgZ2FwLXktNiBnYXAteC04IHNtOmdyaWQtY29scy0yXCI+XG4gICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuZXRJbmNvbWVcIlxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk5ldCBJbmNvbWUgRm9yIFRpbWUgUGVyaW9kIFRcIlxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjUwLDAwLDAwMFwiXG4gICAgICAgICAgICAgICAgICAgIHVuaXQ9e0NVUlJFTkNZX1NZTUJPTH1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25ldEluY29tZX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgc2V0TmV0SW5jb21lKE51bWJlcihlLnRhcmdldC52YWx1ZSkpO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRpc2NvdW50UmF0ZVwiXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRGlzY291bnQgUmF0ZVwiXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiOVwiXG4gICAgICAgICAgICAgICAgICAgIHVuaXQ9XCIlXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Rpc2NvdW50UmF0ZX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgc2V0RGlzY291bnRSYXRlKE51bWJlcihlLnRhcmdldC52YWx1ZSkpO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRpbWVcIlxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlRpbWUgRnJvbSBQcm9qZWN0IFN0YXJ0IERhdGVcIlxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjIwXCJcbiAgICAgICAgICAgICAgICAgICAgdW5pdD1cIllyXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RpbWV9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWUoTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIGdhcC00IG10LTEwIGxnOmdyaWQtY29scy0yXCI+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNhbGN1bGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgQ2FsY3VsYXRlXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25yZXNldFN0YXRlfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshcmVzZXRTdGF0dXN9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIFJlc2V0XG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIG1heC13LTd4bCBweC02IGxnOnB4LTggcHktMSBzbTpweS0zXCI+XG4gICAgICAgICAgICA8ZGwgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBnYXAteS0xNiBnYXAteC02IHRleHQtY2VudGVyIGxnOmdyaWQtY29scy0xXCI+XG4gICAgICAgICAgICAgIDxPdXRjb21lIGxhYmVsPVwiTlBWXCIgdmFsdWU9e3Jlc3VsdH0gLz5cbiAgICAgICAgICAgICAgey8qIDxPdXRjb21lXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJUb3RhbCBJbnRlcmVzdCBQYXlhYmxlXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17b3V0Y29tZT8udG90YWxJbnRlcmVzdFBheWFibGV9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxPdXRjb21lXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJQcmluY2lwYWwgQW1vdW50XCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17b3V0Y29tZT8ucHJpbmNpcGFsQW1vdW50fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8T3V0Y29tZVxuICAgICAgICAgICAgICAgIGxhYmVsPVwiVG90YWwgUGF5bWVudCAoUHJpbmNpcGFsICsgSW50ZXJlc3QpXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17b3V0Y29tZT8udG90YWxQYXltZW50fVxuICAgICAgICAgICAgICAvPiAqL31cbiAgICAgICAgICAgIDwvZGw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuXG5mdW5jdGlvbiBPdXRjb21lKHsgbGFiZWwsIHZhbHVlIH06IE91dGNvbWVQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBmbGV4IGl0ZW1zLWNlbnRlciBtYXgtdy14cyBmbGV4LWNvbCBnYXAteS00XCI+XG4gICAgICA8ZHQgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGxlYWRpbmctNyB0ZXh0LWdyYXktNjAwXCI+e2xhYmVsfTwvZHQ+XG4gICAgICA8ZGQgY2xhc3NOYW1lPVwib3JkZXItZmlyc3QgdGV4dC0zeGwgZm9udC1zZW1pYm9sZCB0cmFja2luZy10aWdodCB0ZXh0LWdyYXktOTAwIHNtOnRleHQtNHhsXCI+XG4gICAgICAgIHt0b0N1cnJlbmN5KHZhbHVlKX1cbiAgICAgIDwvZGQ+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VSZWNvaWxTdGF0ZSIsInVzZVJlc2V0UmVjb2lsU3RhdGUiLCJMYXlvdXQiLCJUZXh0RmllbGQiLCJ1c2VSZWNvaWxWYWx1ZSIsInRvQ3VycmVuY3kiLCJDVVJSRU5DWV9TWU1CT0wiLCJzdGF0ZUF0b20iLCJIb21lIiwic3RhdGUiLCJzZXRTdGF0ZSIsInJlc2V0U3RhdGUiLCJuZXRJbmNvbWUiLCJzZXROZXRJbmNvbWUiLCJkaXNjb3VudFJhdGUiLCJzZXREaXNjb3VudFJhdGUiLCJ0aW1lIiwic2V0VGltZSIsImxvYW5BbW91bnQiLCJpbnRlcmVzdFJhdGUiLCJsb2FuVGVudXJlIiwicHJlcGF5bWVudHMiLCJlcnJvcnMiLCJyZXN1bHQiLCJzZXRSZXN1bHQiLCJvbklucHV0Q2hhbmdlIiwiZSIsIm5hbWUiLCJ2YWx1ZSIsInRhcmdldCIsIm9ucmVzZXRTdGF0ZSIsIm9uQ2FsY3VsYXRlIiwiZGF0YSIsIk1hdGgiLCJwb3ciLCJyZXNldFN0YXR1cyIsIm91dGNvbWUiLCJ0YWJzIiwidGl0bGUiLCJjb250ZW50IiwiZGl2IiwibWFpbiIsImNsYXNzTmFtZSIsIlRhYnMiLCJoMSIsInAiLCJmb3JtIiwiYWN0aW9uIiwibWV0aG9kIiwiYXV0b0NvbXBsZXRlIiwibGFiZWwiLCJwbGFjZWhvbGRlciIsInVuaXQiLCJvbkNoYW5nZSIsIk51bWJlciIsImJ1dHRvbiIsInR5cGUiLCJvbkNsaWNrIiwiZGlzYWJsZWQiLCJkbCIsIk91dGNvbWUiLCJkdCIsImRkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});