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
