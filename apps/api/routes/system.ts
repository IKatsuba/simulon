import { Hono } from 'hono';
import { faker } from '@faker-js/faker';
import { z } from '@simulon/zod';
import { describeRoute } from 'hono-openapi';
import { resolver, validator as zValidator } from 'hono-openapi/zod';
import { HonoEnv } from '@simulon/env';

export const system = new Hono<HonoEnv>();

system.post(
  '/commonFileExt',
  describeRoute({
    tags: ['System'],
    summary: 'Generate a common file extension',
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: resolver(z.object({
              value: z.string().openapi({
                example: faker.system.commonFileExt(),
              }),
            })),
          },
        },
      },
    },
  }),
  (c) => {
    return c.json({
      value: c.var.faker.system.commonFileExt(),
    });
  },
).post(
  '/commonFileName',
  describeRoute({
    tags: ['System'],
    summary: 'Generate a common file name',
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: resolver(z.object({
              value: z.string().openapi({
                example: faker.system.commonFileName(),
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
      ext: z.string().optional(),
    }).optional(),
  ),
  (c) => {
    return c.json({
      value: c.var.faker.system.commonFileName(
        c.req.valid('json')?.ext,
      ),
    });
  },
).post(
  '/commonFileType',
  describeRoute({
    tags: ['System'],
    summary: 'Generate a common file type',
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: resolver(z.object({
              value: z.string().openapi({
                example: faker.system.commonFileType(),
              }),
            })),
          },
        },
      },
    },
  }),
  (c) => {
    return c.json({
      value: c.var.faker.system.commonFileType(),
    });
  },
).post(
  '/cron',
  describeRoute({
    tags: ['System'],
    summary: 'Generate a cron expression',
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: resolver(z.object({
              value: z.string().openapi({
                example: faker.system.cron(),
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
      includeYear: z.boolean().optional(),
      includeNonStandard: z.boolean().optional(),
    }).optional(),
  ),
  (c) => {
    return c.json({
      value: c.var.faker.system.cron(
        c.req.valid('json'),
      ),
    });
  },
).post(
  '/directoryPath',
  describeRoute({
    tags: ['System'],
    summary: 'Generate a directory path',
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: resolver(z.object({
              value: z.string().openapi({
                example: faker.system.directoryPath(),
              }),
            })),
          },
        },
      },
    },
  }),
  (c) => {
    return c.json({
      value: c.var.faker.system.directoryPath(),
    });
  },
).post(
  '/fileExt',
  describeRoute({
    tags: ['System'],
    summary: 'Generate a file extension',
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: resolver(z.object({
              value: z.string().openapi({
                example: faker.system.fileExt(),
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
      mimeType: z.string().optional(),
    }).optional(),
  ),
  (c) => {
    return c.json({
      value: c.var.faker.system.fileExt(
        c.req.valid('json')?.mimeType,
      ),
    });
  },
).post(
  '/fileName',
  describeRoute({
    tags: ['System'],
    summary: 'Generate a file name',
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: resolver(z.object({
              value: z.string().openapi({
                example: faker.system.fileName(),
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
      extensionCount: z.union([
        z.number(),
        z.object({
          min: z.number(),
          max: z.number(),
        }),
      ]).optional(),
    }).optional(),
  ),
  (c) => {
    return c.json({
      value: c.var.faker.system.fileName(
        c.req.valid('json'),
      ),
    });
  },
).post(
  '/filePath',
  describeRoute({
    tags: ['System'],
    summary: 'Generate a file path',
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: resolver(z.object({
              value: z.string().openapi({
                example: faker.system.filePath(),
              }),
            })),
          },
        },
      },
    },
  }),
  (c) => {
    return c.json({
      value: c.var.faker.system.filePath(),
    });
  },
).post(
  '/fileType',
  describeRoute({
    tags: ['System'],
    summary: 'Generate a file type',
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: resolver(z.object({
              value: z.string().openapi({
                example: faker.system.fileType(),
              }),
            })),
          },
        },
      },
    },
  }),
  (c) => {
    return c.json({
      value: c.var.faker.system.fileType(),
    });
  },
).post(
  '/mimeType',
  describeRoute({
    tags: ['System'],
    summary: 'Generate a MIME type',
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: resolver(z.object({
              value: z.string().openapi({
                example: faker.system.mimeType(),
              }),
            })),
          },
        },
      },
    },
  }),
  (c) => {
    return c.json({
      value: c.var.faker.system.mimeType(),
    });
  },
).post(
  '/networkInterface',
  describeRoute({
    tags: ['System'],
    summary: 'Generate a network interface',
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: resolver(z.object({
              value: z.string().openapi({
                example: faker.system.networkInterface(),
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
      interfaceType: z.enum(['en', 'wl', 'ww']).optional(),
      interfaceSchema: z.enum(['index', 'slot', 'mac', 'pci']).optional(),
    }).optional(),
  ),
  (c) => {
    return c.json({
      value: c.var.faker.system.networkInterface(
        c.req.valid('json'),
      ),
    });
  },
).post(
  '/semver',
  describeRoute({
    tags: ['System'],
    summary: 'Generate a semantic version',
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: resolver(z.object({
              value: z.string().openapi({
                example: faker.system.semver(),
              }),
            })),
          },
        },
      },
    },
  }),
  (c) => {
    return c.json({
      value: c.var.faker.system.semver(),
    });
  },
);
