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

  return (
    <SceneWrapper>
      <div className="flex px-12 py-6">
        <div
          className={clsx(
            'flex flex-row flex-1 w-full h-full overflow-hidden rounded-3xl bg-chungking-black bg-opacity-25 border-4',
            accentColors.border,
          )}
        >
          <div
            className={clsx('flex flex-col items-center justify-center w-[72px]', accentColors.bg)}
          >
            <div className="flex items-center justify-center h-[72px]">
              <div className="block w-9 h-9 rounded-full bg-chungking-white" />
            </div>
          </div>
          <div className="flex items-center justify-center relative w-full h-full">
            <div className="flex-1 h-full">
              <PreStreamTitles
                header={headerText}
                description={
                  variant === 'tech-issues'
                    ? 'Please wait a moment!'
                    : currentStream?.description ?? 'No description available.'
                }
              />
            </div>
            {renderCountdown()}
            <div className="flex items-center justify-between absolute bottom-8 w-full px-12">
              <div className="text-3xl font-bold text-chungking-white">{renderDateTime()}</div>
              <div className="text-3xl font-bold text-chungking-white">twitch.tv/resir014</div>
            </div>
          </div>
        </div>
      </div>
    </SceneWrapper>
  );
}
