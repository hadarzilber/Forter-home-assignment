import { BaseIpVendor } from "../BaseIpVendor";

export class IpApiVendor extends BaseIpVendor {
  name = "ipapi";
  baseUrl = "https://ipapi.co";

  async getCountry(ip: string): Promise<string> {
    return super.getCountry(ip, {
      url: `${this.baseUrl}/${ip}/json`,
    });
  }
}
