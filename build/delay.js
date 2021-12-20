"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.delayPromise = void 0;
const delayPromise = (time = 0) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, time);
    });
};
exports.delayPromise = delayPromise;
//# sourceMappingURL=delay.js.map