/* eslint-disable jsx-a11y/media-has-caption */
import { css } from '@emotion/core'
import * as React from 'react'

function PrestreamVideo() {
  return (
    <video
      css={css`
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 1;
      `}
      playsInline
      autoPlay
      muted
      loop
      src="/static/video/prestream-30s-20201011.webm"
    />
  )
}

export default PrestreamVideo
