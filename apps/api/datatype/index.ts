import { Hono } from 'hono';
import { faker } from '@faker-js/faker';
import { z } from '@simulon/zod';
import { describeRoute } from 'hono-openapi';
import { resolver, validator as zValidator } from 'hono-openapi/zod';

export const datatype = new Hono();

datatype.post(
  '/boolean',
  describeRoute({
    tags: ['Datatype'],
    description: 'Boolean',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.boolean().openapi({
                  example: faker.datatype.boolean(),
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
      probability: z.number().min(0).max(1).positive().default(0.5),
    }),
  ),
  (c) => {
    return c.json({
      value: faker.datatype.boolean(
        c.req.valid('json'),
      ),
    });
  },
);
