import * as CheckBoxPrimitive from '@radix-ui/react-checkbox';
import React from 'react';

import { cn } from '@/utils/helper/clasnames';

const CheckBoxRoot = React.forwardRef<
  React.ElementRef<typeof CheckBoxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckBoxPrimitive.Root>
>(({ children, className }, ref) => (
  <CheckBoxPrimitive.Root
    ref={ref}
    className={cn(
      'flex h-[20px] w-[20px] items-center justify-center rounded-full border-[1.5px] border-light bg-transparent',
      'data-[state=checked]:border-indicator-focused data-[state=checked]:bg-brand data-[state=checked]:text-white',
      'data-[state=disabled]:cursor-not-allowed',
      className
    )}
  >
    {children}
  </CheckBoxPrimitive.Root>
));

export const CheckBox = {
  Root: CheckBoxRoot,
  Indicator: CheckBoxPrimitive.Indicator
};
