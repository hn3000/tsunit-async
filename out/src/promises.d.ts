export interface IThenable<T> {
    then<R, X>(onSuccess: (t: T) => R | IThenable<R>, onFailure: (err: any) => X): IThenable<R | X>;
}
export declare class Promise<T> implements IThenable<T> {
    then<R, X>(onSuccess: (t: T) => R | IThenable<R>, onFailure: (err: any) => X): Promise<R | X>;
    then<R>(onSuccess: (t: T) => R | IThenable<R>): Promise<R>;
}
export declare namespace Promise {
    function resolve<R>(r: R): Promise<R>;
    function resolve(): Promise<null>;
}
