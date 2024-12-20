import { Hono } from 'hono';
import { faker } from '@faker-js/faker';
import { z } from '@simulon/zod';
import { describeRoute } from 'hono-openapi';
import { resolver, validator as zValidator } from 'hono-openapi/zod';

export const finance = new Hono();

finance.post(
  '/accountName',
  describeRoute({
    tags: ['Finance'],
    description: 'Account name',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.finance.accountName(),
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
      value: faker.finance.accountName(),
    });
  },
).post(
  '/accountNumber',
  describeRoute({
    tags: ['Finance'],
    description: 'Account number',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.finance.accountNumber(),
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
      length: z.number().positive().default(8),
    }),
  ),
  (c) => {
    return c.json({
      value: faker.finance.accountNumber(
        c.req.valid('json'),
      ),
    });
  },
).post(
  '/amount',
  describeRoute({
    tags: ['Finance'],
    description: 'Amount',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.finance.amount(),
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
      autoFormat: z.boolean().default(false),
      dec: z.number().positive().default(2),
      max: z.number().positive().default(1000),
      min: z.number().nonnegative().default(0),
      symbol: z.string().default(''),
    }),
  ),
  (c) => {
    return c.json({
      value: faker.finance.amount(
        c.req.valid('json'),
      ),
    });
  },
).post(
  '/bic',
  describeRoute({
    tags: ['Finance'],
    description: 'BIC',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.finance.bic(),
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
      includeBranchCode: z.boolean().default(faker.datatype.boolean()),
    }),
  ),
  (c) => {
    return c.json({
      value: faker.finance.bic(
        c.req.valid('json'),
      ),
    });
  },
).post(
  '/bitcoinAddress',
  describeRoute({
    tags: ['Finance'],
    description: 'Bitcoin address',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.finance.bitcoinAddress(),
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
      network: z.enum([
        'mainnet',
        'testnet',
      ]).default('mainnet'),
      type: z.enum([
        'legacy',
        'segwit',
        'bech32',
        'taproot',
      ]).default(
        faker.helpers.arrayElement(['legacy', 'segwit', 'bech32', 'taproot']),
      ),
    }),
  ),
  (c) => {
    return c.json({
      value: faker.finance.bitcoinAddress(
        c.req.valid('json'),
      ),
    });
  },
).post(
  '/creditCardCVV',
  describeRoute({
    tags: ['Finance'],
    description: 'Credit card CVV',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.finance.creditCardCVV(),
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
      value: faker.finance.creditCardCVV(),
    });
  },
).post(
  '/creditCardIssuer',
  describeRoute({
    tags: ['Finance'],
    description: 'Credit card issuer',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.finance.creditCardIssuer(),
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
      value: faker.finance.creditCardIssuer(),
    });
  },
).post(
  '/creditCardNumber',
  describeRoute({
    tags: ['Finance'],
    description: 'Credit card number',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.finance.creditCardNumber(),
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
      issuer: z.string().default(''),
    }),
  ),
  (c) => {
    return c.json({
      value: faker.finance.creditCardNumber(
        c.req.valid('json'),
      ),
    });
  },
).post(
  '/currencyCode',
  describeRoute({
    tags: ['Finance'],
    description: 'Currency code',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.finance.currencyCode(),
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
      value: faker.finance.currencyCode(),
    });
  },
).post(
  '/currencyName',
  describeRoute({
    tags: ['Finance'],
    description: 'Currency name',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.finance.currencyName(),
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
      value: faker.finance.currencyName(),
    });
  },
).post(
  '/currencySymbol',
  describeRoute({
    tags: ['Finance'],
    description: 'Currency symbol',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.finance.currencySymbol(),
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
      value: faker.finance.currencySymbol(),
    });
  },
).post(
  '/ethereumAddress',
  describeRoute({
    tags: ['Finance'],
    description: 'Ethereum address',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.finance.ethereumAddress(),
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
      value: faker.finance.ethereumAddress(),
    });
  },
).post(
  '/iban',
  describeRoute({
    tags: ['Finance'],
    description: 'IBAN',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.finance.iban(),
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
      countryCode: z.string().optional(),
      formatted: z.boolean().default(false),
    }),
  ),
  (c) => {
    return c.json({
      value: faker.finance.iban(
        c.req.valid('json'),
      ),
    });
  },
).post(
  '/litecoinAddress',
  describeRoute({
    tags: ['Finance'],
    description: 'Litecoin address',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.finance.litecoinAddress(),
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
      value: faker.finance.litecoinAddress(),
    });
  },
).post(
  '/pin',
  describeRoute({
    tags: ['Finance'],
    description: 'PIN',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.finance.pin(),
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
      length: z.number().positive().default(4),
    }),
  ),
  (c) => {
    return c.json({
      value: faker.finance.pin(
        c.req.valid('json'),
      ),
    });
  },
).post(
  '/routingNumber',
  describeRoute({
    tags: ['Finance'],
    description: 'Routing number',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.finance.routingNumber(),
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
      value: faker.finance.routingNumber(),
    });
  },
).post(
  '/transactionDescription',
  describeRoute({
    tags: ['Finance'],
    description: 'Transaction description',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.finance.transactionDescription(),
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
      value: faker.finance.transactionDescription(),
    });
  },
).post(
  '/transactionType',
  describeRoute({
    tags: ['Finance'],
    description: 'Transaction type',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.finance.transactionType(),
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
      value: faker.finance.transactionType(),
    });
  },
);
