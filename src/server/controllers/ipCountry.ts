import { Request, Response, NextFunction } from "express";
import { getCountryForIp } from "../modules/ipCountry";
import { apiFuncWrapper, handleSuccess } from "../tools/express";
import express from "express";
import { validateQuery } from "../middlewares/validateQuery";
import {
  getCountrySchema,
  getCountryQuerySchemaType,
} from "../schemas/ipSchema";

const router = express.Router();

router.get(
  "/ip/country",
  validateQuery(getCountrySchema),
  apiFuncWrapper(
    async (req: Request<{}, {}, {}, getCountryQuerySchemaType>, res) => {
      const { ip } = req.query;

      const country = await getCountryForIp(ip);

      handleSuccess(res, "Country fetched successfully", {
        ip,
        country,
      });
    }
  )
);

export default router;
