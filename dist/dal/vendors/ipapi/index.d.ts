import { BaseIpVendor } from "../BaseIpVendor";
export declare class IpApiVendor extends BaseIpVendor {
    name: string;
    baseUrl: string;
    getCountry(ip: string): Promise<string>;
}
//# sourceMappingURL=index.d.ts.map