import { type LeaderboardResult } from './types';

const DD2_API_ENDPOINT = 'https://dips-plus-plus.xk.io';

export async function getGlobalLeaderboard() {
  const response = await fetch(`${DD2_API_ENDPOINT}/leaderboard/global`);
  const data: LeaderboardResult[] = (await response.json()) as unknown as LeaderboardResult[];

  return data;
}

export async function getCurrentProgress(accountId = '15d23e07-07ac-4093-bbfd-28d393daf0c0') {
  const response = await fetch(`${DD2_API_ENDPOINT}/leaderboard/${accountId}`);
  const data: LeaderboardResult = (await response.json()) as unknown as LeaderboardResult;

  return data;
}
