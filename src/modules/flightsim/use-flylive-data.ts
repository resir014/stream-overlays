'use client';

import { trpc } from '~/lib/trpc';

export function useFlyLiveData(refetchInterval = 1000 / 24) {
  const { data, error } = trpc.flylive.getLiveFlight.useQuery(undefined, {
    refetchInterval,
  });

  return {
    data,
    isLoading: !error && !data,
    isError: !!error,
  };
}
