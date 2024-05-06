import * as React from 'react';
import { render } from '@testing-library/react';
import { FlightItinerary } from '../flight-itinerary';

describe('components/flightsim', () => {
  describe('FlightItinerary', () => {
    test('renders flight itinerary', () => {
      const { getByText } = render(<FlightItinerary origin="WIII" destination="WMKK" />);
      const itineraryText = getByText(/WIII -> WMKK/);
      expect(itineraryText).toBeVisible();
    });
  });
});
