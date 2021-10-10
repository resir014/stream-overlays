import * as React from 'react';
import { format, addSeconds } from 'date-fns';
import { useRouter } from 'next/router';
import { clamp } from '@resir014/lerp';
import { usePrestreamClock } from '~/lib/pre-stream/use-prestream-clock';
import { PreStreamVariants } from '~/lib/pre-stream/types';
import { parseStreamTimeQuery } from '~/lib/query-parser';

export interface PrestreamCountdownProps extends React.ComponentPropsWithoutRef<'span'> {
  startH?: number;
  startM?: number;
  variant?: PreStreamVariants;
}

export const PrestreamCountdown = React.forwardRef<HTMLSpanElement, PrestreamCountdownProps>(
  ({ ...rest }, ref) => {
    const router = useRouter();
    const { startH, startM } = React.useMemo(
      () => parseStreamTimeQuery(router.query),
      [router.query],
    );
    const { time, topOfTheHour } = usePrestreamClock(startH, startM);

    const secondsToGo = React.useMemo(
      () =>
        clamp(
          Math.ceil(topOfTheHour ? (topOfTheHour.getTime() - time.getTime()) / 1000 : 0),
          0,
          600,
        ),
      [time, topOfTheHour],
    );

    const formattedDuration = React.useMemo(
      () => addSeconds(new Date(0), secondsToGo),
      [secondsToGo],
    );

    return (
      <span ref={ref} {...rest}>
        {format(formattedDuration, 'mm:ss')}
      </span>
    );
  },
);

PrestreamCountdown.displayName = 'PrestreamCountdown';
