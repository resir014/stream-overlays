import * as React from 'react';
import { NextPage } from 'next';

import { OverlayLayout } from '~/layouts/overlay-layout';
import { PreStreamHeader } from '~/modules/pre-stream/pre-stream-header';
import { PreStreamContent } from '~/modules/pre-stream/pre-stream-content';
import { CurrentStreamBlock } from '~/modules/pre-stream/current-stream-block';
import { UpcomingStreamsBlock } from '~/modules/pre-stream/upcoming-streams-block';
import { ChatPanel } from '~/modules/pre-stream/chat-panel';
import { SceneWrapper } from '~/modules/scenes/scene-wrapper';
import { createNextPage } from '~/lib/create-next-page';

const BeRightBackScenePage: NextPage = () => {
  return (
    <SceneWrapper>
      <div className="flex flex-row items-end justify-between flex-1 w-full">
        <div className="flex flex-col flex-1 h-full justify-between">
          <PreStreamHeader headerText="Please stand by..." variant="brb" />
          <PreStreamContent>
            <ChatPanel />
            <UpcomingStreamsBlock variant="brb" />
          </PreStreamContent>
          <CurrentStreamBlock variant="brb" />
        </div>
      </div>
    </SceneWrapper>
  );
};

export default createNextPage(BeRightBackScenePage, {
  layout: OverlayLayout,
});
