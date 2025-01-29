import { Client, LogLevel } from '@notionhq/client';

export const notion = new Client({
  auth: import.meta.env.NOTION_API_KEY,
  logLevel: import.meta.env.NODE_ENV === 'development' ? LogLevel.DEBUG : undefined,
});
