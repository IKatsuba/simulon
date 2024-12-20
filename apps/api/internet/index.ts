import { Hono } from 'hono';
import { faker } from '@faker-js/faker';
import { z } from '@simulon/zod';
import { describeRoute } from 'hono-openapi';
import { resolver, validator as zValidator } from 'hono-openapi/zod';

export const internet = new Hono();

internet.post(
  '/color',
  describeRoute({
    tags: ['Internet'],
    description: 'Color',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.internet.color(),
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
      redBase: z.number().optional(),
      greenBase: z.number().optional(),
      blueBase: z.number().optional(),
    }),
  ),
  (c) => {
    return c.json({
      value: faker.internet.color(
        c.req.valid('json'),
      ),
    });
  },
).post(
  '/displayName',
  describeRoute({
    tags: ['Internet'],
    description: 'Display Name',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.internet.displayName(),
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
    }),
  ),
  (c) => {
    return c.json({
      value: faker.internet.displayName(
        c.req.valid('json'),
      ),
    });
  },
).post(
  '/domainName',
  describeRoute({
    tags: ['Internet'],
    description: 'Domain Name',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.internet.domainName(),
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
      value: faker.internet.domainName(),
    });
  },
).post(
  '/domainSuffix',
  describeRoute({
    tags: ['Internet'],
    description: 'Domain Suffix',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.internet.domainSuffix(),
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
      value: faker.internet.domainSuffix(),
    });
  },
).post(
  '/domainWord',
  describeRoute({
    tags: ['Internet'],
    description: 'Domain Word',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.internet.domainWord(),
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
      value: faker.internet.domainWord(),
    });
  },
).post(
  '/email',
  describeRoute({
    tags: ['Internet'],
    description: 'Email',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().email().openapi({
                  example: faker.internet.email(),
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
      provider: z.string().optional(),
      allowSpecialCharacters: z.boolean().optional(),
    }),
  ),
  (c) => {
    return c.json({
      value: faker.internet.email(
        c.req.valid('json'),
      ),
    });
  },
).post(
  '/emoji',
  describeRoute({
    tags: ['Internet'],
    description: 'Emoji',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.internet.emoji(),
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
      types: z.array(z.enum([
        'smiley',
        'body',
        'person',
        'nature',
        'food',
        'travel',
        'activity',
        'object',
        'symbol',
        'flag',
      ])).optional(),
    }),
  ),
  (c) => {
    return c.json({
      value: faker.internet.emoji(
        c.req.valid('json'),
      ),
    });
  },
).post(
  '/exampleEmail',
  describeRoute({
    tags: ['Internet'],
    description: 'Example Email',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().email().openapi({
                  example: faker.internet.exampleEmail(),
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
      allowSpecialCharacters: z.boolean().optional(),
    }),
  ),
  (c) => {
    return c.json({
      value: faker.internet.exampleEmail(
        c.req.valid('json'),
      ),
    });
  },
).post(
  '/httpMethod',
  describeRoute({
    tags: ['Internet'],
    description: 'HTTP Method',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.enum([
                  'GET',
                  'POST',
                  'PUT',
                  'DELETE',
                  'PATCH',
                ]).openapi({
                  example: faker.internet.httpMethod(),
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
      value: faker.internet.httpMethod(),
    });
  },
).post(
  '/httpStatusCode',
  describeRoute({
    tags: ['Internet'],
    description: 'HTTP Status Code',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.number().int().openapi({
                  example: faker.internet.httpStatusCode(),
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
      types: z.array(z.enum([
        'informational',
        'success',
        'clientError',
        'serverError',
        'redirection',
      ])).optional(),
    }),
  ),
  (c) => {
    return c.json({
      value: faker.internet.httpStatusCode(
        c.req.valid('json'),
      ),
    });
  },
).post(
  '/ip',
  describeRoute({
    tags: ['Internet'],
    description: 'IP',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().ip().openapi({
                  example: faker.internet.ip(),
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
      value: faker.internet.ip(),
    });
  },
).post(
  '/ipv4',
  describeRoute({
    tags: ['Internet'],
    description: 'IPv4',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.internet.ipv4(),
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
      cidrBlock: z.string().optional(),
      network: z.string().optional(),
    }).optional(),
  ),
  (c) => {
    return c.json({
      value: faker.internet.ipv4(
        c.req.valid('json'),
      ),
    });
  },
).post(
  '/ipv6',
  describeRoute({
    tags: ['Internet'],
    description: 'IPv6',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.internet.ipv6(),
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
      value: faker.internet.ipv6(),
    });
  },
).post(
  '/jwt',
  describeRoute({
    tags: ['Internet'],
    description: 'JWT',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.internet.jwt(),
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
      header: z.record(z.unknown()).optional(),
      payload: z.record(z.unknown()).optional(),
      refDate: z.union([z.string(), z.number(), z.date()]).optional(),
    }),
  ),
  (c) => {
    return c.json({
      value: faker.internet.jwt(
        c.req.valid('json'),
      ),
    });
  },
).post(
  '/mac',
  describeRoute({
    tags: ['Internet'],
    description: 'MAC Address',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.internet.mac(),
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
      separator: z.string().optional(),
    }).optional(),
  ),
  (c) => {
    return c.json({
      value: faker.internet.mac(
        c.req.valid('json'),
      ),
    });
  },
).post(
  '/password',
  describeRoute({
    tags: ['Internet'],
    description: 'Password',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.internet.password(),
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
      length: z.number().optional(),
      memorable: z.boolean().optional(),
      pattern: z.string().transform((v) => new RegExp(v)).optional(),
      prefix: z.string().optional(),
    }),
  ),
  (c) => {
    return c.json({
      value: faker.internet.password(
        c.req.valid('json'),
      ),
    });
  },
).post(
  '/port',
  describeRoute({
    tags: ['Internet'],
    description: 'Port',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.number().int().openapi({
                  example: faker.internet.port(),
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
      value: faker.internet.port(),
    });
  },
).post(
  '/protocol',
  describeRoute({
    tags: ['Internet'],
    description: 'Protocol',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.enum([
                  'http',
                  'https',
                ]).openapi({
                  example: faker.internet.protocol(),
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
      value: faker.internet.protocol(),
    });
  },
).post(
  '/url',
  describeRoute({
    tags: ['Internet'],
    description: 'URL',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().url().openapi({
                  example: faker.internet.url(),
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
      appendSlash: z.boolean().optional(),
      protocol: z.enum([
        'http',
        'https',
      ]).optional(),
    }),
  ),
  (c) => {
    return c.json({
      value: faker.internet.url(
        c.req.valid('json'),
      ),
    });
  },
).post(
  '/userAgent',
  describeRoute({
    tags: ['Internet'],
    description: 'User Agent',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.internet.userAgent(),
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
      value: faker.internet.userAgent(),
    });
  },
).post(
  '/username',
  describeRoute({
    tags: ['Internet'],
    description: 'Username',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.internet.username(),
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
    }),
  ),
  (c) => {
    return c.json({
      value: faker.internet.username(
        c.req.valid('json'),
      ),
    });
  },
);
