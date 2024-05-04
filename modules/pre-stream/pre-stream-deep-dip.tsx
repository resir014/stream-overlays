import * as React from 'react';
import { SceneWrapper } from '../scenes/scene-wrapper';
import { useCurrentProgress, useGlobalLeaderboard } from './utils/deep-dip';

export function PreStreamDeepDipScene() {
  const { leaderboard } = useGlobalLeaderboard();
  const { progress } = useCurrentProgress();
  const truncatedLeaderboard = leaderboard?.length ? leaderboard.slice(0, 10) : [];

  return (
    <SceneWrapper>
      <div className="flex flex-col w-full flex-1 pt-[96px] pb-[24px] px-[128px] space-y-4">
        <div className="flex items-center justify-between h-[72px] px-6 bg-black/75 rounded-lg">
          <div className="text-white text-4xl font-bold">Deep Dip 2 - Current Standings</div>
          <div className="text-white text-3xl">Be right back.</div>
        </div>
        <div className="flex flex-col flex-1 space-y-4">
          {truncatedLeaderboard.length
            ? truncatedLeaderboard.map(item => (
                <div
                  className="flex items-center justify-between h-[48px] bg-black/75 rounded-lg gap-6"
                  key={item.wsid}
                >
                  <div className="flex items-center justify-center w-[64px]">
                    <span className="text-white text-2xl font-bold">{item.rank}</span>
                  </div>
                  <div className="flex items-center justify-start flex-1 pr-3">
                    <span className="text-white text-2xl font-bold">{item.name}</span>
                  </div>
                  <div className="flex items-center justify-end pl-3 pr-6">
                    <span className="text-white text-2xl tabular-nums">
                      {item.height.toFixed(1)}m
                    </span>
                  </div>
                </div>
              ))
            : Array(10).map((_, key) => (
                <div
                  className="flex items-center justify-between h-[48px] bg-black/75 rounded-lg gap-6"
                  key={key}
                />
              ))}
          <div className="flex items-center justify-center h-[48px] bg-black/75 rounded-lg gap-6">
            <span className="text-white text-xl font-bold">...</span>
          </div>
          {progress ? (
            <div className="flex items-center justify-between h-[48px] bg-black/75 rounded-lg gap-6">
              <div className="flex items-center justify-center w-[64px]">
                <span className="text-white text-2xl font-bold">{progress.rank}</span>
              </div>
              <div className="flex items-center justify-start flex-1 pr-3">
                <span className="text-white text-2xl font-bold">{progress.name}</span>
              </div>
              <div className="flex items-center justify-end pl-3 pr-6">
                <span className="text-white text-2xl tabular-nums">
                  {progress.height.toFixed(1)}m
                </span>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-between h-[48px] bg-black/75 rounded-lg gap-6" />
          )}
        </div>
      </div>
    </SceneWrapper>
  );
}
