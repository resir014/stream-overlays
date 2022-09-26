import * as React from 'react';
import { OverlayLayout } from '~/layouts/overlay-layout';
import { createNextPage } from '~/lib/create-next-page';
import { useOnMount } from '~/lib/hooks/use-on-mount';
import { SceneWrapper } from '~/modules/scenes/scene-wrapper';
import { StudioClockInterface } from '~/modules/studio-clock/studio-clock-interface';

function StudioClockScenePage() {
  const [isClockRendered, setIsClockRendered] = React.useState(false);

  useOnMount(() => {
    setIsClockRendered(true);
  });

  return (
    <SceneWrapper darkBackground>
      <div className="flex items-center justify-center p-12">
        {isClockRendered ? <StudioClockInterface hideTimezone className="scale-150" /> : null}
      </div>
    </SceneWrapper>
  );
}

export default createNextPage(StudioClockScenePage, {
  layout: OverlayLayout,
});
