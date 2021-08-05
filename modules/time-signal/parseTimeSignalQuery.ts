import { ParsedUrlQuery } from 'querystring'
import numberify from '~/utils/numberify'
import { TimeSignalConfig } from './types'

export default function parseTimeSignalQuery(query: ParsedUrlQuery): TimeSignalConfig {
  const { h, m } = query

  return {
    h: numberify(h) || 21,
    m: numberify(m) || 0
  }
}
