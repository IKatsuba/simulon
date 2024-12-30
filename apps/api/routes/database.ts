import { Hono } from 'hono';
import { faker } from '@faker-js/faker';
import { z } from '@simulon/zod';
import { HonoEnv } from '@simulon/env';
import { describeRoute } from 'hono-openapi';
import { resolver } from 'hono-openapi/zod';

export const database = new Hono<HonoEnv>();

database.post(
  '/column',
  describeRoute({
    tags: ['Database'],
    description: 'Column',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.database.column(),
                }),
              }),
            ),
          },
        },
      },
    },
  }),
  (c) => {
    return c.json({ value: c.var.faker.database.column() });
  },
).post(
  '/type',
  describeRoute({
    tags: ['Database'],
    description: 'Type',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.database.type(),
                }),
              }),
            ),
          },
        },
      },
    },
  }),
  (c) => {
    return c.json({ value: c.var.faker.database.type() });
  },
).post(
  '/collation',
  describeRoute({
    tags: ['Database'],
    description: 'Collation',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.database.collation(),
                }),
              }),
            ),
          },
        },
      },
    },
  }),
  (c) => {
    return c.json({ value: c.var.faker.database.collation() });
  },
).post(
  '/engine',
  describeRoute({
    tags: ['Database'],
    description: 'Engine',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.database.engine(),
                }),
              }),
            ),
          },
        },
      },
    },
  }),
  (c) => {
    return c.json({ value: c.var.faker.database.engine() });
  },
).post(
  '/mongodbObjectId',
  describeRoute({
    tags: ['Database'],
    description: 'MongoDB Object ID',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.database.mongodbObjectId(),
                }),
              }),
            ),
          },
        },
      },
    },
  }),
  (c) => {
    return c.json({ value: c.var.faker.database.mongodbObjectId() });
  },
);
