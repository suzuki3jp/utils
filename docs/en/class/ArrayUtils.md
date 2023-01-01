# ArrayUtils
## Usage
```js
const { ArrayUtils } = require("@suzuki3jp/utils");
const array = ["one", "two", "three"];

const str = ArrayUtils.random(array);
console.log(str);// expected output: "one" or "two" or "three"
```
## methods
- **random(array: any[]): any**
    - static
    - Returns a random element from the passed array.