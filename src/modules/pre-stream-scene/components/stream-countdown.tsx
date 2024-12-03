'use client';

import { format, addSeconds } from 'date-fns';
import { forwardRef, useMemo } from 'react';
import type { ComponentPropsWithoutRef } from 'react';
import type { PreStreamVariants } from '~/@pre-stream/shared/types';
import { clamp } from '~/lib/lerp';
import { usePrestreamClock } from '~/@pre-stream/shared/utils/use-prestream-clock';

export interface StreamCountdownProps extends ComponentPropsWithoutRef<'span'> {
  startH?: number;
  startM?: number;
  timeFormat?: string;
  variant?: PreStreamVariants;
}

export const StreamCountdown = forwardRef<HTMLSpanElement, StreamCountdownProps>(
  ({ timeFormat = 'mm:ss', ...rest }, ref) => {
    const { time, streamStart } = usePrestreamClock();

    const secondsToGo = useMemo(
      () =>
        clamp(
          Math.ceil(streamStart ? (streamStart.getTime() - time.getTime()) / 1000 : 0),
          0,
          1800,
        ),
      [time, streamStart],
    );

    const formattedDuration = useMemo(() => addSeconds(new Date(0), secondsToGo), [secondsToGo]);

    return (
      <span ref={ref} {...rest}>
        {format(formattedDuration, timeFormat)}
      </span>
    );
  },
);

StreamCountdown.displayName = 'StreamCountdown';
