# JSTDate
実行環境に左右されずに正確な日本時間を扱うためのクラス
## Usage
```js
const { JST } = require("@suzuki3jp/utils");

const jstDate = JST.getDate(); // Date
const jstDateString = JST.getDateString();

console.log(jstDateString); // expected output: "yyyy/mm/dd hh:mm:ss"
```
## methods
- **getDate(): Date**
    - static
    - 日本時間のDateクラスを返す
- **getDateString(): string**
    - static
    - フォーマットされた日本時間を返す
    - 書式は日本式です
    - ["yyyy/mm/dd hh:mm:ss"](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString)