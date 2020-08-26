import * as React from 'react'
import { NextPage } from 'next'

import OverlayRoot from 'components/overlay/OverlayRoot'
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

  const streamName =
    typeof currentStream?.['Stream Name'] === 'string' ? currentStream?.['Stream Name'] : undefined
  const description = currentStream?.Description
  const date = currentStream?.Date

  return (
    <OverlayRoot isTransparent>
      <PrestreamBlock
        heading={<>Stream ended. Thanks&nbsp;for&nbsp;watching!</>}
        title={streamName || 'Untitled Stream'}
        description={description}
        date={date}
        backgroundColor={colors.red}
        titleColor={colors.orange}
        splashes={endCardSplashes}
      />
    </OverlayRoot>
  )
}

export async function getServerSideProps() {
  const initialData = await fetchNotionData()
  return { props: { initialData } }
}

export default EndScreenPage
