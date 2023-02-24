export const delayPromise = (time = 0) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, time);
    });
};
//# sourceMappingURL=delay.js.map