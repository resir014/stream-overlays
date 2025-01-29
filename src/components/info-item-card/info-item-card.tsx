import clsx from 'clsx';
import { forwardRef, type ComponentPropsWithoutRef } from 'react';

export interface InfoItemCardProps extends ComponentPropsWithoutRef<'section'> {
  title?: string;
  content: string;
}

export const InfoItemCard = forwardRef<HTMLElement, InfoItemCardProps>(
  ({ title, content, className, ...rest }, ref) => {
    return (
      <section
        ref={ref}
        className={clsx(
          'flex flex-row border-l-4 border-chungking-blue-500 bg-chungking-black bg-opacity-70 text-base leading-none text-chungking-white',
          'helper-kern helper-alternate-digits helper-disambiguation',
          className
        )}
        {...rest}
      >
        {title ? (
          <span className="inline-flex h-[30px] items-center px-2 font-bold">{title}</span>
        ) : null}
        <span className="inline-flex h-[30px] items-center px-2 font-medium tabular-nums">
          {content}
        </span>
      </section>
    );
  }
);

InfoItemCard.displayName = 'InfoItemCard';
