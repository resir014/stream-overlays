import { OverlayLayout } from '~/layouts/overlay-layout';
import { PreStreamDeepDipScene } from '~/modules/pre-stream/pre-stream-deep-dip';

export default function DeepDipEndScenePage() {
  return (
    <OverlayLayout>
      <PreStreamDeepDipScene headerText="Thanks for watching!" variant="end" />
    </OverlayLayout>
  );
}
