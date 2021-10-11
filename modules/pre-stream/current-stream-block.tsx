import clsx from 'clsx';
import * as React from 'react';
import { PrestreamCountdown } from './pre-stream-countdown';
import { useOnMount } from '~/lib/hooks/use-on-mount';
import { useCurrentStream } from '~/lib/pre-stream/stream-schedule';
import { PreStreamVariants } from '~/lib/pre-stream/types';

export interface PreStreamScheduleProps {
  header?: string;
  variant?: PreStreamVariants;
}

export function PreStreamSchedule({ variant = 'pre-stream' }: PreStreamScheduleProps) {
  const [clockRendered, setClockRendered] = React.useState(false);
  const { currentStream } = useCurrentStream();

  useOnMount(() => {
    setClockRendered(true);
  });

  const renderGradientColor = (type: PreStreamVariants) => {
    switch (type) {
      case 'pre-stream': {
        return 'from-[rgba(26,36,156,0.75)] to-[rgba(36,136,245,0.75)]';
      }
      case 'brb': {
        return 'from-[rgba(0,57,134,0.75)] to-[rgba(31,199,145,0.75)]';
      }
      case 'end': {
        return 'from-[rgba(134,0,0,0.75)] to-[rgba(203,137,29,0.75)]';
      }
      default: {
        return 'from-[rgba(26,36,156,0.75)] to-[rgba(36,136,245,0.75)]';
      }
    }
  };

  const renderCountdown = () => {
    if (clockRendered && variant === 'pre-stream') {
      return <PrestreamCountdown />;
    }

    if (variant === 'brb') {
      return 'BRB';
    }

    if (variant === 'end') {
      return 'ENDING';
    }

    return null;
  };

  return (
    <div className="flex flex-row items-start px-12 pt-10 pb-12 space-x-4">
      <div className="flex flex-none items-center h-[60px]">
        <div
          className={clsx(
            'block w-8 h-8 rounded-full bg-gradient-to-b',
            renderGradientColor(variant),
          )}
        />
      </div>
      <div className="flex flex-row items-center justify-between flex-1 space-x-6">
        <div className="space-y-4 flex-1">
          <div className="space-y-2">
            <h1 className="text-chungking-white text-6xl max-w-[75%] font-bold">
              {currentStream?.stream_name ?? 'Untitled Stream'}
            </h1>
            <p className="text-chungking-white text-3xl">
              {currentStream?.description ?? 'No description available.'}
            </p>
          </div>
        </div>
        <div className="space-y-4 text-right">
          <span className="flex items-center space-x-1 text-8xl leading-none text-chungking-white font-bold tabular-nums helper-alternate-digits">
            {renderCountdown()}
          </span>
        </div>
      </div>
    </div>
  );
}
