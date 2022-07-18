import * as React from 'react';
import dynamic from 'next/dynamic';

const KominfuCountdown = dynamic(() => import('~/modules/kominfu/kominfu-countdown-full'), {
  ssr: false,
});

export default function KominfuCountdownScene() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center w-full h-full min-h-screen relative py-16 px-8 bg-chungking-black">
      <KominfuCountdown />
    </div>
  );
}
