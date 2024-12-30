import { Hono } from 'hono';
import { faker } from '@faker-js/faker';
import { z } from '@simulon/zod';
import { describeRoute } from 'hono-openapi';
import { resolver } from 'hono-openapi/zod';
import { HonoEnv } from '@simulon/env';

export const vehicle = new Hono<HonoEnv>();

vehicle.post(
  '/bicycle',
  describeRoute({
    tags: ['Vehicle'],
    summary: 'Generate a bicycle type',
    responses: {
      200: {
        description: 'Bicycle type',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.vehicle.bicycle(),
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
      value: c.var.faker.vehicle.bicycle(),
    });
  },
).post(
  '/color',
  describeRoute({
    tags: ['Vehicle'],
    summary: 'Generate a vehicle color',
    responses: {
      200: {
        description: 'Vehicle color',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.vehicle.color(),
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
      value: c.var.faker.vehicle.color(),
    });
  },
).post(
  '/fuel',
  describeRoute({
    tags: ['Vehicle'],
    summary: 'Generate a fuel type',
    responses: {
      200: {
        description: 'Fuel type',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.vehicle.fuel(),
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
      value: c.var.faker.vehicle.fuel(),
    });
  },
).post(
  '/manufacturer',
  describeRoute({
    tags: ['Vehicle'],
    summary: 'Generate a vehicle manufacturer',
    responses: {
      200: {
        description: 'Vehicle manufacturer',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.vehicle.manufacturer(),
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
      value: c.var.faker.vehicle.manufacturer(),
    });
  },
).post(
  '/model',
  describeRoute({
    tags: ['Vehicle'],
    summary: 'Generate a vehicle model',
    responses: {
      200: {
        description: 'Vehicle model',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.vehicle.model(),
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
      value: c.var.faker.vehicle.model(),
    });
  },
).post(
  '/type',
  describeRoute({
    tags: ['Vehicle'],
    summary: 'Generate a vehicle type',
    responses: {
      200: {
        description: 'Vehicle type',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.vehicle.type(),
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
      value: c.var.faker.vehicle.type(),
    });
  },
).post(
  '/vin',
  describeRoute({
    tags: ['Vehicle'],
    summary: 'Generate a vehicle identification number (VIN)',
    responses: {
      200: {
        description: 'Vehicle identification number (VIN)',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.vehicle.vin(),
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
      value: c.var.faker.vehicle.vin(),
    });
  },
);
