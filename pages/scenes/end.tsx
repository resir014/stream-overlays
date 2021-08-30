import * as React from 'react';
import { NextPage } from 'next';

import { OverlayRoot, SceneWrapper } from '~/components/overlay';
import { PreStreamHeader } from '~/components/pre-stream/pre-stream-header';
import { useOnMount } from '~/lib/hooks/use-on-mount';
import { PreStreamSchedule } from '~/components/pre-stream/pre-stream-schedule';
import { PreStreamChatbox } from '~/components/pre-stream/pre-stream-chat-box';

const EndScenePage: NextPage = () => {
  const [isHeaderRendered, setIsHeaderRendered] = React.useState(false);

  useOnMount(() => {
    setIsHeaderRendered(true);
  });

  return (
    <OverlayRoot>
      <SceneWrapper>
        {isHeaderRendered ? <PreStreamHeader variant="end" /> : <div className="h-[48px]" />}
        <div className="flex flex-row items-end justify-between flex-1 pt-6 pb-12 w-full">
          <PreStreamSchedule header="Stream ended. Thanks for watching!" variant="end" />
          <PreStreamChatbox />
        </div>
      </SceneWrapper>
    </OverlayRoot>
  );
};

export default EndScenePage;
