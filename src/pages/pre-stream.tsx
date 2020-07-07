import * as React from 'react'
import { NextPage } from 'next'

import LayoutRoot from 'components/layout/LayoutRoot'
import PrestreamBlock from 'modules/prestream/PrestreamBlock'

import { NotionData } from 'interfaces/types'
import { useNotionData, fetchNotionData, currentDate } from 'utils/useNotionData'
import { colors } from 'styles/variables'

interface PrestreamPageProps {
  initialData?: NotionData[]
  errors?: Error['message']
}

const PrestreamPage: NextPage<PrestreamPageProps> = ({ initialData }) => {
  const fetchedRecords = useNotionData(initialData)

  const currentStream = fetchedRecords?.find(record => record.Date === currentDate)
  const streamName = currentStream?.['Stream Name']
  const description = currentStream?.Description
  const date = currentStream?.Date

  return (
    <LayoutRoot isTransparent>
      <PrestreamBlock
        heading="Stream starting soon..."
        title={streamName}
        description={description}
        date={date}
        titleColor={colors.green}
        backgroundColor={colors.ultramarine}
      />
    </LayoutRoot>
  )
}

export async function getServerSideProps() {
  const initialData = await fetchNotionData()
  return { props: { initialData } }
}

export default PrestreamPage
