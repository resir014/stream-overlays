import { useState } from 'react';
import { OverlayLayout } from '~/layouts/overlay-layout';
import { useOnMount } from '~/lib/hooks/use-on-mount';
import { PrestreamIntermission } from '~/modules/pre-stream/pre-stream-intermission';

export default function StandaloneIntermissionPage() {
  const [clockRendered, setClockRendered] = useState(false);

  useOnMount(() => {
    setClockRendered(true);
  });

  const renderCountdown = () => {
    if (clockRendered) {
      return (
        <PrestreamIntermission className="flex items-center space-x-1 text-[64px] leading-none text-chungking-white font-semibold tabular-nums helper-alternate-digits" />
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
