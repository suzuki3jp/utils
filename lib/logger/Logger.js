"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const fs_1 = require("fs");
const index_1 = require("../index");
class Logger {
    logFilePath;
    logFileName;
    constructor(options) {
        if (options.isSaveLogToCsv) {
            // ログをファイルに保存する場合
            if (!options.logFilePath)
                throw new index_1.CustomError('LogOptionsError', LoggerErrorMessage.logFilePathUndefined);
            this.logFilePath = options.logFilePath;
            const logFilePaths = this.logFilePath.split('/');
            this.logFileName = logFilePaths[logFilePaths.length - 1];
        }
        else {
            this.logFilePath = null;
            this.logFileName = null;
        }
    }
    system(message) {
        const now = index_1.JSTDate.getDateString();
        const logMessage = `[${now}] SYSTEM: ${message}`;
        console.log(logMessage);
        this.writeToCsv(logMessage);
    }
    info(message) {
        const now = index_1.JSTDate.getDateString();
        const logMessage = `[${now}] INFO: ${message}`;
        console.info(logMessage);
        this.writeToCsv(logMessage);
    }
    error(message) {
        const now = index_1.JSTDate.getDateString();
        const logMessage = `[${now}] ERROR: ${message}`;
        console.error(logMessage);
        this.writeToCsv(logMessage);
    }
    /**
     * ログファイルに書き込む
     * @param data 書き込むデータ
     * @returns 最新のログファイルのデータ
     */
    writeToCsv(data) {
        if (!this.logFilePath)
            throw new index_1.CustomError('LogWriteError', LoggerErrorMessage.canNotWriteToCsv);
        const oldData = (0, fs_1.readFileSync)(this.logFilePath, { encoding: 'utf-8' });
        const newData = `${oldData}${data}\n`;
        (0, fs_1.writeFileSync)(this.logFilePath, newData, { encoding: 'utf-8' });
        return newData;
    }
}
exports.Logger = Logger;
const LoggerErrorMessage = {
    logFilePathUndefined: 'If LoggerOptions.isSaveLogToCsv is true, LoggerOptions.logFilePath is required',
    canNotWriteToCsv: 'Can not write to csv. LoggerOptions.logFilePath is reqeuired.',
};
