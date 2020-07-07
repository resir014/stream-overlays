import * as React from 'react'
import { NextPage } from 'next'
import LayoutRoot from 'components/layout/LayoutRoot'
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

  const streamName = currentStream?.['Stream Name']

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
