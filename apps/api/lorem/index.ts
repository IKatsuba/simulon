import { Hono } from 'hono';
import { faker } from '@faker-js/faker';
import { z } from '@simulon/zod';
import { describeRoute } from 'hono-openapi';
import { resolver, validator as zValidator } from 'hono-openapi/zod';

export const lorem = new Hono();

lorem.post(
  '/lines',
  describeRoute({
    tags: ['Lorem'],
    summary: 'Generate lines of text',
    responses: {
      200: {
        description: 'Lines of text',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.lorem.lines(2),
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
      min: z.number(),
      max: z.number(),
    }),
  ),
  (c) => {
    return c.json({
      value: faker.lorem.lines(
        c.req.valid('json'),
      ),
    });
  },
).post(
  '/paragraph',
  describeRoute({
    tags: ['Lorem'],
    summary: 'Generate a paragraph of text',
    responses: {
      200: {
        description: 'Paragraph of text',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.lorem.paragraph(),
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
      min: z.number(),
      max: z.number(),
    }),
  ),
  (c) => {
    return c.json({
      value: faker.lorem.paragraph(
        c.req.valid('json'),
      ),
    });
  },
).post(
  '/paragraphs',
  describeRoute({
    tags: ['Lorem'],
    summary: 'Generate paragraphs of text',
    responses: {
      200: {
        description: 'Paragraphs of text',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.lorem.paragraphs(2),
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
      min: z.number(),
      max: z.number(),
      separator: z.string().optional(),
    }),
  ),
  (c) => {
    return c.json({
      value: faker.lorem.paragraphs(
        c.req.valid('json'),
        c.req.valid('json')?.separator,
      ),
    });
  },
).post(
  '/sentence',
  describeRoute({
    tags: ['Lorem'],
    summary: 'Generate a sentence',
    responses: {
      200: {
        description: 'Sentence',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.lorem.sentence(),
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
      min: z.number(),
      max: z.number(),
    }),
  ),
  (c) => {
    return c.json({
      value: faker.lorem.sentence(
        c.req.valid('json'),
      ),
    });
  },
).post(
  '/sentences',
  describeRoute({
    tags: ['Lorem'],
    summary: 'Generate sentences',
    responses: {
      200: {
        description: 'Sentences',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.lorem.sentences(2),
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
      min: z.number(),
      max: z.number(),
      separator: z.string().optional(),
    }),
  ),
  (c) => {
    return c.json({
      value: faker.lorem.sentences(
        c.req.valid('json'),
        c.req.valid('json')?.separator,
      ),
    });
  },
).post(
  '/slug',
  describeRoute({
    tags: ['Lorem'],
    summary: 'Generate a slug',
    responses: {
      200: {
        description: 'Slug',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.lorem.slug(),
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
      min: z.number(),
      max: z.number(),
    }),
  ),
  (c) => {
    return c.json({
      value: faker.lorem.slug(
        c.req.valid('json'),
      ),
    });
  },
).post(
  '/text',
  describeRoute({
    tags: ['Lorem'],
    summary: 'Generate text',
    responses: {
      200: {
        description: 'Text',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.lorem.text(),
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
      value: faker.lorem.text(),
    });
  },
).post(
  '/word',
  describeRoute({
    tags: ['Lorem'],
    summary: 'Generate a word',
    responses: {
      200: {
        description: 'Word',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.lorem.word(),
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
      length: z.union([
        z.number(),
        z.object({
          min: z.number(),
          max: z.number(),
        }),
      ]).optional(),
      strategy: z.enum([
        'fail',
        'closest',
        'shortest',
        'longest',
        'any-length',
      ]).optional(),
    }),
  ),
  (c) => {
    return c.json({
      value: faker.lorem.word(
        c.req.valid('json'),
      ),
    });
  },
).post(
  '/words',
  describeRoute({
    tags: ['Lorem'],
    summary: 'Generate words',
    responses: {
      200: {
        description: 'Words',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.lorem.words(2),
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
      min: z.number(),
      max: z.number(),
    }),
  ),
  (c) => {
    return c.json({
      value: faker.lorem.words(
        c.req.valid('json'),
      ),
    });
  },
);
