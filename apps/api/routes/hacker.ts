import { Hono } from 'hono';
import { faker } from '@faker-js/faker';
import { z } from '@simulon/zod';
import { HonoEnv } from '@simulon/env';
import { describeRoute } from 'hono-openapi';
import { resolver } from 'hono-openapi/zod';

export const hacker = new Hono<HonoEnv>();

hacker.post(
  '/abbreviation',
  describeRoute({
    tags: ['Hacker'],
    description: 'Abbreviation',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.hacker.abbreviation(),
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
      value: c.var.faker.hacker.abbreviation(),
    });
  },
).post(
  '/adjective',
  describeRoute({
    tags: ['Hacker'],
    description: 'Adjective',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.hacker.adjective(),
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
      value: c.var.faker.hacker.adjective(),
    });
  },
).post(
  '/ingverb',
  describeRoute({
    tags: ['Hacker'],
    description: 'Ingverb',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.hacker.ingverb(),
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
      value: c.var.faker.hacker.ingverb(),
    });
  },
).post(
  '/noun',
  describeRoute({
    tags: ['Hacker'],
    description: 'Noun',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.hacker.noun(),
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
      value: c.var.faker.hacker.noun(),
    });
  },
).post(
  '/phrase',
  describeRoute({
    tags: ['Hacker'],
    description: 'Phrase',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.hacker.phrase(),
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
      value: c.var.faker.hacker.phrase(),
    });
  },
).post(
  '/verb',
  describeRoute({
    tags: ['Hacker'],
    description: 'Verb',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.hacker.verb(),
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
      value: c.var.faker.hacker.verb(),
    });
  },
);
