import { createMiddleware } from 'hono/factory';
import { allLocales, base, en, Faker } from '@faker-js/faker';
import { HonoEnv } from '@simulon/env';

function parseLangHeader(header: string): string[] {
  if (!header) {
    return ['en'];
  }

  const configs = header.split(',').map((config) => {
    const [lang, q] = config.trim().split(';q=');

    return {
      lang: lang.trim().replace('-', '_'),
      q: q ? parseFloat(q) : 1,
    };
  }).sort((a, b) => b.q - a.q);

  return configs.map((config) => config.lang);
}

export const initFaker = createMiddleware<HonoEnv>(async (ctx, next) => {
  const langHeader = ctx.req.header('Accept-Language');

  const languages = parseLangHeader(langHeader ?? '');

  const locales = ((languages.filter((lang) =>
    lang in allLocales
  )) as (keyof typeof allLocales)[]).map((lang) =>
    allLocales[lang]
  );

  ctx.set(
    'faker',
    new Faker({
      locale: [...locales, en, base],
    }),
  );

  await next();
});
