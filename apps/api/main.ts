import { Hono } from 'hono';
import { airline } from './routes/airline.ts';
import { animal } from './routes/animal.ts';
import { book } from './routes/book.ts';
import { color } from './routes/color.ts';
import { commerce } from './routes/commerce.ts';
import { company } from './routes/company.ts';
import { database } from './routes/database.ts';
import { datatype } from './routes/datatype.ts';
import { date } from './routes/date.ts';
import { finance } from './routes/finance.ts';
import { food } from './routes/food.ts';
import { git } from './routes/git.ts';
import { hacker } from './routes/hacker.ts';
import { image } from './routes/image.ts';
import { internet } from './routes/internet.ts';
import { location } from './routes/location.ts';
import { lorem } from './routes/lorem.ts';
import { music } from './routes/music.ts';
import { number } from './routes/number.ts';
import { person } from './routes/person.ts';
import { phone } from './routes/phone.ts';
import { science } from './routes/science.ts';
import { string } from './routes/string.ts';
import { system } from './routes/system.ts';
import { vehicle } from './routes/vehicle.ts';
import { word } from './routes/word.ts';
import { json } from './routes/json.ts';
import { openAPISpecs } from 'hono-openapi';
import { env, HonoEnv } from '@simulon/env';
import { apiReference } from '@scalar/hono-api-reference';
import { initFaker } from './middlewares/init-faker.ts';

const fakerApi = new Hono<HonoEnv>();

fakerApi.use(initFaker);

fakerApi
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

const app = new Hono().route('/v1', fakerApi);

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

app.get(
  '/',
  apiReference({
    spec: {
      url: '/openapi',
    },
  }),
);

Deno.serve({
  port: env.PORT,
  hostname: env.HOST,
}, app.fetch);
