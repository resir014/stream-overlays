import { NextPage } from 'next';
import * as React from 'react';
import { OverlayRoot } from '~/components/overlay';
import { StreamElementsAlerts } from '~/modules/alerts/streamelements-alerts';

const AlertsOverlayPage: NextPage = () => {
  return (
    <OverlayRoot>
      <StreamElementsAlerts />
    </OverlayRoot>
  );
};

export default AlertsOverlayPage;
