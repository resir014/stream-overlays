import * as React from 'react';
import { OverlayLayout } from '~/layouts/overlay-layout';
import { createNextPage } from '~/lib/create-next-page';
import { StreamlabsAlerts } from '~/modules/alerts/streamlabs-alerts';

function AlertsOverlayPage() {
  return <StreamlabsAlerts />;
}

export default createNextPage(AlertsOverlayPage, {
  layout: OverlayLayout,
});
