import * as React from 'react';
import { NextPage } from 'next';

import { OverlayLayout } from '~/layouts/overlay-layout';
import { PreStreamContent } from '~/modules/pre-stream/pre-stream-content';
import { PreStreamHeader } from '~/modules/pre-stream/pre-stream-header';
import { CurrentStreamBlock } from '~/modules/pre-stream/current-stream-block';
import { UpcomingStreamsBlock } from '~/modules/pre-stream/upcoming-streams-block';
import { ChatPanel } from '~/modules/pre-stream/chat-panel';
import { SceneWrapper } from '~/modules/scenes/scene-wrapper';
import { createNextPage } from '~/lib/create-next-page';

const PrestreamScenePage: NextPage = () => {
  return (
    <SceneWrapper>
      <div className="flex flex-row items-end justify-between flex-1 w-full">
        <div className="flex flex-col flex-1 h-full justify-between">
          <PreStreamHeader headerText="Stream starting soon." variant="pre-stream" />
          <PreStreamContent>
            <ChatPanel />
            <UpcomingStreamsBlock variant="pre-stream" />
          </PreStreamContent>
          <CurrentStreamBlock variant="pre-stream" />
        </div>
      </div>
    </SceneWrapper>
  );
};

export default createNextPage(PrestreamScenePage, {
  layout: OverlayLayout,
});
