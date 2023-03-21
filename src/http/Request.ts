import axios from 'axios';
import { AxiosRequestConfig, AxiosError } from 'axios';

/**
 * The class that is class for  http requests using axios.
 */
export class RequestClient {
    private baseUrl: string | null;

    constructor(options?: RequestClientOptions) {
        if (options) {
            this.baseUrl = options.baseUrl ?? null;
        } else {
            this.baseUrl = null;
        }
    }

    /**
     * GET method of http request.
     */
    async get(options: RequestGetOptions): Promise<RequestResponse> {
        const url = this.baseUrl ? this.baseUrl + options.url : options.url;
        const config = options.config;

        try {
            const res = await axios.get(url, config);
            return {
                status: res.status,
                data: res.data,
            };
        } catch (error) {
            if (error instanceof AxiosError && error.response) {
                const { status, data } = error.response;
                return { status, data };
            } else {
                throw new Error('Request failed.');
            }
        }
    }

    /**
     * POST method of http request.
     */
    async post(options: RequestPostOptions): Promise<RequestResponse> {
        const url = this.baseUrl ? this.baseUrl + options.url : options.url;
        const body = options.body;
        const config = options.config;

        try {
            const res = await axios.post(url, body, config);
            return {
                status: res.status,
                data: res.data,
            };
        } catch (error) {
            if (error instanceof AxiosError && error.response) {
                const { status, data } = error.response;
                return { status, data };
            } else {
                throw new Error('Request failed.');
            }
        }
    }

    /**
     * PUT method of http request.
     */
    async put(options: RequestPutOptions): Promise<RequestResponse> {
        const url = this.baseUrl ? this.baseUrl + options.url : options.url;
        const body = options.body;
        const config = options.config;

        try {
            const res = await axios.put(url, body, config);
            return { status: res.status, data: res.data };
        } catch (error) {
            if (error instanceof AxiosError && error.response) {
                const { status, data } = error.response;
                return { status, data };
            } else {
                throw new Error('Request failed.');
            }
        }
    }

    async delete(options: RequestDeleteOptions) {
        const url = this.baseUrl ? this.baseUrl + options.url : options.url;
        const config = options.config;

        try {
            const res = await axios.delete(url, config);
            return { status: res.status, data: res.data };
        } catch (error) {
            if (error instanceof AxiosError && error.response) {
                const { status, data } = error.response;
                return { status, data };
            } else {
                throw new Error('Request failed.');
            }
        }
    }
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
    body?: Object;

    /**
     * Request config.
     */
    config?: AxiosRequestConfig;
}

export interface RequestPutOptions {
    /**
     * If RequestClientOptions#baseUrl is undefined, the url is used as is.
     */
    url: string;

    /**
     * Request body.
     */
    body?: Object;

    /**
     * Request config.
     */
    config?: AxiosRequestConfig;
}

export interface RequestDeleteOptions {
    /**
     * If RequestClientOptions#baseUrl is undefined, the url is used as is.
     */
    url: string;

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
