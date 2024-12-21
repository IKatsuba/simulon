import { Hono } from 'hono';
import { faker } from '@faker-js/faker';
import { z } from '@simulon/zod';
import { describeRoute } from 'hono-openapi';
import { resolver, validator as zValidator } from 'hono-openapi/zod';

export const airline = new Hono();

airline.post(
  '/aircraftType',
  describeRoute({
    tags: ['Airline'],
    description: 'Airline aircraft type',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.enum([
                  'narrowbody',
                  'regional',
                  'widebody',
                ]),
              }),
            ),
          },
        },
      },
    },
  }),
  (c) => {
    return c.json({ value: faker.airline.aircraftType() });
  },
).post(
  '',
  describeRoute({
    tags: ['Airline'],
    description: 'Airline name',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(z.object({
              value: z.object({
                name: z.string(),
                iataCode: z.string(),
              }).openapi({
                example: faker.airline.airline(),
              }),
            })),
          },
        },
      },
    },
  }),
  (c) => {
    return c.json({ value: faker.airline.airline() });
  },
).post(
  '/airplane',
  describeRoute({
    tags: ['Airline'],
    description: 'Airline airplane',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(z.object({
              value: z.object({
                name: z.string(),
                iataTypeCode: z.string(),
              }).openapi({
                example: faker.airline.airplane(),
              }),
            })),
          },
        },
      },
    },
  }),
  (c) => {
    return c.json({ value: faker.airline.airplane() });
  },
).post(
  '/airport',
  describeRoute({
    tags: ['Airline'],
    description: 'Airline airport',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(z.object({
              value: z.object({
                name: z.string(),
                iataCode: z.string(),
              }).openapi({
                example: faker.airline.airport(),
              }),
            })),
          },
        },
      },
    },
  }),
  (c) => {
    return c.json({ value: faker.airline.airport() });
  },
).post(
  '/flightNumber',
  describeRoute({
    tags: ['Airline'],
    description: 'Airline flight number',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(z.object({
              value: z.string().openapi({
                example: faker.airline.flightNumber(),
              }),
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
        z.number().int().positive(),
        z.object({
          min: z.number().int().positive(),
          max: z.number().int().positive(),
        }).refine((v) => v.min < v.max, {
          message: 'min must be less than or equal to max',
        }),
      ]),
      addLeadingZeros: z.boolean().default(false),
    }),
  ),
  (c) => {
    return c.json({ value: faker.airline.flightNumber(c.req.valid('json')) });
  },
).post(
  '/recordLocator',
  describeRoute({
    tags: ['Airline'],
    description: 'Airline record locator',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(z.object({
              value: z.string().openapi({
                example: faker.airline.recordLocator(),
              }),
            })),
          },
        },
      },
    },
  }),
  zValidator(
    'json',
    z.object({
      allowNumerics: z.boolean().default(false),
      allowVisuallySimilarCharacters: z.boolean().default(false),
    }),
  ),
  (c) => {
    return c.json({ value: faker.airline.recordLocator(c.req.valid('json')) });
  },
).post(
  '/seat',
  describeRoute({
    tags: ['Airline'],
    description: 'Airline seat',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(z.object({
              value: z.string().openapi({
                example: faker.airline.seat(),
              }),
            })),
          },
        },
      },
    },
  }),
  zValidator(
    'json',
    z.object({
      aircraftType: z.enum([
        'narrowbody',
        'regional',
        'widebody',
      ]).default('narrowbody'),
    }),
  ),
  (c) => {
    return c.json({ value: faker.airline.seat(c.req.valid('json')) });
  },
);
