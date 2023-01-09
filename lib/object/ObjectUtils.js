"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectUtils = void 0;
class ObjectUtils {
    static forEach(target, callbackFn) {
        for (const [key, value] of Object.entries(target)) {
            callbackFn(key, value);
        }
    }
    static at(object, index) {
        const array = Object.entries(object);
        return { index, key: array[index][0], value: array[index][1] };
    }
    static KVlength(object) {
        return Object.entries(object).length;
    }
}
exports.ObjectUtils = ObjectUtils;
