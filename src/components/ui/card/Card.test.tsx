import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { describe, test, expect } from 'vitest';

import { Card, CARD_TEST_ID } from './Card';

describe('UI / Card', () => {
  test('should display Card in the document', () => {
    render(<Card />);

    const container = screen.getByTestId(CARD_TEST_ID.CONTAINER);

    expect(container).toBeInTheDocument();
  });
  test('should display Card fill variant', () => {
    render(<Card variant='filled' />);

    const container = screen.getByTestId(CARD_TEST_ID.CONTAINER);

    expect(container.classList).toContain('bg-secondary');
  });
  test('should display Card outline variant', () => {
    render(<Card variant='outline' />);

    const container = screen.getByTestId(CARD_TEST_ID.CONTAINER);

    expect(container.classList).toContain('bg-primary');
  });
});
