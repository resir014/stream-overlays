import { ParsedUrlQuery } from 'querystring';
import numberify from '~/utils/numberify';

export default function parseStreamTimeQuery(query: ParsedUrlQuery) {
  const { startH, startM } = query;

  return {
    startH: numberify(startH) ?? 21,
    startM: numberify(startM) ?? 0,
  };
}
