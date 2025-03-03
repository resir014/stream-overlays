'use client';

import { useMemo } from 'react';
import { type PreStreamVariants } from '~/@pre-stream/shared/types';
import { useClock } from '~/lib/hooks/use-clock';
import { useOverlayData } from '~/lib/trpc/notion';

export function useAnimateStart(variant: PreStreamVariants = 'pre-stream') {
  const time = useClock();
  const { overlayData } = useOverlayData();

  const streamStart = useMemo(
    () => (overlayData?.streamStart ? new Date(overlayData.streamStart) : undefined),
    [overlayData?.streamStart]
  );

  const isAnimationActive = useMemo(() => {
    if (variant !== 'pre-stream') {
      return false;
    }

    if (streamStart) {
      return time.toISOString() >= streamStart.toISOString();
    }

    return false;
  }, [streamStart, time, variant]);

  return isAnimationActive;
}
