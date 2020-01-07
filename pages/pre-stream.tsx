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
  }, 10000)

  const firstRecord = fetchedRecords ? fetchedRecords[0] : undefined
  const no = firstRecord ? firstRecord.fields.No : undefined
  const streamName = firstRecord ? firstRecord.fields['Stream Name'] : undefined

  return (
    <PrestreamBase>
      <Inner>
        <PrestreamBlock
          no={no}
          streamName={streamName}
          backgroundColor="#000"
          gradientStart="#000"
          gradientEnd="#000"
          heading="Welcome!"
          title="Stream starting soon..."
        />
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
