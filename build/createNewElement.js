"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNewElement = void 0;
const createNewElement = (tag, classes) => {
    const elem = document.createElement(tag);
    elem.classList.add(classes);
    return elem;
};
exports.createNewElement = createNewElement;
//# sourceMappingURL=createNewElement.js.map