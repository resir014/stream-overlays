import { isFullPage } from '@notionhq/client';
import { notion } from '~/lib/notion';

export type GetUpcomingStreamsOptions = {
  referenceDate?: string | null;
  pageSize?: number | null;
};

export type UpcomingStreamData = {
  id: string;
  date?: string;
  series?: string;
  category?: string[];
  stream_name?: string;
  description?: string;
};

export async function getUpcomingStreams({
  referenceDate,
  pageSize,
}: GetUpcomingStreamsOptions = {}) {
  if (process.env.NOTION_DATABASE_ID) {
    const databaseQuery = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID,
      filter: {
        property: 'Date',
        date: {
          after: referenceDate ? new Date(referenceDate).toISOString() : new Date().toISOString(),
        },
      },
      sorts: [
        {
          property: 'Date',
          direction: 'ascending',
        },
      ],
      page_size: pageSize ?? 3,
    });

    const data: UpcomingStreamData[] = [];

    for (const page of databaseQuery.results) {
      if (isFullPage(page)) {
        const { id, properties } = page;

        const stream = {
          id,
          date: properties.Date.type === 'date' ? properties.Date.date?.start : undefined,
          series:
            // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
            properties.Series.type === 'select' ? properties.Series.select?.name : undefined,
          category:
            properties.Category.type === 'multi_select'
              ? properties.Category.multi_select.map(select => select.name)
              : undefined,
          stream_name:
            properties['Stream Name'].type === 'title'
              ? properties['Stream Name'].title[0]?.type === 'text'
                ? properties['Stream Name'].title[0]?.text.content
                : undefined
              : undefined,
          description:
            properties.Description.type === 'rich_text'
              ? properties.Description.rich_text[0]?.type === 'text'
                ? properties.Description.rich_text[0]?.text.content
                : undefined
              : undefined,
        };

        data.push(stream);
      }
    }

    return data;
  } else {
    throw new Error('No database ID provided.');
  }
}
