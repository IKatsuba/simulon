import { Hono } from 'hono';
import { faker } from '@faker-js/faker';
import { z } from '@simulon/zod';
import { HonoEnv } from '@simulon/env';
import { describeRoute } from 'hono-openapi';
import { resolver, validator as zValidator } from 'hono-openapi/zod';

export const color = new Hono<HonoEnv>();

color.post(
  '/cmyk',
  describeRoute({
    tags: ['Color'],
    description: 'Color CMYK',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.union([
                  z.string(),
                  z.array(z.number()),
                ]).openapi({
                  example: faker.color.cmyk(),
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
      format: z.enum(['css', 'binary', 'decimal']).default('decimal'),
    }),
  ),
  (c) => {
    return c.json({ value: c.var.faker.color.cmyk(c.req.valid('json')) });
  },
).post(
  '/colorByCSSColorSpace',
  describeRoute({
    tags: ['Color'],
    description: 'Color by CSS color space',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.union([
                  z.string(),
                  z.array(z.number()),
                ]).openapi({
                  example: faker.color.colorByCSSColorSpace(),
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
      format: z.enum(['css', 'binary', 'decimal']).default('decimal'),
      space: z.enum([
        'sRGB',
        'display-p3',
        'rec2020',
        'a98-rgb',
        'prophoto-rgb',
      ]).default('sRGB'),
    }),
  ),
  (c) => {
    return c.json({
      value: c.var.faker.color.colorByCSSColorSpace(c.req.valid('json')),
    });
  },
).post(
  '/cssSupportedFunction',
  describeRoute({
    tags: ['Color'],
    description: 'Color CSS supported function',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(z.object({
              value: z.enum([
                'rgb',
                'rgba',
                'hsl',
                'hsla',
                'hwb',
                'cmyk',
                'lab',
                'lch',
                'color',
              ]).openapi({
                example: faker.color.cssSupportedFunction(),
              }),
            })),
          },
        },
      },
    },
  }),
  (c) => {
    return c.json({
      value: c.var.faker.color.cssSupportedFunction(),
    });
  },
).post(
  '/cssSupportedSpace',
  describeRoute({
    tags: ['Color'],
    description: 'Color CSS supported space',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(z.object({
              value: z.enum([
                'sRGB',
                'display-p3',
                'rec2020',
                'a98-rgb',
                'prophoto-rgb',
              ]).openapi({
                example: faker.color.cssSupportedSpace(),
              }),
            })),
          },
        },
      },
    },
  }),
  (c) => {
    return c.json({
      value: c.var.faker.color.cssSupportedSpace(),
    });
  },
).post(
  '/hsl',
  describeRoute({
    tags: ['Color'],
    description: 'Color HSL',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.union([
                  z.string(),
                  z.array(z.number()),
                ]).openapi({
                  example: faker.color.hsl(),
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
      format: z.enum(['css', 'binary', 'decimal']).default('decimal'),
      includeAlpha: z.boolean().default(false),
    }),
  ),
  (c) => {
    return c.json({
      value: c.var.faker.color.hsl(
        c.req.valid('json'),
      ),
    });
  },
).post(
  '/human',
  describeRoute({
    tags: ['Color'],
    description: 'Color human',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(z.object({
              value: z.string().openapi({
                example: faker.color.human(),
              }),
            })),
          },
        },
      },
    },
  }),
  (c) => {
    return c.json({
      value: c.var.faker.color.human(),
    });
  },
).post(
  '/rgb',
  describeRoute({
    tags: ['Color'],
    description: 'Color RGB',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.union([
                  z.string(),
                  z.array(z.number()),
                ]).openapi({
                  example: faker.color.rgb(),
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
      casing: z.enum(['upper', 'lower', 'mixed']).default('lower'),
      format: z.enum(['css', 'binary', 'decimal', 'hex']).default('hex'),
      includeAlpha: z.boolean().default(false),
      prefix: z.string().default('#'),
    }),
  ),
  (c) => {
    return c.json({
      value: c.var.faker.color.rgb(
        c.req.valid('json'),
      ),
    });
  },
);
