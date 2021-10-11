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

function getPrestreamAccentColor(variant: PreStreamVariants) {
  switch (variant) {
    case 'pre-stream': {
      return 'from-[rgba(26,36,156,0.75)] to-[rgba(36,136,245,0.75)]';
    }
    case 'brb': {
      return 'from-[rgba(0,57,134,0.75)] to-[rgba(31,199,145,0.75)]';
    }
    case 'end': {
      return 'from-[rgba(134,0,0,0.75)] to-[rgba(203,137,29,0.75)]';
    }
    default: {
      return 'from-[rgba(26,36,156,0.75)] to-[rgba(36,136,245,0.75)]';
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
      <div className="flex flex-row items-center flex-1 px-12 pt-12 pb-10 space-x-4">
        <div
          className={clsx(
            'block w-4 h-4 rounded-full bg-gradient-to-b',
            getPrestreamAccentColor(variant),
          )}
        />
        <div className="flex flex-row space-x-4 text-3xl leading-none text-chungking-white">
          <span className="inline-block font-semibold">{format(time, 'EEEE')}</span>
          <span className="inline-block">{format(time, 'dd MMMM yyyy')}</span>
        </div>
      </div>
    </div>
  );
}
