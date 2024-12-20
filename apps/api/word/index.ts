import { Hono } from 'hono';
import { faker } from '@faker-js/faker';
import { z } from '@simulon/zod';
import { describeRoute } from 'hono-openapi';
import { resolver, validator as zValidator } from 'hono-openapi/zod';

export const word = new Hono();

word.post(
  '/adjective',
  describeRoute({
    tags: ['Word'],
    summary: 'Generate an adjective',
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: resolver(z.object({
              value: z.string(),
            })),
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
      strategy: z.enum([
        'fail',
        'closest',
        'shortest',
        'longest',
        'any-length',
      ]).optional(),
    }),
  ),
  (c) => {
    return c.json({
      value: faker.word.adjective(
        c.req.valid('json'),
      ),
    });
  },
).post(
  '/adverb',
  describeRoute({
    tags: ['Word'],
    summary: 'Generate an adverb',
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: resolver(z.object({
              value: z.string(),
            })),
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
      strategy: z.enum([
        'fail',
        'closest',
        'shortest',
        'longest',
        'any-length',
      ]).optional(),
    }),
  ),
  (c) => {
    return c.json({
      value: faker.word.adverb(
        c.req.valid('json'),
      ),
    });
  },
).post(
  '/conjunction',
  describeRoute({
    tags: ['Word'],
    summary: 'Generate a conjunction',
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: resolver(z.object({
              value: z.string(),
            })),
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
      strategy: z.enum([
        'fail',
        'closest',
        'shortest',
        'longest',
        'any-length',
      ]).optional(),
    }),
  ),
  (c) => {
    return c.json({
      value: faker.word.conjunction(
        c.req.valid('json'),
      ),
    });
  },
).post(
  '/interjection',
  describeRoute({
    tags: ['Word'],
    summary: 'Generate an interjection',
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: resolver(z.object({
              value: z.string(),
            })),
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
      strategy: z.enum([
        'fail',
        'closest',
        'shortest',
        'longest',
        'any-length',
      ]).optional(),
    }),
  ),
  (c) => {
    return c.json({
      value: faker.word.interjection(
        c.req.valid('json'),
      ),
    });
  },
).post(
  '/noun',
  describeRoute({
    tags: ['Word'],
    summary: 'Generate a noun',
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: resolver(z.object({
              value: z.string(),
            })),
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
      strategy: z.enum([
        'fail',
        'closest',
        'shortest',
        'longest',
        'any-length',
      ]).optional(),
    }),
  ),
  (c) => {
    return c.json({
      value: faker.word.noun(
        c.req.valid('json'),
      ),
    });
  },
).post(
  '/preposition',
  describeRoute({
    tags: ['Word'],
    summary: 'Generate a preposition',
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: resolver(z.object({
              value: z.string(),
            })),
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
      strategy: z.enum([
        'fail',
        'closest',
        'shortest',
        'longest',
        'any-length',
      ]).optional(),
    }),
  ),
  (c) => {
    return c.json({
      value: faker.word.preposition(
        c.req.valid('json'),
      ),
    });
  },
).post(
  '/sample',
  describeRoute({
    tags: ['Word'],
    summary: 'Generate a word sample',
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: resolver(z.object({
              value: z.string(),
            })),
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
      strategy: z.enum([
        'fail',
        'closest',
        'shortest',
        'longest',
        'any-length',
      ]).optional(),
    }),
  ),
  (c) => {
    return c.json({
      value: faker.word.sample(
        c.req.valid('json'),
      ),
    });
  },
).post(
  '/verb',
  describeRoute({
    tags: ['Word'],
    summary: 'Generate a verb',
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: resolver(z.object({
              value: z.string(),
            })),
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
      strategy: z.enum([
        'fail',
        'closest',
        'shortest',
        'longest',
        'any-length',
      ]).optional(),
    }),
  ),
  (c) => {
    return c.json({
      value: faker.word.verb(
        c.req.valid('json'),
      ),
    });
  },
).post(
  '/words',
  describeRoute({
    tags: ['Word'],
    summary: 'Generate a list of words',
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: resolver(z.array(z.string())),
          },
        },
      },
    },
  }),
  zValidator(
    'json',
    z.object({
      count: z.union([
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
      value: faker.word.words(
        c.req.valid('json'),
      ),
    });
  },
);
