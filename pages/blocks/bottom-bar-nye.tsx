import { NextPage } from 'next';
import * as React from 'react';
import { OverlayLayout } from '~/layouts/overlay-layout';
import { createNextPage } from '~/lib/create-next-page';
import { BottomBar } from '~/modules/bottom-bar';

const BottomBarNYEPage: NextPage = () => {
  return <BottomBar variant="nye" />;
};

export default createNextPage(BottomBarNYEPage, {
  layout: OverlayLayout,
});
