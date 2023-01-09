# UTC
## Usage
```js
const { UTC } = require("@suzuki3jp/utils");

const utcDate = UTC.getDate(); // Date
const utcDateString = UTC.getDateString();

console.log(utcDateString); // expected output: "yyyy/mm/dd hh:mm:ss"
```
## methods
- **getDate(): Date**
    - static
    - 協定世界時のDateクラスを返す
- **getDateString(): string**
    - static
    - フォーマットされた協定世界時を返す
    - 書式は日本式です
    - ["yyyy/mm/dd hh:mm:ss"](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString)