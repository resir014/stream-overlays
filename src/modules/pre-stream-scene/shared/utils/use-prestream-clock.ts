import { clamp, lerpInverse } from '@resir014/lerp';
import { format } from 'date-fns';
import { useMemo } from 'react';
import { useClock } from '~/lib/hooks/use-clock';
import { useOverlayData } from '~/lib/trpc/notion';

function toTimeString(time: string | number) {
  return time.toString().padStart(2, '0');
}

const TEN_MINUTES_IN_MILLISECONDS = 60 * 10 * 1000;

export function usePrestreamClock() {
  const time = useClock();
  const { overlayData } = useOverlayData();

  const streamStart = useMemo(() => {
    if (overlayData?.streamStart) {
      const startdate = new Date(overlayData.streamStart);

      const [date, h, m, s] = [
        format(startdate, 'yyyy-MM-dd'),
        toTimeString(startdate.getHours()),
        toTimeString(startdate.getMinutes()),
        toTimeString(startdate.getSeconds()),
      ];

      return new Date(`${date}T${h}:${m}:${s}+07:00`);
    }

    return undefined;
  }, [overlayData?.streamStart]);

  const breakReturnTime = useMemo(() => {
    if (overlayData?.breakReturnTime) {
      const startdate = new Date(overlayData.breakReturnTime);

      const [date, h, m, s] = [
        format(startdate, 'yyyy-MM-dd'),
        toTimeString(startdate.getHours()),
        toTimeString(startdate.getMinutes()),
        toTimeString(startdate.getSeconds()),
      ];

      return new Date(`${date}T${h}:${m}:${s}+07:00`);
    }

    return undefined;
  }, [overlayData?.breakReturnTime]);

  const percentage = useMemo(() => {
    const timeStamp = time.getTime();
    const topFormatted = streamStart?.getTime() ?? 0;
    const startFormatted = streamStart ? streamStart.getTime() - TEN_MINUTES_IN_MILLISECONDS : 0;

    return clamp(lerpInverse(timeStamp, startFormatted, topFormatted), 0, 1);
  }, [time, streamStart]);

  return { time, streamStart, breakReturnTime, percentage } as const;
}
