/* eslint-disable import/no-extraneous-dependencies */
import { css } from '@emotion/react'
import { theme } from '@resir014/chungking-react'

const OverlayGlobal = css`
  html,
  body {
    color: ${theme.colors.grey[900]};
    background-color: transparent;
  }
`

export default OverlayGlobal
