"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/irr-calculator",{

/***/ "./utils/index.ts":
/*!************************!*\
  !*** ./utils/index.ts ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"calculateEmiOutcome\": function() { return /* binding */ calculateEmiOutcome; },\n/* harmony export */   \"formatter\": function() { return /* binding */ formatter; },\n/* harmony export */   \"isNumber\": function() { return /* binding */ isNumber; },\n/* harmony export */   \"pieFormatter\": function() { return /* binding */ pieFormatter; },\n/* harmony export */   \"toCurrency\": function() { return /* binding */ toCurrency; },\n/* harmony export */   \"toNumber\": function() { return /* binding */ toNumber; },\n/* harmony export */   \"toRoundNumber\": function() { return /* binding */ toRoundNumber; },\n/* harmony export */   \"validateForm\": function() { return /* binding */ validateForm; }\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/constants */ \"./constants/index.ts\");\n/* harmony import */ var _validations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/validations */ \"./validations/index.ts\");\n\n\nfunction toNumber(value) {\n    const number = parseFloat(value.replace(/[^0-9.]/g, \"\"));\n    if (Number.isNaN(number)) {\n        return 0;\n    }\n    return number;\n}\nfunction toRoundNumber(value) {\n    return Math.round(value);\n}\nfunction toCurrency(value) {\n    if (!value) return \"-\";\n    const roundedNumber = Number(value.toFixed(3));\n    const absoluteValue = Math.abs(roundedNumber);\n    const exponent = Math.floor(Math.log10(absoluteValue));\n    if (exponent <= -4 || exponent >= 4) {\n        return roundedNumber.toExponential(3);\n    } else {\n        return roundedNumber.toLocaleString(\"en-US\", {\n            currency: _constants__WEBPACK_IMPORTED_MODULE_0__.CURRENCY,\n            minimumFractionDigits: 3,\n            maximumFractionDigits: 3\n        });\n    }\n// return formattedValue.toLocaleString(\"en-US\", {\n//   currency: CURRENCY,\n//   minimumFractionDigits: 3,\n//   maximumFractionDigits: 3,\n// });\n}\nfunction calculateEmiOutcome(loanAmount, interestRate, loanTenure, prepayments) {\n    // EMI Details\n    const monthlyInterestRate = interestRate / _constants__WEBPACK_IMPORTED_MODULE_0__.MONTHS_IN_YEAR / 100;\n    const totalPayments = loanTenure * _constants__WEBPACK_IMPORTED_MODULE_0__.MONTHS_IN_YEAR;\n    const denominator = Math.pow(1 + monthlyInterestRate, totalPayments) - 1;\n    const emi = loanAmount * monthlyInterestRate * (1 + monthlyInterestRate) ** totalPayments / denominator;\n    let totalInterestPayable = 0;\n    // Loan Repayment Schedule\n    let cumulativeInterest = 0;\n    let cumulativePrincipal = 0;\n    const schedule = [];\n    let principalOutstanding = loanAmount;\n    for(let i = 1; i <= loanTenure * _constants__WEBPACK_IMPORTED_MODULE_0__.MONTHS_IN_YEAR; i++){\n        const interestPayment = principalOutstanding * interestRate / (100 * _constants__WEBPACK_IMPORTED_MODULE_0__.MONTHS_IN_YEAR);\n        if (interestPayment <= 0) {\n            break;\n        }\n        let principalPayment = emi - interestPayment;\n        if (prepayments && prepayments[i] > 0) {\n            principalPayment = principalPayment + prepayments[i];\n        }\n        const totalPayment = emi;\n        totalInterestPayable += interestPayment;\n        principalOutstanding = principalOutstanding - principalPayment;\n        cumulativeInterest = i === 1 ? interestPayment : cumulativeInterest + interestPayment;\n        cumulativePrincipal = i === 1 ? principalPayment : cumulativePrincipal + principalPayment;\n        schedule.push({\n            month: i,\n            principalPayment,\n            interestPayment,\n            totalPayment,\n            principalOutstanding,\n            cumulativeInterest: cumulativeInterest,\n            cumulativePrincipal: cumulativePrincipal\n        });\n    }\n    return {\n        emi,\n        totalInterestPayable,\n        schedule,\n        totalPayment: totalInterestPayable + loanAmount,\n        principalAmount: loanAmount\n    };\n}\nfunction isNumber(value) {\n    return !isNaN(Number(value));\n}\nfunction validateField(state, fieldName) {\n    const fieldValidationRules = _validations__WEBPACK_IMPORTED_MODULE_1__.FIELD_VALIDATIONS[fieldName];\n    if (!fieldValidationRules) {\n        return undefined;\n    }\n    const fieldValue = state[fieldName];\n    const failedValidationRule = fieldValidationRules.find((rule)=>!rule.test(fieldValue));\n    if (failedValidationRule) {\n        return failedValidationRule.message;\n    }\n    return undefined;\n}\nfunction validateForm(state) {\n    const errors = {};\n    for (const fieldName of Object.keys(_validations__WEBPACK_IMPORTED_MODULE_1__.FIELD_VALIDATIONS)){\n        const errorMessage = validateField(state, fieldName);\n        if (errorMessage) {\n            errors[fieldName] = errorMessage;\n        }\n    }\n    return errors;\n}\nconst formatter = (value)=>toCurrency(value);\nconst pieFormatter = (param)=>{\n    let { percent  } = param;\n    return \"\".concat((percent * 100).toFixed(0), \"%\");\n};\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE1BQU1DLHVCQUF1QmxELDJEQUFpQixDQUFDaUQsVUFBVTtJQUN6RCxJQUFJLENBQUNDLHNCQUFzQjtRQUN6QixPQUFPQztJQUNULENBQUM7SUFFRCxNQUFNQyxhQUFhSixLQUFLLENBQUNDLFVBQVU7SUFDbkMsTUFBTUksdUJBQXVCSCxxQkFBcUJJLElBQUksQ0FDcEQsQ0FBQ0MsT0FBUyxDQUFDQSxLQUFLQyxJQUFJLENBQUNKO0lBR3ZCLElBQUlDLHNCQUFzQjtRQUN4QixPQUFPQSxxQkFBcUJJLE9BQU87SUFDckMsQ0FBQztJQUVELE9BQU9OO0FBQ1Q7QUFFQSxTQUFTTyxhQUFhVixLQUEwQixFQUFFO0lBQ2hELE1BQU1XLFNBQWlCLENBQUM7SUFFeEIsS0FBSyxNQUFNVixhQUFhVyxPQUFPQyxJQUFJLENBQUM3RCwyREFBaUJBLEVBRWxEO1FBQ0QsTUFBTThELGVBQWVmLGNBQWNDLE9BQU9DO1FBQzFDLElBQUlhLGNBQWM7WUFDaEJILE1BQU0sQ0FBQ1YsVUFBVSxHQUFHYTtRQUN0QixDQUFDO0lBQ0g7SUFFQSxPQUFPSDtBQUNUO0FBRUEsTUFBTUksWUFBWSxDQUFDN0QsUUFBZVMsV0FBV1Q7QUFFN0MsTUFBTThELGVBQWUsU0FBc0I7UUFBckIsRUFBRUMsUUFBTyxFQUFPO1dBQUssR0FBOEIsT0FBM0IsQ0FBQ0EsVUFBVSxHQUFFLEVBQUdwRCxPQUFPLENBQUMsSUFBRztBQUFDO0FBV3hFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3V0aWxzL2luZGV4LnRzPzU2ZDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ1VSUkVOQ1ksIE1PTlRIU19JTl9ZRUFSIH0gZnJvbSBcIkAvY29uc3RhbnRzXCI7XG5pbXBvcnQge1xuICBFcnJvcnMsXG4gIEluaXRpYWxTdGF0ZSxcbiAgaW5pdGlhbFN0YXRlLFxuICBQcmVwYXltZW50cyxcbiAgU2NoZWR1bGUsXG59IGZyb20gXCJAL3R5cGVzXCI7XG5pbXBvcnQgeyBGSUVMRF9WQUxJREFUSU9OUyB9IGZyb20gXCJAL3ZhbGlkYXRpb25zXCI7XG5cbmZ1bmN0aW9uIHRvTnVtYmVyKHZhbHVlOiBhbnkpIHtcbiAgY29uc3QgbnVtYmVyID0gcGFyc2VGbG9hdCh2YWx1ZS5yZXBsYWNlKC9bXjAtOS5dL2csIFwiXCIpKTtcbiAgaWYgKE51bWJlci5pc05hTihudW1iZXIpKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbiAgcmV0dXJuIG51bWJlcjtcbn1cblxuZnVuY3Rpb24gdG9Sb3VuZE51bWJlcih2YWx1ZTogbnVtYmVyKSB7XG4gIHJldHVybiBNYXRoLnJvdW5kKHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gdG9DdXJyZW5jeSh2YWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkKTogc3RyaW5nIHtcbiAgaWYgKCF2YWx1ZSkgcmV0dXJuIFwiLVwiO1xuXG4gIGNvbnN0IHJvdW5kZWROdW1iZXIgPSBOdW1iZXIodmFsdWUudG9GaXhlZCgzKSk7XG4gIGNvbnN0IGFic29sdXRlVmFsdWUgPSBNYXRoLmFicyhyb3VuZGVkTnVtYmVyKTtcbiAgY29uc3QgZXhwb25lbnQgPSBNYXRoLmZsb29yKE1hdGgubG9nMTAoYWJzb2x1dGVWYWx1ZSkpO1xuXG4gIGlmIChleHBvbmVudCA8PSAtNCB8fCBleHBvbmVudCA+PSA0KSB7XG4gICAgcmV0dXJuIHJvdW5kZWROdW1iZXIudG9FeHBvbmVudGlhbCgzKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcm91bmRlZE51bWJlci50b0xvY2FsZVN0cmluZyhcImVuLVVTXCIsIHtcbiAgICAgIGN1cnJlbmN5OiBDVVJSRU5DWSxcbiAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMyxcbiAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMyxcbiAgICB9KTtcbiAgfVxuXG4gIC8vIHJldHVybiBmb3JtYXR0ZWRWYWx1ZS50b0xvY2FsZVN0cmluZyhcImVuLVVTXCIsIHtcbiAgLy8gICBjdXJyZW5jeTogQ1VSUkVOQ1ksXG4gIC8vICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAzLFxuICAvLyAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMyxcbiAgLy8gfSk7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZUVtaU91dGNvbWUoXG4gIGxvYW5BbW91bnQ6IG51bWJlcixcbiAgaW50ZXJlc3RSYXRlOiBudW1iZXIsXG4gIGxvYW5UZW51cmU6IG51bWJlcixcbiAgcHJlcGF5bWVudHM6IFByZXBheW1lbnRzXG4pIHtcbiAgLy8gRU1JIERldGFpbHNcbiAgY29uc3QgbW9udGhseUludGVyZXN0UmF0ZSA9IGludGVyZXN0UmF0ZSAvIE1PTlRIU19JTl9ZRUFSIC8gMTAwO1xuICBjb25zdCB0b3RhbFBheW1lbnRzID0gbG9hblRlbnVyZSAqIE1PTlRIU19JTl9ZRUFSO1xuICBjb25zdCBkZW5vbWluYXRvciA9IE1hdGgucG93KDEgKyBtb250aGx5SW50ZXJlc3RSYXRlLCB0b3RhbFBheW1lbnRzKSAtIDE7XG4gIGNvbnN0IGVtaSA9XG4gICAgKGxvYW5BbW91bnQgKlxuICAgICAgbW9udGhseUludGVyZXN0UmF0ZSAqXG4gICAgICAoMSArIG1vbnRobHlJbnRlcmVzdFJhdGUpICoqIHRvdGFsUGF5bWVudHMpIC9cbiAgICBkZW5vbWluYXRvcjtcblxuICBsZXQgdG90YWxJbnRlcmVzdFBheWFibGUgPSAwO1xuXG4gIC8vIExvYW4gUmVwYXltZW50IFNjaGVkdWxlXG4gIGxldCBjdW11bGF0aXZlSW50ZXJlc3QgPSAwO1xuICBsZXQgY3VtdWxhdGl2ZVByaW5jaXBhbCA9IDA7XG5cbiAgY29uc3Qgc2NoZWR1bGU6IFNjaGVkdWxlW10gPSBbXTtcbiAgbGV0IHByaW5jaXBhbE91dHN0YW5kaW5nID0gbG9hbkFtb3VudDtcblxuICBmb3IgKGxldCBpID0gMTsgaSA8PSBsb2FuVGVudXJlICogTU9OVEhTX0lOX1lFQVI7IGkrKykge1xuICAgIGNvbnN0IGludGVyZXN0UGF5bWVudCA9XG4gICAgICAocHJpbmNpcGFsT3V0c3RhbmRpbmcgKiBpbnRlcmVzdFJhdGUpIC8gKDEwMCAqIE1PTlRIU19JTl9ZRUFSKTtcblxuICAgIGlmIChpbnRlcmVzdFBheW1lbnQgPD0gMCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGxldCBwcmluY2lwYWxQYXltZW50ID0gZW1pIC0gaW50ZXJlc3RQYXltZW50O1xuXG4gICAgaWYgKHByZXBheW1lbnRzICYmIHByZXBheW1lbnRzW2ldID4gMCkge1xuICAgICAgcHJpbmNpcGFsUGF5bWVudCA9IHByaW5jaXBhbFBheW1lbnQgKyBwcmVwYXltZW50c1tpXTtcbiAgICB9XG5cbiAgICBjb25zdCB0b3RhbFBheW1lbnQgPSBlbWk7XG5cbiAgICB0b3RhbEludGVyZXN0UGF5YWJsZSArPSBpbnRlcmVzdFBheW1lbnQ7XG5cbiAgICBwcmluY2lwYWxPdXRzdGFuZGluZyA9IHByaW5jaXBhbE91dHN0YW5kaW5nIC0gcHJpbmNpcGFsUGF5bWVudDtcblxuICAgIGN1bXVsYXRpdmVJbnRlcmVzdCA9XG4gICAgICBpID09PSAxID8gaW50ZXJlc3RQYXltZW50IDogY3VtdWxhdGl2ZUludGVyZXN0ICsgaW50ZXJlc3RQYXltZW50O1xuXG4gICAgY3VtdWxhdGl2ZVByaW5jaXBhbCA9XG4gICAgICBpID09PSAxID8gcHJpbmNpcGFsUGF5bWVudCA6IGN1bXVsYXRpdmVQcmluY2lwYWwgKyBwcmluY2lwYWxQYXltZW50O1xuXG4gICAgc2NoZWR1bGUucHVzaCh7XG4gICAgICBtb250aDogaSxcbiAgICAgIHByaW5jaXBhbFBheW1lbnQsXG4gICAgICBpbnRlcmVzdFBheW1lbnQsXG4gICAgICB0b3RhbFBheW1lbnQsXG4gICAgICBwcmluY2lwYWxPdXRzdGFuZGluZyxcbiAgICAgIGN1bXVsYXRpdmVJbnRlcmVzdDogY3VtdWxhdGl2ZUludGVyZXN0LFxuICAgICAgY3VtdWxhdGl2ZVByaW5jaXBhbDogY3VtdWxhdGl2ZVByaW5jaXBhbCxcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZW1pLFxuICAgIHRvdGFsSW50ZXJlc3RQYXlhYmxlLFxuICAgIHNjaGVkdWxlLFxuICAgIHRvdGFsUGF5bWVudDogdG90YWxJbnRlcmVzdFBheWFibGUgKyBsb2FuQW1vdW50LFxuICAgIHByaW5jaXBhbEFtb3VudDogbG9hbkFtb3VudCxcbiAgfTtcbn1cblxuZnVuY3Rpb24gaXNOdW1iZXIodmFsdWU6IGFueSkge1xuICByZXR1cm4gIWlzTmFOKE51bWJlcih2YWx1ZSkpO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZUZpZWxkKFxuICBzdGF0ZTogSW5pdGlhbFN0YXRlLFxuICBmaWVsZE5hbWU6IGtleW9mIEVycm9yc1xuKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgY29uc3QgZmllbGRWYWxpZGF0aW9uUnVsZXMgPSBGSUVMRF9WQUxJREFUSU9OU1tmaWVsZE5hbWVdO1xuICBpZiAoIWZpZWxkVmFsaWRhdGlvblJ1bGVzKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIGNvbnN0IGZpZWxkVmFsdWUgPSBzdGF0ZVtmaWVsZE5hbWVdO1xuICBjb25zdCBmYWlsZWRWYWxpZGF0aW9uUnVsZSA9IGZpZWxkVmFsaWRhdGlvblJ1bGVzLmZpbmQoXG4gICAgKHJ1bGUpID0+ICFydWxlLnRlc3QoZmllbGRWYWx1ZSlcbiAgKTtcblxuICBpZiAoZmFpbGVkVmFsaWRhdGlvblJ1bGUpIHtcbiAgICByZXR1cm4gZmFpbGVkVmFsaWRhdGlvblJ1bGUubWVzc2FnZTtcbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlRm9ybShzdGF0ZTogdHlwZW9mIGluaXRpYWxTdGF0ZSkge1xuICBjb25zdCBlcnJvcnM6IEVycm9ycyA9IHt9O1xuXG4gIGZvciAoY29uc3QgZmllbGROYW1lIG9mIE9iamVjdC5rZXlzKEZJRUxEX1ZBTElEQVRJT05TKSBhcyBBcnJheTxcbiAgICBrZXlvZiBFcnJvcnNcbiAgPikge1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IHZhbGlkYXRlRmllbGQoc3RhdGUsIGZpZWxkTmFtZSk7XG4gICAgaWYgKGVycm9yTWVzc2FnZSkge1xuICAgICAgZXJyb3JzW2ZpZWxkTmFtZV0gPSBlcnJvck1lc3NhZ2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9ycztcbn1cblxuY29uc3QgZm9ybWF0dGVyID0gKHZhbHVlOiBhbnkpID0+IHRvQ3VycmVuY3kodmFsdWUpO1xuXG5jb25zdCBwaWVGb3JtYXR0ZXIgPSAoeyBwZXJjZW50IH06IGFueSkgPT4gYCR7KHBlcmNlbnQgKiAxMDApLnRvRml4ZWQoMCl9JWA7XG5cbmV4cG9ydCB7XG4gIHRvQ3VycmVuY3ksXG4gIGNhbGN1bGF0ZUVtaU91dGNvbWUsXG4gIHRvTnVtYmVyLFxuICB0b1JvdW5kTnVtYmVyLFxuICBpc051bWJlcixcbiAgZm9ybWF0dGVyLFxuICBwaWVGb3JtYXR0ZXIsXG4gIHZhbGlkYXRlRm9ybSxcbn07XG4iXSwibmFtZXMiOlsiQ1VSUkVOQ1kiLCJNT05USFNfSU5fWUVBUiIsIkZJRUxEX1ZBTElEQVRJT05TIiwidG9OdW1iZXIiLCJ2YWx1ZSIsIm51bWJlciIsInBhcnNlRmxvYXQiLCJyZXBsYWNlIiwiTnVtYmVyIiwiaXNOYU4iLCJ0b1JvdW5kTnVtYmVyIiwiTWF0aCIsInJvdW5kIiwidG9DdXJyZW5jeSIsInJvdW5kZWROdW1iZXIiLCJ0b0ZpeGVkIiwiYWJzb2x1dGVWYWx1ZSIsImFicyIsImV4cG9uZW50IiwiZmxvb3IiLCJsb2cxMCIsInRvRXhwb25lbnRpYWwiLCJ0b0xvY2FsZVN0cmluZyIsImN1cnJlbmN5IiwibWluaW11bUZyYWN0aW9uRGlnaXRzIiwibWF4aW11bUZyYWN0aW9uRGlnaXRzIiwiY2FsY3VsYXRlRW1pT3V0Y29tZSIsImxvYW5BbW91bnQiLCJpbnRlcmVzdFJhdGUiLCJsb2FuVGVudXJlIiwicHJlcGF5bWVudHMiLCJtb250aGx5SW50ZXJlc3RSYXRlIiwidG90YWxQYXltZW50cyIsImRlbm9taW5hdG9yIiwicG93IiwiZW1pIiwidG90YWxJbnRlcmVzdFBheWFibGUiLCJjdW11bGF0aXZlSW50ZXJlc3QiLCJjdW11bGF0aXZlUHJpbmNpcGFsIiwic2NoZWR1bGUiLCJwcmluY2lwYWxPdXRzdGFuZGluZyIsImkiLCJpbnRlcmVzdFBheW1lbnQiLCJwcmluY2lwYWxQYXltZW50IiwidG90YWxQYXltZW50IiwicHVzaCIsIm1vbnRoIiwicHJpbmNpcGFsQW1vdW50IiwiaXNOdW1iZXIiLCJ2YWxpZGF0ZUZpZWxkIiwic3RhdGUiLCJmaWVsZE5hbWUiLCJmaWVsZFZhbGlkYXRpb25SdWxlcyIsInVuZGVmaW5lZCIsImZpZWxkVmFsdWUiLCJmYWlsZWRWYWxpZGF0aW9uUnVsZSIsImZpbmQiLCJydWxlIiwidGVzdCIsIm1lc3NhZ2UiLCJ2YWxpZGF0ZUZvcm0iLCJlcnJvcnMiLCJPYmplY3QiLCJrZXlzIiwiZXJyb3JNZXNzYWdlIiwiZm9ybWF0dGVyIiwicGllRm9ybWF0dGVyIiwicGVyY2VudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/index.ts\n"));

/***/ })

});