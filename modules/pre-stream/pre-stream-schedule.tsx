import clsx from 'clsx';
import * as React from 'react';
import { useCurrentStream } from '~/lib/pre-stream/stream-schedule';
import { PreStreamVariants } from '~/lib/pre-stream/types';

export interface PreStreamScheduleProps {
  header?: string;
  variant?: PreStreamVariants;
}

export function PreStreamSchedule({ header, variant = 'pre-stream' }: PreStreamScheduleProps) {
  const { currentStream } = useCurrentStream();

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

  return (
    <div
      className={clsx(
        'flex flex-col items-start justify-between flex-1 h-full max-h-[720px] p-6 rounded-2xl shadow-xl bg-gradient-to-br',
        renderGradientColor(variant),
      )}
    >
      <div className="w-full">
        <p className="text-chungking-white text-2xl uppercase tracking-wider">
          {header ?? 'Stream starting soon...'}
        </p>
      </div>
      <div className="space-y-2 w-full">
        <h1 className="text-chungking-white text-6xl max-w-[75%] font-semibold">
          {currentStream?.stream_name ?? 'Untitled Stream'}
        </h1>
        <p className="text-chungking-white text-3xl">
          {currentStream?.description ?? 'No description available.'}
        </p>
      </div>
    </div>
  );
}
