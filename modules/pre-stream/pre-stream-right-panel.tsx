import clsx from 'clsx';
import * as React from 'react';

export type PreStreamRightPanelProps = React.ComponentPropsWithoutRef<'div'>;

export const PreStreamRightPanel = React.forwardRef<HTMLDivElement, PreStreamRightPanelProps>(
  ({ className, ...rest }, ref) => {
    return (
      <div className={clsx('flex-1 w-full max-w-[320px] h-full', className)} ref={ref} {...rest}>
        <div className="w-full h-full p-6 shadow-xl bg-chungking-black" />
      </div>
    );
  },
);

PreStreamRightPanel.displayName = 'PreStreamRightPanel';
