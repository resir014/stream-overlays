import * as React from 'react';
import { render } from '@testing-library/react';
import { FlightProgress } from '../flight-progress';

describe('components/flightsim', () => {
  describe('FlightProgress', () => {
    test('renders flight progress bar', () => {
      const { container } = render(<FlightProgress value={50} max={100} />);
      expect(container.firstChild).toBeVisible();
    });
  });
});
