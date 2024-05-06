import * as React from 'react';
import { NextPage } from 'next';

import { OverlayLayout } from '~/layouts/overlay-layout';
import { createNextPage } from '~/lib/create-next-page';
import { useOnMount } from '~/lib/hooks/use-on-mount';
import { PrestreamIntermission } from '~/modules/pre-stream/pre-stream-intermission';

const StandaloneIntermissionPage: NextPage = () => {
  const [clockRendered, setClockRendered] = React.useState(false);

  useOnMount(() => {
    setClockRendered(true);
  });

  const renderCountdown = () => {
    if (clockRendered) {
      return (
        <PrestreamIntermission className="flex items-center space-x-1 text-[64px] leading-none text-chungking-white font-semibold tabular-nums helper-alternate-digits" />
      );
    }

    return null;
  };

  return <div className="flex items-center justify-center h-full w-full">{renderCountdown()}</div>;
};

export default createNextPage(StandaloneIntermissionPage, {
  layout: OverlayLayout,
});
