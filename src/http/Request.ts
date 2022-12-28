import axios from 'axios';
import { AxiosRequestConfig, AxiosError } from 'axios';

import { CustomError } from '../index';

/**
 * The class that is class for  http requests using axios.
 */
export class Request {
    public baseUrl: string | null;

    constructor(baseUrl?: string) {
        this.baseUrl = baseUrl ?? null;
    }

    /**
     * GET method of http request.
     * @param endPoint baseUrlが未設定の場合そのまま使用
     */
    async get(endPoint: string, config?: AxiosRequestConfig): Promise<RequestGetResult> {
        const url = this.baseUrl === null ? endPoint : this.baseUrl + endPoint;
        try {
            const res = await axios.get(url, config);
            const result: RequestGetResult = {
                status: res.status,
                data: res.data,
            };
            return result;
        } catch (error) {
            if (error instanceof AxiosError) {
                if (error.response) {
                    const { status, data } = error.response;
                    const result: RequestGetResult = {
                        status,
                        data,
                    };
                    return result;
                } else {
                    throw new CustomError('RequestError', 'Request failed.');
                }
            } else {
                throw new CustomError('RequestError', 'Request failed.');
            }
        }
    }

    /**
     * POST method of http request.
     * @param endPoint baseUrlが未設定の場合そのまま使用
     */
    async post(endPoint: string, body?: URLSearchParams): Promise<RequestPostResult> {
        const url = this.baseUrl === null ? endPoint : this.baseUrl + endPoint;
        try {
            const res = await axios.post(url, body);
            const result: RequestGetResult = {
                status: res.status,
                data: res.data,
            };
            return result;
        } catch (error) {
            if (error instanceof AxiosError) {
                if (error.response) {
                    const { status, data } = error.response;
                    const result: RequestGetResult = {
                        status,
                        data,
                    };
                    return result;
                } else {
                    throw new CustomError('RequestError', 'Request failed.');
                }
            } else {
                throw new CustomError('RequestError', 'Request failed.');
            }
        }
    }
}

export interface RequestGetResult {
    status: number;
    data: object;
}

export interface RequestPostResult {
    status: number;
    data: object;
}
