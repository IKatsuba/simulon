import { Hono } from 'hono';
import { faker } from '@faker-js/faker';
import { z } from '@simulon/zod';
import { describeRoute } from 'hono-openapi';
import { resolver } from 'hono-openapi/zod';

export const company = new Hono();

company.post(
  '/name',
  describeRoute({
    tags: ['Company'],
    description: 'Company name',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.company.name(),
                }),
              }),
            ),
          },
        },
      },
    },
  }),
  (c) => {
    return c.json({ value: faker.company.name() });
  },
).post(
  '/catchPhrase',
  describeRoute({
    tags: ['Company'],
    description: 'Company catch phrase',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.company.catchPhrase(),
                }),
              }),
            ),
          },
        },
      },
    },
  }),
  (c) => {
    return c.json({ value: faker.company.catchPhrase() });
  },
).post(
  '/buzzPhrase',
  describeRoute({
    tags: ['Company'],
    description: 'Company buzz phrase',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.company.buzzPhrase(),
                }),
              }),
            ),
          },
        },
      },
    },
  }),
  (c) => {
    return c.json({ value: faker.company.buzzPhrase() });
  },
).post(
  '/catchPhraseAdjective',
  describeRoute({
    tags: ['Company'],
    description: 'Company catch phrase adjective',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.company.catchPhraseAdjective(),
                }),
              }),
            ),
          },
        },
      },
    },
  }),
  (c) => {
    return c.json({ value: faker.company.catchPhraseAdjective() });
  },
).post(
  '/catchPhraseDescriptor',
  describeRoute({
    tags: ['Company'],
    description: 'Company catch phrase descriptor',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.company.catchPhraseDescriptor(),
                }),
              }),
            ),
          },
        },
      },
    },
  }),
  (c) => {
    return c.json({ value: faker.company.catchPhraseDescriptor() });
  },
).post(
  '/catchPhraseNoun',
  describeRoute({
    tags: ['Company'],
    description: 'Company catch phrase noun',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.company.catchPhraseNoun(),
                }),
              }),
            ),
          },
        },
      },
    },
  }),
  (c) => {
    return c.json({ value: faker.company.catchPhraseNoun() });
  },
).post(
  '/buzzAdjective',
  describeRoute({
    tags: ['Company'],
    description: 'Company buzz adjective',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.company.buzzAdjective(),
                }),
              }),
            ),
          },
        },
      },
    },
  }),
  (c) => {
    return c.json({ value: faker.company.buzzAdjective() });
  },
).post(
  '/buzzVerb',
  describeRoute({
    tags: ['Company'],
    description: 'Company buzz verb',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.company.buzzVerb(),
                }),
              }),
            ),
          },
        },
      },
    },
  }),
  (c) => {
    return c.json({ value: faker.company.buzzVerb() });
  },
).post(
  '/buzzNoun',
  describeRoute({
    tags: ['Company'],
    description: 'Company buzz noun',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.company.buzzNoun(),
                }),
              }),
            ),
          },
        },
      },
    },
  }),
  (c) => {
    return c.json({ value: faker.company.buzzNoun() });
  },
);
