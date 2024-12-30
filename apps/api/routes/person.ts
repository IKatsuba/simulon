import { Hono } from 'hono';
import { faker } from '@faker-js/faker';
import { z } from '@simulon/zod';
import { HonoEnv } from '@simulon/env';
import { describeRoute } from 'hono-openapi';
import { resolver, validator as zValidator } from 'hono-openapi/zod';

export const person = new Hono<HonoEnv>();

person.post(
  '/bio',
  describeRoute({
    tags: ['Person'],
    summary: 'Generate a biography',
    responses: {
      200: {
        description: 'Biography',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.person.bio(),
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
      value: c.var.faker.person.bio(),
    });
  },
).post(
  '/firstName',
  describeRoute({
    tags: ['Person'],
    summary: 'Generate a first name',
    responses: {
      200: {
        description: 'First name',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.person.firstName(),
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
      sex: z.enum(['female', 'male']).optional(),
    }),
  ),
  (c) => {
    return c.json({
      value: c.var.faker.person.firstName(
        c.req.valid('json')?.sex,
      ),
    });
  },
).post(
  '/fullName',
  describeRoute({
    tags: ['Person'],
    summary: 'Generate a full name',
    responses: {
      200: {
        description: 'Full name',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.person.fullName(),
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
      firstName: z.string().optional(),
      lastName: z.string().optional(),
      sex: z.enum(['female', 'male']).optional(),
    }),
  ),
  (c) => {
    return c.json({
      value: c.var.faker.person.fullName(
        c.req.valid('json'),
      ),
    });
  },
).post(
  '/gender',
  describeRoute({
    tags: ['Person'],
    summary: 'Generate a gender',
    responses: {
      200: {
        description: 'Gender',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.person.gender(),
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
      value: c.var.faker.person.gender(),
    });
  },
).post(
  '/jobArea',
  describeRoute({
    tags: ['Person'],
    summary: 'Generate a job area',
    responses: {
      200: {
        description: 'Job area',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.person.jobArea(),
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
      value: c.var.faker.person.jobArea(),
    });
  },
).post(
  '/jobDescriptor',
  describeRoute({
    tags: ['Person'],
    summary: 'Generate a job descriptor',
    responses: {
      200: {
        description: 'Job descriptor',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.person.jobDescriptor(),
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
      value: c.var.faker.person.jobDescriptor(),
    });
  },
).post(
  '/jobTitle',
  describeRoute({
    tags: ['Person'],
    summary: 'Generate a job title',
    responses: {
      200: {
        description: 'Job title',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.person.jobTitle(),
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
      value: c.var.faker.person.jobTitle(),
    });
  },
).post(
  '/jobType',
  describeRoute({
    tags: ['Person'],
    summary: 'Generate a job type',
    responses: {
      200: {
        description: 'Job type',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.person.jobType(),
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
      value: c.var.faker.person.jobType(),
    });
  },
).post(
  '/lastName',
  describeRoute({
    tags: ['Person'],
    summary: 'Generate a last name',
    responses: {
      200: {
        description: 'Last name',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.person.lastName(),
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
      sex: z.enum(['female', 'male']).optional(),
    }),
  ),
  (c) => {
    return c.json({
      value: c.var.faker.person.lastName(
        c.req.valid('json')?.sex,
      ),
    });
  },
).post(
  '/middleName',
  describeRoute({
    tags: ['Person'],
    summary: 'Generate a middle name',
    responses: {
      200: {
        description: 'Middle name',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.person.middleName(),
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
      sex: z.enum(['female', 'male']).optional(),
    }),
  ),
  (c) => {
    return c.json({
      value: c.var.faker.person.middleName(
        c.req.valid('json')?.sex,
      ),
    });
  },
).post(
  '/prefix',
  describeRoute({
    tags: ['Person'],
    summary: 'Generate a prefix',
    responses: {
      200: {
        description: 'Prefix',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.person.prefix(),
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
      sex: z.enum(['female', 'male']).optional(),
    }),
  ),
  (c) => {
    return c.json({
      value: c.var.faker.person.prefix(
        c.req.valid('json')?.sex,
      ),
    });
  },
).post(
  '/sex',
  describeRoute({
    tags: ['Person'],
    summary: 'Generate a sex',
    responses: {
      200: {
        description: 'Sex',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.person.sex(),
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
      value: c.var.faker.person.sex(),
    });
  },
).post(
  '/sexType',
  describeRoute({
    tags: ['Person'],
    summary: 'Generate a sex type',
    responses: {
      200: {
        description: 'Sex type',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.enum([
                  'female',
                  'male',
                ]).openapi({
                  example: faker.person.sexType(),
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
      value: c.var.faker.person.sexType(),
    });
  },
).post(
  '/suffix',
  describeRoute({
    tags: ['Person'],
    summary: 'Generate a suffix',
    responses: {
      200: {
        description: 'Suffix',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.person.suffix(),
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
      value: c.var.faker.person.suffix(),
    });
  },
).post(
  '/zodiacSign',
  describeRoute({
    tags: ['Person'],
    summary: 'Generate a zodiac sign',
    responses: {
      200: {
        description: 'Zodiac sign',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.person.zodiacSign(),
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
      value: c.var.faker.person.zodiacSign(),
    });
  },
);
