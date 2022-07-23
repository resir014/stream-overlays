/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { notion } from '~/lib/notion';

export type CurrentStreamInformation = {
  id: string;
  date: string;
  series: string;
  category: string;
  stream_name: string;
  description: string;
};

export async function getCurrentStream(): Promise<CurrentStreamInformation | undefined> {
  if (process.env.NOTION_DATABASE_ID) {
    const { results } = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID,
      filter: {
        property: 'Current Stream',
        checkbox: {
          equals: true,
        },
      },
      sorts: [
        {
          property: 'Date',
          direction: 'descending',
        },
      ],
      page_size: 1,
    });

    if (results.length > 0) {
      // @ts-expect-error - see: https://github.com/makenotion/notion-sdk-js/issues/288
      const currentStream = results.map(({ id, properties }) => ({
        id,
        date: properties.Date.type === 'date' ? properties.Date.date.start : undefined,
        series: properties.Series.type === 'select' ? properties.Series.select.name : undefined,
        category:
          properties.Category.type === 'multi_select'
            ? // @ts-expect-error - see: https://github.com/makenotion/notion-sdk-js/issues/288
              properties.Category.multi_select.map(select => select.name)
            : undefined,
        stream_name:
          properties['Stream Name'].type === 'title'
            ? properties['Stream Name'].title[0].type === 'text'
              ? properties['Stream Name'].title[0].text.content
              : undefined
            : undefined,
        description:
          properties.Description.type === 'rich_text'
            ? properties.Description.rich_text[0].type === 'text'
              ? properties.Description.rich_text[0].text.content
              : undefined
            : undefined,
      }));

      return currentStream[0];
    } else {
      return undefined;
    }
  } else {
    throw new Error('No database ID provided.');
  }
}
