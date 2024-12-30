import { Hono } from 'hono';
import { faker } from '@faker-js/faker';
import { z } from '@simulon/zod';
import { HonoEnv } from '@simulon/env';
import { describeRoute } from 'hono-openapi';
import { resolver, validator as zValidator } from 'hono-openapi/zod';

export const image = new Hono<HonoEnv>();

image.post(
  '/avatar',
  describeRoute({
    tags: ['Image'],
    description: 'Avatar',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().url().openapi({
                  example: faker.image.avatar(),
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
      value: c.var.faker.image.avatar(),
    });
  },
).post(
  '/avatarGitHub',
  describeRoute({
    tags: ['Image'],
    description: 'Avatar GitHub',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().url().openapi({
                  example: faker.image.avatarGitHub(),
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
      value: c.var.faker.image.avatarGitHub(),
    });
  },
).post(
  '/dataUri',
  describeRoute({
    tags: ['Image'],
    description: 'Data URI',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.image.dataUri(),
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
      width: z.number().optional(),
      height: z.number().optional(),
      color: z.string().optional(),
      type: z.enum(['svg-uri', 'svg-base64']).optional(),
    }),
  ),
  (c) => {
    return c.json({
      value: c.var.faker.image.dataUri(
        c.req.valid('json'),
      ),
    });
  },
).post(
  '/url',
  describeRoute({
    tags: ['Image'],
    description: 'URL',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().url().openapi({
                  example: faker.image.url(),
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
      width: z.number().optional(),
      height: z.number().optional(),
    }),
  ),
  (c) => {
    return c.json({
      value: c.var.faker.image.url(
        c.req.valid('json'),
      ),
    });
  },
).post(
  '/urlLoremFlickr',
  describeRoute({
    tags: ['Image'],
    description: 'URL Lorem Flickr',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().url().openapi({
                  example: faker.image.urlLoremFlickr(),
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
      width: z.number().optional(),
      height: z.number().optional(),
      category: z.string().optional(),
    }),
  ),
  (c) => {
    return c.json({
      value: c.var.faker.image.urlLoremFlickr(
        c.req.valid('json'),
      ),
    });
  },
).post(
  '/urlPicsumPhotos',
  describeRoute({
    tags: ['Image'],
    description: 'URL Picsum Photos',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().url().openapi({
                  example: faker.image.urlPicsumPhotos(),
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
      width: z.number().optional(),
      height: z.number().optional(),
      grayscale: z.boolean().optional(),
      blur: z.union([
        z.literal(1),
        z.literal(2),
        z.literal(3),
        z.literal(4),
        z.literal(5),
        z.literal(6),
        z.literal(7),
        z.literal(8),
        z.literal(9),
        z.literal(10),
      ]).optional(),
    }),
  ),
  (c) => {
    return c.json({
      value: c.var.faker.image.urlPicsumPhotos(
        c.req.valid('json'),
      ),
    });
  },
).post(
  '/urlPlaceholder',
  describeRoute({
    tags: ['Image'],
    description: 'URL Placeholder',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().url().openapi({
                  example: faker.image.urlPlaceholder(),
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
      width: z.number().optional(),
      height: z.number().optional(),
      backgroundColor: z.string().optional(),
      textColor: z.string().optional(),
      format: z.enum(['gif', 'jpeg', 'jpg', 'png', 'webp']).optional(),
      text: z.string().optional(),
    }),
  ),
  (c) => {
    return c.json({
      value: c.var.faker.image.urlPlaceholder(
        c.req.valid('json'),
      ),
    });
  },
);
