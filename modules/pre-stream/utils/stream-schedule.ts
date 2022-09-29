import { GetUpcomingStreamsOptions } from '~/server/notion/get-upcoming-streams';
import { trpc } from '~/lib/trpc';

export interface UseUpcomingStreamOptions extends GetUpcomingStreamsOptions {
  referenceDate: string | null;
  pageSize: number | null;
  refetchInterval?: number;
}

export function useCurrentStream(refetchInterval = 5000) {
  const { data, error } = trpc.useQuery(['notion.current-stream'], { refetchInterval });

  return {
    currentStream: data,
    isLoading: !error && !data,
    isError: !!error,
  } as const;
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
  } as const;
}
