'use client';

import { trpc } from '~/lib/trpc';

export function useGlobalLeaderboard(refetchInterval = 30000) {
  const { data, error } = trpc.deepDip.getGlobalLeaderboard.useQuery(undefined, {
    refetchInterval,
  });

  return {
    leaderboard: data,
    isLoading: !error && !data,
    isError: !!error,
  } as const;
}

export function useCurrentProgress(refetchInterval = 30000) {
  const { data, error } = trpc.deepDip.getCurrentProgress.useQuery(undefined, {
    refetchInterval,
  });

  return {
    progress: data,
    isLoading: !error && !data,
    isError: !!error,
  } as const;
}
