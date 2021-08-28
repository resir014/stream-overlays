import { useRouter } from 'next/router';
import * as React from 'react';
import clsx from 'clsx';
import { PrestreamClock } from './pre-stream-clock';
import { parseStreamTimeQuery } from '~/lib/query-parser';
import usePrestreamClock from '~/lib/pre-stream/use-prestream-clock';

export function PreStreamHeader() {
  const router = useRouter();
  const { startH, startM } = React.useMemo(
    () => parseStreamTimeQuery(router.query),
    [router.query],
  );
  const { percentage } = usePrestreamClock(startH, startM);

  const progressBarColor = React.useMemo(
    () => (percentage >= 1 ? 'bg-chungking-green-500' : 'bg-chungking-blue-400'),
    [percentage],
  );

  return (
    <div className="flex flex-col space-y-2">
      <div className={clsx('h-[4px] bg-opacity-25 rounded-full overflow-hidden', progressBarColor)}>
        <div
          className={clsx('block h-[4px]', progressBarColor)}
          style={{ width: `${(percentage * 100).toFixed(1)}%` }}
        />
      </div>
      <PrestreamClock startH={startH} startM={startM} />
    </div>
  );
}
