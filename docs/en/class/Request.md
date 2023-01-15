# Request
## Usage
```js
const { Request } = require("@suzuki3jp/utils");
const req = new Request();

(async () => {
    const getRes = await req.get({ url: "https://example.com" }); // expected returns: RequestResponse
    const postRes = await req.post({ url: "https://example.com" }); // expected returns: RequestResponse
})();
```
## constructor(options: [RequestClientOptions](../type/RequestClientOptions.md))
## methods
- **async get(options: [RequestGetOptions](../type/RequestGetOptions.md)): Promiss\<[RequestResponse](../type/RequestResponse.md)>**
    - GET
    - If baseUrl **is** set in constructor. -> access `${baseUrl}${options.url}`.
    - If baseUrl **is not** set in constructor. -> access `${options.url}`.
- **async post(options: [RequestPostOptions](../type/RequestPostOptions.md)): Promise\<[RequestResponse](../type/RequestResponse.md)>**
    - POST
    - If baseUrl **is** set in constructor. -> access `${baseUrl}${options.url}`.
    - If baseUrl **is not** set in constructor. -> access `${options.url}`.