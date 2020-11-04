import * as React from 'react'
import styled from '@emotion/styled'
import classnames from 'clsx'

import { ButtonBaseProps, AnchorButtonProps } from './types'
import { ButtonBase } from './styled'

const Root = styled('a')<ButtonBaseProps>(ButtonBase)

const AnchorButton: React.ForwardRefRenderFunction<HTMLAnchorElement, AnchorButtonProps> = (
  { id, className, style, disabled, children, variant: color = 'secondary', size = 'md', ...rest },
  ref
) => {
  return (
    <Root id={id} className={classnames(className, disabled && 'disabled')} style={style} ref={ref} variant={color} size={size} {...rest}>
      {children}
    </Root>
  )
}

export default React.forwardRef(AnchorButton)
