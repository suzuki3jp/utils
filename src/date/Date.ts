export class JST {
    static getDate(): Date {
        return new Date(Date.now() + (new Date().getTimezoneOffset() + 9 * 60) * 60 * 1000);
    }

    static getDateString(): string {
        return this.getDate().toLocaleString('ja');
    }
}

export class UTC {
    static getDate(): Date {
        return new Date(new Date().getUTCDate());
    }

    static getDateString(): string {
        return this.getDate().toLocaleString('ja');
    }
}
