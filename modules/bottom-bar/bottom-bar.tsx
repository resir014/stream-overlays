import * as React from 'react';
import { BottomBarEvents } from './bottom-bar-events';
import { BottomBarClock } from './bottom-bar-clock';

export function BottomBar() {
  return (
    <div className="grid grid-cols-bottom-bar w-full h-full text-chungking-white bg-chungking-black border-t-2 border-chungking-white max-h-[64px]">
      <BottomBarEvents />
      <div className="flex items-center justify-end px-12">
        <BottomBarClock />
      </div>
    </div>
  );
}
