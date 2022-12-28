"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomError = void 0;
/**
 * A customizable error class.
 */
class CustomError extends Error {
    constructor(name, message) {
        super(message);
        this.name = name;
    }
}
exports.CustomError = CustomError;
