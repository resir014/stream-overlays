import * as React from 'react';
import { format, addSeconds } from 'date-fns';
import { clamp } from '@resir014/lerp';
import { usePrestreamClock } from './utils/use-prestream-clock';

export type PrestreamIntermissionProps = React.ComponentPropsWithoutRef<'span'>;

export const PrestreamIntermission = React.forwardRef<HTMLSpanElement, PrestreamIntermissionProps>(
  ({ ...rest }, ref) => {
    const { time, breakReturnTime } = usePrestreamClock();

    const secondsToGo = React.useMemo(
      () =>
        clamp(
          Math.ceil(breakReturnTime ? (breakReturnTime.getTime() - time.getTime()) / 1000 : 0),
          0,
          1800,
        ),
      [time, breakReturnTime],
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

PrestreamIntermission.displayName = 'PrestreamIntermission';
