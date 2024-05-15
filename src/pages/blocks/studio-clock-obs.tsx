import * as React from 'react';
import { OverlayLayout } from '~/layouts/overlay-layout';
import { useOnMount } from '~/lib/hooks/use-on-mount';
import { StudioClockInterface } from '~/modules/studio-clock/studio-clock-interface';

export default function StudioClockOBSSourcePage() {
  const [isClockRendered, setIsClockRendered] = React.useState(false);

  useOnMount(() => {
    setIsClockRendered(true);
  });

  return (
    <OverlayLayout>
      <div className="flex w-full h-screen items-center justify-center bg-chungking-black">
        {isClockRendered ? (
          <div className="scale-50">
            <StudioClockInterface hideTimezone />
          </div>
        ) : null}
      </div>
    </OverlayLayout>
  );
}
