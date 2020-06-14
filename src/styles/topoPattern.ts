import { css } from '@emotion/core'

import { colors } from './variables'

const topoPattern = css`
  background-color: ${colors.black};

  &::after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: 0.25;
    background-image: url('/static/topography.svg');
  }
`

export default topoPattern
