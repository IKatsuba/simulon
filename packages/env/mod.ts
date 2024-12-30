import type { Faker } from '@faker-js/faker';
import z from 'zod';

const envSchema = z.object({
  PORT: z.coerce.number().int().default(3000),
  HOST: z.string().default('127.0.0.1'),

  SIMULON_PUBLIC_URL: z.string().optional(),
});

export const env = envSchema.parse(Deno.env.toObject());

export type HonoEnv = {
  Variables: {
    faker: Faker;
  };
};
