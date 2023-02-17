import { createReactQueryHooks } from '@trpc/react';
import type { AppRouter } from '~/server/routers/_app';

export const trpc = createReactQueryHooks<AppRouter>();
