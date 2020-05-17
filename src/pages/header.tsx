import * as React from 'react'
import { NextPage } from 'next'
import LayoutRoot from 'components/layout/LayoutRoot'
import BlockHeader from 'components/layout/BlockHeader'

import { AirtableRecord } from 'interfaces/types'
import { fetchAirtableData, useAirtableData } from 'utils/useAirtableData'

interface HeaderBlockProps {
  initialData?: AirtableRecord[]
  errors?: Error['message']
  isDisplayStream?: boolean
}

const HeaderPage: NextPage<HeaderBlockProps> = ({ initialData }) => {
  const fetchedRecords = useAirtableData(initialData)

  const firstRecord = fetchedRecords?.[0]
  const streamName = firstRecord?.fields['Stream Name']

  return (
    <LayoutRoot isTransparent>
      <BlockHeader isFrame title={streamName} />
    </LayoutRoot>
  )
}

export async function getServerSideProps() {
  const initialData = await fetchAirtableData()
  return { props: { initialData } }
}

export default HeaderPage
