import { trpcReact } from '~/lib/trpc';
import { type GetUpcomingStreamsOptions } from '~/server/modules/notion/get-upcoming-streams/types';

export interface UseUpcomingStreamOptions extends GetUpcomingStreamsOptions {
  referenceDate: string | null;
  pageSize: number | null;
  refetchInterval?: number;
}

export function useCurrentStream(refetchInterval = 5000) {
  const { data, error } = trpcReact.notion.getCurrentStream.useQuery(undefined, {
    refetchInterval,
  });

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
  const { data, error } = trpcReact.notion.getUpcomingStreams.useQuery(
    { referenceDate, pageSize },
    { refetchInterval }
  );

  return {
    upcomingStreams: data,
    isLoading: !error && !data,
    isError: !!error,
  } as const;
}
