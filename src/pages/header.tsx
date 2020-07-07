import * as React from 'react'
import { NextPage } from 'next'
import LayoutRoot from 'components/layout/LayoutRoot'
import HeaderWidget from 'modules/widgets/HeaderWidget'

import { NotionData } from 'interfaces/types'
import { fetchNotionData, useNotionData, currentDate } from 'utils/useNotionData'

interface HeaderBlockProps {
  initialData?: NotionData[]
  errors?: Error['message']
  isDisplayStream?: boolean
}

const HeaderPage: NextPage<HeaderBlockProps> = ({ initialData }) => {
  const fetchedRecords = useNotionData(initialData)

  const firstRecord = fetchedRecords?.find(record => record.Date === currentDate)
  const streamName = firstRecord?.['Stream Name']

  return (
    <LayoutRoot isTransparent>
      <HeaderWidget isFrame title={streamName} />
    </LayoutRoot>
  )
}

export async function getServerSideProps() {
  const initialData = await fetchNotionData()
  return { props: { initialData } }
}

export default HeaderPage
