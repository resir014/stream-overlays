import { NextPage } from 'next';
import * as React from 'react';
import { OverlayRoot } from '~/components/overlay';
import { BottomBar } from '~/modules/bottom-bar';

const BottomBarPage: NextPage = () => {
  return (
    <OverlayRoot>
      <BottomBar />
    </OverlayRoot>
  );
};

export default BottomBarPage;
