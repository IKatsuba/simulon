import { Hono } from 'hono';
import { faker } from '@faker-js/faker';
import { z } from '@simulon/zod';
import { HonoEnv } from '@simulon/env';
import { describeRoute } from 'hono-openapi';
import { resolver, validator as zValidator } from 'hono-openapi/zod';

export const phone = new Hono<HonoEnv>();

phone.post(
  '/imei',
  describeRoute({
    tags: ['Phone'],
    summary: 'Generate an IMEI number',
    responses: {
      200: {
        description: 'IMEI number',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.phone.imei(),
                }),
              }),
            ),
          },
        },
      },
    },
  }),
  (c) => {
    return c.json({
      value: c.var.faker.phone.imei(),
    });
  },
).post(
  '/number',
  describeRoute({
    tags: ['Phone'],
    summary: 'Generate a phone number',
    responses: {
      200: {
        description: 'Phone number',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.phone.number(),
                }),
              }),
            ),
          },
        },
      },
    },
  }),
  zValidator(
    'json',
    z.object({
      style: z.enum(['human', 'national', 'international']).optional(),
    }).optional(),
  ),
  (c) => {
    return c.json({
      value: c.var.faker.phone.number(
        c.req.valid('json'),
      ),
    });
  },
);
