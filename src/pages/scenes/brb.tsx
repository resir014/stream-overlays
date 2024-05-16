import { OverlayLayout } from '~/layouts/overlay-layout';
import { PreStreamScene } from '~/modules/pre-stream/pre-stream-scene';

export default function BeRightBackScenePage() {
  return (
    <OverlayLayout>
      <PreStreamScene headerText="Be right back." variant="brb" />
    </OverlayLayout>
  );
}
