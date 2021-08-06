import * as React from 'react';
import clsx from 'clsx';
import BottomBarSocialLinks from './bottom-bar-social-links';
import { BottomBarEvents } from './bottom-bar-events';
import { BottomBarClock } from './bottom-bar-clock';

interface BottomBarProps {
  variant?: 'default' | 'prestream' | 'nye';
}

export const BottomBar: React.FC<BottomBarProps> = ({ variant }) => {
  const hideClock = React.useMemo(() => variant === 'prestream', [variant]);
  const nyeVariant = React.useMemo(() => variant === 'nye', [variant]);

  return (
    <div
      className={clsx(
        'grid grid-rows-bottom-bar grid-cols-bottom-bar w-full h-full text-chungking-white bg-chungking-black bg-opacity-90',
        hideClock ? 'max-h-[88px]' : 'max-h-[64px]',
      )}
    >
      <BottomBarEvents />
      <div className="flex items-center justify-end px-12">
        {hideClock || nyeVariant ? <BottomBarSocialLinks /> : <BottomBarClock />}
      </div>
      <div className="block col-span-2" />
    </div>
  );
};
