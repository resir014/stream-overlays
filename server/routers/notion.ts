import * as trpc from '@trpc/server';
import { z } from 'zod';
import { createRouter } from '../create-router';
import { getCurrentStream } from '../notion/get-current-stream';
import { getOverlayData } from '../notion/get-overlay-data';
import { getUpcomingStreams } from '../notion/get-upcoming-streams';

export const notionRouter = createRouter()
  .query('current-stream', {
    async resolve() {
      try {
        return await getCurrentStream();
      } catch (err: unknown) {
        throw new trpc.TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'An unexpected error occurred, please try again later.',
          cause: err,
        });
      }
    },
  })
  .query('upcoming-streams', {
    input: z
      .object({
        referenceDate: z.string().nullable(),
        pageSize: z.number().nullable(),
      })
      .nullable(),
    async resolve({ input }) {
      try {
        return await getUpcomingStreams({
          referenceDate: input?.referenceDate,
          pageSize: input?.pageSize,
        });
      } catch (err: unknown) {
        throw new trpc.TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'An unexpected error occurred, please try again later.',
          cause: err,
        });
      }
    },
  })
  .query('overlay-data', {
    async resolve() {
      try {
        return await getOverlayData();
      } catch (err: unknown) {
        throw new trpc.TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'An unexpected error occurred, please try again later.',
          cause: err,
        });
      }
    },
  });

export type NotionRouter = typeof notionRouter;
