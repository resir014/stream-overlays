import * as React from 'react'
import { NextPage } from 'next'

import PrestreamBase from '../components/prestream/PrestreamBase'
import PrestreamBlock from '../components/prestream/PrestreamBlock'
import Inner from '../components/layout/Inner'
import { AirtableRecord } from '../interfaces/types'
import useAirtableData from '../utils/useAirtableData'

const PrestreamPage: NextPage = () => {
  const [fetchedRecords, setRecords] = React.useState<AirtableRecord[] | undefined>(undefined)

  useAirtableData(setRecords)

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
