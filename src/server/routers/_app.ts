import { router } from '../trpc';
import { deepDipRouter } from './deepdip';
import { notionRouter } from './notion';

export const appRouter = router({
  notion: notionRouter,
  deepDip: deepDipRouter,
});

export type AppRouter = typeof appRouter;
