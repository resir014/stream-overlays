import * as React from 'react'
import { Box } from '../../foundations'

export type IframeProps = JSX.IntrinsicElements['iframe']

const Iframe: React.FC<IframeProps> = ({ title, ...rest }) => {
  return (
    <Box
      as="iframe"
      display="block"
      verticalAlign="middle"
      borderWidth={0}
      borderStyle="solid"
      title={title}
      {...rest}
    />
  )
}

export default Iframe
