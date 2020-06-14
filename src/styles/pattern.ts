import { css, keyframes } from '@emotion/core'

import { colors } from './variables'

export const flicker = keyframes`
  0% {
    background-position: 0% 50%
  }
  50% {
    background-position: 100% 50%
  }
  100% {
    background-position: 0% 50%
  }
`

export const topoPattern = css`
  background-image: linear-gradient(to right bottom, ${colors.blue}, ${colors.black});
  background-size: 400% 400%;
  animation: ${flicker} 30s ease infinite;
  z-index: 1;

  &::after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)),
      url('/static/topography.svg');
  }
`
