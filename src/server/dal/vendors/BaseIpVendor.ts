import { fetchData } from "../../tools/axios";
import { GetCountryOptions, IpResponse } from "./types";

export abstract class BaseIpVendor {
  abstract name: string;
  abstract baseUrl: string;

  async getCountry(ip: string, options?: GetCountryOptions): Promise<string> {
    const url = options?.url ?? `${this.baseUrl}/${ip}`;

    const data = await fetchData<IpResponse>(url, {
      params: options?.params,
    });

    return this.assertCountryName(data);
  }

  private assertCountryName(data: IpResponse): string {
    if (!data?.country_name) {
      throw new Error(`Invalid response from ${this.name}`);
    }
    return data.country_name;
  }
}
