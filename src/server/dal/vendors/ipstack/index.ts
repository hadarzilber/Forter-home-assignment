import { fetchData } from "../../../tools/axios";
import { BaseIpVendor } from "../BaseIpVendor";
import { IpResponse } from "../types";

export class IpstackVendor extends BaseIpVendor {
  name = "ipstack";
  baseUrl = "http://api.ipstack.com";

  async getCountry(ip: string): Promise<string> {
    return super.getCountry(ip, {
      params: { access_key: process.env.IPSTACK_KEY },
    });
  }
}
