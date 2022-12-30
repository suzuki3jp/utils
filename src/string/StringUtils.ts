export class StringUtils {
    static countBy(targetStr: string, countStr: string) {
        return targetStr.split(countStr).length - 1;
    }
}
