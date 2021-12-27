import clsx from 'clsx';
import * as React from 'react';

export interface ClockWatchTickProps extends React.ComponentPropsWithoutRef<'div'> {
  currentSecond: number;
  active?: boolean;
  hasFace?: boolean;
  watchFaceColor?: string;
}

export const ClockWatchTick = React.forwardRef<HTMLDivElement, ClockWatchTickProps>(
  ({ className, style, active, currentSecond, hasFace, watchFaceColor = '#33ffd7' }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(
          'flex items-center justify-end absolute top-[172px] left-1/2 w-[180px] h-4',
          className,
        )}
        style={{
          transformOrigin: '0% 50%',
          transform: `rotate(${currentSecond * 6}deg)`,
          ...style,
        }}
      >
        <div
          className={clsx(
            'h-4 w-4 rounded-full',
            active || currentSecond === 60
              ? undefined
              : hasFace
              ? 'bg-chungking-white'
              : 'bg-chungking-white bg-opacity-20',
          )}
          style={{
            backgroundColor: active || currentSecond === 60 ? watchFaceColor : undefined,
          }}
        />
      </div>
    );
  },
);

ClockWatchTick.displayName = 'ClockWatchTick';
