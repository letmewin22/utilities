import { getWindow } from 'ssr-window';
const window = getWindow();
export class Resize {
    cbArray;
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
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', this.resizeHandler);
        }
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
        if (typeof window !== 'undefined') {
            window.removeEventListener('resize', this.resizeHandler);
        }
    }
}
const resizeInstance = new Resize();
export const resize = {
    on: (cb) => resizeInstance.on(cb),
    off: (cb) => resizeInstance.off(cb),
};
//# sourceMappingURL=resize.js.map