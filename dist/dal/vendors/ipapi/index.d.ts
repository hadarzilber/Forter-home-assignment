import { BaseIpVendor } from "../BaseIpVendor";
export declare class IpApiVendor extends BaseIpVendor {
    name: string;
    baseUrl: string;
    countryKeyName: string;
    getCountryFromVendor(ip: string): Promise<string>;
}
//# sourceMappingURL=index.d.ts.map