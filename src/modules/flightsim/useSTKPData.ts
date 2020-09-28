import useSWR from 'swr'
import { STKPOverlayResponse } from '~/interfaces/simToolkitPro'
import { APIResponse } from '~/interfaces/types'
import fetch from '~/utils/fetch'

export default function useSTKPData(refreshInterval = 1000 / 24) {
  const { data, error } = useSWR<APIResponse<STKPOverlayResponse>>('/api/stkp', fetch, {
    refreshInterval
  })

  return {
    data: data?.status === 'ok' ? data.data : undefined,
    isLoading: !error && !data,
    isError: error
  }
}
