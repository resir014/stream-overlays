import * as React from 'react';
import { NextPage } from 'next';
import { transparentize } from 'polished';
import { Box, theme } from '@resir014/chungking-react';

import OverlayRoot from '~/components/overlay/OverlayRoot';

const FlightsimPIPPage: NextPage = () => {
  return (
    <OverlayRoot>
      <Box
        flex="1 1 auto"
        backgroundColor={transparentize(0.75, theme.colors.blue[500])}
        height="100%"
        maxHeight={376}
        borderTop="4px solid"
        borderTopColor="blue.500"
      />
    </OverlayRoot>
  );
};

export default FlightsimPIPPage;
