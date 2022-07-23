/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { notion } from '~/lib/notion';

export type GetUpcomingStreamsOptions = {
  referenceDate?: string | null;
  pageSize?: number | null;
};

export async function getUpcomingStreams({
  referenceDate,
  pageSize,
}: GetUpcomingStreamsOptions = {}) {
  if (process.env.NOTION_DATABASE_ID) {
    const { results } = await notion.databases.query({
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

    // @ts-expect-error - see: https://github.com/makenotion/notion-sdk-js/issues/288
    const data = results.map(({ id, properties }) => {
      return {
        id,
        date: properties.Date.type === 'date' ? properties.Date.date.start : undefined,
        series:
          // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
          properties.Series.type === 'select' ? properties.Series.select?.name : undefined,
        category:
          properties.Category.type === 'multi_select'
            ? // @ts-expect-error - see: https://github.com/makenotion/notion-sdk-js/issues/288
              properties.Category.multi_select.map(select => select.name)
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
    });

    return data;
  } else {
    throw new Error('No database ID provided.');
  }
}
