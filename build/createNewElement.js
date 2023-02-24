import { getDocument } from 'ssr-window';
const document = getDocument();
const createNewElement = (tag, classes) => {
    const elem = document.createElement(tag);
    elem.classList.add(classes);
    return elem;
};
export { createNewElement };
//# sourceMappingURL=createNewElement.js.map