import * as React from 'react'

import { AirtableRecord } from 'interfaces/types'
import fetchAirtableData from './fetchAirtableData'
import useInterval from './useInterval'

export default function useAirtableData(setData: (data: AirtableRecord[]) => void) {
  const doFetch = async () => {
    try {
      const newRecords = await fetchAirtableData()

      setData(newRecords)
    } catch (err) {
      // eslint-disable-next-line
      console.error(err)
    }
  }

  React.useEffect(() => {
    doFetch()
  }, [])

  useInterval(() => {
    doFetch()
  }, 10000)
}