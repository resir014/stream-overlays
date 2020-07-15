import * as React from 'react'
import { parseToHsl, hsl } from 'polished'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { colors } from 'styles/variables'

interface ThrottleIndicatorProps {
  axisValue?: number
  steeringDeadzone?: number
}

const orangeHsl = parseToHsl(colors.orange)

const SteeringLeft = css`
  justify-content: flex-end;
  clip-path: polygon(100% 0, 0 50%, 100% 100%);
`

const SteeringRight = css`
  justify-content: flex-start;
  clip-path: polygon(100% 50%, 0 0, 0 100%);
`

const Steering = styled('div')`
  display: flex;
  align-items: center;
  width: 100%;
  height: 96px;
  background-color: ${hsl(orangeHsl.hue, orangeHsl.saturation, orangeHsl.lightness * 0.25)};
  text-align: center;
`

const SteeringInner = styled('div')`
  background-color: ${hsl(orangeHsl.hue, orangeHsl.saturation, orangeHsl.lightness * 0.75)};
`

const SteeringIndicator: React.FC<ThrottleIndicatorProps> = ({
  axisValue,
  steeringDeadzone = 0
}) => {
  const steerLeftWidth = React.useMemo(() => {
    if (axisValue && axisValue < steeringDeadzone) {
      return Math.abs(axisValue * 100)
    }

    return 0
  }, [axisValue])

  const steerLeftRight = React.useMemo(() => {
    if (axisValue && axisValue > steeringDeadzone) {
      return Math.abs(axisValue * 100)
    }

    return 0
  }, [axisValue])

  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 16px;
        width: 100%;
        max-width: 208px;
      `}
    >
      <Steering css={SteeringLeft}>
        <SteeringInner
          css={css`
            width: ${steerLeftWidth}%;
            height: 100%;
          `}
        />
      </Steering>
      <Steering css={SteeringRight}>
        <SteeringInner
          css={css`
            width: ${steerLeftRight}%;
            height: 100%;
          `}
        />
      </Steering>
    </div>
  )
}

export default SteeringIndicator
