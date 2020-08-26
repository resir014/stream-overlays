import * as React from 'react'
import { NextPage } from 'next'
import OverlayRoot from 'components/overlay/OverlayRoot'
import HeaderWidget from 'modules/widgets/HeaderWidget'

import { NotionData } from 'interfaces/types'
import { fetchNotionData, useNotionData } from 'utils/notionData'

interface HeaderBlockProps {
  initialData?: NotionData
  errors?: Error['message']
  isDisplayStream?: boolean
}

const HeaderPage: NextPage<HeaderBlockProps> = ({ initialData }) => {
  const currentStream = useNotionData(initialData)

  const streamName =
    typeof currentStream?.['Stream Name'] === 'string' ? currentStream?.['Stream Name'] : undefined

  return (
    <OverlayRoot isTransparent>
      <HeaderWidget isFrame title={streamName} />
    </OverlayRoot>
  )
}

export async function getServerSideProps() {
  const initialData = await fetchNotionData()
  return { props: { initialData } }
}

export default HeaderPage
