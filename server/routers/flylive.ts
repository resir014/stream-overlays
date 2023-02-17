import * as trpc from '@trpc/server';
import { createRouter } from '../trpc';
import { getFlyliveData } from '../modules/flylive/get-flylive-data';

export const flyliveRouter = createRouter().query('live-flight', {
  async resolve() {
    try {
      return await getFlyliveData();
    } catch (err: unknown) {
      throw new trpc.TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'An unexpected error occurred, please try again later.',
        cause: err,
      });
    }
  },
});

export type FlyLiveRouter = typeof flyliveRouter;
