import * as React from 'react'
import { NextPage } from 'next'

import PrestreamBase from '../components/prestream/PrestreamBase'
import Inner from '../components/layout/Inner'
import PrestreamBlock from '../components/prestream/PrestreamBlock'
import { AirtableRecord } from '../interfaces/types'
import useInterval from '../utils/useInterval'
import fetchAirtableData from '../utils/fetchAirtableData'
import { colors } from '../styles/variables'
import endCardSplashes from '../utils/endCardSplashes'

interface BeRightBackPageProps {
  records?: AirtableRecord[]
  errors?: Error['message']
}

const EndScreenPage: NextPage<BeRightBackPageProps> = ({ records }) => {
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
  const streamName = firstRecord ? firstRecord.fields['Stream Name'] : undefined

  return (
    <PrestreamBase>
      <Inner>
        <PrestreamBlock
          no={no}
          streamName={streamName}
          heading="Thanks for watching!"
          title="Stream has ended."
          backgroundColor="#000"
          gradientStart="#000"
          gradientEnd="#000"
          splashes={endCardSplashes}
        />
      </Inner>
    </PrestreamBase>
  )
}

EndScreenPage.getInitialProps = async () => {
  try {
    const records = await fetchAirtableData()

    return { records }
  } catch (err) {
    return { errors: err.message }
  }
}

export default EndScreenPage
