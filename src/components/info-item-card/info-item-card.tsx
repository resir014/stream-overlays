import clsx from 'clsx';
import * as React from 'react';

export interface InfoItemCardProps extends React.ComponentPropsWithoutRef<'section'> {
  title?: string;
  content: string;
}

export const InfoItemCard = React.forwardRef<HTMLElement, InfoItemCardProps>(
  ({ title, content, className, ...rest }, ref) => {
    return (
      <section
        ref={ref}
        className={clsx(
          'flex flex-row border-l-4 border-chungking-blue-500 bg-chungking-black bg-opacity-70 text-chungking-white text-base leading-none',
          'helper-kern helper-alternate-digits helper-disambiguation',
          className,
        )}
        {...rest}
      >
        {title ? (
          <span className="inline-flex items-center px-2 h-[30px] font-bold">{title}</span>
        ) : null}
        <span className="inline-flex items-center px-2 h-[30px] font-medium tabular-nums">
          {content}
        </span>
      </section>
    );
  },
);

InfoItemCard.displayName = 'InfoItemCard';
