# EnvParser
## Usage
```js
const { EnvParser } = require("@suzuki3jp/utils");
const { writeFileSync } = require("fs");

const envObj = {
    foo: "bar",
    bar: "foo",
};

const envData = EnvParser.parseToEnv(envObj);
console.log(envData)// expected output: 'foo = "bar"\nbar = "foo"'
writeFileSync(".env", envData, { encoding: "utf-8" });
```
## methods
- **parseToEnv(data: object): string**
    - static
    - Parse from object to .env format.