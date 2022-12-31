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
    - CSVにログを保存するかどうか
    - これがtrueの場合`LoggerOptions#logFilePath`が必須になる
- **logFilePath: string**
    - ログを保存するCSVファイルのパス
    - 絶対パスで指定
    - `LoggerOptions#isSaveToCsv`がtrueの場合これが必須になる