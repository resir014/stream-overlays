import { Suspense } from 'react';
import { OverlayLayout } from '~/layouts/overlay-layout';
import { StudioClockInterface } from '~/modules/studio-clock/studio-clock-interface';

export default function StudioClockOBSSourcePage() {
  return (
    <OverlayLayout>
      <div className="flex w-full h-screen items-center justify-center bg-chungking-black">
        <Suspense>
          <div className="scale-50">
            <StudioClockInterface hideTimezone />
          </div>
        </Suspense>
      </div>
    </OverlayLayout>
  );
}
