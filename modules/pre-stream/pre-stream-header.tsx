import { useRouter } from 'next/router';
import * as React from 'react';
import { format } from 'date-fns';
import clsx from 'clsx';
import { getPrestreamAccentColor } from './utils';
import { parseStreamTimeQuery } from '~/lib/query-parser';
import { usePrestreamClock } from '~/lib/pre-stream/use-prestream-clock';
import { PreStreamVariants } from '~/lib/pre-stream/types';

export interface PreStreamHeaderProps {
  headerText?: string;
  variant?: PreStreamVariants;
}

export function PreStreamHeader({ headerText, variant = 'pre-stream' }: PreStreamHeaderProps) {
  const router = useRouter();
  const { startH, startM } = React.useMemo(
    () => parseStreamTimeQuery(router.query),
    [router.query],
  );
  const { time } = usePrestreamClock(startH, startM);

  return (
    <div className="flex flex-col overflow-hidden">
      <div className="flex flex-row items-center justify-between flex-1 px-12 pt-12 pb-10 space-x-6">
        <div className="flex flex-row items-center space-x-4">
          <div className={clsx('block w-4 h-4 rounded-full', getPrestreamAccentColor(variant))} />
          <div className="flex flex-row space-x-4 text-3xl leading-none text-chungking-white">
            <span className="inline-block font-semibold">{format(time, 'EEEE')}</span>
            <span className="inline-block">{format(time, 'dd MMMM yyyy')}</span>
          </div>
        </div>
        {headerText && (
          <div className="flex flex-row items-center space-x-4">
            <div className="flex flex-row space-x-4 text-3xl leading-none text-chungking-white">
              <span className="inline-block">{headerText}</span>
            </div>
            <div className={clsx('block w-4 h-4 rounded-full', getPrestreamAccentColor(variant))} />
          </div>
        )}
      </div>
    </div>
  );
}
