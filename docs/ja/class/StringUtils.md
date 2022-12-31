# StringUtils
## Usage
```js
const { StringUtils } = require("@suzuki3jp/utils");
const targetStr = "example";
const countStr = "e";

const eSize = StringUtils.countBy(targetStr, countStr);
console.log(eSize); // expected output: 2
```
## methods
- **countBy(targetStr: string, countStr: string): number**
    - static
    - targetStrにcountStrが何個含まれているか数える