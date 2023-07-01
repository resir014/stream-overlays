import * as trpc from '@trpc/server';
import { getFlyliveData } from '../modules/flylive/get-flylive-data';
import { publicProcedure, router } from '../trpc';

export const flyliveRouter = router({
  getLiveFlight: publicProcedure.query(async () => {
    try {
      return await getFlyliveData();
    } catch (err: unknown) {
      throw new trpc.TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'An unexpected error occurred, please try again later.',
        cause: err,
      });
    }
  }),
});

export type FlyLiveRouter = typeof flyliveRouter;
