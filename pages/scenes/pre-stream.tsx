import * as React from 'react';
import { NextPage } from 'next';

import OverlayRoot from '~/components/overlay/OverlayRoot';
import PrestreamScene from '~/modules/prestream/PrestreamScene';

const PrestreamScenePage: NextPage = () => {
  return (
    <OverlayRoot>
      <PrestreamScene />
    </OverlayRoot>
  );
};

export default PrestreamScenePage;
