import clsx from 'clsx';
import { ComponentPropsWithoutRef, forwardRef } from 'react';

export const FlightProgress = forwardRef<HTMLProgressElement, ComponentPropsWithoutRef<'progress'>>(
  ({ className, ...rest }, ref) => {
    return <progress ref={ref} className={clsx('flight-progress', className)} {...rest} />;
  },
);

FlightProgress.displayName = 'FlightProgress';
