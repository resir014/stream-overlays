import { useRouter } from 'next/router';
import * as React from 'react';
import { format } from 'date-fns';
import { parseStreamTimeQuery } from '~/lib/query-parser';
import { usePrestreamClock } from '~/lib/pre-stream/use-prestream-clock';

export function PreStreamHeader() {
  const router = useRouter();
  const { startH, startM } = React.useMemo(
    () => parseStreamTimeQuery(router.query),
    [router.query],
  );
  const { time } = usePrestreamClock(startH, startM);

  return (
    <div className="flex flex-col flex-1 overflow-hidden space-y-2">
      <div className="px-12 pt-6 pb-4">
        <div className="flex flex-row space-x-4 text-3xl text-chungking-white">
          <span className="inline-block font-semibold">{format(time, 'EEEE')}</span>
          <span className="inline-block">{format(time, 'dd MMMM yyyy')}</span>
        </div>
      </div>
    </div>
  );
}
