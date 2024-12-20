import { Hono } from 'hono';
import { faker } from '@faker-js/faker';
import { z } from '@simulon/zod';
import { describeRoute } from 'hono-openapi';
import { resolver, validator as zValidator } from 'hono-openapi/zod';

export const location = new Hono();

location.post(
  '/buildingNumber',
  describeRoute({
    tags: ['Location'],
    summary: 'Generate a building number',
    responses: {
      200: {
        description: 'Building number',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.location.buildingNumber(),
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
      value: faker.location.buildingNumber(),
    });
  },
).post(
  '/cardinalDirection',
  describeRoute({
    tags: ['Location'],
    summary: 'Generate a cardinal direction',
    responses: {
      200: {
        description: 'Cardinal direction',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.location.cardinalDirection(),
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
      abbreviated: z.boolean().optional(),
    }),
  ),
  (c) => {
    return c.json({
      value: faker.location.cardinalDirection(
        c.req.valid('json'),
      ),
    });
  },
).post(
  '/city',
  describeRoute({
    tags: ['Location'],
    summary: 'Generate a city',
    responses: {
      200: {
        description: 'City',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.location.city(),
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
      value: faker.location.city(),
    });
  },
).post(
  '/continent',
  describeRoute({
    tags: ['Location'],
    summary: 'Generate a continent',
    responses: {
      200: {
        description: 'Continent',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.location.continent(),
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
      value: faker.location.continent(),
    });
  },
).post(
  '/country',
  describeRoute({
    tags: ['Location'],
    summary: 'Generate a country',
    responses: {
      200: {
        description: 'Country',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.location.country(),
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
      value: faker.location.country(),
    });
  },
).post(
  '/countryCode',
  describeRoute({
    tags: ['Location'],
    summary: 'Generate a country code',
    responses: {
      200: {
        description: 'Country code',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.location.countryCode(),
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
      variant: z.enum(['alpha-2', 'alpha-3', 'numeric']).optional(),
    }),
  ),
  (c) => {
    return c.json({
      value: faker.location.countryCode(
        c.req.valid('json'),
      ),
    });
  },
).post(
  '/county',
  describeRoute({
    tags: ['Location'],
    summary: 'Generate a county',
    responses: {
      200: {
        description: 'County',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.location.county(),
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
      value: faker.location.county(),
    });
  },
).post(
  '/direction',
  describeRoute({
    tags: ['Location'],
    summary: 'Generate a direction',
    responses: {
      200: {
        description: 'Direction',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.location.direction(),
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
      abbreviated: z.boolean().optional(),
    }),
  ),
  (c) => {
    return c.json({
      value: faker.location.direction(
        c.req.valid('json'),
      ),
    });
  },
).post(
  '/latitude',
  describeRoute({
    tags: ['Location'],
    summary: 'Generate a latitude',
    responses: {
      200: {
        description: 'Latitude',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.number().openapi({
                  example: faker.location.latitude(),
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
      max: z.number().optional(),
      min: z.number().optional(),
      precision: z.number().optional(),
    }),
  ),
  (c) => {
    return c.json({
      value: faker.location.latitude(
        c.req.valid('json'),
      ),
    });
  },
).post(
  '/longitude',
  describeRoute({
    tags: ['Location'],
    summary: 'Generate a longitude',
    responses: {
      200: {
        description: 'Longitude',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.number().openapi({
                  example: faker.location.longitude(),
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
      max: z.number().optional(),
      min: z.number().optional(),
      precision: z.number().optional(),
    }),
  ),
  (c) => {
    return c.json({
      value: faker.location.longitude(
        c.req.valid('json'),
      ),
    });
  },
).post(
  '/nearbyGPSCoordinate',
  describeRoute({
    tags: ['Location'],
    summary: 'Generate a nearby GPS coordinate',
    responses: {
      200: {
        description: 'Nearby GPS coordinate',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.tuple([z.number(), z.number()]).openapi({
                  example: faker.location.nearbyGPSCoordinate(),
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
      origin: z.tuple([z.number(), z.number()]).optional(),
      radius: z.number().optional(),
      isMetric: z.boolean().optional(),
    }),
  ),
  (c) => {
    return c.json({
      value: faker.location.nearbyGPSCoordinate(
        c.req.valid('json'),
      ),
    });
  },
).post(
  '/ordinalDirection',
  describeRoute({
    tags: ['Location'],
    summary: 'Generate an ordinal direction',
    responses: {
      200: {
        description: 'Ordinal direction',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.location.ordinalDirection(),
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
      abbreviated: z.boolean().optional(),
    }),
  ),
  (c) => {
    return c.json({
      value: faker.location.ordinalDirection(
        c.req.valid('json'),
      ),
    });
  },
).post(
  '/secondaryAddress',
  describeRoute({
    tags: ['Location'],
    summary: 'Generate a secondary address',
    responses: {
      200: {
        description: 'Secondary address',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.location.secondaryAddress(),
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
      value: faker.location.secondaryAddress(),
    });
  },
).post(
  '/state',
  describeRoute({
    tags: ['Location'],
    summary: 'Generate a state',
    responses: {
      200: {
        description: 'State',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.location.state(),
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
      abbreviated: z.boolean().optional(),
    }),
  ),
  (c) => {
    return c.json({
      value: faker.location.state(
        c.req.valid('json'),
      ),
    });
  },
).post(
  '/street',
  describeRoute({
    tags: ['Location'],
    summary: 'Generate a street',
    responses: {
      200: {
        description: 'Street',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.location.street(),
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
      value: faker.location.street(),
    });
  },
).post(
  '/streetAddress',
  describeRoute({
    tags: ['Location'],
    summary: 'Generate a street address',
    responses: {
      200: {
        description: 'Street address',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.location.streetAddress(),
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
      useFullAddress: z.boolean().optional(),
    }),
  ),
  (c) => {
    return c.json({
      value: faker.location.streetAddress(
        c.req.valid('json'),
      ),
    });
  },
).post(
  '/timeZone',
  describeRoute({
    tags: ['Location'],
    summary: 'Generate a time zone',
    responses: {
      200: {
        description: 'Time zone',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.location.timeZone(),
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
      value: faker.location.timeZone(),
    });
  },
).post(
  '/zipCode',
  describeRoute({
    tags: ['Location'],
    summary: 'Generate a ZIP code',
    responses: {
      200: {
        description: 'ZIP code',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.location.zipCode(),
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
      format: z.string().optional(),
      state: z.string().optional(),
    }),
  ),
  (c) => {
    return c.json({
      value: faker.location.zipCode(
        c.req.valid('json'),
      ),
    });
  },
);
