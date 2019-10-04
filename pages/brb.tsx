import * as React from 'react'
import { NextPage } from 'next'

import PrestreamBase from '../components/prestream/PrestreamBase'
import Inner from '../components/layout/Inner'
import PrestreamBlock from '../components/prestream/PrestreamBlock'
import { AirtableRecord } from '../interfaces/types'
import useInterval from '../utils/useInterval'
import fetchAirtableData from '../utils/fetchAirtableData'

interface BeRightBackPageProps {
  records?: AirtableRecord[]
  errors?: Error['message']
}

const BeRightBackPage: NextPage<BeRightBackPageProps> = ({ records }) => {
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
        <PrestreamBlock
          customHeader="Be right back..."
          no={no}
          title={title}
          date={date}
          description={description}
        />
      </Inner>
    </PrestreamBase>
  )
}

BeRightBackPage.getInitialProps = async () => {
  try {
    const records = await fetchAirtableData()

    return { records }
  } catch (err) {
    return { errors: err.message }
  }
}

export default BeRightBackPage
