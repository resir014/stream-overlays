import clsx from 'clsx';
import * as React from 'react';

export type PreStreamChatboxProps = React.ComponentPropsWithoutRef<'div'>;

export const PreStreamChatbox = React.forwardRef<HTMLDivElement, PreStreamChatboxProps>(
  ({ className, ...rest }, ref) => {
    return (
      <div
        className={clsx('ml-12 flex-1 w-full max-w-[496px] h-full max-h-[720px]', className)}
        ref={ref}
        {...rest}
      >
        <div className="w-full h-full p-6 rounded-2xl shadow-xl bg-chungking-black bg-opacity-75" />
      </div>
    );
  },
);

PreStreamChatbox.displayName = 'PreStreamChatbox';
