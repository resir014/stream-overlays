import * as React from 'react'

import OverlayRoot from '../../components/layout/OverlayRoot'

export default function HomeWidgetBase({ children }: { children: React.ReactNode }) {
  return <OverlayRoot isGreenScreen>{children}</OverlayRoot>
}
