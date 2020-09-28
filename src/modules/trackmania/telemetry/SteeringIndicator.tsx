import * as React from 'react'
import { parseToHsl, hsl } from 'polished'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { SteeringValues } from '~/interfaces/trackmania'
import { Box, colors } from '~/components/chungking-core'
import useGamepad from '~/utils/useGamepad'

interface ThrottleIndicatorProps {
  steeringDeadzone?: number
}

const orangeHsl = parseToHsl(colors.orange30)

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

const SteeringIndicator: React.FC<ThrottleIndicatorProps> = ({ steeringDeadzone = 0 }) => {
  const { controllerData } = useGamepad()

  const steerWidths = React.useMemo<SteeringValues>(() => {
    const axisValue = controllerData?.steering

    if (axisValue) {
      return {
        left: axisValue <= steeringDeadzone ? Math.abs(axisValue * 100) : 0,
        right: axisValue >= steeringDeadzone ? Math.abs(axisValue * 100) : 0
      }
    }

    return { left: 0, right: 0 }
  }, [controllerData])

  return (
    <Box display="grid" gridTemplateColumns="1fr 1fr" gridGap="md" width="100%" maxWidth={204}>
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
    </Box>
  )
}

export default SteeringIndicator
