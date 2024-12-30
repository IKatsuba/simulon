import { Hono } from 'hono';
import { faker } from '@faker-js/faker';
import { z } from '@simulon/zod';
import { HonoEnv } from '@simulon/env';
import { describeRoute } from 'hono-openapi';
import { resolver, validator as zValidator } from 'hono-openapi/zod';

export const commerce = new Hono<HonoEnv>();

commerce.post(
  '/department',
  describeRoute({
    tags: ['Commerce'],
    description: 'Department',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.commerce.department(),
                }),
              }),
            ),
          },
        },
      },
    },
  }),
  (c) => {
    return c.json({ value: c.var.faker.commerce.department() });
  },
).post(
  '/isbn',
  describeRoute({
    tags: ['Commerce'],
    description: 'ISBN',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.commerce.isbn({ separator: '-' }),
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
      separator: z.string().default('-'),
      variant: z.union([z.literal(10), z.literal(13)]).default(13),
    }),
  ),
  (c) => {
    return c.json({
      value: c.var.faker.commerce.isbn(c.req.valid('json')),
    });
  },
).post(
  '/price',
  describeRoute({
    tags: ['Commerce'],
    description: 'Price',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.commerce.price({
                    min: 1,
                    max: 1000,
                    dec: 2,
                    symbol: '$',
                  }),
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
      dec: z.number().positive().default(2),
      max: z.number().positive().default(1000),
      min: z.number().positive().default(1),
      symbol: z.string().default(''),
    }),
  ),
  (c) => {
    return c.json({
      value: c.var.faker.commerce.price(c.req.valid('json')),
    });
  },
).post(
  '/product',
  describeRoute({
    tags: ['Commerce'],
    description: 'Product',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.commerce.product(),
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
      value: c.var.faker.commerce.product(),
    });
  },
).post(
  '/productAdjective',
  describeRoute({
    tags: ['Commerce'],
    description: 'Product adjective',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.commerce.productAdjective(),
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
      value: c.var.faker.commerce.productAdjective(),
    });
  },
).post(
  '/productDescription',
  describeRoute({
    tags: ['Commerce'],
    description: 'Product description',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.commerce.productDescription(),
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
      value: c.var.faker.commerce.productDescription(),
    });
  },
).post(
  '/productMaterial',
  describeRoute({
    tags: ['Commerce'],
    description: 'Product material',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.commerce.productMaterial(),
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
      value: c.var.faker.commerce.productMaterial(),
    });
  },
).post(
  '/productName',
  describeRoute({
    tags: ['Commerce'],
    description: 'Product name',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.commerce.productName(),
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
      value: c.var.faker.commerce.productName(),
    });
  },
);
