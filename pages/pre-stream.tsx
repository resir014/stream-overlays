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

  const firstRecord = fetchedRecords?.[0]
  const streamName = firstRecord?.fields['Stream Name']
  const description = firstRecord?.fields['Description']

  return (
    <PrestreamBase>
      <Inner>
        <PrestreamBlock
          streamName={streamName}
          heading="Stream starting soon..."
          title={streamName || 'Untitled Stream'}
          description={description}
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
