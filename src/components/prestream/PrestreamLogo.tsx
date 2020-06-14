import * as React from 'react'
import styled from '@emotion/styled'

const Root = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 32px;
`

const Image = styled('img')`
  display: inline-block;
  height: 80px;
`

export default function PrestreamLogo() {
  return (
    <Root>
      <Image src="/static/resir014-logotype.png" alt="@resir014" />
    </Root>
  )
}
