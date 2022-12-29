"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayUtils = void 0;
class ArrayUtils {
    static random(array) {
        const length = array.length;
        const element = array[Math.floor(Math.random() * length)];
        return element;
    }
}
exports.ArrayUtils = ArrayUtils;
