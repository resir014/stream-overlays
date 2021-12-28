import clsx from 'clsx';
import * as React from 'react';
import { getPrestreamAccentColor } from '../pre-stream/utils';

export type NYEHeaderProps = React.ComponentPropsWithoutRef<'div'>;

export const NYEHeader = React.forwardRef<HTMLDivElement, NYEHeaderProps>(
  ({ className, ...rest }, ref) => {
    return (
      <div ref={ref} className="flex flex-col" {...rest}>
        <div className="flex flex-row items-center justify-between flex-1 px-12 pt-12 space-x-6">
          <div className="flex flex-row items-center space-x-4 text-3xl leading-none text-chungking-white">
            <div className={clsx('block w-4 h-4 rounded-full', getPrestreamAccentColor('nye'))} />
            <span className="inline-block font-semibold">
              resir014 + co. wishes you a Happy 2022!
            </span>
          </div>
        </div>
      </div>
    );
  },
);

NYEHeader.displayName = 'NYEHeader';
