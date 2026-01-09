import { IpApiVendor } from "../../dal/vendors/ipapi";
import { IpInfoVendor } from "../../dal/vendors/ipinfo";
import { IpstackVendor } from "../../dal/vendors/ipstack";
import { VendorManager } from "./vendorManager";

export const getVendorManager = (): VendorManager => {
  return new VendorManager([
    new IpInfoVendor(),
    new IpstackVendor(),
    new IpApiVendor(),
  ]);
};
