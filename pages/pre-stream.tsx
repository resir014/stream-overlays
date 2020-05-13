import * as React from 'react'
import { NextPage } from 'next'

import PrestreamBase from '../components/prestream/PrestreamBase'
import PrestreamBlock from '../components/prestream/PrestreamBlock'
import Inner from '../components/layout/Inner'
import { AirtableRecord } from '../interfaces/types'
import fetchAirtableData from '../utils/fetchAirtableData'
import useInterval from '../utils/useInterval'

const PrestreamPage: NextPage = () => {
  const [fetchedRecords, setRecords] = React.useState<AirtableRecord[] | undefined>(undefined)

  const fetcher = () => {
    const doFetch = async () => {
      try {
        const newRecords = await fetchAirtableData()

        setRecords(newRecords)
      } catch (err) {
        // eslint-disable-next-line
        console.error(err)
      }
    }

    doFetch()
  }

  React.useEffect(fetcher, [])

  useInterval(fetcher, 10000)

  const firstRecord = fetchedRecords?.[0]
  const streamName = firstRecord?.fields['Stream Name']
  const description = firstRecord?.fields['Description']
  const date = firstRecord?.fields['Date']

  return (
    <PrestreamBase>
      <Inner>
        <PrestreamBlock
          heading="Stream starting soon..."
          streamName={streamName}
          title={streamName || 'Untitled Stream'}
          description={description}
          date={date}
        />
      </Inner>
    </PrestreamBase>
  )
}

export default PrestreamPage
