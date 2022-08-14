import { GetUpcomingStreamsOptions } from '~/server/notion/get-upcoming-streams';
import { trpc } from '../trpc';

export interface UseUpcomingStreamOptions extends GetUpcomingStreamsOptions {
  referenceDate: string | null;
  pageSize: number | null;
  refetchInterval?: number;
}

export interface ParsedCurrentStream {
  id: string;
  date?: string;
  series?: string;
  category?: string[];
  description?: string;
  stream_name?: string;
}

export function useCurrentStream(refetchInterval = 5000) {
  const { data, error } = trpc.useQuery(['notion.current-stream'], { refetchInterval });

  return {
    currentStream: data,
    isLoading: !error && !data,
    isError: !!error,
  };
}

export function useUpcomingStreams({
  referenceDate = null,
  pageSize = null,
  refetchInterval = 5000,
}: UseUpcomingStreamOptions) {
  const { data, error } = trpc.useQuery(['notion.upcoming-streams', { referenceDate, pageSize }], {
    refetchInterval,
  });

  return {
    upcomingStreams: data,
    isLoading: !error && !data,
    isError: !!error,
  };
}
