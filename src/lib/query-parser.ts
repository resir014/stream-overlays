import { ParsedUrlQuery } from 'querystring';

/**
 * Converts a string-like value to a number.
 *
 * @param maybeString A string or an array of string
 */
export function parseNumber(maybeString?: string | string[]) {
  if (maybeString) {
    if (Array.isArray(maybeString)) {
      const [num] = maybeString;
      return Number(num);
    }

    return Number(maybeString);
  }

  return undefined;
}

/**
 * Converts a string-like value to pure string.
 *
 * @param maybeString A string or an array of string
 */
export function parseString(maybeString?: string | string[]) {
  if (maybeString) {
    if (Array.isArray(maybeString)) {
      const [string] = maybeString;
      return string;
    }

    return maybeString;
  }

  return undefined;
}

export function parseStreamTimeQuery(query: ParsedUrlQuery) {
  const { startH, startM } = query;

  return {
    startH: parseNumber(startH) ?? 21,
    startM: parseNumber(startM) ?? 0,
  };
}

export function parseTimeSignalQuery(query: ParsedUrlQuery) {
  const { h, m } = query;

  return {
    h: parseNumber(h) ?? 21,
    m: parseNumber(m) ?? 0,
  };
}
