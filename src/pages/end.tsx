import * as React from 'react'
import { NextPage } from 'next'

import LayoutRoot from 'components/layout/LayoutRoot'
import PrestreamBlock from 'modules/prestream/PrestreamBlock'

import { NotionData } from 'interfaces/types'
import { colors } from 'styles/variables'
import endCardSplashes from 'utils/endCardSplashes'
import { useNotionData, fetchNotionData } from 'utils/notionData'

interface EndScreenPageProps {
  initialData?: NotionData
  errors?: Error['message']
}

const EndScreenPage: NextPage<EndScreenPageProps> = ({ initialData }) => {
  const currentStream = useNotionData(initialData)

  const streamName = currentStream?.['Stream Name']
  const description = currentStream?.Description
  const date = currentStream?.Date

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
  const initialData = await fetchNotionData()
  return { props: { initialData } }
}

export default EndScreenPage
