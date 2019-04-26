import * as React from 'react'

import HomeWidgetBase from '../components/home/HomeWidgetBase'
import HomeBlock from '../components/home/HomeBlock'
import Inner from '../components/layout/Inner'

export default function IndexPage() {
  return (
    <HomeWidgetBase>
      <Inner isCentered>
        <HomeBlock />
      </Inner>
    </HomeWidgetBase>
  )
}
