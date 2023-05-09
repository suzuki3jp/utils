export class ArrayUtils {
    static random<T>(array: T[]): T {
        const length = array.length;
        const element = array[Math.floor(Math.random() * length)];
        return element;
    }
}
