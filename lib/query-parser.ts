import { ParsedUrlQuery } from 'querystring';
import { numberify } from '~/lib/numberify';

export function parseStreamTimeQuery(query: ParsedUrlQuery) {
  const { startH, startM } = query;

  return {
    startH: numberify(startH) ?? 21,
    startM: numberify(startM) ?? 0,
  };
}

export function parseTimeSignalQuery(query: ParsedUrlQuery) {
  const { h, m } = query;

  return {
    h: numberify(h) ?? 21,
    m: numberify(m) ?? 0,
  };
}
