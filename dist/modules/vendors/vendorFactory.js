"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVendorManager = void 0;
const ipapi_1 = require("../../dal/vendors/ipapi");
const ipinfo_1 = require("../../dal/vendors/ipinfo");
const ipstack_1 = require("../../dal/vendors/ipstack");
const vendorManager_1 = require("./vendorManager");
const getVendorManager = () => {
    return new vendorManager_1.VendorManager([
        new ipinfo_1.IpInfoVendor(),
        new ipstack_1.IpstackVendor(),
        new ipapi_1.IpApiVendor(),
    ]);
};
exports.getVendorManager = getVendorManager;
//# sourceMappingURL=vendorFactory.js.map