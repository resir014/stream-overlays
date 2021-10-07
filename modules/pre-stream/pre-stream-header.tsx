import { useRouter } from 'next/router';
import * as React from 'react';
import { format } from 'date-fns';
import clsx from 'clsx';
import { parseStreamTimeQuery } from '~/lib/query-parser';
import { usePrestreamClock } from '~/lib/pre-stream/use-prestream-clock';
import { PreStreamVariants } from '~/lib/pre-stream/types';

export interface PreStreamHeaderProps {
  variant?: PreStreamVariants;
}

function getProgressBackgroundColor(variant: PreStreamVariants) {
  switch (variant) {
    case 'pre-stream': {
      return 'bg-chungking-blue-500';
    }
    case 'brb': {
      return 'bg-chungking-green-500';
    }
    case 'end': {
      return 'bg-chungking-orange-500';
    }
    default: {
      return 'bg-chungking-blue-500';
    }
  }
}

export function PreStreamHeader({ variant = 'pre-stream' }: PreStreamHeaderProps) {
  const router = useRouter();
  const { startH, startM } = React.useMemo(
    () => parseStreamTimeQuery(router.query),
    [router.query],
  );
  const { time } = usePrestreamClock(startH, startM);

  return (
    <div className="flex flex-col overflow-hidden">
      <div className="flex flex-row flex-1 px-12 pt-12 pb-10 space-x-4">
        <div
          className={clsx('block w-1 h-full rounded-full', getProgressBackgroundColor(variant))}
        />
        <div className="flex flex-row space-x-4 text-3xl leading-none text-chungking-white">
          <span className="inline-block font-semibold">{format(time, 'EEEE')}</span>
          <span className="inline-block">{format(time, 'dd MMMM yyyy')}</span>
        </div>
      </div>
    </div>
  );
}
