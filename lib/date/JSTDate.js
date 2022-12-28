"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JSTDate = void 0;
class JSTDate {
    static getDate() {
        return new Date(Date.now() + (new Date().getTimezoneOffset() + 9 * 60) * 60 * 1000);
    }
    static getDateString() {
        const nowDate = new Date(Date.now() + (new Date().getTimezoneOffset() + 9 * 60) * 60 * 1000);
        return nowDate.toLocaleString('ja');
    }
}
exports.JSTDate = JSTDate;
