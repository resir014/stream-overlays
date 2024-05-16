import clsx from 'clsx';
import { ComponentPropsWithoutRef, forwardRef } from 'react';

export type InfoCardWrapperProps = ComponentPropsWithoutRef<'div'>;

export const InfoCardWrapper = forwardRef<HTMLDivElement, InfoCardWrapperProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <div ref={ref} className={clsx('flex flex-row p-2 space-x-2', className)} {...rest}>
        {children}
      </div>
    );
  },
);

InfoCardWrapper.displayName = 'InfoCardWrapperWrapper';
