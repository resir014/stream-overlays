import { createRouter } from './create-router';
import { flyliveRouter } from './routers/flylive';
import { notionRouter } from './routers/notion';

export const appRouter = createRouter()
  .merge('notion.', notionRouter)
  .merge('flylive.', flyliveRouter);

export type AppRouter = typeof appRouter;
