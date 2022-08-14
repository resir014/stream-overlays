import * as React from 'react';
import { clamp, lerpInverse } from '@resir014/lerp';
import { format } from 'date-fns';
import { useClock } from '~/lib/hooks/use-clock';
import { useCurrentStream } from './stream-schedule';

interface UsePrestreamClockResponse {
  time: Date;
  topOfTheHour?: Date;
  percentage: number;
}

function toTimeString(time: string | number) {
  return time.toString().padStart(2, '0');
}

const TEN_MINUTES_IN_MILLISECONDS = 60 * 10 * 1000;

export function usePrestreamClock(startH = 21, startM = 0): UsePrestreamClockResponse {
  const time = useClock();
  const { currentStream } = useCurrentStream();

  const topOfTheHour = React.useMemo(() => {
    if (currentStream?.date) {
      const [date, h, m, s] = [
        format(new Date(currentStream.date), 'yyyy-MM-dd'),
        toTimeString(startH),
        toTimeString(startM),
        toTimeString(0),
      ];

      return new Date(`${date}T${h}:${m}:${s}+07:00`);
    }

    return undefined;
  }, [currentStream, startH, startM]);

  const percentage = React.useMemo(() => {
    const timeStamp = time.getTime();
    const topFormatted = topOfTheHour?.getTime() ?? 0;
    const startFormatted = topOfTheHour ? topOfTheHour.getTime() - TEN_MINUTES_IN_MILLISECONDS : 0;

    return clamp(lerpInverse(timeStamp, startFormatted, topFormatted), 0, 1);
  }, [time, topOfTheHour]);

  return { time, topOfTheHour, percentage };
}
