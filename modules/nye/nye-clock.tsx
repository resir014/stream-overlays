import { format } from 'date-fns';
import * as React from 'react';
import { useClock } from '~/lib/hooks/use-clock';

export default function NYEClock() {
  const time = useClock();

  return (
    <div className="inline-block w-full max-w-[480px] p-1 bg-gradient-to-br from-chungking-blue-400 to-chungking-green-400 rounded-xl">
      <div className="flex flex-col items-center justify-between h-full bg-chungking-white dark:bg-chungking-grey-900 rounded-lg p-4 space-y-2">
        <div className="space-y-2 text-center bg-clip-text bg-gradient-to-br from-chungking-blue-400 to-chungking-green-400">
          <p className="text-xl leading-none font-bold text-transparent">
            {format(time, 'EEEE, dd MMMM yyyy')}
          </p>
          <p className="text-5xl leading-none font-bold text-transparent tabular-nums">
            {format(time, 'HH:mm:ss')}
          </p>
        </div>
        <p className="text-lg leading-none text-chungking-white">Jakarta, Indonesia</p>
      </div>
    </div>
  );
}
