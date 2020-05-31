import styled from 'styled-components'

const OverlayWrapper = styled('div')`
  display: flex;
  flex-direction: row;
  padding: 8px;

  > section {
    margin-right: 8px;

    &:last-of-type {
      margin-right: 0;
    }
  }
`

export default OverlayWrapper
