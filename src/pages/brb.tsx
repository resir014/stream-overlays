import * as React from 'react'
import { NextPage } from 'next'

import PrestreamBase from 'components/prestream/PrestreamBase'
import Inner from 'components/layout/Inner'
import PrestreamBlock from 'components/prestream/PrestreamBlock'
import { AirtableData } from 'interfaces/types'
import { colors } from 'styles/variables'
import brbSplashes from 'utils/brbSplashes'
import { useAirtableData, fetchAirtableData } from 'utils/useAirtableData'

interface BeRightBackPageProps {
  initialData?: AirtableData
  errors?: Error['message']
}

const BeRightBackPage: NextPage<BeRightBackPageProps> = ({ initialData }) => {
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
          heading="Please stand by..."
          title={streamName || 'Untitled Stream'}
          description={description}
          date={date}
          gradientStart={colors.blue}
          gradientEnd={colors.magenta}
          splashes={brbSplashes}
        />
      </Inner>
    </PrestreamBase>
  )
}

export async function getServerSideProps() {
  const initialData = await fetchAirtableData()
  return { props: { initialData } }
}

export default BeRightBackPage
