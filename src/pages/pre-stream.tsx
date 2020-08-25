import * as React from 'react'
import { NextPage } from 'next'

import LayoutRoot from 'components/layout/LayoutRoot'
import PrestreamBlock from 'modules/prestream/PrestreamBlock'

import { NotionData } from 'interfaces/types'
import { useNotionData, fetchNotionData } from 'utils/notionData'
import { colors } from 'styles/variables'

interface PrestreamPageProps {
  initialData?: NotionData
  errors?: Error['message']
}

const PrestreamPage: NextPage<PrestreamPageProps> = ({ initialData }) => {
  const currentStream = useNotionData(initialData)

  const streamName =
    typeof currentStream?.['Stream Name'] === 'string' ? currentStream?.['Stream Name'] : undefined
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
