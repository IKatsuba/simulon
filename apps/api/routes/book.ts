import { Hono } from 'hono';
import { faker } from '@faker-js/faker';
import { describeRoute } from 'hono-openapi';
import { resolver } from 'hono-openapi/zod';
import { z } from '@simulon/zod';
import { HonoEnv } from '@simulon/env';

export const book = new Hono<HonoEnv>();

book.post(
  '/author',
  describeRoute({
    tags: ['Book'],
    description: 'Book author',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(z.object({
              value: z.string().openapi({
                example: faker.book.author(),
              }),
            })),
          },
        },
      },
    },
  }),
  (c) => {
    return c.json({ value: c.var.faker.book.author() });
  },
).post(
  '/format',
  describeRoute({
    tags: ['Book'],
    description: 'Book format',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(z.object({
              value: z.string().openapi({
                example: faker.book.format(),
              }),
            })),
          },
        },
      },
    },
  }),
  (c) => {
    return c.json({ value: c.var.faker.book.format() });
  },
).post(
  '/genre',
  describeRoute({
    tags: ['Book'],
    description: 'Book genre',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(z.object({
              value: z.string().openapi({
                example: faker.book.genre(),
              }),
            })),
          },
        },
      },
    },
  }),
  (c) => {
    return c.json({ value: c.var.faker.book.genre() });
  },
).post(
  '/publisher',
  describeRoute({
    tags: ['Book'],
    description: 'Book publisher',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(z.object({
              value: z.string().openapi({
                example: faker.book.publisher(),
              }),
            })),
          },
        },
      },
    },
  }),
  (c) => {
    return c.json({ value: c.var.faker.book.publisher() });
  },
).post(
  '/series',
  describeRoute({
    tags: ['Book'],
    description: 'Book series',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(z.object({
              value: z.string().openapi({
                example: faker.book.series(),
              }),
            })),
          },
        },
      },
    },
  }),
  (c) => {
    return c.json({ value: c.var.faker.book.series() });
  },
).post(
  '/title',
  describeRoute({
    tags: ['Book'],
    description: 'Book title',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(z.object({
              value: z.string().openapi({
                example: faker.book.title(),
              }),
            })),
          },
        },
      },
    },
  }),
  (c) => {
    return c.json({ value: c.var.faker.book.title() });
  },
);
