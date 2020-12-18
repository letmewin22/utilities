"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNewElement = exports.lerp = exports.clamp = exports.resize = exports.raf = void 0;
const raf_1 = require("./raf/raf");
Object.defineProperty(exports, "raf", { enumerable: true, get: function () { return raf_1.raf; } });
const resize_1 = require("./resize/resize");
Object.defineProperty(exports, "resize", { enumerable: true, get: function () { return resize_1.resize; } });
const math_1 = require("./math");
Object.defineProperty(exports, "clamp", { enumerable: true, get: function () { return math_1.clamp; } });
Object.defineProperty(exports, "lerp", { enumerable: true, get: function () { return math_1.lerp; } });
const createNewElement_1 = require("./createNewElement");
Object.defineProperty(exports, "createNewElement", { enumerable: true, get: function () { return createNewElement_1.createNewElement; } });
//# sourceMappingURL=index.js.map