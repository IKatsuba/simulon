import { Hono } from 'hono';
import { faker } from '@faker-js/faker';
import { z } from '@simulon/zod';
import { describeRoute } from 'hono-openapi';
import { resolver } from 'hono-openapi/zod';

export const science = new Hono();

science.post(
  '/chemicalElement',
  describeRoute({
    tags: ['Science'],
    summary: 'Generate a chemical element',
    responses: {
      200: {
        description: 'Chemical element',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                symbol: z.string(),
                name: z.string(),
                atomicNumber: z.number(),
              }).openapi({
                example: faker.science.chemicalElement(),
              }),
            ),
          },
        },
      },
    },
  }),
  (c) => {
    return c.json({
      value: faker.science.chemicalElement(),
    });
  },
).post(
  '/unit',
  describeRoute({
    tags: ['Science'],
    summary: 'Generate a unit',
    responses: {
      200: {
        description: 'Unit',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                name: z.string(),
                symbol: z.string(),
              }).openapi({
                example: faker.science.unit(),
              }),
            ),
          },
        },
      },
    },
  }),
  (c) => {
    return c.json({
      value: faker.science.unit(),
    });
  },
);
