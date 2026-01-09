import { z } from "zod";

const getCountryQuerySchema = z.object({
  ip: z.union([z.ipv4(), z.ipv6()]),
});
export type getCountryQuerySchemaType = z.infer<typeof getCountryQuerySchema>;
export const getCountrySchema = { query: getCountryQuerySchema };
