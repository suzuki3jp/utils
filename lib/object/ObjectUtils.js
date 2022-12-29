"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectUtils = void 0;
class ObjectUtils {
    static forEach(target, callbackFn) {
        for (const [key, value] of Object.entries(target)) {
            callbackFn(key, value);
        }
    }
}
exports.ObjectUtils = ObjectUtils;
