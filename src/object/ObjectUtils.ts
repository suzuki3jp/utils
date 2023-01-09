export class ObjectUtils {
    static forEach(target: object, callbackFn: (key?: string, value?: unknown) => void) {
        for (const [key, value] of Object.entries(target)) {
            callbackFn(key, value);
        }
    }

    static at(object: object, index: number): { index: number; key: any; value: any } {
        const array = Object.entries(object);
        return { index, key: array[index][0], value: array[index][1] };
    }

    static KVlength(object: object): number {
        return Object.entries(object).length;
    }
}
