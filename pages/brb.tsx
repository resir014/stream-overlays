import * as React from 'react'
import { NextPage } from 'next'

import PrestreamBase from '../components/prestream/PrestreamBase'
import Inner from '../components/layout/Inner'
import PrestreamBlock from '../components/prestream/PrestreamBlock'
import { AirtableRecord, AirtableData } from '../interfaces/types'

interface BeRightBackPageProps {
  records?: AirtableRecord[]
  errors?: Error['message']
}

const BeRightBackPage: NextPage<BeRightBackPageProps> = ({ records }) => {
  const firstRecord = records ? records[0] : undefined
  const no = firstRecord ? firstRecord.fields['No'] : undefined
  const title = firstRecord ? firstRecord.fields['Stream Name'] : undefined
  const date = firstRecord ? firstRecord.fields['Date'] : undefined
  const description = firstRecord ? firstRecord.fields['Description'] : undefined

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

export default BeRightBackPage
