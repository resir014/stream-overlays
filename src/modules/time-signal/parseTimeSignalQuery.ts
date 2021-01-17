import { ParsedUrlQuery } from 'querystring'
import { TimeSignalConfig } from './types'

function numberify(maybeString?: string | string[]) {
  if (maybeString) {
    if (Array.isArray(maybeString)) {
      const [num] = maybeString
      return Number(num)
    }

    return Number(maybeString)
  }

  return undefined
}

export default function parseTimeSignalQuery(query: ParsedUrlQuery): TimeSignalConfig {
  const { h, m } = query

  return {
    h: numberify(h) || 21,
    m: numberify(m) || 0
  }
}
