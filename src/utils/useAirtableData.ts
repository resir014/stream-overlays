import useSWR from 'swr'

import { AirtableRecord, AirtableData } from '~/interfaces/types'
import fetch from './fetch'

const airtableAPIURL =
  'https://api.airtable.com/v0/appGvPegCJWtb4nSp/Streams?maxRecords=3&view=Grid%20view'

export async function fetchAirtableData() {
  try {
    const apiKey = process.env.NEXT_PUBLIC_AIRTABLE_API_KEY

    const { records }: AirtableData = await fetch(airtableAPIURL, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    })

    if (records) {
      return records
    }

    return null
  } catch (err) {
    console.error(err)
    return null
  }
}

export function useAirtableData(initialData?: AirtableRecord[]): AirtableRecord[] | undefined {
  const { data, error } = useSWR<AirtableRecord[] | null>(airtableAPIURL, fetchAirtableData, {
    initialData,
    refreshInterval: 10000
  })

  if (data && !error) {
    return data
  }

  return undefined
}
