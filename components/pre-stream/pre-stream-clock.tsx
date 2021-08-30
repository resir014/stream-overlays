import * as React from 'react';
import { format } from 'date-fns';
import clsx from 'clsx';
import { usePrestreamClock } from '~/lib/pre-stream/use-prestream-clock';
import { PreStreamVariants } from '~/lib/pre-stream/types';

export interface PrestreamClockProps extends React.ComponentPropsWithoutRef<'div'> {
  startH?: number;
  startM?: number;
  variant?: PreStreamVariants;
}

function getProgressColor(variant: PreStreamVariants) {
  switch (variant) {
    case 'pre-stream': {
      return 'text-chungking-blue-300';
    }
    case 'brb': {
      return 'text-chungking-purple-300';
    }
    case 'end': {
      return 'text-chungking-orange-300';
    }
    default: {
      return 'text-chungking-blue-300';
    }
  }
}

export const PrestreamClock = React.forwardRef<HTMLDivElement, PrestreamClockProps>(
  ({ startH, startM, variant = 'pre-stream', ...rest }, ref) => {
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
          <span className={clsx('inline-block text-3xl', getProgressColor(variant))}>
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
