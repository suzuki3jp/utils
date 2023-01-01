# CustomError extends Error
## Usage
```js
const { CustomError } = require("@suzuki3jp/utils");
const str = "example";

if (typeof str !== "string") {
    throw new CustomError("strError", "str is not string.");
}
```
## constructor(name: string, message: string)
- Error classes with customizable error names and error messages.