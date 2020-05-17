import * as React from 'react'
import { NextPage, GetServerSidePropsContext } from 'next'

import HomeWidgetBase from 'components/home/HomeWidgetBase'
import MainWindowBlock from 'components/main-window/MainWindowBlock'
import Inner from 'components/layout/Inner'
import { AirtableRecord } from 'interfaces/types'
import { useAirtableData, fetchAirtableData } from 'utils/useAirtableData'

interface MainWindowProps {
  initialData?: AirtableRecord[]
  errors?: Error['message']
  isDisplayStream?: boolean
}

const MainWindow: NextPage<MainWindowProps> = ({ initialData, isDisplayStream }) => {
  const fetchedRecords = useAirtableData(initialData)

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

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
  const initialData = await fetchAirtableData()
  return { props: { initialData, isDisplayStream: !!query.window || !!query.isDisplayStream } }
}

export default MainWindow
