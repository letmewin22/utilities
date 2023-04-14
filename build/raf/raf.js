import { getWindow } from 'ssr-window';
const window = getWindow();
export class RAF {
    cbArray;
    constructor() {
        this.cbArray = [];
        this.animation = this.animation.bind(this);
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
        window.requestAnimationFrame(this.animation);
    }
}
const RAFInstance = new RAF();
export const raf = {
    on: (cb) => RAFInstance.on(cb),
    off: (cb) => RAFInstance.off(cb),
};
//# sourceMappingURL=raf.js.map