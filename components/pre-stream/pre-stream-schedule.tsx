import * as React from 'react';
import { useStreamSchedule } from '~/lib/pre-stream/stream-schedule';

export interface PreStreamScheduleProps {
  header?: string;
}

export function PreStreamSchedule({ header }: PreStreamScheduleProps) {
  const { schedule } = useStreamSchedule();

  return (
    <div className="flex flex-col items-start justify-between w-full max-w-[1280px] h-full max-h-[720px] p-6 rounded-2xl shadow-xl bg-gradient-to-br from-[rgba(63,22,112,0.4)] to-[rgba(0,112,243,0.4)]">
      <div className="w-full">
        <p className="text-chungking-white text-2xl uppercase tracking-wider">
          {header ?? 'Stream starting soon...'}
        </p>
      </div>
      <div className="space-y-2 w-full">
        <h1 className="text-chungking-white text-6xl max-w-[75%] font-semibold">
          {schedule?.streamName ?? 'Untitled Stream'}
        </h1>
        <p className="text-chungking-white text-3xl">
          {schedule?.description ?? 'No description available.'}
        </p>
      </div>
    </div>
  );
}
