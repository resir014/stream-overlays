import * as React from 'react';
import { NextPage } from 'next';

import { OverlayLayout } from '~/layouts/overlay-layout';
import { createNextPage } from '~/lib/create-next-page';
import { PreStreamDeepDipScene } from '~/modules/pre-stream/pre-stream-deep-dip';

const DeepDipBRBScenePage: NextPage = () => {
  return <PreStreamDeepDipScene headerText="Be right back." variant="brb" />;
};

export default createNextPage(DeepDipBRBScenePage, {
  layout: OverlayLayout,
});
