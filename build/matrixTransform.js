"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.matrixTransform = void 0;
const matrixTransform = (params = {}) => {
    var _a, _b, _c, _d, _e, _f, _g;
    const def = {
        scale: (_a = params.scale) !== null && _a !== void 0 ? _a : { x: 1, y: 1 },
        move: (_b = params.move) !== null && _b !== void 0 ? _b : { x: 0, y: 0, z: 0 },
    };
    const p = Object.keys(def).map(key => {
        if (typeof def[key] === 'string' || typeof def[key] === 'number') {
            return { x: def[key], y: def[key], z: def[key] };
        }
        return def[key];
    });
    return `matrix3d(
    ${(_c = p[0].x) !== null && _c !== void 0 ? _c : 1},0,0,0,
    0,${(_d = p[0].y) !== null && _d !== void 0 ? _d : 1},0,0,
    0,0,1,0,
    ${(_e = p[1].x) !== null && _e !== void 0 ? _e : 0},${(_f = p[1].y) !== null && _f !== void 0 ? _f : 0},${(_g = p[1].z) !== null && _g !== void 0 ? _g : 0},1
    )`;
};
exports.matrixTransform = matrixTransform;
//# sourceMappingURL=matrixTransform.js.map