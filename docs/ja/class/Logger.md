# Logger
## Usage
```js
const { Logger } = require("@suzuki3jp/utils");
const path = require("path");

const options = {
    isSaveLogToCsv: true;
    logFilePath: path.resolve(__dirname, "./log.csv");
}
const logger = new Logger(options);
logger.system("example system log message.")
```
## constructor(options: [LoggerOptions](../type/LoggerOptions.md))
## methods
- **system(message: string): void**
    - consoleにログを出力
    - `LoggerOptions.isSaveToCsv`がtrueだった場合はCSVにもログを保存
    - ログの内容 -> `[${JSTDate.getDateString()}] SYSTEM: ${message}`
        - "[yyyy/mm/dd hh:mm:ss] SYSTEM: example"
        - [JSTDate](./JSTDate.md)
- **info(message: string): void**
    - consoleにログを出力
    - `LoggerOptions.isSaveToCsv`がtrueだった場合はCSVにもログを保存
    - ログの内容 -> `[${JSTDate.getDateString()}] INFO: ${message}`
        - "[yyyy/mm/dd hh:mm:ss] INFO: example"
        - [JSTDate](./JSTDate.md)
- **error(message: string): void**
    - consoleにログを出力
    - `LoggerOptions.isSaveToCsv`がtrueだった場合はCSVにもログを保存
    - ログの内容 -> `[${JSTDate.getDateString()}] ERROR: ${message}`
        - "[yyyy/mm/dd hh:mm:ss] ERROR: example"
        - [JSTDate](./JSTDate.md)
- **writeToCsv(data: string): string | undefined**
    - @param data: string
        - CSVに書き込むデータ
    - @returns string | undefined
        - 最新のログファイルのデータ
        - `LoggerOptions.isSaveToCsv`がfalseの場合undefined