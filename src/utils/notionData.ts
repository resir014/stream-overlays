import useSWR from 'swr'
import format from 'date-fns/format'
import subDays from 'date-fns/subDays'

import { NotionData } from 'interfaces/types'

import fetch from './fetch'

// https://github.com/splitbee/notion-api-worker
const airtableAPIURL = `https://notion-api.splitbee.io/v1/table/${process.env.NEXT_PUBLIC_NOTION_STREAMS_TABLE_ID}`

const currentDate = new Date()
const currentFormattedDate = format(currentDate, 'yyyy-MM-dd')

// need to check 1 day prior just in case
const yesterdayFormattedDate = format(subDays(currentDate, 1), 'yyyy-MM-dd')

function isTodayOrYesterday(notionData: NotionData) {
  return notionData.Date === currentFormattedDate || notionData.Date === yesterdayFormattedDate
}

export async function fetchNotionData(): Promise<NotionData | null> {
  try {
    const schedule: NotionData[] = await fetch(airtableAPIURL)

    return schedule?.find(isTodayOrYesterday) || null
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err)
    return null
  }
}

export function useNotionData(initialData?: NotionData): NotionData | undefined {
  const { data, error } = useSWR<NotionData | null>(airtableAPIURL, fetchNotionData, {
    initialData,
    refreshInterval: 10000
  })

  if (data && !error) {
    return data
  }

  return undefined
}
