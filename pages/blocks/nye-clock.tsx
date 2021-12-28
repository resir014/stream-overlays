import * as React from 'react';
import { OverlayLayout } from '~/layouts/overlay-layout';
import { createNextPage } from '~/lib/create-next-page';
import { useOnMount } from '~/lib/hooks/use-on-mount';
import { NYEClockInterface } from '~/modules/nye/nye-clock-interface';

function NYEClockPage() {
  const [isClockRendered, setIsClockRendered] = React.useState(false);

  useOnMount(() => {
    setIsClockRendered(true);
  });

  return <div>{isClockRendered && <NYEClockInterface />}</div>;
}

export default createNextPage(NYEClockPage, {
  layout: OverlayLayout,
});
