import styled from 'styled-components'

interface BlockHeaderProps {
  small?: boolean
}

const BlockHeader = styled('header')<BlockHeaderProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  padding: 0 8px;
  letter-spacing: 0.05rem;
`

export default BlockHeader
