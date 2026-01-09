import { BaseIpVendor } from "../BaseIpVendor";

export class IpstackVendor extends BaseIpVendor {
  name = "ipstack";
  baseUrl = "http://api.ipstack.com";
  countryKeyName = "country_name";

  async getCountryFromVendor(ip: string): Promise<string> {
    return super.getCountryFromVendor(ip, {
      params: { access_key: process.env.IPSTACK_KEY },
    });
  }
}
