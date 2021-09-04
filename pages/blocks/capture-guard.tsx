import * as React from 'react';
import { NextPage } from 'next';
import { OverlayRoot } from '~/components/overlay';

const CaptureGuardBlock: NextPage = () => {
  return (
    <OverlayRoot>
      <div className="flex flex-auto items-center justify-center bg-chungking-black border-4 border-chungking-green-500">
        <span className="inline-block max-w-[480px] text-4xl text-chungking-white font-semibold">
          if you&apos;re reading this then something bad happened
        </span>
      </div>
    </OverlayRoot>
  );
};

export default CaptureGuardBlock;
