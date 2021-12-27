import * as React from 'react';
import { format } from 'date-fns';
import { useRouter } from 'next/router';
import { ClockWatchTick } from './clock-watch-tick';
import { useClock } from '~/lib/hooks/use-clock';
import { parseString } from '~/lib/query-parser';

export default function NYEClock() {
  const router = useRouter();
  const time = useClock();
  const ticks: undefined[] = Array<undefined>(60).fill(undefined);
  const timeZoneOptions = new Intl.DateTimeFormat().resolvedOptions();

  const [, , s] = React.useMemo(
    () => [time.getHours(), time.getMinutes(), time.getSeconds()] as const,
    [time],
  );

  const watchFaceColor = React.useMemo(
    () => parseString(router.query.watchFaceColor) ?? undefined,
    [router.query.watchFaceColor],
  );

  return (
    <div className="inline-flex flex-col items-center space-y-8 rounded-xl bg-chungking-black px-4 py-8">
      <div className="inline-block relative w-[384px] h-[384px] rounded-full overflow-hidden">
        <div className="ticks relative w-full h-full" style={{ transform: `rotate(-90deg)` }}>
          {ticks.map((_, i) => {
            const second = i + 1;
            return (
              <ClockWatchTick
                key={i}
                currentSecond={second}
                hasFace={second % 5 === 0}
                active={s >= second}
                watchFaceColor={watchFaceColor}
              />
            );
          })}
        </div>
        <div className="absolute top-0 left-0 w-full h-full p-8">
          <div className="flex flex-col items-center justify-center w-full h-full rounded-full overflow-hidden">
            <div className="flex items-end flex-auto mb-4 text-center text-chungking-white">
              <div className="space-y-2">
                <p className="text-2xl leading-none font-bold">{format(time, 'EEEE')}</p>
                <p className="text-2xl leading-none">{format(time, 'dd MMMM yyyy')}</p>
              </div>
            </div>
            <div>
              <p className="text-8xl leading-none font-mono font-bold text-chungking-white">
                {format(time, 'HH:mm')}
              </p>
            </div>
            <div className="flex-auto mt-2">
              <p className="text-6xl leading-none font-mono font-bold text-chungking-white">
                {format(time, 'ss')}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center space-y-2 text-chungking-white">
        <p className="text-2xl leading-none font-bold">{timeZoneOptions.timeZone}</p>
      </div>
    </div>
  );
}
