export interface IpResponse {
  country_name: string;
}

export type GetCountryFromVendorOptions = {
  url?: string;
  params?: Record<string, any>;
};
