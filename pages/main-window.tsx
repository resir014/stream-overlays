import * as React from 'react'
import { NextPage } from 'next'

import HomeWidgetBase from '../components/home/HomeWidgetBase'
import MainWindowBlock from '../components/main-window/MainWindowBlock'
import Inner from '../components/layout/Inner'
import { AirtableData, AirtableRecord } from '../interfaces/types'

interface MainWindowProps {
  records?: AirtableRecord[]
  errors?: Error['message']
}

const MainWindow: NextPage<MainWindowProps> = ({ records }) => {
  const firstRecord = records ? records[0] : undefined
  const title = firstRecord ? firstRecord.fields['Stream Name'] : undefined

  return (
    <HomeWidgetBase>
      <Inner isCentered>
        <MainWindowBlock title={title} />
      </Inner>
    </HomeWidgetBase>
  )
}

MainWindow.getInitialProps = async () => {
  try {
    const apiKey = process.env.AIRTABLE_API_KEY

    const { records }: AirtableData = await fetch(
      'https://api.airtable.com/v0/appGvPegCJWtb4nSp/Streams?maxRecords=3&view=Grid%20view',
      {
        headers: {
          Authorization: `Bearer ${apiKey}`
        }
      }
    ).then(res => res.json())

    return { records }
  } catch (err) {
    return { errors: err.message }
  }
}

export default MainWindow
