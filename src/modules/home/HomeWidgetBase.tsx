import * as React from 'react'

import OverlayRoot from '../../components/overlay/OverlayRoot'

export default function HomeWidgetBase({ children }: { children: React.ReactNode }) {
  return <OverlayRoot isGreenScreen>{children}</OverlayRoot>
}
