import * as React from 'react';
import { format } from 'date-fns';
import Image from 'next/image';
import { usePrestreamClock } from '~/lib/pre-stream/use-prestream-clock';
import { PreStreamVariants } from '~/lib/pre-stream/types';

export interface PrestreamClockProps extends React.ComponentPropsWithoutRef<'div'> {
  startH?: number;
  startM?: number;
  variant?: PreStreamVariants;
}

export const PrestreamClock = React.forwardRef<HTMLDivElement, PrestreamClockProps>(
  ({ startH, startM, ...rest }, ref) => {
    const { time } = usePrestreamClock(startH, startM);

    return (
      <div
        ref={ref}
        className="flex flex-row items-center justify-between space-x-12 h-12"
        {...rest}
      >
        <div className="flex flex-row space-x-12">
          <div className="flex flex-row space-x-4">
            <span className="inline-block text-3xl text-chungking-white font-semibold">
              {format(time, 'EEEE')}
            </span>
            <span className="inline-block text-3xl text-chungking-white">
              {format(time, 'dd MMMM yyyy')}
            </span>
          </div>
          <span className="flex items-center space-x-1 text-3xl text-chungking-white font-bold tabular-nums helper-alternate-digits">
            <span className="inline-flex justify-center">{format(time, 'HH')}</span>
            <span className="inline-flex justify-center w-2">:</span>
            <span className="inline-flex justify-center">{format(time, 'mm')}</span>
            <span className="inline-flex justify-center w-2">:</span>
            <span className="inline-flex justify-center">{format(time, 'ss')}</span>
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="inline-block text-3xl text-chungking-white font-bold">resir014</span>
          <div className="flex items-center">
            <Image src="/static/resir014-logo-light.svg" width={23} height={40} />
          </div>
        </div>
      </div>
    );
  },
);

PrestreamClock.displayName = 'PrestreamClock';
