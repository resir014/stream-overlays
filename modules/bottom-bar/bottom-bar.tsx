import * as React from 'react';
import { BottomBarSocialLinks } from './social-links';
import { BottomBarEvents } from './bottom-bar-events';
import { BottomBarClock } from './bottom-bar-clock';

export type BottomBarVariants = 'default' | 'prestream' | 'nye';

export interface BottomBarProps {
  variant?: BottomBarVariants;
}

export const BottomBar: React.FC<BottomBarProps> = ({ variant }) => {
  const hideClock = React.useMemo(() => variant === 'prestream', [variant]);
  const nyeVariant = React.useMemo(() => variant === 'nye', [variant]);

  return (
    <div className="grid grid-cols-bottom-bar w-full h-full text-chungking-white bg-chungking-black border-t-2 border-chungking-white bg-opacity-90 max-h-[64px]">
      <BottomBarEvents />
      <div className="flex items-center justify-end px-12">
        {hideClock || nyeVariant ? <BottomBarSocialLinks /> : <BottomBarClock />}
      </div>
    </div>
  );
};
