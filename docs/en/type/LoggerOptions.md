# LoggerOptions
## Usage
```js
const { Logger } = require("@suzuki3jp/utils");
const path = require("path");

const options/*: LoggerOptions */ =  {
    isSaveToCsv: true,
    logFilePath: path.resolve(__dirname, "./log.csv"),
};

const logger = new Logger(options);
```
## property
- **isSaveToCsv: boolean**
    - Whether to save logs to CSV or not.
    - If this is true, `LoggerOptions#logFilePath` is required.
- **logFilePath: string**
    - Path to CSV file to save logs.
    - Specify by absolute path.
    - This is required if `LoggerOptions#isSaveToCsv` is true.