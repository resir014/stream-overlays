import * as React from 'react'
import styled from 'styled-components'

import PrestreamBase from '../components/prestream/PrestreamBase'
import PrestreamBlock from '../components/prestream/PrestreamBlock'

const Inner = styled('main')`
  display: flex;
  flex-direction: column;
  flex: 1;
`

export default function IndexPage() {
  return (
    <PrestreamBase>
      <Inner>
        <PrestreamBlock />
      </Inner>
    </PrestreamBase>
  )
}
