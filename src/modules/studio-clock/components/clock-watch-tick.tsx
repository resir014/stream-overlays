'use client';

import clsx from 'clsx';
import { type ComponentPropsWithoutRef, forwardRef, useMemo } from 'react';

import { resolveHexColor } from '~/lib/colors';

export interface ClockWatchTickProps extends ComponentPropsWithoutRef<'div'> {
  currentSecond: number;
  active?: boolean;
  hasFace?: boolean;
  watchFaceColor?: string;
}

export const ClockWatchTick = forwardRef<HTMLDivElement, ClockWatchTickProps>(
  ({ className, style, active, currentSecond, hasFace, watchFaceColor = '#33ffd7' }, ref) => {
    const hexColor = useMemo(() => resolveHexColor(watchFaceColor), [watchFaceColor]);

    const isActive = active ?? currentSecond === 60;

    return (
      <div
        ref={ref}
        className={clsx(
          'absolute left-1/2 top-[184px] flex h-4 w-[192px] items-center justify-end space-x-1.5',
          className
        )}
        style={{
          transformOrigin: '0% 50%',
          transform: `rotate(${currentSecond * 6}deg)`,
          ...style,
        }}
      >
        <div
          className={clsx(
            'h-3 w-3 rounded-full',
            isActive
              ? undefined
              : hasFace
                ? 'bg-chungking-white'
                : 'bg-chungking-white bg-opacity-20'
          )}
          style={{
            backgroundColor: isActive ? hexColor : undefined,
          }}
        />
        <div
          className="h-3 w-3 rounded-full bg-chungking-white"
          style={{
            backgroundColor: hasFace ? (isActive ? hexColor : undefined) : 'transparent',
          }}
        />
      </div>
    );
  }
);

ClockWatchTick.displayName = 'ClockWatchTick';
