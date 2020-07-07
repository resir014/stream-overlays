import useSWR from 'swr'
import format from 'date-fns/format'

import { NotionData } from 'interfaces/types'

import fetch from './fetch'

const airtableAPIURL = `https://notion-api.splitbee.io/v1/table/${process.env.NEXT_PUBLIC_NOTION_STREAMS_TABLE_ID}`

export const currentDate = format(new Date(), 'yyyy-MM-dd')

export async function fetchNotionData() {
  try {
    const data: NotionData[] = await fetch(airtableAPIURL)

    if (data) {
      return data
    }

    return null
  } catch (err) {
    console.error(err)
    return null
  }
}

export function useNotionData(initialData?: NotionData[]): NotionData[] | undefined {
  const { data, error } = useSWR<NotionData[] | null>(airtableAPIURL, fetchNotionData, {
    initialData,
    refreshInterval: 10000
  })

  if (data && !error) {
    return data
  }

  return undefined
}
