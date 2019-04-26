import * as React from 'react'

import LayoutRoot from '../layout/LayoutRoot'

export default function HomeWidgetBase({ children }: { children: React.ReactNode }) {
  return <LayoutRoot isGreenScreen>{children}</LayoutRoot>
}
