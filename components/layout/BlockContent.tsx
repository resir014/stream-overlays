import styled from 'styled-components'
import { fonts } from '../../styles/variables'

const BlockContent = styled('section')`
  display: flex;
  flex-direction: row;
  flex: 1;
  width: 100%;
  margin: 0 -24px;
  padding: 48px 24px 0;
  font-size: 24px;

  h1 {
    margin: 0;
    font-size: 36px;
    line-height: 42px;
    font-weight: 400;
    text-transform: uppercase;
  }

  h2 {
    margin-top: 0;
    margin-bottom: 32px;
    font-size: 96px;
    line-height: 104px;
    font-weight: 600;
    text-transform: uppercase;
  }

  p {
    margin: 8px 0;
    font-family: ${fonts.serif};
    font-size: 32px;
    line-height: 40px;
  }
`

export default BlockContent
