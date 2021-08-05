import * as React from 'react';
import { render } from '@testing-library/react';
import OverlayWrapper from '../OverlayWrapper';

describe('components/flightsim', () => {
  describe('OverlayWrapper', () => {
    test('renders overlay wrapper', () => {
      const { container } = render(<OverlayWrapper>test</OverlayWrapper>);
      expect(container.firstChild).toBeInTheDocument();
    });
  });
});
