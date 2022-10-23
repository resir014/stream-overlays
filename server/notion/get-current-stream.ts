import { isFullPage } from '@notionhq/client';
import { notion } from '~/lib/notion';

export type CurrentStreamInformation = {
  id: string;
  date?: string;
  series?: string;
  categories?: string[];
  stream_name?: string;
  description?: string;
};

export async function getCurrentStream(): Promise<CurrentStreamInformation | undefined> {
  if (process.env.NOTION_STREAMS_TABLE_ID) {
    const databaseQuery = await notion.databases.query({
      database_id: process.env.NOTION_STREAMS_TABLE_ID,
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

    const data: CurrentStreamInformation[] = [];

    for (const page of databaseQuery.results) {
      if (isFullPage(page)) {
        const { id, properties } = page;

        const currentStream: CurrentStreamInformation = {
          id,
          date: properties.Date.type === 'date' ? properties.Date.date?.start : undefined,
          series: properties.Series.type === 'select' ? properties.Series.select?.name : undefined,
          categories:
            properties.Category.type === 'multi_select'
              ? properties.Category.multi_select.map(select => select.name)
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
        };

        data.push(currentStream);
      }
    }

    return data[0] ?? undefined;
  } else {
    throw new Error('No database ID provided.');
  }
}
