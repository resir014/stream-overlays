import { useRouter } from 'next/router';
import * as React from 'react';
import clsx from 'clsx';
import { PrestreamClock } from './pre-stream-clock';
import { parseStreamTimeQuery } from '~/lib/query-parser';
import { usePrestreamClock } from '~/lib/pre-stream/use-prestream-clock';
import { PreStreamVariants } from '~/lib/pre-stream/types';

export interface PreStreamHeaderProps {
  variant?: PreStreamVariants;
}

function getProgressBackgroundColor(variant: PreStreamVariants) {
  switch (variant) {
    case 'pre-stream': {
      return 'bg-chungking-blue-300';
    }
    case 'brb': {
      return 'bg-chungking-green-300';
    }
    case 'end': {
      return 'bg-chungking-orange-300';
    }
    default: {
      return 'bg-chungking-blue-300';
    }
  }
}

export function PreStreamHeader({ variant = 'pre-stream' }: PreStreamHeaderProps) {
  const router = useRouter();
  const { startH, startM } = React.useMemo(
    () => parseStreamTimeQuery(router.query),
    [router.query],
  );
  const { percentage } = usePrestreamClock(startH, startM);

  const progressBarColor = React.useMemo(
    () => (percentage >= 1 ? 'bg-chungking-green-500' : getProgressBackgroundColor(variant)),
    [percentage, variant],
  );

  return (
    <div className="flex flex-col overflow-hidden space-y-2">
      <div className={clsx('h-2 bg-opacity-25 rounded-full overflow-hidden', progressBarColor)}>
        <div
          className={clsx('block h-2', progressBarColor)}
          style={{ width: `${(percentage * 100).toFixed(1)}%` }}
        />
      </div>
      <PrestreamClock variant={variant} startH={startH} startM={startM} />
    </div>
  );
}
