import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { describe, test, expect } from 'vitest';

import type { TypographyProps, TypographyTag, TypographyVariants } from './Typography';
import { Typography, TYPOGRAPHY_TEST_IDS } from './Typography';

const typographyProps = {
  children: 'Рассчитать доставку'
} satisfies TypographyProps<TypographyTag>;

describe('UI / Typography', () => {
  const typographyVariants: TypographyVariants[] = [
    'paragraph-12',
    'paragraph-12-medium',
    'paragraph-12-underline',
    'paragraph-16',
    'paragraph-16-medium',
    'paragraph-16-underline',
    'paragraph-14',
    'paragraph-14-medium',
    'paragraph-14-underline',
    'title-h1',
    'title-h2',
    'button-medium',
    'button-semibold',
    'title-h3'
  ];
  const typographyTags: TypographyTag[] = ['p', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'div'];

  test('should display Component', () => {
    render(<Typography {...typographyProps} />);

    const children = screen.getByTestId(TYPOGRAPHY_TEST_IDS.CHILDREN);

    expect(children).toBeInTheDocument();
  });

  typographyVariants.forEach((variant) => {
    test(`should display ${variant} Typography variant `, () => {
      render(<Typography {...typographyProps} variant={variant} />);

      const component = screen.getByTestId(TYPOGRAPHY_TEST_IDS.ITEM);

      expect(component).toHaveClass(variant);
    });
  });

  typographyTags.forEach((tag) => {
    test(`should display ${tag} as Typography tag `, () => {
      render(<Typography {...typographyProps} tag={tag} />);

      const component = screen.getByTestId(TYPOGRAPHY_TEST_IDS.ITEM);

      expect(component.tagName).toBe(tag.toUpperCase());
    });
  });
});
