import fetch from 'isomorphic-unfetch'
import { AirtableData } from '../interfaces/types'

export default async function fetchAirtableData() {
  try {
    const apiKey = process.env.AIRTABLE_API_KEY

    const { records }: AirtableData = await fetch(
      'https://api.airtable.com/v0/appGvPegCJWtb4nSp/Streams?maxRecords=3&view=Grid%20view',
      {
        headers: {
          Authorization: `Bearer ${apiKey}`
        }
      }
    ).then(res => res.json())

    return records
  } catch (err) {
    throw new Error(err)
  }
}
