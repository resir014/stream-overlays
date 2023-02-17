import * as React from 'react';
import { OverlayLayout } from '~/layouts/overlay-layout';
import { createNextPage } from '~/lib/create-next-page';
import { useOnMount } from '~/lib/hooks/use-on-mount';
import { StudioClockInterface } from '~/modules/studio-clock/studio-clock-interface';

function StudioClockOBSSourcePage() {
  const [isClockRendered, setIsClockRendered] = React.useState(false);

  useOnMount(() => {
    setIsClockRendered(true);
  });

  return (
    <div className="flex w-full h-screen items-center justify-center bg-chungking-black">
      {isClockRendered ? <StudioClockInterface hideTimezone /> : null}
    </div>
  );
}

export default createNextPage(StudioClockOBSSourcePage, {
  layout: OverlayLayout,
});
