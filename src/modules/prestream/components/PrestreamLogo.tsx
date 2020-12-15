import * as React from 'react'
import { Box } from '@resir014/chungking-react'

export default function PrestreamLogo() {
  return (
    <Box
      as="img"
      display="inline-block"
      size={64}
      m={0}
      borderRadius={64}
      border="2px solid"
      borderColor="white"
      src="/static/resir014-logo.png"
      alt="@resir014"
    />
  )
}
