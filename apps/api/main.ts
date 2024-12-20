import { Hono } from 'hono';
import { airline } from './airline/index.ts';
import { animal } from './animal/index.ts';
import { book } from './book/index.ts';
import { color } from './color/index.ts';
import { commerce } from './commerce/index.ts';
import { company } from './company/index.ts';
import { database } from './database/index.ts';
import { datatype } from './datatype/index.ts';
import { date } from './date/index.ts';
import { finance } from './finance/index.ts';
import { food } from './food/index.ts';
import { git } from './git/index.ts';
import { hacker } from './hacker/index.ts';
import { image } from './image/index.ts';
import { internet } from './internet/index.ts';
import { location } from './location/index.ts';
import { lorem } from './lorem/index.ts';
import { music } from './music/index.ts';
import { number } from './number/index.ts';
import { person } from './person/index.ts';
import { phone } from './phone/index.ts';
import { science } from './science/index.ts';
import { string } from './string/index.ts';
import { system } from './system/index.ts';
import { vehicle } from './vehicle/index.ts';
import { word } from './word/index.ts';
import { json } from './json/index.ts';
import { openAPISpecs } from 'hono-openapi';
import { swaggerUI } from '@hono/swagger-ui';
import { env } from '@simulon/env';

const faker = new Hono();

faker
  .route('/airline', airline)
  .route('/animal', animal)
  .route('/book', book)
  .route('/color', color)
  .route('/commerce', commerce)
  .route('/company', company)
  .route('/database', database)
  .route('/datatype', datatype)
  .route('/date', date)
  .route('/finance', finance)
  .route('/food', food)
  .route('/git', git)
  .route('/hacker', hacker)
  .route('/image', image)
  .route('/internet', internet)
  .route('/location', location)
  .route('/lorem', lorem)
  .route('/music', music)
  .route('/number', number)
  .route('/person', person)
  .route('/phone', phone)
  .route('/science', science)
  .route('/string', string)
  .route('/system', system)
  .route('/vehicle', vehicle)
  .route('/word', word)
  .route('/json', json);

const app = new Hono().route('/v1', faker);

app.get(
  '/openapi',
  openAPISpecs(app, {
    documentation: {
      info: {
        title: 'Simulon API',
        version: '1.0.0',
      },
      servers: [
        { url: env.SIMULON_PUBLIC_URL ?? `http://${env.HOST}:${env.PORT}` },
      ],
    },
  }),
);

app.get('/ui', swaggerUI({ url: '/openapi' }));

Deno.serve({
  port: env.PORT,
  hostname: env.HOST,
}, app.fetch);
