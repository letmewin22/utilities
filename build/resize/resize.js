"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resize = exports.Resize = void 0;
const debounce_1 = require("debounce");
class Resize {
    constructor() {
        this.cbArray = [];
        this.init();
    }
    bounds() {
        const methods = ['resizeHandler'];
        methods.forEach(fn => {
            this[fn] = this[fn].bind(this);
        });
    }
    init() {
        this.bounds();
        this.debounced = debounce_1.debounce(this.resizeHandler, 60);
        window.addEventListener('resize', this.debounced);
    }
    resizeHandler() {
        this.cbArray.forEach(cb => cb());
    }
    on(cb) {
        cb();
        this.cbArray.push(cb);
    }
    off(cb) {
        this.cbArray = this.cbArray.filter(e => e !== cb);
    }
    destroy() {
        window.removeEventListener('resize', this.resizeHandler);
    }
}
exports.Resize = Resize;
const resizeInstance = new Resize();
exports.resize = {
    on: (cb) => resizeInstance.on(cb),
    off: (cb) => resizeInstance.off(cb),
};
//# sourceMappingURL=resize.js.map