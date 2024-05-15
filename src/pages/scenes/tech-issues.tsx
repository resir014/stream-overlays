import * as React from 'react';
import { OverlayLayout } from '~/layouts/overlay-layout';
import { PreStreamScene } from '~/modules/pre-stream/pre-stream-scene';

export default function TechIssuesPage() {
  return (
    <OverlayLayout>
      <PreStreamScene headerText="Technical issues." variant="tech-issues" />
    </OverlayLayout>
  );
}
