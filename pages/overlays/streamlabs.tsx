import { NextPage } from 'next';
import * as React from 'react';
import { OverlayRoot } from '~/components/overlay';
import { StreamlabsAlerts } from '~/modules/alerts/streamlabs-alerts';

const AlertsOverlayPage: NextPage = () => {
  return (
    <OverlayRoot>
      <StreamlabsAlerts />
    </OverlayRoot>
  );
};

export default AlertsOverlayPage;
