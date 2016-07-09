import { Test, ITestRunLimiter } from './tsUnit';
export declare class TestAsync extends Test {
    private runNext(tests);
    private runNextFunction(test, functionNames);
    runAsync(testRunLimiter?: ITestRunLimiter): Promise<this>;
}
