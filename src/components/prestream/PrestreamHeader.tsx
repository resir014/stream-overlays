/* eslint-disable react/jsx-no-comment-textnodes */
import * as React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import format from 'date-fns/format'
import { useStreamSchedule } from 'utils/useCurrentStream'
import PrestreamLogo from './PrestreamLogo'

interface PrestreamHeaderInnerProps {
  right?: boolean
}

const Root = styled('header')`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 24px 48px 0;
  letter-spacing: 0.05rem;
`

export const PrestreamHeaderInner = styled('div')<PrestreamHeaderInnerProps>`
  text-align: ${props => (props.right ? 'right' : 'left')};
`

const PrestreamTitle = styled('h1')`
  margin: 0;
  font-size: 24px;
  line-height: 32px;
  font-weight: 600;

  strong {
    font-weight: 700;
  }

  span {
    font-weight: 400;
  }
`

export const HeaderSub = styled('h2')`
  margin: 0;
  font-size: 24px;
  line-height: 32px;
  font-weight: 400;
`

export default function PrestreamHeader() {
  const { schedule } = useStreamSchedule()

  return (
    <Root>
      <PrestreamHeaderInner
        css={css`
          display: flex;
          flex-direction: row;
        `}
      >
        <PrestreamLogo />
        <div
          css={css`
            margin-left: 24px;
          `}
        >
          <PrestreamTitle>
            <strong>
              {schedule && <>{format(Date.parse(schedule.date), 'yyyy.MM.dd')} — </>}
              {schedule ? schedule.streamName : 'Untitled Stream'}
            </strong>
          </PrestreamTitle>
          <HeaderSub>{schedule ? schedule.description : 'No description given.'}</HeaderSub>
        </div>
      </PrestreamHeaderInner>
    </Root>
  )
}

PrestreamHeader.defaultProps = {
  title: undefined,
  date: undefined,
  subtitle: undefined
}
