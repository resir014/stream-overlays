import * as React from 'react';
import { format } from 'date-fns';
import { PreStreamVariants } from '~/lib/pre-stream/types';
import { useClock } from '~/lib/hooks/use-clock';

export interface PrestreamClockProps extends React.ComponentPropsWithoutRef<'span'> {
  startH?: number;
  startM?: number;
  variant?: PreStreamVariants;
}

export const PrestreamClock = React.forwardRef<HTMLSpanElement, PrestreamClockProps>(
  ({ ...rest }, ref) => {
    const time = useClock();

    return (
      <span ref={ref} {...rest}>
        {format(time, 'HH:mm:ss')}
      </span>
    );
  },
);

PrestreamClock.displayName = 'PrestreamClock';
