import { trpc } from '~/lib/trpc';
import { GetUpcomingStreamsOptions } from '~/server/modules/notion/get-upcoming-streams';

export interface UseUpcomingStreamOptions extends GetUpcomingStreamsOptions {
  referenceDate: string | null;
  pageSize: number | null;
  refetchInterval?: number;
}

export function useCurrentStream(refetchInterval = 5000) {
  const { data, error } = trpc.notion.getCurrentStream.useQuery(undefined, { refetchInterval });

  console.log(data);

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
  const { data, error } = trpc.notion.getUpcomingStreams.useQuery(
    { referenceDate, pageSize },
    { refetchInterval },
  );

  return {
    upcomingStreams: data,
    isLoading: !error && !data,
    isError: !!error,
  } as const;
}
