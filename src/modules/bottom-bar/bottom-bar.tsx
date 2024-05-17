import { Suspense } from 'react';
import { BottomBarEvents } from './bottom-bar-events';
import { BottomBarClock } from './bottom-bar-clock';

function BottomBarClockFallback() {
  return (
    <div className="flex items-center justify-center w-[96px] h-[32px] bg-chungking-white rounded-full" />
  );
}

export function BottomBar() {
  return (
    <div className="grid grid-cols-bottom-bar w-full h-full text-chungking-white bg-chungking-black border-t-2 border-chungking-white max-h-[64px]">
      <BottomBarEvents />
      <div className="flex items-center justify-end px-12">
        <div className="flex items-center pl-4 text-right space-x-2">
          <Suspense fallback={<BottomBarClockFallback />}>
            <BottomBarClock />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
