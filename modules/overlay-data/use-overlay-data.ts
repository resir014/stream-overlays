import { trpc } from '~/lib/trpc';

export function useOverlayData(refetchInterval = 5000) {
  const { data, error } = trpc.useQuery(['notion.overlay-data'], { refetchInterval });

  return {
    overlayData: data,
    isLoading: !error && !data,
    isError: !!error,
  } as const;
}
