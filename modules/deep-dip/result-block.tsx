import * as React from 'react';
import { LeaderboardResult } from '~/server/modules/deepdip/get-global-leaderboard';

export interface ResultBlockProps {
  result: LeaderboardResult;
}

export function ResultBlockDivider() {
  return (
    <div className="flex items-center justify-center h-[16px] bg-chungking-black/90 rounded-lg" />
  );
}

export function ResultBlockFallback() {
  return (
    <div className="flex items-center justify-between h-[56px] bg-chungking-black/90 rounded-lg" />
  );
}

export function ResultBlock({ result }: ResultBlockProps) {
  return (
    <div className="flex items-center justify-between bg-chungking-black/90 rounded-lg gap-6 p-1">
      <div className="flex items-center justify-center w-[72px] h-[48px] rounded-md bg-chungking-blue-500">
        <span className="text-chungking-white text-3xl font-bold">{result.rank}</span>
      </div>
      <div className="flex items-center justify-start flex-1 pr-3">
        <span className="text-chungking-white text-3xl font-bold">{result.name}</span>
      </div>
      <div className="flex items-center justify-center px-2 w-[128px] h-[48px] rounded-md bg-chungking-white">
        <span className="text-chungking-black text-3xl font-bold">{result.height.toFixed(1)}m</span>
      </div>
    </div>
  );
}
