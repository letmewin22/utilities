"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mutationObserver = exports.createNewElement = exports.lerp = exports.clamp = exports.resize = exports.raf = void 0;
const raf_1 = require("./raf/raf");
Object.defineProperty(exports, "raf", { enumerable: true, get: function () { return raf_1.raf; } });
const resize_1 = require("./resize/resize");
Object.defineProperty(exports, "resize", { enumerable: true, get: function () { return resize_1.resize; } });
const math_1 = require("./math");
Object.defineProperty(exports, "clamp", { enumerable: true, get: function () { return math_1.clamp; } });
Object.defineProperty(exports, "lerp", { enumerable: true, get: function () { return math_1.lerp; } });
const createNewElement_1 = require("./createNewElement");
Object.defineProperty(exports, "createNewElement", { enumerable: true, get: function () { return createNewElement_1.createNewElement; } });
const mutationObserver_1 = __importDefault(require("./mutationObserver"));
exports.mutationObserver = mutationObserver_1.default;
//# sourceMappingURL=index.js.map