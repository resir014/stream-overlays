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

  const timeSignalConfig = React.useMemo(() => parseTimeSignalQuery(router.query), [router.query]);

  return (
    <OverlayRoot>
      <TimeSignalWrapper {...timeSignalConfig} />
    </OverlayRoot>
  );
};

export default TimeSignalPage;
