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
- **system(...messages: string[]): void**
    - messages are concatenated without spaces and become log messages.
    - Output logs to console.
    - If `LoggerOptions.isSaveToCsv` is true, logs are saved to CSV.
    - Log content. -> `[${JSTDate.getDateString()}] SYSTEM: ${message}`
        - "[yyyy/mm/dd hh:mm:ss] SYSTEM: example"
        - [JSTDate](./JSTDate.md)
- **info(...messages: string[]): void**
    - messages are concatenated without spaces and become log messages.
    - Output logs to console.
    - If `LoggerOptions.isSaveToCsv` is true, logs are saved to CSV.
    - Log content. -> `[${JSTDate.getDateString()}] INFO: ${message}`
        - "[yyyy/mm/dd hh:mm:ss] INFO: example"
        - [JSTDate](./JSTDate.md)
- **error(...messages: string[]): void**
    - messages are concatenated without spaces and become log messages.
    - Output logs to console.
    - If `LoggerOptions.isSaveToCsv` is true, logs are saved to CSV.
    - Log content. -> `[${JSTDate.getDateString()}] ERROR: ${message}`
        - "[yyyy/mm/dd hh:mm:ss] ERROR: example"
        - [JSTDate](./JSTDate.md)
- **writeToCsv(data: string): string | undefined**
    - @param data: string
        - Data to be written to CSV.
    - @returns string | undefined
        - Data from the latest log file
        - Returns `undefined` if `LoggerOptions.isSaveToCsv` is false.