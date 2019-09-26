import styled from 'styled-components'

interface BlockHeaderProps {
  small?: boolean
}

const BlockHeader = styled('header')<BlockHeaderProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  text-transform: lowercase;
  letter-spacing: 0.05rem;
`

export default BlockHeader
