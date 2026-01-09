import { BaseIpVendor } from "../BaseIpVendor";

export class IpInfoVendor extends BaseIpVendor {
  name = "ipinfo";
  baseUrl = "https://ipinfo.io";
  countryKeyName = "country";
  isCountryCodeReturned = true;

  async getCountryFromVendor(ip: string): Promise<string> {
    return super.getCountryFromVendor(ip, {
      url: `${this.baseUrl}/${ip}/json`,
    });
  }
}
