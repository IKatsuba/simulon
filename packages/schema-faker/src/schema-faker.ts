import { faker } from '@faker-js/faker';
// @ts-types="npm:@types/json-schema"
import type { JSONSchema7 } from 'json-schema';

export function schemaFaker(schema: JSONSchema7): unknown {
  // enum
  if (Array.isArray(schema.enum)) {
    return randomItem(schema.enum);
  }

  // oneOf
  if (Array.isArray(schema.oneOf)) {
    const randomSchema = randomItem(schema.oneOf);
    return schemaFaker(randomSchema as JSONSchema7);
  }

  // anyOf
  if (Array.isArray(schema.anyOf)) {
    const randomSchema = randomItem(schema.anyOf);
    return schemaFaker(randomSchema as JSONSchema7);
  }

  // allOf
  if (Array.isArray(schema.allOf)) {
    const mergedSchema = mergeAllSchemas(
      schema.allOf.filter((c) => typeof c !== 'boolean'),
    );
    return schemaFaker(mergedSchema);
  }

  const type = Array.isArray(schema.type) ? schema.type[0] : schema.type;

  switch (type) {
    case 'string':
      return generateString(schema);
    case 'number':
    case 'integer':
      return generateNumber(schema, type);
    case 'boolean':
      return faker.datatype.boolean();
    case 'object':
      return generateObject(schema);
    case 'array':
      return generateArray(schema);
    default:
      return null;
  }
}

function generateString(schema: JSONSchema7): string {
  if (schema.format) {
    switch (schema.format) {
      case 'email':
      case 'idn-email':
        return faker.internet.email();
      case 'uri':
      case 'url':
      case 'uri-reference':
      case 'uri-template':
      case 'iri':
      case 'iri-reference':
        return faker.internet.url();
      case 'date-time':
      case 'datetime':
        return faker.date.past().toISOString();
      case 'date':
        return faker.date.past().toISOString().split('T')[0];
      case 'time':
        return faker.date.past().toISOString().split('T')[1];
      case 'ipv4':
        return faker.internet.ip();
      case 'ipv6':
        return faker.internet.ipv6();
      case 'regex':
        return faker.string.alphanumeric(5);
      case 'hostname':
      case 'idn-hostname':
        return faker.internet.domainName();
      case 'uuid':
        return faker.string.uuid();
      case 'slug':
        return faker.lorem.slug();
      case 'json-pointer':
        return faker.system.directoryPath();
    }
  }

  let text = faker.lorem.words(3);

  const minLength = typeof schema.minLength === 'number' ? schema.minLength : 0;
  const maxLength = typeof schema.maxLength === 'number'
    ? schema.maxLength
    : undefined;

  if (text.length < minLength) {
    text = text.padEnd(minLength, 'x');
  }
  if (maxLength && text.length > maxLength) {
    text = text.substring(0, maxLength);
  }

  return text;
}

function generateNumber(
  schema: JSONSchema7,
  type: 'number' | 'integer',
): number {
  const min = typeof schema.minimum === 'number' ? schema.minimum : 0;
  const max = typeof schema.maximum === 'number' ? schema.maximum : 1000;

  if (type === 'integer') {
    return faker.number.int({ min, max });
  } else {
    return faker.number.float({ min, max });
  }
}

function generateObject(schema: JSONSchema7): Record<string, unknown> {
  const result: Record<string, unknown> = {};

  const properties = schema.properties || {};
  const required = Array.isArray(schema.required) ? schema.required : [];

  for (const [key, propSchema] of Object.entries(properties)) {
    const isRequired = required.includes(key);
    if (!isRequired && Math.random() < 0.3) {
      continue;
    }
    result[key] = schemaFaker(propSchema as JSONSchema7);
  }

  return result;
}

function generateArray(schema: JSONSchema7): unknown[] {
  const itemsSchema = schema.items
    ? (Array.isArray(schema.items) ? schema.items[0] : schema.items)
    : {};

  const minItems = typeof schema.minItems === 'number' ? schema.minItems : 1;
  const maxItems = typeof schema.maxItems === 'number' ? schema.maxItems : 5;
  const length = faker.number.int({ min: minItems, max: maxItems });

  const arr: unknown[] = [];
  for (let i = 0; i < length; i++) {
    arr.push(schemaFaker(itemsSchema as JSONSchema7));
  }
  return arr;
}

function randomItem<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function mergeAllSchemas(schemas: JSONSchema7[]): JSONSchema7 {
  return schemas.reduce((acc, s) => {
    if (typeof s === 'boolean') {
      return acc;
    }

    if (s.properties) {
      acc.properties = {
        ...acc.properties,
        ...s.properties,
      };
    }
    if (s.required) {
      acc.required = [...(acc.required || []), ...s.required];
    }
    if (s.type) {
      if (!acc.type) {
        acc.type = s.type;
      }
    }
    return acc;
  }, {} as JSONSchema7);
}
