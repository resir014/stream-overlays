import { Suspense } from 'react';
import { OverlayLayout } from '~/layouts/overlay-layout';
import { PrestreamIntermission } from '~/modules/pre-stream/pre-stream-intermission';

export default function StandaloneIntermissionPage() {
  return (
    <OverlayLayout>
      <div className="flex items-center justify-center h-full w-full">
        <Suspense>
          <PrestreamIntermission className="flex items-center space-x-1 text-[64px] leading-none text-chungking-white font-semibold tabular-nums helper-alternate-digits" />
        </Suspense>
      </div>
    </OverlayLayout>
  );
}
