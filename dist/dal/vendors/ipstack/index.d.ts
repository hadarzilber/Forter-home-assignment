import { BaseIpVendor } from "../BaseIpVendor";
export declare class IpstackVendor extends BaseIpVendor {
    name: string;
    baseUrl: string;
    getCountry(ip: string): Promise<string>;
}
//# sourceMappingURL=index.d.ts.map