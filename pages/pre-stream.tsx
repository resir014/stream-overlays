import * as React from 'react'
import { NextPage } from 'next'

import PrestreamBase from '../components/prestream/PrestreamBase'
import PrestreamBlock from '../components/prestream/PrestreamBlock'
import Inner from '../components/layout/Inner'
import { AirtableRecord } from '../interfaces/types'
import fetchAirtableData from '../utils/fetchAirtableData'
import useInterval from '../utils/useInterval'

interface PrestreamPageProps {
  records?: AirtableRecord[]
  errors?: Error['message']
}

const PrestreamPage: NextPage<PrestreamPageProps> = ({ records }) => {
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
  const no = firstRecord ? firstRecord.fields.No : undefined
  const title = firstRecord ? firstRecord.fields['Stream Name'] : undefined
  const date = firstRecord ? firstRecord.fields.Date : undefined
  const description = firstRecord ? firstRecord.fields.Description : undefined

  return (
    <PrestreamBase>
      <Inner>
        <PrestreamBlock no={no} title={title} date={date} description={description} />
      </Inner>
    </PrestreamBase>
  )
}

PrestreamPage.getInitialProps = async () => {
  try {
    const records = await fetchAirtableData()

    return { records }
  } catch (err) {
    return { errors: err.message }
  }
}

export default PrestreamPage
