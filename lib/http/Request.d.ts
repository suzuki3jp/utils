import { AxiosRequestConfig } from 'axios';
/**
 * The class that is class for  http requests using axios.
 */
export declare class RequestClient {
    private baseUrl;
    constructor(options?: RequestClientOptions);
    /**
     * GET method of http request.
     */
    get(options: RequestGetOptions): Promise<RequestResponse>;
    /**
     * POST method of http request.
     */
    post(options: RequestPostOptions): Promise<RequestResponse>;
}
export interface RequestClientOptions {
    /**
     * Request base url
     */
    baseUrl?: string;
}
export interface RequestGetOptions {
    /**
     * If RequestClientOptions#baseUrl is undefined, the url is used as is.
     */
    url: string;
    /**
     * Request config.
     */
    config?: AxiosRequestConfig;
}
export interface RequestPostOptions {
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
export interface RequestResponse {
    /**
     * Response status code.
     */
    status: number;
    /**
     * Response data.
     */
    data: any;
}
