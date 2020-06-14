import * as React from 'react'
import { NextPage } from 'next'

import LayoutRoot from 'components/layout/LayoutRoot'
import PrestreamBlock from 'modules/prestream/PrestreamBlock'

import { AirtableRecord } from 'interfaces/types'
import { colors } from 'styles/variables'
import brbSplashes from 'utils/brbSplashes'
import { useAirtableData, fetchAirtableData } from 'utils/useAirtableData'

interface BeRightBackPageProps {
  initialData?: AirtableRecord[]
  errors?: Error['message']
}

const BeRightBackPage: NextPage<BeRightBackPageProps> = ({ initialData }) => {
  const fetchedRecords = useAirtableData(initialData)

  const firstRecord = fetchedRecords?.[0]
  const streamName = firstRecord?.fields['Stream Name']
  const description = firstRecord?.fields['Description']
  const date = firstRecord?.fields['Date']

  return (
    <LayoutRoot isTransparent>
      <PrestreamBlock
        heading="Please stand by..."
        title={streamName || 'Untitled Stream'}
        description={description}
        date={date}
        backgroundColor={colors.purple}
        titleColor={colors.cyan}
        splashes={brbSplashes}
      />
    </LayoutRoot>
  )
}

export async function getServerSideProps() {
  const initialData = await fetchAirtableData()
  return { props: { initialData } }
}

export default BeRightBackPage
