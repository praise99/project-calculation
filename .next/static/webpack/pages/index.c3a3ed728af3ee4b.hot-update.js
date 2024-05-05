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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/index.js\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components */ \"./components/index.ts\");\n/* harmony import */ var _atoms_stateAtom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/atoms/stateAtom */ \"./atoms/stateAtom.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\"use client\";\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [state, setState] = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState)(_atoms_stateAtom__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n    const resetState = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useResetRecoilState)(_atoms_stateAtom__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n    const [netIncome, setNetIncome] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [discountRate, setDiscountRate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [time, setTime] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const { loanAmount , interestRate , loanTenure , prepayments , errors  } = state;\n    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const onInputChange = (e)=>{\n        const { name , value  } = e.target;\n        setState({\n            ...state,\n            [name]: value\n        });\n    };\n    const onresetState = ()=>{\n        setDiscountRate(0);\n        setNetIncome(0);\n        setTime(0);\n        setResult(0);\n    };\n    const onCalculate = ()=>{\n        if (netIncome !== 0 && discountRate !== 0 && time !== 0) {\n            const data = netIncome / Math.pow(1 + discountRate, time);\n            setResult(data);\n        }\n    };\n    const resetStatus = netIncome !== 0 || discountRate !== 0 || time !== 0;\n    const { outcome  } = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValue)(_atoms_stateAtom__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n    const tabs = [\n        {\n            title: \"Exponential Decline\",\n            content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"Content for Tab 1\"\n            }, void 0, false, {\n                fileName: \"/Users/oluwabukunmi/Documents/GitHub/project-calculation/pages/index.tsx\",\n                lineNumber: 57,\n                columnNumber: 16\n            }, this)\n        },\n        {\n            title: \"Harmonic Decline\",\n            content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"Content for Tab 2\"\n            }, void 0, false, {\n                fileName: \"/Users/oluwabukunmi/Documents/GitHub/project-calculation/pages/index.tsx\",\n                lineNumber: 61,\n                columnNumber: 16\n            }, this)\n        },\n        {\n            title: \"Hyperbolic Decline\",\n            content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"Content for Tab 3\"\n            }, void 0, false, {\n                fileName: \"/Users/oluwabukunmi/Documents/GitHub/project-calculation/pages/index.tsx\",\n                lineNumber: 65,\n                columnNumber: 16\n            }, this)\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.Layout, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative px-6 lg:px-8\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mx-auto max-w-2xl py-4 sm:py-8 lg:py-12\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl\",\n                            children: \"Oil well Economic Tool\"\n                        }, void 0, false, {\n                            fileName: \"/Users/oluwabukunmi/Documents/GitHub/project-calculation/pages/index.tsx\",\n                            lineNumber: 73,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-center mt-6 text-lg leading-8 text-gray-600\",\n                            children: \"An NPV (Net Present Value) calculator is a financial tool used to estimate the present value of all future cash flows generated by an investment or project, considering the time value of money. It takes into account factors such as the initial investment, expected cash inflows, discount rate, and the duration of the investment to determine whether the investment is expected to generate positive or negative returns when discounted back to the present.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/oluwabukunmi/Documents/GitHub/project-calculation/pages/index.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center justify-center w-full\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                href: \"/production-calculator\",\n                                className: \"rounded-xl border border-solid border-sky-500 bg-background-button-secondary flex items-center justify-center py-2 px-4 font-medium text-captionL text-text-base-primary mt-5\",\n                                children: \"Go to Calculator\"\n                            }, void 0, false, {\n                                fileName: \"/Users/oluwabukunmi/Documents/GitHub/project-calculation/pages/index.tsx\",\n                                lineNumber: 87,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/oluwabukunmi/Documents/GitHub/project-calculation/pages/index.tsx\",\n                            lineNumber: 86,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/oluwabukunmi/Documents/GitHub/project-calculation/pages/index.tsx\",\n                    lineNumber: 72,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/oluwabukunmi/Documents/GitHub/project-calculation/pages/index.tsx\",\n                lineNumber: 71,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/oluwabukunmi/Documents/GitHub/project-calculation/pages/index.tsx\",\n            lineNumber: 70,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/oluwabukunmi/Documents/GitHub/project-calculation/pages/index.tsx\",\n        lineNumber: 69,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"vt7n6PwLb/o+j8QXG77VLhGjGeo=\", false, function() {\n    return [\n        recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState,\n        recoil__WEBPACK_IMPORTED_MODULE_2__.useResetRecoilState,\n        recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValue\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFOEM7QUFFZTtBQVN2QztBQUNrQjtBQVFFO0FBQ2I7QUFFZCxTQUFTTyxPQUFPOztJQUM3QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1Isc0RBQWNBLENBQUNJLHdEQUFTQTtJQUNsRCxNQUFNSyxhQUFhUiwyREFBbUJBLENBQUNHLHdEQUFTQTtJQUNoRCxNQUFNLENBQUNNLFdBQVdDLGFBQWEsR0FBR1osK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDYSxjQUFjQyxnQkFBZ0IsR0FBR2QsK0NBQVFBLENBQUM7SUFDakQsTUFBTSxDQUFDZSxNQUFNQyxRQUFRLEdBQUdoQiwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLEVBQUVpQixXQUFVLEVBQUVDLGFBQVksRUFBRUMsV0FBVSxFQUFFQyxZQUFXLEVBQUVDLE9BQU0sRUFBRSxHQUFHYjtJQUN0RSxNQUFNLENBQUNjLFFBQVFDLFVBQVUsR0FBR3ZCLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU13QixnQkFBZ0IsQ0FBQ0MsSUFBcUM7UUFDMUQsTUFBTSxFQUFFQyxLQUFJLEVBQUVDLE1BQUssRUFBRSxHQUFHRixFQUFFRyxNQUFNO1FBRWhDbkIsU0FBUztZQUFFLEdBQUdELEtBQUs7WUFBRSxDQUFDa0IsS0FBSyxFQUFFQztRQUFNO0lBQ3JDO0lBQ0EsTUFBTUUsZUFBZSxJQUFNO1FBQ3pCZixnQkFBZ0I7UUFDaEJGLGFBQWE7UUFDYkksUUFBUTtRQUNSTyxVQUFVO0lBQ1o7SUFDQSxNQUFNTyxjQUFjLElBQU07UUFDeEIsSUFBSW5CLGNBQWMsS0FBS0UsaUJBQWlCLEtBQUtFLFNBQVMsR0FBRztZQUN2RCxNQUFNZ0IsT0FBT3BCLFlBQVlxQixLQUFLQyxHQUFHLENBQUMsSUFBSXBCLGNBQWNFO1lBQ3BEUSxVQUFVUTtRQUNaLENBQUM7SUFDSDtJQUVBLE1BQU1HLGNBQWN2QixjQUFjLEtBQUtFLGlCQUFpQixLQUFLRSxTQUFTO0lBQ3RFLE1BQU0sRUFBRW9CLFFBQU8sRUFBRSxHQUFHL0Isc0RBQWNBLENBQUNDLHdEQUFTQTtJQUM1QyxNQUFNK0IsT0FBTztRQUNYO1lBQ0VDLE9BQU87WUFDUEMsdUJBQVMsOERBQUNDOzBCQUFJOzs7Ozs7UUFDaEI7UUFDQTtZQUNFRixPQUFPO1lBQ1BDLHVCQUFTLDhEQUFDQzswQkFBSTs7Ozs7O1FBQ2hCO1FBQ0E7WUFDRUYsT0FBTztZQUNQQyx1QkFBUyw4REFBQ0M7MEJBQUk7Ozs7OztRQUNoQjtLQUNEO0lBQ0QscUJBQ0UsOERBQUNwQywrQ0FBTUE7a0JBQ0wsNEVBQUNxQztzQkFDQyw0RUFBQ0Q7Z0JBQUlFLFdBQVU7MEJBQ2IsNEVBQUNGO29CQUFJRSxXQUFVOztzQ0FDYiw4REFBQ0M7NEJBQUdELFdBQVU7c0NBQTBFOzs7Ozs7c0NBR3hGLDhEQUFDRTs0QkFBRUYsV0FBVTtzQ0FBbUQ7Ozs7OztzQ0FVaEUsOERBQUNGOzRCQUFJRSxXQUFVO3NDQUNiLDRFQUFDbkMsa0RBQUlBO2dDQUNIc0MsTUFBSztnQ0FDTEgsV0FBVTswQ0FDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTZixDQUFDO0dBekV1QmxDOztRQUNJTixrREFBY0E7UUFDckJDLHVEQUFtQkE7UUF5QmxCRSxrREFBY0E7OztLQTNCWkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IENoYW5nZUV2ZW50LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyB1c2VSZWNvaWxTdGF0ZSwgdXNlUmVzZXRSZWNvaWxTdGF0ZSB9IGZyb20gXCJyZWNvaWxcIjtcblxuaW1wb3J0IHtcbiAgQm90dG9tR3JhZGllbnQsXG4gIEVNSSxcbiAgTGF5b3V0LFxuICBMb2FuUmVwYXltZW50U2NoZWR1bGVUYWJsZSxcbiAgUGF5bWVudEJyZWFrVXAsXG4gIFRleHRGaWVsZCxcbn0gZnJvbSBcIkAvY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgdXNlUmVjb2lsVmFsdWUgfSBmcm9tIFwicmVjb2lsXCI7XG5cbmltcG9ydCB7IE91dGNvbWVQcm9wcyB9IGZyb20gXCJAL3R5cGVzXCI7XG5pbXBvcnQgeyB0b0N1cnJlbmN5IH0gZnJvbSBcIkAvdXRpbHNcIjtcblxuaW1wb3J0IHsgQ1VSUkVOQ1lfU1lNQk9MIH0gZnJvbSBcIkAvY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBjYWxjdWxhdGVFbWlPdXRjb21lLCB2YWxpZGF0ZUZvcm0gfSBmcm9tIFwiQC91dGlsc1wiO1xuXG5pbXBvcnQgc3RhdGVBdG9tIGZyb20gXCJAL2F0b21zL3N0YXRlQXRvbVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVJlY29pbFN0YXRlKHN0YXRlQXRvbSk7XG4gIGNvbnN0IHJlc2V0U3RhdGUgPSB1c2VSZXNldFJlY29pbFN0YXRlKHN0YXRlQXRvbSk7XG4gIGNvbnN0IFtuZXRJbmNvbWUsIHNldE5ldEluY29tZV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2Rpc2NvdW50UmF0ZSwgc2V0RGlzY291bnRSYXRlXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbdGltZSwgc2V0VGltZV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgeyBsb2FuQW1vdW50LCBpbnRlcmVzdFJhdGUsIGxvYW5UZW51cmUsIHByZXBheW1lbnRzLCBlcnJvcnMgfSA9IHN0YXRlO1xuICBjb25zdCBbcmVzdWx0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IG9uSW5wdXRDaGFuZ2UgPSAoZTogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldDtcblxuICAgIHNldFN0YXRlKHsgLi4uc3RhdGUsIFtuYW1lXTogdmFsdWUgfSk7XG4gIH07XG4gIGNvbnN0IG9ucmVzZXRTdGF0ZSA9ICgpID0+IHtcbiAgICBzZXREaXNjb3VudFJhdGUoMCk7XG4gICAgc2V0TmV0SW5jb21lKDApO1xuICAgIHNldFRpbWUoMCk7XG4gICAgc2V0UmVzdWx0KDApO1xuICB9O1xuICBjb25zdCBvbkNhbGN1bGF0ZSA9ICgpID0+IHtcbiAgICBpZiAobmV0SW5jb21lICE9PSAwICYmIGRpc2NvdW50UmF0ZSAhPT0gMCAmJiB0aW1lICE9PSAwKSB7XG4gICAgICBjb25zdCBkYXRhID0gbmV0SW5jb21lIC8gTWF0aC5wb3coMSArIGRpc2NvdW50UmF0ZSwgdGltZSk7XG4gICAgICBzZXRSZXN1bHQoZGF0YSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlc2V0U3RhdHVzID0gbmV0SW5jb21lICE9PSAwIHx8IGRpc2NvdW50UmF0ZSAhPT0gMCB8fCB0aW1lICE9PSAwO1xuICBjb25zdCB7IG91dGNvbWUgfSA9IHVzZVJlY29pbFZhbHVlKHN0YXRlQXRvbSk7XG4gIGNvbnN0IHRhYnMgPSBbXG4gICAge1xuICAgICAgdGl0bGU6IFwiRXhwb25lbnRpYWwgRGVjbGluZVwiLFxuICAgICAgY29udGVudDogPGRpdj5Db250ZW50IGZvciBUYWIgMTwvZGl2PixcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIkhhcm1vbmljIERlY2xpbmVcIixcbiAgICAgIGNvbnRlbnQ6IDxkaXY+Q29udGVudCBmb3IgVGFiIDI8L2Rpdj4sXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJIeXBlcmJvbGljIERlY2xpbmVcIixcbiAgICAgIGNvbnRlbnQ6IDxkaXY+Q29udGVudCBmb3IgVGFiIDM8L2Rpdj4sXG4gICAgfSxcbiAgXTtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPG1haW4+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgcHgtNiBsZzpweC04XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIG1heC13LTJ4bCBweS00IHNtOnB5LTggbGc6cHktMTJcIj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LTR4bCBmb250LWJvbGQgdHJhY2tpbmctdGlnaHQgdGV4dC1ncmF5LTkwMCBzbTp0ZXh0LTZ4bFwiPlxuICAgICAgICAgICAgICBPaWwgd2VsbCBFY29ub21pYyBUb29sXG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtNiB0ZXh0LWxnIGxlYWRpbmctOCB0ZXh0LWdyYXktNjAwXCI+XG4gICAgICAgICAgICAgIEFuIE5QViAoTmV0IFByZXNlbnQgVmFsdWUpIGNhbGN1bGF0b3IgaXMgYSBmaW5hbmNpYWwgdG9vbCB1c2VkIHRvXG4gICAgICAgICAgICAgIGVzdGltYXRlIHRoZSBwcmVzZW50IHZhbHVlIG9mIGFsbCBmdXR1cmUgY2FzaCBmbG93cyBnZW5lcmF0ZWQgYnlcbiAgICAgICAgICAgICAgYW4gaW52ZXN0bWVudCBvciBwcm9qZWN0LCBjb25zaWRlcmluZyB0aGUgdGltZSB2YWx1ZSBvZiBtb25leS4gSXRcbiAgICAgICAgICAgICAgdGFrZXMgaW50byBhY2NvdW50IGZhY3RvcnMgc3VjaCBhcyB0aGUgaW5pdGlhbCBpbnZlc3RtZW50LFxuICAgICAgICAgICAgICBleHBlY3RlZCBjYXNoIGluZmxvd3MsIGRpc2NvdW50IHJhdGUsIGFuZCB0aGUgZHVyYXRpb24gb2YgdGhlXG4gICAgICAgICAgICAgIGludmVzdG1lbnQgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGludmVzdG1lbnQgaXMgZXhwZWN0ZWQgdG9cbiAgICAgICAgICAgICAgZ2VuZXJhdGUgcG9zaXRpdmUgb3IgbmVnYXRpdmUgcmV0dXJucyB3aGVuIGRpc2NvdW50ZWQgYmFjayB0byB0aGVcbiAgICAgICAgICAgICAgcHJlc2VudC5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy1mdWxsXCI+XG4gICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgaHJlZj1cIi9wcm9kdWN0aW9uLWNhbGN1bGF0b3JcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1zb2xpZCBib3JkZXItc2t5LTUwMCBiZy1iYWNrZ3JvdW5kLWJ1dHRvbi1zZWNvbmRhcnkgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHktMiBweC00IGZvbnQtbWVkaXVtIHRleHQtY2FwdGlvbkwgdGV4dC10ZXh0LWJhc2UtcHJpbWFyeSBtdC01XCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIEdvIHRvIENhbGN1bGF0b3JcbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlUmVjb2lsU3RhdGUiLCJ1c2VSZXNldFJlY29pbFN0YXRlIiwiTGF5b3V0IiwidXNlUmVjb2lsVmFsdWUiLCJzdGF0ZUF0b20iLCJMaW5rIiwiSG9tZSIsInN0YXRlIiwic2V0U3RhdGUiLCJyZXNldFN0YXRlIiwibmV0SW5jb21lIiwic2V0TmV0SW5jb21lIiwiZGlzY291bnRSYXRlIiwic2V0RGlzY291bnRSYXRlIiwidGltZSIsInNldFRpbWUiLCJsb2FuQW1vdW50IiwiaW50ZXJlc3RSYXRlIiwibG9hblRlbnVyZSIsInByZXBheW1lbnRzIiwiZXJyb3JzIiwicmVzdWx0Iiwic2V0UmVzdWx0Iiwib25JbnB1dENoYW5nZSIsImUiLCJuYW1lIiwidmFsdWUiLCJ0YXJnZXQiLCJvbnJlc2V0U3RhdGUiLCJvbkNhbGN1bGF0ZSIsImRhdGEiLCJNYXRoIiwicG93IiwicmVzZXRTdGF0dXMiLCJvdXRjb21lIiwidGFicyIsInRpdGxlIiwiY29udGVudCIsImRpdiIsIm1haW4iLCJjbGFzc05hbWUiLCJoMSIsInAiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});