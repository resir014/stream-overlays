import * as React from 'react'

export type ButtonVariant = 'primary' | 'secondary' | 'danger'

export interface ButtonBaseProps {
  id?: string
  className?: string
  style?: React.CSSProperties
  variant?: ButtonVariant
  size?: 'sm' | 'md' | 'lg'
  ghosted?: boolean
  disabled?: boolean
}

export type ButtonProps = ButtonBaseProps & React.ButtonHTMLAttributes<HTMLButtonElement>
export type AnchorButtonProps = ButtonBaseProps & React.AnchorHTMLAttributes<HTMLAnchorElement>
