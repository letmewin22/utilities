declare type TFunc = () => void;
export declare class RAF {
    cbArray: Array<null | TFunc>;
    constructor();
    on(cb: TFunc): void;
    off(cb: TFunc): void;
    animation(): void;
}
export declare const raf: {
    on: (cb: TFunc) => void;
    off: (cb: TFunc) => void;
};
export {};
