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

console.log(ObjectUtils.at(obj, 1)); // expected output: { index: 1, key: "bar", value: "foo"}

console.log(ObjectUtils.KVlength(obj)); // expected output: 2
```
## methods
- **forEach(target: object, callbackFn: (key?: string, value?: unknown) => void)**
    - static
    - オブジェクトのkey, valueの各セットに対して関数を実行する
    - Array#forEachのような
- **at(object: object, index: number): { index: number; key: any; value: any }**
    - static
    - オブジェクトのkey, valueに対してindexでアクセスする
- **KVlength(object: object): number**
    - static
    - オブジェクトのkey, valueの数