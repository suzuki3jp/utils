export class ArrayUtils {
    static random(array: any[]): any {
        const length = array.length;
        const element = array[Math.floor(Math.random() * length)];
        return element;
    }
}
