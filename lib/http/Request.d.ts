import { AxiosRequestConfig } from 'axios';
/**
 * The class that is class for  http requests using axios.
 */
export declare class Request {
    baseUrl: string | null;
    constructor(baseUrl?: string);
    /**
     * GET method of http request.
     * @param endPoint baseUrlが未設定の場合そのまま使用
     */
    get(endPoint: string, config?: AxiosRequestConfig): Promise<RequestGetResult>;
    /**
     * POST method of http request.
     * @param endPoint baseUrlが未設定の場合そのまま使用
     */
    post(endPoint: string, body?: URLSearchParams): Promise<RequestPostResult>;
}
export interface RequestGetResult {
    status: number;
    data: object;
}
export interface RequestPostResult {
    status: number;
    data: object;
}
