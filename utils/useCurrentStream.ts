import useSWR from 'swr';

import { fetch } from '../lib/fetch';
import { NotionData, ParsedSchedule } from '~/interfaces/types';

// https://github.com/splitbee/notion-api-worker
const notionAPIURL = `https://notion-api.splitbee.io/v1/table/${process.env.NEXT_PUBLIC_NOTION_STREAMS_TABLE_ID}`;

function isCurrentStream(notionData: NotionData) {
  return notionData['Current Stream'] === true;
}

export function parseStreamSchedule(item?: NotionData): ParsedSchedule | undefined {
  if (item) {
    const streamName = item['Stream Name'].toString();
    const description = item.Description;
    const date = item.Date;

    return { streamName, description, date };
  }

  return undefined;
}

export function filterLatestStream(schedule: NotionData[] | null | undefined) {
  return schedule?.find(isCurrentStream);
}

export function useStreamSchedule(refreshInterval = 5000) {
  const { data, error } = useSWR<NotionData[] | null>(notionAPIURL, fetch, {
    refreshInterval,
  });

  return {
    schedule: parseStreamSchedule(filterLatestStream(data)),
    isLoading: !error && !data,
    isError: error,
  };
}
