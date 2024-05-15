import * as React from 'react';

import { OverlayLayout } from '~/layouts/overlay-layout';
import { PreStreamDeepDipScene } from '~/modules/pre-stream/pre-stream-deep-dip';

export default function DeepDipPrestreamScenePage() {
  return (
    <OverlayLayout>
      <PreStreamDeepDipScene headerText="Starting soon." variant="pre-stream" />
    </OverlayLayout>
  );
}
