import { BaseIpVendor } from "../../dal/vendors/BaseIpVendor";
import { ServiceUnavailableError } from "../../errors/customErrors";
import {
  canCallVendor,
  incrementVendorUsage,
} from "./vendorRateLimiter/vendorRateLimiter";

export class VendorManager {
  constructor(private vendors: BaseIpVendor[]) {}

  async getCountry(ip: string): Promise<string> {
    for (const vendor of this.vendors) {
      if (!(await canCallVendor(vendor.name))) {
        continue;
      }

      try {
        const country = await vendor.getCountryFromVendor(ip);
        await incrementVendorUsage(vendor.name);
        return country;
      } catch (err) {
        continue;
      }
    }

    throw new ServiceUnavailableError(
      "All IP lookup vendors are currently unavailable or rate-limited."
    );
  }
}
