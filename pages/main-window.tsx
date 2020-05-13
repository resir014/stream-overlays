import * as React from 'react'
import { NextPage } from 'next'

import HomeWidgetBase from '../components/home/HomeWidgetBase'
import MainWindowBlock from '../components/main-window/MainWindowBlock'
import Inner from '../components/layout/Inner'
import { AirtableRecord } from '../interfaces/types'
import useInterval from '../utils/useInterval'
import fetchAirtableData from '../utils/fetchAirtableData'

interface MainWindowProps {
  isDisplayStream?: boolean
}

const MainWindow: NextPage<MainWindowProps> = ({ isDisplayStream }) => {
  const [fetchedRecords, setRecords] = React.useState<AirtableRecord[] | undefined>(undefined)

  const fetcher = () => {
    const doFetch = async () => {
      try {
        const newRecords = await fetchAirtableData()

        setRecords(newRecords)
      } catch (err) {
        // eslint-disable-next-line
        console.error(err)
      }
    }

    doFetch()
  }

  React.useEffect(fetcher, [])

  useInterval(fetcher, 10000)

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
