import * as React from 'react'
import { NextPage } from 'next'

import LayoutRoot from 'components/layout/LayoutRoot'
import PrestreamBlock from 'modules/prestream/PrestreamBlock'

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
    <LayoutRoot isTransparent>
      <PrestreamBlock
        heading={<>Stream ended. Thanks&nbsp;for&nbsp;watching!</>}
        title={streamName || 'Untitled Stream'}
        description={description}
        date={date}
        backgroundColor={colors.red}
        titleColor={colors.orange}
        splashes={endCardSplashes}
      />
    </LayoutRoot>
  )
}

export async function getServerSideProps() {
  const initialData = await fetchAirtableData()
  return { props: { initialData } }
}

export default EndScreenPage
