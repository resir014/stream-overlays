import useSWR from 'swr'

import { NotionData } from 'interfaces/types'

import fetch from './fetch'

// https://github.com/splitbee/notion-api-worker
const notionAPIURL = `https://notion-api.splitbee.io/v1/table/${process.env.NEXT_PUBLIC_NOTION_STREAMS_TABLE_ID}`

function isCurrentStream(notionData: NotionData) {
  return notionData['Current Stream'] === true
}

export async function fetchNotionData(): Promise<NotionData | null> {
  try {
    const schedule: NotionData[] = await fetch(notionAPIURL)

    return schedule?.find(isCurrentStream) || null
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err)
    return null
  }
}

export function useNotionData(initialData?: NotionData): NotionData | undefined {
  const { data, error } = useSWR<NotionData | null>(notionAPIURL, fetchNotionData, {
    initialData,
    refreshInterval: 10000
  })

  if (data && !error) {
    return data
  }

  return undefined
}
