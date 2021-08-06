import * as React from 'react';

export const ItemCard = React.forwardRef<HTMLElement, React.HTMLProps<'section'>>(
  ({ children }, ref) => {
    return (
      <section
        ref={ref}
        className="flex flex-row border-l-4 border-chungking-black border-opacity-70 text-chungking-white text-base leading-none"
        style={{ fontFeatureSettings: "'kern' 1, 'ss01' 1, 'ss02' 1" }}
      >
        {children}
      </section>
    );
  },
);

ItemCard.displayName = 'ItemCard';

export const ItemTitle = React.forwardRef<HTMLSpanElement, React.HTMLProps<'span'>>(
  ({ children }, ref) => {
    return (
      <span ref={ref} className="inline-flex items-center px-2 h-[30px] font-bold">
        {children}
      </span>
    );
  },
);

ItemTitle.displayName = 'ItemTitle';

export const ItemContent = React.forwardRef<HTMLSpanElement, React.HTMLProps<'span'>>(
  ({ children }, ref) => {
    return (
      <span ref={ref} className="inline-flex items-center px-2 h-[30px] font-medium tabular-nums">
        {children}
      </span>
    );
  },
);

ItemContent.displayName = 'ItemContent';
