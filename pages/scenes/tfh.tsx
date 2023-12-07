import * as React from 'react';
import { NextPage } from 'next';

import { OverlayLayout } from '~/layouts/overlay-layout';
import { createNextPage } from '~/lib/create-next-page';
import { TrackmaniaForHoursMainScene } from '~/modules/tfh/tfh-main-scene';

const TrackmaniaForHoursScenePage: NextPage = () => {
  return <TrackmaniaForHoursMainScene />;
};

export default createNextPage(TrackmaniaForHoursScenePage, {
  layout: OverlayLayout,
});
