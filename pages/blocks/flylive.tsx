import * as React from 'react';
import { NextPage } from 'next';
import { OverlayRoot } from '~/components/overlay';
import FlyLiveStats from '~/modules/flightsim/flylive-stats';

const FlyLiveOverlayPage: NextPage = () => {
  return (
    <OverlayRoot>
      <FlyLiveStats />
    </OverlayRoot>
  );
};

export default FlyLiveOverlayPage;
