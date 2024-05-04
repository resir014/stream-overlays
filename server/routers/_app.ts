import { router } from '../trpc';
import { deepDipRouter } from './deepdip';
import { flyliveRouter } from './flylive';
import { notionRouter } from './notion';

export const appRouter = router({
  notion: notionRouter,
  flylive: flyliveRouter,
  deepDip: deepDipRouter,
});

export type AppRouter = typeof appRouter;
