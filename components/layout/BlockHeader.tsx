import styled, { css } from 'styled-components'

interface BlockHeaderProps {
  isFrame?: boolean
}

const fullScreenStyles = css`
  padding: 8px;
`

const frameStyles = css`
  height: 40px;
  padding: 0 8px;
`

const BlockHeader = styled('header')<BlockHeaderProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  letter-spacing: 0.05rem;

  ${props => (props.isFrame ? frameStyles : fullScreenStyles)};
`

export default BlockHeader
