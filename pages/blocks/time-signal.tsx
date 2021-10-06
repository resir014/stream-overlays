import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import * as React from 'react';
import { OverlayRoot } from '~/components/overlay';
import { parseTimeSignalQuery } from '~/lib/query-parser';

const TimeSignalWrapper = dynamic(() => import('~/modules/time-signal/time-signal-wrapper'), {
  ssr: false,
});

const TimeSignalPage: NextPage = () => {
  const router = useRouter();

  const { h, m } = React.useMemo(() => parseTimeSignalQuery(router.query), [router.query]);

  return (
    <OverlayRoot>
      <TimeSignalWrapper startH={h} startM={m} />
    </OverlayRoot>
  );
};

export default TimeSignalPage;
