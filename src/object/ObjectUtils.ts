export class ObjectUtils {
    static forEach(target: object, callbackFn: (key?: string, value?: unknown) => void) {
        for (const [key, value] of Object.entries(target)) {
            callbackFn(key, value);
        }
    }
}
