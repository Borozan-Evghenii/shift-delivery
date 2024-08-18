import React from 'react';

import { cn } from '@/utils/helper/clasnames';

export type TypographyTag = 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'div';
export type TypographyVariants =
  | 'paragraph-12'
  | 'paragraph-12-medium'
  | 'paragraph-12-underline'
  | 'paragraph-16'
  | 'paragraph-16-medium'
  | 'paragraph-16-underline'
  | 'paragraph-14'
  | 'paragraph-14-medium'
  | 'paragraph-14-underline'
  | 'title-h1'
  | 'title-h2'
  | 'button-medium'
  | 'button-semibold'
  | 'title-h3';

export type TypographyProps<Tag extends TypographyTag> = {
  tag?: TypographyTag;
  variant?: TypographyVariants;
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<Exclude<Tag, 'span'>>;

export const TYPOGRAPHY_TEST_IDS = {
  CHILDREN: 'typography-children',
  ITEM: 'typography-item'
};

export const Typography = <T extends TypographyTag>({
  children,
  variant = 'paragraph-16',
  tag: Tag = 'div',
  className,
  ...props
}: TypographyProps<T>) => (
  <Tag className={cn(variant, className)} {...props} data-testid={TYPOGRAPHY_TEST_IDS.ITEM}>
    <span data-testid={TYPOGRAPHY_TEST_IDS.CHILDREN}>{children}</span>
  </Tag>
);
