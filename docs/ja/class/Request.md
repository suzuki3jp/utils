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
    - コンストラクタでbaseUrlが設定されている場合 -> `${baseUrl}${options.url}`にアクセス
    - コンストラクタでbaseUrlが設定されていない場合 -> `${options.url}`にアクセス
- **async post(options: [RequestPostOptions](../type/RequestPostOptions.md)): Promise\<[RequestResponse](../type/RequestResponse.md)>**
    - POST
    - コンストラクタでbaseUrlが設定されている場合 -> `${baseUrl}${options.url}`にアクセス
    - コンストラクタでbaseUrlが設定されていない場合 -> `${options.url}`にアクセス