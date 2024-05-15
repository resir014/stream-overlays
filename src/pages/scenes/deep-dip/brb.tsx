import * as React from 'react';

import { OverlayLayout } from '~/layouts/overlay-layout';
import { PreStreamDeepDipScene } from '~/modules/pre-stream/pre-stream-deep-dip';

export default function DeepDipBRBScenePage() {
  return (
    <OverlayLayout>
      <PreStreamDeepDipScene headerText="Be right back." variant="brb" />
    </OverlayLayout>
  );
}
