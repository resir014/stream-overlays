import useSWR from 'swr';
import { FlyLiveParsedData } from '~/interfaces/flylive';
import { APIResponse } from '~/interfaces/types';
import fetch from '~/utils/fetch';

export default function useFlyLiveData(refreshInterval = 1000 / 24) {
  const { data, error } = useSWR<APIResponse<FlyLiveParsedData>>('/api/flylive', fetch, {
    refreshInterval,
  });

  return {
    data: data?.status === 'ok' ? data.data : undefined,
    isLoading: !error && !data,
    isError: error,
  };
}
