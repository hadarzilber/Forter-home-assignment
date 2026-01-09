import { GetCountryOptions } from "./types";
export declare abstract class BaseIpVendor {
    abstract name: string;
    abstract baseUrl: string;
    getCountry(ip: string, options?: GetCountryOptions): Promise<string>;
    private assertCountryName;
}
//# sourceMappingURL=BaseIpVendor.d.ts.map