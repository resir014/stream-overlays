import { css } from '@emotion/core'
import { darken, transparentize, rgba } from 'polished'
import { colors, fonts } from '../../utils'
import { ButtonProps } from './types'

export const DisabledButtonStyles = css`
  &:disabled,
  &.disabled {
    background-color: ${transparentize(0.5, colors.grey90)};
    border-color: ${colors.grey70};
    color: ${colors.white};
    user-select: none;

    &:hover,
    &:focus {
      text-decoration: none;
    }
  }
`

const SmallButtonStyles = css`
  padding: 0 16px;
  height: 32px;
  font-size: 14px;
  line-height: 14px;
  border-radius: 6px;
`

const MediumButtonStyles = css`
  padding: 0 24px;
  height: 40px;
  font-size: 16px;
  line-height: 16px;
  border-radius: 8px;
`

const LargeButtonStyles = css`
  padding: 0 32px;
  height: 48px;
  font-size: 20px;
  line-height: 20px;
  border-radius: 10px;
`

export const GhostedButtonStyles = css`
  margin: -8px -12px;
  padding: 8px 12px;
  border-radius: 8px;

  &:not(:disabled):not(.disabled) {
    color: ${colors.white};

    &:hover,
    &:focus {
      background-color: ${transparentize(0.9, colors.white)};
    }

    &:focus,
    &:active {
      border-color: ${colors.grey70};
      box-shadow: ${rgba(colors.grey70, 0.25)} 0 0 4px 2px;
    }
  }

  &:disabled,
  &.disabled {
    color: ${darken(0.5, colors.white)};
    user-select: none;

    &:hover,
    &:focus {
      text-decoration: none;
    }
  }
`

export const PrimaryButtonStyles = css`
  &:not(:disabled):not(.disabled) {
    border-color: ${colors.blue30};
    background-color: ${colors.blue30};
    color: ${colors.white};

    &:hover,
    &:focus {
      background-color: ${transparentize(0.75, colors.blue30)};
    }

    &:focus,
    &:active {
      box-shadow: ${rgba(colors.blue30, 0.25)} 0 0 4px 2px;
    }
  }

  ${DisabledButtonStyles}
`

export const SecondaryButtonStyles = css`
  &:not(:disabled):not(.disabled) {
    border-color: ${colors.grey70};
    background-color: ${colors.grey70};
    color: ${colors.white};

    &:hover,
    &:focus {
      background-color: ${transparentize(0.75, colors.grey70)};
    }

    &:focus,
    &:active {
      box-shadow: ${rgba(colors.grey70, 0.25)} 0 0 4px 2px;
    }
  }

  ${DisabledButtonStyles}
`

export const DangerButtonStyles = css`
  &:not(:disabled):not(.disabled) {
    border-color: ${colors.red30};
    background-color: ${colors.red30};
    color: ${colors.white};

    &:hover,
    &:focus {
      background-color: ${transparentize(0.75, colors.red30)};
    }

    &:focus,
    &:active {
      box-shadow: ${rgba(colors.red30, 0.25)} 0 0 4px 2px;
    }
  }

  ${DisabledButtonStyles}
`

export const ButtonBase = (props: ButtonProps) => css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  border: none;
  border: 2px solid transparent;
  background: none;
  font-family: ${fonts.sansSerif};
  text-align: center;
  transition: all 0.3s ease;

  &:not(:disabled):not(.disabled) {
    cursor: pointer;
  }

  &:hover,
  &:focus,
  &:active {
    outline: none;
    text-decoration: none;
  }

  ${props.variant === 'primary' && !props.ghosted && PrimaryButtonStyles}
  ${props.variant === 'secondary' && !props.ghosted && SecondaryButtonStyles}
  ${props.variant ===
    'danger' &&
  !props.ghosted &&
  DangerButtonStyles}
  ${props.size === 'sm' && !props.ghosted && SmallButtonStyles};
  ${props.size === 'md' && !props.ghosted && MediumButtonStyles};
  ${props.size === 'lg' && !props.ghosted && LargeButtonStyles};
  ${props.ghosted && GhostedButtonStyles};
`
