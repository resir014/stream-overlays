import * as React from 'react'
import styled from 'styled-components'
import { format } from 'date-fns'

import OnscreenBase from '../components/onscreen/OnscreenBase'
import { colors } from '../styles/variables'
import useClock from '../utils/useClock'

const Inner = styled('main')`
  display: flex;
  flex-direction: column;
  flex: 1;
`

const TestBlock = styled('section')`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  min-width: 450px;
  font-size: 24px;
  background-color: ${colors.grey90};
  color: ${colors.grey10};
`

const BlockHeader = styled('header')`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 24px;
  height: 96px;
  border-bottom: 4px solid ${colors.cyan};
  background-color: ${colors.black};
  text-transform: uppercase;
  letter-spacing: 0.1rem;
`

const ContentBlock = styled('section')`
  padding: 24px;
  font-size: 24px;

  h1 {
    margin-top: 0;
    margin-bottom: 0.25rem;
  }

  p {
    margin-bottom: 1rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`

const HeaderDate = styled('h1')`
  margin: 0;
  font-size: 24px;
  line-height: 32px;
  font-weight: 400;

  span {
    margin-right: 16px;
    font-weight: 600;
  }
`

const HeaderTime = styled('h2')`
  margin: 0;
  font-size: 24px;
  line-height: 32px;
  color: ${colors.cyan};
  font-weight: 400;
`

export default function IndexPage() {
  const time = useClock()

  return (
    <OnscreenBase>
      <Inner>
        <TestBlock>
          <BlockHeader>
            <div>
              <HeaderDate>
                <span>{format(time, 'dddd')}</span> {format(time, 'DD MMMM YYYY')}
              </HeaderDate>
              <HeaderTime>{format(time, 'HH:mm:ss')}</HeaderTime>
            </div>
          </BlockHeader>
          <ContentBlock>
            <h1>&nbsp;</h1>
            <p>&nbsp;</p>
          </ContentBlock>
        </TestBlock>
      </Inner>
    </OnscreenBase>
  )
}
