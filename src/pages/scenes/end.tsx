import { OverlayLayout } from '~/layouts/overlay-layout';
import { PreStreamScene } from '~/modules/pre-stream/pre-stream-scene';

export default function EndScenePage() {
  return (
    <OverlayLayout>
      <PreStreamScene headerText="Thanks for watching!" variant="end" />
    </OverlayLayout>
  );
}
