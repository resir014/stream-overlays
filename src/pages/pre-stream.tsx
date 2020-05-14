import * as React from 'react'
import { NextPage } from 'next'

import PrestreamBase from 'components/prestream/PrestreamBase'
import PrestreamBlock from 'components/prestream/PrestreamBlock'
import Inner from 'components/layout/Inner'
import { AirtableRecord } from 'interfaces/types'
import { useAirtableData, fetchAirtableData } from 'utils/useAirtableData'

interface PrestreamPageProps {
  initialData?: AirtableRecord[]
  errors?: Error['message']
}

const PrestreamPage: NextPage<PrestreamPageProps> = ({ initialData }) => {
  const fetchedRecords = useAirtableData(initialData)

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

export async function getServerSideProps() {
  const initialData = await fetchAirtableData()
  return { props: { initialData } }
}

export default PrestreamPage
