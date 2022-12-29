"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnvParser = void 0;
const index_1 = require("../index");
class EnvParser {
    static parseToEnv(data) {
        let envData;
        index_1.ObjectUtils.forEach(data, (key, value) => {
            if (envData) {
                envData = `${envData}\n${key} = "${value}"`;
            }
            else {
                envData = `${key} = "${value}"`;
            }
        });
        // @ts-ignore
        return envData;
    }
}
exports.EnvParser = EnvParser;
