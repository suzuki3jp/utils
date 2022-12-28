"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Request = void 0;
const axios_1 = __importDefault(require("axios"));
const axios_2 = require("axios");
const index_1 = require("../index");
/**
 * The class that is class for  http requests using axios.
 */
class Request {
    baseUrl;
    constructor(baseUrl) {
        this.baseUrl = baseUrl ?? null;
    }
    /**
     * GET method of http request.
     * @param endPoint baseUrlが未設定の場合そのまま使用
     */
    async get(endPoint, config) {
        const url = this.baseUrl === null ? endPoint : this.baseUrl + endPoint;
        try {
            const res = await axios_1.default.get(url, config);
            const result = {
                status: res.status,
                data: res.data,
            };
            return result;
        }
        catch (error) {
            if (error instanceof axios_2.AxiosError) {
                if (error.response) {
                    const { status, data } = error.response;
                    const result = {
                        status,
                        data,
                    };
                    return result;
                }
                else {
                    throw new index_1.CustomError('RequestError', 'Request failed.');
                }
            }
            else {
                throw new index_1.CustomError('RequestError', 'Request failed.');
            }
        }
    }
    /**
     * POST method of http request.
     * @param endPoint baseUrlが未設定の場合そのまま使用
     */
    async post(endPoint, body) {
        const url = this.baseUrl === null ? endPoint : this.baseUrl + endPoint;
        try {
            const res = await axios_1.default.post(url, body);
            const result = {
                status: res.status,
                data: res.data,
            };
            return result;
        }
        catch (error) {
            if (error instanceof axios_2.AxiosError) {
                if (error.response) {
                    const { status, data } = error.response;
                    const result = {
                        status,
                        data,
                    };
                    return result;
                }
                else {
                    throw new index_1.CustomError('RequestError', 'Request failed.');
                }
            }
            else {
                throw new index_1.CustomError('RequestError', 'Request failed.');
            }
        }
    }
}
exports.Request = Request;
