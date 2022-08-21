import * as React from 'react';
import { format } from 'date-fns';
import { useClock } from '~/lib/hooks/use-clock';

export const PrestreamDate = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<'span'>
>(({ ...rest }, ref) => {
  const time = useClock();

  return (
    <span ref={ref} {...rest}>
      {format(time, 'dd MMMM y')}
    </span>
  );
});

PrestreamDate.displayName = 'PrestreamDate';
