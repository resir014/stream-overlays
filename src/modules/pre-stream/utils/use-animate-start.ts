import { useMemo } from 'react';
import { useClock } from '~/lib/hooks/use-clock';
import { useOverlayData } from '~/modules/overlay-data/use-overlay-data';
import { PreStreamVariants } from '../types';

export function useAnimateStart(variant: PreStreamVariants = 'pre-stream') {
  const time = useClock();
  const { overlayData } = useOverlayData();

  const streamStart = useMemo(
    () => (overlayData?.streamStart ? new Date(overlayData.streamStart) : undefined),
    [overlayData?.streamStart],
  );

  const isAnimationActive = useMemo(() => {
    if (variant !== 'pre-stream' && variant !== 'pre-stream-cerveza') {
      return false;
    }

    if (streamStart) {
      return time.toISOString() >= streamStart.toISOString();
    }

    return false;
  }, [streamStart, time, variant]);

  return isAnimationActive;
}
