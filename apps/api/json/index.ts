import { Hono } from 'hono';
import { schemaFaker } from '@simulon/schema-faker';
import { dereference } from '@apidevtools/json-schema-ref-parser';
import { z } from '@simulon/zod';
import { describeRoute } from 'hono-openapi';
import { resolver, validator as zValidator } from 'hono-openapi/zod';

export const json = new Hono();

json.post(
  '/generate',
  describeRoute({
    tags: ['JSON'],
    summary: 'Generate a JSON object',
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: resolver(z.object({
              value: z.object({}).passthrough().openapi({
                example: schemaFaker({
                  type: 'object',
                  properties: {
                    name: { type: 'string' },
                    age: { type: 'integer' },
                    email: {
                      type: 'string',
                      format: 'email',
                    },
                  },
                }) as any,
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
      schema: z.object({}).passthrough().openapi({
        example: {
          type: 'object',
          properties: {
            name: { type: 'string' },
            age: { type: 'integer' },
            email: {
              type: 'string',
              format: 'email',
            },
          },
        },
      }),
    }),
  ),
  async (c) => {
    const { schema } = c.req.valid('json');
    const dereferencedSchema = await dereference(schema);

    return c.json({ value: schemaFaker(dereferencedSchema as any) });
  },
);
