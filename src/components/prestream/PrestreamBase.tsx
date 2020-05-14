import * as React from 'react'

import LayoutRoot from '../layout/LayoutRoot'

export default function PrestreamBase({ children }: { children: React.ReactNode }) {
  return <LayoutRoot isGreenScreen>{children}</LayoutRoot>
}
