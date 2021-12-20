"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.keysGenerator = void 0;
const keysGenerator = (length) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};
exports.keysGenerator = keysGenerator;
//# sourceMappingURL=keysGenerator.js.map