declare type TFunc = () => void;
export declare class Resize {
    cbArray: Array<null | TFunc>;
    debounced: TFunc;
    constructor();
    bounds(): void;
    init(): void;
    resizeHandler(): void;
    on(cb: TFunc): void;
    off(cb: TFunc): void;
    destroy(): void;
}
export declare const resize: {
    on: (cb: TFunc) => void;
    off: (cb: TFunc) => void;
};
export {};
