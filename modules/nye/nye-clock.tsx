import * as React from 'react';
import { format } from 'date-fns';
import { ClockWatchTick } from './clock-watch-tick';
import { useClock } from '~/lib/hooks/use-clock';

export default function NYEClock() {
  const time = useClock();
  const ticks: undefined[] = Array<undefined>(60).fill(undefined);
  const timeZoneOptions = new Intl.DateTimeFormat().resolvedOptions();

  const [, , s] = React.useMemo(
    () => [time.getHours(), time.getMinutes(), time.getSeconds()] as const,
    [time],
  );

  return (
    <div className="inline-flex flex-col items-center space-y-8 rounded-xl bg-chungking-black px-6 py-12">
      <div className="inline-block relative w-[360px] h-[360px] rounded-full overflow-hidden">
        <div className="ticks relative w-full h-full" style={{ transform: `rotate(-90deg)` }}>
          {ticks.map((_, i) => {
            const second = i + 1;
            return (
              <ClockWatchTick
                key={i}
                currentSecond={second}
                hasFace={second % 5 === 0}
                active={s >= second}
              />
            );
          })}
        </div>
        <div className="absolute top-0 left-0 w-full h-full p-4">
          <div className="flex items-center justify-center w-full h-full bg-chungking-black rounded-full overflow-hidden">
            <div className="space-y-2 text-center text-chungking-white">
              <div className="flex items-center justify-center h-[60px]">
                <div className="space-y-2">
                  <p className="text-xl leading-none font-bold">{format(time, 'EEEE')}</p>
                  <p className="text-xl leading-none">{format(time, 'dd MMMM yyyy')}</p>
                </div>
              </div>
              <p className="text-8xl leading-none font-mono font-bold">{format(time, 'HH:mm')}</p>
              <p className="text-6xl leading-none font-mono font-bold">{format(time, 'ss')}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center space-y-2">
        <p className="text-2xl leading-none font-bold text-chungking-white">
          {timeZoneOptions.timeZone}
        </p>
      </div>
    </div>
  );
}
