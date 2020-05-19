import * as React from 'react'
import { NextPage } from 'next'

import PrestreamBase from 'components/prestream/PrestreamBase'
import Inner from 'components/layout/Inner'
import PrestreamBlock from 'components/prestream/PrestreamBlock'
import { AirtableRecord } from 'interfaces/types'
import { colors } from 'styles/variables'
import endCardSplashes from 'utils/endCardSplashes'
import { useAirtableData, fetchAirtableData } from 'utils/useAirtableData'

interface EndScreenPageProps {
  initialData?: AirtableRecord[]
  errors?: Error['message']
}

const EndScreenPage: NextPage<EndScreenPageProps> = ({ initialData }) => {
  const fetchedRecords = useAirtableData(initialData)

  const firstRecord = fetchedRecords?.[0]
  const streamName = firstRecord?.fields['Stream Name']
  const description = firstRecord?.fields['Description']
  const date = firstRecord?.fields['Date']

  return (
    <PrestreamBase>
      <Inner>
        <PrestreamBlock
          streamName={streamName}
          heading="Stream ended. Thanks for watching!"
          title={streamName || 'Untitled Stream'}
          description={description}
          date={date}
          backgroundColor={colors.ultramarine}
          titleColor={colors.orange}
          splashes={endCardSplashes}
        />
      </Inner>
    </PrestreamBase>
  )
}

export async function getServerSideProps() {
  const initialData = await fetchAirtableData()
  return { props: { initialData } }
}

export default EndScreenPage
