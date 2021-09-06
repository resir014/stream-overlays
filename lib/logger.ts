import pino from 'pino';

export const logger = pino({
  level: 'debug',
  base: {
    env: process.env.NODE_ENV,
    revision: process.env.VERCEL_GITHUB_COMMIT_SHA,
  },
  prettyPrint: { colorize: true },
});
