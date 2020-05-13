import * as React from 'react'
import { NextPage } from 'next'

import PrestreamBase from '../components/prestream/PrestreamBase'
import Inner from '../components/layout/Inner'
import PrestreamBlock from '../components/prestream/PrestreamBlock'
import { AirtableRecord } from '../interfaces/types'
import useInterval from '../utils/useInterval'
import fetchAirtableData from '../utils/fetchAirtableData'
import { colors } from '../styles/variables'
import brbSplashes from '../utils/brbSplashes'

const BeRightBackPage: NextPage = () => {
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

  const firstRecord = fetchedRecords?.[0]
  const streamName = firstRecord?.fields['Stream Name']
  const description = firstRecord?.fields['Description']
  const date = firstRecord?.fields['Date']

  return (
    <PrestreamBase>
      <Inner>
        <PrestreamBlock
          streamName={streamName}
          heading="Please stand by..."
          title={streamName || 'Untitled Stream'}
          description={description}
          date={date}
          gradientStart={colors.blue}
          gradientEnd={colors.magenta}
          splashes={brbSplashes}
        />
      </Inner>
    </PrestreamBase>
  )
}

export default BeRightBackPage
