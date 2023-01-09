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
    - Returns a Date class for coordinated universal time.
- **getDateString(): string**
    - static
    - Returns formatted coordinated universal time.
    - The format is Japanese style.
    - ["yyyy/mm/dd hh:mm:ss"](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString)