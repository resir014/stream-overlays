import { ParsedUrlQuery } from 'querystring';
import { TimeSignalConfig } from './types';
import numberify from '~/utils/numberify';

export default function parseTimeSignalQuery(query: ParsedUrlQuery): TimeSignalConfig {
  const { h, m } = query;

  return {
    h: numberify(h) ?? 21,
    m: numberify(m) ?? 0,
  };
}
