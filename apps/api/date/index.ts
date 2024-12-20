import { Hono } from 'hono';
import { faker } from '@faker-js/faker';
import { z } from '@simulon/zod';
import { describeRoute } from 'hono-openapi';
import { resolver, validator as zValidator } from 'hono-openapi/zod';

export const date = new Hono();

date.post(
  '/anytime',
  describeRoute({
    tags: ['Date'],
    description: 'Anytime',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.date.anytime().toISOString(),
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
      refDate: z.union([z.number(), z.string()]).optional(),
    }),
  ),
  (c) => {
    return c.json({
      value: faker.date.anytime(
        c.req.valid('json'),
      ).toISOString(),
    });
  },
).post(
  '/between',
  describeRoute({
    tags: ['Date'],
    description: 'Between',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.date.between({
                    from: new Date('2020-01-01'),
                    to: new Date('2020-12-31'),
                  }).toISOString(),
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
      from: z.union([z.number(), z.string()]),
      to: z.union([z.number(), z.string()]),
    }),
  ),
  (c) => {
    return c.json({
      value: faker.date.between(
        c.req.valid('json'),
      ).toISOString(),
    });
  },
).post(
  '/betweens',
  describeRoute({
    tags: ['Date'],
    description: 'Betweens',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.array(z.string()).openapi({
                  example: faker.date.betweens({
                    count: 3,
                    from: new Date('2020-01-01'),
                    to: new Date('2020-12-31'),
                  }).map((d) => d.toISOString()),
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
      count: z.union([
        z.number(),
        z.object({ min: z.number(), max: z.number() }),
      ]).default(3),
      from: z.union([z.number(), z.string()]),
      to: z.union([z.number(), z.string()]),
    }),
  ),
  (c) => {
    return c.json({
      value: faker.date.betweens(
        c.req.valid('json'),
      ).map((d) => d.toISOString()),
    });
  },
).post(
  '/birthdate',
  describeRoute({
    tags: ['Date'],
    description: 'Birthdate',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.date.birthdate({
                    min: 18,
                    max: 65,
                    mode: 'age',
                  }).toISOString(),
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
    z.union([
      z.object({
        refDate: z.union([z.number(), z.string()]).optional(),
        min: z.number().positive(),
        max: z.number().positive(),
        mode: z.enum(['age', 'year']),
      }),
      z.object({
        refDate: z.union([z.number(), z.string()]).optional(),
      }),
    ]),
  ),
  (c) => {
    return c.json({
      value: faker.date.birthdate(
        c.req.valid('json'),
      ).toISOString(),
    });
  },
).post(
  '/future',
  describeRoute({
    tags: ['Date'],
    description: 'Future',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.date.future().toISOString(),
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
      refDate: z.union([z.number(), z.string()]).optional(),
      years: z.number().positive().default(1),
    }),
  ),
  (c) => {
    return c.json({
      value: faker.date.future(
        c.req.valid('json'),
      ).toISOString(),
    });
  },
).post(
  '/month',
  describeRoute({
    tags: ['Date'],
    description: 'Month',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.date.month(),
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
      abbreviated: z.boolean().default(false),
      context: z.boolean().default(false),
    }),
  ),
  (c) => {
    return c.json({
      value: faker.date.month(
        c.req.valid('json'),
      ),
    });
  },
).post(
  '/past',
  describeRoute({
    tags: ['Date'],
    description: 'Past',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.date.past().toISOString(),
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
      refDate: z.union([z.number(), z.string()]).optional(),
      years: z.number().positive().default(1),
    }),
  ),
  (c) => {
    return c.json({
      value: faker.date.past(
        c.req.valid('json'),
      ).toISOString(),
    });
  },
).post(
  '/recent',
  describeRoute({
    tags: ['Date'],
    description: 'Recent',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.date.recent().toISOString(),
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
      refDate: z.union([z.number(), z.string()]).optional(),
      days: z.number().positive().default(1),
    }),
  ),
  (c) => {
    return c.json({
      value: faker.date.recent(
        c.req.valid('json'),
      ),
    });
  },
).post(
  '/soon',
  describeRoute({
    tags: ['Date'],
    description: 'Soon',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.date.soon().toISOString(),
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
      refDate: z.union([z.number(), z.string()]).optional(),
      days: z.number().positive().default(1),
    }),
  ),
  (c) => {
    return c.json({
      value: faker.date.soon(
        c.req.valid('json'),
      ).toISOString(),
    });
  },
).post(
  '/timeZone',
  describeRoute({
    tags: ['Date'],
    description: 'Time zone',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.date.timeZone(),
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
      value: faker.date.timeZone(),
    });
  },
).post(
  '/weekday',
  describeRoute({
    tags: ['Date'],
    description: 'Weekday',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.date.weekday(),
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
      abbreviated: z.boolean().default(false),
      context: z.boolean().default(false),
    }),
  ),
  (c) => {
    return c.json({
      value: faker.date.weekday(
        c.req.valid('json'),
      ),
    });
  },
);
