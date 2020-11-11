import * as React from 'react'
import styled from '@emotion/styled'

export type ResponsiveIframeProps = React.IframeHTMLAttributes<HTMLIFrameElement>

const StyledIframe = styled('iframe')`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const ResponsiveIframe: React.FC<ResponsiveIframeProps> = ({ title, ...rest }) => {
  return <StyledIframe title={title} {...rest} />
}

export default ResponsiveIframe
