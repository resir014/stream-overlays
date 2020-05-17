import * as React from 'react'
import { NextPage } from 'next'
import LayoutRoot from 'components/layout/LayoutRoot'
import BlockFooter from 'components/layout/BlockFooter'

interface FooterPageProps {
  errors?: Error['message']
}

const FooterPage: NextPage<FooterPageProps> = () => {
  return (
    <LayoutRoot isTransparent>
      <BlockFooter hasLabels />
    </LayoutRoot>
  )
}

export default FooterPage
