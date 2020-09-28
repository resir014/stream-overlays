import * as React from 'react'
import styled from '@emotion/styled'

export type IframeProps = React.IframeHTMLAttributes<HTMLIFrameElement>

const StyledIframe = styled('iframe')`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const Iframe: React.FC<IframeProps> = ({ title, ...rest }) => {
  return <StyledIframe title={title} {...rest} />
}

export default Iframe
