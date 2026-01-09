import { BaseIpVendor } from "../BaseIpVendor";

export class IpApiVendor extends BaseIpVendor {
  name = "ipapi";
  baseUrl = "https://ipapi.co";
  countryKeyName = "country_name";

  async getCountryFromVendor(ip: string): Promise<string> {
    return super.getCountryFromVendor(ip, {
      url: `${this.baseUrl}/${ip}/json`,
    });
  }
}
