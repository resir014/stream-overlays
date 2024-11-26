'use client';

import { trpcReact } from '~/lib/trpc';

export function useOverlayData(refetchInterval = 5000) {
  const { data, error } = trpcReact.notion.getOverlayData.useQuery(undefined, { refetchInterval });

  return {
    overlayData: data,
    isLoading: !error && !data,
    isError: !!error,
  } as const;
}
