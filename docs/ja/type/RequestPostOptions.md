```ts
import type { AxiosRequestConfig } from "axios";

{
    /**
     * If RequestClientOptions#baseUrl is undefined, the url is used as is.
     */
    url: string;

    /**
     * Request body.
     */
    body?: URLSearchParams;

    /**
     * Request config.
     */
    config?: AxiosRequestConfig;
}
```