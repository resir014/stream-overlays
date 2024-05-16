'use client';

import { format } from 'date-fns';
import clsx from 'clsx';
import { ComponentPropsWithoutRef, useEffect, useMemo } from 'react';
import { useClock } from '~/lib/hooks/use-clock';
import { ClockWatchTick } from './clock-watch-tick';

export interface StudioClockInterfaceProps extends ComponentPropsWithoutRef<'div'> {
  uiFont?: string;
  watchFaceFont?: string;
  watchFaceColor?: string;
  hideTimezone?: boolean;
  transparent?: boolean;
}

export function StudioClockInterface({
  className,
  style,
  uiFont = 'Inter',
  watchFaceFont = 'JetBrains Mono',
  watchFaceColor,
  hideTimezone,
  transparent,
  ...rest
}: StudioClockInterfaceProps) {
  const time = useClock();

  const ticks: undefined[] = Array<undefined>(60).fill(undefined);
  const timeZoneOptions = new Intl.DateTimeFormat().resolvedOptions();

  const [, , s] = useMemo(
    () => [time.getHours(), time.getMinutes(), time.getSeconds()] as const,
    [time],
  );

  console.log(time);

  const watchUIStyle = useMemo(
    () => ({
      fontFamily: `${uiFont}, system-ui, sans-serif`,
    }),
    [uiFont],
  );

  const watchFaceStyle = useMemo(
    () => ({
      fontFamily: `${watchFaceFont}, monospace`,
    }),
    [watchFaceFont],
  );

  useEffect(() => {
    if (typeof window !== 'undefined' && (uiFont || watchFaceFont)) {
      void import('webfontloader').then(mod => {
        mod.default.load({
          google: {
            families: [uiFont, watchFaceFont]
              .filter(Boolean)
              .map(font => `${font}:400,700,400italic,700italic`),
          },
        });
      });
    }
  }, [uiFont, watchFaceFont]);

  return (
    <div
      className={clsx(
        'inline-flex flex-col items-center space-y-8 rounded-xl px-4 py-8',
        transparent ? undefined : 'bg-chungking-black',
        className,
      )}
      style={style}
      {...rest}
    >
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
              <div className="space-y-2" style={watchUIStyle}>
                <p className="text-2xl leading-none font-bold">{format(time, 'EEEE')}</p>
                <p className="text-2xl leading-none">{format(time, 'dd MMMM yyyy')}</p>
              </div>
            </div>
            <div>
              <p
                className="text-8xl leading-none font-bold tabular-nums text-chungking-white"
                style={watchFaceStyle}
              >
                {format(time, 'HH:mm')}
              </p>
            </div>
            <div className="flex-auto mt-2">
              <p
                className="text-6xl leading-none font-bold tabular-nums text-chungking-white"
                style={watchFaceStyle}
              >
                {format(time, 'ss')}
              </p>
            </div>
          </div>
        </div>
      </div>
      {hideTimezone ? null : (
        <div className="text-center space-y-2 text-chungking-white" style={watchUIStyle}>
          <p className="text-2xl leading-none font-bold">{timeZoneOptions.timeZone}</p>
        </div>
      )}
    </div>
  );
}
