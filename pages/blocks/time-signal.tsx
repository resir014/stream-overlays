import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import * as React from 'react';
import { OverlayRoot } from '~/components/overlay';
import parseTimeSignalQuery from '~/modules/time-signal/parseTimeSignalQuery';

const TimeSignalWrapper = dynamic(() => import('~/modules/time-signal/TimeSignalWrapper'), {
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
