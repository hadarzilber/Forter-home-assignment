import { GetCountryFromVendorOptions } from "./types";
export declare abstract class BaseIpVendor {
    abstract name: string;
    abstract baseUrl: string;
    abstract countryKeyName: string;
    isCountryCodeReturned: boolean;
    getCountryFromVendor(ip: string, options?: GetCountryFromVendorOptions): Promise<string>;
    private assertCountryName;
}
//# sourceMappingURL=BaseIpVendor.d.ts.map