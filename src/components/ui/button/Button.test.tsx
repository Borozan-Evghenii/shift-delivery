import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { describe, test, expect } from 'vitest';

import type { ButtonProps } from './Button';
import { Button, BUTTON_TEST_IDS } from './Button';

const buttonProps = {
  children: 'Some Text'
} satisfies ButtonProps;

describe('UI /Button', () => {
  test('should display button', () => {
    render(<Button {...buttonProps} />);

    const container = screen.getByTestId(BUTTON_TEST_IDS.CONTAINER);

    expect(container).toBeInTheDocument();
  });
  test('should display button children when provided', () => {
    render(<Button {...buttonProps} />);

    const children = screen.getByTestId(BUTTON_TEST_IDS.CHILDREN);

    expect(children).toBeInTheDocument();
  });
});
