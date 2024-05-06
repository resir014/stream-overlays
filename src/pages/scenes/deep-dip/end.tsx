import * as React from 'react';
import { NextPage } from 'next';

import { OverlayLayout } from '~/layouts/overlay-layout';
import { createNextPage } from '~/lib/create-next-page';
import { PreStreamDeepDipScene } from '~/modules/pre-stream/pre-stream-deep-dip';

const DeepDipEndScenePage: NextPage = () => {
  return <PreStreamDeepDipScene headerText="Thanks for watching!" variant="end" />;
};

export default createNextPage(DeepDipEndScenePage, {
  layout: OverlayLayout,
});
