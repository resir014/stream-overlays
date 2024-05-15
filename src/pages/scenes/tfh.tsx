import * as React from 'react';
import { OverlayLayout } from '~/layouts/overlay-layout';
import { TrackmaniaForHoursMainScene } from '~/modules/tfh/tfh-main-scene';

export default function TrackmaniaForHoursScenePage() {
  return (
    <OverlayLayout>
      <TrackmaniaForHoursMainScene />
    </OverlayLayout>
  );
}
