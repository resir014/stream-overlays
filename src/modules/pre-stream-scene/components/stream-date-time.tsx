'use client';

import * as React from 'react';
import { format } from 'date-fns';
import { useClock } from '~/lib/hooks/use-clock';

export interface PrestreamDateProps extends React.ComponentPropsWithoutRef<'span'> {
  dateFormat?: string;
}

export const StreamDateTime = React.forwardRef<HTMLSpanElement, PrestreamDateProps>(
  ({ dateFormat = 'dd MMMM y', ...rest }, ref) => {
    const time = useClock();

    return (
      <span ref={ref} {...rest}>
        {format(time, dateFormat)}
      </span>
    );
  },
);

StreamDateTime.displayName = 'StreamDateTime';
