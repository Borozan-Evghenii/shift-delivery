import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { describe, test, expect } from 'vitest';

import { Input, INPUT_TEST_ID } from './Input';

describe('UI /Input', () => {
  test('should display input withoth label and help text', () => {
    render(<Input />);

    const container = screen.getByTestId(INPUT_TEST_ID.CONTAINER);
    const input = screen.getByTestId(INPUT_TEST_ID.INPUT);

    expect(container).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  test('should display input label', () => {
    render(<Input label='Label' />);

    const label = screen.getByTestId(INPUT_TEST_ID.LABEL);

    expect(label).toBeInTheDocument();
    expect(label.innerHTML).toBe('Label');
  });

  test('should display input help text', () => {
    render(<Input helpText='Hint message goes here' />);

    const helpText = screen.getByTestId(INPUT_TEST_ID.HELP_TEXT);

    expect(helpText).toBeInTheDocument();
    expect(helpText.innerHTML).toBe('Hint message goes here');
  });
});

// label transmis -> daca este si daca prezinta valoarea transmisa
// label default -> daca este
// input -> daca este
// helpText -> daca este si daca prezinta valoarea transmisa
