import * as React from 'react'

import HomeWidgetBase from '../components/home/HomeWidgetBase'
import MainWindowBlock from '../components/main-window/MainWindowBlock'
import Inner from '../components/layout/Inner'

export default function MainWindow() {
  return (
    <HomeWidgetBase>
      <Inner isCentered>
        <MainWindowBlock />
      </Inner>
    </HomeWidgetBase>
  )
}
