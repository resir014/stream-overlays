import * as React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { OverlayLayout } from '~/layouts/overlay-layout';
import { PreStreamContent } from '~/modules/pre-stream/pre-stream-content';
import { ChatPanel } from '~/modules/pre-stream/chat-panel';
import { SceneWrapper } from '~/modules/scenes/scene-wrapper';
import { createNextPage } from '~/lib/create-next-page';
import { NYEHeader } from '~/modules/nye/nye-header';
import { useOnMount } from '~/lib/hooks/use-on-mount';
import { NYEClockInterface } from '~/modules/nye/nye-clock-interface';
import { parseString } from '~/lib/query-parser';

const NYEClockScenePage: NextPage = () => {
  const router = useRouter();
  const [isClockRendered, setIsClockRendered] = React.useState(false);

  useOnMount(() => {
    setIsClockRendered(true);
  });

  const font = React.useMemo(
    () => parseString(router.query.fonts) ?? undefined,
    [router.query.fonts],
  );

  return (
    <SceneWrapper>
      <div className="flex flex-row items-end justify-between flex-1 w-full">
        <div className="flex flex-col flex-1 h-full justify-between">
          <NYEHeader />
          <PreStreamContent>
            <ChatPanel className="max-h-[504px]" />
            {isClockRendered && <NYEClockInterface fontFamily={font} />}
          </PreStreamContent>
        </div>
      </div>
    </SceneWrapper>
  );
};

export default createNextPage(NYEClockScenePage, {
  layout: OverlayLayout,
});
