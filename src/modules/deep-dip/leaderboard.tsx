'use client';

import * as React from 'react';
import clsx from 'clsx';
import { useCurrentProgress, useGlobalLeaderboard } from '../pre-stream/utils/deep-dip';
import { ResultBlock, ResultBlockDivider, ResultBlockFallback } from './result-block';

export function DeepDip2Leaderboard({ className }: React.ComponentPropsWithoutRef<'div'>) {
  const { leaderboard, isLoading: isLeaderboardLoading } = useGlobalLeaderboard();
  const { progress, isLoading: isProgressLoading } = useCurrentProgress();
  const truncatedLeaderboard = leaderboard?.length ? leaderboard.slice(0, 10) : [];

  return (
    <div className={clsx('flex flex-col items-center flex-1 space-y-3', className)}>
      <div className="flex items-center justify-between flex-1 w-full max-w-7xl px-6 bg-chungking-black/90 rounded-lg">
        <div className="text-chungking-white text-5xl font-bold">Current Standings</div>
      </div>
      <div className="flex flex-col flex-1 w-full max-w-7xl space-y-3">
        <div className="flex flex-col space-y-2">
          {isLeaderboardLoading
            ? Array(10)
                .fill(undefined)
                .map((_, key) => <ResultBlockFallback key={key} />)
            : truncatedLeaderboard.map(item => <ResultBlock key={item.wsid} result={item} />)}
        </div>

        {isProgressLoading ? (
          <>
            <ResultBlockDivider />
            <ResultBlockFallback />
          </>
        ) : progress ? (
          <>
            <ResultBlockDivider />
            <ResultBlock result={progress} />
          </>
        ) : null}
      </div>
    </div>
  );
}
