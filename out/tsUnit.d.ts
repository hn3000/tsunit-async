export declare class Test {
    privateMemberPrefix: string;
    passes: TestDescription[];
    errors: TestDescription[];
    protected tests: TestDefinition[];
    private testRunLimiter;
    private reservedMethodNameContainer;
    constructor(...testModules: any[]);
    addTestClass(testClass: TestClass, name?: string): void;
    protected getTestRunLimiter(): ITestRunLimiter;
    run(testRunLimiter?: ITestRunLimiter): this;
    showResults(target: string | HTMLElement): this;
    getTapResults(): string;
    private createTestLimiter();
    protected isReservedFunctionName(functionName: string): boolean;
    protected runSingleTest(testClass: TestClass, unitTestName: string, testsGroupName: string, parameters?: any[][], parameterSetIndex?: number): void;
    private getTestResult();
    private getTestSummary();
    private getTestResultList(testResults);
    private encodeHtmlEntities(input);
}
export interface ITestRunLimiter {
    isTestsGroupActive(groupName: string): boolean;
    isTestActive(testName: string): boolean;
    isParametersSetActive(paramatersSetNumber: number): boolean;
}
export interface IThrowsParameters {
    fn: () => void;
    message?: string;
    errorString?: string;
}
export declare class TestContext {
    setUp(): void;
    tearDown(): void;
    protected areIdentical(expected: any, actual: any, message?: string): void;
    protected areNotIdentical(expected: any, actual: any, message?: string): void;
    protected areCollectionsIdentical(expected: any[], actual: any[], message?: string): void;
    protected areCollectionsNotIdentical(expected: any[], actual: any[], message?: string): void;
    protected isTrue(actual: boolean, message?: string): void;
    protected isFalse(actual: boolean, message?: string): void;
    protected isTruthy(actual: any, message?: string): void;
    protected isFalsey(actual: any, message?: string): void;
    protected throws(params: IThrowsParameters): void;
    protected throws(actual: () => void, message?: string): void;
    protected doesNotThrow(actual: () => void, message?: string): void;
    protected executesWithin(actual: () => void, timeLimit: number, message?: string): void;
    protected fail(message?: string): void;
    private getError(resultMessage, message?);
    private static getNameOfClass(inputClass);
    private printVariable(variable);
}
export declare class TestClass extends TestContext {
    protected parameterizeUnitTest(method: Function, parametersArray: any[][]): void;
}
export declare class FakeFactory {
    static getFake<T>(obj: any, ...implementations: [string, any][]): T;
    private static populateFakeType(fake, toCopy);
}
export declare class TestDefinition {
    testClass: TestClass;
    name: string;
    constructor(testClass: TestClass, name: string);
}
export declare class TestDescription {
    testName: string;
    funcName: string;
    parameterSetNumber: number;
    message: string;
    constructor(testName: string, funcName: string, parameterSetNumber: number, message: string);
}
