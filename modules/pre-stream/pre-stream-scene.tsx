import * as React from 'react';
import clsx from 'clsx';
import { SceneWrapper } from '../scenes/scene-wrapper';
import { StudioClockInterface } from '../studio-clock/studio-clock-interface';
import { CurrentStreamBlock } from './current-stream-block';
import { PrestreamCountdown } from './pre-stream-countdown';
import { getPrestreamAccentColor } from './utils';
import { PreStreamVariants } from '~/lib/pre-stream/types';
import { useOnMount } from '~/lib/hooks/use-on-mount';

export interface PreStreamSceneProps {
  headerText: string;
  variant?: PreStreamVariants;
}

export function PreStreamScene({ headerText, variant = 'pre-stream' }: PreStreamSceneProps) {
  const [clockRendered, setClockRendered] = React.useState(false);

  useOnMount(() => {
    setClockRendered(true);
  });

  const renderCountdown = () => {
    if (clockRendered) {
      if (variant === 'pre-stream') {
        return (
          <PrestreamCountdown className="flex items-center space-x-1 text-7xl leading-none text-chungking-white font-bold tabular-nums helper-alternate-digits" />
        );
      }

      return null;
    }

    return null;
  };

  const renderStudioClock = () => {
    if (clockRendered) {
      return <StudioClockInterface className="transform scale-75" />;
    }

    return null;
  };

  return (
    <SceneWrapper>
      <div className="grid grid-cols-pre-stream flex-1 w-full">
        <div className="flex items-center justify-end pl-12 pr-6">{renderCountdown()}</div>
        <div
          className={clsx(
            'flex flex-col items-center justify-center px-6',
            getPrestreamAccentColor(variant),
          )}
        >
          <div className="flex items-center justify-center h-[72px]">
            <div className="block w-9 h-9 rounded-full bg-chungking-white" />
          </div>
        </div>
        <CurrentStreamBlock header={headerText} />
        <div className="flex items-center justify-center bg-chungking-black">
          {renderStudioClock()}
        </div>
      </div>
    </SceneWrapper>
  );
}
