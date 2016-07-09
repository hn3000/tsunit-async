"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var tsUnit_1 = require('./tsUnit');
var TestAsync = (function (_super) {
    __extends(TestAsync, _super);
    function TestAsync() {
        _super.apply(this, arguments);
    }
    TestAsync.prototype.runNext = function (tests) {
        return;
    };
    TestAsync.prototype.runNextFunction = function (test, functionNames) {
    };
    TestAsync.prototype.runAsync = function (testRunLimiter) {
        if (testRunLimiter === void 0) { testRunLimiter = null; }
        var parameters = null;
        var testContext = new tsUnit_1.TestContext();
        if (testRunLimiter == null) {
            testRunLimiter = this.getTestRunLimiter();
        }
        var tests = this.tests;
        if (testRunLimiter) {
            tests = tests.filter(function (x) { return testRunLimiter.isTestsGroupActive(x.name); });
        }
        this.runNext();
        for (var i = 0; i < this.tests.length; ++i) {
            var testClass = this.tests[i].testClass;
            var dynamicTestClass = testClass;
            var testsGroupName = this.tests[i].name;
            if (testRunLimiter && !testRunLimiter.isTestsGroupActive(testsGroupName)) {
                continue;
            }
            for (var unitTestName in testClass) {
                if (this.isReservedFunctionName(unitTestName)
                    || (unitTestName.substring(0, this.privateMemberPrefix.length) === this.privateMemberPrefix)
                    || (typeof dynamicTestClass[unitTestName] !== 'function')
                    || (testRunLimiter && !testRunLimiter.isTestActive(unitTestName))) {
                    continue;
                }
                if (typeof dynamicTestClass[unitTestName].parameters !== 'undefined') {
                    parameters = dynamicTestClass[unitTestName].parameters;
                    for (var parameterIndex = 0; parameterIndex < parameters.length; parameterIndex++) {
                        if (testRunLimiter && !testRunLimiter.isParametersSetActive(parameterIndex)) {
                            continue;
                        }
                        this.runSingleTest(testClass, unitTestName, testsGroupName, parameters, parameterIndex);
                    }
                }
                else {
                    this.runSingleTest(testClass, unitTestName, testsGroupName);
                }
            }
        }
        return this;
    };
    return TestAsync;
}(tsUnit_1.Test));
exports.TestAsync = TestAsync;
//# sourceMappingURL=tsUnitAsync.js.map