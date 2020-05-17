import * as React from 'react'
import { NextPage } from 'next'
import LayoutRoot from 'components/layout/LayoutRoot'
import BlockFooter from 'components/layout/BlockFooter'

interface FooterBlocProps {
  errors?: Error['message']
}

const HeaderPage: NextPage<FooterBlocProps> = () => {
  return (
    <LayoutRoot isTransparent>
      <BlockFooter hasLabels />
    </LayoutRoot>
  )
}

export default HeaderPage
