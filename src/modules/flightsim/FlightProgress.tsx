import styled from '@emotion/styled'
import { colors } from '../../components/chungking-core'

const FlightProgress = styled('progress')`
  @supports (-webkit-appearance: none) {
    &[value] {
      /* Reset the default appearance */
      -webkit-appearance: none;
      appearance: none;

      width: 100%;
      height: 4px;

      ::-webkit-progress-bar {
        background-color: #fff;
      }

      ::-webkit-progress-value {
        background-color: ${colors.blue[500]};
      }
    }
  }
`

export default FlightProgress
