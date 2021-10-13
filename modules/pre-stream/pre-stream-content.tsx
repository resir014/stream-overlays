import clsx from 'clsx';
import * as React from 'react';

export type PreStreamContentProps = React.ComponentPropsWithoutRef<'div'>;

export const PreStreamContent = React.forwardRef<HTMLDivElement, PreStreamContentProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(
          'flex flex-row items-center justify-between px-12 flex-1 space-x-12',
          className,
        )}
        {...rest}
      >
        {children}
      </div>
    );
  },
);

PreStreamContent.displayName = 'PreStreamContent';
