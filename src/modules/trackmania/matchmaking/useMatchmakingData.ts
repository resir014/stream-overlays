/* eslint-disable camelcase */
import { stringifyUrl } from 'query-string'
import * as React from 'react'
import useSWR from 'swr'
import fetch from '~/utils/fetch'

interface APIResult {
  player: string
  rank: number
  score: number
}

interface APIResponse {
  matchmaking_id: number
  cardinal: number
  results: APIResult[]
}

interface UseMatchmakingDataOptions {
  apiUrl: string
  refreshInterval?: number
}

export default function useMatchmakingData(
  uid: string | string[],
  { apiUrl, refreshInterval = 60000 }: UseMatchmakingDataOptions
) {
  const url = React.useMemo(() => {
    if (apiUrl) {
      return stringifyUrl({
        url: apiUrl,
        query: {
          'players[]': uid
        }
      })
    }

    return null
  }, [uid])

  const { data, error } = useSWR<APIResponse>(() => url, fetch, { refreshInterval })

  return {
    results: data?.matchmaking_id === 2 ? data.results : undefined,
    isLoading: !error && !data,
    isError: error
  }
}
