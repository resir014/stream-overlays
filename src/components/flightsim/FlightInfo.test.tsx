import * as React from 'react'
import { render } from '@testing-library/react'
import FlightInfo from './FlightInfo'

describe('components/flightsim', () => {
  describe('FlightInfo', () => {
    test('renders flight itinerary', () => {
      const { getByText } = render(<FlightInfo name="GSPD" value="472kts" />)
      const nameText = getByText(/GSPD/)
      const valueText = getByText(/472kts/)
      expect(nameText).toBeInTheDocument()
      expect(valueText).toBeInTheDocument()
    })
  })
})
