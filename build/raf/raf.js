"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.raf = exports.RAF = void 0;
class RAF {
    constructor() {
        this.cbArray = [];
        this.animation();
    }
    on(cb) {
        this.cbArray.push(cb);
    }
    off(cb) {
        this.cbArray = this.cbArray.filter(e => e !== cb);
    }
    animation() {
        this.cbArray.forEach(cb => cb());
        requestAnimationFrame(this.animation.bind(this));
    }
}
exports.RAF = RAF;
const RAFInstance = new RAF();
exports.raf = {
    on: (cb) => RAFInstance.on(cb),
    off: (cb) => RAFInstance.off(cb),
};
//# sourceMappingURL=raf.js.map