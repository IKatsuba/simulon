import { Hono } from 'hono';
import { faker } from '@faker-js/faker';
import { z } from '@simulon/zod';
import { describeRoute } from 'hono-openapi';
import { resolver, validator as zValidator } from 'hono-openapi/zod';

export const number = new Hono();

number.post(
  '/bigInt',
  describeRoute({
    tags: ['Number'],
    summary: 'Generate a big integer',
    responses: {
      200: {
        description: 'Big integer',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.number.bigInt().toString(),
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
      min: z.union([z.bigint(), z.number(), z.string(), z.boolean()])
        .optional(),
      max: z.union([z.bigint(), z.number(), z.string(), z.boolean()])
        .optional(),
    }),
  ),
  (c) => {
    return c.json({
      value: faker.number.bigInt(
        c.req.valid('json'),
      ).toString(),
    });
  },
).post(
  '/binary',
  describeRoute({
    tags: ['Number'],
    summary: 'Generate a binary number',
    responses: {
      200: {
        description: 'Binary number',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.number.binary(),
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
      min: z.number().optional(),
      max: z.number().optional(),
    }),
  ),
  (c) => {
    return c.json({
      value: faker.number.binary(
        c.req.valid('json'),
      ),
    });
  },
).post(
  '/float',
  describeRoute({
    tags: ['Number'],
    summary: 'Generate a floating point number',
    responses: {
      200: {
        description: 'Floating point number',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.number().openapi({
                  example: faker.number.float(),
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
      min: z.number().nonnegative().lt(1).optional(),
      max: z.number().positive().lt(1).optional(),
      fractionDigits: z.number().optional(),
      multipleOf: z.number().optional(),
    }),
  ),
  (c) => {
    return c.json({
      value: faker.number.float(
        c.req.valid('json'),
      ),
    });
  },
).post(
  '/hex',
  describeRoute({
    tags: ['Number'],
    summary: 'Generate a hexadecimal number',
    responses: {
      200: {
        description: 'Hexadecimal number',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.number.hex(),
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
      min: z.number().optional(),
      max: z.number().optional(),
    }),
  ),
  (c) => {
    return c.json({
      value: faker.number.hex(
        c.req.valid('json'),
      ),
    });
  },
).post(
  '/int',
  describeRoute({
    tags: ['Number'],
    summary: 'Generate an integer',
    responses: {
      200: {
        description: 'Integer',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.number().int().openapi({
                  example: faker.number.int(),
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
      min: z.number().optional(),
      max: z.number().optional(),
      multipleOf: z.number().optional(),
    }),
  ),
  (c) => {
    return c.json({
      value: faker.number.int(
        c.req.valid('json'),
      ),
    });
  },
).post(
  '/octal',
  describeRoute({
    tags: ['Number'],
    summary: 'Generate an octal number',
    responses: {
      200: {
        description: 'Octal number',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.number.octal(),
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
      min: z.number().optional(),
      max: z.number().optional(),
    }),
  ),
  (c) => {
    return c.json({
      value: faker.number.octal(
        c.req.valid('json'),
      ),
    });
  },
).post(
  '/romanNumeral',
  describeRoute({
    tags: ['Number'],
    summary: 'Generate a Roman numeral',
    responses: {
      200: {
        description: 'Roman numeral',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.number.romanNumeral(),
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
      min: z.number().optional(),
      max: z.number().optional(),
    }),
  ),
  (c) => {
    return c.json({
      value: faker.number.romanNumeral(
        c.req.valid('json'),
      ),
    });
  },
);
