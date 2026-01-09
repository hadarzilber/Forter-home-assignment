import axios, { AxiosRequestConfig } from "axios";
import { AXIOS_TIMEOUT_MS } from "./config";

export async function fetchData<T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<T> {
  try {
    const combinedConfig: AxiosRequestConfig = {
      timeout: AXIOS_TIMEOUT_MS,
      ...config,
    };

    const response = await axios.get<T>(url, combinedConfig);
    return response.data;
  } catch (err) {
    throw new Error(
      `Failed to fetch data from ${url}: ${(err as Error).message}`
    );
  }
}
