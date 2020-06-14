import * as React from 'react'
import { NextPage } from 'next'

import LayoutRoot from 'components/layout/LayoutRoot'
import PrestreamBlock from 'modules/prestream/PrestreamBlock'

import { AirtableRecord } from 'interfaces/types'
import { useAirtableData, fetchAirtableData } from 'utils/useAirtableData'
import { colors } from 'styles/variables'

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
    <LayoutRoot isTransparent>
      <PrestreamBlock
        heading="Stream starting soon..."
        title={streamName || 'Untitled Stream'}
        description={description}
        date={date}
        titleColor={colors.green}
        backgroundColor={colors.ultramarine}
      />
    </LayoutRoot>
  )
}

export async function getServerSideProps() {
  const initialData = await fetchAirtableData()
  return { props: { initialData } }
}

export default PrestreamPage
