import Image from 'next/image';
import { Suspense } from 'react';
import { OverlayLayout } from '~/layouts/overlay-layout';
import { SceneWrapper } from '~/modules/scenes/scene-wrapper';
import { StudioClockInterface } from '~/modules/studio-clock/studio-clock-interface';

export default function StudioClockScenePage() {
  return (
    <OverlayLayout>
      <SceneWrapper transparent className="bg-chungking-black/90">
        <div className="grid grid-rows-scene-wrapper grid-cols-1 flex-1">
          <div className="flex flex-col items-center justify-center p-12 space-y-6">
            <Suspense>
              <div className="flex items-center justify-center w-[672px] h-[672px]">
                <StudioClockInterface hideTimezone transparent className="scale-150" />
              </div>
              <Image
                src="/static/resir014-logo-wordmark.png"
                width={369}
                height={114}
                alt="resir014 logo"
              />
            </Suspense>
          </div>
        </div>
      </SceneWrapper>
    </OverlayLayout>
  );
}
