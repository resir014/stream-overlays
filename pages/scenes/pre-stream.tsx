import * as React from 'react';
import { NextPage } from 'next';

import { OverlayLayout } from '~/layouts/overlay-layout';
import { createNextPage } from '~/lib/create-next-page';
import { PreStreamScene } from '~/modules/pre-stream/pre-stream-scene';

const PrestreamScenePage: NextPage = () => {
  return <PreStreamScene headerText="Starting soon." variant="pre-stream" />;
};

export default createNextPage(PrestreamScenePage, {
  layout: OverlayLayout,
});
