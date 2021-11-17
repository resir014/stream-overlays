import * as React from 'react';
import { OverlayLayout } from '~/layouts/overlay-layout';
import { createNextPage } from '~/lib/create-next-page';
import { StreamElementsAlerts } from '~/modules/alerts/streamelements-alerts';

function StreamElementsOverlayPage() {
  return <StreamElementsAlerts />;
}

export default createNextPage(StreamElementsOverlayPage, {
  layout: OverlayLayout,
});
