# JSTDate
Class for handling accurate Japanese time regardless of the execution environment.
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
    - Returns a Date class for Japan time.
- **getDateString(): string**
    - static
    - Returns formatted Japan time
    - ["yyyy/mm/dd hh:mm:ss"](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString)