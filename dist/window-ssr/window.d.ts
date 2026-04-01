declare const ssrWindow: {
    document: {
        body: {};
        addEventListener(): void;
        removeEventListener(): void;
        activeElement: {
            blur(): void;
            nodeName: string;
        };
        querySelector(): null;
        querySelectorAll(): never[];
        getElementById(): null;
        createEvent(): {
            initEvent(): void;
        };
        createElement(): {
            children: never[];
            childNodes: never[];
            style: {};
            setAttribute(): void;
            getElementsByTagName(): never[];
        };
        createElementNS(): {};
        importNode(): null;
        location: {
            hash: string;
            host: string;
            hostname: string;
            href: string;
            origin: string;
            pathname: string;
            protocol: string;
            search: string;
        };
    };
    navigator: {
        userAgent: string;
    };
    location: {
        hash: string;
        host: string;
        hostname: string;
        href: string;
        origin: string;
        pathname: string;
        protocol: string;
        search: string;
    };
    history: {
        replaceState(): void;
        pushState(): void;
        go(): void;
        back(): void;
    };
    CustomEvent: () => any;
    addEventListener(): void;
    removeEventListener(): void;
    getComputedStyle(): {
        getPropertyValue(): string;
    };
    Image(): void;
    Date(): void;
    screen: {};
    setTimeout(): void;
    clearTimeout(): void;
    matchMedia(): {};
    requestAnimationFrame(callback: FrameRequestCallback): number;
    cancelAnimationFrame(id: number): number;
};
declare function getWindow(): Window;
export { getWindow, ssrWindow };
