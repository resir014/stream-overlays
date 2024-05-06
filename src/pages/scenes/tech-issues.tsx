import * as React from 'react';
import { NextPage } from 'next';

import { OverlayLayout } from '~/layouts/overlay-layout';
import { createNextPage } from '~/lib/create-next-page';
import { PreStreamScene } from '~/modules/pre-stream/pre-stream-scene';

const TechIssuesPage: NextPage = () => {
  return <PreStreamScene headerText="Technical issues." variant="tech-issues" />;
};

export default createNextPage(TechIssuesPage, {
  layout: OverlayLayout,
});
