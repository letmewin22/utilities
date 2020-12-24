"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clamp = exports.lerp = void 0;
const lerp = (a, b, n) => {
    return a * (1 - n) + b * n;
};
exports.lerp = lerp;
const clamp = (num, a, b) => {
    return Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b));
};
exports.clamp = clamp;
//# sourceMappingURL=math.js.map