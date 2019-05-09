import * as React from 'react'

import HomeWidgetBase from '../components/home/HomeWidgetBase'
import MainWidgetBlock from '../components/main-widget/MainWidgetBlock'
import Inner from '../components/layout/Inner'

export default function MainWindow() {
  return (
    <HomeWidgetBase>
      <Inner isCentered>
        <MainWidgetBlock />
      </Inner>
    </HomeWidgetBase>
  )
}
