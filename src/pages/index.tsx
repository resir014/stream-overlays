import * as React from 'react'

import HomeWidgetBase from 'modules/home/HomeWidgetBase'
import HomeBlock from 'modules/home/HomeBlock'
import Inner from 'components/overlay/Inner'

export default function IndexPage() {
  return (
    <HomeWidgetBase>
      <Inner isCentered>
        <HomeBlock />
      </Inner>
    </HomeWidgetBase>
  )
}
