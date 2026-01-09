import { BaseIpVendor } from "../../dal/vendors/BaseIpVendor";
export declare class VendorManager {
    private vendors;
    constructor(vendors: BaseIpVendor[]);
    getCountry(ip: string): Promise<string>;
}
//# sourceMappingURL=vendorManager.d.ts.map