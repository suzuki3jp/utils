"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringUtils = void 0;
class StringUtils {
    static countBy(targetStr, countStr) {
        return targetStr.split(countStr).length - 1;
    }
}
exports.StringUtils = StringUtils;
