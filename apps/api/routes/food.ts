import { Hono } from 'hono';
import { faker } from '@faker-js/faker';
import { z } from '@simulon/zod';
import { describeRoute } from 'hono-openapi';
import { resolver } from 'hono-openapi/zod';
import { HonoEnv } from '@simulon/env';

export const food = new Hono<HonoEnv>();

food.post(
  '/adjective',
  describeRoute({
    tags: ['Food'],
    description: 'Adjective',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.food.adjective(),
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
      value: c.var.faker.food.adjective(),
    });
  },
).post(
  '/description',
  describeRoute({
    tags: ['Food'],
    description: 'Description',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.food.description(),
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
      value: c.var.faker.food.description(),
    });
  },
).post(
  '/dish',
  describeRoute({
    tags: ['Food'],
    description: 'Dish',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.food.dish(),
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
      value: faker.food.dish(),
    });
  },
).post(
  '/ethnicCategory',
  describeRoute({
    tags: ['Food'],
    description: 'Ethnic category',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.food.ethnicCategory(),
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
      value: c.var.faker.food.ethnicCategory(),
    });
  },
).post(
  '/fruit',
  describeRoute({
    tags: ['Food'],
    description: 'Fruit',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.food.fruit(),
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
      value: c.var.faker.food.fruit(),
    });
  },
).post(
  '/ingredient',
  describeRoute({
    tags: ['Food'],
    description: 'Ingredient',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.food.ingredient(),
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
      value: c.var.faker.food.ingredient(),
    });
  },
).post(
  '/meat',
  describeRoute({
    tags: ['Food'],
    description: 'Meat',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.food.meat(),
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
      value: c.var.faker.food.meat(),
    });
  },
).post(
  '/spice',
  describeRoute({
    tags: ['Food'],
    description: 'Spice',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.food.spice(),
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
      value: c.var.faker.food.spice(),
    });
  },
).post(
  '/vegetable',
  describeRoute({
    tags: ['Food'],
    description: 'Vegetable',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.food.vegetable(),
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
      value: c.var.faker.food.vegetable(),
    });
  },
);
