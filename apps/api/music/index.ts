import { Hono } from 'hono';
import { faker } from '@faker-js/faker';
import { z } from '@simulon/zod';
import { describeRoute } from 'hono-openapi';
import { resolver } from 'hono-openapi/zod';

export const music = new Hono();

music.post(
  '/album',
  describeRoute({
    tags: ['Music'],
    summary: 'Generate an album name',
    responses: {
      200: {
        description: 'Album name',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.music.album(),
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
      value: faker.music.album(),
    });
  },
).post(
  '/artist',
  describeRoute({
    tags: ['Music'],
    summary: 'Generate an artist name',
    responses: {
      200: {
        description: 'Artist name',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.music.artist(),
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
      value: faker.music.artist(),
    });
  },
).post(
  '/genre',
  describeRoute({
    tags: ['Music'],
    summary: 'Generate a genre',
    responses: {
      200: {
        description: 'Genre',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.music.genre(),
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
      value: faker.music.genre(),
    });
  },
).post(
  '/songName',
  describeRoute({
    tags: ['Music'],
    summary: 'Generate a song name',
    responses: {
      200: {
        description: 'Song name',
        content: {
          'application/json': {
            schema: resolver(
              z.object({
                value: z.string().openapi({
                  example: faker.music.songName(),
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
      value: faker.music.songName(),
    });
  },
);
