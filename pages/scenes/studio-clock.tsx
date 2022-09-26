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
      <div className="flex flex-col items-center justify-center p-12 space-y-6">
        {isClockRendered ? (
          <div className="flex items-center justify-center w-[672px] h-[672px]">
            <StudioClockInterface hideTimezone className="scale-150" />
          </div>
        ) : null}
        {isClockRendered ? (
          <div className="flex items-center justify-center space-x-4">
            <span className="text-[72px] leading-[84px] font-semibold text-chungking-white">
              resir014
            </span>
            <img src="/static/resir014-logo-light.svg" className="h-[114px]" alt="resir014 logo" />
          </div>
        ) : null}
      </div>
    </SceneWrapper>
  );
}

export default createNextPage(StudioClockScenePage, {
  layout: OverlayLayout,
});
