"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mutationObserver = (target, outsideCallback) => {
    const config = {
        childList: true,
    };
    const callback = function (mutationsList) {
        for (const mutation of mutationsList) {
            if (mutation.type === 'childList') {
                outsideCallback();
                // console.log('A child node has been added or removed.')
            }
        }
    };
    const observer = new MutationObserver(callback);
    observer.observe(target, config);
};
exports.default = mutationObserver;
//# sourceMappingURL=mutationObserver.js.map