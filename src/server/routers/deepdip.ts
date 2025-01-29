import * as trpc from '@trpc/server';
import {
  getCurrentProgress,
  getGlobalLeaderboard,
} from '../modules/deepdip/get-global-leaderboard';
import { publicProcedure, router } from '../trpc';

export const deepDipRouter = router({
  getGlobalLeaderboard: publicProcedure.query(async () => {
    try {
      return await getGlobalLeaderboard();
    } catch (err: unknown) {
      throw new trpc.TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'An unexpected error occurred, please try again later.',
        cause: err,
      });
    }
  }),
  getCurrentProgress: publicProcedure.query(async () => {
    try {
      return await getCurrentProgress();
    } catch (err: unknown) {
      throw new trpc.TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'An unexpected error occurred, please try again later.',
        cause: err,
      });
    }
  }),
});
