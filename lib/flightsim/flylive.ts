import useSWR from 'swr';
import { FlyLiveParsedData } from './types';
import { APIResponse, fetch } from '~/lib/fetch';

export function useFlyLiveData(refreshInterval = 1000 / 24) {
  const { data, error } = useSWR<APIResponse<FlyLiveParsedData>>('/api/flylive', fetch, {
    refreshInterval,
  });

  return {
    data: data?.status === 'ok' ? data.data : undefined,
    isLoading: !error && !data,
    isError: error,
  };
}
