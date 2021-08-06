import * as React from 'react';

export const OverlayRoot = React.forwardRef<HTMLDivElement, React.HTMLProps<'div'>>(
  ({ children }, ref) => (
    <div ref={ref} className="flex flex-col w-full h-screen bg-transparent overflow-hidden">
      {children}
    </div>
  ),
);

OverlayRoot.displayName = 'OverlayRoot';
