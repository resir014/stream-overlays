import dynamic from 'next/dynamic';
import * as React from 'react';
import { OverlayLayout } from '~/layouts/overlay-layout';
import { createNextPage } from '~/lib/create-next-page';

const NYEClock = dynamic(() => import('~/modules/nye/nye-clock'), {
  ssr: false,
});

function NYEClockPage() {
  return (
    <div>
      <NYEClock />
    </div>
  );
}

export default createNextPage(NYEClockPage, {
  layout: OverlayLayout,
});
