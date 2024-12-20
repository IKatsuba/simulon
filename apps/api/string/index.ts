import { Hono } from 'hono';
import { faker } from '@faker-js/faker';
import { z } from '@simulon/zod';
import { describeRoute } from 'hono-openapi';
import { resolver, validator as zValidator } from 'hono-openapi/zod';

export const string = new Hono();

string.post(
  '/alpha',
  describeRoute({
    tags: ['String'],
    summary: 'Generate an alpha string',
    responses: {
      200: {
        description: 'Alpha string',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.string.alpha(),
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
      length: z.union([
        z.number(),
        z.object({
          min: z.number(),
          max: z.number(),
        }),
      ]).optional(),
      casing: z.enum(['mixed', 'upper', 'lower']).optional(),
      exclude: z.union([z.string(), z.array(z.string())]).optional(),
    }),
  ),
  (c) => {
    return c.json({
      value: faker.string.alpha(
        c.req.valid('json'),
      ),
    });
  },
).post(
  '/alphanumeric',
  describeRoute({
    tags: ['String'],
    summary: 'Generate an alphanumeric string',
    responses: {
      200: {
        description: 'Alphanumeric string',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.string.alphanumeric(),
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
      length: z.union([
        z.number(),
        z.object({
          min: z.number(),
          max: z.number(),
        }),
      ]).optional(),
      casing: z.enum(['mixed', 'upper', 'lower']).optional(),
      exclude: z.union([z.string(), z.array(z.string())]).optional(),
    }),
  ),
  (c) => {
    return c.json({
      value: faker.string.alphanumeric(
        c.req.valid('json'),
      ),
    });
  },
).post(
  '/binary',
  describeRoute({
    tags: ['String'],
    summary: 'Generate a binary string',
    responses: {
      200: {
        description: 'Binary string',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.string.binary(),
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
      length: z.union([
        z.number(),
        z.object({
          min: z.number(),
          max: z.number(),
        }),
      ]).optional(),
      prefix: z.string().optional(),
    }),
  ),
  (c) => {
    return c.json({
      value: faker.string.binary(
        c.req.valid('json'),
      ),
    });
  },
).post(
  '/fromCharacters',
  describeRoute({
    tags: ['String'],
    summary: 'Generate a string from characters',
    responses: {
      200: {
        description: 'String from characters',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.string.fromCharacters('abc', 5),
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
      characters: z.union([z.string(), z.array(z.string())]),
      length: z.union([
        z.number(),
        z.object({
          min: z.number(),
          max: z.number(),
        }),
      ]).optional(),
    }),
  ),
  (c) => {
    return c.json({
      value: faker.string.fromCharacters(
        c.req.valid('json')?.characters,
        c.req.valid('json')?.length,
      ),
    });
  },
).post(
  '/hexadecimal',
  describeRoute({
    tags: ['String'],
    summary: 'Generate a hexadecimal string',
    responses: {
      200: {
        description: 'Hexadecimal string',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.string.hexadecimal(),
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
      length: z.union([
        z.number(),
        z.object({
          min: z.number(),
          max: z.number(),
        }),
      ]).optional(),
      casing: z.enum(['mixed', 'upper', 'lower']).optional(),
      prefix: z.string().optional(),
    }),
  ),
  (c) => {
    return c.json({
      value: faker.string.hexadecimal(
        c.req.valid('json'),
      ),
    });
  },
).post(
  '/nanoid',
  describeRoute({
    tags: ['String'],
    summary: 'Generate a nanoid',
    responses: {
      200: {
        description: 'Nanoid',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.string.nanoid(),
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
      min: z.number(),
      max: z.number(),
    }),
  ),
  (c) => {
    return c.json({
      value: faker.string.nanoid(
        c.req.valid('json'),
      ),
    });
  },
).post(
  '/numeric',
  describeRoute({
    tags: ['String'],
    summary: 'Generate a numeric string',
    responses: {
      200: {
        description: 'Numeric string',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.string.numeric(),
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
      length: z.union([
        z.number(),
        z.object({
          min: z.number(),
          max: z.number(),
        }),
      ]).optional(),
      allowLeadingZeros: z.boolean().optional(),
      exclude: z.union([z.string(), z.array(z.string())]).optional(),
    }),
  ),
  (c) => {
    return c.json({
      value: faker.string.numeric(
        c.req.valid('json'),
      ),
    });
  },
).post(
  '/octal',
  describeRoute({
    tags: ['String'],
    summary: 'Generate an octal string',
    responses: {
      200: {
        description: 'Octal string',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.string.octal(),
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
      length: z.union([
        z.number(),
        z.object({
          min: z.number(),
          max: z.number(),
        }),
      ]).optional(),
      prefix: z.string().optional(),
    }),
  ),
  (c) => {
    return c.json({
      value: faker.string.octal(
        c.req.valid('json'),
      ),
    });
  },
).post(
  '/sample',
  describeRoute({
    tags: ['String'],
    summary: 'Generate a sample string',
    responses: {
      200: {
        description: 'Sample string',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.string.sample(),
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
      min: z.number(),
      max: z.number(),
    }),
  ),
  (c) => {
    return c.json({
      value: faker.string.sample(
        c.req.valid('json'),
      ),
    });
  },
).post(
  '/symbol',
  describeRoute({
    tags: ['String'],
    summary: 'Generate a symbol string',
    responses: {
      200: {
        description: 'Symbol string',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.string.symbol(),
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
      min: z.number(),
      max: z.number(),
    }),
  ),
  (c) => {
    return c.json({
      value: faker.string.symbol(
        c.req.valid('json'),
      ),
    });
  },
).post(
  '/ulid',
  describeRoute({
    tags: ['String'],
    summary: 'Generate a ULID',
    responses: {
      200: {
        description: 'ULID',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.string.ulid(),
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
      refDate: z.union([z.string(), z.date(), z.number()]).optional(),
    }),
  ),
  (c) => {
    return c.json({
      value: faker.string.ulid(
        c.req.valid('json'),
      ),
    });
  },
).post(
  '/uuid',
  describeRoute({
    tags: ['String'],
    summary: 'Generate a UUID',
    responses: {
      200: {
        description: 'UUID',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.string.uuid(),
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
      value: faker.string.uuid(),
    });
  },
);
