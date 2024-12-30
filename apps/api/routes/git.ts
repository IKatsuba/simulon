import { Hono } from 'hono';
import { faker } from '@faker-js/faker';
import { z } from '@simulon/zod';
import { HonoEnv } from '@simulon/env';
import { describeRoute } from 'hono-openapi';
import { resolver, validator as zValidator } from 'hono-openapi/zod';

export const git = new Hono<HonoEnv>();

git.post(
  '/branch',
  describeRoute({
    tags: ['Git'],
    description: 'Branch',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.git.branch(),
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
      value: c.var.faker.git.branch(),
    });
  },
).post(
  '/commitDate',
  describeRoute({
    tags: ['Git'],
    description: 'Commit date',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.git.commitDate(),
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
      refDate: z.union([z.string(), z.number(), z.date()]).optional(),
    }),
  ),
  (c) => {
    return c.json({
      value: c.var.faker.git.commitDate(
        c.req.valid('json'),
      ),
    });
  },
).post(
  '/commitEntry',
  describeRoute({
    tags: ['Git'],
    description: 'Commit entry',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.git.commitEntry(),
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
      merge: z.boolean().optional(),
      eol: z.enum(['LF', 'CRLF']).optional(),
      refDate: z.union([z.string(), z.number(), z.date()]).optional(),
    }),
  ),
  (c) => {
    return c.json({
      value: c.var.faker.git.commitEntry(
        c.req.valid('json'),
      ),
    });
  },
).post(
  '/commitMessage',
  describeRoute({
    tags: ['Git'],
    description: 'Commit message',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.git.commitMessage(),
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
      value: c.var.faker.git.commitMessage(),
    });
  },
).post(
  '/commitSha',
  describeRoute({
    tags: ['Git'],
    description: 'Commit SHA',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.git.commitSha(),
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
    }),
  ),
  (c) => {
    return c.json({
      value: c.var.faker.git.commitSha(
        c.req.valid('json'),
      ),
    });
  },
);
