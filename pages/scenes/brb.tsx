import * as React from 'react';
import { NextPage } from 'next';

import { OverlayLayout } from '~/layouts/overlay-layout';
import { createNextPage } from '~/lib/create-next-page';
import { PreStreamScene } from '~/modules/pre-stream/pre-stream-scene';

const BeRightBackScenePage: NextPage = () => {
  return <PreStreamScene headerText="Please stand by..." variant="brb" />;
};

export default createNextPage(BeRightBackScenePage, {
  layout: OverlayLayout,
});
