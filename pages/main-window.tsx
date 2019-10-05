import * as React from 'react'
import { NextPage } from 'next'

import HomeWidgetBase from '../components/home/HomeWidgetBase'
import MainWindowBlock from '../components/main-window/MainWindowBlock'
import Inner from '../components/layout/Inner'
import { AirtableRecord } from '../interfaces/types'
import useInterval from '../utils/useInterval'
import fetchAirtableData from '../utils/fetchAirtableData'

interface MainWindowProps {
  records?: AirtableRecord[]
  isWindowStream?: boolean
  errors?: Error['message']
}

const MainWindow: NextPage<MainWindowProps> = ({ records, isWindowStream }) => {
  const [fetchedRecords, setRecords] = React.useState(records)

  useInterval(() => {
    ;(async () => {
      try {
        const newRecords = await fetchAirtableData()

        setRecords(newRecords)
      } catch (err) {
        // eslint-disable-next-line
        console.error(err)
      }
    })()
  }, 15000)

  const firstRecord = fetchedRecords ? fetchedRecords[0] : undefined
  const title = firstRecord ? firstRecord.fields['Stream Name'] : undefined

  return (
    <HomeWidgetBase>
      <Inner isCentered>
        <MainWindowBlock title={title} isWindowStream={isWindowStream} />
      </Inner>
    </HomeWidgetBase>
  )
}

MainWindow.getInitialProps = async ({ query }) => {
  try {
    const records = await fetchAirtableData()

    return { records, isWindowStream: !!query.window }
  } catch (err) {
    return { errors: err.message }
  }
}

export default MainWindow
