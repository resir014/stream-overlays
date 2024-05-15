import * as React from 'react';
import { FlyLiveStats } from '~/modules/flightsim/flylive-stats';
import { OverlayLayout } from '~/layouts/overlay-layout';

export default function FlyLiveOverlayPage() {
  return (
    <OverlayLayout>
      <FlyLiveStats />
    </OverlayLayout>
  );
}
