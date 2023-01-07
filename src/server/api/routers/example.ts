import { z } from 'zod';

import { createTRPCRouter, publicProcedure, protectedProcedure } from '../trpc';

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),
  getSecretMessage: protectedProcedure.query(() => {
    return 'you can now see this secret message!';
  }),
  test: publicProcedure.query(async () => {
    const res = await fetch(`https://www.dnd5eapi.co/api/ability-scores/cha`);
    return res.json();
  }),
});
