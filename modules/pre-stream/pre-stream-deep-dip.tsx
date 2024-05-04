import * as React from 'react';
import { SceneWrapper } from '../scenes/scene-wrapper';
import { useCurrentProgress, useGlobalLeaderboard } from './utils/deep-dip';

export function PreStreamDeepDipScene() {
  const { leaderboard, isLoading: isLeaderboardLoading } = useGlobalLeaderboard();
  const { progress, isLoading: isProgressLoading } = useCurrentProgress();
  const truncatedLeaderboard = leaderboard?.length ? leaderboard.slice(0, 10) : [];

  return (
    <SceneWrapper>
      <div className="flex flex-col items-center flex-1 pt-[96px] pb-[24px] px-[128px] space-y-4">
        <div className="flex items-center justify-between w-full max-w-7xl h-[72px] px-6 bg-black/90 rounded-lg">
          <div className="text-white text-4xl font-bold">Deep Dip 2 - Current Standings</div>
          <div className="text-white text-3xl">Be right back.</div>
        </div>
        <div className="flex flex-col flex-1 w-full max-w-7xl space-y-3">
          <div className="flex flex-col space-y-2">
            {isLeaderboardLoading
              ? Array(10)
                  .fill(undefined)
                  .map((_, key) => (
                    <div
                      className="flex items-center justify-between h-[56px] bg-black/90 rounded-lg gap-6"
                      key={key}
                    />
                  ))
              : truncatedLeaderboard.map(item => (
                  <div
                    className="flex items-center justify-between bg-black/90 rounded-lg gap-6 p-1"
                    key={item.wsid}
                  >
                    <div className="flex items-center justify-center w-[64px] h-[48px] rounded-md bg-blue-600">
                      <span className="text-white text-2xl font-bold">{item.rank}</span>
                    </div>
                    <div className="flex items-center justify-start flex-1 pr-3">
                      <span className="text-white text-2xl font-bold">{item.name}</span>
                    </div>
                    <div className="flex items-center justify-center px-2 w-[128px] h-[48px] rounded-md bg-white">
                      <span className="text-black text-2xl font-bold">
                        {item.height.toFixed(1)}m
                      </span>
                    </div>
                  </div>
                ))}
          </div>

          {isProgressLoading ? (
            <>
              <div className="flex items-center justify-center h-[16px] bg-black/90 rounded-lg gap-6" />
              <div className="flex items-center justify-between h-[56px] bg-black/90 rounded-lg gap-6" />
            </>
          ) : progress ? (
            <>
              <div className="flex items-center justify-center h-[16px] bg-black/90 rounded-lg gap-6" />
              <div className="flex items-center justify-between bg-black/90 rounded-lg gap-6 p-1">
                <div className="flex items-center justify-center w-[64px] h-[48px] rounded-md bg-blue-600">
                  <span className="text-white text-xl font-bold">{progress.rank}</span>
                </div>
                <div className="flex items-center justify-start flex-1 pr-3">
                  <span className="text-white text-2xl font-bold">{progress.name}</span>
                </div>
                <div className="flex items-center justify-center px-2 w-[128px] h-[48px] rounded-md bg-white">
                  <span className="text-black text-2xl font-bold tabular-nums">
                    {progress.height.toFixed(1)}m
                  </span>
                </div>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </SceneWrapper>
  );
}
