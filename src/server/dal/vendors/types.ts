export interface IpResponse {
  country_name: string;
}

export type GetCountryOptions = {
  url?: string;
  params?: Record<string, any>;
};
