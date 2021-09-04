import * as React from 'react';
import { NextPage } from 'next';

import { OverlayRoot } from '~/components/overlay';

const FlightsimPIPPage: NextPage = () => {
  return (
    <OverlayRoot>
      <div className="flex-auto h-full max-h-[376px] bg-chungking-blue-500 bg-opacity-25 border-t-4 border-chungking-blue-500" />
    </OverlayRoot>
  );
};

export default FlightsimPIPPage;
