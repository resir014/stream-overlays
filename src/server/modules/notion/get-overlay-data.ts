import { isFullPage } from '@notionhq/client';
import { notion } from '~/lib/notion';
import type { OverlayDataInformation } from './types';

export async function getOverlayData(): Promise<OverlayDataInformation | undefined> {
  if (import.meta.env.NOTION_OVERLAY_DATA_ID) {
    const databaseQuery = await notion.databases.query({
      database_id: import.meta.env.NOTION_OVERLAY_DATA_ID,
      page_size: 10,
    });

    const data: OverlayDataInformation = {};

    for (const page of databaseQuery.results) {
      if (isFullPage(page)) {
        const { properties } = page;

        if (properties.Name.type === 'title' && properties.Date.type === 'date') {
          // eslint-disable-next-line max-depth
          switch (properties.Name.title[0].plain_text) {
            case 'Stream Start': {
              data.streamStart =
                properties.Date.date?.start ?? properties.Date.date?.end ?? undefined;
              break;
            }
            case 'Break Return Time': {
              data.breakReturnTime =
                properties.Date.date?.start ?? properties.Date.date?.end ?? undefined;
              break;
            }
            case 'Time Signal': {
              data.timeSignal =
                properties.Date.date?.start ?? properties.Date.date?.end ?? undefined;
              break;
            }
            default: {
              break;
            }
          }
        }
      }
    }

    return Object.keys(data).length ? data : undefined;
  } else {
    throw new Error('No database ID provided.');
  }
}
