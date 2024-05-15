import dynamic from 'next/dynamic';
import * as React from 'react';
import { OverlayLayout } from '~/layouts/overlay-layout';

const TimeSignalWrapper = dynamic(() => import('~/modules/time-signal/time-signal-wrapper'), {
  ssr: false,
});

export default function TimeSignalPage() {
  return (
    <OverlayLayout>
      <TimeSignalWrapper />
    </OverlayLayout>
  );
}
