import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import * as React from 'react';
import { OverlayLayout } from '~/layouts/overlay-layout';
import { createNextPage } from '~/lib/create-next-page';

const TimeSignalWrapper = dynamic(() => import('~/modules/time-signal/time-signal-wrapper'), {
  ssr: false,
});

const TimeSignalPage: NextPage = () => {
  return <TimeSignalWrapper cerveza />;
};

export default createNextPage(TimeSignalPage, {
  layout: OverlayLayout,
});
