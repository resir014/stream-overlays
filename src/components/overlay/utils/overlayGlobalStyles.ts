/* eslint-disable import/no-extraneous-dependencies */
import { css } from '@emotion/react'
import { colors } from '@resir014/chungking-react'

const overlayGlobalStyles = css`
  html,
  body {
    color: ${colors.grey[900]};
    background-color: transparent;
  }
`

export default overlayGlobalStyles
