import { Hono } from 'hono';
import { faker } from '@faker-js/faker';
import { describeRoute } from 'hono-openapi';
import { resolver } from 'hono-openapi/zod';
import { z } from '@simulon/zod';
import { HonoEnv } from '@simulon/env';

export const animal = new Hono<HonoEnv>();

animal.post(
  '/bear',
  describeRoute({
    tags: ['Animal'],
    description: 'Animal bear',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(z.object({
              value: z.string().openapi({
                example: faker.animal.bear(),
              }),
            })),
          },
        },
      },
    },
  }),
  (c) => {
    return c.json({ value: c.var.faker.animal.bear() });
  },
).post(
  '/bird',
  describeRoute({
    tags: ['Animal'],
    description: 'Animal bird',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(z.object({
              value: z.string().openapi({
                example: faker.animal.bird(),
              }),
            })),
          },
        },
      },
    },
  }),
  (c) => {
    return c.json({ value: c.var.faker.animal.bird() });
  },
).post(
  '/cat',
  describeRoute({
    tags: ['Animal'],
    description: 'Animal cat',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(z.object({
              value: z.string().openapi({
                example: faker.animal.cat(),
              }),
            })),
          },
        },
      },
    },
  }),
  (c) => {
    return c.json({ value: c.var.faker.animal.cat() });
  },
).post(
  '/cow',
  describeRoute({
    tags: ['Animal'],
    description: 'Animal cow',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(z.object({
              value: z.string().openapi({
                example: faker.animal.cow(),
              }),
            })),
          },
        },
      },
    },
  }),
  (c) => {
    return c.json({ value: c.var.faker.animal.cow() });
  },
).post(
  '/crocodilia',
  describeRoute({
    tags: ['Animal'],
    description: 'Animal crocodilia',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(z.object({
              value: z.string().openapi({
                example: faker.animal.crocodilia(),
              }),
            })),
          },
        },
      },
    },
  }),
  (c) => {
    return c.json({ value: c.var.faker.animal.crocodilia() });
  },
).post(
  '/dog',
  describeRoute({
    tags: ['Animal'],
    description: 'Animal dog',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(z.object({
              value: z.string().openapi({
                example: faker.animal.dog(),
              }),
            })),
          },
        },
      },
    },
  }),
  (c) => {
    return c.json({ value: c.var.faker.animal.dog() });
  },
).post(
  '/fish',
  describeRoute({
    tags: ['Animal'],
    description: 'Animal fish',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(z.object({
              value: z.string().openapi({
                example: faker.animal.fish(),
              }),
            })),
          },
        },
      },
    },
  }),
  (c) => {
    return c.json({ value: c.var.faker.animal.fish() });
  },
).post(
  '/horse',
  describeRoute({
    tags: ['Animal'],
    description: 'Animal horse',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(z.object({
              value: z.string().openapi({
                example: faker.animal.horse(),
              }),
            })),
          },
        },
      },
    },
  }),
  (c) => {
    return c.json({ value: c.var.faker.animal.horse() });
  },
).post(
  '/insect',
  describeRoute({
    tags: ['Animal'],
    description: 'Animal insect',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(z.object({
              value: z.string().openapi({
                example: faker.animal.insect(),
              }),
            })),
          },
        },
      },
    },
  }),
  (c) => {
    return c.json({ value: c.var.faker.animal.insect() });
  },
).post(
  '/lion',
  describeRoute({
    tags: ['Animal'],
    description: 'Animal lion',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(z.object({
              value: z.string().openapi({
                example: faker.animal.lion(),
              }),
            })),
          },
        },
      },
    },
  }),
  (c) => {
    return c.json({ value: c.var.faker.animal.lion() });
  },
).post(
  '/petName',
  describeRoute({
    tags: ['Animal'],
    description: 'Animal petName',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(z.object({
              value: z.string().openapi({
                example: faker.animal.petName(),
              }),
            })),
          },
        },
      },
    },
  }),
  (c) => {
    return c.json({ value: c.var.faker.animal.petName() });
  },
).post(
  '/rabbit',
  describeRoute({
    tags: ['Animal'],
    description: 'Animal rabbit',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(z.object({
              value: z.string().openapi({
                example: faker.animal.rabbit(),
              }),
            })),
          },
        },
      },
    },
  }),
  (c) => {
    return c.json({ value: c.var.faker.animal.rabbit() });
  },
).post(
  '/rodent',
  describeRoute({
    tags: ['Animal'],
    description: 'Animal rodent',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(z.object({
              value: z.string().openapi({
                example: faker.animal.rodent(),
              }),
            })),
          },
        },
      },
    },
  }),
  (c) => {
    return c.json({ value: c.var.faker.animal.rodent() });
  },
).post(
  '/snake',
  describeRoute({
    tags: ['Animal'],
    description: 'Animal snake',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(z.object({
              value: z.string().openapi({
                example: faker.animal.snake(),
              }),
            })),
          },
        },
      },
    },
  }),
  (c) => {
    return c.json({ value: c.var.faker.animal.snake() });
  },
).post(
  '/type',
  describeRoute({
    tags: ['Animal'],
    description: 'Animal type',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(z.object({
              value: z.string().openapi({
                example: faker.animal.type(),
              }),
            })),
          },
        },
      },
    },
  }),
  (c) => {
    return c.json({ value: c.var.faker.animal.type() });
  },
);
