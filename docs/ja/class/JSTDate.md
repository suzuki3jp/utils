# JSTDate
実行環境に左右されずに正確な日本時間を扱うためのクラス
## Usage
```js
const { JSTDate } = require("@suzuki3jp/utils");

const jstDate = JSTDate.getDate(); // Date
const jstDateString = JSTDate.getDateString();

console.log(jstDateString); // expected output: "yyyy/mm/dd hh:mm:ss"
```
## methods
- **getDate(): Date**
    - static
    - 日本時間のDateクラスを返す
- **getDateString(): string**
    - static
    - フォーマットされた日本時間を返す