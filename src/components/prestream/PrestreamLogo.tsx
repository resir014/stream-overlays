import * as React from 'react'
import styled from '@emotion/styled'
import { colors } from 'styles/variables'

const Image = styled('img')`
  display: inline-block;
  width: 64px;
  height: 64px;
  border-radius: 64px;
  border: 2px solid ${colors.white};
`

export default function PrestreamLogo() {
  return <Image src="/static/resir014-logo.png" alt="@resir014" />
}
