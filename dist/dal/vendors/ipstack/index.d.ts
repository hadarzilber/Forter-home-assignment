import { BaseIpVendor } from "../BaseIpVendor";
export declare class IpstackVendor extends BaseIpVendor {
    name: string;
    baseUrl: string;
    countryKeyName: string;
    getCountryFromVendor(ip: string): Promise<string>;
}
//# sourceMappingURL=index.d.ts.map