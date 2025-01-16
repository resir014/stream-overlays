import * as trpc from '@trpc/server';
import { z } from 'zod';
import { getCurrentStream } from '../modules/notion/get-current-stream';
import { getOverlayData } from '../modules/notion/get-overlay-data';
import { getUpcomingStreams } from '../modules/notion/get-upcoming-streams';
import { publicProcedure, router } from '../trpc';

export const notionRouter = router({
  getCurrentStream: publicProcedure.query(async () => {
    try {
      return await getCurrentStream();
    } catch (err: unknown) {
      if (err instanceof Error) {
        throw new trpc.TRPCError({
          code: 'BAD_REQUEST',
          message: err.message,
          cause: err,
        });
      }

      throw new trpc.TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'An unexpected error occurred, please try again later.',
        cause: err,
      });
    }
  }),
  getUpcomingStreams: publicProcedure
    .input(
      z.object({
        referenceDate: z.string().nullable(),
        pageSize: z.number().nullable(),
      })
    )
    .query(async ({ input }) => {
      try {
        return await getUpcomingStreams({
          referenceDate: input.referenceDate,
          pageSize: input.pageSize,
        });
      } catch (err: unknown) {
        if (err instanceof Error) {
          throw new trpc.TRPCError({
            code: 'BAD_REQUEST',
            message: err.message,
            cause: err,
          });
        }

        throw new trpc.TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'An unexpected error occurred, please try again later.',
          cause: err,
        });
      }
    }),
  getOverlayData: publicProcedure.query(async () => {
    try {
      return await getOverlayData();
    } catch (err: unknown) {
      if (err instanceof Error) {
        throw new trpc.TRPCError({
          code: 'BAD_REQUEST',
          message: err.message,
          cause: err,
        });
      }

      throw new trpc.TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'An unexpected error occurred, please try again later.',
        cause: err,
      });
    }
  }),
});

export type NotionRouter = typeof notionRouter;
