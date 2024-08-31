import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import { cn } from '@/utils/helper/clasnames';

interface CardProps extends React.HTMLAttributes<'div'>, VariantProps<typeof cardVariant> {
  variant?: 'outline' | 'filled';
}

const cardVariant = cva(
  ['px-12 py-6 border rounded-3xl gap-6 items-start justify-start flex w-full'],
  {
    variants: {
      variant: {
        outline: 'border-extralight bg-primary',
        filled: 'border-extralight bg-secondary'
      }
    }
  }
);

export const CARD_TEST_ID = {
  CONTAINER: 'card-container'
};

export const Card = ({ variant = 'filled', children }: CardProps) => (
  <div className={cn(cardVariant({ variant }))} data-testid={CARD_TEST_ID.CONTAINER}>
    {children}
  </div>
);
