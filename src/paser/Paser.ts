import { ObjectUtils } from '../index';

export class EnvParser {
    static parseToEnv(data: object): string {
        let envData: string;
        ObjectUtils.forEach(data, (key, value) => {
            if (envData) {
                envData = `${envData}\n${key} = "${value}"`;
            } else {
                envData = `${key} = "${value}"`;
            }
        });
        // @ts-ignore
        return envData;
    }
}
