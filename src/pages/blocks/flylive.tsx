import * as React from 'react';
import { NextPage } from 'next';
import { FlyLiveStats } from '~/modules/flightsim/flylive-stats';
import { createNextPage } from '~/lib/create-next-page';
import { OverlayLayout } from '~/layouts/overlay-layout';

const FlyLiveOverlayPage: NextPage = () => {
  return <FlyLiveStats />;
};

export default createNextPage(FlyLiveOverlayPage, {
  layout: OverlayLayout,
});
