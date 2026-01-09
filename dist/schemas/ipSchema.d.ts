import { z } from "zod";
declare const getCountryQuerySchema: z.ZodObject<{
    ip: z.ZodString;
}, z.core.$strip>;
export type getCountryQuerySchemaType = z.infer<typeof getCountryQuerySchema>;
export declare const getCountrySchema: {
    query: z.ZodObject<{
        ip: z.ZodString;
    }, z.core.$strip>;
};
export {};
//# sourceMappingURL=ipSchema.d.ts.map