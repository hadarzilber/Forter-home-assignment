import { fetchData } from "../../tools/axios";
import { getCountryNameFromCode } from "../../tools/countryCodes";
import { GetCountryFromVendorOptions, IpResponse } from "./types";

export abstract class BaseIpVendor {
  abstract name: string;
  abstract baseUrl: string;
  abstract countryKeyName: string;

  isCountryCodeReturned: boolean = false;

  async getCountryFromVendor(
    ip: string,
    options?: GetCountryFromVendorOptions
  ): Promise<string> {
    const url = options?.url ?? `${this.baseUrl}/${ip}`;

    const data = await fetchData<IpResponse>(url, {
      params: options?.params,
    });

    return this.assertCountryName(data);
  }

  private assertCountryName(data: IpResponse): string {
    if (!data?.[this.countryKeyName]) {
      throw new Error(`Invalid response from ${this.name}`);
    }

    const countryValue = data[this.countryKeyName];

    if (this.isCountryCodeReturned) {
      return getCountryNameFromCode(countryValue) || countryValue;
    }

    return countryValue;
  }
}
