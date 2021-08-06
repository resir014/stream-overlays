import { NextPage } from 'next';
import * as React from 'react';
import OverlayRoot from '~/components/overlay/OverlayRoot';
import BottomBar from '~/modules/bottom-bar/BottomBar';

const BottomBarNYEPage: NextPage = () => {
  return (
    <OverlayRoot>
      <BottomBar variant="nye" />
    </OverlayRoot>
  );
};

export default BottomBarNYEPage;
