import * as React from 'react';
import { OverlayLayout } from '~/layouts/overlay-layout';

export default function CaptureGuardBlock() {
  return (
    <OverlayLayout>
      <div className="flex flex-auto items-center justify-center bg-chungking-black border-4 border-chungking-green-500">
        <span className="inline-block max-w-[480px] text-4xl text-chungking-white font-semibold">
          if you&apos;re reading this then something bad happened
        </span>
      </div>
    </OverlayLayout>
  );
}
