import * as React from 'react';
import { NextPage } from 'next';

import { OverlayLayout } from '~/layouts/overlay-layout';
import { createNextPage } from '~/lib/create-next-page';
import { PreStreamDeepDipScene } from '~/modules/pre-stream/pre-stream-deep-dip';

const DeepDipPreStreamScenePage: NextPage = () => {
  return <PreStreamDeepDipScene headerText="Starting soon." variant="pre-stream" />;
};

export default createNextPage(DeepDipPreStreamScenePage, {
  layout: OverlayLayout,
});
