import { BaseIpVendor } from "../BaseIpVendor";
export declare class IpInfoVendor extends BaseIpVendor {
    name: string;
    baseUrl: string;
    countryKeyName: string;
    isCountryCodeReturned: boolean;
    getCountryFromVendor(ip: string): Promise<string>;
}
//# sourceMappingURL=index.d.ts.map