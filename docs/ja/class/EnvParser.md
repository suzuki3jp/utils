# EnvParser
## Usage
```js
const { EnvParser } = require("@suzuki3jp/utils");
const { writeFileSync } = require("fs");
const path = require("path");

const envObj = {
    foo: "bar",
    bar: "foo",
};

const envData = EnvParser.parseToEnv(envObj);
console.log(envData)// expected output: 'foo = "bar"\nbar = "foo"'
```
## methods
- parseToEnv(data: object): string
    - static
    - オブジェクトから.envの形式にパースする。