import * as React from 'react'
import { NextPage } from 'next'

import LayoutRoot from 'components/layout/LayoutRoot'
import PrestreamBlock from 'modules/prestream/PrestreamBlock'

import { NotionData } from 'interfaces/types'
import { colors } from 'styles/variables'
import brbSplashes from 'utils/brbSplashes'
import { useNotionData, fetchNotionData } from 'utils/notionData'

interface BeRightBackPageProps {
  initialData?: NotionData
  errors?: Error['message']
}

const BeRightBackPage: NextPage<BeRightBackPageProps> = ({ initialData }) => {
  const currentStream = useNotionData(initialData)

  const streamName =
    typeof currentStream?.['Stream Name'] === 'string' ? currentStream?.['Stream Name'] : undefined
  const description = currentStream?.Description
  const date = currentStream?.Date

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
  const initialData = await fetchNotionData()
  return { props: { initialData } }
}

export default BeRightBackPage
