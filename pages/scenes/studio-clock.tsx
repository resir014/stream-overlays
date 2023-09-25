import Image from 'next/image';
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
      <div className="grid grid-rows-scene-wrapper grid-cols-1 flex-1">
        <div className="flex flex-col items-center justify-center p-12 space-y-6">
          {isClockRendered ? (
            <div className="flex items-center justify-center w-[672px] h-[672px]">
              <StudioClockInterface hideTimezone className="scale-150" />
            </div>
          ) : null}
          {isClockRendered ? (
            <Image
              src="/static/resir014-logo-wordmark.png"
              width={369}
              height={114}
              alt="resir014 logo"
            />
          ) : null}
        </div>
      </div>
    </SceneWrapper>
  );
}

export default createNextPage(StudioClockScenePage, {
  layout: OverlayLayout,
});
