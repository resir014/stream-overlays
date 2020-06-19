import * as React from 'react'
import { NextPage } from 'next'
import LayoutRoot from 'components/layout/LayoutRoot'
import FooterWidget from 'modules/widgets/FooterWidget'

interface FooterPageProps {
  errors?: Error['message']
}

const FooterPage: NextPage<FooterPageProps> = () => {
  return (
    <LayoutRoot isTransparent>
      <FooterWidget hasLabels />
    </LayoutRoot>
  )
}

export default FooterPage
