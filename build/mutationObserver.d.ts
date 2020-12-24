declare type TFunc = {
    t: HTMLElement | Element;
    cb: () => void;
};
declare const mutationObserver: (target: TFunc['t'], outsideCallback: TFunc['cb']) => (() => void);
export default mutationObserver;
