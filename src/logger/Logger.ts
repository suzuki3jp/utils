import { writeFileSync, readFileSync } from 'fs';

import { CustomError, JSTDate } from '../index';

export class Logger {
    public logFilePath: string | null;
    public logFileName: string | null;
    public isSaveLogToCsv: boolean;

    constructor(options: LoggerOptions) {
        if (options.isSaveLogToCsv) {
            // ログをファイルに保存する場合
            if (!options.logFilePath) throw new CustomError('LogOptionsError', LoggerErrorMessage.logFilePathUndefined);

            this.isSaveLogToCsv = true;
            this.logFilePath = options.logFilePath;

            const logFilePaths = this.logFilePath.split('/');
            this.logFileName = logFilePaths[logFilePaths.length - 1];
        } else {
            this.isSaveLogToCsv = false;
            this.logFilePath = null;
            this.logFileName = null;
        }
    }

    system(message: string) {
        const now = JSTDate.getDateString();
        const logMessage = `[${now}] SYSTEM: ${message}`;
        console.log(logMessage);
        this.writeToCsv(logMessage);
    }

    info(message: string) {
        const now = JSTDate.getDateString();
        const logMessage = `[${now}] INFO: ${message}`;
        console.info(logMessage);
        this.writeToCsv(logMessage);
    }

    error(message: string) {
        const now = JSTDate.getDateString();
        const logMessage = `[${now}] ERROR: ${message}`;
        console.error(logMessage);
        this.writeToCsv(logMessage);
    }

    /**
     * ログファイルに書き込む
     * @param data 書き込むデータ
     * @returns 最新のログファイルのデータ
     */
    writeToCsv(data: string): string | undefined {
        if (this.isSaveLogToCsv) {
            if (!this.logFilePath) throw new CustomError('LogWriteError', LoggerErrorMessage.canNotWriteToCsv);
            const oldData = readFileSync(this.logFilePath, { encoding: 'utf-8' });
            const newData = `${oldData}${data}\n`;
            writeFileSync(this.logFilePath, newData, { encoding: 'utf-8' });
            return newData;
        } else return;
    }
}

export interface LoggerOptions {
    /**
     * ログをファイルに保存するかどうか
     *
     * これがtrueの場合logFilePathオプションが必要
     */
    isSaveLogToCsv: boolean;

    /**
     * ログを書き込むファイルの絶対パス
     */
    logFilePath?: string;
}

const LoggerErrorMessage = {
    logFilePathUndefined: 'If LoggerOptions.isSaveLogToCsv is true, LoggerOptions.logFilePath is required',
    canNotWriteToCsv: 'Can not write to csv. LoggerOptions.logFilePath is reqeuired.',
};