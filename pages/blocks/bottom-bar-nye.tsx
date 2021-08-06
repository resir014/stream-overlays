import { NextPage } from 'next';
import * as React from 'react';
import { OverlayRoot } from '~/components/overlay';
import { BottomBar } from '~/components/blocks/bottom-bar';

const BottomBarNYEPage: NextPage = () => {
  return (
    <OverlayRoot>
      <BottomBar variant="nye" />
    </OverlayRoot>
  );
};

export default BottomBarNYEPage;
