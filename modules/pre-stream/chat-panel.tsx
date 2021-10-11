import clsx from 'clsx';
import * as React from 'react';

export type PreStreamChatPanelProps = React.ComponentPropsWithoutRef<'div'>;

export const PreStreamChatPanel = React.forwardRef<HTMLDivElement, PreStreamChatPanelProps>(
  ({ className, ...rest }, ref) => {
    return (
      <div ref={ref} className={clsx('px-12 flex-1', className)} {...rest}>
        <div className="w-full max-w-[496px] h-full rounded-lg bg-chungking-black bg-opacity-75" />
      </div>
    );
  },
);

PreStreamChatPanel.displayName = 'PreStreamChatPanel';
