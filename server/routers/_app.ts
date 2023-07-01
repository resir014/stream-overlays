import * as trpc from '@trpc/server';
import { mergeRouters, router } from '../trpc';
import { flyliveRouter } from './flylive';
import { notionRouter } from './notion';

export const legacyRouter = trpc.router().merge('flylive.', flyliveRouter).interop();

export const mainRouter = router({
  notion: notionRouter,
});

export const appRouter = mergeRouters(legacyRouter, mainRouter);

export type AppRouter = typeof appRouter;
