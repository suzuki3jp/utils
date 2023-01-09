# JST
Class for handling accurate Japanese time regardless of the execution environment.
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
    - Returns a Date class for Japan time.
- **getDateString(): string**
    - static
    - Returns formatted Japan time
    - The format is Japanese style.
    - ["yyyy/mm/dd hh:mm:ss"](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString)