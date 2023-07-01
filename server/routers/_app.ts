import { router } from '../trpc';
import { flyliveRouter } from './flylive';
import { notionRouter } from './notion';

export const appRouter = router({
  notion: notionRouter,
  flylive: flyliveRouter,
});

export type AppRouter = typeof appRouter;
