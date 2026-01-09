import {
  canCallVendor,
  incrementVendorUsage,
} from "./vendorRateLimiter/vendorRateLimiter";
import { ServiceUnavailableError } from "../../errors/customErrors";

export class VendorManager {
  constructor(private vendors) {}

  async getCountry(ip: string): Promise<string> {
    for (const vendor of this.vendors) {
      if (!(await canCallVendor(vendor.name))) {
        continue;
      }

      try {
        const country = await vendor.getCountry(ip);
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
