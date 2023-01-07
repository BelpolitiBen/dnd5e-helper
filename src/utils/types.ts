import { z } from 'zod';

export const apiReferenceSchema = z.object({
    index: z.string(),
    name: z.string(),
    url: z.string(),
});

export type ApiReference = z.infer<typeof apiReferenceSchema>;

export const apiReferenceListSchema = z.object({
    count: z.number(),
    results: apiReferenceSchema.array(),
});

export type ApiReferenceList = z.infer<typeof apiReferenceListSchema>;

export const abilityScoreSchema = apiReferenceSchema.extend({
    desc: z.string().array(),
    full_name: z.string(),
    skills: apiReferenceSchema,
});

export type AbilityScore = z.infer<typeof abilityScoreSchema>;
