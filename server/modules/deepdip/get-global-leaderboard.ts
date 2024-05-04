import fetch from 'isomorphic-unfetch';

export interface Leaderboard {
  rank: number;
  wsid: string;
  height: number;
  ts: number;
  name: string;
}

export async function getGlobalLeaderboard() {
  const response = await fetch('https://dips-plus-plus.xk.io/leaderboard/global');
  const data: Leaderboard[] = await response.json();

  return data;
}

export async function getCurrentProgress(accountId = '15d23e07-07ac-4093-bbfd-28d393daf0c0') {
  const response = await fetch(`https://dips-plus-plus.xk.io/leaderboard/${accountId}`);
  const data: Leaderboard = await response.json();

  return data;
}
