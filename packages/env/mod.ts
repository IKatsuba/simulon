import z from 'zod';

const envSchema = z.object({
  PORT: z.coerce.number().int().default(3000),
  HOST: z.string().default('0.0.0.0'),

  SIMULON_PUBLIC_URL: z.string().optional(),
});

export const env = envSchema.parse(Deno.env.toObject());
