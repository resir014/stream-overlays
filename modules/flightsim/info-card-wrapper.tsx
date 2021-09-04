import * as React from 'react';
import clsx from 'clsx';

export type InfoCardWrapperProps = React.ComponentPropsWithoutRef<'div'>;

export const InfoCardWrapper = React.forwardRef<HTMLDivElement, InfoCardWrapperProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <div ref={ref} className={clsx('flex flex-row p-2 space-x-2', className)} {...rest}>
        {children}
      </div>
    );
  },
);

InfoCardWrapper.displayName = 'InfoCardWrapperWrapper';
