import { Client, LogLevel } from '@notionhq/client';

export const notion = new Client({
  auth: process.env.NOTION_API_KEY,
  logLevel: process.env.NODE_ENV === 'development' ? LogLevel.DEBUG : undefined,
});
