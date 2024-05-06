import * as React from 'react';
import clsx from 'clsx';

export const FlightProgress = React.forwardRef<
  HTMLProgressElement,
  React.ComponentPropsWithoutRef<'progress'>
>(({ className, ...rest }, ref) => {
  return <progress ref={ref} className={clsx('flight-progress', className)} {...rest} />;
});

FlightProgress.displayName = 'FlightProgress';
