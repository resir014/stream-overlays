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

  const firstRecord = fetchedRecords?.[0]
  const streamName = firstRecord?.fields['Stream Name']
  const description = firstRecord?.fields['Description']

  return (
    <PrestreamBase>
      <Inner>
        <PrestreamBlock
          streamName={streamName}
          heading="Stream ended. Thanks for watching!"
          title={streamName || 'Untitled Stream'}
          description={description}
          gradientStart={colors.red}
          gradientEnd={colors.orange}
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
