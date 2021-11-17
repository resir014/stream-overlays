import { NextPage } from 'next';
import * as React from 'react';
import { OverlayLayout } from '~/layouts/overlay-layout';
import { createNextPage } from '~/lib/create-next-page';
import { BottomBar } from '~/modules/bottom-bar';

const BottomBarPage: NextPage = () => {
  return <BottomBar />;
};

export default createNextPage(BottomBarPage, {
  layout: OverlayLayout,
});
