import fetch from 'isomorphic-unfetch';

export interface LeaderboardResult {
  /** Current player rank */
  rank: number;
  /** Player's account ID from Trackmania's live services */
  wsid: string;
  /** Personal best height (in meters) */
  height: number;
  /** Unix timestamp of when the personal best was recorded */
  ts: number;
  /** Player's display name */
  name: string;
  /** Number of times player's personal best is updated */
  update_count: number;
  /** Player's selected colour in-game (in RGB percentage) */
  color: number[];
}

const DD2_API_ENDPOINT = 'https://dips-plus-plus.xk.io';

export async function getGlobalLeaderboard() {
  const response = await fetch(`${DD2_API_ENDPOINT}/leaderboard/global`);
  const data: LeaderboardResult[] = await response.json();

  return data;
}

export async function getCurrentProgress(accountId = '15d23e07-07ac-4093-bbfd-28d393daf0c0') {
  const response = await fetch(`${DD2_API_ENDPOINT}/leaderboard/${accountId}`);
  const data: LeaderboardResult = await response.json();

  return data;
}
