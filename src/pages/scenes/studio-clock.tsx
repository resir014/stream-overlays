import Image from 'next/image';
import { useState } from 'react';
import { OverlayLayout } from '~/layouts/overlay-layout';
import { useOnMount } from '~/lib/hooks/use-on-mount';
import { SceneWrapper } from '~/modules/scenes/scene-wrapper';
import { StudioClockInterface } from '~/modules/studio-clock/studio-clock-interface';

export default function StudioClockScenePage() {
  const [isClockRendered, setIsClockRendered] = useState(false);

  useOnMount(() => {
    setIsClockRendered(true);
  });

  return (
    <OverlayLayout>
      <SceneWrapper transparent className="bg-chungking-black/90">
        <div className="grid grid-rows-scene-wrapper grid-cols-1 flex-1">
          <div className="flex flex-col items-center justify-center p-12 space-y-6">
            {isClockRendered ? (
              <div className="flex items-center justify-center w-[672px] h-[672px]">
                <StudioClockInterface hideTimezone transparent className="scale-150" />
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
    </OverlayLayout>
  );
}
