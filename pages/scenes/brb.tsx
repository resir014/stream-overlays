import * as React from 'react';
import { NextPage } from 'next';

import { OverlayRoot } from '~/components/overlay';
import BeRightBackScene from '~/modules/prestream/BeRightBackScene';

const BeRightBackScenePage: NextPage = () => {
  return (
    <OverlayRoot>
      <BeRightBackScene />
    </OverlayRoot>
  );
};

export default BeRightBackScenePage;
