import raf from './raf/raf';
import resize from './resize/resize';
import { clamp, lerp } from './math';
import { createNewElement } from './createNewElement';
import { matrixTransform } from './matrixTransform';
import { delayPromise } from './delay';
import { keysGenerator } from './keysGenerator';
declare const exportObj: {
    raf: {
        on: (cb: (...args: any) => void) => void;
        off: (cb: (...args: any) => void) => void;
        destroy: () => void;
    };
    resize: {
        on: (cb: () => void) => void;
        off: (cb: () => void) => void;
        match: (breakpoint: string, cb: () => void) => void;
        destroy: () => void;
    };
    clamp: (num: number, a: number, b: number) => number;
    lerp: (a: number, b: number, n: number) => number;
    createNewElement: (tag: string, classes: string) => HTMLElement;
    matrixTransform: (params?: import("./matrixTransform").IParams) => string;
    delayPromise: (time?: number) => Promise<void>;
    keysGenerator: (length: number) => string;
};
export { raf, resize, clamp, lerp, createNewElement, matrixTransform, delayPromise, keysGenerator, };
export default exportObj;
