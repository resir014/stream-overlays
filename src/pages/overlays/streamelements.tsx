import * as React from 'react';
import dynamic from 'next/dynamic';
import { OverlayLayout } from '~/layouts/overlay-layout';
import { createNextPage } from '~/lib/create-next-page';

const StreamElementsAlerts = dynamic(
  () => import('~/modules/alerts/streamelements-alerts').then(mod => mod.StreamElementsAlerts),
  { ssr: false },
);

function StreamElementsOverlayPage() {
  return <StreamElementsAlerts />;
}

export default createNextPage(StreamElementsOverlayPage, {
  layout: OverlayLayout,
});
