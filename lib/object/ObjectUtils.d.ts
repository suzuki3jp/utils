export declare class ObjectUtils {
    static forEach(target: object, callbackFn: (key?: string, value?: unknown) => void): void;
    static at(object: object, index: number): {
        index: number;
        key: any;
        value: any;
    };
    static KVlength(object: object): number;
}
