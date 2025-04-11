type TFunc = (...args: any) => void;
export declare class RAF {
    cbArray: Array<null | TFunc>;
    raf: number;
    lastTime: number;
    constructor();
    on(cb: TFunc): void;
    off(cb: TFunc): void;
    animation(time: number): void;
    destroy(): void;
}
declare const rafFunc: {
    on: (cb: TFunc) => void;
    off: (cb: TFunc) => void;
    destroy: () => void;
};
export default rafFunc;
