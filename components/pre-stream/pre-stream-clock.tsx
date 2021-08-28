import * as React from 'react';
import { format } from 'date-fns';
import usePrestreamClock from '~/lib/pre-stream/use-prestream-clock';

export interface PrestreamClockProps extends React.ComponentPropsWithoutRef<'div'> {
  startH?: number;
  startM?: number;
}

export const PrestreamClock = React.forwardRef<HTMLDivElement, PrestreamClockProps>(
  ({ startH, startM, ...rest }, ref) => {
    const { time } = usePrestreamClock(startH, startM);

    return (
      <div
        ref={ref}
        className="flex flex-row items-center justify-between space-x-12 h-[48px]"
        {...rest}
      >
        <div className="flex flex-row space-x-4">
          <span className="inline-block text-3xl text-chungking-white font-medium">
            {format(time, 'EEEE')}
          </span>
          <span className="inline-block text-3xl text-chungking-blue-300">
            {format(time, 'dd MMMM yyyy')}
          </span>
        </div>
        <span className="text-3xl text-chungking-white font-bold tabular-nums helper-alternate-digits">
          {format(time, 'HH:mm:ss')}
        </span>
      </div>
    );
  },
);

PrestreamClock.displayName = 'PrestreamClock';
