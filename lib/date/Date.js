"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UTC = exports.JST = void 0;
class JST {
    static getDate() {
        return new Date(Date.now() + (new Date().getTimezoneOffset() + 9 * 60) * 60 * 1000);
    }
    static getDateString() {
        return this.getDate().toLocaleString('ja');
    }
}
exports.JST = JST;
class UTC {
    static getDate() {
        return new Date(new Date().getUTCDate());
    }
    static getDateString() {
        return this.getDate().toLocaleString('ja');
    }
}
exports.UTC = UTC;
