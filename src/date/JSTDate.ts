export class JSTDate {
    static getDate(): Date {
        return new Date(Date.now() + (new Date().getTimezoneOffset() + 9 * 60) * 60 * 1000);
    }

    static getDateString(): string {
        const nowDate = new Date(Date.now() + (new Date().getTimezoneOffset() + 9 * 60) * 60 * 1000);
        return nowDate.toLocaleString('ja');
    }
}
