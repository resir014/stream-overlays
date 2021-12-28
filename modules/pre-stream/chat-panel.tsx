import clsx from 'clsx';
import * as React from 'react';

export type ChatPanelProps = React.ComponentPropsWithoutRef<'div'>;

export const ChatPanel = React.forwardRef<HTMLDivElement, ChatPanelProps>(
  ({ className, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(
          'flex-none w-full max-w-[496px] h-full rounded-xl bg-chungking-black bg-opacity-75',
          className,
        )}
        {...rest}
      />
    );
  },
);

ChatPanel.displayName = 'ChatPanel';
