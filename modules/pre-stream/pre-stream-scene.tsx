import * as React from 'react';
import clsx from 'clsx';
import { PreStreamVariants } from '~/lib/pre-stream/types';
import { useOnMount } from '~/lib/hooks/use-on-mount';
import { useCurrentStream } from '~/lib/pre-stream/stream-schedule';
import { SceneWrapper } from '../scenes/scene-wrapper';
import { PreStreamTitles } from './pre-stream-titles';
import { PrestreamCountdown } from './pre-stream-countdown';
import { getPrestreamAccentColor } from './utils';
import { PrestreamDate } from './pre-stream-date';
import { SocialLinksRotator } from '../social-links';

export interface PreStreamSceneProps {
  headerText: string;
  variant?: PreStreamVariants;
}

export function PreStreamScene({ headerText, variant = 'pre-stream' }: PreStreamSceneProps) {
  const [clockRendered, setClockRendered] = React.useState(false);
  const { currentStream } = useCurrentStream();

  const accentColors = React.useMemo(() => getPrestreamAccentColor(variant), [variant]);

  useOnMount(() => {
    setClockRendered(true);
  });

  const renderCountdown = () => {
    if (clockRendered) {
      if (variant === 'pre-stream') {
        return (
          <div
            className={clsx(
              'flex items-center justify-center w-full max-w-[562px] h-full px-6',
              accentColors.bg,
            )}
          >
            <PrestreamCountdown className="flex items-center space-x-1 text-[128px] leading-none text-chungking-white font-bold tabular-nums helper-alternate-digits" />
          </div>
        );
      }

      return null;
    }

    return null;
  };

  const renderDateTime = () => {
    if (clockRendered) {
      return <PrestreamDate />;
    }

    return null;
  };

  const renderLinks = () => {
    if (clockRendered) {
      return <SocialLinksRotator />;
    }

    return null;
  };

  return (
    <SceneWrapper>
      <div className="flex p-12">
        <div
          className={clsx(
            'flex flex-row flex-1 w-full h-full overflow-hidden rounded-3xl bg-chungking-black/75 border-4',
            accentColors.border,
          )}
        >
          <div
            className={clsx('flex flex-col items-center justify-center w-[110px]', accentColors.bg)}
          >
            <div className="block w-10 h-10 rounded-full bg-chungking-white" />
          </div>
          <div className="flex items-center justify-center relative w-full h-full">
            <div className="flex-1 h-full">
              <PreStreamTitles
                header={headerText}
                description={
                  variant === 'tech-issues'
                    ? 'Please wait a moment!'
                    : currentStream?.stream_name ?? 'No description available.'
                }
              />
            </div>
            {renderCountdown()}
            <div className="flex items-center justify-between absolute bottom-8 w-full px-12">
              <div className="text-3xl font-bold text-chungking-white">{renderDateTime()}</div>
              <div className="text-3xl font-bold text-chungking-white">{renderLinks()}</div>
            </div>
          </div>
        </div>
      </div>
    </SceneWrapper>
  );
}
