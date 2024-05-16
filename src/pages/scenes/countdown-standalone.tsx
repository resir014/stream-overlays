import { useState } from 'react';
import { OverlayLayout } from '~/layouts/overlay-layout';
import { useOnMount } from '~/lib/hooks/use-on-mount';
import { PrestreamCountdown } from '~/modules/pre-stream/pre-stream-countdown';

export default function StandaloneCountdownPage() {
  const [clockRendered, setClockRendered] = useState(false);

  useOnMount(() => {
    setClockRendered(true);
  });

  const renderCountdown = () => {
    if (clockRendered) {
      return (
        <PrestreamCountdown className="flex items-center space-x-1 text-[64px] leading-none text-chungking-white font-semibold tabular-nums helper-alternate-digits" />
      );
    }

    return null;
  };

  return (
    <OverlayLayout>
      <div className="flex items-center justify-center h-full w-full">{renderCountdown()}</div>
    </OverlayLayout>
  );
}
