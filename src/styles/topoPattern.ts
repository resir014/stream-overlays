import { css } from '@emotion/react'
import { colors } from '@resir014/chungking-react'

const topoPattern = css`
  background-color: ${colors.black};

  &::after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: 0.2;
    background-image: url('/static/topography.svg');
  }
`

export default topoPattern
