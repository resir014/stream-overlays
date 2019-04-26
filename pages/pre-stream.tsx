import * as React from 'react'

import PrestreamBase from '../components/prestream/PrestreamBase'
import PrestreamBlock from '../components/prestream/PrestreamBlock'
import Inner from '../components/layout/Inner'

export default function IndexPage() {
  return (
    <PrestreamBase>
      <Inner>
        <PrestreamBlock />
      </Inner>
    </PrestreamBase>
  )
}
