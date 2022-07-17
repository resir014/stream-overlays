import * as React from 'react';
import dynamic from 'next/dynamic';

const KominfuCountdown = dynamic(() => import('~/modules/kominfu/kominfu-countdown'), {
  ssr: false,
});

export default function KominfuCountdownScene() {
  return (
    <div className="flex flex-col flex-1 items-center justify-end w-full h-full min-h-screen relative py-16 px-8">
      <KominfuCountdown />
    </div>
  );
}
