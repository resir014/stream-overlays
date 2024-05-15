import * as React from 'react';

import { OverlayLayout } from '~/layouts/overlay-layout';
import { PreStreamScene } from '~/modules/pre-stream/pre-stream-scene';

export default function PrestreamScenePage() {
  return (
    <OverlayLayout>
      <PreStreamScene headerText="Starting soon." variant="pre-stream-cerveza" />
    </OverlayLayout>
  );
}
