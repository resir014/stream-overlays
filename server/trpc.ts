import * as trpc from '@trpc/server';

export function createRouter<TContext>() {
  return trpc.router<TContext>();
}
