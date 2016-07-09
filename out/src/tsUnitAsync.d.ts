/// <reference path="../../src/promise.d.ts" />
import { Test, TestClass, ITestRunLimiter } from './tsUnit';
export { Test, TestContext, TestClass, FakeFactory, ITestRunLimiter, TestDescription, TestDefinition } from './tsUnit';
export declare class TestAsync extends Test {
    private _currentTestPromises;
    private runAll(tests, testRunLimiter);
    private runAllFunctions(thisTest, functionNames, testRunLimiter);
    private runAllParameters(thisTest, unitTestName, parameterIndex, testRunLimiter);
    protected runSingleTestAsync(testClass: TestClass, unitTestName: string, testsGroupName: string, parameters?: any[][], parameterSetIndex?: number): Promise<this>;
    runAsync(testRunLimiter?: ITestRunLimiter): Promise<this>;
    run(): this;
}
