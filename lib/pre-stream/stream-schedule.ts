import useSWR from 'swr';
import qs from 'query-string';

import { APIResponse, ErrorBuilder, fetch } from '../fetch';

export interface UseUpcomingStreamOptions {
  referenceDate?: string;
  pageSize?: number;
  refreshInterval?: number;
}

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

export function useUpcomingStreams({
  referenceDate,
  pageSize,
  refreshInterval = 5000,
}: UseUpcomingStreamOptions = {}) {
  const { data, error } = useSWR<APIResponse<ParsedCurrentStream[]>, ErrorBuilder>(
    () =>
      qs.stringifyUrl({
        url: '/api/notion/upcoming',
        query: {
          reference_date: referenceDate,
          page_size: pageSize,
        },
      }),
    fetch,
    {
      refreshInterval,
    },
  );

  return {
    upcomingStreams: data?.status === 'ok' && !error ? data.data : undefined,
    isLoading: !error && !data,
    isError: !!error,
  };
}
