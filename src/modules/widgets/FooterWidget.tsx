import * as React from 'react'
import styled from '@emotion/styled'
import { colors } from '~/styles/variables'
import FooterItemBlock from '~/components/stream-blocks/FooterItemBlock'

interface BlockFooterProps {
  hasLabels?: boolean
}

const Root = styled('footer')`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  letter-spacing: 0.05rem;
  padding: 0 8px;
  background-color: ${colors.black};
  color: ${colors.white};
`

export default function FooterWidget({ hasLabels }: BlockFooterProps) {
  if (hasLabels) {
    return (
      <Root>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr 1fr',
            gridGap: '24px',
            flex: '1 1 auto'
          }}
        >
          <FooterItemBlock title="Recent Follow" />
          <FooterItemBlock title="Recent Sub" />
          <FooterItemBlock title="Recent Donation" />
          <FooterItemBlock title="Recent Bits" />
        </div>
      </Root>
    )
  }

  return <Root />
}

FooterWidget.defaultProps = {
  hasLabels: false
}
