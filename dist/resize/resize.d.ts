type TFunc = () => void;
export declare class Resize {
    cbArray: Array<null | TFunc>;
    constructor();
    bounds(): void;
    init(): void;
    resizeHandler(): void;
    on(cb: TFunc): void;
    off(cb: TFunc): void;
    match(breakpoint: string, cb: TFunc): void;
    destroy(): void;
}
declare const resizeFunc: {
    on: (cb: TFunc) => void;
    off: (cb: TFunc) => void;
    match: (breakpoint: string, cb: TFunc) => void;
    destroy: () => void;
};
export default resizeFunc;
