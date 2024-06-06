import { Suspense } from 'react';
import { OverlayLayout } from '~/layouts/overlay-layout';
import { PrestreamCountdown } from '~/modules/pre-stream/pre-stream-countdown';

export default function StandaloneCountdownPage() {
  return (
    <OverlayLayout>
      <div className="flex items-center justify-center h-full w-full">
        <Suspense>
          <PrestreamCountdown className="flex items-center space-x-1 text-[64px] leading-none text-chungking-white font-semibold tabular-nums helper-alternate-digits" />
        </Suspense>
      </div>
    </OverlayLayout>
  );
}
