import * as React from 'react'

import GlobalStyles from '../layout/GlobalStyles'
import Root from '../layout/Root'

export default function PrestreamBase({ children }: { children: React.ReactNode }) {
  return (
    <Root isGreenScreen>
      <GlobalStyles />
      {children}
    </Root>
  )
}
