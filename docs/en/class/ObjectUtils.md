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
    - Performs a function on each set of keys and values of an object.
    - Like Array#forEach.
- **at(object: object, index: number): { index: number; key: any; value: any }**
    - static
    - Access the key and value of the object by index.
- **KVlength(object: object): number**
    - static
    - The number of keys and valus of the object.