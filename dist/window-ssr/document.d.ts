declare const ssrDocument: {
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
declare function getDocument(): Document;
export { getDocument, ssrDocument };
