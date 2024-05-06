import * as React from 'react';
import { NextPage } from 'next';

import { OverlayLayout } from '~/layouts/overlay-layout';
import { createNextPage } from '~/lib/create-next-page';
import { PreStreamScene } from '~/modules/pre-stream/pre-stream-scene';

const EndScenePage: NextPage = () => {
  return <PreStreamScene headerText="Thanks for watching!" variant="end" />;
};

export default createNextPage(EndScenePage, {
  layout: OverlayLayout,
});
