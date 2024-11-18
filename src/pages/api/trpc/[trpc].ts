import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { type APIRoute } from 'astro';
import { appRouter } from '~/server/routers/_app';

export const all: APIRoute = opts => {
  return fetchRequestHandler({
    endpoint: '/api/trpc',
    req: opts.request,
    router: appRouter,
    createContext: () => ({}),
  });
};
