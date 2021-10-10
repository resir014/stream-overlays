import useSWR from 'swr';

import { APIResponse, ErrorBuilder, fetch } from '../fetch';

export interface ParsedCurrentStream {
  id: string;
  date?: string;
  series?: string;
  category?: string[];
  description?: string;
  stream_name?: string;
}

export function useCurrentStream(refreshInterval = 5000) {
  const { data, error } = useSWR<APIResponse<ParsedCurrentStream>, ErrorBuilder>(
    '/api/notion/current-stream',
    fetch,
    {
      refreshInterval,
    },
  );

  return {
    currentStream: data?.status === 'ok' && !error ? data.data : undefined,
    isLoading: !error && !data,
    isError: !!error,
  };
}
