export declare class Logger {
    logFilePath: string | null;
    logFileName: string | null;
    isSaveLogToCsv: boolean;
    constructor(options: LoggerOptions);
    system(...messages: string[]): void;
    info(...messages: string[]): void;
    error(...messages: string[]): void;
    /**
     * ログファイルに書き込む
     * @param data 書き込むデータ
     * @returns 最新のログファイルのデータ
     */
    writeToCsv(data: string): string | undefined;
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
