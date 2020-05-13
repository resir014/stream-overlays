import * as React from 'react'
import { NextPage } from 'next'

import HomeWidgetBase from '../components/home/HomeWidgetBase'
import MainWindowBlock from '../components/main-window/MainWindowBlock'
import Inner from '../components/layout/Inner'
import { AirtableRecord } from '../interfaces/types'
import useAirtableData from '../utils/useAirtableData'

interface MainWindowProps {
  isDisplayStream?: boolean
}

const MainWindow: NextPage<MainWindowProps> = ({ isDisplayStream }) => {
  const [fetchedRecords, setRecords] = React.useState<AirtableRecord[] | undefined>(undefined)

  useAirtableData(setRecords)

  const firstRecord = fetchedRecords ? fetchedRecords[0] : undefined
  const title = firstRecord ? firstRecord.fields['Stream Name'] : undefined

  return (
    <HomeWidgetBase>
      <Inner isCentered>
        <MainWindowBlock title={title} isDisplayStream={isDisplayStream} />
      </Inner>
    </HomeWidgetBase>
  )
}

export default MainWindow
