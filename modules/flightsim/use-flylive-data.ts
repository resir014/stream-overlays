import { trpc } from '../../lib/trpc';

export function useFlyLiveData(refetchInterval = 1000 / 24) {
  const { data, error } = trpc.useQuery(['flylive.live-flight'], { refetchInterval });

  return {
    data,
    isLoading: !error && !data,
    isError: !!error,
  };
}
