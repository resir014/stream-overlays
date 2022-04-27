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
      return <StudioClockInterface />;
    }

    return null;
  };

  return (
    <SceneWrapper>
      <div className="grid grid-cols-pre-stream flex-1 w-full">
        <div className="flex items-center justify-end pl-12">{renderCountdown()}</div>
        <div className="flex items-center px-6">
          <div className={clsx('block w-9 h-9 rounded-full', getPrestreamAccentColor(variant))} />
        </div>
        <CurrentStreamBlock header={headerText} />
        <div className="flex items-center bg-chungking-black">{renderStudioClock()}</div>
      </div>
    </SceneWrapper>
  );
}
