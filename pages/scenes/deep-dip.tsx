import * as React from 'react';
import { NextPage } from 'next';

import { OverlayLayout } from '~/layouts/overlay-layout';
import { createNextPage } from '~/lib/create-next-page';
import { PreStreamDeepDipScene } from '~/modules/pre-stream/pre-stream-deep-dip';

const DeepDipBRBScenePage: NextPage = () => {
  return <PreStreamDeepDipScene />;
};

export default createNextPage(DeepDipBRBScenePage, {
  layout: OverlayLayout,
});
