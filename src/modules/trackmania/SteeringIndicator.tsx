import * as React from 'react'
import { parseToHsl, hsl } from 'polished'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { colors } from '~/styles/variables'
import { SteeringValues } from '~/interfaces/trackmania'

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
  height: 100%;
`

const SteeringIndicator: React.FC<ThrottleIndicatorProps> = ({
  axisValue,
  steeringDeadzone = 0
}) => {
  const steerWidths = React.useMemo<SteeringValues>(() => {
    if (axisValue) {
      return {
        left: axisValue <= steeringDeadzone ? Math.abs(axisValue * 100) : 0,
        right: axisValue >= steeringDeadzone ? Math.abs(axisValue * 100) : 0
      }
    }

    return { left: 0, right: 0 }
  }, [axisValue])

  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 16px;
        width: 100%;
        max-width: 204px;
      `}
    >
      <Steering css={SteeringLeft}>
        <SteeringInner
          style={{
            width: `${steerWidths.left}%`
          }}
        />
      </Steering>
      <Steering css={SteeringRight}>
        <SteeringInner
          css={{
            width: `${steerWidths.right}%`
          }}
        />
      </Steering>
    </div>
  )
}

export default SteeringIndicator
