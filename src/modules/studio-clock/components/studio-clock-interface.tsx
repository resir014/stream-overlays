'use client';

import clsx from 'clsx';
import { format } from 'date-fns';
import { type ComponentPropsWithoutRef, useEffect, useMemo } from 'react';
import { ClockWatchTick } from './clock-watch-tick';
import { useClock } from '~/lib/hooks/use-clock';

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
  uiFont = 'Inter Variable',
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
    [time]
  );

  const watchUIStyle = useMemo(
    () => ({
      fontFamily: `${uiFont}, system-ui, sans-serif`,
    }),
    [uiFont]
  );

  const watchFaceStyle = useMemo(
    () => ({
      fontFamily: `${watchFaceFont}, monospace`,
    }),
    [watchFaceFont]
  );

  useEffect(() => {
    if (typeof window !== 'undefined' && (uiFont || watchFaceFont)) {
      void import('webfontloader').then((mod) => {
        mod.default.load({
          google: {
            families: [uiFont, watchFaceFont]
              .filter(Boolean)
              .map((font) => `${font}:400,700,400italic,700italic`),
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
        className
      )}
      style={style}
      {...rest}
    >
      <div className="relative inline-block h-[384px] w-[384px] overflow-hidden rounded-full">
        <div className="ticks relative h-full w-full" style={{ transform: `rotate(-90deg)` }}>
          {ticks.map((_, second) => (
            <ClockWatchTick
              key={second}
              currentSecond={second}
              hasFace={second % 5 === 0}
              active={s >= second}
              watchFaceColor={watchFaceColor}
            />
          ))}
        </div>
        <div className="absolute left-0 top-0 h-full w-full p-8">
          <div className="flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-full">
            <div className="mb-4 flex flex-auto items-end text-center text-chungking-white">
              <div className="space-y-2" style={watchUIStyle}>
                <p className="text-2xl font-bold leading-none">{format(time, 'EEEE')}</p>
                <p className="text-2xl leading-none">{format(time, 'dd MMMM yyyy')}</p>
              </div>
            </div>
            <div>
              <p
                className="text-8xl font-bold tabular-nums leading-none text-chungking-white"
                style={watchFaceStyle}
              >
                {format(time, 'HH:mm')}
              </p>
            </div>
            <div className="mt-2 flex-auto">
              <p
                className="text-6xl font-bold tabular-nums leading-none text-chungking-white"
                style={watchFaceStyle}
              >
                {format(time, 'ss')}
              </p>
            </div>
          </div>
        </div>
      </div>
      {hideTimezone ? null : (
        <div className="space-y-2 text-center text-chungking-white" style={watchUIStyle}>
          <p className="text-2xl font-bold leading-none">{timeZoneOptions.timeZone}</p>
        </div>
      )}
    </div>
  );
}
