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
    match(breakpoint, cb) {
        let mediaQuery;
        if (breakpoint.startsWith('<')) {
            const value = breakpoint.slice(1);
            mediaQuery = `(max-width: ${value})`;
        }
        else if (breakpoint.startsWith('>')) {
            const value = breakpoint.slice(1);
            mediaQuery = `(min-width: ${value})`;
        }
        else {
            mediaQuery = `(min-width: ${breakpoint})`;
        }
        const mql = window.matchMedia(mediaQuery);
        if (mql.matches) {
            cb();
        }
        mql.onchange = () => {
            if (mql.matches) {
                cb();
            }
        };
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
    match: (breakpoint, cb) => resizeInstance.match(breakpoint, cb),
    destroy: () => resizeInstance.destroy(),
};
//# sourceMappingURL=resize.js.map