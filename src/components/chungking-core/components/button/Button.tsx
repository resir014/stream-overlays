import * as React from 'react'
import styled from '@emotion/styled'
import { ButtonBase } from './styled'
import { ButtonProps } from './types'

const Button: React.FC<ButtonProps> = ({ id, className, style, disabled, onClick, children, ...rest }) => {
  return (
    <button id={id} type="button" className={className} style={style} onClick={onClick} disabled={disabled} {...rest}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  variant: 'secondary',
  size: 'md'
}

export default styled(Button)(ButtonBase)
