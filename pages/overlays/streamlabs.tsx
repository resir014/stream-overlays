import { NextPage } from 'next';
import * as React from 'react';
import { OverlayRoot } from '~/components/overlay';
import { StreamlabsAlerts } from '~/components/alerts-v2/streamlabs-alerts';

const AlertsOverlayPage: NextPage = () => {
  return (
    <OverlayRoot>
      <StreamlabsAlerts />
    </OverlayRoot>
  );
};

export default AlertsOverlayPage;
