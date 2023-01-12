"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const fs_1 = require("fs");
const index_1 = require("../index");
class Logger {
    logFilePath;
    logFileName;
    isSaveLogToCsv;
    constructor(options) {
        if (options.isSaveLogToCsv) {
            // ログをファイルに保存する場合
            if (!options.logFilePath)
                throw new index_1.CustomError('LogOptionsError', ErrorCodes.logFilePathUndefined);
            this.isSaveLogToCsv = true;
            this.logFilePath = options.logFilePath;
            const logFilePaths = this.logFilePath.split('/');
            this.logFileName = logFilePaths[logFilePaths.length - 1];
        }
        else {
            this.isSaveLogToCsv = false;
            this.logFilePath = null;
            this.logFileName = null;
        }
    }
    system(...messages) {
        const message = messages.join('');
        const now = index_1.JST.getDateString();
        const logMessage = `[${now}] SYSTEM: ${message}`;
        console.log(logMessage);
        this.writeToCsv(logMessage + '\n');
    }
    info(...messages) {
        const message = messages.join('');
        const now = index_1.JST.getDateString();
        const logMessage = `[${now}] INFO: ${message}`;
        console.info(logMessage);
        this.writeToCsv(logMessage + '\n');
    }
    error(...messages) {
        const message = messages.join('');
        const now = index_1.JST.getDateString();
        const logMessage = `[${now}] ERROR: ${message}`;
        console.error(logMessage);
        this.writeToCsv(logMessage + '\n');
    }
    /**
     * ログファイルに書き込む
     * @param data 書き込むデータ
     * @returns 最新のログファイルのデータ
     */
    writeToCsv(data) {
        if (this.isSaveLogToCsv) {
            if (!this.logFilePath)
                throw new index_1.CustomError('LogWriteError', ErrorCodes.canNotWriteToCsv);
            const oldData = (0, fs_1.readFileSync)(this.logFilePath, { encoding: 'utf-8' });
            const newData = `${oldData}${data}`;
            (0, fs_1.writeFileSync)(this.logFilePath, newData, { encoding: 'utf-8' });
            return newData;
        }
        else
            return;
    }
}
exports.Logger = Logger;
const ErrorCodes = {
    logFilePathUndefined: 'If LoggerOptions.isSaveLogToCsv is true, LoggerOptions.logFilePath is required',
    canNotWriteToCsv: 'Can not write to csv. LoggerOptions.logFilePath is reqeuired.',
};
