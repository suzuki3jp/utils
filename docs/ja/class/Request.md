# Request
## Usage
```js
const { Request } = require("@suzuki3jp/utils");
const req = new Request();

(async () => {
    const getRes = await req.get("https://example.com"); // expected returns: RequestGetResult
    const postRes = await req.post("https://example.com"); // expected returns: RequestPostResult
})();
```
## constructor(baseUrl?: string)
## methods
- **async get(endPoint: string, config?: AxiosRequestConfig): Promise\<[RequestGetResult](../type/RequestGetResult.md)>**
    - GET
    - コンストラクタでbaseUrlが設定されている場合 -> `${baseUrl}${endPoint}`にアクセス
    - コンストラクタでbaseUrlが設定されていない場合 -> `${endPoint}`にアクセス
- **async post(endPoint: string, body?: URLSearchParams): Promise\<[RequestPostResult](../type/RequestPostResult.md)>**
    - POST
    - コンストラクタでbaseUrlが設定されている場合 -> `${baseUrl}${endPoint}`にアクセス
    - コンストラクタでbaseUrlが設定されていない場合 -> `${endPoint}`にアクセス