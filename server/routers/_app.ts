import { createRouter } from '../trpc';
import { flyliveRouter } from './flylive';
import { notionRouter } from './notion';

export const appRouter = createRouter()
  .merge('notion.', notionRouter)
  .merge('flylive.', flyliveRouter);

export type AppRouter = typeof appRouter;
