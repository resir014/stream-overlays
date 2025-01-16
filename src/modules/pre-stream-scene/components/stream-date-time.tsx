'use client';

import { format } from 'date-fns';
import * as React from 'react';
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
  }
);

StreamDateTime.displayName = 'StreamDateTime';
