"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestClient = void 0;
const axios_1 = __importDefault(require("axios"));
const axios_2 = require("axios");
/**
 * The class that is class for  http requests using axios.
 */
class RequestClient {
    baseUrl;
    constructor(options) {
        if (options) {
            this.baseUrl = options.baseUrl ?? null;
        }
        else {
            this.baseUrl = null;
        }
    }
    /**
     * GET method of http request.
     */
    async get(options) {
        const url = this.baseUrl ? this.baseUrl + options.url : options.url;
        const config = options.config;
        try {
            const res = await axios_1.default.get(url, config);
            return {
                status: res.status,
                data: res.data,
            };
        }
        catch (error) {
            if (error instanceof axios_2.AxiosError && error.response) {
                const { status, data } = error.response;
                return { status, data };
            }
            else {
                throw new Error('Request failed.');
            }
        }
    }
    /**
     * POST method of http request.
     */
    async post(options) {
        const url = this.baseUrl ? this.baseUrl + options.url : options.url;
        const body = options.body;
        const config = options.config;
        try {
            const res = await axios_1.default.post(url, body, config);
            return {
                status: res.status,
                data: res.data,
            };
        }
        catch (error) {
            if (error instanceof axios_2.AxiosError && error.response) {
                const { status, data } = error.response;
                return { status, data };
            }
            else {
                throw new Error('Request failed.');
            }
        }
    }
    /**
     * PUT method of http request.
     */
    async put(options) {
        const url = this.baseUrl ? this.baseUrl + options.url : options.url;
        const body = options.body;
        const config = options.config;
        try {
            const res = await axios_1.default.put(url, body, config);
            return { status: res.status, data: res.data };
        }
        catch (error) {
            if (error instanceof axios_2.AxiosError && error.response) {
                const { status, data } = error.response;
                return { status, data };
            }
            else {
                throw new Error('Request failed.');
            }
        }
    }
    async delete(options) {
        const url = this.baseUrl ? this.baseUrl + options.url : options.url;
        const config = options.config;
        try {
            const res = await axios_1.default.delete(url, config);
            return { status: res.status, data: res.data };
        }
        catch (error) {
            if (error instanceof axios_2.AxiosError && error.response) {
                const { status, data } = error.response;
                return { status, data };
            }
            else {
                throw new Error('Request failed.');
            }
        }
    }
}
exports.RequestClient = RequestClient;
