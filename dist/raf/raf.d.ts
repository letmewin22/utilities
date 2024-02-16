type TFunc = (...args: any) => void;
export declare class RAF {
    cbArray: Array<null | TFunc>;
    constructor();
    on(cb: TFunc): void;
    off(cb: TFunc): void;
    animation(delta: number): void;
}
declare const rafFunc: {
    on: (cb: TFunc) => void;
    off: (cb: TFunc) => void;
};
export default rafFunc;
