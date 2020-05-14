import useSWR from 'swr'

import { AirtableRecord, AirtableData } from 'interfaces/types'
import fetch from './fetch'

const airtableAPIURL =
  'https://api.airtable.com/v0/appGvPegCJWtb4nSp/Streams?maxRecords=3&view=Grid%20view'

export async function fetchAirtableData() {
  try {
    const apiKey = process.env.AIRTABLE_API_KEY

    const data: AirtableData = await fetch(airtableAPIURL, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(res => res.json())

    return data
  } catch (err) {
    return null
  }
}

export function useAirtableData(initialData?: AirtableData): AirtableRecord[] | undefined {
  const { data, error } = useSWR<AirtableData | null>(airtableAPIURL, fetchAirtableData, {
    initialData,
    refreshInterval: 10000
  })

  if (data && !error) {
    const { records } = data
    return records
  }

  return undefined
}
