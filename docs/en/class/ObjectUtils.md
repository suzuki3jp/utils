# ObjectUtils
## Usage
```js
const { ObjectUtils } = require("@suzuki3jp/utils");
const obj = {
    foo: "bar",
    bar: "foo",
};

let arr;
ObjectUtils.forEach(obj, (key, value) => {
    const raw = `${key}: ${value}`;
    arr.push(raw);
})

console.log(arr); // expected output: ["foo: bar", "bar: foo"]
```
## methods
- **forEach(target: object, callbackFn: (key?: string, value?: unknown) => void)**
    - static
    - Performs a function on each set of keys and values of an object.
    - Like Array#forEach.